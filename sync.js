/* ============ CLOUD SYNC (optional) ============
 Plain REST calls to Firebase Auth + Firestore, no SDK. Fill in FIREBASE_CONFIG
 below with your own free Firebase project's values (see README/chat for setup
 steps) to enable email/password login and cross-device sync. Leave it empty
 and the app behaves exactly as before: local-only, no network calls. */
const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyDip91TlRK1LDP0BCXIHs9YPlndsh3uUxw',
  projectId: 'dutch-a2-d2371',
};
const AUTH_KEY = 'nl-a2-auth';
const syncEnabled = () => !!FIREBASE_CONFIG.apiKey && !!FIREBASE_CONFIG.projectId;

let auth = null; // {idToken, refreshToken, uid, email, expiresAt}
function loadAuth(){ try{ auth = JSON.parse(localStorage.getItem(AUTH_KEY)); }catch(e){ auth = null; } }
function saveAuth(){ try{ auth ? localStorage.setItem(AUTH_KEY, JSON.stringify(auth)) : localStorage.removeItem(AUTH_KEY); }catch(e){} }

async function authRequest(path, body){
  const r = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:${path}?key=${FIREBASE_CONFIG.apiKey}`, {
    method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)
  });
  const data = await r.json();
  if(!r.ok) throw new Error(data.error && data.error.message || 'Auth error');
  return data;
}
async function refreshIdToken(){
  const r = await fetch(`https://securetoken.googleapis.com/v1/token?key=${FIREBASE_CONFIG.apiKey}`, {
    method:'POST', headers:{'Content-Type':'application/x-www-form-urlencoded'},
    body:`grant_type=refresh_token&refresh_token=${encodeURIComponent(auth.refreshToken)}`
  });
  const data = await r.json();
  if(!r.ok) throw new Error('Could not refresh session');
  auth = {...auth, idToken:data.access_token, refreshToken:data.refresh_token, expiresAt: Date.now()+(+data.expires_in*1000)};
  saveAuth();
}
async function ensureFreshToken(){
  if(!auth) return;
  if(Date.now() > auth.expiresAt - 2*MIN) await refreshIdToken();
}

async function authSignUp(){
  if(!syncEnabled()) return toast('Cloud sync is not set up yet');
  const email = syncEmail.value.trim(), password = syncPassword.value;
  if(!email || password.length<6) return toast('Enter an email and a password of at least 6 characters');
  try{
    const data = await authRequest('signUp', {email, password, returnSecureToken:true});
    onAuthed(data);
    await pushCloud(); // brand-new account: cloud starts as this device's local progress
    toast('Account created, synced!');
  }catch(e){ toast(e.message); }
}
async function authSignIn(){
  if(!syncEnabled()) return toast('Cloud sync is not set up yet');
  const email = syncEmail.value.trim(), password = syncPassword.value;
  if(!email || !password) return toast('Enter your email and password');
  try{
    const data = await authRequest('signInWithPassword', {email, password, returnSecureToken:true});
    onAuthed(data);
    await resolveCloudVsLocal();
    toast('Logged in!');
  }catch(e){ toast(e.message); }
}
function authSignOut(){ auth=null; saveAuth(); renderSyncUI(); toast('Logged out (progress stays on this device)'); }
function onAuthed(data){
  auth = {idToken:data.idToken, refreshToken:data.refreshToken, uid:data.localId, email:data.email, expiresAt: Date.now()+(+data.expiresIn*1000)};
  saveAuth(); renderSyncUI();
}

/* Firestore: one document per user at progress/{uid}, a single JSON blob field */
async function firestoreGet(){
  await ensureFreshToken();
  const r = await fetch(`https://firestore.googleapis.com/v1/projects/${FIREBASE_CONFIG.projectId}/databases/(default)/documents/progress/${auth.uid}`,
    {headers:{Authorization:`Bearer ${auth.idToken}`}});
  if(r.status===404) return null;
  if(!r.ok) throw new Error('Could not reach cloud sync');
  const doc = await r.json();
  return JSON.parse(doc.fields.data.stringValue);
}
async function firestoreSet(data){
  await ensureFreshToken();
  const body = {fields:{data:{stringValue: JSON.stringify(data)}, updatedAt:{timestampValue: new Date().toISOString()}}};
  const r = await fetch(`https://firestore.googleapis.com/v1/projects/${FIREBASE_CONFIG.projectId}/databases/(default)/documents/progress/${auth.uid}`,
    {method:'PATCH', headers:{Authorization:`Bearer ${auth.idToken}`, 'Content-Type':'application/json'}, body: JSON.stringify(body)});
  if(!r.ok) throw new Error('Could not save to cloud sync');
}
async function pushCloud(){ if(auth) try{ await firestoreSet(S); }catch(e){ /* best-effort, stays local */ } }
async function resolveCloudVsLocal(){
  try{
    const cloud = await firestoreGet();
    if(!cloud){ await pushCloud(); return; } // nothing in the cloud yet: push this device's progress up
    const localHasProgress = Object.keys(S.words||{}).some(id=>S.words[id].stage>0);
    if(!localHasProgress){ S = cloud; save(); renderHome(); return; } // empty device: just take the cloud copy
    if(confirm('This account already has saved progress from another device. Load it here and replace this device’s progress? (Cancel keeps what’s on this device and overwrites the cloud with it instead.)')){
      S = cloud; save(); renderHome();
    } else {
      await pushCloud();
    }
  }catch(e){ toast(e.message); }
}

/* debounce: push a few seconds after the last local change, not on every single save() */
let pushTimer = null;
const _origSave = save;
save = function(){ _origSave(); if(auth){ clearTimeout(pushTimer); pushTimer = setTimeout(pushCloud, 3000); } };

function renderSyncUI(){
  if(!document.getElementById('syncPanel')) return;
  if(!syncEnabled()){
    syncPanel.innerHTML = `<p class="muted" style="margin:0">Cloud sync isn't set up for this app yet — ask whoever runs this app to configure it. Until then, use Export/Import below to move progress between devices.</p>`;
    return;
  }
  if(auth){
    syncPanel.innerHTML = `<p style="margin:0 0 10px">Synced as <b>${esc(auth.email)}</b></p><button onclick="authSignOut()">Log out</button>`;
  } else {
    syncPanel.innerHTML = `
      <input type="email" id="syncEmail" placeholder="Email" style="margin-bottom:8px"><br>
      <input type="password" id="syncPassword" placeholder="Password (min 6 characters)" style="margin-bottom:10px"><br>
      <div class="actions"><button onclick="authSignIn()">Log in</button><button class="primary" onclick="authSignUp()">Sign up</button></div>`;
  }
}

loadAuth();
(async function initSync(){
  if(!syncEnabled() || !auth) return;
  try{ await ensureFreshToken(); await resolveCloudVsLocal(); }catch(e){ /* stay local-only on any failure */ }
})();
const _origRenderSettings = renderSettings;
renderSettings = function(){ _origRenderSettings(); renderSyncUI(); };
