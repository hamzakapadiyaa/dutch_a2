/* ============ EXAM TRAINER ============
 Uses globals from index.html: S, save, speak, esc, shuffle, show, toast, today, fmtMin, MIN
 S.exam = { results: {lezen:[{t,score,total,mock}]...}, items: {id:{ok,bad}} } */
const E = window.EXAM;
let ex = null, timerIv = null;

function examState(){ S.exam ||= {results:{}, items:{}}; return S.exam; }

/* Flatten each part into question items with stable ids. */
function itemsFor(key){ return itemsRaw(key).map(it=>({kind:key, ...it})); }
function itemsRaw(key){
  if(key==='lezen') return E.lezen.flatMap((t,ti)=>t.qs.map((q,qi)=>({id:`l${ti}.${qi}`, ctx:t, ...q})));
  if(key==='luisteren') return E.luisteren.flatMap((t,ti)=>t.qs.map((q,qi)=>({id:`h${ti}.${qi}`, ctx:t, ...q})));
  if(key==='knm') return E.knm.map((q,i)=>({id:`k${i}`, ...q}));
  if(key==='schrijven') return E.schrijven.map((t,i)=>({id:`w${i}`, ...t}));
  if(key==='spreken') return E.spreken.map((t,i)=>({id:`s${i}`, ...t}));
}
// adaptive order: items you got wrong (or never saw) come first
function prioritise(list){
  const st = examState().items;
  const score = it => { const s = st[it.id]; return !s ? 1 : (s.bad+1)/(s.ok+s.bad+2); };
  return shuffle(list).sort((a,b)=>score(b)-score(a));
}

/* ---------- curriculum: start easy, ramp up to full exam difficulty ----------
 Course items (tagged with a NiG chapter 1-16) scaffold a topic; standalone items
 (no chapter) are genuine exam-level, so they rank hardest. Practice mode only
 unlocks items up to a ceiling that rises with your best recent score; mock exams
 are never filtered, since those should always be the real, full-difficulty thing. */
const chOf = it => { if(it.ch) return +String(it.ch).replace(/\D/g,''); const m = /^NiG (\d+)/.exec(it.title || (it.ctx&&it.ctx.title) || ''); return m ? +m[1] : 0; };
const MAX_DIFF = 17; // chapters 1-16, +1 tier for standalone exam-level items
function difficultyOf(it){ const c = chOf(it); return c>0 ? c : MAX_DIFF; }
function levelFor(key){
  const r = examState().results[key]||[];
  return r.length ? r.slice(0,5).reduce((m,x)=>Math.max(m, x.score/x.total), 0) : 0;
}
function difficultyCeiling(key){ return Math.min(MAX_DIFF, 3 + Math.round(levelFor(key)*(MAX_DIFF-1))); }
function curriculumFilter(items, key){
  const ceiling = difficultyCeiling(key);
  const within = items.filter(it=>difficultyOf(it)<=ceiling);
  return within.length ? within : items;
}

/* ---------- overview ---------- */
function renderExam(){
  const st = examState();
  examParts.innerHTML = E.info.map(p=>{
    const r = st.results[p.key]||[], last = r[0], best = r.reduce((m,x)=>Math.max(m, x.score/x.total), 0);
    const ready = Math.round(100*best);
    const ceiling = difficultyCeiling(p.key);
    return `<div class="panel" style="margin-bottom:10px">
      <div class="flex" style="justify-content:space-between"><b style="font-size:1.1rem">${p.icon} ${p.name}</b><span class="pill">${p.time} min</span></div>
      <p class="muted" style="margin:8px 0">${p.fmt}</p>
      <div class="muted" style="font-size:.8rem;margin-bottom:8px">📈 Practice ramps up: ${ceiling>=MAX_DIFF?'full exam level unlocked':`up to chapter ${ceiling} level`}</div>
      ${r.length?`<div class="flex" style="justify-content:space-between;font-size:.85rem"><span>Best ${ready}% · last ${Math.round(100*last.score/last.total)}% · ${r.length} attempts</span><span class="${ready>=70?'ok':'muted'}">${ready>=70?'✓ on track':'goal ≥ 70%'}</span></div>
        <div class="bar" style="margin:6px 0 10px"><i style="width:${ready}%;background:${ready>=70?'var(--ok)':'var(--acc)'}"></i></div>`:''}
      <div class="flex"><button class="primary" style="flex:1" onclick="startExam('${p.key}',false)">Practise</button>
      ${['lezen','luisteren','knm'].includes(p.key)?`<button style="flex:1" onclick="startExam('${p.key}',true)">⏱ Timed mock</button>`:''}</div>
    </div>`;
  }).join('');
  examTips.innerHTML = E.tips.map(t=>`<li style="margin-bottom:6px">${esc(t)}</li>`).join('');
  renderPlan();
}

/* 6-week plan: each day = words topic + one exam skill. Ticks are stored. */
function renderPlan(){
  const st = examState(); st.plan ||= {};
  const topics = Object.keys(window.WORDS), skills = ['lezen','luisteren','schrijven','spreken','knm'];
  const names = {lezen:'📖 Lezen',luisteren:'🎧 Luisteren',schrijven:'✍️ Schrijven',spreken:'🗣️ Spreken',knm:'🏛️ KNM'};
  let html='';
  for(let wk=0; wk<6; wk++){
    html += `<details ${wk===0?'open':''}><summary style="cursor:pointer;padding:8px 0"><b>Week ${wk+1}</b> <span class="muted">${wk<4?'build vocabulary + skills':wk===4?'mock exams':'final review'}</span></summary>`;
    for(let d=0; d<5; d++){
      const n = wk*5+d, id='p'+n, topic = topics[n % topics.length];
      const skill = wk===5 ? skills[d] : skills[(n) % 5];
      const task = wk===4 ? `Timed mock: ${names[skill]}` : wk===5 ? `${names[skill]}: redo your weak items` : `Words: <i>${esc(topic)}</i> + ${names[skill]}`;
      html += `<label class="wrow" style="cursor:pointer"><span><input type="checkbox" style="width:auto;margin-right:8px" ${st.plan[id]?'checked':''} onchange="examState().plan['${id}']=this.checked;save()">Day ${d+1}: ${task}</span>
        <button onclick="event.preventDefault();${wk===4&&skill!=='schrijven'&&skill!=='spreken'?`startExam('${skill}',true)`:`startSession({topic:${esc(JSON.stringify(topic))}})`}" style="padding:4px 10px;font-size:.8rem">Go</button></label>`;
    }
    html += '</details>';
  }
  examPlan.innerHTML = html;
}

/* ---------- runner ---------- */
function startExam(key, mock){
  let items = itemsFor(key);
  if(!mock) items = curriculumFilter(items, key); // practice ramps up; mock stays full exam difficulty
  if(key==='lezen' || key==='luisteren'){
    // keep questions of one text together; pick texts by priority
    const groups = {}; items.forEach(i=>(groups[i.ctx.title] ||= []).push(i));
    let g = Object.values(groups);
    const st = examState().items, gs = arr => arr.reduce((s,i)=>{ const x=st[i.id]; return s + (!x?1:(x.bad+1)/(x.ok+x.bad+2)); },0)/arr.length;
    g = shuffle(g).sort((a,b)=>gs(b)-gs(a));
    items = (mock ? g : g.slice(0, key==='lezen'?3:4)).flat();
  } else if(key==='knm'){
    items = prioritise(items).slice(0, mock ? 40 : 10);
  } else items = prioritise(items).slice(0, key==='spreken'?6:2);
  const info = E.info.find(p=>p.key===key);
  ex = {key, mock, items, i:0, score:0, start:Date.now(), plays:{}, answers:[], limit: mock ? Math.round(info.time*items.length/ (key==='knm'?40:25)) * MIN : 0};
  show('examrun'); clearInterval(timerIv);
  timerIv = setInterval(tick, 500); tick();
  renderItem();
}
function tick(){
  if(!ex) return clearInterval(timerIv);
  const el = Date.now()-ex.start;
  if(ex.limit){
    const left = Math.max(0, ex.limit-el);
    exTimer.textContent = '⏱ '+fmtMin(left);
    exTimer.style.color = left<2*MIN ? 'var(--bad)' : '';
    if(!left){ clearInterval(timerIv); toast('Time is up!'); finishExam(); }
  } else exTimer.textContent = fmtMin(el);
  examFill.style.width = 100*ex.i/ex.items.length+'%';
}
function markItem(it, good){
  const s = examState().items[it.id] ||= {ok:0, bad:0};
  good ? s.ok++ : s.bad++;
  const d = S.days[today()] ||= {n:0, ok:0, ms:0, learned:0};
  d.n++; if(good) d.ok++;
}
function addTime(){ // count exam practice time toward the daily goal
  const d = S.days[today()] ||= {n:0, ok:0, ms:0, learned:0};
  const now = Date.now(); d.ms += Math.min(now-(ex.lastT||ex.start), 3*MIN); ex.lastT = now;
}

function renderItem(){
  if(ex.i >= ex.items.length) return finishExam();
  const it = ex.items[ex.i]; ex.answered = false;
  const kind = it.kind || ex.key, part = E.info.find(p=>p.key===kind);
  exHead.textContent = `${part.icon} ${ex.ch?`NiG ${ex.ch} · ${part.name}`:ex.mock?'Mock exam':'Practice'} · ${ex.i+1}/${ex.items.length}`;
  exNext.classList.add('hidden');
  if(kind==='lezen'){
    exBody.innerHTML = `<div class="panel" style="white-space:pre-wrap;font-family:Georgia,serif;line-height:1.5;margin-bottom:12px"><b>${esc(it.ctx.title)}</b>\n\n${esc(it.ctx.text)}</div>${mcHtml(it)}`;
    bindMc(it);
  } else if(kind==='luisteren'){
    const k = it.ctx.title, plays = ex.plays[k]||0;
    exBody.innerHTML = `<div class="panel" style="text-align:center;margin-bottom:12px"><div class="tag">🎧 ${esc(k)}</div>
      <button class="speak" id="playBtn" style="width:80px;height:80px;font-size:2rem;margin:12px">▶</button>
      <div class="muted" id="playInfo">${ex.mock?`You can listen ${2-plays}× more`:'Listen as many times as you like'}</div>
      <div id="transcript" class="hidden" style="text-align:left;margin-top:10px"></div></div>${mcHtml(it)}`;
    playBtn.onclick = ()=>{
      if(ex.mock && (ex.plays[k]||0)>=2) return toast('No more replays in the mock exam');
      ex.plays[k]=(ex.plays[k]||0)+1; playDialog(it.ctx.lines);
      if(ex.mock) playInfo.textContent = `You can listen ${2-ex.plays[k]}× more`;
    };
    transcript.innerHTML = it.ctx.lines.map(([s,t])=>`<div><b>${s}:</b> ${esc(t)}</div>`).join('');
    bindMc(it);
  } else if(kind==='knm'){
    exBody.innerHTML = `<div class="tag" style="margin-bottom:6px">${esc(it.t)}</div>${mcHtml(it)}`;
    bindMc(it);
  } else if(kind==='schrijven') writeItem(it);
  else speakItem(it);
}
function mcHtml(it){
  return `<div class="panel"><b style="font-size:1.1rem">${esc(it.q)}</b>
    <div class="opts" style="grid-template-columns:1fr;margin-top:12px">${it.opts.map((o,i)=>`<button data-i="${i}"><kbd>${'ABC'[i]}</kbd> ${esc(o)}</button>`).join('')}</div>
    <div class="fb" id="exFb" style="margin-top:10px"></div></div>`;
}
function bindMc(it){
  const btns = exBody.querySelectorAll('.opts button');
  btns.forEach((b,i)=>b.onclick=()=>{
    if(ex.answered) return; ex.answered = true;
    const good = i===it.a; if(good) ex.score++;
    markItem(it, good); addTime(); ex.answers.push({it, pick:i, good}); save();
    if(ex.mock){ ex.i++; return renderItem(); }
    b.style.cssText = `background:${good?'var(--ok)':'var(--bad)'};color:#fff`;
    if(!good) btns[it.a].style.cssText='border:2px solid var(--ok)';
    exFb.innerHTML = (good?'<span class="ok">Correct!</span> ':'<span class="bad">Not correct.</span> ') + (it.ex?esc(it.ex):'');
    if(window.transcript) transcript.classList.remove('hidden');
    exNext.classList.remove('hidden');
  });
}
function playDialog(lines){
  if(!window.speechSynthesis) return toast('Speech is not supported in this browser');
  speechSynthesis.cancel();
  const voices = speechSynthesis.getVoices().filter(v=>v.lang.replace('_','-').startsWith('nl'));
  lines.forEach(([s,t])=>{
    const u = new SpeechSynthesisUtterance(t); u.lang='nl-NL'; u.rate=.92;
    if(voices.length>1) u.voice = voices[s==='A'?0:1]; else { if(voices[0]) u.voice=voices[0]; u.pitch = s==='A'?1:1.35; }
    speechSynthesis.speak(u);
  });
}

/* ---- schrijven ---- */
function writeItem(it){
  const field = it.type==='form'
    ? it.fields.map((f,i)=>`<label style="display:block;margin-bottom:8px"><small class="muted">${esc(f)}</small><input data-f="${i}"></label>`).join('')
    : `<textarea id="wText" rows="9" placeholder="Schrijf hier…" style="font-family:Georgia,serif"></textarea><small class="muted" id="wCount">0 words</small>`;
  exBody.innerHTML = `<div class="panel" style="margin-bottom:12px"><div class="tag">✍️ ${esc(it.title)}</div><p style="white-space:pre-wrap">${esc(it.prompt)}</p>
    <small class="muted">Exam tip: about 10 minutes per task. Handwrite it on paper too, because the real exam is on paper.</small></div>
    <div class="panel">${field}<div class="actions"><button class="primary" id="wCheck">Done → check my answer</button></div></div><div id="wResult"></div>`;
  if(window.wText) wText.oninput = ()=> wCount.textContent = (wText.value.trim().split(/\s+/).filter(Boolean).length)+' words';
  wCheck.onclick = ()=>{
    addTime();
    const model = it.type==='form' ? it.fields.map((f,i)=>`${f}: ${it.model[i]}`).join('\n') : it.model;
    wResult.innerHTML = `<div class="panel" style="margin-top:12px"><b>Check yourself: tick what you did</b>
      ${it.checklist.map((c,i)=>`<label class="wrow" style="cursor:pointer;justify-content:flex-start"><input type="checkbox" class="wc" style="width:auto;margin-right:10px">${esc(c)}</label>`).join('')}
      <h2>Model answer</h2><div style="white-space:pre-wrap;font-family:Georgia,serif;background:var(--soft);padding:12px;border-radius:10px">${esc(model)}</div>
      <div class="actions"><button class="primary" id="wSave">Save score →</button></div></div>`;
    wCheck.disabled = true;
    wSave.onclick = ()=>{
      const boxes = [...document.querySelectorAll('.wc')], n = boxes.filter(b=>b.checked).length;
      ex.score += n/boxes.length; markItem(it, n/boxes.length>=.65); save(); ex.i++; renderItem();
    };
    wResult.scrollIntoView({behavior:'smooth'});
  };
}

/* ---- spreken ---- */
let rec, chunks, recTimer;
function speakItem(it){
  exBody.innerHTML = `<div class="panel" style="text-align:center">
    <div class="tag">🗣️ Situation</div><p style="font-size:1.1rem">${esc(it.sit)}</p>
    <p><b style="font-size:1.2rem">${esc(it.q)}</b></p>
    <button onclick="speak(${esc(JSON.stringify(it.sit+' '+it.q))})">🔊 Hear the question</button>
    <div style="margin:18px 0"><button class="primary" id="recBtn" style="padding:16px 26px;font-size:1.1rem">🎙 Record answer (${it.time}s)</button></div>
    <div id="recInfo" class="muted"></div><audio id="recAudio" controls class="hidden" style="width:100%;margin-top:10px"></audio>
    <textarea id="spText" rows="2" class="hidden" placeholder="No microphone? Type what you would say…"></textarea>
    <div id="spModel" class="hidden" style="text-align:left;margin-top:14px"></div></div>`;
  speak(it.q);
  recBtn.onclick = ()=> rec && rec.state==='recording' ? rec.stop() : startRec(it);
}
async function startRec(it){
  let stream;
  try{ stream = await navigator.mediaDevices.getUserMedia({audio:true}); }
  catch(e){ spText.classList.remove('hidden'); recInfo.textContent='Microphone not available. Say it out loud and type it, then press Show model.'; recBtn.textContent='Show model answer'; recBtn.onclick=()=>showModel(it); return; }
  chunks = []; rec = new MediaRecorder(stream);
  rec.ondataavailable = e=>chunks.push(e.data);
  rec.onstop = ()=>{
    clearInterval(recTimer); stream.getTracks().forEach(t=>t.stop());
    recAudio.src = URL.createObjectURL(new Blob(chunks,{type:rec.mimeType})); recAudio.classList.remove('hidden');
    recBtn.textContent = '🎙 Record again'; recInfo.textContent = 'Listen to yourself, then compare with the model.';
    addTime(); showModel(it);
  };
  rec.start(); let left = it.time;
  recBtn.textContent = '⏹ Stop'; recInfo.textContent = `Recording… ${left}s`;
  recTimer = setInterval(()=>{ left--; recInfo.textContent = `Recording… ${left}s`; if(left<=0) rec.stop(); }, 1000);
}
function showModel(it){
  spModel.classList.remove('hidden');
  spModel.innerHTML = `<h2>Model answer</h2><div style="background:var(--soft);padding:12px;border-radius:10px">${esc(it.model)}
    <button class="speak" style="width:36px;height:36px;font-size:1rem;margin-left:6px" onclick="speak(${esc(JSON.stringify(it.model))})">🔊</button></div>
    <p class="muted" style="font-size:.85rem">Did you answer the question, in full sentences, with a reason (want/omdat)?</p>
    <div class="actions"><button onclick="rateSpeak(0)" style="color:var(--bad)">Not yet</button><button onclick="rateSpeak(.5)">Almost</button><button class="primary" onclick="rateSpeak(1)">Good 👍</button></div>`;
}
function rateSpeak(v){ const it = ex.items[ex.i]; ex.score += v; markItem(it, v>=.5); save(); ex.i++; renderItem(); }

/* ---- finish ---- */
function finishExam(){
  clearInterval(timerIv); if(!ex) return;
  if(window.speechSynthesis) speechSynthesis.cancel();
  addTime();
  const total = ex.items.length, score = Math.round(ex.score*10)/10, pct = Math.round(100*score/Math.max(1,total));
  const rec = {t:Date.now(), score, total, mock:ex.mock, ms:Date.now()-ex.start};
  if(ex.ch){ const c = examState().chapters ||= {}; (c[ex.ch] ||= []).unshift(rec); c[ex.ch] = c[ex.ch].slice(0,20); }
  else { const r = examState().results; (r[ex.key] ||= []).unshift(rec); }
  save();
  const wrong = ex.answers.filter(a=>!a.good);
  exHead.textContent = 'Result'; exNext.classList.add('hidden'); examFill.style.width='100%';
  exBody.innerHTML = `<div class="card" style="min-height:0"><div style="font-size:3rem">${pct>=70?'🎉':'💪'}</div>
    <div class="word">${score} / ${total}</div><div class="${pct>=70?'ok':'bad'}">${pct}%: ${pct>=70?'that would be a pass level!':'pass level is about 70%. Keep practising.'}</div></div>
    ${wrong.length?`<h2>Review your mistakes</h2>${wrong.map(a=>`<div class="panel" style="margin-bottom:8px"><b>${esc(a.it.q)}</b><br>
      <span class="bad">✗ ${esc(a.it.opts[a.pick])}</span><br><span class="ok">✓ ${esc(a.it.opts[a.it.a])}</span>${a.it.ex?`<br><small class="muted">${esc(a.it.ex)}</small>`:''}
      ${a.it.ctx&&a.it.ctx.lines?`<details><summary class="muted">Transcript</summary>${a.it.ctx.lines.map(([s,t])=>`<div><b>${s}:</b> ${esc(t)}</div>`).join('')}</details>`:''}</div>`).join('')}`:''}
    ${ex.ch?wordsToReviewHtml(ex.ch):''}
    <div class="actions">${ex.ch?`<button onclick="ex=null;show('course')">Back to course</button><button class="primary" onclick="startChapter(${ex.ch})">Again →</button>`:`<button onclick="ex=null;show('exam')">Back to exam overview</button><button class="primary" onclick="startExam('${ex.key}',${ex.mock})">Again →</button>`}</div>`;
}
function wordsToReviewHtml(n){
  const c = chapters().find(c=>c.n===n);
  if(!c) return '';
  const words = W().filter(w=>w.topic===c.topic && (w.stage<3 || w.bad>0)).sort((a,b)=>weakness(b)-weakness(a)).slice(0,10);
  if(!words.length) return '';
  return `<h2>Words to review</h2><div class="panel">${words.map(w=>`<div class="wrow"><span><b>${esc(w.nl)}</b> <span class="muted">${esc(w.en)}</span></span>${w.bad?`<span class="pill">✗ ${w.bad} · ✓ ${w.ok}</span>`:''}</div>`).join('')}
    <div class="actions"><button class="primary" onclick='startSession({topic:${esc(JSON.stringify(c.topic))}})'>📚 Practise these words</button></div></div>`;
}
function quitExam(){ const back = ex && ex.ch ? 'course' : 'exam'; if(ex && ex.i>0 && confirm('Stop and save your score so far?')){ ex.items = ex.items.slice(0, ex.i); finishExam(); } else { clearInterval(timerIv); ex=null; window.speechSynthesis&&speechSynthesis.cancel(); show(back); } }

/* readiness on home screen */
function examReadiness(){
  const r = examState().results;
  return E.info.map(p=>{ const x=r[p.key]||[]; const best = x.slice(0,3).reduce((m,y)=>Math.max(m,y.score/y.total),0); return {p, best, n:x.length}; });
}

/* ============ COURSE: Nederlands in gang, per chapter ============ */
const KINDS = ['lezen','luisteren','schrijven','spreken','knm'];
function chapterItems(n){ return KINDS.flatMap(k=>itemsFor(k).filter(it=>chOf(it)===n)); }
function chapters(){
  return Object.keys(window.WORDS).map(t=>/^NiG (\d+)\.\d+ (.*)$/.exec(t)).filter(Boolean)
    .map(m=>({n:+m[1], name:m[2], topic:m[0]})).sort((a,b)=>a.n-b.n);
}
function chapterStats(c){
  const ws = W().filter(w=>w.topic===c.topic), st = examState().items, items = chapterItems(c.n);
  const done = items.filter(it=>st[it.id]).length, good = items.filter(it=>st[it.id] && st[it.id].ok>=st[it.id].bad && st[it.id].ok).length;
  const wrong = items.filter(it=>st[it.id] && st[it.id].bad > st[it.id].ok).length;
  const runs = (examState().chapters||{})[c.n] || [];
  return {words:ws.length, learned:ws.filter(w=>w.stage>=3).length, started:ws.filter(w=>w.stage>0).length,
          items:items.length, done, good, wrong, best: runs.reduce((m,r)=>Math.max(m, r.score/r.total), 0), runs:runs.length};
}
function renderCourse(){
  const cs = chapters().map(c=>({...c, s:chapterStats(c)}));
  // suggested next step: first chapter whose words or exam tasks are not done yet
  const nx = cs.find(c=>c.s.learned < c.s.words*0.8 || c.s.best < 0.7);
  courseNext.innerHTML = nx ? `<div class="panel nownext" style="margin-bottom:12px"><div class="tag">Next up</div>
    <div style="font-size:1.15rem;margin:6px 0 10px"><b>Chapter ${nx.n} · ${esc(nx.name)}</b></div>
    <div class="flex"><button class="primary" style="flex:1" onclick='startSession({topic:${esc(JSON.stringify(nx.topic))}})'>📚 Learn words (${nx.s.learned}/${nx.s.words})</button>
    <button style="flex:1" onclick="startChapter(${nx.n})">📝 Practise chapter</button></div></div>` : '';
  courseList.innerHTML = cs.map(c=>{ const s=c.s, wp=s.words?100*s.learned/s.words:0, ep=100*s.best;
    return `<div class="chap"><div><b>${c.n}. ${esc(c.name)}</b><br><small class="muted">${s.learned}/${s.words} words learned · ${s.done}/${s.items} exam tasks tried${s.runs?` · best ${Math.round(ep)}%`:''}</small></div>
    <div class="btns"><button onclick='startSession({topic:${esc(JSON.stringify(c.topic))}})' title="Learn the words">📚 Words</button><button onclick="startChapter(${c.n})" title="Practise exam tasks">📝 Practise</button>${s.wrong?`<button onclick="startChapterReview(${c.n})" title="Practise only what you got wrong">🔁 Review mistakes</button>`:''}</div>
    <div class="bars"><span>Words</span><div class="bar"><i style="width:${wp}%;background:${wp>=80?'var(--ok)':'var(--acc)'}"></i></div><span>Exam</span><div class="bar"><i style="width:${ep}%;background:${ep>=70?'var(--ok)':'var(--acc2)'}"></i></div></div></div>`; }).join('');
}
/* one mixed practice run: lezen → luisteren → knm → schrijven → spreken of one chapter */
function startChapter(n){
  const order = ['lezen','luisteren','knm','schrijven','spreken'];
  const items = chapterItems(n).sort((a,b)=>order.indexOf(a.kind)-order.indexOf(b.kind));
  if(!items.length) return toast('No exam tasks for this chapter yet');
  ex = {key:'chapter', ch:n, mock:false, items, i:0, score:0, start:Date.now(), plays:{}, answers:[], limit:0};
  show('examrun'); clearInterval(timerIv); timerIv = setInterval(tick, 500); tick(); renderItem();
}

/* practise only the items from one chapter that were answered wrong more often than right */
function startChapterReview(n){
  const st = examState().items;
  const order = ['lezen','luisteren','knm','schrijven','spreken'];
  const items = chapterItems(n).filter(it=>st[it.id] && st[it.id].bad > st[it.id].ok).sort((a,b)=>order.indexOf(a.kind)-order.indexOf(b.kind));
  if(!items.length) return toast('No mistakes to review for this chapter');
  ex = {key:'chapter', ch:n, mock:false, items, i:0, score:0, start:Date.now(), plays:{}, answers:[], limit:0};
  show('examrun'); clearInterval(timerIv); timerIv = setInterval(tick, 500); tick(); renderItem();
}

/* keyboard in the exam runner: A/B/C or 1/2/3 to answer, Enter = next */
document.addEventListener('keydown', e=>{
  if(document.getElementById('examrun').classList.contains('hidden') || !ex) return;
  const tag = document.activeElement && document.activeElement.tagName;
  if(tag==='INPUT' || tag==='TEXTAREA') return;
  if(e.key==='Enter' && !exNext.classList.contains('hidden')){ e.preventDefault(); return exNext.click(); }
  const i = 'abc'.indexOf(e.key.toLowerCase()) >= 0 ? 'abc'.indexOf(e.key.toLowerCase()) : '123'.indexOf(e.key);
  if(i>=0 && !ex.answered){ const b = exBody.querySelectorAll('.opts button')[i]; if(b){ e.preventDefault(); b.click(); } }
});
