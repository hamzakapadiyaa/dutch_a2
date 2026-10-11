// Exam practice content modelled on the A2 inburgeringsexamen (original practice material, not official DUO questions).
window.EXAM = {

info: [
  {key:'lezen',     icon:'📖', name:'Lezen (Reading)',      time:65, fmt:'Computer · ~25 multiple-choice questions about short real-life texts (letters, notices, ads, emails, schedules). Pass ≈ 18/25.'},
  {key:'luisteren', icon:'🎧', name:'Luisteren (Listening)',time:45, fmt:'Computer · ~25 multiple-choice questions after short videos/conversations. You usually hear each fragment once or twice. Pass ≈ 18/25.'},
  {key:'schrijven', icon:'✍️', name:'Schrijven (Writing)',  time:40, fmt:'Pen and paper · 4 tasks: fill in a form, write a short email/letter or note, complete sentences. Pass ≈ 65% of the points.'},
  {key:'spreken',   icon:'🗣️', name:'Spreken (Speaking)',   time:35, fmt:'Computer with headset · you see a situation in a short video and record your answer. Short answers (1–2 sentences) and longer ones (describe, explain, give an opinion).'},
  {key:'knm',       icon:'🏛️', name:'KNM (Dutch society)', time:45, fmt:'Computer · ~40 multiple-choice questions about everyday situations: work, housing, health, education, government, history, norms and values. Pass ≈ 28/40.'},
],

tips: [
  'Each part is a separate exam. You only redo the parts you fail. Each costs about €50.',
  'Book exams via Mijn Inburgering. Bring a valid ID and your invitation, and arrive 30 minutes early.',
  'Dictionary rules have changed over time. Check your exam invitation, and practise without a dictionary to be safe.',
  'Lezen: read the QUESTION first, then look for the answer in the text. Most answers are a date, time, price, place or what you must do.',
  'Luisteren: read the question and options before the audio starts. Listen for numbers, days and “niet/geen”.',
  'Schrijven: answer EVERY point in the task, use full sentences, and start and end letters properly (Beste … / Met vriendelijke groet).',
  'Spreken: answer the question asked, in whole sentences. Add a reason with “want” or “omdat”. Don’t stay silent. Say something.',
  'KNM: questions are about what is normal or what you should do in NL (e.g. make an appointment, be on time, call the huisarts first).',
],

lezen: [
 {title:'Brief van de gemeente', text:`Gemeente Utrecht
Afdeling Burgerzaken

Beste mevrouw Ahmadi,

Uw paspoort is klaar. U kunt het ophalen bij het loket in het Stadskantoor. Wilt u eerst een afspraak maken? Dat kan op onze website of via telefoonnummer 14 030.

Neem deze brief en uw oude paspoort mee. Ophalen kan tot 3 maanden na deze brief. Daarna moet u een nieuw paspoort aanvragen.

Openingstijden loket: maandag t/m vrijdag van 9.00 tot 17.00 uur, donderdag ook van 18.00 tot 20.00 uur.

Met vriendelijke groet,
Afdeling Burgerzaken`,
 qs:[
  {q:'Wat moet mevrouw Ahmadi eerst doen?', opts:['Een nieuw paspoort aanvragen','Een afspraak maken','Naar het loket gaan zonder afspraak'], a:1},
  {q:'Wat moet zij meenemen?', opts:['Alleen de brief','Haar oude paspoort en de brief','Een pasfoto'], a:1},
  {q:'Wanneer is het loket ’s avonds open?', opts:['Op maandag','Op donderdag','Op vrijdag'], a:1},
 ]},
 {title:'Bericht van school', text:`Beste ouders,

Op vrijdag 14 maart is er geen school. De leraren hebben dan een studiedag.
Op dinsdag 18 maart gaan groep 5 en 6 naar het museum. De bus vertrekt om 8.45 uur. Wilt u uw kind op tijd brengen? Geef uw kind een lunchpakket en iets te drinken mee. De kinderen zijn om 15.00 uur terug op school.

Kosten: € 4,50 per kind. U kunt betalen bij de juf of meester.

Groeten,
Juf Sanne`,
 qs:[
  {q:'Waarom is er op 14 maart geen school?', opts:['Het is een feestdag','De leraren hebben een studiedag','De kinderen gaan naar het museum'], a:1},
  {q:'Hoe laat moeten de kinderen op 18 maart uiterlijk op school zijn?', opts:['Voor 8.45 uur','Om 9.00 uur','Om 15.00 uur'], a:0},
  {q:'Wat moeten de kinderen meenemen?', opts:['€ 4,50 en een jas','Eten en drinken','Een museumkaart'], a:1},
 ]},
 {title:'Advertentie', text:`TE HUUR: Appartement in het centrum
2 kamers, keuken, badkamer met douche, balkon.
Derde verdieping, geen lift.
Huur: € 850 per maand (exclusief gas, water en licht).
Geen huisdieren. Niet roken.
Per 1 mei beschikbaar.
Interesse? Mail naar wonen@verhuurbureau.nl. Bellen kan alleen ’s middags: 030 – 123 45 67.`,
 qs:[
  {q:'Wat is waar over dit appartement?', opts:['Er is een lift','Er is een balkon','Gas en licht zijn bij de huur inbegrepen'], a:1},
  {q:'Mag u een kat meenemen?', opts:['Ja','Nee','Alleen na 1 mei'], a:1},
  {q:'Wanneer kunt u bellen?', opts:['’s Ochtends','’s Middags','’s Avonds'], a:1},
 ]},
 {title:'Bij de huisarts', text:`Huisartsenpraktijk De Linde

Spreekuur: alleen op afspraak. Bel voor een afspraak tussen 8.00 en 10.00 uur.
Herhaalrecepten: bestel uw medicijnen via de website. U kunt ze na 2 werkdagen ophalen bij de apotheek.
Bent u ’s avonds of in het weekend ziek en kan het niet wachten? Bel de huisartsenpost: 0900 – 1234.
Levensgevaar? Bel 112.

Kunt u niet komen? Zeg uw afspraak 24 uur van tevoren af. Anders moet u betalen.`,
 qs:[
  {q:'Wanneer belt u voor een afspraak?', opts:['Tussen 8.00 en 10.00 uur','De hele dag','Alleen in het weekend'], a:0},
  {q:'Het is zaterdag en uw kind heeft hoge koorts. Wie belt u?', opts:['De huisarts','De huisartsenpost','De apotheek'], a:1},
  {q:'Wat gebeurt er als u uw afspraak niet afzegt?', opts:['U krijgt een nieuwe afspraak','U moet betalen','Niets'], a:1},
 ]},
 {title:'E-mail van een collega', text:`Van: Mark de Vries
Aan: team logistiek
Onderwerp: Vergadering verplaatst

Hoi allemaal,

De vergadering van woensdag gaat niet door. We vergaderen nu op donderdag om 13.30 uur, in kamer 2.04 (niet in de kantine).
Neem je planning voor volgende week mee. Na de vergadering is er koffie met taart, want Fatima is jarig!

Kun je niet komen? Stuur me dan vandaag nog een berichtje.

Groetjes,
Mark`,
 qs:[
  {q:'Wanneer is de vergadering nu?', opts:['Woensdag','Donderdag om 13.30 uur','Vandaag'], a:1},
  {q:'Waar is de vergadering?', opts:['In de kantine','In kamer 2.04','Bij Fatima'], a:1},
  {q:'Waarom is er taart?', opts:['Mark gaat weg','Fatima is jarig','Het team heeft goed gewerkt'], a:1},
 ]},
 {title:'Afvalkalender', text:`AFVAL OPHALEN – wijk Noord

Groente-, fruit- en tuinafval (gft): elke dinsdag
Restafval: om de week op vrijdag (even weken)
Papier: eerste maandag van de maand

Zet de container vóór 7.30 uur aan de straat.
Glas en kleding brengt u zelf naar de containers bij de supermarkt.
Grote spullen (bank, kast)? Maak een afspraak via de website. Dit is gratis.`,
 qs:[
  {q:'Wanneer wordt het gft-afval opgehaald?', opts:['Elke dinsdag','Om de week op vrijdag','Elke eerste maandag'], a:0},
  {q:'Wat doet u met oude flessen?', opts:['In de gft-container','Naar de glascontainer bij de supermarkt','Op maandag aan de straat zetten'], a:1},
  {q:'U wilt een oude bank weg doen. Wat doet u?', opts:['Op vrijdag aan de straat zetten','Een afspraak maken via de website','Betalen bij de gemeente'], a:1},
 ]},
 {title:'Treinreis', text:`NS – Reisinformatie
Amsterdam Centraal → Rotterdam Centraal

Vertrek 10.12 spoor 5b – aankomst 11.20 – 1x overstappen in Den Haag HS
Vertrek 10.25 spoor 7 – aankomst 11.05 – direct (Intercity Direct, toeslag € 2,60)
Vertrek 10.42 spoor 5b – aankomst 11.50 – 1x overstappen in Leiden Centraal

Let op: vanaf 20.00 uur rijden er vanwege werkzaamheden geen treinen tussen Schiphol en Leiden. Er rijden bussen.`,
 qs:[
  {q:'U wilt zonder overstappen reizen. Hoe laat vertrekt u?', opts:['10.12','10.25','10.42'], a:1},
  {q:'Wat moet u extra betalen voor die trein?', opts:['Niets','€ 2,60','Een nieuw kaartje'], a:1},
  {q:'Wat gebeurt er vanaf 20.00 uur?', opts:['Er rijden geen treinen naar Rotterdam','Er rijden bussen tussen Schiphol en Leiden','Spoor 5b is dicht'], a:1},
 ]},
 {title:'Cursus', text:`Buurthuis De Ster – nieuwe cursussen

Computercursus voor beginners
Wanneer: 6 lessen, elke woensdag van 19.00 tot 21.00 uur, vanaf 2 oktober
Kosten: € 25 (met Stadspas gratis)
Neem uw eigen laptop mee. Heeft u geen laptop? U kunt er een lenen in het buurthuis.

Naaicursus
Wanneer: elke zaterdagochtend van 10.00 tot 12.00 uur
Kosten: € 40 voor 8 lessen, inclusief materiaal

Aanmelden bij de balie of via info@destar.nl. Vol = vol!`,
 qs:[
  {q:'Hoeveel kost de computercursus met een Stadspas?', opts:['€ 25','Niets','€ 40'], a:1},
  {q:'U heeft geen laptop. Wat kunt u doen?', opts:['U kunt niet meedoen','U kunt er een lenen in het buurthuis','U moet een laptop kopen'], a:1},
  {q:'Wat is waar over de naaicursus?', opts:['Het materiaal is bij de prijs inbegrepen','De cursus is op woensdag','Er zijn 6 lessen'], a:0},
 ]},
 // ---- Nederlands in gang: oefenteksten per hoofdstuk (eigen teksten) ----
 {title:'NiG 1 · E-mail van de taalschool', text:`Van: Taalschool De Brug
Aan: Karim Benali
Onderwerp: Welkom bij de cursus Nederlands

Beste Karim,

Welkom bij de cursus Nederlands A2! De les begint op maandag 2 september om 19.00 uur. De les is in lokaal 4, op de eerste verdieping.
Neem uw cursusboek en een schrift mee. Het boek kunt u ook kopen bij de balie, het kost € 35.
Bent u ziek? Stuur dan een e-mail naar uw docent, mevrouw De Vries.

Tot maandag!
Taalschool De Brug`,
 qs:[
  {q:'Waar is de les?', opts:['In lokaal 4 op de eerste verdieping','Bij de balie','In lokaal 1 op de begane grond'], a:0},
  {q:'Wat moet Karim doen als hij ziek is?', opts:['Bellen naar de balie','Een e-mail sturen naar de docent','Niets'], a:1},
 ]},
 {title:'NiG 2 · Mededeling in de kantine', text:`KANTINE – NIEUWE OPENINGSTIJDEN

Vanaf 1 oktober is de kantine open:
maandag t/m donderdag: 8.00 – 16.30 uur
vrijdag: 8.00 – 14.00 uur
In het weekend is de kantine gesloten.

Koffie en thee zijn gratis voor medewerkers. Een broodje kost € 2,50.
Ben je jarig? Je mag in de kantine trakteren. Meld het een dag van tevoren bij Jolanda.`,
 qs:[
  {q:'Tot hoe laat is de kantine op vrijdag open?', opts:['Tot 16.30 uur','Tot 14.00 uur','Tot 8.00 uur'], a:1},
  {q:'U bent volgende week jarig en wilt trakteren. Wat moet u doen?', opts:['Een dag van tevoren Jolanda informeren','Een broodje kopen','Op zaterdag trakteren'], a:0},
 ]},
 {title:'NiG 3 · Menukaart van Café De Hoek', text:`CAFÉ DE HOEK

Warme dranken
Koffie € 2,80 · Cappuccino € 3,40 · Verse muntthee € 3,20

Koude dranken
Spa rood / Spa blauw € 2,60 · Jus d’orange (vers) € 3,90
Biertje (ook alcoholvrij) € 3,50 · Glas rode of witte wijn € 4,75

Happy hour: van maandag tot en met donderdag tussen 17.00 en 18.00 uur betaalt u voor een biertje maar € 2,50.
Bestellen en afrekenen aan de bar, alstublieft.`,
 qs:[
  {q:'U bestelt een verse muntthee en een cappuccino. Hoeveel betaalt u?', opts:['€ 6,20','€ 6,60','€ 6,00'], a:1},
  {q:'Waar betaalt u?', opts:['Aan de tafel','Aan de bar','Bij de ingang'], a:1},
 ]},
 {title:'NiG 4 · Berichtje van Mila', text:`Hoi Daan!
Hoe gaat het met je? Met mij gaat het goed, maar ik heb het druk met mijn nieuwe baan.
Zullen we zaterdag samen koffie drinken? Ik ken een leuk tentje bij het plein.
’s Ochtends moet ik naar de markt, maar ’s middags heb ik tijd. Kan jij om drie uur?
Groetjes, Mila
PS: Doe je de groeten aan je moeder?`,
 qs:[
  {q:'Wat stelt Mila voor?', opts:['Samen naar de markt gaan','Samen koffie drinken','Samen werken'], a:1},
  {q:'Wanneer heeft Mila tijd?', opts:['Zaterdagochtend','Zaterdagmiddag','Zaterdagavond'], a:1},
 ]},
 {title:'NiG 5 · Aanbieding op de markt', text:`GROENTE & FRUIT BIJ HASSAN – elke woensdag en zaterdag op de markt

Deze week in de aanbieding:
• Aardappelen: 2 kilo voor € 2,50
• Tomaten: per kilo € 1,99
• Bakje champignons: 2 voor € 3,00
• Mango’s (lekker rijp!): 3 voor € 4,00

Pinnen kan bij ons, maar kleine bedragen tot € 5 graag contant.`,
 qs:[
  {q:'Op welke dagen staat Hassan op de markt?', opts:['Woensdag en zaterdag','Elke dag','Alleen zaterdag'], a:0},
  {q:'U koopt voor € 3,00. Hoe betaalt u het liefst?', opts:['Met de pinpas','Contant','Met een creditcard'], a:1},
 ]},
 {title:'NiG 6 · Restaurant De Gouden Lepel', text:`RESTAURANT DE GOUDEN LEPEL

Dagschotel: kip met rijst en salade – € 14,50
Vegetarisch: pasta met groenten en kaas – € 13,00

Voorgerecht: soep van de dag – € 5,50
Nagerecht: ijs met slagroom – € 6,00

Open: woensdag t/m zondag van 17.00 tot 22.00 uur. Maandag en dinsdag gesloten.
Met een groep van meer dan 6 personen? Reserveer dan altijd van tevoren.`,
 qs:[
  {q:'U eet geen vlees. Wat kunt u als hoofdgerecht kiezen?', opts:['De dagschotel','De pasta met groenten en kaas','Ijs met slagroom'], a:1},
  {q:'U wilt met 8 personen eten. Wat moet u doen?', opts:['Gewoon komen','Van tevoren reserveren','Op maandag komen'], a:1},
 ]},
 {title:'NiG 7 · Ruilen bij ModeMax', text:`RUILEN EN TERUGBRENGEN BIJ MODEMAX

Past uw kleding niet? Geen probleem!
• U kunt kleding binnen 30 dagen ruilen in elke winkel van ModeMax.
• Neem altijd de kassabon mee.
• Het label moet nog aan de kleding zitten.
• Ondergoed en badkleding kunt u niet ruilen.
• Online gekocht? Dan kunt u het ook in de winkel terugbrengen.`,
 qs:[
  {q:'Wat moet u meenemen als u iets wilt ruilen?', opts:['Uw paspoort','De kassabon','Een andere maat'], a:1},
  {q:'Wat kunt u NIET ruilen?', opts:['Een spijkerbroek','Een T-shirt','Badkleding'], a:2},
 ]},
 {title:'NiG 8 · Advertentie: appartement te huur', text:`TE HUUR: Appartement in de buurt Oost

Leuk appartement op de tweede verdieping, dichtbij het park en het centrum.
• Woonkamer met open keuken (30 m²)
• Eén slaapkamer, badkamer met douche, aparte wc
• Balkon op het zuiden
• Niet gemeubileerd

Huur: € 950 per maand, exclusief gas, water en licht.
Huisdieren niet toegestaan. Beschikbaar vanaf 1 november.
Bezichtiging? Bel makelaar Van Dam: 020 – 123 45 67.`,
 qs:[
  {q:'Wat zit er NIET in de huur van € 950?', opts:['Gas, water en licht','De slaapkamer','Het balkon'], a:0},
  {q:'U heeft een kat. Kunt u dit appartement huren?', opts:['Ja','Nee','Alleen met een tuin'], a:1},
 ]},
 {title:'NiG 9 · Huisartsenpraktijk Zuid', text:`HUISARTSENPRAKTIJK ZUID

Afspraak maken: bel ’s ochtends tussen 8.00 en 10.00 uur.
Herhaalrecept nodig? Bestel het via onze website. Het recept staat na twee werkdagen klaar bij de apotheek.

’s Avonds, ’s nachts en in het weekend belt u bij spoed de huisartsenpost: 088 – 123 00 00.
Bij levensgevaar belt u altijd 112.`,
 qs:[
  {q:'Wanneer kunt u bellen voor een afspraak?', opts:['’s Ochtends tussen 8 en 10 uur','De hele dag','’s Avonds'], a:0},
  {q:'Het is zondag en uw kind heeft hoge koorts. Wie belt u?', opts:['De praktijk op maandag','De huisartsenpost','De apotheek'], a:1},
 ]},
 {title:'NiG 10 · Fietsenmaker Snel', text:`FIETSENMAKER SNEL

Reparaties (inclusief onderdelen):
• Band plakken: € 12,50
• Nieuwe binnenband: € 17,50
• Remmen afstellen: € 10,00
• Grote beurt: € 65,00

Brengt u uw fiets voor 10.00 uur? Dan is hij meestal dezelfde dag klaar.
Let op: op Koningsdag (27 april) en tweede paasdag zijn wij gesloten.`,
 qs:[
  {q:'U brengt uw fiets om 9 uur. Wanneer is hij meestal klaar?', opts:['Dezelfde dag','De volgende dag','Na een week'], a:0},
  {q:'Wanneer is de fietsenmaker gesloten?', opts:['Op elke maandag','Op Koningsdag','Op 1 mei'], a:1},
 ]},
 {title:'NiG 11 · Uitnodiging', text:`Hoera, ik word 40!

Lieve buren,

Op zaterdag 14 juni vier ik mijn verjaardag in de tuin. Jullie zijn van harte welkom vanaf 15.00 uur.
Er is taart, er zijn hapjes en er is Cubaanse muziek!
Neem geen cadeau mee, maar wel een goed humeur.
Laat je even voor woensdag weten of je komt?

Groetjes,
Ingrid (nr. 9)`,
 qs:[
  {q:'Wat wil Ingrid NIET?', opts:['Dat de buren komen','Een cadeau','Muziek'], a:1},
  {q:'Wat moeten de buren voor woensdag doen?', opts:['Laten weten of ze komen','Taart bakken','Een cadeau kopen'], a:0},
 ]},
 {title:'NiG 12 · Bevestiging van uw hotelkamer', text:`Hotel Zeezicht – bevestiging van uw reservering

Beste mevrouw Okafor,

Bedankt voor uw reservering van een tweepersoonskamer met uitzicht op zee, van vrijdag 9 mei tot zondag 11 mei.
Inchecken kan vanaf 15.00 uur, uitchecken voor 11.00 uur.
Het ontbijt is van 7.00 tot 10.00 uur en kost € 15 per persoon (niet inbegrepen).
Het station is tien minuten lopen. Vanaf het station loopt u rechtdoor tot de boulevard, en dan links.

Tot ziens in Hotel Zeezicht!`,
 qs:[
  {q:'Hoeveel nachten blijft mevrouw Okafor in het hotel?', opts:['Eén nacht','Twee nachten','Drie nachten'], a:1},
  {q:'Wat is waar over het ontbijt?', opts:['Het is gratis','U betaalt er extra voor','Het is tot 11.00 uur'], a:1},
 ]},
 {title:'NiG 13 · Sportschool FitPlus', text:`SPORTSCHOOL FITPLUS – KIES JE ABONNEMENT

Maandabonnement: € 34,95 per maand, elke maand opzeggen.
Jaarabonnement: € 27,95 per maand, je zit één jaar vast.
Met beide abonnementen kun je onbeperkt sporten en meedoen aan alle groepslessen.

Nu in de aanbieding: schrijf je deze maand in en betaal geen inschrijfgeld (normaal € 20).
Opzeggen? Dat kan via de app of bij de balie.`,
 qs:[
  {q:'Welk abonnement is per maand goedkoper?', opts:['Het maandabonnement','Het jaarabonnement','Ze kosten hetzelfde'], a:1},
  {q:'Wat krijgt u als u zich deze maand inschrijft?', opts:['Een gratis groepsles','Geen inschrijfgeld','Een maand gratis'], a:1},
 ]},
 {title:'NiG 14 · Programma Cultureel Centrum De Linde', text:`CULTUREEL CENTRUM DE LINDE – PROGRAMMA MAART

• Vrijdag 7 maart, 20.00 uur – Filmavond: een spannend drama, daarna napraten in het filmcafé. € 8
• Zaterdag 15 maart, 14.00 – 17.00 uur – Fototentoonstelling “Mijn stad”. Gratis
• Zondag 23 maart, 15.00 uur – Concert van het buurtkoor. € 5, kinderen gratis

Elke dinsdag van 10.00 tot 12.00 uur: taalcafé in de bibliotheek. Oefen je Nederlands! Gratis.`,
 qs:[
  {q:'U wilt gratis uw Nederlands oefenen. Wanneer gaat u?', opts:['Vrijdagavond','Dinsdagochtend','Zondagmiddag'], a:1},
  {q:'Wat kost het concert voor twee volwassenen en één kind?', opts:['€ 5','€ 10','€ 15'], a:1},
 ]},
 {title:'NiG 15 · E-mail van uw leidinggevende', text:`Van: Eva Smits
Aan: team Administratie
Onderwerp: overleg verplaatst

Hallo allemaal,

Het teamoverleg van dinsdag 10.00 uur gaat niet door. Ik ben die dag op een congres.
Het nieuwe tijdstip is donderdag om 13.30 uur. Het overleg is online, de link staat in jullie agenda.
Willen jullie de cijfers van het project voor woensdag invoeren? Dan kunnen we ze donderdag bespreken.

Groeten,
Eva`,
 qs:[
  {q:'Waarom gaat het overleg op dinsdag niet door?', opts:['Eva is ziek','Eva is op een congres','Er is een storing'], a:1},
  {q:'Wat moet het team voor woensdag doen?', opts:['De cijfers invoeren','Een presentatie geven','Naar kantoor komen'], a:0},
 ]},
 {title:'NiG 16 · Mededeling van de woningcorporatie', text:`Beste bewoners van de Lindenflat,

Op dinsdag 18 februari is er van 9.00 tot 13.00 uur geen warm water. Er is onderhoud aan het systeem.
De lift werkt die ochtend ook niet.
Heeft u na 13.00 uur nog steeds geen warm water? Meld de storing dan via 0800 – 456 78 90.

Onze excuses voor het ongemak.
Woningcorporatie Thuis`,
 qs:[
  {q:'Wat is er op 18 februari aan de hand?', opts:['Er is geen warm water','Er komt een nieuwe lift','De flat is dicht'], a:0},
  {q:'Wanneer belt u het nummer?', opts:['Om 9.00 uur','Als er na 13.00 uur nog geen warm water is','Als de lift werkt'], a:1},
 ]},
],

luisteren: [
 {title:'Bij de bakker', lines:[['A','Goedemorgen, wat mag het zijn?'],['B','Goedemorgen. Ik wil graag een volkorenbrood en vier krentenbollen.'],['A','Wilt u het brood gesneden?'],['B','Ja, graag.'],['A','Dat is dan zes euro twintig.'],['B','Kan ik pinnen?'],['A','Natuurlijk.']],
  qs:[{q:'Wat koopt de klant?', opts:['Een wit brood en vier croissants','Een volkorenbrood en vier krentenbollen','Twee broden'], a:1},{q:'Hoeveel moet de klant betalen?', opts:['€ 6,20','€ 2,60','€ 4,20'], a:0}]},
 {title:'Op het station', lines:[['A','Dames en heren, de intercity naar Groningen van 14.17 vertrekt vandaag niet van spoor 3, maar van spoor 8. De trein heeft ongeveer tien minuten vertraging. Onze excuses voor het ongemak.']],
  qs:[{q:'Van welk spoor vertrekt de trein?', opts:['Spoor 3','Spoor 8','Spoor 14'], a:1},{q:'Hoe laat vertrekt de trein ongeveer?', opts:['14.17','14.27','14.07'], a:1}]},
 {title:'Een afspraak bij de huisarts', lines:[['A','Huisartsenpraktijk Centrum, goedemorgen.'],['B','Goedemorgen, met Yusuf Demir. Ik wil graag een afspraak maken. Ik heb al een week keelpijn.'],['A','Heeft u ook koorts?'],['B','Nee, geen koorts.'],['A','Kunt u morgen om half elf komen?'],['B','Nee, dan moet ik werken. Kan het ook in de middag?'],['A','Morgen om vier uur kan ook.'],['B','Prima, dank u wel.']],
  qs:[{q:'Wat is het probleem van Yusuf?', opts:['Hij heeft koorts','Hij heeft keelpijn','Hij heeft buikpijn'], a:1},{q:'Wanneer is de afspraak?', opts:['Morgen om half elf','Morgen om vier uur','Vandaag om vier uur'], a:1}]},
 {title:'De weg vragen', lines:[['A','Pardon, mag ik iets vragen? Weet u waar de bibliotheek is?'],['B','Ja hoor. U gaat hier rechtdoor tot het stoplicht. Daar gaat u linksaf. Dan neemt u de tweede straat rechts. De bibliotheek is naast de supermarkt.'],['A','Is het ver?'],['B','Nee, vijf minuten lopen.']],
  qs:[{q:'Waar gaat de man bij het stoplicht heen?', opts:['Rechtsaf','Linksaf','Rechtdoor'], a:1},{q:'Waar is de bibliotheek?', opts:['Tegenover de supermarkt','Naast de supermarkt','Bij het stoplicht'], a:1}]},
 {title:'Bericht op de voicemail', lines:[['A','Hallo Nadia, met Linda. Ik kan zaterdag helaas niet komen helpen met verhuizen, want mijn dochter is ziek. Maar zondag kan ik wel. Ik neem dan ook mijn broer mee, hij heeft een grote auto. Bel je me even terug? Doei!']],
  qs:[{q:'Waarom kan Linda zaterdag niet?', opts:['Ze moet werken','Haar dochter is ziek','Haar auto is kapot'], a:1},{q:'Wat moet Nadia doen?', opts:['Linda terugbellen','Een auto huren','Zaterdag verhuizen'], a:0}]},
 {title:'Op het werk', lines:[['A','Hoi Samir, kun je volgende week maandag een dienst overnemen? Ik heb een afspraak bij de tandarts.'],['B','Maandag? Ik werk al in de ochtend. Is het een avonddienst?'],['A','Nee, het is van twaalf tot vijf.'],['B','Hmm, dan kan ik niet. Maar dinsdag kan ik wel ruilen.'],['A','Oké, dan vraag ik het aan Petra.']],
  qs:[{q:'Waarom wil de vrouw ruilen?', opts:['Ze is ziek','Ze heeft een afspraak bij de tandarts','Ze gaat op vakantie'], a:1},{q:'Neemt Samir de dienst over?', opts:['Ja, op maandag','Nee','Ja, van twaalf tot vijf'], a:1}]},
 {title:'Het weerbericht', lines:[['A','En dan het weer voor morgen. In de ochtend is het bewolkt en droog. In de middag gaat het regenen, vooral in het westen van het land. Er is veel wind. De temperatuur: rond de twaalf graden. Zondag wordt het zonnig en warmer.']],
  qs:[{q:'Wat voor weer is het morgenmiddag?', opts:['Zonnig','Regen en wind','Sneeuw'], a:1},{q:'Hoe wordt het zondag?', opts:['Zonnig en warmer','Koud en nat','Bewolkt'], a:0}]},
 {title:'In de winkel', lines:[['A','Kan ik u helpen?'],['B','Ja, ik heb deze broek gisteren gekocht, maar hij is te klein. Mag ik hem ruilen?'],['A','Heeft u de kassabon nog?'],['B','Ja, hier.'],['A','Welke maat wilt u?'],['B','Een maat groter, 40 graag.'],['A','Die hebben we alleen nog in het zwart.'],['B','Dat is ook goed.']],
  qs:[{q:'Wat is het probleem met de broek?', opts:['Hij is kapot','Hij is te klein','De kleur is niet mooi'], a:1},{q:'Welke broek neemt de klant mee?', opts:['Maat 40, zwart','Maat 38, blauw','Ze krijgt haar geld terug'], a:0}]},
 {title:'Op school', lines:[['A','Goedemiddag, ik ben de moeder van Amir. Hij kan morgen niet naar school komen.'],['B','O, wat is er aan de hand?'],['A','Hij moet naar het ziekenhuis voor een controle van zijn oor. Hij is om twaalf uur terug.'],['B','Dan kan hij ’s middags gewoon naar school komen?'],['A','Ja, dat is goed.']],
  qs:[{q:'Waarom gaat Amir morgen niet naar school?', opts:['Hij is ziek','Hij gaat naar het ziekenhuis','Hij gaat op vakantie'], a:1},{q:'Wanneer komt Amir wel naar school?', opts:['’s Middags','Overmorgen','Volgende week'], a:0}]},
 {title:'Afspraak met een vriend', lines:[['A','Zullen we vrijdagavond naar de film gaan?'],['B','Vrijdag kan ik niet, dan ga ik naar mijn ouders. Zaterdag?'],['A','Goed. De film begint om half negen. Zullen we om acht uur bij de bioscoop afspreken?'],['B','Liever bij het station, dan kunnen we samen lopen.'],['A','Prima, tot zaterdag!']],
  qs:[{q:'Wanneer gaan ze naar de film?', opts:['Vrijdagavond','Zaterdagavond','Zondagavond'], a:1},{q:'Waar spreken ze af?', opts:['Bij de bioscoop','Bij het station','Bij de ouders'], a:1}]},
 // ---- Nederlands in gang: luisteroefeningen (eigen dialogen) ----
 {title:'NiG 1 · Kennismaken in de les', lines:[['A','Hallo, ik ben Anna. Ik ben nieuw in de cursus. Hoe heet jij?'],['B','Hoi Anna, ik heet Rashid. Ik kom uit Syrië. En jij?'],['A','Ik kom uit Polen. Ik woon nu in Amersfoort. Waar woon jij?'],['B','Ik woon ook in Amersfoort, in de Stationsstraat.'],['A','Wat leuk! Woon je hier al lang?'],['B','Nee, pas zes maanden.']],
  qs:[{q:'Waar komt Anna vandaan?', opts:['Uit Syrië','Uit Polen','Uit Amersfoort'], a:1},{q:'Hoe lang woont Rashid in Amersfoort?', opts:['Zes jaar','Zes maanden','Zes weken'], a:1}]},
 {title:'NiG 2 · In de kantine', lines:[['A','Is deze plek vrij?'],['B','Ja hoor, ga zitten. Ik ben Tom.'],['A','Dank je. Ik ben Sanne. Ik werk hier pas een week.'],['B','Welkom! Zeg, hoe laat is het eigenlijk?'],['A','Het is kwart over twaalf.'],['B','O, dan heb ik nog een kwartier pauze. Om half een moet ik weer beginnen.']],
  qs:[{q:'Hoe lang werkt Sanne hier?', opts:['Een week','Een maand','Een jaar'], a:0},{q:'Hoe laat moet Tom weer werken?', opts:['Om kwart over twaalf','Om half een','Om één uur'], a:1}]},
 {title:'NiG 3 · Iets drinken in een café', lines:[['A','Goedemiddag, wat wilt u drinken?'],['B','Ik wil graag een verse muntthee. En jij, Femke?'],['C','Voor mij een alcoholvrij biertje, alsjeblieft.'],['A','Een muntthee en een alcoholvrij biertje. Verder nog iets?'],['B','Nee, dank u. O, wacht, ik trakteer vandaag, want ik ben jarig!'],['C','Gefeliciteerd! Proost!']],
  qs:[{q:'Wat drinkt Femke?', opts:['Een muntthee','Een alcoholvrij biertje','Een glas wijn'], a:1},{q:'Waarom betaalt de man?', opts:['Hij is jarig','Femke heeft geen geld','Het is gratis'], a:0}]},
 {title:'NiG 4 · Een afspraak maken op straat', lines:[['A','Hé Lisa! Hoe gaat het?'],['B','Goed hoor, en met jou?'],['A','Ook goed. Ga je mee een kopje koffie drinken?'],['B','Helaas, ik kan nu niet. Over een half uur moet ik naar de tandarts.'],['A','Jammer. Zullen we morgenavond samen eten?'],['B','Morgen lukt niet, maar vrijdagavond kan ik wel.'],['A','Prima, vrijdag om zeven uur bij mij thuis.']],
  qs:[{q:'Waarom kan Lisa nu niet mee?', opts:['Ze moet werken','Ze moet naar de tandarts','Ze is ziek'], a:1},{q:'Wanneer gaan ze samen eten?', opts:['Morgenavond','Vrijdagavond','Over een half uur'], a:1}]},
 {title:'NiG 5 · Bij de groenteboer', lines:[['A','Wie is er aan de beurt?'],['B','Ik. Mag ik een kilo tomaten en een komkommer?'],['A','Natuurlijk. Anders nog iets?'],['B','Ja, wat kosten de mango’s?'],['A','Een euro per stuk, ze zijn lekker rijp.'],['B','Dan neem ik er twee.'],['A','Dat is dan zes euro vijftig bij elkaar.']],
  qs:[{q:'Hoeveel mango’s koopt de klant?', opts:['Eén','Twee','Drie'], a:1},{q:'Hoeveel betaalt de klant in totaal?', opts:['€ 5,50','€ 6,50','€ 2,00'], a:1}]},
 {title:'NiG 6 · In het restaurant', lines:[['A','Heeft u al een keuze gemaakt?'],['B','Ja, ik neem de zalm met frietjes. En mijn vriendin wil de vegetarische salade.'],['A','Prima. Wat wilt u drinken?'],['B','Een fles spa blauw, graag.'],['A','…Smaakt het?'],['B','De zalm is heerlijk, maar de salade is een beetje zout.'],['A','O, sorry. Zal ik een nieuwe salade halen?']],
  qs:[{q:'Wat bestelt de vriendin?', opts:['De zalm','De vegetarische salade','Soep'], a:1},{q:'Wat is het probleem?', opts:['De salade is te zout','De zalm is koud','Het water is op'], a:0}]},
 {title:'NiG 7 · In de kledingwinkel', lines:[['A','Kan ik u helpen?'],['B','Ja, ik zoek een spijkerbroek in maat 32.'],['A','Welke kleur wilt u?'],['B','Donkerblauw, graag.'],['A','…En, past hij?'],['B','Nee, hij zit niet goed. Hij is te wijd. Heeft u hem ook kleiner?'],['A','Het spijt me, maat 30 hebben we alleen in het zwart.'],['B','Dan probeer ik die zwarte.']],
  qs:[{q:'Wat is het probleem met de broek?', opts:['Hij is te klein','Hij is te wijd','Hij is te duur'], a:1},{q:'Welke broek gaat de klant proberen?', opts:['Een donkerblauwe in maat 32','Een zwarte in maat 30','Een donkerblauwe in maat 30'], a:1}]},
 {title:'NiG 8 · Een bezichtiging', lines:[['A','Goedemiddag, ik ben Peter van makelaar Van Dam. Komt u binnen.'],['B','Dank u. Hoe groot is de woonkamer?'],['A','Ongeveer vijfentwintig vierkante meter. En hier is de open keuken.'],['B','Is er ook een tuin?'],['A','Nee, maar er is een groot balkon op het westen. ’s Middags heeft u hier zon.'],['B','Mooi. En wat is de huur?'],['A','Achthonderd vijftig euro per maand, inclusief water.']],
  qs:[{q:'Wat heeft de woning?', opts:['Een tuin','Een balkon','Twee keukens'], a:1},{q:'Wat zit er in de huur?', opts:['Gas','Water','Internet'], a:1}]},
 {title:'NiG 9 · Bij de huisarts', lines:[['A','Goedemorgen, wat is er aan de hand?'],['B','Ik heb overal rode bultjes en het jeukt verschrikkelijk.'],['A','Sinds wanneer heeft u dat?'],['B','Sinds zaterdag. Ik heb toen bij vrienden gegeten.'],['A','Het lijkt op een allergische reactie. Ik geef u een zalf. Niet krabben, hè!'],['B','Waar haal ik de zalf?'],['A','Ik stuur het recept naar de apotheek. Morgen kunt u het ophalen.']],
  qs:[{q:'Wat zegt de dokter over de klachten?', opts:['Het is griep','Het is waarschijnlijk een allergische reactie','Het is niet erg en gaat vanzelf over'], a:1},{q:'Wanneer kan de patiënt de zalf ophalen?', opts:['Vandaag','Morgen','Zaterdag'], a:1}]},
 {title:'NiG 10 · Bij de fietsenmaker', lines:[['A','Goedemorgen, wat is er gebeurd met uw fiets?'],['B','Ik ben gisteren gevallen. Het regende en de weg was glad.'],['A','Ik zie het. Er zit een slag in het voorwiel en het stuur staat scheef.'],['B','Kunt u hem maken?'],['A','Ja, maar dat kost ongeveer zestig euro. Hij is donderdag klaar.'],['B','Donderdag? Ik heb hem morgen nodig voor mijn werk.'],['A','Dan kunt u een leenfiets van ons gebruiken.']],
  qs:[{q:'Waarom is de man gevallen?', opts:['Hij reed te snel','De weg was glad','Zijn rem was kapot'], a:1},{q:'Wat krijgt de man tot donderdag?', opts:['Een leenfiets','Een korting','Een nieuwe fiets'], a:0}]},
 {title:'NiG 11 · Op een verjaardag', lines:[['A','Van harte gefeliciteerd met je zus!'],['B','Dank je! Ken jij mijn zus via je werk?'],['A','Nee, via de sportschool. Wat doe jij voor werk?'],['B','Ik ben verpleegkundige. Ik werk in het ziekenhuis, vaak ook ’s nachts.'],['A','Wat zwaar! Heb je nog tijd voor hobby’s?'],['B','Een beetje. Ik zwem graag, één keer per week.']],
  qs:[{q:'Hoe kent de vrouw de jarige?', opts:['Via haar werk','Via de sportschool','Het is haar buurvrouw'], a:1},{q:'Wat is de hobby van de man?', opts:['Wandelen','Zwemmen','Koken'], a:1}]},
 {title:'NiG 12 · Een klacht in het hotel', lines:[['A','Goedenavond, receptie.'],['B','Goedenavond, ik bel vanuit kamer 214. De airco doet het niet en het is erg warm in de kamer.'],['A','Wat vervelend! De technische dienst is er nu niet. Zal ik u een andere kamer geven?'],['B','Graag. Is die ook op de tweede verdieping?'],['A','Nee, op de vierde, met uitzicht op het park. U kunt de lift nemen.']],
  qs:[{q:'Wat is het probleem?', opts:['De lift is stuk','De airco werkt niet','De kamer is te klein'], a:1},{q:'Op welke verdieping is de nieuwe kamer?', opts:['De tweede','De vierde','De eerste'], a:1}]},
 {title:'NiG 13 · Inschrijven bij de sportschool', lines:[['A','Hallo, ik wil graag lid worden.'],['B','Leuk! Wilt u een maand- of een jaarabonnement?'],['A','Wat is het verschil?'],['B','Een jaarabonnement is goedkoper, maar u kunt alleen na een jaar opzeggen. Een maandabonnement kunt u elke maand opzeggen.'],['A','Ik weet nog niet of ik het leuk vind. Dan neem ik een maandabonnement.'],['B','Prima. En deze week krijgt u een gratis sportdrankje!']],
  qs:[{q:'Welk abonnement kiest de klant?', opts:['Een jaarabonnement','Een maandabonnement','Geen abonnement'], a:1},{q:'Waarom kiest de klant dit abonnement?', opts:['Het is goedkoper','Hij weet nog niet of hij het leuk vindt','Hij krijgt korting'], a:1}]},
 {title:'NiG 14 · Na de film', lines:[['A','En, wat vond je van de film?'],['B','Ik vond hem indrukwekkend. Vooral de hoofdrolspeler was heel goed.'],['A','Echt? Ik vond hem eerlijk gezegd een beetje saai. Het duurde te lang.'],['B','Dat vind ik niet. Het verhaal is waargebeurd, dat maakt het spannend.'],['A','Oké, het zal wel aan mij liggen. Zullen we nog wat drinken in het filmcafé?']],
  qs:[{q:'Wat vindt de vrouw van de film?', opts:['Saai','Indrukwekkend','Grappig'], a:1},{q:'Wat stelt de man voor?', opts:['Nog een film kijken','Iets drinken in het filmcafé','Naar huis gaan'], a:1}]},
 {title:'NiG 15 · Een praatje op het werk', lines:[['A','Goedemorgen Jasper! Koud, hè, vandaag?'],['B','Zeg dat wel! En ik heb ook nog een uur in de file gestaan.'],['A','Wat vervelend. Ben je klaar voor de presentatie van vanmiddag?'],['B','Bijna. Ik ben een beetje zenuwachtig. Heb je een tip?'],['A','Oefen het eerst een keer met mij, dan voel je je zekerder.'],['B','Goed idee! Kan het om elf uur?']],
  qs:[{q:'Waarom was Jasper laat?', opts:['Hij stond in de file','De trein was te laat','Hij was ziek'], a:0},{q:'Welk advies krijgt Jasper?', opts:['De presentatie uitstellen','Eerst oefenen met zijn collega','Thuiswerken'], a:1}]},
 {title:'NiG 16 · Thuis aan het ontbijt', lines:[['A','Goedemorgen schat, heb je lekker geslapen?'],['B','Heerlijk. Ik heb gedroomd over een tropisch eiland. Wat ga jij vandaag doen?'],['A','Ik heb vanochtend college en vanmiddag moet ik naar de bank.'],['B','Ik werk vandaag thuis. Zal ik vanavond koken?'],['A','Graag! Pasta met gehaktballetjes?'],['B','Prima. Dan doe ik straks boodschappen.']],
  qs:[{q:'Wat gaat de vrouw vanmiddag doen?', opts:['Naar college','Naar de bank','Koken'], a:1},{q:'Wie kookt er vanavond?', opts:['De vrouw','De man','Niemand, ze gaan uit eten'], a:1}]},
],

schrijven: [
 {type:'form', title:'Formulier: inschrijven bij de sportschool', prompt:'U wilt lid worden van sportschool FitLife. Vul het formulier in. Schrijf bij “Opmerking” een hele zin: wanneer wilt u sporten en waarom?',
  fields:['Voornaam','Achternaam','Geboortedatum','Adres','Postcode en woonplaats','Telefoonnummer','Opmerking (hele zin)'],
  model:['Sara','El Amrani','12-04-1990','Lindenstraat 23','3512 AB Utrecht','06-12345678','Ik wil graag op dinsdagavond sporten, want ik wil fitter worden.'],
  checklist:['All fields are filled in','Date written as dd-mm-jjjj','The comment is a full sentence with a capital letter and a full stop','You gave a reason (want / omdat)']},
 {type:'text', title:'E-mail: ziek melden', prompt:'U bent ziek en kunt morgen niet naar uw Nederlandse les. Schrijf een e-mail aan uw docent, Petra.\nSchrijf:\n• dat u niet kunt komen\n• waarom niet\n• vraag wat het huiswerk is',
  checklist:['Opening: “Beste Petra,”','You say you cannot come (Ik kan morgen niet naar de les komen.)','You give the reason (want ik ben ziek / ik heb koorts)','You ask about the homework (Wat is het huiswerk?)','Closing: “Groeten / Met vriendelijke groet,” + your name'],
  model:`Beste Petra,

Ik kan morgen niet naar de les komen, want ik ben ziek. Ik heb koorts en hoofdpijn.
Wat is het huiswerk voor volgende week? Kunt u dat mailen?

Met vriendelijke groet,
Sara`},
 {type:'text', title:'Briefje voor de buren', prompt:'U geeft zaterdag een feest voor uw verjaardag. Schrijf een briefje voor uw buren.\nSchrijf:\n• wanneer het feest is (dag en tijd)\n• dat het misschien lawaai geeft\n• nodig de buren uit',
  checklist:['Opening: “Beste buren,”','Day AND time of the party','Mention noise / sorry (Het kan wat lawaai geven, sorry!)','Invitation (U bent ook welkom! / Komen jullie ook?)','Name + house number at the end'],
  model:`Beste buren,

Zaterdag 12 april geef ik een feest, want ik ben jarig. Het feest is van 20.00 tot 24.00 uur.
Misschien is er wat lawaai. Sorry daarvoor!
Jullie zijn ook van harte welkom.

Groetjes,
Ahmed (nummer 14)`},
 {type:'text', title:'E-mail aan de verhuurder', prompt:'De verwarming in uw huis is kapot. Schrijf een e-mail aan de verhuurder, meneer Jansen.\nSchrijf:\n• wat het probleem is\n• sinds wanneer\n• wanneer de monteur kan komen',
  checklist:['Opening: “Geachte heer Jansen,” or “Beste meneer Jansen,”','Problem: De verwarming is kapot / doet het niet','Since when: sinds maandag / al drie dagen','When you are home: Ik ben … thuis','Closing: “Met vriendelijke groet,” + name + address'],
  model:`Geachte heer Jansen,

De verwarming in mijn huis is kapot. Hij doet het sinds maandag niet meer en het is erg koud in huis.
Kan er een monteur komen? Ik ben op woensdag en vrijdag de hele dag thuis.

Met vriendelijke groet,
Maria Lopez
Kerkstraat 5, Utrecht`},
 {type:'text', title:'Kaart: bedanken', prompt:'Uw collega heeft u geholpen met verhuizen. Schrijf een kaartje.\nSchrijf:\n• bedank uw collega\n• wat hij gedaan heeft\n• nodig hem uit voor eten',
  checklist:['Opening: “Hoi / Beste …,”','Thank you (Bedankt voor je hulp!)','What he did (Je hebt de kasten gedragen…)','Invitation with a day (Kom je vrijdag bij mij eten?)','Closing + name'],
  model:`Beste Tom,

Heel erg bedankt voor je hulp met verhuizen! Je hebt de hele dag dozen en kasten gedragen.
Ik wil je graag uitnodigen voor het eten. Kun je volgende week vrijdag om zes uur?

Groetjes,
Lina`},
 {type:'text', title:'Zinnen afmaken', prompt:'Maak de zinnen af (een hele zin):\n1. In het weekend ga ik graag …\n2. Ik leer Nederlands, want …\n3. Als het regent, …\n4. Gisteren heb ik …',
  checklist:['Each sentence is complete and ends with a full stop','Sentence 2: after “want” the order is normal (want ik wil…)','Sentence 3: after “Als het regent,” the verb comes first (…, blijf ik thuis)','Sentence 4: perfect tense (heb ik … gekookt / ben ik … gegaan)'],
  model:`1. In het weekend ga ik graag naar de markt.
2. Ik leer Nederlands, want ik wil hier werken.
3. Als het regent, blijf ik thuis.
4. Gisteren heb ik met mijn zus gekookt.`},
 {type:'form', title:'Formulier: afspraak bij de gemeente', prompt:'U wilt een afspraak maken om een nieuwe ID-kaart aan te vragen. Vul het formulier in.',
  fields:['Naam','BSN (verzin een nummer)','Waarvoor wilt u een afspraak?','Welke dag past u het best?','Waarom die dag? (hele zin)'],
  model:['Fatima Haddad','123456789','Een nieuwe ID-kaart aanvragen','Donderdag','Op donderdag werk ik niet, dus dan heb ik tijd.'],
  checklist:['All fields filled in','The reason is a full sentence','Capital letter at the start, full stop at the end']},
 // ---- Nederlands in gang: schrijfopdrachten (eigen opdrachten) ----
 {type:'form', title:'NiG 1 · Formulier: inschrijven voor een taalcursus', prompt:'U wilt u inschrijven voor een cursus Nederlands. Vul het formulier in. Schrijf bij “Waarom wilt u Nederlands leren?” een hele zin.',
  fields:['Voornaam','Achternaam','Land van herkomst','Adres','Postcode en woonplaats','E-mailadres','Waarom wilt u Nederlands leren? (hele zin)'],
  model:['Karim','Benali','Marokko','Molenweg 8','3811 KD Amersfoort','k.benali@mail.nl','Ik wil Nederlands leren, want ik wil met mijn buren praten.'],
  checklist:['All fields are filled in','Name with a capital letter','Postcode format: 4 numbers + 2 letters','The reason is a full sentence with want or omdat']},
 {type:'text', title:'NiG 2 · E-mail: over uw familie', prompt:'Uw nieuwe collega Tom vraagt in een e-mail naar uw familie. Schrijf hem terug.\nSchrijf:\n• hoe groot uw familie is\n• iets over één familielid (wie, hoe oud, hoe ziet hij/zij eruit)\n• wanneer iemand in uw familie jarig is',
  checklist:['Opening: “Hoi Tom,” / “Beste Tom,”','How big the family is (Ik heb twee broers en een zus.)','One person described (Mijn zus is 25. Ze heeft lang donker haar.)','A birthday with a month (Mijn moeder is in mei jarig.)','Closing + your name'],
  model:`Hoi Tom,

Ik heb een groot gezin. Ik heb twee broers en een zus. Mijn zus heet Leila. Ze is 25 jaar en ze heeft lang, donker haar. Ze is heel lief.
Mijn moeder is in mei jarig. Dan eten we altijd samen.

Groetjes,
Samira`},
 {type:'text', title:'NiG 3 · Uitnodiging: iets drinken', prompt:'U bent volgende week jarig. U wilt met uw klasgenoten iets drinken in een café. Schrijf een berichtje.\nSchrijf:\n• waarom u ze uitnodigt\n• wanneer en waar\n• dat u trakteert op het eerste drankje',
  checklist:['Opening: “Hallo allemaal,”','Reason (want ik ben jarig)','Day, time and place (vrijdag om vijf uur in Café De Hoek)','You treat them (Ik trakteer op het eerste drankje.)','Closing + name'],
  model:`Hallo allemaal,

Volgende week vrijdag ben ik jarig! Ik wil dat graag met jullie vieren.
Komen jullie vrijdag om vijf uur naar Café De Hoek? Het eerste drankje is van mij, ik trakteer!

Tot vrijdag,
Diego`},
 {type:'text', title:'NiG 4 · Bericht: een afspraak verzetten', prompt:'U heeft zaterdag een afspraak met uw vriendin Mila, maar u kunt niet. Stuur haar een bericht.\nSchrijf:\n• dat u zaterdag niet kunt\n• waarom niet\n• stel een andere dag en tijd voor',
  checklist:['Opening: “Hoi Mila,”','You cannot come (Ik kan zaterdag helaas niet.)','Reason with want (want ik moet werken)','New proposal with zullen (Zullen we zondagmiddag afspreken?)','Closing + name'],
  model:`Hoi Mila,

Sorry, ik kan zaterdag helaas niet, want ik moet onverwacht werken.
Zullen we zondagmiddag om drie uur koffie drinken? Dan kom ik naar het tentje bij het plein.

Groetjes,
Daan`},
 {type:'text', title:'NiG 5 · Briefje: boodschappen', prompt:'Uw huisgenoot gaat morgen naar de markt. Schrijf een briefje.\nSchrijf:\n• wat hij moet kopen (minstens 4 dingen, met hoeveelheid)\n• waarom u die dingen nodig heeft\n• dat u hem het geld terugbetaalt',
  checklist:['Opening: “Hoi …,”','At least 4 items with amounts (een kilo aardappelen, twee paprika’s)','Reason (want ik maak morgen stamppot)','You will pay back (Ik betaal je morgen terug.)','Closing + name'],
  model:`Hoi Bram,

Wil jij morgen op de markt boodschappen voor mij doen?
Ik heb nodig: een kilo aardappelen, een andijvie, twee paprika’s en een bosje peterselie.
Ik maak morgenavond stamppot voor mijn ouders.
Ik betaal je het geld morgen terug. Bedankt!

Groetjes,
Noor`},
 {type:'text', title:'NiG 6 · E-mail: tafel reserveren', prompt:'U wilt met uw collega’s eten in Restaurant De Gouden Lepel. Schrijf een e-mail.\nSchrijf:\n• voor hoeveel personen en wanneer\n• dat twee personen vegetarisch eten\n• vraag of u een tafel bij het raam kunt krijgen',
  checklist:['Opening: “Geachte heer/mevrouw,”','Number of people + day and time','Mention vegetarian guests','Polite question (Is het mogelijk om … ?)','Closing: “Met vriendelijke groet,” + name + phone number'],
  model:`Geachte heer/mevrouw,

Ik wil graag een tafel reserveren voor acht personen op vrijdag 21 maart om 19.00 uur.
Twee personen eten vegetarisch. Is het mogelijk om een tafel bij het raam te krijgen?

Met vriendelijke groet,
Yusuf Demir
06-98765432`},
 {type:'text', title:'NiG 7 · E-mail: kleding terugsturen', prompt:'U heeft online een jas gekocht, maar hij past niet. Schrijf een e-mail aan de webshop.\nSchrijf:\n• wat u gekocht heeft en wanneer\n• wat het probleem is\n• wat u wilt: een andere maat of uw geld terug',
  checklist:['Opening: “Geachte heer/mevrouw,”','What and when (Op 3 oktober heb ik een jas gekocht.)','Problem with te + adjective (De jas is te klein.)','Clear wish (Ik wil graag maat L. / Ik wil graag mijn geld terug.)','Closing + name + order number'],
  model:`Geachte heer/mevrouw,

Op 3 oktober heb ik bij u een blauwe winterjas gekocht, in maat M.
De jas is helaas te klein. Ik wil hem graag ruilen voor maat L.
Kunt u mij laten weten hoe ik de jas kan terugsturen?

Met vriendelijke groet,
Olga Petrenko
Bestelnummer: 456123`},
 {type:'text', title:'NiG 8 · Reageren op een advertentie', prompt:'U ziet een advertentie voor een appartement. Schrijf een e-mail aan de makelaar.\nSchrijf:\n• wie u bent (en met wie u wilt wonen)\n• stel een vraag over het appartement\n• vraag om een bezichtiging en zeg wanneer u kunt',
  checklist:['Opening: “Geachte heer Van Dam,”','Who you are (Ik ben … en ik zoek een woning voor mij en mijn vrouw.)','A question (Is het appartement gemeubileerd? / Is er een berging?)','Viewing request with a day you can (Ik kan maandag of woensdag na 17.00 uur.)','Closing + name + phone number'],
  model:`Geachte heer Van Dam,

Ik heb uw advertentie gezien voor het appartement in Oost. Ik zoek een woning voor mij en mijn vrouw. Wij werken allebei.
Is er ook een berging voor onze fietsen?
Ik wil het appartement graag bezichtigen. Ik kan maandag of woensdag na 17.00 uur.

Met vriendelijke groet,
Ali Hassan
06-11223344`},
 {type:'form', title:'NiG 9 · Formulier: inschrijven bij de huisarts', prompt:'U bent verhuisd en u wilt zich inschrijven bij een nieuwe huisarts. Vul het formulier in.',
  fields:['Naam','Geboortedatum','Adres','Zorgverzekeraar','Gebruikt u medicijnen? Welke?','Bent u ergens allergisch voor? (hele zin)'],
  model:['Fatima Haddad','03-07-1988','Kerkplein 2, 3011 AB Rotterdam','Zilveren Kruis','Nee','Ik ben allergisch voor noten.'],
  checklist:['All fields filled in','Date written as dd-mm-jjjj','Name of an insurance company','Allergy answer is a full sentence (Ik ben allergisch voor … / Ik heb geen allergieën.)']},
 {type:'text', title:'NiG 10 · Bericht: te laat op het werk', prompt:'U bent vanochtend met de fiets gevallen. U komt later op uw werk. Stuur een bericht naar uw leidinggevende.\nSchrijf:\n• wat er is gebeurd (gebruik de verleden tijd)\n• of u gewond bent\n• hoe laat u op uw werk bent',
  checklist:['Opening: “Beste …,” / “Hoi …,”','What happened in past tense (Ik ben gevallen, het regende en de weg was glad.)','Whether you are hurt (Gelukkig heb ik niets.)','New arrival time (Ik ben om tien uur op mijn werk.)','Closing + name'],
  model:`Beste Marco,

Ik ben vanochtend met de fiets gevallen. Het regende en de weg was glad.
Gelukkig heb ik niets, maar mijn fiets is kapot. Ik breng hem nu naar de fietsenmaker.
Ik ben om tien uur op mijn werk. Sorry!

Groeten,
Ewa`},
 {type:'text', title:'NiG 11 · Reageren op een uitnodiging', prompt:'Uw buurvrouw Ingrid nodigt u uit voor haar verjaardag. Schrijf een kort antwoord.\nSchrijf:\n• bedank haar voor de uitnodiging\n• zeg of u komt (en met wie)\n• vraag of u iets kunt meenemen of helpen',
  checklist:['Opening: “Hoi Ingrid,” / “Lieve Ingrid,”','Thank you (Bedankt voor de uitnodiging!)','Yes/no + with whom (Ik kom graag, samen met mijn man.)','Offer (Zal ik iets meenemen? / Kan ik helpen?)','Closing + name + house number'],
  model:`Lieve Ingrid,

Bedankt voor de uitnodiging! Ik kom graag op zaterdag, samen met mijn man.
Zal ik een taart meenemen? Of kan ik je helpen met de hapjes?

Tot zaterdag!
Groetjes,
Amira (nr. 11)`},
 {type:'text', title:'NiG 12 · Klacht aan het hotel', prompt:'U heeft een weekend in een hotel geslapen. Er waren problemen met de kamer. Schrijf een e-mail aan het hotel.\nSchrijf:\n• wanneer u in het hotel was en in welke kamer\n• welke twee problemen er waren\n• wat u nu van het hotel wilt',
  checklist:['Opening: “Geachte heer/mevrouw,”','Dates + room number','Two problems (De airco deed het niet. Het raam klemde.)','A clear request (Ik wil graag een deel van mijn geld terug.)','Closing: “Met vriendelijke groet,” + name'],
  model:`Geachte heer/mevrouw,

Van 9 tot 11 mei heb ik in uw hotel geslapen, in kamer 214.
Ik was niet tevreden. De airco deed het niet, dus het was heel warm in de kamer. Ook klemde het raam, en het ging niet open.
Ik heb dit doorgegeven bij de receptie, maar het is niet opgelost.
Ik wil graag een deel van mijn geld terug.

Met vriendelijke groet,
Grace Okafor`},
 {type:'text', title:'NiG 13 · Abonnement opzeggen', prompt:'U wilt uw abonnement bij sportschool FitPlus opzeggen. Schrijf een e-mail.\nSchrijf:\n• dat u uw abonnement wilt opzeggen en vanaf wanneer\n• waarom\n• vraag om een bevestiging',
  checklist:['Opening: “Geachte heer/mevrouw,”','Clear sentence: Ik wil mijn abonnement opzeggen per 1 …','Reason (want ik verhuis / want ik heb geen tijd meer)','Ask for confirmation (Kunt u mij een bevestiging sturen?)','Closing + name + member number'],
  model:`Geachte heer/mevrouw,

Ik wil mijn maandabonnement opzeggen per 1 december.
Ik verhuis volgende maand naar een andere stad, daarom kan ik niet meer bij u sporten.
Kunt u mij een bevestiging sturen?

Met vriendelijke groet,
Pieter Jansen
Lidnummer: 78451`},
 {type:'text', title:'NiG 14 · Uw mening over een film', prompt:'Uw docent vraagt: schrijf iets over een film of voorstelling die u gezien heeft.\nSchrijf:\n• wat u gezien heeft en met wie\n• waar het over ging (één of twee zinnen)\n• wat u ervan vond en waarom (gebruik omdat)',
  checklist:['What and with whom (Vorige week heb ik met mijn zus een film gezien.)','What it was about (Het ging over …)','Opinion (Ik vond de film spannend / saai / ontroerend.)','Reason with omdat — verb at the end (omdat het verhaal waargebeurd is)','At least 4 sentences'],
  model:`Vorige week heb ik met mijn zus een film gezien in het cultureel centrum.
De film ging over twee vrienden die samen met een boot naar Europa reizen.
Ik vond de film heel ontroerend, omdat het verhaal waargebeurd is.
Mijn zus vond hem een beetje lang, maar zij was ook onder de indruk.`},
 {type:'text', title:'NiG 15 · E-mail: advies vragen aan een collega', prompt:'U moet volgende week een presentatie geven op uw werk. U vindt dat moeilijk. Schrijf een e-mail aan uw collega Eva.\nSchrijf:\n• waarover de presentatie gaat en wanneer\n• wat u moeilijk vindt\n• vraag om advies of hulp',
  checklist:['Opening: “Hoi Eva,” / “Beste Eva,”','Topic + day (Volgende week dinsdag geef ik een presentatie over …)','What is difficult (Ik vind het moeilijk om voor een groep te praten.)','Ask for advice (Heb jij een tip? / Wil je met mij oefenen?)','Closing + name'],
  model:`Hoi Eva,

Volgende week dinsdag geef ik een presentatie over ons nieuwe project.
Ik vind het moeilijk om voor een grote groep te praten, want mijn Nederlands is nog niet zo goed.
Heb jij een tip voor mij? Wil je misschien een keer met mij oefenen?

Alvast bedankt!
Groetjes,
Mehmet`},
 {type:'text', title:'NiG 16 · Wat heeft u gisteren gedaan?', prompt:'Schrijf een kort stukje over uw dag van gisteren (minstens 5 zinnen).\nSchrijf:\n• hoe laat u bent opgestaan en wat u heeft ontbeten\n• wat u overdag heeft gedaan\n• wat u ’s avonds heeft gedaan',
  checklist:['Perfect tense: heb/ben + participle at the end (Ik ben om zeven uur opgestaan.)','Time words: ’s ochtends, ’s middags, ’s avonds, daarna','At least 5 sentences','After a time word the verb comes second (Daarna heb ik …)'],
  model:`Gisteren ben ik om zeven uur opgestaan. Ik heb gedoucht en ik heb brood met kaas ontbeten.
’s Ochtends heb ik thuisgewerkt. ’s Middags ben ik naar de bank gegaan.
Daarna heb ik boodschappen gedaan.
’s Avonds heb ik pasta gekookt en we hebben een aflevering van een serie gekeken.`},
],

spreken: [
 {sit:'U bent in de supermarkt. U zoekt de melk, maar u kunt die niet vinden.', q:'Wat vraagt u aan de medewerker?', model:'Pardon, mag ik iets vragen? Waar staat de melk?', time:20},
 {sit:'Uw buurman vraagt: “Wat doe je meestal in het weekend?”', q:'Wat antwoordt u?', model:'In het weekend doe ik boodschappen en ik ga vaak wandelen in het park met mijn kinderen.', time:30},
 {sit:'U bent bij de huisarts. De dokter vraagt: “Wat is het probleem?”', q:'Vertel wat uw klachten zijn en sinds wanneer.', model:'Ik heb sinds drie dagen hoofdpijn en keelpijn. Ik heb ook een beetje koorts.', time:30},
 {sit:'U belt naar uw werk. U bent ziek.', q:'Wat zegt u tegen uw leidinggevende?', model:'Goedemorgen, met Sara. Ik ben ziek, ik heb koorts. Ik kan vandaag niet komen werken.', time:30},
 {sit:'Een collega vraagt: “Hoe kom jij elke dag naar je werk?”', q:'Antwoord en vertel waarom.', model:'Ik ga met de fiets naar mijn werk, want dat is gezond en het is niet ver.', time:30},
 {sit:'U ziet een foto van een familie die samen eet.', q:'Vertel: wat eet u graag, en met wie eet u meestal?', model:'Ik eet graag rijst met kip. Meestal eet ik ’s avonds samen met mijn man en mijn kinderen.', time:45},
 {sit:'Iemand op straat vraagt: “Weet u waar het station is?”', q:'Leg de weg uit.', model:'Ja, u gaat hier rechtdoor en bij het stoplicht gaat u linksaf. Het station is aan het eind van de straat.', time:30},
 {sit:'U bent in een kledingwinkel. De broek is te groot.', q:'Wat zegt u tegen de verkoper?', model:'Deze broek is te groot. Heeft u hem ook in een kleinere maat?', time:20},
 {sit:'Uw docent vraagt: “Wat vind je moeilijk aan Nederlands?”', q:'Geef uw mening en een reden.', model:'Ik vind de uitspraak moeilijk, want sommige klanken zijn er niet in mijn taal. Maar lezen gaat goed.', time:45},
 {sit:'U wilt een afspraak maken bij de kapper.', q:'Wat zegt u aan de telefoon?', model:'Goedemiddag, ik wil graag een afspraak maken om mijn haar te laten knippen. Kan het zaterdagochtend?', time:30},
 {sit:'Uw buurvrouw vraagt: “Hoe was je vakantie?”', q:'Vertel waar u was en wat u gedaan heeft.', model:'Mijn vakantie was leuk. Ik ben naar Spanje geweest. Ik heb veel gezwommen en lekker gegeten.', time:45},
 {sit:'U staat bij de kassa. De kassière zegt: “Dat is dan 12 euro 50.”', q:'U wilt met de pinpas betalen. Wat zegt u?', model:'Mag ik pinnen?', time:15},
 {sit:'Een vriend vraagt: “Wat ga je doen na je inburgering?”', q:'Vertel over uw plannen.', model:'Na mijn inburgering wil ik een opleiding doen, want ik wil in een ziekenhuis werken.', time:45},
 {sit:'U bent te laat voor een afspraak bij de gemeente.', q:'Wat zegt u bij het loket?', model:'Goedemorgen, sorry dat ik te laat ben. De bus had vertraging. Ik heb een afspraak om tien uur.', time:30},
 // ---- Nederlands in gang: spreekopdrachten ----
 {ch:'NiG 1', sit:'Het is de eerste les. De docent zegt: “Wil je jezelf even voorstellen?”', q:'Vertel uw naam, uit welk land u komt en waar u woont.', model:'Hallo, ik heet Karim Benali. Ik kom uit Marokko en ik woon nu in Amersfoort.', time:30},
 {ch:'NiG 1', sit:'U belt de gemeente. De medewerker vraagt: “Kunt u uw achternaam spellen?”', q:'Spel uw achternaam en zeg uw postcode.', model:'Ja, B-E-N-A-L-I. Mijn postcode is 3811 KD.', time:30},
 {ch:'NiG 2', sit:'Een collega in de kantine vraagt: “Heb je een grote familie?”', q:'Vertel over uw familie.', model:'Ja, ik heb twee broers en een zus. Mijn ouders wonen nog in Turkije. Mijn zus woont ook in Nederland.', time:45},
 {ch:'NiG 2', sit:'Iemand vraagt u: “Hoe laat is het?” Het is 14.45 uur.', q:'Wat zegt u?', model:'Het is kwart voor drie.', time:15},
 {ch:'NiG 3', sit:'U zit met een vriend in een café. De medewerker vraagt wat u wilt drinken.', q:'Bestel iets voor uzelf en voor uw vriend.', model:'Ik wil graag een cappuccino, en mijn vriend wil een verse muntthee.', time:20},
 {ch:'NiG 3', sit:'U wilt in het café betalen.', q:'Wat zegt u tegen de medewerker?', model:'Mogen wij afrekenen, alstublieft? Kan ik pinnen?', time:20},
 {ch:'NiG 4', sit:'U ziet een vriend op straat. Hij vraagt: “Hé, hoe gaat het met je?”', q:'Vertel hoe het gaat en vraag hoe het met hem gaat.', model:'Het gaat goed, dank je. Ik heb het wel druk met mijn werk. En met jou?', time:20},
 {ch:'NiG 4', sit:'U wilt dit weekend iets leuks doen met een vriendin.', q:'Doe een voorstel. Gebruik “zullen”.', model:'Zullen we zaterdagmiddag samen naar de markt gaan? Daarna kunnen we koffie drinken.', time:30},
 {ch:'NiG 5', sit:'U staat bij de groenteboer op de markt.', q:'Vraag wat de tomaten kosten en koop een kilo.', model:'Goedemorgen, wat kosten de tomaten? … Dan wil ik graag een kilo tomaten.', time:20},
 {ch:'NiG 5', sit:'Een vriendin vraagt: “Wat koop jij meestal op de markt?”', q:'Vertel wat u koopt en waarom op de markt.', model:'Ik koop meestal groente en fruit op de markt, want het is vers en goedkoper dan in de supermarkt.', time:30},
 {ch:'NiG 6', sit:'U zit in een restaurant. De serveerster vraagt: “Smaakt het?”', q:'Zeg wat u van het eten vindt.', model:'Het vlees is heerlijk, maar de soep is een beetje te zout.', time:20},
 {ch:'NiG 6', sit:'U wilt in een restaurant een hoofdgerecht bestellen. U eet geen vlees.', q:'Wat zegt u tegen de ober?', model:'Ik eet geen vlees. Heeft u ook een vegetarisch hoofdgerecht?', time:20},
 {ch:'NiG 7', sit:'U past een jas in een winkel. Hij is te klein.', q:'Wat zegt u tegen de verkoper?', model:'Deze jas zit niet goed, hij is te klein. Heeft u hem ook in een grotere maat?', time:20},
 {ch:'NiG 7', sit:'Een vriendin vraagt: “Welke trui vind je mooier, de rode of de blauwe?”', q:'Geef uw mening en vergelijk.', model:'Ik vind de blauwe mooier dan de rode. Blauw staat jou beter.', time:30},
 {ch:'NiG 8', sit:'Een collega vraagt: “Hoe woon je?”', q:'Beschrijf uw huis.', model:'Ik woon in een appartement op de tweede verdieping. Ik heb een woonkamer, een keuken, twee slaapkamers en een klein balkon.', time:45},
 {ch:'NiG 8', sit:'U bent bij een bezichtiging. U wilt weten wat de woning kost.', q:'Stel twee vragen aan de makelaar.', model:'Wat is de huur per maand? Zijn gas, water en licht inbegrepen?', time:30},
 {ch:'NiG 9', sit:'U bent bij de huisarts. U heeft sinds twee dagen buikpijn.', q:'Vertel wat uw klacht is en wat u al gedaan heeft.', model:'Ik heb sinds twee dagen buikpijn. Ik heb al paracetamol genomen, maar het heeft niet geholpen.', time:30},
 {ch:'NiG 9', sit:'Uw collega vraagt: “Wat heb je in het weekend gedaan?”', q:'Vertel het. Gebruik de voltooide tijd.', model:'Zaterdag heb ik gevoetbald en daarna heb ik met vrienden gegeten. Zondag ben ik thuis gebleven.', time:45},
 {ch:'NiG 10', sit:'U begrijpt niet goed wat de fietsenmaker zegt.', q:'Vraag om verduidelijking.', model:'Sorry, dat heb ik niet goed verstaan. Wat bedoelt u? Kunt u het nog een keer zeggen?', time:20},
 {ch:'NiG 10', sit:'Uw buurman vraagt: “Wat is er met je fiets gebeurd?”', q:'Vertel wat er gebeurd is.', model:'Ik ben gisteren gevallen. Het regende en de weg was glad. Nu zit er een slag in mijn wiel.', time:30},
 {ch:'NiG 11', sit:'Op een verjaardag vraagt iemand: “Wat doe jij voor werk?”', q:'Vertel over uw werk of studie en uw hobby.', model:'Ik werk als kok in een restaurant. In mijn vrije tijd wandel ik graag en ik speel voetbal.', time:45},
 {ch:'NiG 11', sit:'Uw vriendin vertelt: “Ik heb een nieuwe baan!”', q:'Reageer op haar nieuws.', model:'Wat leuk! Gefeliciteerd! Wat voor werk ga je doen?', time:15},
 {ch:'NiG 12', sit:'U staat bij de receptie van een hotel. U zoekt het station.', q:'Vraag de weg.', model:'Pardon, kunt u mij vertellen hoe ik bij het station kom? Is het ver lopen?', time:20},
 {ch:'NiG 12', sit:'In uw hotelkamer doet de waterkoker het niet.', q:'Bel de receptie en vertel het probleem.', model:'Goedenavond, ik bel vanuit kamer 108. De waterkoker doet het niet. Kunt u iemand sturen?', time:30},
 {ch:'NiG 13', sit:'Een vriend vraagt: “Hoeveel beweeg jij per week?”', q:'Vertel wat u doet aan sport en hoe vaak.', model:'Ik ga twee keer per week naar de sportschool. Ook fiets ik elke dag naar mijn werk.', time:30},
 {ch:'NiG 13', sit:'Uw vriend vraagt: “Wat ga je volgend jaar doen?”', q:'Vertel over uw plannen. Gebruik “gaan” of “zullen”.', model:'Volgend jaar ga ik een opleiding doen. Ik zal ook meer gaan sporten.', time:45},
 {ch:'NiG 14', sit:'Een vriend vraagt: “Wat vond je van de film?”', q:'Geef uw mening en een reden.', model:'Ik vond de film heel spannend, omdat je tot het einde niet weet wat er gebeurt.', time:30},
 {ch:'NiG 14', sit:'U wilt weten wat uw collega van het concert vond.', q:'Vraag naar haar mening.', model:'Hoe vond jij het concert gisteren? Vond je het koor goed?', time:20},
 {ch:'NiG 15', sit:'Het is maandagochtend. U ziet een collega bij het koffieapparaat.', q:'Maak een praatje.', model:'Goedemorgen! Heb je een leuk weekend gehad? Wat een koud weer vandaag, hè?', time:30},
 {ch:'NiG 15', sit:'Uw collega zegt: “Ik ben zo moe, ik slaap slecht.”', q:'Geef haar een advies.', model:'Misschien moet je ’s avonds niet meer naar je telefoon kijken. Ga een stukje wandelen voor het slapen.', time:30},
 {ch:'NiG 16', sit:'Een klasgenoot vraagt: “Hoe ziet jouw ochtend eruit?”', q:'Vertel wat u ’s ochtends doet.', model:'Ik sta om half zeven op. Dan douche ik en ontbijt ik. Om acht uur fiets ik naar mijn werk.', time:45},
 {ch:'NiG 16', sit:'Uw vriend belt en vraagt: “Wat is er in jouw nieuwe kamer?”', q:'Beschrijf uw kamer. Gebruik “er is / er staat”.', model:'In mijn kamer staat een bed en er is een grote kast. Bij het raam staat een bureau.', time:30},
],

knm: [
 {t:'Gezondheid', q:'U bent ziek en u wilt naar de dokter. Wat doet u eerst?', opts:['U gaat direct naar het ziekenhuis','U belt de huisarts voor een afspraak','U gaat naar de apotheek'], a:1, ex:'In NL you always go to the huisarts first. You only go to the hospital with a verwijzing (referral) or in an emergency.'},
 {t:'Gezondheid', q:'Wanneer belt u 112?', opts:['Als u een afspraak wilt maken','Als er levensgevaar is','Als u een recept nodig heeft'], a:1, ex:'112 is only for emergencies: fire, a serious accident, danger to life.'},
 {t:'Gezondheid', q:'Is een zorgverzekering verplicht in Nederland?', opts:['Ja, voor iedereen die hier woont','Nee, het is vrijwillig','Alleen voor mensen met werk'], a:0, ex:'Everyone living or working in NL must have basic health insurance (basisverzekering). Children up to 18 are insured for free on a parent’s policy.'},
 {t:'Gezondheid', q:'Wat is het eigen risico?', opts:['Het bedrag dat u zelf betaalt voor zorg voordat de verzekering betaalt','Het geld dat u terugkrijgt','Een boete van de dokter'], a:0, ex:'The eigen risico (≈ €385/year) is what you pay yourself for some care. Visits to the huisarts are free.'},
 {t:'Wonen', q:'U heeft een probleem met de buren: ze maken elke avond lawaai. Wat doet u eerst?', opts:['De politie bellen','Met de buren praten','Een brief naar de gemeente sturen'], a:1, ex:'In NL it’s normal to first talk to the neighbours yourself, calmly. If that doesn’t help: buurtbemiddeling (neighbourhood mediation).'},
 {t:'Wonen', q:'De wasmachine van de verhuurder is kapot. Wie moet hem repareren?', opts:['De huurder','De verhuurder','De gemeente'], a:1, ex:'Big repairs are for the landlord (verhuurder). Small things like a light bulb are for you (the tenant).'},
 {t:'Wonen', q:'U heeft een laag inkomen en hoge huur. Wat kunt u aanvragen?', opts:['Huurtoeslag','Kinderbijslag','WW'], a:0, ex:'Huurtoeslag (rent allowance) is arranged by Dienst Toeslagen (Belastingdienst).'},
 {t:'Wonen', q:'U gaat verhuizen naar een andere stad. Wat moet u doen?', opts:['Niets','U inschrijven bij de nieuwe gemeente','Een brief naar de koning sturen'], a:1, ex:'You must register your new address with the gemeente within 5 days of moving.'},
 {t:'Werk', q:'U bent ziek en kunt niet werken. Wat doet u?', opts:['U blijft thuis en zegt niets','U meldt zich ziek bij uw werkgever','U stuurt een vriend'], a:1, ex:'Call your employer/manager yourself, usually before your shift starts, following the company rules.'},
 {t:'Werk', q:'Wat is het minimumloon?', opts:['Het laagste salaris dat een werkgever mag betalen','Het salaris van een stagiair','Een uitkering'], a:0, ex:'Employers must pay at least the wettelijk minimumloon (legal minimum wage).'},
 {t:'Werk', q:'U bent uw baan kwijt. Waar vraagt u een WW-uitkering aan?', opts:['Bij het UWV','Bij de huisarts','Bij de bank'], a:0, ex:'UWV handles WW (unemployment benefit) and helps you find work via werk.nl.'},
 {t:'Werk', q:'Mag een werkgever u minder betalen omdat u een vrouw bent?', opts:['Ja','Nee, dat is discriminatie','Alleen in de eerste maand'], a:1, ex:'Discrimination by gender, religion, origin or sexual orientation is forbidden (artikel 1 van de Grondwet).'},
 {t:'Werk', q:'Wat krijgt u meestal in mei naast uw salaris?', opts:['Vakantiegeld','Kerstpakket','Belasting terug'], a:0, ex:'Vakantiegeld is about 8% of your gross annual salary, usually paid in May or June.'},
 {t:'Onderwijs', q:'Vanaf welke leeftijd moet een kind naar school?', opts:['4 jaar','5 jaar','6 jaar'], a:1, ex:'Kids may start at 4, but school is compulsory (leerplicht) from 5 years old.'},
 {t:'Onderwijs', q:'Uw kind is ziek. Wat doet u?', opts:['U belt of mailt de school voor schooltijd','U doet niets','U belt de leerplichtambtenaar'], a:0, ex:'Always notify the school before school starts.'},
 {t:'Onderwijs', q:'Wat is een tien-minutengesprek?', opts:['Een kort gesprek tussen ouders en leraar over het kind','Een pauze op school','Een toets'], a:0, ex:'Parents are expected to come. Showing interest in your child’s school is very normal in NL.'},
 {t:'Onderwijs', q:'Mag u uw kind buiten de schoolvakanties mee op vakantie nemen?', opts:['Ja, altijd','Nee, alleen met toestemming van de directeur in bijzondere gevallen','Ja, als u het de juf vertelt'], a:1, ex:'Otherwise you can get a fine. The leerplichtambtenaar checks this.'},
 {t:'Overheid', q:'Wie is het staatshoofd van Nederland?', opts:['De minister-president','De koning','De burgemeester'], a:1, ex:'King Willem-Alexander is head of state. The minister-president leads the government.'},
 {t:'Overheid', q:'Wie kiest de leden van de Tweede Kamer?', opts:['De koning','De Nederlandse burgers (18+) via verkiezingen','De gemeente'], a:1, ex:'Tweede Kamer elections are held every 4 years. Only Dutch nationals can vote. Non-Dutch residents (after 5 years) can vote in gemeente elections.'},
 {t:'Overheid', q:'Wat staat in artikel 1 van de Grondwet?', opts:['Iedereen moet werken','Iedereen wordt in gelijke gevallen gelijk behandeld','Iedereen moet Nederlands spreken'], a:1, ex:'Article 1: equal treatment, no discrimination.'},
 {t:'Overheid', q:'Wat regelt de gemeente?', opts:['Paspoort, afval en bijstand','Het leger','De wetten van het land'], a:0, ex:'The gemeente handles ID documents, registration (BRP), waste, bijstand, local roads and parks.'},
 {t:'Overheid', q:'U krijgt een brief van de Belastingdienst. Wat doet u?', opts:['U gooit hem weg','U leest hem goed en reageert op tijd','U wacht een jaar'], a:1, ex:'Official letters often have a deadline. Ask for help (e.g. from the gemeente or a volunteer) if you don’t understand it.'},
 {t:'Geschiedenis', q:'Wat vieren we op 27 april?', opts:['Koningsdag','Bevrijdingsdag','Sinterklaas'], a:0, ex:'Koningsdag, the King’s birthday: orange clothes and street markets (vrijmarkt).'},
 {t:'Geschiedenis', q:'Wat gebeurt er op 4 mei om 20.00 uur?', opts:['Vuurwerk','Twee minuten stilte voor de oorlogsslachtoffers','Een grote markt'], a:1, ex:'On 4 May (Dodenherdenking) the country remembers the war victims. 5 May is Bevrijdingsdag (Liberation Day, 1945).'},
 {t:'Geschiedenis', q:'Wat was de Watersnoodramp van 1953?', opts:['Een grote overstroming in Zeeland','Een oorlog','Een droge zomer'], a:0, ex:'After this flood the Deltawerken were built to protect the land against the sea.'},
 {t:'Normen en waarden', q:'U heeft een afspraak om 10.00 uur. Hoe laat komt u?', opts:['Om 10.00 uur of iets eerder','Om 10.30 uur','Wanneer het u uitkomt'], a:0, ex:'Being on time is very important in NL. If you’re late, call and let them know.'},
 {t:'Normen en waarden', q:'Een collega zegt direct: “Dit rapport is niet goed.” Wat betekent dit meestal?', opts:['Hij is boos op u','Nederlanders zijn vaak direct; het gaat over het werk, niet over u','U wordt ontslagen'], a:1, ex:'Dutch communication is direct. Feedback is about the work, not about you as a person.'},
 {t:'Normen en waarden', q:'U bent uitgenodigd voor een verjaardag. Wat is normaal?', opts:['Alle aanwezigen feliciteren','Alleen eten en weggaan','Niets zeggen'], a:0, ex:'At a Dutch birthday you also congratulate the family: “Gefeliciteerd met je zoon!”'},
 {t:'Normen en waarden', q:'Mogen twee mannen in Nederland met elkaar trouwen?', opts:['Ja','Nee','Alleen in Amsterdam'], a:0, ex:'NL was the first country with same-sex marriage (2001).'},
 {t:'Geld', q:'U heeft schulden en u kunt de rekeningen niet betalen. Wat doet u?', opts:['Niets','Hulp vragen bij de gemeente (schuldhulpverlening)','Nieuwe leningen nemen'], a:1, ex:'The gemeente offers free debt help (schuldhulpverlening). Ask early.'},
 {t:'Geld', q:'Wat is kinderbijslag?', opts:['Geld van de overheid voor de kosten van kinderen','Salaris voor kinderen','Een schoolboek'], a:0, ex:'Paid per quarter by the SVB for children under 18.'},
 {t:'Instanties', q:'Wat is DigiD?', opts:['Een inlogcode voor websites van de overheid','Een bankpas','Een telefoonnummer'], a:0, ex:'You use DigiD for the Belastingdienst, DUO, toeslagen, your health insurer, etc. Never share it.'},
 // ---- Nederlands in gang: KNM bij de thema’s ----
 {ch:'NiG 1', t:'Normen en waarden', q:'U ontmoet iemand voor het eerst, bijvoorbeeld een nieuwe collega. Wat is in Nederland gewoon?', opts:['Een hand geven en uw naam zeggen','Niets zeggen','Direct vragen hoeveel hij verdient'], a:0, ex:'At a first meeting it is common to shake hands and say your name. Dutch people are fairly direct, but salary is a private topic.'},
 {ch:'NiG 2', t:'Werk', q:'Een collega is jarig. Wat gebeurt er vaak op een Nederlands werk?', opts:['De jarige trakteert, bijvoorbeeld op taart','De baas geeft een vrije week','Niemand zegt iets'], a:0, ex:'In NL the birthday person usually brings a treat (trakteren) for colleagues or classmates.'},
 {ch:'NiG 3', t:'Gezondheid', q:'Vanaf welke leeftijd mag u in Nederland alcohol kopen?', opts:['16 jaar','18 jaar','21 jaar'], a:1, ex:'Since 2014 the minimum age for buying alcohol in NL is 18. Shops and cafés can ask for ID.'},
 {ch:'NiG 4', t:'Normen en waarden', q:'U heeft om 15.00 uur een afspraak met een vriend, maar u komt een half uur later. Wat doet u?', opts:['Niets, dat is normaal','Een bericht sturen of bellen dat u later komt','De afspraak vergeten'], a:1, ex:'Being on time is important in NL. If you are late, let the other person know in advance.'},
 {ch:'NiG 5', t:'Geld', q:'Hoe betalen de meeste mensen in Nederland in een winkel?', opts:['Met een cheque','Met de pinpas of telefoon','Alleen contant'], a:1, ex:'Most payments in NL are made by debit card (pinnen) or phone. Some market stalls prefer cash for small amounts.'},
 {ch:'NiG 6', t:'Normen en waarden', q:'Moet u in een Nederlands restaurant een fooi geven?', opts:['Ja, altijd 20%','Nee, het is niet verplicht','Ja, anders krijgt u een boete'], a:1, ex:'Service is included in the price. A tip (fooi) is a nice extra if you are happy, often around 5–10%, but it is not required.'},
 {ch:'NiG 7', t:'Geld', q:'U koopt iets in een webshop. Hoeveel dagen heeft u meestal om het terug te sturen?', opts:['Minstens 14 dagen','2 dagen','U mag het nooit terugsturen'], a:0, ex:'For online purchases you have a cooling-off period (bedenktijd) of at least 14 days in the EU. In a physical shop, returning is a shop policy, not a right.'},
 {ch:'NiG 8', t:'Wonen', q:'U huurt een nieuwe woning. Wat is de borg?', opts:['Geld dat u aan het begin betaalt en meestal terugkrijgt als u vertrekt','De huur van de laatste maand','Een cadeau voor de verhuurder'], a:0, ex:'The deposit (borg) protects the landlord against damage or unpaid rent. You get it back when you leave the house in good condition.'},
 {ch:'NiG 9', t:'Gezondheid', q:'Het is zaterdagavond. U heeft snel een dokter nodig, maar het is geen levensgevaar. Wie belt u?', opts:['112','De huisartsenpost','De apotheek'], a:1, ex:'Outside office hours you call the huisartsenpost. 112 is only for life-threatening emergencies.'},
 {ch:'NiG 10', t:'Verkeer', q:'Wat is verplicht als u in het donker fietst?', opts:['Een helm','Licht voor en achter','Een fietstas'], a:1, ex:'In the dark you must have a white or yellow front light and a red rear light. Without lights you can get a fine.'},
 {ch:'NiG 11', t:'Normen en waarden', q:'U bent op de verjaardag van een vriendin. Wie feliciteert u als u binnenkomt?', opts:['Alleen de jarige','De jarige en ook de familie, bijvoorbeeld “Gefeliciteerd met je moeder”','Niemand'], a:1, ex:'At Dutch birthday parties you often congratulate the family members too, e.g. “Gefeliciteerd met je dochter!”'},
 {ch:'NiG 12', t:'Verkeer', q:'U reist met de trein. Wat moet u doen met uw OV-chipkaart of bankpas?', opts:['Inchecken bij het begin en uitchecken aan het eind van de reis','Alleen inchecken','Niets, de conducteur regelt het'], a:0, ex:'Always check in AND check out at the card readers. If you forget to check out, you pay too much.'},
 {ch:'NiG 13', t:'Geld', q:'U wilt een abonnement (bijvoorbeeld sportschool of telefoon) opzeggen. Wat is verstandig?', opts:['Gewoon niet meer betalen','Schriftelijk of via de app opzeggen en de bevestiging bewaren','Niets doen, het stopt vanzelf'], a:1, ex:'Cancel in writing or via the official channel and keep the confirmation. If you just stop paying, you can get debts and extra costs.'},
 {ch:'NiG 14', t:'Onderwijs', q:'Wat kunt u doen in een openbare bibliotheek in Nederland?', opts:['Alleen boeken kopen','Boeken lenen, en vaak gratis taalcafés en computerhulp','Alleen studeren voor studenten'], a:1, ex:'Libraries lend books (children are usually free) and often offer free language cafés (taalcafé) and help with computers and DigiD.'},
 {ch:'NiG 15', t:'Werk', q:'U werkt fulltime (5 dagen per week). Hoeveel vakantiedagen heeft u minimaal per jaar?', opts:['10 dagen','20 dagen','30 dagen'], a:1, ex:'By law you get at least 4 times the number of days you work per week: 5 × 4 = 20 days. Many employers give more.'},
 {ch:'NiG 16', t:'Wonen', q:'Wat doet u met oud papier en karton?', opts:['In de gewone vuilniszak','In de papiercontainer of papierbak','Op straat zetten'], a:1, ex:'In NL people separate their waste. Paper goes in the paper container. Check the gemeente’s website or app for the rules where you live.'},
],
};
