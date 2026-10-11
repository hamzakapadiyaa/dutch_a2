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
 {title:'NiG 1 · E-mail van de taalschool', tier:1, text:`Van: Taalschool De Brug
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
 {title:'NiG 2 · Mededeling in de kantine', tier:1, text:`KANTINE – NIEUWE OPENINGSTIJDEN

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
 {title:'NiG 3 · Menukaart van Café De Hoek', tier:1, text:`CAFÉ DE HOEK

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
 {title:'NiG 4 · Berichtje van Mila', tier:1, text:`Hoi Daan!
Hoe gaat het met je? Met mij gaat het goed, maar ik heb het druk met mijn nieuwe baan.
Zullen we zaterdag samen koffie drinken? Ik ken een leuk tentje bij het plein.
’s Ochtends moet ik naar de markt, maar ’s middags heb ik tijd. Kan jij om drie uur?
Groetjes, Mila
PS: Doe je de groeten aan je moeder?`,
 qs:[
  {q:'Wat stelt Mila voor?', opts:['Samen naar de markt gaan','Samen koffie drinken','Samen werken'], a:1},
  {q:'Wanneer heeft Mila tijd?', opts:['Zaterdagochtend','Zaterdagmiddag','Zaterdagavond'], a:1},
 ]},
 {title:'NiG 5 · Aanbieding op de markt', tier:1, text:`GROENTE & FRUIT BIJ HASSAN – elke woensdag en zaterdag op de markt

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
 {title:'NiG 6 · Restaurant De Gouden Lepel', tier:1, text:`RESTAURANT DE GOUDEN LEPEL

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
 {title:'NiG 7 · Ruilen bij ModeMax', tier:1, text:`RUILEN EN TERUGBRENGEN BIJ MODEMAX

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
 {title:'NiG 8 · Advertentie: appartement te huur', tier:1, text:`TE HUUR: Appartement in de buurt Oost

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
 {title:'NiG 9 · Huisartsenpraktijk Zuid', tier:1, text:`HUISARTSENPRAKTIJK ZUID

Afspraak maken: bel ’s ochtends tussen 8.00 en 10.00 uur.
Herhaalrecept nodig? Bestel het via onze website. Het recept staat na twee werkdagen klaar bij de apotheek.

’s Avonds, ’s nachts en in het weekend belt u bij spoed de huisartsenpost: 088 – 123 00 00.
Bij levensgevaar belt u altijd 112.`,
 qs:[
  {q:'Wanneer kunt u bellen voor een afspraak?', opts:['’s Ochtends tussen 8 en 10 uur','De hele dag','’s Avonds'], a:0},
  {q:'Het is zondag en uw kind heeft hoge koorts. Wie belt u?', opts:['De praktijk op maandag','De huisartsenpost','De apotheek'], a:1},
 ]},
 {title:'NiG 10 · Fietsenmaker Snel', tier:1, text:`FIETSENMAKER SNEL

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
 {title:'NiG 11 · Uitnodiging', tier:1, text:`Hoera, ik word 40!

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
 {title:'NiG 12 · Bevestiging van uw hotelkamer', tier:1, text:`Hotel Zeezicht – bevestiging van uw reservering

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
 {title:'NiG 13 · Sportschool FitPlus', tier:1, text:`SPORTSCHOOL FITPLUS – KIES JE ABONNEMENT

Maandabonnement: € 34,95 per maand, elke maand opzeggen.
Jaarabonnement: € 27,95 per maand, je zit één jaar vast.
Met beide abonnementen kun je onbeperkt sporten en meedoen aan alle groepslessen.

Nu in de aanbieding: schrijf je deze maand in en betaal geen inschrijfgeld (normaal € 20).
Opzeggen? Dat kan via de app of bij de balie.`,
 qs:[
  {q:'Welk abonnement is per maand goedkoper?', opts:['Het maandabonnement','Het jaarabonnement','Ze kosten hetzelfde'], a:1},
  {q:'Wat krijgt u als u zich deze maand inschrijft?', opts:['Een gratis groepsles','Geen inschrijfgeld','Een maand gratis'], a:1},
 ]},
 {title:'NiG 14 · Programma Cultureel Centrum De Linde', tier:1, text:`CULTUREEL CENTRUM DE LINDE – PROGRAMMA MAART

• Vrijdag 7 maart, 20.00 uur – Filmavond: een spannend drama, daarna napraten in het filmcafé. € 8
• Zaterdag 15 maart, 14.00 – 17.00 uur – Fototentoonstelling “Mijn stad”. Gratis
• Zondag 23 maart, 15.00 uur – Concert van het buurtkoor. € 5, kinderen gratis

Elke dinsdag van 10.00 tot 12.00 uur: taalcafé in de bibliotheek. Oefen je Nederlands! Gratis.`,
 qs:[
  {q:'U wilt gratis uw Nederlands oefenen. Wanneer gaat u?', opts:['Vrijdagavond','Dinsdagochtend','Zondagmiddag'], a:1},
  {q:'Wat kost het concert voor twee volwassenen en één kind?', opts:['€ 5','€ 10','€ 15'], a:1},
 ]},
 {title:'NiG 15 · E-mail van uw leidinggevende', tier:1, text:`Van: Eva Smits
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
 {title:'NiG 16 · Mededeling van de woningcorporatie', tier:1, text:`Beste bewoners van de Lindenflat,

Op dinsdag 18 februari is er van 9.00 tot 13.00 uur geen warm water. Er is onderhoud aan het systeem.
De lift werkt die ochtend ook niet.
Heeft u na 13.00 uur nog steeds geen warm water? Meld de storing dan via 0800 – 456 78 90.

Onze excuses voor het ongemak.
Woningcorporatie Thuis`,
 qs:[
  {q:'Wat is er op 18 februari aan de hand?', opts:['Er is geen warm water','Er komt een nieuwe lift','De flat is dicht'], a:0},
  {q:'Wanneer belt u het nummer?', opts:['Om 9.00 uur','Als er na 13.00 uur nog geen warm water is','Als de lift werkt'], a:1},
 ]},
 // ---- graduated practice: start easy within a chapter, build up to exam level ----
 {title:'NiG 1 · Briefje van de docent', ch:'NiG 1', tier:2, text:`Beste cursisten,

Volgende week dinsdag is er geen les. De docent is ziek. De les van dinsdag is verplaatst naar donderdag 19.00 uur, in hetzelfde lokaal.
Maak thuis oefening 3 en 4 op bladzijde 12.

Groeten,
Mevrouw De Vries`,
 qs:[
  {q:'Wanneer is de les verplaatst?', opts:['Naar donderdag 19.00 uur','Naar woensdag 19.00 uur','Naar dinsdag 20.00 uur'], a:0, hint:'Kijk naar de nieuwe dag en tijd in de tekst.'},
  {q:'Wat moeten de cursisten thuis doen?', opts:['Oefening 3 en 4 maken','Een e-mail sturen','Bellen met de docent'], a:0, hint:"Let op het woord 'oefening'."},
 ]},
 {title:'NiG 1 · Appje van een klasgenoot', ch:'NiG 1', tier:3, text:`Hoi! Ben je er morgen ook? Ik heb mijn boek niet bij me, mag ik die van jou lenen tijdens de pauze? We kunnen samen koffie drinken om kwart voor elf, voor de les begint. De les begint om elf uur, toch? Tot morgen! - Fatima`,
 qs:[
  {q:'Wat vraagt Fatima?', opts:['Of ze het boek mag lenen','Of ze geld mag lenen','Of de les is afgelast'], a:0, hint:"Let op het woord 'lenen'."},
  {q:'Hoe laat willen ze koffie drinken?', opts:['Om elf uur','Om kwart voor elf','Om kwart over elf'], a:1, hint:'Reken terug vanaf het begin van de les.'},
 ]},
 {title:'NiG 1 · Rooster van de cursus Nederlands A2', ch:'NiG 1', tier:4, text:`ROOSTER – GROEP A2-OCHTEND

Week 1-4: Hoofdstuk 1-4, maandag en woensdag, 9.00-11.30 uur, lokaal 4
Week 5: Toets hoofdstuk 1-4, vrijdag 9.00-10.30 uur, lokaal 2
Week 6-9: Hoofdstuk 5-8, maandag en woensdag, 9.00-11.30 uur, lokaal 4
Week 10: Eindtoets, vrijdag 9.00-11.00 uur, lokaal 2

Let op: in de meivakantie (week 7) is er geen les.
Bent u een keer afwezig? Stuur dan vóór 9.00 uur een appje naar 06-12345678.`,
 qs:[
  {q:'In welke week is er geen les?', opts:['Week 5','Week 7','Week 10'], a:1, hint:"Zoek het woord 'meivakantie'."},
  {q:'Wat moet u doen als u afwezig bent?', opts:['Bellen na de les','Voor 9.00 uur appen','Niets doen'], a:1, hint:'Let op de tijd die genoemd wordt.'},
  {q:'Waar is de toets over hoofdstuk 1-4?', opts:['Lokaal 4','Lokaal 2','Lokaal 1'], a:1, hint:"Kijk bij 'Week 5'."},
 ]},
 {title:'NiG 2 · Appje van een collega', ch:'NiG 2', tier:2, text:`Hoi! Ga je straks mee lunchen in de kantine? Ik heb om half een pauze. Zullen we daar afspreken? Ik trakteer op koffie, want ik ben gisteren geslaagd voor mijn rijexamen! Tot straks, Lotte`,
 qs:[
  {q:'Waarom trakteert Lotte?', opts:['Ze is jarig','Ze is geslaagd voor haar rijexamen','Ze heeft een nieuwe baan'], a:1, hint:'Lees de reden die Lotte zelf geeft.'},
  {q:'Hoe laat heeft Lotte pauze?', opts:['Om twaalf uur','Om half een','Om één uur'], a:1, hint:'Zoek de genoemde tijd.'},
 ]},
 {title:'NiG 2 · Prijslijst kantine', ch:'NiG 2', tier:3, text:`KANTINE PRIJSLIJST

Broodje kaas € 2,50 · Broodje ei € 2,80 · Soep van de dag € 3,00
Koffie/thee gratis voor medewerkers, € 1,00 voor bezoekers
Fruit € 0,75 per stuk

Let op: vanaf 1 januari betaalt u met een pinpas. Contant betalen kan dan niet meer.
Medewerkers krijgen op hun verjaardag een gratis taartje bij de koffie.`,
 qs:[
  {q:'Hoeveel kost koffie voor een bezoeker?', opts:['Gratis','€ 1,00','€ 2,50'], a:1, hint:'Vergelijk medewerker en bezoeker.'},
  {q:'Hoe moet u vanaf 1 januari betalen?', opts:['Alleen contant','Alleen met pinpas','Dat maakt niet uit'], a:1, hint:"Let op de zin met 'Let op'."},
  {q:'Wat krijgt een medewerker op zijn verjaardag?', opts:['Een gratis taartje','Een gratis lunch','Een cadeaubon'], a:0, hint:'Lees de laatste zin.'},
 ]},
 {title:'NiG 2 · E-mail van de kantinemanager', ch:'NiG 2', tier:4, text:`Beste collega's,

Vanaf volgende week maandag gaat de kantine verbouwen. De kantine is dan twee weken dicht. In die periode kunt u lunchen in het restaurant naast het gebouw, daar krijgt u 20% korting met uw personeelspas.
Koffie en thee kunt u wel gewoon halen bij de automaat op de eerste verdieping.
Excuses voor het ongemak.

Met vriendelijke groet,
de kantinemanager`,
 qs:[
  {q:'Hoe lang is de kantine dicht?', opts:['Een week','Twee weken','Een maand'], a:1, hint:'Zoek de periode die genoemd wordt.'},
  {q:'Waar kunt u in die periode lunchen?', opts:['In het restaurant naast het gebouw','Thuis','Nergens'], a:0, hint:'Lees de eerste alinea goed.'},
  {q:'Waar kunt u koffie halen tijdens de verbouwing?', opts:['Bij de automaat op de eerste verdieping','In het restaurant','Nergens, koffie is niet beschikbaar'], a:0, hint:'Let op de tweede alinea.'},
 ]},
 {title:'NiG 3 · Appje: afspreken in het café', ch:'NiG 3', tier:2, text:`Hoi, zullen we vanavond iets drinken in Café De Hoek? Ik ben er vanaf acht uur. Het is Happy Hour trouwens, dus als je eerder kunt, is het biertje maar € 2,50! Laat je het weten? Groetjes, Daan`,
 qs:[
  {q:'Vanaf hoe laat is Daan in het café?', opts:['Acht uur','Zes uur','Zeven uur'], a:0, hint:'Zoek het tijdstip dat Daan zelf noemt.'},
  {q:'Wat kost een biertje tijdens Happy Hour?', opts:['€ 3,50','€ 2,50','Gratis'], a:1, hint:'Vergelijk met de normale prijs.'},
 ]},
 {title:'NiG 3 · Huisregels van het café', ch:'NiG 3', tier:3, text:`CAFÉ DE HOEK – HUISREGELS

• Roken is alleen buiten toegestaan.
• Onder de 18 jaar mag u geen alcohol bestellen, wij vragen altijd naar een ID.
• Huisdieren zijn welkom op het terras, niet binnen.
• Wilt u reserveren voor een groep groter dan 6 personen? Bel dan naar 06-11223344.
• Wij accepteren alleen pin, geen contant geld.`,
 qs:[
  {q:'Waar mag u roken?', opts:['Overal in het café','Alleen buiten','Nergens'], a:1, hint:'Lees de eerste regel.'},
  {q:'Mag uw hond mee naar binnen?', opts:['Ja, overal','Nee, alleen op het terras','Nee, nooit'], a:1, hint:"Let op het woord 'huisdieren'."},
  {q:'Hoe kunt u betalen?', opts:['Alleen contant','Alleen met pin','Allebei kan'], a:1, hint:'Lees de laatste regel.'},
 ]},
 {title:'NiG 3 · Recensie van het café', ch:'NiG 3', tier:4, text:`RECENSIE – Café De Hoek ★★★★☆

Vorige week was ik met vrienden in Café De Hoek voor een verjaardag. De sfeer was heel gezellig en het terras is prachtig in de zomer. De bediening was vriendelijk, al moesten we best lang wachten voordat we konden bestellen, het was erg druk.
De prijzen vond ik redelijk, zeker tijdens de Happy Hour. Enige minpunt: er was geen vegetarische hap te krijgen, alleen bitterballen met vlees.
Al met al een aanrader voor een gezellige avond met vrienden, maar kom op tijd als je snel bediend wilt worden!`,
 qs:[
  {q:'Waarom moest de schrijver lang wachten?', opts:['Er was weinig personeel','Het was erg druk','De bediening was onvriendelijk'], a:1, hint:'Zoek de reden die direct na het wachten genoemd wordt.'},
  {q:'Wat is het minpunt van het café volgens de recensie?', opts:['Geen vegetarisch eten','Te duur','Geen terras'], a:0, hint:"Zoek het woord 'minpunt'."},
  {q:'Wat raadt de schrijver aan het einde aan?', opts:['Op tijd komen als je snel bediend wilt worden','Niet meer teruggaan','Alleen in de winter komen'], a:0, hint:'Lees de laatste zin van de recensie.'},
 ]},
 {"title":"NiG 4 · Appje: de weg kwijt","ch":"NiG 4","tier":2,"text":"Hoi, ik ben de weg kwijt! Ik sta bij de kerk op het plein. Moet ik rechtdoor of links bij de bakker? Bel je me even? - Noor","qs":[{"q":"Wat is het probleem van Noor?","opts":["Ze is de weg kwijt","Haar fiets is kapot","Ze is te laat"],"a":0,"hint":"Let op de eerste zin."},{"q":"Wat vraagt Noor?","opts":["Of ze rechtdoor of links moet","Hoe laat het is","Waar de kerk is"],"a":0,"hint":"Zij staat al bij de kerk; waar moet ze daarna heen?"}]},
 {"title":"NiG 4 · Bord bij de bouwplaats","ch":"NiG 4","tier":3,"text":"LET OP: WERK IN UITVOERING\n\nDe straat is van 1 tot 15 april afgesloten voor auto's. Fietsers en voetgangers kunnen wel door.\nGebruikt u een rolstoel of kinderwagen? Volg dan de gele pijlen naar de tijdelijke route via de Molenstraat.\nVragen? Bel de gemeente: 14 020.","qs":[{"q":"Wie mag niet door de straat rijden?","opts":["Fietsers","Auto’s","Voetgangers"],"a":1,"hint":"Lees de eerste zin goed."},{"q":"Wat moet u volgen als u een kinderwagen heeft?","opts":["De gele pijlen","De rode lijn","De fietsroute"],"a":0,"hint":"Zoek het woord \"kinderwagen\" in de tekst."}]},
 {"title":"NiG 4 · Bericht van de buurman","ch":"NiG 4","tier":4,"text":"Hoi, sorry dat ik je zo laat nog appje. Mijn auto staat voor jouw oprit geparkeerd, hè? Ik kom er zo aan, ik was even bij mijn moeder. Kun je me bellen als het echt een probleem is? Anders zet ik hem over tien minuten weg. Bedankt voor je begrip! - Peter","qs":[{"q":"Wat is het probleem?","opts":["Peters auto staat voor de oprit","De straat is afgesloten","Peter is de weg kwijt"],"a":0,"hint":"Waar staat de auto van Peter?"},{"q":"Wat moet je doen als het geen probleem is?","opts":["Hem bellen","Niets, hij zet de auto zelf weg","Naar zijn moeder gaan"],"a":1,"hint":"Lees de laatste zinnen: wat gebeurt er automatisch?"}]},
 {"title":"NiG 5 · Appje: samen naar de markt","ch":"NiG 5","tier":2,"text":"Hoi! Ga je zaterdag mee naar de markt? Ik moet fruit en kaas kopen. We kunnen daarna samen koffie drinken bij het kraampje op de hoek. Zie ik je om tien uur bij de ingang? - Bram","qs":[{"q":"Wat moet Bram kopen?","opts":["Fruit en kaas","Groente en brood","Vis en vlees"],"a":0,"hint":"Lees de tweede zin."},{"q":"Hoe laat spreken ze af?","opts":["Om negen uur","Om tien uur","Om elf uur"],"a":1,"hint":"Zoek het tijdstip aan het einde."}]},
 {"title":"NiG 5 · Bord bij de kaaskraam","ch":"NiG 5","tier":3,"text":"KAASKRAAM VAN DIJK\n\nJong belegen: € 9,00 per kilo\nOud: € 12,50 per kilo\nGeitenkaas: € 14,00 per kilo\n\nVandaag: proef gratis! Vraag naar onze nieuwe pittige kaas.\nGrote bestelling (vanaf 2 kilo)? Dan 10% korting.","qs":[{"q":"Welke kaas is het duurst?","opts":["Jong belegen","Oud","Geitenkaas"],"a":1,"hint":"Vergelijk de prijzen per kilo."},{"q":"Wanneer krijgt u korting?","opts":["Bij elke aankoop","Vanaf 2 kilo","Alleen op zaterdag"],"a":1,"hint":"Lees de laatste zin."}]},
 {"title":"NiG 5 · Recensie van de markt","ch":"NiG 5","tier":4,"text":"DE WEEKMARKT: EEN AANRADER\n\nElke zaterdag ga ik naar de weekmarkt in het centrum. Het is er altijd gezellig druk, en de kwaliteit van de groente en het fruit is echt beter dan in de supermarkt.\nMijn favoriete kraam is die van Hassan: hij heeft altijd verse kruiden en geeft goed advies over wat rijp is.\nEen nadeel: tegen het einde van de ochtend is het erg druk en moet je soms lang wachten. Ga daarom het liefst vroeg, rond negen uur, als je snel geholpen wilt worden.\nKortom: de markt is leuker en vaak ook goedkoper dan de supermarkt, zolang je op tijd gaat.","qs":[{"q":"Wat vindt de schrijver van de kwaliteit op de markt?","opts":["Slechter dan de supermarkt","Beter dan de supermarkt","Hetzelfde als de supermarkt"],"a":1,"hint":"Lees de eerste alinea."},{"q":"Wat is het nadeel van de markt?","opts":["Het is er te stil","Het is tegen het einde van de ochtend erg druk","Er is geen fruit"],"a":1,"hint":"Zoek het woord \"nadeel\"."},{"q":"Wat raadt de schrijver aan?","opts":["Laat op de ochtend gaan","Vroeg gaan, rond negen uur","Nooit op zaterdag gaan"],"a":1,"hint":"Lees de laatste zinnen."}]},
 {"title":"NiG 6 · Appje: tafel bevestigen","ch":"NiG 6","tier":2,"text":"Beste meneer Demir, uw tafel voor 4 personen vanavond om 19.30 uur bij Restaurant De Gouden Lepel is bevestigd. Bent u verhinderd? Bel dan 020-1234567. Tot vanavond!","qs":[{"q":"Voor hoeveel personen is de tafel?","opts":["2","4","6"],"a":1,"hint":"Zoek het getal in de tekst."},{"q":"Wat moet u doen als u niet kunt komen?","opts":["Niets doen","Bellen","Een e-mail sturen"],"a":1,"hint":"Lees de derde zin."}]},
 {"title":"NiG 6 · Menukaart: allergieën","ch":"NiG 6","tier":3,"text":"RESTAURANT DE GOUDEN LEPEL – ALLERGIE-INFORMATIE\n\nDe volgende gerechten bevatten noten: de salade met geitenkaas en de chocoladetaart.\nGlutenvrij beschikbaar: de kip met rijst (vraag naar de glutenvrije saus).\nHeeft u een allergie? Meld dit altijd bij het bestellen, onze kok past het gerecht dan aan.","qs":[{"q":"Welk gerecht bevat noten?","opts":["De kip met rijst","De salade met geitenkaas","De soep"],"a":1,"hint":"Zoek het woord \"noten\"."},{"q":"Wat moet u doen als u een allergie heeft?","opts":["Niet bestellen","Het melden bij het bestellen","Zelf koken"],"a":1,"hint":"Lees de laatste zin."}]},
 {"title":"NiG 6 · Recensie van het restaurant","ch":"NiG 6","tier":4,"text":"RESTAURANT DE GOUDEN LEPEL ★★★☆☆\n\nWe hadden hoge verwachtingen na alle goede recensies, maar onze ervaring was wisselend. Het voorgerecht, de soep, was heerlijk en goed gekruid.\nHelaas moesten we daarna veertig minuten wachten op het hoofdgerecht, zonder uitleg van de ober. Toen het eindelijk kwam, was de vis een beetje koud.\nHet dessert maakte veel goed: de chocoladetaart was fantastisch.\nAl met al: lekker eten, maar de bediening kan echt sneller. Misschien was het gewoon een drukke avond.","qs":[{"q":"Wat vond de schrijver van het voorgerecht?","opts":["Niet lekker","Heerlijk","Te koud"],"a":1,"hint":"Lees de eerste alinea."},{"q":"Wat was het probleem?","opts":["Het eten was te duur","Lang wachten op het hoofdgerecht","Er was geen dessert"],"a":1,"hint":"Zoek de klacht in de tweede alinea."},{"q":"Hoe eindigt de recensie?","opts":["Heel negatief","Lekker eten, maar trage bediening","Nooit meer terugkomen"],"a":1,"hint":"Lees de laatste zin."}]},
 {"title":"NiG 7 · Appje: nieuwe jas","ch":"NiG 7","tier":2,"text":"Hoi! Ik heb een nieuwe winterjas gekocht bij ModeMax, hij was in de uitverkoop, van 90 naar 45 euro! Zullen we zaterdag samen gaan kijken of er nog meer koopjes zijn? - Fenna","qs":[{"q":"Hoeveel korting kreeg Fenna op de jas?","opts":["10 euro","45 euro","De helft van de prijs"],"a":2,"hint":"Reken 90 min 45."},{"q":"Wat stelt Fenna voor?","opts":["Samen naar ModeMax gaan","De jas terugbrengen","Online shoppen"],"a":0,"hint":"Lees de laatste zin."}]},
 {"title":"NiG 7 · Maattabel ModeMax","ch":"NiG 7","tier":3,"text":"MAATTABEL DAMESKLEDING MODEMAX\n\nMaat S: 34-36\nMaat M: 38-40\nMaat L: 42-44\nMaat XL: 46-48\n\nTwijfelt u over uw maat? Kom langs voor gratis advies, of bestel twee maten en stuur de verkeerde gratis terug.","qs":[{"q":"Welke maat komt overeen met 38-40?","opts":["S","M","L"],"a":1,"hint":"Zoek het nummer in de tabel."},{"q":"Wat kunt u doen als u twijfelt over uw maat?","opts":["Niet bestellen","Twee maten bestellen en de verkeerde terugsturen","Altijd maat L nemen"],"a":1,"hint":"Lees de laatste zin."}]},
 {"title":"NiG 7 · Recensie van ModeMax online","ch":"NiG 7","tier":4,"text":"MODEMAX WEBSHOP ★★★★☆\n\nIk bestel al jaren kleding bij ModeMax en ben meestal tevreden. De levering is snel, meestal binnen twee werkdagen, en de kwaliteit is beter dan verwacht voor de prijs.\nEén keer kreeg ik de verkeerde maat opgestuurd. De klantenservice loste dit gelukkig snel op: ik kreeg de juiste maat binnen drie dagen thuisgestuurd, zonder extra kosten.\nMijn enige tip: lees de maattabel goed, want de kleding valt soms iets kleiner uit dan je verwacht.\nKortom, een betrouwbare webshop met goede service.","qs":[{"q":"Hoe snel is de levering meestal?","opts":["Binnen twee werkdagen","Binnen een week","Binnen een maand"],"a":0,"hint":"Lees de eerste alinea."},{"q":"Wat ging er een keer mis?","opts":["De jas was kapot","De verkeerde maat werd gestuurd","Er kwam niets aan"],"a":1,"hint":"Lees de tweede alinea."},{"q":"Welke tip geeft de schrijver?","opts":["Altijd een maat groter bestellen","De maattabel goed lezen","Nooit online bestellen"],"a":1,"hint":"Lees de derde alinea."}]},
 {"title":"NiG 8 · Appje: afspraak bezichtiging","ch":"NiG 8","tier":2,"text":"Beste meneer Hassan, uw afspraak voor de bezichtiging van het appartement in Oost is bevestigd op donderdag om 17.00 uur. De makelaar wacht op u bij de voordeur. Tot donderdag! - Makelaar Van Dam","qs":[{"q":"Wanneer is de bezichtiging?","opts":["Woensdag","Donderdag om 17.00 uur","Vrijdag om 17.00 uur"],"a":1,"hint":"Zoek de dag en tijd in het bericht."},{"q":"Waar wacht de makelaar?","opts":["Bij de voordeur","Op kantoor","Bij het park"],"a":0,"hint":"Lees de tweede zin."}]},
 {"title":"NiG 8 · Checklist voor huurders","ch":"NiG 8","tier":3,"text":"CHECKLIST: WAT TE CONTROLEREN BIJ EEN BEZICHTIGING\n\n□ Werken alle kranen en is er genoeg waterdruk?\n□ Zijn er vochtplekken op de muren of het plafond?\n□ Werkt de verwarming in elke kamer?\n□ Hoeveel bergruimte is er (kasten, berging)?\n□ Is er voldoende daglicht in de woonkamer?\n\nTip: maak foto's tijdens de bezichtiging, dan kunt u thuis alles nog eens rustig bekijken.","qs":[{"q":"Waar moet u op letten bij de muren?","opts":["De kleur","Vochtplekken","De grootte"],"a":1,"hint":"Zoek het tweede vinkje."},{"q":"Wat is de tip aan het einde?","opts":["Foto’s maken tijdens de bezichtiging","Niet te veel vragen stellen","Snel beslissen"],"a":0,"hint":"Lees de laatste zin."}]},
 {"title":"NiG 8 · Ervaring met verhuizen","ch":"NiG 8","tier":4,"text":"MIJN EERSTE HUURWONING: WAT IK HEB GELEERD\n\nTwee maanden geleden ben ik verhuisd naar mijn eerste eigen appartement. In het begin was ik vooral blij, maar ik heb ook veel geleerd over dingen waar ik niet aan had gedacht.\nZo wist ik niet dat ik zelf een contract moest afsluiten voor gas, water en licht, los van de huur. Ook moest ik me binnen vijf dagen inschrijven bij de gemeente op mijn nieuwe adres, anders kon ik problemen krijgen met mijn zorgverzekering.\nEen tip die ik kreeg van mijn buren: sluit een inboedelverzekering af, voor het geval er iets gestolen wordt of er brand uitbreekt. Dat had ik zelf niet bedacht.\nAl met al ben ik heel blij met mijn nieuwe plek, ondanks de administratieve rompslomp in het begin.","qs":[{"q":"Wat moest de schrijver zelf regelen?","opts":["Een contract voor gas, water en licht","De huur betalen","Een nieuwe baan"],"a":0,"hint":"Lees de eerste alinea na de inleiding."},{"q":"Binnen hoeveel dagen moest de schrijver zich inschrijven bij de gemeente?","opts":["Vijf dagen","Twee weken","Een maand"],"a":0,"hint":"Zoek het getal in de tekst."},{"q":"Welke tip kreeg de schrijver van de buren?","opts":["Een huisdier nemen","Een inboedelverzekering afsluiten","Nooit alleen wonen"],"a":1,"hint":"Lees de derde alinea."}]},
 {"title":"NiG 9 · Appje: afspraak huisarts","ch":"NiG 9","tier":2,"text":"Beste mevrouw Haddad, uw afspraak bij huisarts De Groot is bevestigd op woensdag om 10.20 uur. Komt u 5 minuten eerder voor het inchecken bij de balie. Kunt u niet komen? Bel dan minstens 2 uur van tevoren. - Huisartsenpraktijk Zuid","qs":[{"q":"Hoe laat is de afspraak?","opts":["10.00 uur","10.20 uur","11.20 uur"],"a":1,"hint":"Zoek het tijdstip in het bericht."},{"q":"Wanneer moet u bellen als u niet kunt komen?","opts":["Minstens 2 uur van tevoren","Een dag van tevoren","Dat hoeft niet"],"a":0,"hint":"Lees de laatste zin."}]},
 {"title":"NiG 9 · Bijsluiter paracetamol","ch":"NiG 9","tier":3,"text":"BIJSLUITER PARACETAMOL 500 MG\n\nGebruik: bij lichte pijn of koorts.\nDosering volwassenen: 1 tot 2 tabletten, maximaal 4 keer per dag. Neem niet meer dan 8 tabletten per 24 uur.\nNiet gebruiken bij een leveraandoening zonder overleg met uw arts.\nHelpt het niet na 3 dagen, of wordt het erger? Neem dan contact op met uw huisarts.","qs":[{"q":"Hoeveel tabletten mag u maximaal per dag nemen?","opts":["4","6","8"],"a":2,"hint":"Zoek het laatste getal in de doseringsinstructie."},{"q":"Wat moet u doen als het na 3 dagen niet beter gaat?","opts":["Meer tabletten nemen","Contact opnemen met de huisarts","Stoppen en niets doen"],"a":1,"hint":"Lees de laatste zin."}]},
 {"title":"NiG 9 · Patiëntenervaring","ch":"NiG 9","tier":4,"text":"MIJN ERVARING MET DE HUISARTS\n\nToen ik net in Nederland woonde, wist ik niet goed hoe het systeem werkte. Ik dacht dat ik voor elke klacht direct naar het ziekenhuis kon gaan, zoals in mijn geboorteland.\nMijn buurvrouw legde me uit dat je in Nederland altijd eerst naar de huisarts gaat. De huisarts kent je medische geschiedenis en verwijst je alleen door naar een specialist als dat echt nodig is.\nIn het begin vond ik dit frustrerend, want ik moest soms een paar dagen wachten op een afspraak. Maar nu begrijp ik het beter: de huisarts kan veel klachten zelf goed behandelen, en dit houdt de zorg betaalbaar voor iedereen.\nMijn advies aan nieuwkomers: schrijf u snel in bij een huisarts in uw buurt, ook als u nog niet ziek bent.","qs":[{"q":"Wat dacht de schrijver eerst?","opts":["Dat je altijd naar de huisarts moet","Dat je direct naar het ziekenhuis kon gaan","Dat medicijnen gratis zijn"],"a":1,"hint":"Lees de eerste alinea."},{"q":"Wie legde het systeem uit?","opts":["De dokter","De buurvrouw","Een collega"],"a":1,"hint":"Lees de tweede alinea."},{"q":"Wat is het advies aan nieuwkomers?","opts":["Wachten tot je ziek bent","Snel inschrijven bij een huisarts","Altijd naar het ziekenhuis gaan"],"a":1,"hint":"Lees de laatste zin."}]},
 {"title":"NiG 10 · Appje: fiets ophalen","ch":"NiG 10","tier":2,"text":"Beste meneer Jansen, uw fiets is klaar! U kunt hem ophalen tussen 9.00 en 18.00 uur. Vergeet uw bon niet mee te nemen. Totaal: € 22,50. - Fietsenmaker Snel","qs":[{"q":"Wat moet meneer Jansen meenemen?","opts":["Zijn fietssleutel","De bon","Zijn identiteitsbewijs"],"a":1,"hint":"Lees de derde zin."},{"q":"Hoeveel moet hij betalen?","opts":["€ 12,50","€ 22,50","€ 32,50"],"a":1,"hint":"Zoek het bedrag in het bericht."}]},
 {"title":"NiG 10 · Instructie band plakken","ch":"NiG 10","tier":3,"text":"ZELF EEN LEKKE BAND PLAKKEN: IN 5 STAPPEN\n\n1. Haal het wiel uit de fiets en de band van de velg.\n2. Zoek het gaatje: doe de binnenband in water, waar luchtbelletjes komen is het lek.\n3. Maak de plek droog en schuur het licht op.\n4. Doe lijm op de plek, wacht 5 minuten, en plak de lapje erop.\n5. Doe alles terug in elkaar en pomp de band weer op.\n\nLukt het niet zelf? Breng de fiets langs bij Fietsenmaker Snel.","qs":[{"q":"Hoe vindt u het gaatje in de band?","opts":["Door te voelen met uw vingers","Door de band in water te doen","Door de band op te pompen"],"a":1,"hint":"Lees stap 2."},{"q":"Hoe lang moet u wachten na het lijmen?","opts":["1 minuut","5 minuten","30 minuten"],"a":1,"hint":"Lees stap 4."}]},
 {"title":"NiG 10 · Verhaal: mijn eerste winter fietsen","ch":"NiG 10","tier":4,"text":"FIETSEN IN DE NEDERLANDSE WINTER\n\nToen ik voor het eerst een Nederlandse winter meemaakte, was ik niet voorbereid op het fietsen in de kou en de wind. Mijn eerste fiets had geen goede remmen, en bij regen gleed ik bijna een paar keer uit.\nEen collega raadde me aan om mijn fiets elk najaar te laten controleren bij een fietsenmaker: de remmen, de banden en de verlichting moeten namelijk extra goed werken in het donker en bij nat weer.\nIk volgde haar advies op en liet een grote beurt doen, inclusief nieuwe remblokken. Het verschil was enorm: ik voelde me veel veiliger op straat.\nMijn tip voor nieuwkomers: onderschat de Nederlandse winter op de fiets niet, en investeer op tijd in onderhoud.","qs":[{"q":"Wat ging er mis met de eerste fiets van de schrijver?","opts":["De banden waren lek","De remmen waren niet goed","Het zadel was kapot"],"a":1,"hint":"Lees de eerste alinea."},{"q":"Wat raadde de collega aan?","opts":["Een nieuwe fiets kopen","Elk najaar de fiets laten controleren","Niet meer fietsen in de winter"],"a":1,"hint":"Lees de tweede alinea."},{"q":"Wat is de tip aan het einde?","opts":["De winter onderschatten","Op tijd investeren in onderhoud","Altijd de bus nemen"],"a":1,"hint":"Lees de laatste zin."}]},
 {"title":"NiG 11 · Appje: cadeau voor Ingrid","ch":"NiG 11","tier":2,"text":"Hoi! Weet jij al wat je geeft aan Ingrid voor haar verjaardag? Ze zei dat ze geen cadeau wil, maar ik wil toch iets kleins meenemen. Zullen we samen bloemen kopen? - Noor","qs":[{"q":"Wat zei Ingrid over cadeaus?","opts":["Dat ze veel cadeaus wil","Dat ze geen cadeau wil","Dat ze alleen geld wil"],"a":1,"hint":"Lees de tweede zin."},{"q":"Wat stelt Noor voor?","opts":["Niets meenemen","Samen bloemen kopen","Een groot cadeau kopen"],"a":1,"hint":"Lees de laatste zin."}]},
 {"title":"NiG 11 · Uitnodiging kinderfeestje","ch":"NiG 11","tier":3,"text":"JIJ BENT UITGENODIGD!\n\nLieve vriendjes en vriendinnetjes van Sophie,\n\nSophie wordt 6 jaar en viert dit op zaterdag 3 mei, van 14.00 tot 16.30 uur, bij ons thuis (Dorpsstraat 22).\nEr is een springkussen en we gaan taart eten!\nKomt jullie kind alleen, of blijven jullie ook? Laat het ons weten, en geef ook door of er allergieën zijn.\n\nGroetjes, de ouders van Sophie","qs":[{"q":"Hoe oud wordt Sophie?","opts":["5 jaar","6 jaar","7 jaar"],"a":1,"hint":"Zoek de leeftijd in de tekst."},{"q":"Wat moeten de ouders doorgeven?","opts":["Of er allergieën zijn","Het adres van hun kind","De naam van de school"],"a":0,"hint":"Lees de laatste zin van de uitnodiging."}]},
 {"title":"NiG 11 · Verslag van een verjaardagsfeest","ch":"NiG 11","tier":4,"text":"EEN TYPISCH NEDERLANDS VERJAARDAGSFEEST\n\nVorige maand ging ik voor het eerst naar een Nederlandse verjaardag, van de moeder van mijn collega. Ik wist niet goed wat ik kon verwachten.\nToen ik binnenkwam, zag ik iedereen in een grote kring van stoelen zitten, bijna als een vergadering! Ik moest alle gasten een voor een een hand geven en feliciteren, ook de familie van de jarige.\nEr was koffie met gebak, en later op de avond bitterballen en drankjes. Het gesprek ging vooral over werk en het weer, heel gewoon voor Nederlanders, legde mijn collega me later uit.\nWat me verraste: rond tien uur begonnen mensen al afscheid te nemen. In mijn cultuur blijven feestjes vaak tot diep in de nacht duren, maar hier was het feest rond elf uur al afgelopen.\nIk vond het een leuke, gezellige avond, ook al was het anders dan ik gewend was.","qs":[{"q":"Hoe zaten de gasten toen de schrijver binnenkwam?","opts":["Verspreid door het huis","In een grote kring van stoelen","Allemaal in de keuken"],"a":1,"hint":"Lees de tweede alinea."},{"q":"Waar ging het gesprek vooral over?","opts":["Politiek","Werk en het weer","Het weer en sport"],"a":1,"hint":"Lees de derde alinea."},{"q":"Wat verraste de schrijver?","opts":["Dat er geen eten was","Dat het feest vroeg afgelopen was","Dat niemand kwam"],"a":1,"hint":"Lees de vierde alinea."}]},
 {"title":"NiG 12 · Appje: late aankomst hotel","ch":"NiG 12","tier":2,"text":"Beste mevrouw Okafor, we zien dat uw vlucht vertraging heeft. Geen probleem, we houden uw kamer voor u vrij tot middernacht. Heeft u toch hulp nodig? Bel ons gerust. - Hotel Zeezicht","qs":[{"q":"Waarom stuurt het hotel dit bericht?","opts":["De kamer is niet klaar","Haar vlucht heeft vertraging","Het hotel is vol"],"a":1,"hint":"Lees de eerste zin."},{"q":"Tot hoe laat houdt het hotel de kamer vrij?","opts":["Tot 22.00 uur","Tot middernacht","Tot de volgende ochtend"],"a":1,"hint":"Zoek het tijdstip in het bericht."}]},
 {"title":"NiG 12 · Huisregels hotelkamer","ch":"NiG 12","tier":3,"text":"HUISREGELS HOTEL ZEEZICHT\n\n• Roken is in de kamers niet toegestaan, bij overtreding € 150 schoonmaakkosten.\n• Bezoek na 23.00 uur graag melden bij de receptie.\n• Huisdieren zijn welkom, tegen een toeslag van € 10 per nacht.\n• Bij verlies van de kamersleutel: € 25 voor een nieuwe sleutel.\n\nWij wensen u een fijn verblijf!","qs":[{"q":"Wat kost roken op de kamer?","opts":["Niets, het mag gewoon","€ 150 schoonmaakkosten","U wordt weggestuurd"],"a":1,"hint":"Lees de eerste regel."},{"q":"Mag u een hond meenemen?","opts":["Nee, nooit","Ja, tegen een toeslag","Alleen kleine honden"],"a":1,"hint":"Lees de regel over huisdieren."}]},
 {"title":"NiG 12 · Reisverslag hotelervaring","ch":"NiG 12","tier":4,"text":"EEN WEEKEND IN HOTEL ZEEZICHT\n\nVoor ons huwelijksjubileum boekten we een weekend in Hotel Zeezicht, en over het algemeen waren we erg tevreden.\nDe kamer was ruim en schoon, met een prachtig uitzicht over het strand. Het personeel was vriendelijk en behulpzaam: toen we vroegen om een laat ontbijt vanwege een lange autorit, regelden ze dat zonder problemen.\nEr was één probleem: de eerste nacht konden we niet goed slapen door lawaai van een feest in de kamer naast ons. We belden de receptie, en binnen tien minuten was het stil. De volgende ochtend kregen we zelfs excuses en een gratis ontbijt aangeboden.\nZo'n snelle en vriendelijke oplossing maakte veel goed. We zouden hier zeker nog eens boeken.","qs":[{"q":"Waarvoor boekten ze het hotel?","opts":["Een zakenreis","Hun huwelijksjubileum","Een familiebezoek"],"a":1,"hint":"Lees de eerste zin."},{"q":"Wat was het probleem de eerste nacht?","opts":["De kamer was vies","Lawaai van een feest","Er was geen warm water"],"a":1,"hint":"Lees de derde alinea."},{"q":"Hoe loste het hotel het probleem op?","opts":["Ze deden niets","Snel, met excuses en een gratis ontbijt","Ze gaven geld terug"],"a":1,"hint":"Lees de laatste zinnen van de derde alinea."}]},
 {"title":"NiG 13 · Appje: samen sporten","ch":"NiG 13","tier":2,"text":"Hoi! Ga je morgen naar de yogales om 18.00 uur? Ik wil ook een keer meedoen met de bootcamp op zaterdagochtend, ken jij die les? - Eva","qs":[{"q":"Hoe laat is de yogales?","opts":["17.00 uur","18.00 uur","19.00 uur"],"a":1,"hint":"Zoek het tijdstip in het bericht."},{"q":"Welke les wil Eva ook proberen?","opts":["Spinning","Bootcamp","Zwemmen"],"a":1,"hint":"Lees de tweede zin."}]},
 {"title":"NiG 13 · Rooster groepslessen","ch":"NiG 13","tier":3,"text":"ROOSTER GROEPSLESSEN FITPLUS\n\nMaandag: Spinning 18.00 uur, Yoga 19.30 uur\nWoensdag: Bootcamp 7.00 uur, Pilates 19.00 uur\nVrijdag: Zumba 18.30 uur\n\nLet op: voor Bootcamp en Spinning moet u zich van tevoren aanmelden via de app, er is een maximum van 20 deelnemers.","qs":[{"q":"Hoe laat is Pilates?","opts":["18.00 uur","19.00 uur","19.30 uur"],"a":1,"hint":"Zoek Pilates in het rooster."},{"q":"Wat moet u doen voor Bootcamp?","opts":["Niets, gewoon komen","Zich van tevoren aanmelden via de app","Contant betalen"],"a":1,"hint":"Lees de laatste zin."}]},
 {"title":"NiG 13 · Blog: mijn eerste maand sporten","ch":"NiG 13","tier":4,"text":"MIJN EERSTE MAAND BIJ DE SPORTSCHOOL\n\nEen maand geleden schreef ik me in bij FitPlus, na jaren niet gesport te hebben. Ik was best nerveus voor mijn eerste bezoek: zou ik wel weten hoe de apparaten werkten?\nGelukkig bood de sportschool een gratis intakegesprek aan met een personal trainer. Hij legde me alles rustig uit en maakte een trainingsschema speciaal voor mij, rekening houdend met mijn rugklachten.\nDe eerste twee weken had ik overal spierpijn, en ik twijfelde of ik wel door moest gaan. Maar na drie weken merkte ik dat ik meer energie had en beter sliep.\nMijn advies voor beginners: wees niet bang om vragen te stellen aan het personeel, en geef jezelf de tijd om te wennen. Na een maand ben ik blij dat ik ben begonnen.","qs":[{"q":"Waar was de schrijver nerveus voor?","opts":["Voor de prijs","Voor het eerste bezoek en de apparaten","Voor de andere sporters"],"a":1,"hint":"Lees de eerste alinea."},{"q":"Wat kreeg de schrijver aangeboden?","opts":["Een gratis maand","Een gratis intakegesprek met een trainer","Een korting"],"a":1,"hint":"Lees de tweede alinea."},{"q":"Wat is het advies voor beginners?","opts":["Meteen stoppen bij spierpijn","Vragen stellen en tijd nemen om te wennen","Elke dag drie uur sporten"],"a":1,"hint":"Lees de laatste alinea."}]},
 {"title":"NiG 14 · Appje: naar de tentoonstelling","ch":"NiG 14","tier":2,"text":"Hoi! Ga je zaterdag mee naar de fototentoonstelling in het cultureel centrum? Het is gratis en het gaat over onze stad. Ik wil er rond 15.00 uur heen. - Sven","qs":[{"q":"Wat kost de tentoonstelling?","opts":["Niets, gratis","€ 5","€ 10"],"a":0,"hint":"Lees de tweede zin."},{"q":"Hoe laat wil Sven gaan?","opts":["14.00 uur","15.00 uur","16.00 uur"],"a":1,"hint":"Zoek het tijdstip aan het einde."}]},
 {"title":"NiG 14 · Bibliotheekpas aanvragen","ch":"NiG 14","tier":3,"text":"LID WORDEN VAN DE BIBLIOTHEEK\n\nVolwassenen: € 45 per jaar, kinderen tot 18 jaar: gratis.\nMet uw pas kunt u maximaal 10 boeken tegelijk lenen, voor 3 weken.\nTe laat terugbrengen? Dan betaalt u € 0,30 per boek per dag.\nVergeet niet: u kunt ook e-books gratis lenen via de app, zonder extra kosten.","qs":[{"q":"Hoeveel kost een lidmaatschap voor kinderen?","opts":["€ 45","Gratis","€ 20"],"a":1,"hint":"Lees de eerste regel."},{"q":"Hoeveel boeken mag u maximaal lenen?","opts":["5","10","20"],"a":1,"hint":"Zoek het getal in de tekst."}]},
 {"title":"NiG 14 · Interview met de programmeur","ch":"NiG 14","tier":4,"text":"\"WE WILLEN IEDEREEN BEREIKEN\" - INTERVIEW MET DE PROGRAMMEUR VAN DE LINDE\n\nSinds vijf jaar is Karin verantwoordelijk voor het programma van cultureel centrum De Linde. We vroegen haar naar haar aanpak.\n\"Toen ik begon, kwamen er vooral oudere bezoekers naar onze voorstellingen\", vertelt ze. \"We wilden ook jongere mensen en nieuwkomers in de stad aantrekken. Daarom zijn we begonnen met het taalcafé en gratis activiteiten voor gezinnen.\"\nVolgens Karin is het belangrijkste dat mensen zich welkom voelen, ongeacht hun achtergrond of hoeveel geld ze hebben. \"Daarom houden we de prijzen laag, en sommige activiteiten zijn helemaal gratis.\"\nZe is trots op het resultaat: het aantal bezoekers onder de dertig jaar is de afgelopen drie jaar verdubbeld. \"Er is nog veel werk te doen, maar we zijn op de goede weg.\"","qs":[{"q":"Wat was het probleem toen Karin begon?","opts":["Er kwamen te veel bezoekers","Er kwamen vooral oudere bezoekers","Het centrum had geen geld"],"a":1,"hint":"Lees het eerste citaat."},{"q":"Wat is voor Karin het belangrijkste?","opts":["Veel geld verdienen","Dat mensen zich welkom voelen","Alleen bekende artiesten uitnodigen"],"a":1,"hint":"Lees de derde alinea."},{"q":"Wat is er de afgelopen drie jaar gebeurd met jonge bezoekers?","opts":["Ze zijn verdwenen","Hun aantal is verdubbeld","Er is niets veranderd"],"a":1,"hint":"Lees de laatste alinea."}]},
 {"title":"NiG 15 · Appje: te laat op kantoor","ch":"NiG 15","tier":2,"text":"Hoi team, ik sta in de file en kom ongeveer twintig minuten later. Kunnen jullie alvast beginnen met het overleg? Ik bel in als ik kan. - Eva","qs":[{"q":"Waarom is Eva te laat?","opts":["Ze is ziek","Ze staat in de file","De trein is vertraagd"],"a":1,"hint":"Lees de eerste zin."},{"q":"Wat vraagt Eva aan het team?","opts":["Om te wachten","Om alvast te beginnen","Om het overleg af te zeggen"],"a":1,"hint":"Lees de tweede zin."}]},
 {"title":"NiG 15 · Memo: nieuwe pauzeregeling","ch":"NiG 15","tier":3,"text":"MEMO AAN ALLE MEDEWERKERS\n\nVanaf 1 april geldt een nieuwe pauzeregeling: iedereen heeft recht op 30 minuten lunchpauze, te nemen tussen 12.00 en 14.00 uur.\nKorte pauzes van 10 minuten mag u zelf inplannen, maximaal twee per dag.\nNoteer uw pauzes voortaan in het nieuwe systeem Timewise, zodat de administratie klopt.\nVragen? Neem contact op met HR.","qs":[{"q":"Hoe lang is de lunchpauze?","opts":["20 minuten","30 minuten","60 minuten"],"a":1,"hint":"Zoek het getal in de eerste zin."},{"q":"Waar moet u pauzes noteren?","opts":["Op papier","In het systeem Timewise","Dat hoeft niet"],"a":1,"hint":"Lees de derde zin."}]},
 {"title":"NiG 15 · Blog: werken in Nederland","ch":"NiG 15","tier":4,"text":"WAT IK LEERDE OVER DE NEDERLANDSE WERKCULTUUR\n\nToen ik drie jaar geleden begon te werken bij een Nederlands bedrijf, kwam ik voor een aantal verrassingen te staan.\nTen eerste: de directe manier van communiceren. Mijn leidinggevende gaf al in de eerste week feedback op mijn werk, zonder omwegen. In het begin voelde dit hard, maar ik begreep al snel dat het juist bedoeld was om mij te helpen groeien.\nTen tweede: de nadruk op overleg. Beslissingen worden vaak pas genomen nadat iedereen zijn mening heeft kunnen geven, zelfs als dat extra vergaderingen kost. Dit wordt ook wel het \"poldermodel\" genoemd.\nTot slot verraste de balans tussen werk en privéleven me positief: veel collega's werken vier dagen per week, en overwerken wordt niet als normaal gezien.\nNa drie jaar voel ik me helemaal thuis in deze werkcultuur, ook al kostte het tijd om te wennen.","qs":[{"q":"Hoe gaf de leidinggevende feedback?","opts":["Alleen positief","Direct, zonder omwegen","Nooit"],"a":1,"hint":"Lees de tweede alinea."},{"q":"Wat is het \"poldermodel\"?","opts":["Een manier van bouwen","Overleg waarbij iedereen mening kan geven voor een beslissing","Een type contract"],"a":1,"hint":"Lees de derde alinea."},{"q":"Wat verraste de schrijver positief?","opts":["Het hoge salaris","De balans tussen werk en privéleven","De lange werkdagen"],"a":1,"hint":"Lees de vierde alinea."}]},
 {"title":"NiG 16 · Appje: boodschappen thuis","ch":"NiG 16","tier":2,"text":"Hoi, ben je al onderweg naar huis? We hebben geen melk en brood meer. Kun je dat even meenemen van de supermarkt? Dan kook ik alvast de pasta. - Lars","qs":[{"q":"Wat moet er meegenomen worden?","opts":["Melk en brood","Kaas en eieren","Groente en fruit"],"a":0,"hint":"Lees de tweede zin."},{"q":"Wat gaat Lars doen?","opts":["Boodschappen doen","De pasta koken","Afwassen"],"a":1,"hint":"Lees de laatste zin."}]},
 {"title":"NiG 16 · Huisregels appartementencomplex","ch":"NiG 16","tier":3,"text":"HUISREGELS LINDENFLAT\n\nWasmachine en droger in de gezamenlijke ruimte: te gebruiken tussen 8.00 en 21.00 uur.\nGrofvuil kunt u elke eerste maandag van de maand buiten zetten, ’s avonds vanaf 20.00 uur.\nFietsen graag in de fietsenstalling plaatsen, niet in de gang.\nProblemen met de lift? Bel het onderhoudsnummer: 030-1112233.","qs":[{"q":"Tot hoe laat mag u de wasmachine gebruiken?","opts":["20.00 uur","21.00 uur","22.00 uur"],"a":1,"hint":"Lees de eerste regel."},{"q":"Waar moeten fietsen geplaatst worden?","opts":["In de gang","In de fietsenstalling","Buiten op straat"],"a":1,"hint":"Lees de derde regel."}]},
 {"title":"NiG 16 · Column: thuis voelen in een nieuw land","ch":"NiG 16","tier":4,"text":"THUIS VOELEN: EEN PROCES\n\nMensen vragen me vaak: \"Voel je je al thuis in Nederland?\" Het antwoord is niet eenvoudig.\nDe eerste maanden voelde mijn appartement vooral als een plek om te slapen, niet als een thuis. Alles was nieuw en onbekend: de supermarkt, de buren, zelfs het geluid van de regen op het dak.\nLangzaam begon dat te veranderen. Ik leerde mijn buren kennen, vond mijn favoriete bakker, en begon Nederlandse gewoontes over te nemen, zoals altijd de gordijnen dichtdoen als het donker wordt.\nWat me het meest hielp, was het inrichten van mijn huis met spullen die me aan mijn geboorteland herinnerden, gecombineerd met nieuwe Nederlandse dingen. Zo voelde het huis van mezelf, een mix van oud en nieuw.\nNa twee jaar kan ik eindelijk zeggen: ja, dit voelt als thuis. Het kostte tijd, maar het is gelukt.","qs":[{"q":"Hoe voelde het appartement in het begin?","opts":["Al meteen als thuis","Vooral als een plek om te slapen","Te groot"],"a":1,"hint":"Lees de tweede alinea."},{"q":"Wat hielp de schrijver het meest?","opts":["Veel geld uitgeven","Het huis inrichten met een mix van oud en nieuw","Nooit naar buiten gaan"],"a":1,"hint":"Lees de vierde alinea."},{"q":"Hoe lang duurde het voordat het huis als thuis voelde?","opts":["Een maand","Zes maanden","Twee jaar"],"a":2,"hint":"Lees de laatste alinea."}]},
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
 {title:'NiG 1 · Kennismaken in de les', tier:1, lines:[['A','Hallo, ik ben Anna. Ik ben nieuw in de cursus. Hoe heet jij?'],['B','Hoi Anna, ik heet Rashid. Ik kom uit Syrië. En jij?'],['A','Ik kom uit Polen. Ik woon nu in Amersfoort. Waar woon jij?'],['B','Ik woon ook in Amersfoort, in de Stationsstraat.'],['A','Wat leuk! Woon je hier al lang?'],['B','Nee, pas zes maanden.']],
  qs:[{q:'Waar komt Anna vandaan?', opts:['Uit Syrië','Uit Polen','Uit Amersfoort'], a:1},{q:'Hoe lang woont Rashid in Amersfoort?', opts:['Zes jaar','Zes maanden','Zes weken'], a:1}]},
 {title:'NiG 2 · In de kantine', tier:1, lines:[['A','Is deze plek vrij?'],['B','Ja hoor, ga zitten. Ik ben Tom.'],['A','Dank je. Ik ben Sanne. Ik werk hier pas een week.'],['B','Welkom! Zeg, hoe laat is het eigenlijk?'],['A','Het is kwart over twaalf.'],['B','O, dan heb ik nog een kwartier pauze. Om half een moet ik weer beginnen.']],
  qs:[{q:'Hoe lang werkt Sanne hier?', opts:['Een week','Een maand','Een jaar'], a:0},{q:'Hoe laat moet Tom weer werken?', opts:['Om kwart over twaalf','Om half een','Om één uur'], a:1}]},
 {title:'NiG 3 · Iets drinken in een café', tier:1, lines:[['A','Goedemiddag, wat wilt u drinken?'],['B','Ik wil graag een verse muntthee. En jij, Femke?'],['C','Voor mij een alcoholvrij biertje, alsjeblieft.'],['A','Een muntthee en een alcoholvrij biertje. Verder nog iets?'],['B','Nee, dank u. O, wacht, ik trakteer vandaag, want ik ben jarig!'],['C','Gefeliciteerd! Proost!']],
  qs:[{q:'Wat drinkt Femke?', opts:['Een muntthee','Een alcoholvrij biertje','Een glas wijn'], a:1},{q:'Waarom betaalt de man?', opts:['Hij is jarig','Femke heeft geen geld','Het is gratis'], a:0}]},
 {title:'NiG 4 · Een afspraak maken op straat', tier:1, lines:[['A','Hé Lisa! Hoe gaat het?'],['B','Goed hoor, en met jou?'],['A','Ook goed. Ga je mee een kopje koffie drinken?'],['B','Helaas, ik kan nu niet. Over een half uur moet ik naar de tandarts.'],['A','Jammer. Zullen we morgenavond samen eten?'],['B','Morgen lukt niet, maar vrijdagavond kan ik wel.'],['A','Prima, vrijdag om zeven uur bij mij thuis.']],
  qs:[{q:'Waarom kan Lisa nu niet mee?', opts:['Ze moet werken','Ze moet naar de tandarts','Ze is ziek'], a:1},{q:'Wanneer gaan ze samen eten?', opts:['Morgenavond','Vrijdagavond','Over een half uur'], a:1}]},
 {title:'NiG 5 · Bij de groenteboer', tier:1, lines:[['A','Wie is er aan de beurt?'],['B','Ik. Mag ik een kilo tomaten en een komkommer?'],['A','Natuurlijk. Anders nog iets?'],['B','Ja, wat kosten de mango’s?'],['A','Een euro per stuk, ze zijn lekker rijp.'],['B','Dan neem ik er twee.'],['A','Dat is dan zes euro vijftig bij elkaar.']],
  qs:[{q:'Hoeveel mango’s koopt de klant?', opts:['Eén','Twee','Drie'], a:1},{q:'Hoeveel betaalt de klant in totaal?', opts:['€ 5,50','€ 6,50','€ 2,00'], a:1}]},
 {title:'NiG 6 · In het restaurant', tier:1, lines:[['A','Heeft u al een keuze gemaakt?'],['B','Ja, ik neem de zalm met frietjes. En mijn vriendin wil de vegetarische salade.'],['A','Prima. Wat wilt u drinken?'],['B','Een fles spa blauw, graag.'],['A','…Smaakt het?'],['B','De zalm is heerlijk, maar de salade is een beetje zout.'],['A','O, sorry. Zal ik een nieuwe salade halen?']],
  qs:[{q:'Wat bestelt de vriendin?', opts:['De zalm','De vegetarische salade','Soep'], a:1},{q:'Wat is het probleem?', opts:['De salade is te zout','De zalm is koud','Het water is op'], a:0}]},
 {title:'NiG 7 · In de kledingwinkel', tier:1, lines:[['A','Kan ik u helpen?'],['B','Ja, ik zoek een spijkerbroek in maat 32.'],['A','Welke kleur wilt u?'],['B','Donkerblauw, graag.'],['A','…En, past hij?'],['B','Nee, hij zit niet goed. Hij is te wijd. Heeft u hem ook kleiner?'],['A','Het spijt me, maat 30 hebben we alleen in het zwart.'],['B','Dan probeer ik die zwarte.']],
  qs:[{q:'Wat is het probleem met de broek?', opts:['Hij is te klein','Hij is te wijd','Hij is te duur'], a:1},{q:'Welke broek gaat de klant proberen?', opts:['Een donkerblauwe in maat 32','Een zwarte in maat 30','Een donkerblauwe in maat 30'], a:1}]},
 {title:'NiG 8 · Een bezichtiging', tier:1, lines:[['A','Goedemiddag, ik ben Peter van makelaar Van Dam. Komt u binnen.'],['B','Dank u. Hoe groot is de woonkamer?'],['A','Ongeveer vijfentwintig vierkante meter. En hier is de open keuken.'],['B','Is er ook een tuin?'],['A','Nee, maar er is een groot balkon op het westen. ’s Middags heeft u hier zon.'],['B','Mooi. En wat is de huur?'],['A','Achthonderd vijftig euro per maand, inclusief water.']],
  qs:[{q:'Wat heeft de woning?', opts:['Een tuin','Een balkon','Twee keukens'], a:1},{q:'Wat zit er in de huur?', opts:['Gas','Water','Internet'], a:1}]},
 {title:'NiG 9 · Bij de huisarts', tier:1, lines:[['A','Goedemorgen, wat is er aan de hand?'],['B','Ik heb overal rode bultjes en het jeukt verschrikkelijk.'],['A','Sinds wanneer heeft u dat?'],['B','Sinds zaterdag. Ik heb toen bij vrienden gegeten.'],['A','Het lijkt op een allergische reactie. Ik geef u een zalf. Niet krabben, hè!'],['B','Waar haal ik de zalf?'],['A','Ik stuur het recept naar de apotheek. Morgen kunt u het ophalen.']],
  qs:[{q:'Wat zegt de dokter over de klachten?', opts:['Het is griep','Het is waarschijnlijk een allergische reactie','Het is niet erg en gaat vanzelf over'], a:1},{q:'Wanneer kan de patiënt de zalf ophalen?', opts:['Vandaag','Morgen','Zaterdag'], a:1}]},
 {title:'NiG 10 · Bij de fietsenmaker', tier:1, lines:[['A','Goedemorgen, wat is er gebeurd met uw fiets?'],['B','Ik ben gisteren gevallen. Het regende en de weg was glad.'],['A','Ik zie het. Er zit een slag in het voorwiel en het stuur staat scheef.'],['B','Kunt u hem maken?'],['A','Ja, maar dat kost ongeveer zestig euro. Hij is donderdag klaar.'],['B','Donderdag? Ik heb hem morgen nodig voor mijn werk.'],['A','Dan kunt u een leenfiets van ons gebruiken.']],
  qs:[{q:'Waarom is de man gevallen?', opts:['Hij reed te snel','De weg was glad','Zijn rem was kapot'], a:1},{q:'Wat krijgt de man tot donderdag?', opts:['Een leenfiets','Een korting','Een nieuwe fiets'], a:0}]},
 {title:'NiG 11 · Op een verjaardag', tier:1, lines:[['A','Van harte gefeliciteerd met je zus!'],['B','Dank je! Ken jij mijn zus via je werk?'],['A','Nee, via de sportschool. Wat doe jij voor werk?'],['B','Ik ben verpleegkundige. Ik werk in het ziekenhuis, vaak ook ’s nachts.'],['A','Wat zwaar! Heb je nog tijd voor hobby’s?'],['B','Een beetje. Ik zwem graag, één keer per week.']],
  qs:[{q:'Hoe kent de vrouw de jarige?', opts:['Via haar werk','Via de sportschool','Het is haar buurvrouw'], a:1},{q:'Wat is de hobby van de man?', opts:['Wandelen','Zwemmen','Koken'], a:1}]},
 {title:'NiG 12 · Een klacht in het hotel', tier:1, lines:[['A','Goedenavond, receptie.'],['B','Goedenavond, ik bel vanuit kamer 214. De airco doet het niet en het is erg warm in de kamer.'],['A','Wat vervelend! De technische dienst is er nu niet. Zal ik u een andere kamer geven?'],['B','Graag. Is die ook op de tweede verdieping?'],['A','Nee, op de vierde, met uitzicht op het park. U kunt de lift nemen.']],
  qs:[{q:'Wat is het probleem?', opts:['De lift is stuk','De airco werkt niet','De kamer is te klein'], a:1},{q:'Op welke verdieping is de nieuwe kamer?', opts:['De tweede','De vierde','De eerste'], a:1}]},
 {title:'NiG 13 · Inschrijven bij de sportschool', tier:1, lines:[['A','Hallo, ik wil graag lid worden.'],['B','Leuk! Wilt u een maand- of een jaarabonnement?'],['A','Wat is het verschil?'],['B','Een jaarabonnement is goedkoper, maar u kunt alleen na een jaar opzeggen. Een maandabonnement kunt u elke maand opzeggen.'],['A','Ik weet nog niet of ik het leuk vind. Dan neem ik een maandabonnement.'],['B','Prima. En deze week krijgt u een gratis sportdrankje!']],
  qs:[{q:'Welk abonnement kiest de klant?', opts:['Een jaarabonnement','Een maandabonnement','Geen abonnement'], a:1},{q:'Waarom kiest de klant dit abonnement?', opts:['Het is goedkoper','Hij weet nog niet of hij het leuk vindt','Hij krijgt korting'], a:1}]},
 {title:'NiG 14 · Na de film', tier:1, lines:[['A','En, wat vond je van de film?'],['B','Ik vond hem indrukwekkend. Vooral de hoofdrolspeler was heel goed.'],['A','Echt? Ik vond hem eerlijk gezegd een beetje saai. Het duurde te lang.'],['B','Dat vind ik niet. Het verhaal is waargebeurd, dat maakt het spannend.'],['A','Oké, het zal wel aan mij liggen. Zullen we nog wat drinken in het filmcafé?']],
  qs:[{q:'Wat vindt de vrouw van de film?', opts:['Saai','Indrukwekkend','Grappig'], a:1},{q:'Wat stelt de man voor?', opts:['Nog een film kijken','Iets drinken in het filmcafé','Naar huis gaan'], a:1}]},
 {title:'NiG 15 · Een praatje op het werk', tier:1, lines:[['A','Goedemorgen Jasper! Koud, hè, vandaag?'],['B','Zeg dat wel! En ik heb ook nog een uur in de file gestaan.'],['A','Wat vervelend. Ben je klaar voor de presentatie van vanmiddag?'],['B','Bijna. Ik ben een beetje zenuwachtig. Heb je een tip?'],['A','Oefen het eerst een keer met mij, dan voel je je zekerder.'],['B','Goed idee! Kan het om elf uur?']],
  qs:[{q:'Waarom was Jasper laat?', opts:['Hij stond in de file','De trein was te laat','Hij was ziek'], a:0},{q:'Welk advies krijgt Jasper?', opts:['De presentatie uitstellen','Eerst oefenen met zijn collega','Thuiswerken'], a:1}]},
 {title:'NiG 16 · Thuis aan het ontbijt', tier:1, lines:[['A','Goedemorgen schat, heb je lekker geslapen?'],['B','Heerlijk. Ik heb gedroomd over een tropisch eiland. Wat ga jij vandaag doen?'],['A','Ik heb vanochtend college en vanmiddag moet ik naar de bank.'],['B','Ik werk vandaag thuis. Zal ik vanavond koken?'],['A','Graag! Pasta met gehaktballetjes?'],['B','Prima. Dan doe ik straks boodschappen.']],
  qs:[{q:'Wat gaat de vrouw vanmiddag doen?', opts:['Naar college','Naar de bank','Koken'], a:1},{q:'Wie kookt er vanavond?', opts:['De vrouw','De man','Niemand, ze gaan uit eten'], a:1}]},
 // ---- graduated practice: start easy within a chapter, build up to exam level ----
 {title:'NiG 1 · Een vraag over het rooster', ch:'NiG 1', tier:2, lines:[['A','Mevrouw De Vries, mag ik iets vragen?'],['B','Natuurlijk, Karim. Wat wil je weten?'],['A','Wanneer is de toets over hoofdstuk 1 tot en met 4?'],['B','Die is over twee weken, op vrijdag negen uur.'],['A','Oké, dank u wel. Moet ik dan ook het hele boek meenemen?'],['B','Nee, alleen een pen is genoeg.']],
  qs:[{q:'Wanneer is de toets?', opts:['Over twee weken, op vrijdag','Volgende week, op maandag','Vandaag, om negen uur'], a:0, hint:'Let op hoeveel weken de docent noemt.'},{q:'Wat moet Karim meenemen?', opts:['Het hele boek','Alleen een pen','Niets'], a:1, hint:'Luister naar het laatste antwoord van de docent.'}]},
 {title:'NiG 1 · Telefoongesprek met de taalschool', ch:'NiG 1', tier:3, lines:[['A','Goedemiddag, Taalschool De Brug.'],['B','Goedemiddag, ik bel omdat ik mij wil inschrijven voor een cursus Nederlands.'],['A','Prima, heeft u al eerder Nederlandse les gehad?'],['B','Nee, dit is mijn eerste cursus.'],['A','Dan begint u het beste bij niveau A1. De cursus start op 3 november, op maandag- en woensdagochtend.'],['B','Goed, en wat kost de cursus?'],['A','De cursus kost 250 euro, inclusief het boek.']],
  qs:[{q:'Waarom belt de persoon?', opts:['Om zich in te schrijven voor een cursus','Om een klacht te doen','Om een boek te bestellen'], a:0, hint:'Luister naar de eerste zin van spreker B.'},{q:'Bij welk niveau begint de persoon?', opts:['A1','A2','B1'], a:0, hint:'De persoon heeft nog nooit les gehad.'},{q:'Wat is inbegrepen in de prijs?', opts:['Het boek','De koffie','De excursie'], a:0, hint:'Let op het laatste zinnetje.'}]},
 {title:'NiG 1 · Een moeilijke dag op school', ch:'NiG 1', tier:4, lines:[['A','Hoi Karim, hoe gaat het met de lessen?'],['B','Eerlijk gezegd vind ik het best moeilijk. Vooral de grammatica.'],['A','Welk onderdeel precies?'],['B',"De werkwoorden. Ik weet nooit wanneer ik 'heb' of 'ben' moet gebruiken."],['A','Ach, dat leert iedereen in het begin. Heb je al een grammaticavideo bekeken?'],['B','Nog niet, ik wist niet dat die er waren.'],['A','Die staan op de website, bij elk hoofdstuk. Kijk er maar eens naar, dat helpt echt.'],['B','Oké, dat ga ik proberen. Bedankt voor de tip!']],
  qs:[{q:'Wat vindt Karim moeilijk?', opts:['De grammatica, vooral de werkwoorden','Het lezen','De uitspraak'], a:0, hint:'Luister goed naar wat Karim twee keer noemt.'},{q:'Wat raadt de ander Karim aan?', opts:['Een grammaticavideo bekijken','Een andere cursus kiezen','Stoppen met de cursus'], a:0, hint:'Let op het advies aan het eind van het gesprek.'},{q:"Waar staan de grammaticavideo's?", opts:['Op de website, bij elk hoofdstuk','Alleen in het boek','Bij de administratie'], a:0, hint:"Luister naar waar de video's te vinden zijn."}]},
 {title:'NiG 2 · Over de lunch', ch:'NiG 2', tier:2, lines:[['A','Ga je ook lunchen?'],['B','Ja, over tien minuten. Eerst wil ik deze e-mail nog afmaken.'],['A','Oké, zie ik je in de kantine?'],['B','Ja, tot zo! Neem jij vast een plekje voor ons?'],['A','Doe ik!']],
  qs:[{q:'Wanneer gaat B lunchen?', opts:['Nu meteen','Over tien minuten','Morgen'], a:1, hint:'Let op de tijd die B noemt.'},{q:'Wat vraagt B aan A?', opts:['Om een plekje te nemen','Om koffie te halen','Om te wachten buiten'], a:0, hint:'Luister naar het laatste verzoek van B.'}]},
 {title:'NiG 2 · Verjaardag in de kantine', ch:'NiG 2', tier:3, lines:[['A','Zeg, ben jij niet morgen jarig?'],['B','Ja, dat klopt! Ik word 30.'],['A','Gefeliciteerd vast! Trakteer je ook?'],['B','Natuurlijk, ik neem gebak mee voor iedereen.'],['A','Leuk! Hoe laat kom je morgen?'],['B','Ik kom iets later, rond half tien, want ik haal eerst het gebak op bij de bakker.']],
  qs:[{q:'Hoe oud wordt B?', opts:['20','30','13'], a:1, hint:'Luister naar het getal dat B noemt.'},{q:'Waarom komt B morgen iets later?', opts:['Ze haalt eerst gebak op','Ze heeft een afspraak bij de dokter','De trein heeft vertraging'], a:0, hint:'Luister naar de reden aan het einde.'}]},
 {title:'NiG 2 · Een klacht over de kantine', ch:'NiG 2', tier:4, lines:[['A','Hé, heb jij ook gemerkt dat de kantine de laatste tijd zo druk is?'],['B','Ja, vreselijk. Ik moet soms wel twintig minuten wachten.'],['A','Ik heb het al gemeld bij de manager. Hij zei dat ze er een extra medewerker bij gaan zetten.'],['B','Gelukkig, want zo kan het niet langer.'],['A','Vanaf volgende maand komt er ook een tweede kassa, dat zou moeten helpen.'],['B','Dat hoop ik, want nu gebruik ik mijn hele pauze om te wachten in de rij.']],
  qs:[{q:'Wat is het probleem?', opts:['De kantine is te duur','De kantine is te druk, lange wachttijd','Het eten is niet lekker'], a:1, hint:'Luister naar de klacht van spreker B.'},{q:'Wat gaat er vanaf volgende maand veranderen?', opts:['Er komt een tweede kassa','De kantine gaat dicht','De prijzen gaan omhoog'], a:0, hint:"Let op wat er 'volgende maand' gebeurt."},{q:'Waar gebruikt B nu zijn hele pauze voor?', opts:['Om te wachten in de rij','Om te lunchen met collega’s','Om buiten te wandelen'], a:0, hint:'Luister naar de laatste zin van B.'}]},
 {title:'NiG 3 · Bestellen aan de bar', ch:'NiG 3', tier:2, lines:[['A','Goedemiddag, wat mag het zijn?'],['B','Een cappuccino graag, en heeft u ook appeltaart?'],['A','Jazeker, met of zonder slagroom?'],['B','Met slagroom, lekker.'],['A','Komt eraan!']],
  qs:[{q:'Wat bestelt B behalve koffie?', opts:['Appeltaart','Een broodje','Een biertje'], a:0, hint:'Luister naar de tweede vraag van B.'},{q:'Hoe wil B de appeltaart?', opts:['Zonder slagroom','Met slagroom','Dat maakt niet uit'], a:1, hint:'Luister naar het antwoord van B op de vraag van de medewerker.'}]},
 {title:'NiG 3 · De rekening vragen', ch:'NiG 3', tier:3, lines:[['A','Mogen we afrekenen, alstublieft?'],['B','Natuurlijk, dat is dan twee koffie en een taart, samen € 9,20.'],['A','Kunnen we pinnen?'],['B','Ja hoor, hier is de pinautomaat.'],['A','Bedankt. Doen we er ook nog een fooi bij? Laten we een euro extra geven.']],
  qs:[{q:'Hoeveel moeten ze betalen voor koffie en taart?', opts:['€ 9,20','€ 10,20','€ 8,20'], a:0, hint:'Luister naar het bedrag dat de medewerker noemt.'},{q:'Hoe betalen ze?', opts:['Contant','Met pin','Met een cadeaubon'], a:1, hint:'Luister naar de vraag van A over betalen.'},{q:'Hoeveel fooi geven ze extra?', opts:['Een euro','Twee euro','Geen fooi'], a:0, hint:'Luister naar het laatste zinnetje.'}]},
 {title:'NiG 3 · Een misverstand over de bestelling', ch:'NiG 3', tier:4, lines:[['A','Sorry, ik geloof dat dit niet is wat ik besteld heb.'],['B','Oh, wat had u besteld?'],['A','Ik had een cappuccino besteld, maar dit is gewone koffie.'],['B','Mijn excuses, dat is fout gegaan in de keuken. Ik haal meteen de juiste voor u.'],['A','Geen probleem, dank u wel.'],['B','Het spijt me echt, de cappuccino is van het huis, als excuus.']],
  qs:[{q:'Wat is het probleem?', opts:['De koffie is koud','A kreeg de verkeerde bestelling','Er is niet betaald'], a:1, hint:'Luister naar wat A zegt dat anders is.'},{q:'Wat had A besteld?', opts:['Een cappuccino','Gewone koffie','Thee'], a:0, hint:'Luister naar het eerste antwoord van A.'},{q:'Wat biedt de medewerker aan als excuus?', opts:['Een gratis cappuccino','Een gratis taart','Geld terug'], a:0, hint:'Luister naar de laatste zin van spreker B.'}]},
 {"title":"NiG 4 · De weg vragen","ch":"NiG 4","tier":2,"lines":[["A","Pardon, weet u waar de bibliotheek is?"],["B","Ja, loop rechtdoor tot het stoplicht, en sla dan links af."],["A","Is het ver?"],["B","Nee hoor, vijf minuten lopen."]],"qs":[{"q":"Wat moet de man bij het stoplicht doen?","opts":["Rechtdoor lopen","Links afslaan","Rechts afslaan"],"a":1,"hint":"Luister naar het tweede antwoord."},{"q":"Hoe ver is de bibliotheek?","opts":["Vijf minuten lopen","Tien minuten lopen","Heel ver"],"a":0,"hint":"Luister naar het laatste antwoord."}]},
 {"title":"NiG 4 · Een ongeluk op straat","ch":"NiG 4","tier":3,"lines":[["A","Gaat het? Ik zag dat je fiets omviel!"],["B","Ja hoor, niks aan de hand. Ik schrok van die hond."],["A","Zal ik je helpen met je tas?"],["B","Graag, bedankt. Mijn knie doet wel een beetje pijn."],["A","Zullen we even gaan zitten op dat bankje daar?"]],"qs":[{"q":"Waarom viel de fiets om?","opts":["De vrouw schrok van een hond","De weg was glad","De fiets was kapot"],"a":0,"hint":"Luister naar het antwoord van B."},{"q":"Wat doet pijn?","opts":["Haar arm","Haar knie","Haar rug"],"a":1,"hint":"Luister naar wat B zegt na \"bedankt\"."}]},
 {"title":"NiG 4 · Klacht over de straatverlichting","ch":"NiG 4","tier":4,"lines":[["A","Gemeente Amersfoort, goedemiddag."],["B","Goedemiddag, ik bel over de straatverlichting in de Molenstraat. Twee lantaarnpalen doen het al een week niet."],["A","Dat is vervelend. Ik geef het door aan de technische dienst."],["B","Hoe lang duurt het voordat het gemaakt is?"],["A","Meestal binnen twee weken, maar bij spoed kan het sneller."],["B","Het is wel donker ’s avonds, kinderen fietsen daar naar school."],["A","Dan noteer ik het als spoed. U krijgt een e-mail zodra het is opgelost."]],"qs":[{"q":"Waarover klaagt de vrouw?","opts":["Over een gat in de weg","Over kapotte straatverlichting","Over te veel verkeer"],"a":1,"hint":"Luister naar de eerste zin van B."},{"q":"Hoe lang duurt een normale reparatie?","opts":["Binnen twee weken","Binnen twee dagen","Binnen een maand"],"a":0,"hint":"Luister naar het antwoord van A."},{"q":"Waarom wordt het als spoed genoteerd?","opts":["Omdat kinderen daar fietsen in het donker","Omdat het al een maand duurt","Omdat de vrouw boos is"],"a":0,"hint":"Luister naar de reden die de vrouw geeft."}]},
 {"title":"NiG 5 · Afrekenen bij de kaaskraam","ch":"NiG 5","tier":2,"lines":[["A","Ik wil graag een stukje oude kaas, ongeveer vierhonderd gram."],["B","Komt eraan. Dat is dan vijf euro."],["A","Kan ik pinnen?"],["B","Natuurlijk, hier is de pinautomaat."]],"qs":[{"q":"Hoeveel kaas wil de klant?","opts":["Tweehonderd gram","Vierhonderd gram","Een kilo"],"a":1,"hint":"Luister naar het eerste zinnetje."},{"q":"Hoe betaalt de klant?","opts":["Contant","Met pin","Met een cadeaubon"],"a":1,"hint":"Luister naar de laatste zinnen."}]},
 {"title":"NiG 5 · Onderhandelen op de markt","ch":"NiG 5","tier":3,"lines":[["A","Wat kosten deze aardbeien?"],["B","Vier euro per bakje."],["A","Dat is best duur. Doet u twee bakjes voor zeven euro?"],["B","Hmm, oké, voor u maak ik een uitzondering."],["A","Dank u wel, heel vriendelijk!"]],"qs":[{"q":"Wat is de normale prijs per bakje?","opts":["Twee euro","Vier euro","Zeven euro"],"a":1,"hint":"Luister naar het eerste antwoord."},{"q":"Wat gebeurt er met de prijs?","opts":["Hij blijft hetzelfde","De verkoper geeft korting","De klant betaalt meer"],"a":1,"hint":"Luister naar de reactie van de verkoper."}]},
 {"title":"NiG 5 · Een verdwaald kind op de markt","ch":"NiG 5","tier":4,"lines":[["A","Mevrouw, ik ben mijn moeder kwijt!"],["B","Oh jee, niet huilen, we gaan haar zoeken. Hoe heet je?"],["A","Ik heet Sem, ik ben zes jaar."],["B","Waar was je het laatst samen met haar?"],["A","Bij de kraam met bloemen, geloof ik."],["B","Kom, we gaan daarheen. En we vragen bij de informatiekraam om om te roepen."]],"qs":[{"q":"Wat is het probleem?","opts":["Sem heeft geen geld","Sem is zijn moeder kwijt","Sem is gevallen"],"a":1,"hint":"Luister naar de eerste zin."},{"q":"Waar waren ze voor het laatst samen?","opts":["Bij de kaaskraam","Bij de bloemenkraam","Bij de ingang"],"a":1,"hint":"Luister naar het antwoord van Sem."},{"q":"Wat stelt de vrouw voor?","opts":["Naar huis gaan","Naar de bloemenkraam gaan en de informatiekraam vragen om om te roepen","De politie bellen"],"a":1,"hint":"Luister naar de laatste zin."}]},
 {"title":"NiG 6 · Allergie doorgeven","ch":"NiG 6","tier":2,"lines":[["A","Weet u al wat u wilt bestellen?"],["B","Ja, maar ik ben allergisch voor noten. Zit daar iets in de salade?"],["A","Ja, er zitten walnoten in. Zal ik de kok vragen om ze weg te laten?"],["B","Graag, dank u wel."]],"qs":[{"q":"Waar is de klant allergisch voor?","opts":["Noten","Melk","Vis"],"a":0,"hint":"Luister naar het eerste antwoord."},{"q":"Wat gaat de ober doen?","opts":["Niets","De kok vragen de noten weg te laten","Een ander gerecht aanbevelen"],"a":1,"hint":"Luister naar wat de ober voorstelt."}]},
 {"title":"NiG 6 · Een tafel reserveren per telefoon","ch":"NiG 6","tier":3,"lines":[["A","Restaurant De Gouden Lepel, goedenavond."],["B","Goedenavond, ik wil graag een tafel reserveren voor morgen."],["A","Voor hoeveel personen en hoe laat?"],["B","Voor drie personen, om acht uur."],["A","Dat kan. Mag ik uw naam en telefoonnummer?"],["B","Natuurlijk, Eva Smits, 06-11223344."]],"qs":[{"q":"Voor hoeveel personen reserveert Eva?","opts":["Twee","Drie","Vier"],"a":1,"hint":"Luister naar het antwoord van B."},{"q":"Hoe laat is de reservering?","opts":["Zeven uur","Acht uur","Negen uur"],"a":1,"hint":"Luister goed naar de tijd."}]},
 {"title":"NiG 6 · Een klacht over de rekening","ch":"NiG 6","tier":4,"lines":[["A","Pardon, ik denk dat er een fout staat op de rekening."],["B","Oh, laat me kijken. Wat klopt er niet?"],["A","Wij hebben geen wijn besteld, maar hier staat een fles wijn van vijfentwintig euro."],["B","U heeft helemaal gelijk, mijn excuses. Dat moet een vergissing zijn van een andere tafel."],["A","Geen probleem, het kan gebeuren."],["B","Ik pas de rekening meteen aan. Nogmaals excuses voor het ongemak."]],"qs":[{"q":"Wat klopt niet aan de rekening?","opts":["Er staat een fles wijn op die ze niet besteld hebben","Het bedrag is te laag","Er ontbreekt een gerecht"],"a":0,"hint":"Luister naar wat de klant zegt."},{"q":"Hoe reageert de ober?","opts":["Hij is het er niet mee eens","Hij geeft toe dat het een fout is en past het aan","Hij vraagt om te betalen"],"a":1,"hint":"Luister naar het antwoord van de ober."}]},
 {"title":"NiG 7 · Maat vragen","ch":"NiG 7","tier":2,"lines":[["A","Heeft u deze trui ook in maat M?"],["B","Even kijken… ja, hier is hij."],["A","Mag ik hem passen?"],["B","Natuurlijk, de paskamer is daar achterin."]],"qs":[{"q":"Welke maat zoekt de klant?","opts":["S","M","L"],"a":1,"hint":"Luister naar de eerste zin."},{"q":"Waar is de paskamer?","opts":["Vooraan","Achterin","Boven"],"a":1,"hint":"Luister naar het laatste antwoord."}]},
 {"title":"NiG 7 · Advies over kleding","ch":"NiG 7","tier":3,"lines":[["A","Wat vind je, staat deze jurk me goed?"],["B","Ja, de kleur staat je goed, maar hij is misschien iets te lang voor jou."],["A","Hebben ze hem ook korter?"],["B","Volgens mij niet, maar je kunt hem laten innemen bij een kleermaker."],["A","Goed idee, dat ga ik doen."]],"qs":[{"q":"Wat vindt B van de kleur?","opts":["Lelijk","Staat haar goed","Te fel"],"a":1,"hint":"Luister naar het eerste antwoord van B."},{"q":"Wat gaat A doen?","opts":["De jurk terugbrengen","Naar een kleermaker gaan","Een andere jurk kopen"],"a":1,"hint":"Luister naar het einde van het gesprek."}]},
 {"title":"NiG 7 · Een klacht over kwaliteit","ch":"NiG 7","tier":4,"lines":[["A","Goedemiddag, ik kom deze trui terugbrengen."],["B","Wat is er mis mee?"],["A","Ik heb hem twee keer gewassen en er zitten nu gaten in, op de ellebogen."],["B","Dat hoort niet te gebeuren bij normaal gebruik. Heeft u de kassabon nog?"],["A","Ja, hier is hij, ik heb hem drie weken geleden gekocht."],["B","Prima, dan krijgt u uw geld terug of een nieuwe trui, wat u liever heeft."],["A","Ik neem liever een nieuwe trui, dezelfde kleur graag."]],"qs":[{"q":"Wat is het probleem met de trui?","opts":["Hij is te klein","Er zitten gaten in","De kleur is verkeerd"],"a":1,"hint":"Luister naar de klacht van A."},{"q":"Wat vraagt de verkoper?","opts":["Om de kassabon","Om een foto","Om de trui te wassen"],"a":0,"hint":"Luister naar de vraag van B."},{"q":"Wat kiest de klant?","opts":["Geld terug","Een nieuwe trui","Een andere kleur"],"a":1,"hint":"Luister naar het laatste antwoord."}]},
 {"title":"NiG 8 · Vraag over de huur","ch":"NiG 8","tier":2,"lines":[["A","Is de huur inclusief internet?"],["B","Nee, internet moet u zelf regelen. Gas, water en licht zijn ook exclusief."],["A","Oké, dank u voor de informatie."]],"qs":[{"q":"Is internet inbegrepen in de huur?","opts":["Ja","Nee","Alleen in de zomer"],"a":1,"hint":"Luister naar het eerste antwoord."},{"q":"Wat is nog meer exclusief?","opts":["De meubels","Gas, water en licht","De schoonmaak"],"a":1,"hint":"Luister naar de rest van het antwoord."}]},
 {"title":"NiG 8 · Vragen over de buurt","ch":"NiG 8","tier":3,"lines":[["A","Hoe is de buurt hier, rustig of druk?"],["B","Vrij rustig, vooral ’s avonds. Overdag is er wat verkeer omdat de school dichtbij is."],["A","Is er een supermarkt in de buurt?"],["B","Ja, op vijf minuten lopen, en er is ook een markt op zaterdag."]],"qs":[{"q":"Hoe is de buurt ’s avonds?","opts":["Druk","Rustig","Gevaarlijk"],"a":1,"hint":"Luister naar het eerste antwoord."},{"q":"Hoe ver is de supermarkt?","opts":["Vijf minuten lopen","Tien minuten fietsen","Heel ver"],"a":0,"hint":"Luister naar het laatste antwoord."}]},
 {"title":"NiG 8 · Onderhandelen over de huur","ch":"NiG 8","tier":4,"lines":[["A","De huur is negenhonderdvijftig euro, dat vind ik best hoog voor dit appartement."],["B","Het is een goede locatie, dichtbij het centrum. Maar ik kan met de eigenaar overleggen."],["A","Zou negenhonderd mogelijk zijn? Dan teken ik vandaag nog."],["B","Laat me bellen… De eigenaar gaat akkoord, op voorwaarde dat u een jaar blijft."],["A","Dat is geen probleem, ik zoek sowieso voor langere tijd."]],"qs":[{"q":"Wat vindt de huurder van de huur?","opts":["Te laag","Te hoog","Precies goed"],"a":1,"hint":"Luister naar de eerste zin."},{"q":"Wat biedt de huurder aan in ruil voor een lagere huur?","opts":["Vandaag tekenen","Contant betalen","Een jaar niet klagen"],"a":0,"hint":"Luister naar wat de huurder voorstelt."},{"q":"Onder welke voorwaarde gaat de eigenaar akkoord?","opts":["Een jaar blijven","Meteen de borg betalen","Geen huisdieren"],"a":0,"hint":"Luister naar de laatste zinnen van B."}]},
 {"title":"NiG 9 · Een afspraak maken","ch":"NiG 9","tier":2,"lines":[["A","Huisartsenpraktijk Zuid, goedemorgen."],["B","Goedemorgen, ik wil graag een afspraak maken, ik heb keelpijn."],["A","Kunt u morgen om 9.40 uur?"],["B","Ja, dat is goed, dank u wel."]],"qs":[{"q":"Waarom belt de patiënt?","opts":["Voor een herhaalrecept","Voor keelpijn","Voor een griepprik"],"a":1,"hint":"Luister naar de reden die de patiënt geeft."},{"q":"Wanneer is de afspraak?","opts":["Vandaag","Morgen om 9.40 uur","Volgende week"],"a":1,"hint":"Luister naar het voorstel van de assistente."}]},
 {"title":"NiG 9 · Symptomen beschrijven","ch":"NiG 9","tier":3,"lines":[["A","Wat zijn uw klachten precies?"],["B","Ik heb sinds twee dagen hoofdpijn en ik ben erg moe."],["A","Heeft u ook koorts gemeten?"],["B","Ja, vanochtend 38,2 graden."],["A","Dat lijkt op een griepje. Rust veel en drink genoeg water."]],"qs":[{"q":"Hoe lang heeft de patiënt al klachten?","opts":["Twee dagen","Een week","Vandaag pas"],"a":0,"hint":"Luister naar het eerste antwoord."},{"q":"Hoeveel koorts had de patiënt?","opts":["37,2 graden","38,2 graden","39,2 graden"],"a":1,"hint":"Luister naar het getal dat genoemd wordt."}]},
 {"title":"NiG 9 · Een tweede mening vragen","ch":"NiG 9","tier":4,"lines":[["A","Dokter, ik ben niet helemaal gerust op uw diagnose. Kan ik een tweede mening krijgen?"],["B","Natuurlijk, dat is uw goed recht. Wilt u dat ik u doorverwijs naar een specialist?"],["A","Graag, en kunt u ook mijn dossier meesturen?"],["B","Zeker, ik stuur het dossier door naar de specialist van uw keuze, of ik kies er zelf een voor u uit."],["A","Stuurt u mij maar iemand, als het maar niet te lang duurt."]],"qs":[{"q":"Wat vraagt de patiënt?","opts":["Een andere huisarts","Een tweede mening van een specialist","Meer medicijnen"],"a":1,"hint":"Luister naar de eerste zin."},{"q":"Wat is het goed recht van de patiënt volgens de dokter?","opts":["Gratis medicijnen krijgen","Een tweede mening vragen","Zelf een dokter kiezen"],"a":1,"hint":"Luister naar wat de dokter zegt over \"goed recht\"."},{"q":"Wat wordt er meegestuurd naar de specialist?","opts":["Het dossier van de patiënt","Een recept","Een factuur"],"a":0,"hint":"Luister naar wat de patiënt vraagt."}]},
 {"title":"NiG 10 · Band plakken","ch":"NiG 10","tier":2,"lines":[["A","Mijn band is lek, kunt u hem plakken?"],["B","Ja, dat kan. Dat duurt ongeveer twintig minuten."],["A","En wat kost dat?"],["B","Twaalf euro vijftig, inclusief een nieuw ventiel als dat nodig is."]],"qs":[{"q":"Hoe lang duurt het plakken?","opts":["Tien minuten","Twintig minuten","Een uur"],"a":1,"hint":"Luister naar het eerste antwoord van B."},{"q":"Wat kost het?","opts":["€ 10,50","€ 12,50","€ 15,00"],"a":1,"hint":"Luister naar het laatste antwoord."}]},
 {"title":"NiG 10 · Een nieuwe fiets kopen","ch":"NiG 10","tier":3,"lines":[["A","Ik zoek een nieuwe fiets voor woon-werkverkeer."],["B","Wilt u een elektrische fiets of een gewone?"],["A","Een gewone, ik wil juist bewegen."],["B","Dan heb ik hier een goed model, met acht versnellingen, voor vierhonderd euro."],["A","Heeft hij ook goede verlichting?"],["B","Ja, ingebouwde led-verlichting, erg handig in de winter."]],"qs":[{"q":"Wat voor fiets wil de klant?","opts":["Een elektrische fiets","Een gewone fiets","Een racefiets"],"a":1,"hint":"Luister naar het antwoord van A."},{"q":"Wat kost de fiets die wordt aangeboden?","opts":["€ 300","€ 400","€ 500"],"a":1,"hint":"Luister naar het bedrag."}]},
 {"title":"NiG 10 · Fiets gestolen","ch":"NiG 10","tier":4,"lines":[["A","Mijn fiets is gestolen! Hij stond gisteravond nog bij het station."],["B","Wat vervelend. Heeft u aangifte gedaan bij de politie?"],["A","Nog niet, ik wist niet goed hoe dat moest."],["B","Dat kan online via de politiewebsite. Heeft u het framenummer van de fiets?"],["A","Ja, dat staat op mijn aankoopbon, gelukkig."],["B","Mooi, dat heeft u nodig voor de aangifte en eventueel voor de verzekering."]],"qs":[{"q":"Wat is er gebeurd?","opts":["De fiets is kapot","De fiets is gestolen","De fiets staat nog bij het station"],"a":1,"hint":"Luister naar de eerste zin."},{"q":"Hoe kan de vrouw aangifte doen?","opts":["Alleen bij het politiebureau","Online via de politiewebsite","Dat kan niet meer"],"a":1,"hint":"Luister naar wat B voorstelt."},{"q":"Wat heeft ze nodig voor de aangifte?","opts":["Het framenummer","Haar paspoort","De sleutel van de fiets"],"a":0,"hint":"Luister naar de laatste zinnen."}]},
 {"title":"NiG 11 · Een cadeau bespreken","ch":"NiG 11","tier":2,"lines":[["A","Wat geven we Lars voor zijn verjaardag?"],["B","Hij houdt van koken, misschien een kookboek?"],["A","Goed idee, of een cadeaubon voor de kookwinkel."],["B","Allebei is ook leuk!"]],"qs":[{"q":"Waar houdt Lars van?","opts":["Lezen","Koken","Sporten"],"a":1,"hint":"Luister naar het antwoord van B."},{"q":"Wat besluiten ze?","opts":["Alleen een kookboek","Alleen een cadeaubon","Misschien allebei"],"a":2,"hint":"Luister naar de laatste zin."}]},
 {"title":"NiG 11 · Aankomst op het feest","ch":"NiG 11","tier":3,"lines":[["A","Hoi, gefeliciteerd met je man!"],["B","Dank je wel, leuk dat je er bent! Doe je jas maar uit, hang hem daar maar."],["A","Waar kan ik dit cadeau neerleggen?"],["B","Op de tafel daar, bij de andere cadeaus. Wil je koffie of thee?"],["A","Koffie graag, zonder suiker."]],"qs":[{"q":"Wie wordt er gefeliciteerd?","opts":["De vrouw zelf","Haar man","Haar kind"],"a":1,"hint":"Luister naar de begroeting."},{"q":"Wat wil de gast drinken?","opts":["Thee met suiker","Koffie zonder suiker","Water"],"a":1,"hint":"Luister naar het laatste antwoord."}]},
 {"title":"NiG 11 · Een moeilijk gesprek op een feest","ch":"NiG 11","tier":4,"lines":[["A","Hoe gaat het eigenlijk met je werk? Ik hoorde dat het niet zo goed ging."],["B","Eerlijk gezegd, niet zo goed. Ik ben vorige maand ontslagen."],["A","Oh, wat vervelend, dat wist ik niet. Hoe voel je je erbij?"],["B","Het is wel even schrikken, maar ik ben ook op zoek naar iets nieuws, dus het heeft ook iets positiefs."],["A","Laat het me weten als ik ergens mee kan helpen, ik ken wel wat mensen in de sector."]],"qs":[{"q":"Wat is er met B gebeurd?","opts":["Hij heeft promotie gekregen","Hij is ontslagen","Hij is met pensioen"],"a":1,"hint":"Luister naar het antwoord van B."},{"q":"Hoe voelt B zich erover?","opts":["Alleen maar verdrietig","Geschrokken, maar ook positief","Heel boos"],"a":1,"hint":"Luister naar wat B zegt na \"schrikken\"."},{"q":"Wat biedt A aan?","opts":["Geld lenen","Helpen bij het zoeken naar werk","Een nieuwe baan geven"],"a":1,"hint":"Luister naar de laatste zin."}]},
 {"title":"NiG 12 · Inchecken bij het hotel","ch":"NiG 12","tier":2,"lines":[["A","Goedemiddag, ik heb een kamer gereserveerd op naam van Okafor."],["B","Een moment… ja, hier is het, een tweepersoonskamer voor twee nachten."],["A","Klopt helemaal."],["B","Hier is uw sleutelkaart, kamer 214, derde verdieping."]],"qs":[{"q":"Op welke naam staat de reservering?","opts":["Okafor","Van Dam","Smits"],"a":0,"hint":"Luister naar de eerste zin."},{"q":"Op welke verdieping is de kamer?","opts":["Tweede","Derde","Vierde"],"a":1,"hint":"Luister naar het laatste zinnetje."}]},
 {"title":"NiG 12 · Vraag over het ontbijt","ch":"NiG 12","tier":3,"lines":[["A","Tot hoe laat kunnen we ontbijten?"],["B","Normaal tot 10.00 uur, maar in het weekend tot 11.00 uur."],["A","Is er ook iets voor mensen die geen gluten mogen eten?"],["B","Ja, we hebben een aparte tafel met glutenvrij brood en producten."]],"qs":[{"q":"Tot hoe laat is het ontbijt in het weekend?","opts":["10.00 uur","11.00 uur","12.00 uur"],"a":1,"hint":"Luister naar het eerste antwoord."},{"q":"Wat is er voor mensen met een glutenallergie?","opts":["Niets speciaals","Een aparte tafel met glutenvrije producten","Ze moeten zelf eten meenemen"],"a":1,"hint":"Luister naar het laatste antwoord."}]},
 {"title":"NiG 12 · Een probleem met de betaling","ch":"NiG 12","tier":4,"lines":[["A","Ik zie op de rekening een extra bedrag van veertig euro, waar is dat voor?"],["B","Dat is voor de minibar, meneer."],["A","Dat klopt niet, ik heb niets uit de minibar gebruikt."],["B","Laat me dat even controleren… U heeft gelijk, het systeem heeft een fout gemaakt. Mijn excuses, ik corrigeer het meteen."],["A","Dank u, en kunt u me een nieuwe rekening mailen?"],["B","Natuurlijk, die stuur ik u binnen vijf minuten."]],"qs":[{"q":"Waarvoor is het extra bedrag volgens de receptie?","opts":["De minibar","Het ontbijt","Parkeren"],"a":0,"hint":"Luister naar het eerste antwoord."},{"q":"Wat blijkt het probleem te zijn?","opts":["De gast heeft het wel gebruikt","Een fout in het systeem","De gast moet toch betalen"],"a":1,"hint":"Luister naar wat B zegt na controle."},{"q":"Wat vraagt de gast aan het einde?","opts":["Een nieuwe rekening per e-mail","Geld terug in contanten","Een gratis nacht"],"a":0,"hint":"Luister naar de laatste twee zinnen."}]},
 {"title":"NiG 13 · Een les proberen","ch":"NiG 13","tier":2,"lines":[["A","Kan ik een gratis proefles doen?"],["B","Ja, de eerste les is altijd gratis. Welke les wilt u proberen?"],["A","Ik wil graag de yogales proberen."],["B","Die is vanavond om acht uur, in zaal 2."]],"qs":[{"q":"Is de eerste les gratis?","opts":["Ja","Nee","Alleen voor kinderen"],"a":0,"hint":"Luister naar het eerste antwoord."},{"q":"In welke zaal is de yogales?","opts":["Zaal 1","Zaal 2","Zaal 3"],"a":1,"hint":"Luister naar het laatste antwoord."}]},
 {"title":"NiG 13 · Advies van een trainer","ch":"NiG 13","tier":3,"lines":[["A","Ik heb al twee weken pijn in mijn schouder na het sporten."],["B","Dat klinkt niet goed. Welke oefeningen doet u precies?"],["A","Vooral met gewichten, voor mijn armen."],["B","Misschien gebruikt u een verkeerde houding. Zullen we samen kijken en de oefening aanpassen?"],["A","Graag, want ik wil niet stoppen met sporten."]],"qs":[{"q":"Waar heeft de klant pijn?","opts":["In zijn rug","In zijn schouder","In zijn knie"],"a":1,"hint":"Luister naar de eerste zin."},{"q":"Wat stelt de trainer voor?","opts":["Stoppen met sporten","Samen de oefening aanpassen","Naar de dokter gaan"],"a":1,"hint":"Luister naar wat de trainer voorstelt."}]},
 {"title":"NiG 13 · Een abonnement bevriezen","ch":"NiG 13","tier":4,"lines":[["A","Ik ga drie maanden naar het buitenland voor mijn werk. Kan ik mijn abonnement pauzeren?"],["B","Ja, dat kan. We noemen dat \"bevriezen\". U betaalt dan niets tijdens die periode."],["A","En gaat mijn jaarabonnement daardoor langer duren?"],["B","Precies, het wordt verlengd met het aantal maanden dat u bevriest."],["A","Mooi, kunt u dat voor mij regelen vanaf 1 juni?"],["B","Zeker, ik zet het meteen in het systeem."]],"qs":[{"q":"Waarom wil de klant pauzeren?","opts":["Hij is geblesseerd","Hij gaat voor werk naar het buitenland","Hij heeft geen geld meer"],"a":1,"hint":"Luister naar de eerste zin."},{"q":"Wat gebeurt er met de betaling tijdens het bevriezen?","opts":["Hij betaalt de helft","Hij betaalt niets","Hij betaalt extra"],"a":1,"hint":"Luister naar het antwoord van B."},{"q":"Wat gebeurt er met het jaarabonnement?","opts":["Het stopt helemaal","Het wordt verlengd met de bevroren periode","Er verandert niets"],"a":1,"hint":"Luister naar de derde en vierde zin."}]},
 {"title":"NiG 14 · Kaartjes kopen","ch":"NiG 14","tier":2,"lines":[["A","Twee kaartjes voor het concert van vanavond, graag."],["B","Dat is dan tien euro. Wilt u ook programmaboekjes?"],["A","Nee, dank u."],["B","Hier zijn uw kaartjes, de zaal gaat om acht uur open."]],"qs":[{"q":"Hoeveel kaartjes koopt de klant?","opts":["Eén","Twee","Drie"],"a":1,"hint":"Luister naar de eerste zin."},{"q":"Hoe laat gaat de zaal open?","opts":["Zeven uur","Acht uur","Negen uur"],"a":1,"hint":"Luister naar het laatste antwoord."}]},
 {"title":"NiG 14 · Advies over activiteiten","ch":"NiG 14","tier":3,"lines":[["A","Ik zoek iets leuks om te doen dit weekend met mijn kinderen."],["B","Zaterdagmiddag is er een kindervoorstelling, heel populair."],["A","Hoe oud moeten de kinderen daarvoor zijn?"],["B","Het is geschikt vanaf 4 jaar, en het duurt ongeveer 45 minuten."]],"qs":[{"q":"Wat wordt er aanbevolen?","opts":["Een filmavond","Een kindervoorstelling","Een concert"],"a":1,"hint":"Luister naar het eerste antwoord."},{"q":"Vanaf welke leeftijd is het geschikt?","opts":["2 jaar","4 jaar","8 jaar"],"a":1,"hint":"Luister naar het laatste antwoord."}]},
 {"title":"NiG 14 · Vrijwilliger worden","ch":"NiG 14","tier":4,"lines":[["A","Ik zou graag vrijwilligerswerk doen bij het cultureel centrum. Is dat mogelijk?"],["B","Zeker, we zoeken altijd mensen. Wat voor werk had u in gedachten?"],["A","Ik vind het leuk om mensen te verwelkomen, bijvoorbeeld bij de ingang."],["B","Dat kan goed, we hebben gastvrouwen en gastheren nodig bij voorstellingen."],["A","Hoeveel uur per week verwacht u van vrijwilligers?"],["B","Dat is flexibel, gemiddeld een paar uur per week, u kiest zelf wanneer u beschikbaar bent."]],"qs":[{"q":"Wat wil de persoon doen?","opts":["Optreden op het podium","Vrijwilligerswerk, mensen verwelkomen","Kaartjes verkopen online"],"a":1,"hint":"Luister naar wat de persoon zelf voorstelt."},{"q":"Hoe wordt dit werk genoemd?","opts":["Technicus","Gastvrouw of gastheer","Programmeur"],"a":1,"hint":"Luister naar het antwoord van B."},{"q":"Hoe flexibel zijn de uren?","opts":["Vast, elke dag hetzelfde","Flexibel, u kiest zelf","U moet full-time werken"],"a":1,"hint":"Luister naar de laatste zin."}]},
 {"title":"NiG 15 · Een collega helpen","ch":"NiG 15","tier":2,"lines":[["A","Kun je me helpen met deze Excel-tabel? Ik snap de formule niet."],["B","Natuurlijk, laat me even kijken. Ah, je mist een haakje hier."],["A","Oh, dankjewel! Dat had ik nooit gezien."]],"qs":[{"q":"Waarmee heeft de collega hulp nodig?","opts":["Met een presentatie","Met een Excel-tabel","Met een e-mail"],"a":1,"hint":"Luister naar de eerste zin."},{"q":"Wat was het probleem?","opts":["Een verkeerd getal","Een ontbrekend haakje","Een verkeerde kleur"],"a":1,"hint":"Luister naar het antwoord van B."}]},
 {"title":"NiG 15 · Functioneringsgesprek","ch":"NiG 15","tier":3,"lines":[["A","Hoe vind je dat het de afgelopen maanden is gegaan?"],["B","Over het algemeen goed, maar ik vind het lastig om prioriteiten te stellen."],["A","Dat herken ik. Zullen we samen kijken naar een cursus timemanagement?"],["B","Dat zou fijn zijn, graag."]],"qs":[{"q":"Wat vindt de medewerker lastig?","opts":["Samenwerken","Prioriteiten stellen","Op tijd komen"],"a":1,"hint":"Luister naar het antwoord van B."},{"q":"Wat wordt er voorgesteld?","opts":["Ontslag","Een cursus timemanagement","Minder werken"],"a":1,"hint":"Luister naar het voorstel van A."}]},
 {"title":"NiG 15 · Een conflict op het werk","ch":"NiG 15","tier":4,"lines":[["A","Ik moet eerlijk zeggen dat ik niet blij ben met hoe het project is verlopen."],["B","Wat bedoel je precies? Ik dacht dat we goed samenwerkten."],["A","Ik voelde me soms buitengesloten bij belangrijke beslissingen, ik hoorde ze pas achteraf."],["B","Dat was niet mijn bedoeling, sorry dat het zo overkwam. Zullen we voortaan elke week kort afstemmen?"],["A","Dat lijkt me een goede oplossing, dank je voor je begrip."]],"qs":[{"q":"Waar is A niet blij mee?","opts":["Het salaris","Hoe het project is verlopen","De werktijden"],"a":1,"hint":"Luister naar de eerste zin."},{"q":"Hoe voelde A zich?","opts":["Gewaardeerd","Buitengesloten bij beslissingen","Overwerkt"],"a":1,"hint":"Luister naar wat A precies zegt."},{"q":"Wat stellen ze voor als oplossing?","opts":["Niet meer samenwerken","Elke week kort afstemmen","Een andere collega erbij halen"],"a":1,"hint":"Luister naar het voorstel van B."}]},
 {"title":"NiG 16 · Huishoudelijke taken verdelen","ch":"NiG 16","tier":2,"lines":[["A","Zullen we de taken in huis verdelen?"],["B","Goed idee. Ik kook wel, als jij afwast?"],["A","Prima, en wie doet de was?"],["B","Dat doe ik om de week, is dat goed?"]],"qs":[{"q":"Wat gaat B doen?","opts":["Afwassen","Koken","Stofzuigen"],"a":1,"hint":"Luister naar het eerste voorstel van B."},{"q":"Hoe vaak doet B de was?","opts":["Elke dag","Om de week","Nooit"],"a":1,"hint":"Luister naar het laatste antwoord."}]},
 {"title":"NiG 16 · Een probleem met de buren","ch":"NiG 16","tier":3,"lines":[["A","Sorry dat ik aanbel, maar jullie muziek staat erg hard. Kunnen jullie het wat zachter zetten?"],["B","Oh sorry, we hadden niet door dat het zo laat was al! We zetten het meteen zachter."],["A","Dank je wel, ik moet morgen vroeg op."],["B","Geen probleem, excuses voor het ongemak."]],"qs":[{"q":"Waarom belt de buurman aan?","opts":["Om melk te lenen","Vanwege harde muziek","Vanwege een pakketje"],"a":1,"hint":"Luister naar de eerste zin."},{"q":"Hoe reageren de buren?","opts":["Boos","Begripvol, ze zetten het zachter","Ze doen niet open"],"a":1,"hint":"Luister naar de reactie van B."}]},
 {"title":"NiG 16 · Een lekkage in huis","ch":"NiG 16","tier":4,"lines":[["A","Er lekt water uit het plafond in de badkamer! Wat moet ik doen?"],["B","Draai eerst de hoofdkraan dicht, die vindt u meestal onder de gootsteen in de keuken."],["A","Oké, gedaan. En dan?"],["B","Bel de huisbaas, en maak foto’s van de schade voor de verzekering."],["A","Begrepen. Komt er snel iemand kijken?"],["B","Bij spoed, zoals een lekkage, moet de huisbaas binnen 24 uur reageren."]],"qs":[{"q":"Wat is het probleem?","opts":["De verwarming werkt niet","Er lekt water uit het plafond","De deur zit vast"],"a":1,"hint":"Luister naar de eerste zin."},{"q":"Wat moet de bewoner eerst doen?","opts":["De huisbaas bellen","De hoofdkraan dichtdraaien","Een nieuwe woning zoeken"],"a":1,"hint":"Luister naar het eerste advies."},{"q":"Binnen hoeveel uur moet de huisbaas reageren bij spoed?","opts":["24 uur","48 uur","Een week"],"a":0,"hint":"Luister naar de laatste zin."}]},
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
 {type:'form', title:'NiG 1 · Formulier: inschrijven voor een taalcursus', tier:1, prompt:'U wilt u inschrijven voor een cursus Nederlands. Vul het formulier in. Schrijf bij “Waarom wilt u Nederlands leren?” een hele zin.',
  fields:['Voornaam','Achternaam','Land van herkomst','Adres','Postcode en woonplaats','E-mailadres','Waarom wilt u Nederlands leren? (hele zin)'],
  model:['Karim','Benali','Marokko','Molenweg 8','3811 KD Amersfoort','k.benali@mail.nl','Ik wil Nederlands leren, want ik wil met mijn buren praten.'],
  checklist:['All fields are filled in','Name with a capital letter','Postcode format: 4 numbers + 2 letters','The reason is a full sentence with want or omdat']},
 {type:'text', title:'NiG 2 · E-mail: over uw familie', tier:1, prompt:'Uw nieuwe collega Tom vraagt in een e-mail naar uw familie. Schrijf hem terug.\nSchrijf:\n• hoe groot uw familie is\n• iets over één familielid (wie, hoe oud, hoe ziet hij/zij eruit)\n• wanneer iemand in uw familie jarig is',
  checklist:['Opening: “Hoi Tom,” / “Beste Tom,”','How big the family is (Ik heb twee broers en een zus.)','One person described (Mijn zus is 25. Ze heeft lang donker haar.)','A birthday with a month (Mijn moeder is in mei jarig.)','Closing + your name'],
  model:`Hoi Tom,

Ik heb een groot gezin. Ik heb twee broers en een zus. Mijn zus heet Leila. Ze is 25 jaar en ze heeft lang, donker haar. Ze is heel lief.
Mijn moeder is in mei jarig. Dan eten we altijd samen.

Groetjes,
Samira`},
 {type:'text', title:'NiG 3 · Uitnodiging: iets drinken', tier:1, prompt:'U bent volgende week jarig. U wilt met uw klasgenoten iets drinken in een café. Schrijf een berichtje.\nSchrijf:\n• waarom u ze uitnodigt\n• wanneer en waar\n• dat u trakteert op het eerste drankje',
  checklist:['Opening: “Hallo allemaal,”','Reason (want ik ben jarig)','Day, time and place (vrijdag om vijf uur in Café De Hoek)','You treat them (Ik trakteer op het eerste drankje.)','Closing + name'],
  model:`Hallo allemaal,

Volgende week vrijdag ben ik jarig! Ik wil dat graag met jullie vieren.
Komen jullie vrijdag om vijf uur naar Café De Hoek? Het eerste drankje is van mij, ik trakteer!

Tot vrijdag,
Diego`},
 {type:'text', title:'NiG 4 · Bericht: een afspraak verzetten', tier:1, prompt:'U heeft zaterdag een afspraak met uw vriendin Mila, maar u kunt niet. Stuur haar een bericht.\nSchrijf:\n• dat u zaterdag niet kunt\n• waarom niet\n• stel een andere dag en tijd voor',
  checklist:['Opening: “Hoi Mila,”','You cannot come (Ik kan zaterdag helaas niet.)','Reason with want (want ik moet werken)','New proposal with zullen (Zullen we zondagmiddag afspreken?)','Closing + name'],
  model:`Hoi Mila,

Sorry, ik kan zaterdag helaas niet, want ik moet onverwacht werken.
Zullen we zondagmiddag om drie uur koffie drinken? Dan kom ik naar het tentje bij het plein.

Groetjes,
Daan`},
 {type:'text', title:'NiG 5 · Briefje: boodschappen', tier:1, prompt:'Uw huisgenoot gaat morgen naar de markt. Schrijf een briefje.\nSchrijf:\n• wat hij moet kopen (minstens 4 dingen, met hoeveelheid)\n• waarom u die dingen nodig heeft\n• dat u hem het geld terugbetaalt',
  checklist:['Opening: “Hoi …,”','At least 4 items with amounts (een kilo aardappelen, twee paprika’s)','Reason (want ik maak morgen stamppot)','You will pay back (Ik betaal je morgen terug.)','Closing + name'],
  model:`Hoi Bram,

Wil jij morgen op de markt boodschappen voor mij doen?
Ik heb nodig: een kilo aardappelen, een andijvie, twee paprika’s en een bosje peterselie.
Ik maak morgenavond stamppot voor mijn ouders.
Ik betaal je het geld morgen terug. Bedankt!

Groetjes,
Noor`},
 {type:'text', title:'NiG 6 · E-mail: tafel reserveren', tier:1, prompt:'U wilt met uw collega’s eten in Restaurant De Gouden Lepel. Schrijf een e-mail.\nSchrijf:\n• voor hoeveel personen en wanneer\n• dat twee personen vegetarisch eten\n• vraag of u een tafel bij het raam kunt krijgen',
  checklist:['Opening: “Geachte heer/mevrouw,”','Number of people + day and time','Mention vegetarian guests','Polite question (Is het mogelijk om … ?)','Closing: “Met vriendelijke groet,” + name + phone number'],
  model:`Geachte heer/mevrouw,

Ik wil graag een tafel reserveren voor acht personen op vrijdag 21 maart om 19.00 uur.
Twee personen eten vegetarisch. Is het mogelijk om een tafel bij het raam te krijgen?

Met vriendelijke groet,
Yusuf Demir
06-98765432`},
 {type:'text', title:'NiG 7 · E-mail: kleding terugsturen', tier:1, prompt:'U heeft online een jas gekocht, maar hij past niet. Schrijf een e-mail aan de webshop.\nSchrijf:\n• wat u gekocht heeft en wanneer\n• wat het probleem is\n• wat u wilt: een andere maat of uw geld terug',
  checklist:['Opening: “Geachte heer/mevrouw,”','What and when (Op 3 oktober heb ik een jas gekocht.)','Problem with te + adjective (De jas is te klein.)','Clear wish (Ik wil graag maat L. / Ik wil graag mijn geld terug.)','Closing + name + order number'],
  model:`Geachte heer/mevrouw,

Op 3 oktober heb ik bij u een blauwe winterjas gekocht, in maat M.
De jas is helaas te klein. Ik wil hem graag ruilen voor maat L.
Kunt u mij laten weten hoe ik de jas kan terugsturen?

Met vriendelijke groet,
Olga Petrenko
Bestelnummer: 456123`},
 {type:'text', title:'NiG 8 · Reageren op een advertentie', tier:1, prompt:'U ziet een advertentie voor een appartement. Schrijf een e-mail aan de makelaar.\nSchrijf:\n• wie u bent (en met wie u wilt wonen)\n• stel een vraag over het appartement\n• vraag om een bezichtiging en zeg wanneer u kunt',
  checklist:['Opening: “Geachte heer Van Dam,”','Who you are (Ik ben … en ik zoek een woning voor mij en mijn vrouw.)','A question (Is het appartement gemeubileerd? / Is er een berging?)','Viewing request with a day you can (Ik kan maandag of woensdag na 17.00 uur.)','Closing + name + phone number'],
  model:`Geachte heer Van Dam,

Ik heb uw advertentie gezien voor het appartement in Oost. Ik zoek een woning voor mij en mijn vrouw. Wij werken allebei.
Is er ook een berging voor onze fietsen?
Ik wil het appartement graag bezichtigen. Ik kan maandag of woensdag na 17.00 uur.

Met vriendelijke groet,
Ali Hassan
06-11223344`},
 {type:'form', title:'NiG 9 · Formulier: inschrijven bij de huisarts', tier:1, prompt:'U bent verhuisd en u wilt zich inschrijven bij een nieuwe huisarts. Vul het formulier in.',
  fields:['Naam','Geboortedatum','Adres','Zorgverzekeraar','Gebruikt u medicijnen? Welke?','Bent u ergens allergisch voor? (hele zin)'],
  model:['Fatima Haddad','03-07-1988','Kerkplein 2, 3011 AB Rotterdam','Zilveren Kruis','Nee','Ik ben allergisch voor noten.'],
  checklist:['All fields filled in','Date written as dd-mm-jjjj','Name of an insurance company','Allergy answer is a full sentence (Ik ben allergisch voor … / Ik heb geen allergieën.)']},
 {type:'text', title:'NiG 10 · Bericht: te laat op het werk', tier:1, prompt:'U bent vanochtend met de fiets gevallen. U komt later op uw werk. Stuur een bericht naar uw leidinggevende.\nSchrijf:\n• wat er is gebeurd (gebruik de verleden tijd)\n• of u gewond bent\n• hoe laat u op uw werk bent',
  checklist:['Opening: “Beste …,” / “Hoi …,”','What happened in past tense (Ik ben gevallen, het regende en de weg was glad.)','Whether you are hurt (Gelukkig heb ik niets.)','New arrival time (Ik ben om tien uur op mijn werk.)','Closing + name'],
  model:`Beste Marco,

Ik ben vanochtend met de fiets gevallen. Het regende en de weg was glad.
Gelukkig heb ik niets, maar mijn fiets is kapot. Ik breng hem nu naar de fietsenmaker.
Ik ben om tien uur op mijn werk. Sorry!

Groeten,
Ewa`},
 {type:'text', title:'NiG 11 · Reageren op een uitnodiging', tier:1, prompt:'Uw buurvrouw Ingrid nodigt u uit voor haar verjaardag. Schrijf een kort antwoord.\nSchrijf:\n• bedank haar voor de uitnodiging\n• zeg of u komt (en met wie)\n• vraag of u iets kunt meenemen of helpen',
  checklist:['Opening: “Hoi Ingrid,” / “Lieve Ingrid,”','Thank you (Bedankt voor de uitnodiging!)','Yes/no + with whom (Ik kom graag, samen met mijn man.)','Offer (Zal ik iets meenemen? / Kan ik helpen?)','Closing + name + house number'],
  model:`Lieve Ingrid,

Bedankt voor de uitnodiging! Ik kom graag op zaterdag, samen met mijn man.
Zal ik een taart meenemen? Of kan ik je helpen met de hapjes?

Tot zaterdag!
Groetjes,
Amira (nr. 11)`},
 {type:'text', title:'NiG 12 · Klacht aan het hotel', tier:1, prompt:'U heeft een weekend in een hotel geslapen. Er waren problemen met de kamer. Schrijf een e-mail aan het hotel.\nSchrijf:\n• wanneer u in het hotel was en in welke kamer\n• welke twee problemen er waren\n• wat u nu van het hotel wilt',
  checklist:['Opening: “Geachte heer/mevrouw,”','Dates + room number','Two problems (De airco deed het niet. Het raam klemde.)','A clear request (Ik wil graag een deel van mijn geld terug.)','Closing: “Met vriendelijke groet,” + name'],
  model:`Geachte heer/mevrouw,

Van 9 tot 11 mei heb ik in uw hotel geslapen, in kamer 214.
Ik was niet tevreden. De airco deed het niet, dus het was heel warm in de kamer. Ook klemde het raam, en het ging niet open.
Ik heb dit doorgegeven bij de receptie, maar het is niet opgelost.
Ik wil graag een deel van mijn geld terug.

Met vriendelijke groet,
Grace Okafor`},
 {type:'text', title:'NiG 13 · Abonnement opzeggen', tier:1, prompt:'U wilt uw abonnement bij sportschool FitPlus opzeggen. Schrijf een e-mail.\nSchrijf:\n• dat u uw abonnement wilt opzeggen en vanaf wanneer\n• waarom\n• vraag om een bevestiging',
  checklist:['Opening: “Geachte heer/mevrouw,”','Clear sentence: Ik wil mijn abonnement opzeggen per 1 …','Reason (want ik verhuis / want ik heb geen tijd meer)','Ask for confirmation (Kunt u mij een bevestiging sturen?)','Closing + name + member number'],
  model:`Geachte heer/mevrouw,

Ik wil mijn maandabonnement opzeggen per 1 december.
Ik verhuis volgende maand naar een andere stad, daarom kan ik niet meer bij u sporten.
Kunt u mij een bevestiging sturen?

Met vriendelijke groet,
Pieter Jansen
Lidnummer: 78451`},
 {type:'text', title:'NiG 14 · Uw mening over een film', tier:1, prompt:'Uw docent vraagt: schrijf iets over een film of voorstelling die u gezien heeft.\nSchrijf:\n• wat u gezien heeft en met wie\n• waar het over ging (één of twee zinnen)\n• wat u ervan vond en waarom (gebruik omdat)',
  checklist:['What and with whom (Vorige week heb ik met mijn zus een film gezien.)','What it was about (Het ging over …)','Opinion (Ik vond de film spannend / saai / ontroerend.)','Reason with omdat — verb at the end (omdat het verhaal waargebeurd is)','At least 4 sentences'],
  model:`Vorige week heb ik met mijn zus een film gezien in het cultureel centrum.
De film ging over twee vrienden die samen met een boot naar Europa reizen.
Ik vond de film heel ontroerend, omdat het verhaal waargebeurd is.
Mijn zus vond hem een beetje lang, maar zij was ook onder de indruk.`},
 {type:'text', title:'NiG 15 · E-mail: advies vragen aan een collega', tier:1, prompt:'U moet volgende week een presentatie geven op uw werk. U vindt dat moeilijk. Schrijf een e-mail aan uw collega Eva.\nSchrijf:\n• waarover de presentatie gaat en wanneer\n• wat u moeilijk vindt\n• vraag om advies of hulp',
  checklist:['Opening: “Hoi Eva,” / “Beste Eva,”','Topic + day (Volgende week dinsdag geef ik een presentatie over …)','What is difficult (Ik vind het moeilijk om voor een groep te praten.)','Ask for advice (Heb jij een tip? / Wil je met mij oefenen?)','Closing + name'],
  model:`Hoi Eva,

Volgende week dinsdag geef ik een presentatie over ons nieuwe project.
Ik vind het moeilijk om voor een grote groep te praten, want mijn Nederlands is nog niet zo goed.
Heb jij een tip voor mij? Wil je misschien een keer met mij oefenen?

Alvast bedankt!
Groetjes,
Mehmet`},
 {type:'text', title:'NiG 16 · Wat heeft u gisteren gedaan?', tier:1, prompt:'Schrijf een kort stukje over uw dag van gisteren (minstens 5 zinnen).\nSchrijf:\n• hoe laat u bent opgestaan en wat u heeft ontbeten\n• wat u overdag heeft gedaan\n• wat u ’s avonds heeft gedaan',
  checklist:['Perfect tense: heb/ben + participle at the end (Ik ben om zeven uur opgestaan.)','Time words: ’s ochtends, ’s middags, ’s avonds, daarna','At least 5 sentences','After a time word the verb comes second (Daarna heb ik …)'],
  model:`Gisteren ben ik om zeven uur opgestaan. Ik heb gedoucht en ik heb brood met kaas ontbeten.
’s Ochtends heb ik thuisgewerkt. ’s Middags ben ik naar de bank gegaan.
Daarna heb ik boodschappen gedaan.
’s Avonds heb ik pasta gekookt en we hebben een aflevering van een serie gekeken.`},
 // ---- graduated practice: start easy within a chapter, build up to exam level ----
 {type:'text', title:'NiG 1 · E-mail: een les missen', ch:'NiG 1', tier:2, prompt:'U kunt volgende week dinsdag niet naar de les komen. Schrijf een e-mail aan uw docent.\nSchrijf:\n• dat u volgende week dinsdag niet kunt komen\n• waarom u niet kunt komen\n• of u het huiswerk per e-mail mag opsturen',
  checklist:['Opening: “Beste mevrouw/meneer …,”','Says which day you can’t come','Gives a reason','Asks about the homework','Closing + your name'],
  hint:'Begin met de opening, noem de dag, geef een reden met want, en sluit af.',
  model:`Beste mevrouw De Vries,

Ik kan volgende week dinsdag helaas niet naar de les komen, want ik heb een afspraak bij de dokter.
Mag ik het huiswerk per e-mail opsturen?

Met vriendelijke groet,
Karim Benali`},
 {type:'form', title:'NiG 1 · Formulier: aanmelden voor de taalcafé', ch:'NiG 1', tier:3, prompt:'U wilt zich aanmelden voor de taalcafé van de taalschool. Vul het formulier in.',
  fields:['Voornaam','Achternaam','Telefoonnummer','Welke dag wilt u komen?','Waarom wilt u meedoen? (hele zin)'],
  model:['Fatima','El Amrani','06-23456789','Vrijdag','Ik wil meedoen, want ik wil mijn Nederlands oefenen.'],
  checklist:['All fields are filled in','Phone number has the right format (06-########)','A day is filled in','The reason is a full sentence with want or omdat'],
  hint:'Vul elk veld in; de reden moet een hele zin zijn met want of omdat.'},
 {type:'text', title:'NiG 2 · Kaartje: gefeliciteerd met je verjaardag', ch:'NiG 2', tier:2, prompt:'Uw collega is morgen jarig. Schrijf een kort kaartje.\nSchrijf:\n• dat u haar/hem feliciteert\n• iets aardigs over uw collega\n• een goede wens voor het nieuwe jaar',
  checklist:['Starts with Gefeliciteerd / Van harte gefeliciteerd','Something nice about the colleague','A wish for the new year','Your name at the end'],
  hint:'Begin met Gefeliciteerd, zeg iets aardigs, wens iets, sluit af met je naam.',
  model:`Gefeliciteerd met je verjaardag!
Je bent altijd zo behulpzaam op het werk, dat waarderen we echt.
Ik wens je een heel mooi nieuw jaar!

Groetjes,
Samira`},
 {type:'form', title:'NiG 2 · Formulier: aanmelden kantine-feestje', ch:'NiG 2', tier:3, prompt:'U wilt zich aanmelden voor het kantine-feestje. Vul het formulier in.',
  fields:['Voornaam','Achternaam','Afdeling','Allergieën (indien van toepassing)','Neemt u iemand mee? Wie?'],
  model:['Tom','Jansen','Administratie','Geen','Ja, mijn collega Sanne'],
  checklist:['All fields are filled in','Department is a real word, not a question mark','Allergies field answered even if ’geen’','Clear answer about bringing someone'],
  hint:'Vul elk veld in, ook als het antwoord ’geen’ is.'},
 {type:'text', title:'NiG 3 · Bericht: een café aanraden', ch:'NiG 3', tier:2, prompt:'Een vriend vraagt u een leuk café aan te raden in uw stad. Schrijf een berichtje terug.\nSchrijf:\n• de naam van het café\n• waarom u het café leuk vindt\n• wanneer het café het beste is om te gaan',
  checklist:['Opening (Hoi / Hallo)','Name of a cafe mentioned','A reason why it’s nice','A suggestion for when to go','Closing + name'],
  hint:'Noem een café, geef een reden met want, en een tijdsadvies.',
  model:`Hoi!

Ik kan Café De Hoek echt aanraden. Het is heel gezellig en het terras is heerlijk in de zomer.
Ga vooral tijdens de Happy Hour, tussen vijf en zes uur, dan is het niet te duur.

Groetjes,
Lotte`},
 {type:'form', title:'NiG 3 · Formulier: reservering café', ch:'NiG 3', tier:3, prompt:'U wilt een tafel reserveren voor een verjaardag. Vul het reserveringsformulier in.',
  fields:['Naam','Telefoonnummer','Datum','Aantal personen','Reden van de reservering'],
  model:['Diego Alvarez','06-98765432','Vrijdag 12 december','6 personen','Verjaardagsfeestje'],
  checklist:['All fields are filled in','Date includes both day of week and date','Number of people is a number','Reason is a short, clear phrase'],
  hint:'De datum moet een dag van de week én een datum bevatten.'},
 {"type":"text","title":"NiG 4 · Bericht: de weg vragen","ch":"NiG 4","tier":2,"prompt":"U bent de weg kwijt in een nieuwe stad. Stuur een appje naar een vriend die daar woont.\nSchrijf:\n• waar u nu staat\n• waar u naartoe wilt\n• vraag hoe u er het beste kunt komen","checklist":["Opening (Hoi …)","Says current location","Says destination","Clear question (Hoe kom ik het beste bij … ?)"],"hint":"Begin met waar je staat, zeg waar je heen wilt, en stel een duidelijke vraag.","model":"Hoi Sanne,\n\nIk sta nu bij het station, maar ik weet niet hoe ik bij jouw huis kom.\nHoe kom ik het beste bij de Molenstraat? Moet ik de bus nemen of is het lopen?\n\nGroetjes,\nAmira"},
 {"type":"form","title":"NiG 4 · Formulier: melding kapotte stoep","ch":"NiG 4","tier":3,"prompt":"U wilt een kapotte stoep bij uw huis melden bij de gemeente. Vul het formulier in.","fields":["Naam","Adres","Straat met het probleem","Wat is het probleem? (hele zin)","Is het gevaarlijk?"],"model":["Tom de Boer","Kerkstraat 5","Molenstraat","Er zitten grote gaten in de stoep.","Ja, mensen kunnen struikelen"],"checklist":["All fields are filled in","Problem description is a full sentence","Danger question answered clearly"],"hint":"De probleembeschrijving moet een hele zin zijn."},
 {"type":"text","title":"NiG 5 · Bericht: samen naar de markt","ch":"NiG 5","tier":2,"prompt":"U wilt zaterdag samen met een vriend naar de markt. Stuur een berichtje.\nSchrijf:\n• wat u wilt kopen\n• hoe laat en waar u wilt afspreken\n• vraag of hij/zij ook iets nodig heeft","checklist":["Opening (Hoi …)","What you want to buy","Time and place to meet","Question about what they need"],"hint":"Noem wat je koopt, een tijd en plaats, en stel een vraag aan het eind.","model":"Hoi Daan,\n\nGa je zaterdag mee naar de markt? Ik moet groente en kaas kopen.\nZullen we om tien uur bij de ingang afspreken?\nHeb jij ook nog iets nodig?\n\nGroetjes,\nMila"},
 {"type":"form","title":"NiG 5 · Formulier: vaste klant kaaskraam","ch":"NiG 5","tier":3,"prompt":"U wilt zich aanmelden als vaste klant bij de kaaskraam, voor korting bij elke bestelling. Vul het formulier in.","fields":["Naam","E-mailadres","Favoriete kaassoort","Hoe vaak komt u naar de markt?","Waarom wilt u vaste klant worden? (hele zin)"],"model":["Lotte Hendriks","lotte.h@mail.nl","Oude kaas","Elke week","Ik wil vaste klant worden, want ik koop hier al jaren kaas."],"checklist":["All fields are filled in","Email has @ and a domain","The reason is a full sentence with want"],"hint":"De reden moet een hele zin zijn met \"want\"."},
 {"type":"text","title":"NiG 6 · Bericht: reservering afzeggen","ch":"NiG 6","tier":2,"prompt":"U heeft een tafel gereserveerd, maar u kunt toch niet komen. Schrijf een berichtje naar het restaurant.\nSchrijf:\n• dat u de reservering wilt afzeggen\n• voor welke dag en tijd die was\n• excuseer u voor het late bericht","checklist":["Opening (Beste …,)","Clear cancellation (Ik wil mijn reservering afzeggen.)","Day and time mentioned","Apology for the late notice"],"hint":"Zeg duidelijk dat je afzegt, en noem de dag en tijd.","model":"Beste mevrouw,\n\nIk wil graag mijn reservering voor vrijdag 19.00 uur afzeggen. Het spijt me dat dit zo laat is, er kwam iets tussendoor.\n\nMet vriendelijke groet,\nYusuf Demir"},
 {"type":"form","title":"NiG 6 · Formulier: feedback restaurantbezoek","ch":"NiG 6","tier":3,"prompt":"Het restaurant vraagt u om feedback na uw bezoek. Vul het formulier in.","fields":["Datum van bezoek","Hoe was het eten? (cijfer 1-10)","Hoe was de bediening? (cijfer 1-10)","Wat kan beter? (hele zin)"],"model":["12 maart","8","6","De bediening kan sneller, want wij moesten lang wachten op het hoofdgerecht."],"checklist":["All fields are filled in","Both scores are numbers between 1 and 10","The improvement point is a full sentence with want"],"hint":"Het verbeterpunt moet een hele zin zijn met \"want\"."},
 {"type":"text","title":"NiG 7 · Bericht: samen shoppen","ch":"NiG 7","tier":2,"prompt":"U wilt met een vriend(in) gaan shoppen voor nieuwe kleding. Stuur een berichtje.\nSchrijf:\n• wat voor kleding u zoekt\n• welke winkel of welk centrum u wilt bezoeken\n• wanneer u wilt gaan","checklist":["Opening (Hoi …)","What clothes you are looking for","A shop or shopping area mentioned","A day/time proposed"],"hint":"Noem het kledingstuk, de winkel en een dag.","model":"Hoi Fenna,\n\nIk zoek een nieuwe winterjas, de mijne is kapot.\nZullen we zaterdag naar ModeMax in het centrum gaan?\nHeb jij ook tijd dan?\n\nGroetjes,\nNoor"},
 {"type":"form","title":"NiG 7 · Formulier: kleding ruilen","ch":"NiG 7","tier":3,"prompt":"U wilt een broek ruilen voor een andere maat. Vul het ruilformulier in.","fields":["Naam","Ordernummer","Artikel","Huidige maat","Gewenste maat","Reden (hele zin)"],"model":["Olga Petrenko","45678","Spijkerbroek","32","34","De broek is te klein, want hij knelt bij de taille."],"checklist":["All fields are filled in","Sizes are clearly different numbers","The reason is a full sentence with want"],"hint":"De reden moet een hele zin zijn met \"want\"."},
 {"type":"text","title":"NiG 8 · Bericht: bezichtiging verzetten","ch":"NiG 8","tier":2,"prompt":"U heeft een bezichtiging gepland, maar u kunt niet op die tijd. Stuur een bericht naar de makelaar.\nSchrijf:\n• dat u niet kunt op de geplande tijd\n• waarom niet\n• stel een nieuwe dag/tijd voor","checklist":["Opening (Geachte heer/mevrouw,)","Says you cannot make it","Gives a reason with want","Proposes a new day/time"],"hint":"Zeg dat je niet kunt, geef een reden met \"want\", en stel iets nieuws voor.","model":"Geachte heer Van Dam,\n\nHelaas kan ik donderdag om 17.00 uur niet bij de bezichtiging zijn, want ik moet onverwacht werken.\nZou vrijdag om 16.00 uur ook mogelijk zijn?\n\nMet vriendelijke groet,\nAli Hassan"},
 {"type":"form","title":"NiG 8 · Formulier: interesse in woning","ch":"NiG 8","tier":3,"prompt":"U bent geïnteresseerd in een appartement dat u online heeft gezien. Vul het contactformulier in.","fields":["Naam","Telefoonnummer","Met hoeveel personen gaat u wonen?","Vanaf wanneer zoekt u een woning?","Waarom past deze woning bij u? (hele zin)"],"model":["Ewa Kowalski","06-22334455","2 personen","Zo snel mogelijk","Deze woning past bij ons, want hij is dichtbij mijn werk en heeft genoeg ruimte."],"checklist":["All fields are filled in","Number of people is a number","The reason is a full sentence with want"],"hint":"De reden moet een hele zin zijn met \"want\"."},
 {"type":"text","title":"NiG 9 · Bericht: afspraak afzeggen","ch":"NiG 9","tier":2,"prompt":"U heeft een afspraak bij de huisarts, maar u bent al beter. Bel of appt de praktijk om af te zeggen.\nSchrijf:\n• dat u de afspraak wilt afzeggen\n• voor welke dag/tijd\n• waarom (u bent beter of u heeft het niet meer nodig)","checklist":["Opening (Goedemorgen / Beste …,)","Clear cancellation","Day/time mentioned","Reason given with want"],"hint":"Zeg duidelijk dat je afzegt, met een reden met \"want\".","model":"Goedemorgen,\n\nIk wil mijn afspraak van morgen om 10.20 uur graag afzeggen, want ik voel me alweer veel beter.\nBedankt!\n\nMet vriendelijke groet,\nFatima Haddad"},
 {"type":"form","title":"NiG 9 · Formulier: herhaalrecept aanvragen","ch":"NiG 9","tier":3,"prompt":"U heeft een nieuw recept nodig voor medicijnen die u al langer gebruikt. Vul het formulier in.","fields":["Naam","Geboortedatum","Naam van het medicijn","Hoeveel heeft u nog?","Apotheek"],"model":["Karim Benali","14-02-1985","Bloeddrukmedicijn","Nog voor 3 dagen","Apotheek Centrum"],"checklist":["All fields are filled in","Date written as dd-mm-jjjj","Remaining supply is a clear amount of time"],"hint":"Geef duidelijk aan hoeveel dagen voorraad je nog hebt."},
 {"type":"text","title":"NiG 10 · Bericht: fiets later ophalen","ch":"NiG 10","tier":2,"prompt":"Uw fiets is klaar bij de fietsenmaker, maar u kunt hem pas later ophalen. Stuur een bericht.\nSchrijf:\n• dat u de fiets niet vandaag kunt ophalen\n• wanneer u hem wel kunt ophalen\n• vraag of dat een probleem is","checklist":["Opening (Beste …,)","Says you cannot pick it up today","New day/time mentioned","Polite question (Is dat een probleem?)"],"hint":"Zeg dat je later komt, noem een nieuwe dag, en vraag of dat goed is.","model":"Beste meneer,\n\nIk kan mijn fiets vandaag helaas niet ophalen. Kan ik hem morgenmiddag na drie uur ophalen?\nIs dat een probleem?\n\nMet vriendelijke groet,\nPieter Jansen"},
 {"type":"form","title":"NiG 10 · Formulier: aangifte fietsdiefstal","ch":"NiG 10","tier":3,"prompt":"Uw fiets is gestolen. Vul het online aangifteformulier in.","fields":["Naam","Adres","Merk en kleur van de fiets","Framenummer","Waar en wanneer gestolen? (hele zin)"],"model":["Daniil Volkov","Stationsplein 4","Gazelle, zwart","NL123456789","De fiets is gisteravond gestolen bij het station."],"checklist":["All fields are filled in","Frame number looks like a real code","The theft description is a full sentence"],"hint":"De beschrijving van de diefstal moet een hele zin zijn."},
 {"type":"text","title":"NiG 11 · Bericht: cadeau bespreken","ch":"NiG 11","tier":2,"prompt":"U wilt met een vriend samen een cadeau kopen voor een gemeenschappelijke vriend(in). Stuur een berichtje.\nSchrijf:\n• voor wie het cadeau is en waarom\n• een idee voor het cadeau\n• vraag of uw vriend mee wil doen","checklist":["Opening (Hoi …)","Who the gift is for and why","An idea for the gift","Question if they want to join in"],"hint":"Noem voor wie het is, een cadeau-idee, en vraag of ze meedoen.","model":"Hoi Bram,\n\nVolgende week is Lars jarig. Zullen we samen een cadeau kopen?\nIk dacht aan een kookboek, hij houdt erg van koken.\nDoe je mee?\n\nGroetjes,\nNoor"},
 {"type":"form","title":"NiG 11 · Formulier: aanmelden feestje","ch":"NiG 11","tier":3,"prompt":"U bent uitgenodigd voor een verjaardagsfeest en moet zich aanmelden. Vul het formulier in.","fields":["Naam","Komt u alleen of met partner?","Heeft u allergieën? (hele zin)","Breng u iets mee?"],"model":["Amira Yildiz","Met partner","Ik ben niet allergisch voor iets.","Ja, een fles wijn"],"checklist":["All fields are filled in","Allergy answer is a full sentence","Clear answer about bringing something"],"hint":"Het antwoord over allergieën moet een hele zin zijn."},
 {"type":"text","title":"NiG 12 · Bericht: late aankomst melden","ch":"NiG 12","tier":2,"prompt":"U komt later aan bij het hotel dan gepland. Stuur een bericht.\nSchrijf:\n• dat u later aankomt\n• hoe laat u nu verwacht aan te komen\n• vraag of dat een probleem is","checklist":["Opening (Beste …,)","Says you will arrive later","New expected time mentioned","Polite question"],"hint":"Noem de nieuwe aankomsttijd en vraag of dat oké is.","model":"Beste receptie,\n\nIk kom helaas later aan dan gepland, pas rond 23.00 uur.\nIs dat een probleem voor het inchecken?\n\nMet vriendelijke groet,\nGrace Okafor"},
 {"type":"form","title":"NiG 12 · Formulier: speciale wensen reservering","ch":"NiG 12","tier":3,"prompt":"U reserveert een hotelkamer en heeft speciale wensen. Vul het formulier in.","fields":["Naam","Aankomstdatum","Vertrekdatum","Aantal personen","Speciale wensen (hele zin)"],"model":["Robert Wilson","9 mei","11 mei","2 personen","Wij willen graag een kamer op een hoge verdieping, want ik hou van uitzicht."],"checklist":["All fields are filled in","Dates are in a logical order","The special request is a full sentence with want"],"hint":"De speciale wens moet een hele zin zijn met \"want\"."},
 {"type":"text","title":"NiG 13 · Bericht: samen naar de les","ch":"NiG 13","tier":2,"prompt":"U wilt met een collega naar een groepsles bij de sportschool. Stuur een berichtje.\nSchrijf:\n• welke les u wilt proberen\n• wanneer die is\n• vraag of uw collega mee wil doen","checklist":["Opening (Hoi …)","Which class","Day/time of the class","Question if they want to join"],"hint":"Noem de les, de tijd, en vraag of je collega meedoet.","model":"Hoi Eva,\n\nIk wil de nieuwe bootcamples proberen, zaterdagochtend om zeven uur.\nHeb je zin om mee te doen?\n\nGroetjes,\nMehmet"},
 {"type":"form","title":"NiG 13 · Formulier: intakegesprek sportschool","ch":"NiG 13","tier":3,"prompt":"U meldt zich aan voor een gratis intakegesprek bij de sportschool. Vul het formulier in.","fields":["Naam","Leeftijd","Sportervaring (veel / weinig / geen)","Doel (hele zin)","Eventuele blessures"],"model":["Sofia Rossi","29","Weinig","Mijn doel is om fitter te worden en meer energie te krijgen.","Lichte rugklachten"],"checklist":["All fields are filled in","Age is a number","The goal is a full sentence"],"hint":"Het doel moet een hele zin zijn."},
 {"type":"text","title":"NiG 14 · Bericht: samen naar een voorstelling","ch":"NiG 14","tier":2,"prompt":"U wilt met een vriend naar een voorstelling in het cultureel centrum. Stuur een berichtje.\nSchrijf:\n• welke voorstelling en wanneer\n• wat het kost\n• vraag of uw vriend mee wil","checklist":["Opening (Hoi …)","Which show and when","Price mentioned","Question if they want to join"],"hint":"Noem de voorstelling, de tijd, de prijs, en vraag of ze meegaan.","model":"Hoi Karin,\n\nZaterdag is er een concert in het cultureel centrum, om acht uur. Het kost maar vijf euro.\nHeb je zin om mee te gaan?\n\nGroetjes,\nSven"},
 {"type":"form","title":"NiG 14 · Formulier: aanmelden vrijwilligerswerk","ch":"NiG 14","tier":3,"prompt":"U wilt vrijwilligerswerk doen bij het cultureel centrum. Vul het aanmeldformulier in.","fields":["Naam","Telefoonnummer","Hoeveel uur per week beschikbaar?","Wat voor werk wilt u doen?","Waarom wilt u vrijwilligerswerk doen? (hele zin)"],"model":["Hassan El Amrani","06-33445566","3 uur","Mensen verwelkomen bij de ingang","Ik wil vrijwilligerswerk doen, want ik wil meer mensen leren kennen."],"checklist":["All fields are filled in","Hours is a number","The reason is a full sentence with want"],"hint":"De reden moet een hele zin zijn met \"want\"."},
 {"type":"text","title":"NiG 15 · Bericht: hulp vragen aan collega","ch":"NiG 15","tier":2,"prompt":"U heeft moeite met een taak op het werk. Stuur een berichtje naar een collega.\nSchrijf:\n• met welke taak u moeite heeft\n• waarom het lastig is\n• vraag om hulp of advies","checklist":["Opening (Hoi …)","Which task is difficult","Why it is difficult","Clear request for help"],"hint":"Noem de taak, leg uit waarom het lastig is, en vraag om hulp.","model":"Hoi Jasper,\n\nIk heb moeite met het nieuwe rapportagesysteem, ik snap de formules niet goed.\nHeb je tijd om het me een keer uit te leggen?\n\nAlvast bedankt!\nGroetjes,\nOlga"},
 {"type":"form","title":"NiG 15 · Formulier: verlof aanvragen","ch":"NiG 15","tier":3,"prompt":"U wilt een paar dagen vrij nemen van uw werk. Vul het verlofformulier in.","fields":["Naam","Afdeling","Eerste verlofdag","Laatste verlofdag","Reden (hele zin, optioneel)"],"model":["Marco Ferrari","Administratie","14 juli","18 juli","Ik ga op vakantie met mijn familie."],"checklist":["All fields are filled in","Dates are in a logical order","The reason, if filled in, is a full sentence"],"hint":"Als je een reden geeft, moet het een hele zin zijn."},
 {"type":"text","title":"NiG 16 · Bericht: taken verdelen","ch":"NiG 16","tier":2,"prompt":"U woont samen met een huisgenoot en wilt de huishoudelijke taken verdelen. Stuur een berichtje.\nSchrijf:\n• een voorstel voor taakverdeling\n• waarom dit voorstel goed is\n• vraag of uw huisgenoot het ermee eens is","checklist":["Opening (Hoi …)","A clear proposal for dividing tasks","A reason for the proposal","Question asking for agreement"],"hint":"Doe een concreet voorstel en vraag of je huisgenoot het ermee eens is.","model":"Hoi Tom,\n\nZullen we de taken zo verdelen: ik kook, jij doet de afwas, en de was doen we om de beurt?\nIk denk dat dit eerlijk is, want we hebben allebei evenveel tijd.\nBen je het hiermee eens?\n\nGroetjes,\nMila"},
 {"type":"form","title":"NiG 16 · Formulier: melding onderhoud","ch":"NiG 16","tier":3,"prompt":"Er is iets kapot in uw huurwoning. Vul het onderhoudsformulier in voor de woningcorporatie.","fields":["Naam","Adres","Wat is er kapot?","Sinds wanneer?","Is het spoedeisend? (hele zin)"],"model":["Noor Jansen","Dorpsstraat 22","De verwarming doet het niet","Sinds gisteren","Ja, het is spoedeisend, want het is erg koud in huis."],"checklist":["All fields are filled in","Description is clear","The urgency answer is a full sentence"],"hint":"De urgentievraag moet een hele zin zijn."},
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
 {ch:'NiG 1', tier:1, sit:'Het is de eerste les. De docent zegt: “Wil je jezelf even voorstellen?”', q:'Vertel uw naam, uit welk land u komt en waar u woont.', model:'Hallo, ik heet Karim Benali. Ik kom uit Marokko en ik woon nu in Amersfoort.', time:30},
 {ch:'NiG 1', tier:2, sit:'U belt de gemeente. De medewerker vraagt: “Kunt u uw achternaam spellen?”', q:'Spel uw achternaam en zeg uw postcode.', model:'Ja, B-E-N-A-L-I. Mijn postcode is 3811 KD.', time:30},
 {ch:'NiG 2', tier:1, sit:'Een collega in de kantine vraagt: “Heb je een grote familie?”', q:'Vertel over uw familie.', model:'Ja, ik heb twee broers en een zus. Mijn ouders wonen nog in Turkije. Mijn zus woont ook in Nederland.', time:45},
 {ch:'NiG 2', tier:2, sit:'Iemand vraagt u: “Hoe laat is het?” Het is 14.45 uur.', q:'Wat zegt u?', model:'Het is kwart voor drie.', time:15},
 {ch:'NiG 3', tier:1, sit:'U zit met een vriend in een café. De medewerker vraagt wat u wilt drinken.', q:'Bestel iets voor uzelf en voor uw vriend.', model:'Ik wil graag een cappuccino, en mijn vriend wil een verse muntthee.', time:20},
 {ch:'NiG 3', tier:2, sit:'U wilt in het café betalen.', q:'Wat zegt u tegen de medewerker?', model:'Mogen wij afrekenen, alstublieft? Kan ik pinnen?', time:20},
 {ch:'NiG 4', tier:1, sit:'U ziet een vriend op straat. Hij vraagt: “Hé, hoe gaat het met je?”', q:'Vertel hoe het gaat en vraag hoe het met hem gaat.', model:'Het gaat goed, dank je. Ik heb het wel druk met mijn werk. En met jou?', time:20},
 {ch:'NiG 4', tier:2, sit:'U wilt dit weekend iets leuks doen met een vriendin.', q:'Doe een voorstel. Gebruik “zullen”.', model:'Zullen we zaterdagmiddag samen naar de markt gaan? Daarna kunnen we koffie drinken.', time:30},
 {ch:'NiG 5', tier:1, sit:'U staat bij de groenteboer op de markt.', q:'Vraag wat de tomaten kosten en koop een kilo.', model:'Goedemorgen, wat kosten de tomaten? … Dan wil ik graag een kilo tomaten.', time:20},
 {ch:'NiG 5', tier:2, sit:'Een vriendin vraagt: “Wat koop jij meestal op de markt?”', q:'Vertel wat u koopt en waarom op de markt.', model:'Ik koop meestal groente en fruit op de markt, want het is vers en goedkoper dan in de supermarkt.', time:30},
 {ch:'NiG 6', tier:1, sit:'U zit in een restaurant. De serveerster vraagt: “Smaakt het?”', q:'Zeg wat u van het eten vindt.', model:'Het vlees is heerlijk, maar de soep is een beetje te zout.', time:20},
 {ch:'NiG 6', tier:2, sit:'U wilt in een restaurant een hoofdgerecht bestellen. U eet geen vlees.', q:'Wat zegt u tegen de ober?', model:'Ik eet geen vlees. Heeft u ook een vegetarisch hoofdgerecht?', time:20},
 {ch:'NiG 7', tier:1, sit:'U past een jas in een winkel. Hij is te klein.', q:'Wat zegt u tegen de verkoper?', model:'Deze jas zit niet goed, hij is te klein. Heeft u hem ook in een grotere maat?', time:20},
 {ch:'NiG 7', tier:2, sit:'Een vriendin vraagt: “Welke trui vind je mooier, de rode of de blauwe?”', q:'Geef uw mening en vergelijk.', model:'Ik vind de blauwe mooier dan de rode. Blauw staat jou beter.', time:30},
 {ch:'NiG 8', tier:1, sit:'Een collega vraagt: “Hoe woon je?”', q:'Beschrijf uw huis.', model:'Ik woon in een appartement op de tweede verdieping. Ik heb een woonkamer, een keuken, twee slaapkamers en een klein balkon.', time:45},
 {ch:'NiG 8', tier:2, sit:'U bent bij een bezichtiging. U wilt weten wat de woning kost.', q:'Stel twee vragen aan de makelaar.', model:'Wat is de huur per maand? Zijn gas, water en licht inbegrepen?', time:30},
 {ch:'NiG 9', tier:1, sit:'U bent bij de huisarts. U heeft sinds twee dagen buikpijn.', q:'Vertel wat uw klacht is en wat u al gedaan heeft.', model:'Ik heb sinds twee dagen buikpijn. Ik heb al paracetamol genomen, maar het heeft niet geholpen.', time:30},
 {ch:'NiG 9', tier:2, sit:'Uw collega vraagt: “Wat heb je in het weekend gedaan?”', q:'Vertel het. Gebruik de voltooide tijd.', model:'Zaterdag heb ik gevoetbald en daarna heb ik met vrienden gegeten. Zondag ben ik thuis gebleven.', time:45},
 {ch:'NiG 10', tier:1, sit:'U begrijpt niet goed wat de fietsenmaker zegt.', q:'Vraag om verduidelijking.', model:'Sorry, dat heb ik niet goed verstaan. Wat bedoelt u? Kunt u het nog een keer zeggen?', time:20},
 {ch:'NiG 10', tier:2, sit:'Uw buurman vraagt: “Wat is er met je fiets gebeurd?”', q:'Vertel wat er gebeurd is.', model:'Ik ben gisteren gevallen. Het regende en de weg was glad. Nu zit er een slag in mijn wiel.', time:30},
 {ch:'NiG 11', tier:1, sit:'Op een verjaardag vraagt iemand: “Wat doe jij voor werk?”', q:'Vertel over uw werk of studie en uw hobby.', model:'Ik werk als kok in een restaurant. In mijn vrije tijd wandel ik graag en ik speel voetbal.', time:45},
 {ch:'NiG 11', tier:2, sit:'Uw vriendin vertelt: “Ik heb een nieuwe baan!”', q:'Reageer op haar nieuws.', model:'Wat leuk! Gefeliciteerd! Wat voor werk ga je doen?', time:15},
 {ch:'NiG 12', tier:1, sit:'U staat bij de receptie van een hotel. U zoekt het station.', q:'Vraag de weg.', model:'Pardon, kunt u mij vertellen hoe ik bij het station kom? Is het ver lopen?', time:20},
 {ch:'NiG 12', tier:2, sit:'In uw hotelkamer doet de waterkoker het niet.', q:'Bel de receptie en vertel het probleem.', model:'Goedenavond, ik bel vanuit kamer 108. De waterkoker doet het niet. Kunt u iemand sturen?', time:30},
 {ch:'NiG 13', tier:1, sit:'Een vriend vraagt: “Hoeveel beweeg jij per week?”', q:'Vertel wat u doet aan sport en hoe vaak.', model:'Ik ga twee keer per week naar de sportschool. Ook fiets ik elke dag naar mijn werk.', time:30},
 {ch:'NiG 13', tier:2, sit:'Uw vriend vraagt: “Wat ga je volgend jaar doen?”', q:'Vertel over uw plannen. Gebruik “gaan” of “zullen”.', model:'Volgend jaar ga ik een opleiding doen. Ik zal ook meer gaan sporten.', time:45},
 {ch:'NiG 14', tier:1, sit:'Een vriend vraagt: “Wat vond je van de film?”', q:'Geef uw mening en een reden.', model:'Ik vond de film heel spannend, omdat je tot het einde niet weet wat er gebeurt.', time:30},
 {ch:'NiG 14', tier:2, sit:'U wilt weten wat uw collega van het concert vond.', q:'Vraag naar haar mening.', model:'Hoe vond jij het concert gisteren? Vond je het koor goed?', time:20},
 {ch:'NiG 15', tier:1, sit:'Het is maandagochtend. U ziet een collega bij het koffieapparaat.', q:'Maak een praatje.', model:'Goedemorgen! Heb je een leuk weekend gehad? Wat een koud weer vandaag, hè?', time:30},
 {ch:'NiG 15', tier:2, sit:'Uw collega zegt: “Ik ben zo moe, ik slaap slecht.”', q:'Geef haar een advies.', model:'Misschien moet je ’s avonds niet meer naar je telefoon kijken. Ga een stukje wandelen voor het slapen.', time:30},
 {ch:'NiG 16', tier:1, sit:'Een klasgenoot vraagt: “Hoe ziet jouw ochtend eruit?”', q:'Vertel wat u ’s ochtends doet.', model:'Ik sta om half zeven op. Dan douche ik en ontbijt ik. Om acht uur fiets ik naar mijn werk.', time:45},
 {ch:'NiG 16', tier:2, sit:'Uw vriend belt en vraagt: “Wat is er in jouw nieuwe kamer?”', q:'Beschrijf uw kamer. Gebruik “er is / er staat”.', model:'In mijn kamer staat een bed en er is een grote kast. Bij het raam staat een bureau.', time:30},
 // ---- graduated practice: start easy within a chapter, build up to exam level ----
 {ch:'NiG 1', tier:3, sit:'U bent te laat voor de les. U komt binnen.', q:'Wat zegt u tegen de docent?', model:'Sorry dat ik te laat ben, mijn trein had vertraging.', time:20, hint:"Gebruik het woord 'sorry' en geef een reden."},
 {ch:'NiG 1', tier:4, sit:'Een klasgenoot vraagt waarom u Nederlands leert en wat u moeilijk vindt.', q:'Beantwoord beide vragen in een paar zinnen.', model:"Ik leer Nederlands omdat ik hier werk en met mijn buren wil praten. Ik vind de werkwoorden nog moeilijk, vooral 'hebben' en 'zijn'.", time:30, hint:'Geef twee aparte antwoorden: waarom, en wat moeilijk is.'},
 {ch:'NiG 2', tier:3, sit:'Een collega vraagt: “Ga je mee lunchen in de kantine?”', q:'Antwoord en zeg hoe laat jij pauze hebt.', model:'Ja, leuk! Ik heb om half een pauze.', time:20, hint:'Zeg eerst ja of nee, en noem daarna een tijd.'},
 {ch:'NiG 2', tier:4, sit:'Uw collega is morgen jarig. U ziet haar in de kantine.', q:'Feliciteer haar en vraag of ze iets leuks gaat doen voor haar verjaardag.', model:'Gefeliciteerd alvast met je verjaardag! Ga je nog iets leuks doen?', time:20, hint:'Begin met feliciteren, stel dan een vraag.'},
 {ch:'NiG 3', tier:3, sit:'U zit in het café. Het is erg druk en de bediening duurt lang.', q:'Wat zegt u beleefd tegen de medewerker?', model:'Sorry, mogen we misschien zo bestellen? We wachten al een tijdje.', time:20, hint:"Begin beleefd met 'sorry' of 'mag ik'."},
 {ch:'NiG 3', tier:4, sit:'Een vriend vraagt u welk café u aanraadt in uw stad en waarom.', q:'Beantwoord de vraag met een café en een reden.', model:'Ik raad Café De Hoek aan, want de sfeer is heel gezellig en het terras is mooi in de zomer.', time:25, hint:"Noem een café en geef een reden met 'want'."},
 {"ch":"NiG 4","tier":3,"sit":"U ziet dat iemand op straat zijn tas laat vallen zonder het te merken.","q":"Wat zegt u tegen die persoon?","model":"Pardon, u bent uw tas verloren! Hier, alstublieft.","time":15,"hint":"Spreek de persoon beleefd aan met \"pardon\"."},
 {"ch":"NiG 4","tier":4,"sit":"Een toerist vraagt u op straat de weg naar het station, maar u weet het niet zeker.","q":"Reageer eerlijk en help waar mogelijk.","model":"Sorry, ik weet het niet precies, maar ik denk dat het die kant op is. Vraagt u het misschien bij de winkel daar?","time":25,"hint":"Zeg eerlijk dat je het niet zeker weet, en geef toch een tip."},
 {"ch":"NiG 5","tier":3,"sit":"U bent op de markt. De verkoper geeft u teveel wisselgeld terug.","q":"Wat zegt u?","model":"Sorry, ik denk dat u mij teveel wisselgeld heeft gegeven. Hier, dit is te veel.","time":20,"hint":"Begin met \"sorry\" en leg uit wat er mis is."},
 {"ch":"NiG 5","tier":4,"sit":"Een vriend vraagt waarom u liever op de markt koopt dan in de supermarkt.","q":"Leg uw keuze uit met minstens twee redenen.","model":"Ik koop liever op de markt, want het is verser en vaak ook goedkoper. Bovendien vind ik het gezelliger dan de supermarkt.","time":30,"hint":"Gebruik \"want\" en noem minstens twee redenen."},
 {"ch":"NiG 6","tier":3,"sit":"U wilt in een restaurant een tafel reserveren voor vier personen, morgenavond.","q":"Bel het restaurant en reserveer.","model":"Goedemiddag, ik wil graag een tafel reserveren voor vier personen, morgenavond om acht uur.","time":20,"hint":"Noem het aantal personen, de dag en de tijd."},
 {"ch":"NiG 6","tier":4,"sit":"U denkt dat er een fout staat op de rekening in een restaurant.","q":"Zeg dit beleefd tegen de ober.","model":"Pardon, ik denk dat er een fout staat op de rekening. Kunt u dit nakijken?","time":20,"hint":"Begin beleefd met \"pardon\" en leg het probleem rustig uit."},
 {"ch":"NiG 7","tier":3,"sit":"U zoekt een trui in een winkel, maar kunt uw maat niet vinden.","q":"Vraag een verkoper om hulp.","model":"Pardon, ik zoek deze trui in maat M, maar ik kan hem niet vinden. Heeft u hem nog op voorraad?","time":20,"hint":"Begin met \"pardon\" en noem precies wat je zoekt."},
 {"ch":"NiG 7","tier":4,"sit":"U wilt kleding terugbrengen die u niet mooi vindt, maar er zit geen fout aan de kleding.","q":"Leg dit uit aan de verkoper en vraag wat de mogelijkheden zijn.","model":"Ik heb deze trui vorige week gekocht, maar ik vind hem toch niet mooi staan. Kan ik hem ruilen of mijn geld terugkrijgen?","time":25,"hint":"Leg duidelijk uit waarom je terugbrengt, ook al is er niets kapot."},
 {"ch":"NiG 8","tier":3,"sit":"U bent bij een bezichtiging en wilt weten of er bergruimte is.","q":"Stel de vraag aan de makelaar.","model":"Is er ook bergruimte in deze woning, bijvoorbeeld voor fietsen of dozen?","time":15,"hint":"Stel een duidelijke vraag over bergruimte."},
 {"ch":"NiG 8","tier":4,"sit":"Een vriend vraagt waarom u op zoek bent naar een nieuwe woning.","q":"Leg uit waarom, met minstens twee redenen.","model":"Ik zoek een nieuwe woning, want mijn huidige appartement is te klein en ik wil dichter bij mijn werk wonen.","time":30,"hint":"Gebruik \"want\" en geef minstens twee redenen."},
 {"ch":"NiG 9","tier":3,"sit":"U belt de huisartsenpraktijk om een afspraak te maken. U heeft al drie dagen hoofdpijn.","q":"Leg uw klacht uit en vraag om een afspraak.","model":"Goedemorgen, ik heb al drie dagen hoofdpijn en zou graag een afspraak willen maken.","time":20,"hint":"Noem hoelang je al klachten hebt en vraag om een afspraak."},
 {"ch":"NiG 9","tier":4,"sit":"De huisarts legt iets medisch uit, maar u begrijpt een woord niet.","q":"Vraag beleefd om uitleg.","model":"Sorry, wat betekent dat woord precies? Kunt u het in simpelere taal uitleggen?","time":15,"hint":"Vraag beleefd om het in eenvoudige taal uit te leggen."},
 {"ch":"NiG 10","tier":3,"sit":"Uw fiets maakt een raar geluid. U brengt hem naar de fietsenmaker.","q":"Leg het probleem uit.","model":"Mijn fiets maakt een raar piepend geluid als ik rem. Kunt u ernaar kijken?","time":20,"hint":"Beschrijf het geluid en wanneer het gebeurt."},
 {"ch":"NiG 10","tier":4,"sit":"Uw fiets is vannacht gestolen voor uw huis.","q":"Bel de politie en leg uit wat er is gebeurd.","model":"Goedemorgen, mijn fiets is vannacht gestolen voor mijn huis. Ik wil graag aangifte doen.","time":25,"hint":"Noem wat er gebeurd is en vraag om aangifte te doen."},
 {"ch":"NiG 11","tier":3,"sit":"U komt op een verjaardagsfeest en kent bijna niemand.","q":"Stel uzelf voor aan iemand.","model":"Hoi, ik ben Mehmet. Ik ken de jarige via mijn werk. En jij, hoe ken jij haar?","time":20,"hint":"Zeg je naam en hoe je de jarige kent."},
 {"ch":"NiG 11","tier":4,"sit":"Op een feest vraagt iemand u hoe u de Nederlandse cultuur ervaart.","q":"Geef uw mening met een voorbeeld.","model":"Ik vind de Nederlandse cultuur best direct, maar dat went. Bijvoorbeeld, mensen zeggen gewoon hun mening, ook als die anders is dan de jouwe.","time":30,"hint":"Geef je mening en noem een concreet voorbeeld."},
 {"ch":"NiG 12","tier":3,"sit":"U checkt in bij een hotel en wilt weten of er een parkeerplaats is.","q":"Stel de vraag aan de receptioniste.","model":"Is er ook een parkeerplaats bij het hotel? En kost dat extra?","time":15,"hint":"Stel een duidelijke vraag over parkeren en kosten."},
 {"ch":"NiG 12","tier":4,"sit":"U bent niet tevreden over uw hotelkamer: hij is niet schoon.","q":"Meld dit bij de receptie en vraag om een oplossing.","model":"Goedemiddag, mijn kamer is helaas niet schoon, er liggen nog handdoeken van de vorige gast. Kan dit opgelost worden?","time":25,"hint":"Beschrijf het probleem concreet en vraag om een oplossing."},
 {"ch":"NiG 13","tier":3,"sit":"U wilt weten of er een gratis proefles is bij de sportschool.","q":"Stel de vraag aan de balie.","model":"Goedemiddag, bieden jullie een gratis proefles aan? Ik wil graag een keer kennismaken.","time":15,"hint":"Vraag duidelijk naar een proefles."},
 {"ch":"NiG 13","tier":4,"sit":"U heeft pijn na een training en vraagt advies aan de trainer.","q":"Leg uit wat er pijn doet en vraag om advies.","model":"Ik heb sinds gisteren pijn in mijn onderrug na de les. Is dat normaal, of moet ik ermee stoppen?","time":20,"hint":"Beschrijf de klacht en vraag concreet om advies."},
 {"ch":"NiG 14","tier":3,"sit":"U wilt kaartjes kopen voor een voorstelling in het cultureel centrum.","q":"Vraag naar prijs en beschikbaarheid.","model":"Goedemiddag, zijn er nog kaartjes voor de voorstelling van vanavond? Wat kost een kaartje?","time":15,"hint":"Vraag naar beschikbaarheid en prijs."},
 {"ch":"NiG 14","tier":4,"sit":"Een vriend vraagt wat voor culturele activiteiten u leuk vindt en waarom.","q":"Vertel over uw voorkeur met een reden.","model":"Ik ga het liefst naar concerten, want ik vind muziek heel ontspannend na een drukke werkweek.","time":25,"hint":"Noem een activiteit en geef een reden met \"want\"."},
 {"ch":"NiG 15","tier":3,"sit":"U komt vandaag later op kantoor door een afspraak bij de tandarts.","q":"Informeer uw leidinggevende hierover.","model":"Goedemorgen, ik heb vanochtend een afspraak bij de tandarts, dus ik ben rond elf uur op kantoor.","time":20,"hint":"Noem de reden en de verwachte aankomsttijd."},
 {"ch":"NiG 15","tier":4,"sit":"Uw leidinggevende vraagt wat u het komende jaar wilt leren of bereiken op het werk.","q":"Vertel over uw doelen.","model":"Ik wil graag mijn Nederlands verbeteren en meer verantwoordelijkheid krijgen in projecten. Daarom wil ik ook een cursus volgen.","time":30,"hint":"Noem minstens twee doelen voor het komende jaar."},
 {"ch":"NiG 16","tier":3,"sit":"Uw huisgenoot heeft al een week de afwas niet gedaan.","q":"Spreek uw huisgenoot er vriendelijk op aan.","model":"Hé, zou je de afwas kunnen doen? Het staat al een week vol in de keuken.","time":20,"hint":"Wees vriendelijk maar duidelijk."},
 {"ch":"NiG 16","tier":4,"sit":"Een vriend vraagt hoe uw huishouden georganiseerd is: wie doet wat.","q":"Beschrijf de taakverdeling thuis.","model":"Bij ons thuis kook ik meestal, en mijn partner doet de boodschappen en de was. De afwas doen we om de beurt.","time":30,"hint":"Beschrijf minstens drie taken en wie ze doet."},
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
 {ch:'NiG 1', tier:1, t:'Normen en waarden', q:'U ontmoet iemand voor het eerst, bijvoorbeeld een nieuwe collega. Wat is in Nederland gewoon?', opts:['Een hand geven en uw naam zeggen','Niets zeggen','Direct vragen hoeveel hij verdient'], a:0, ex:'At a first meeting it is common to shake hands and say your name. Dutch people are fairly direct, but salary is a private topic.'},
 {ch:'NiG 2', tier:1, t:'Werk', q:'Een collega is jarig. Wat gebeurt er vaak op een Nederlands werk?', opts:['De jarige trakteert, bijvoorbeeld op taart','De baas geeft een vrije week','Niemand zegt iets'], a:0, ex:'In NL the birthday person usually brings a treat (trakteren) for colleagues or classmates.'},
 {ch:'NiG 3', tier:1, t:'Gezondheid', q:'Vanaf welke leeftijd mag u in Nederland alcohol kopen?', opts:['16 jaar','18 jaar','21 jaar'], a:1, ex:'Since 2014 the minimum age for buying alcohol in NL is 18. Shops and cafés can ask for ID.'},
 {ch:'NiG 4', tier:1, t:'Normen en waarden', q:'U heeft om 15.00 uur een afspraak met een vriend, maar u komt een half uur later. Wat doet u?', opts:['Niets, dat is normaal','Een bericht sturen of bellen dat u later komt','De afspraak vergeten'], a:1, ex:'Being on time is important in NL. If you are late, let the other person know in advance.'},
 {ch:'NiG 5', tier:1, t:'Geld', q:'Hoe betalen de meeste mensen in Nederland in een winkel?', opts:['Met een cheque','Met de pinpas of telefoon','Alleen contant'], a:1, ex:'Most payments in NL are made by debit card (pinnen) or phone. Some market stalls prefer cash for small amounts.'},
 {ch:'NiG 6', tier:1, t:'Normen en waarden', q:'Moet u in een Nederlands restaurant een fooi geven?', opts:['Ja, altijd 20%','Nee, het is niet verplicht','Ja, anders krijgt u een boete'], a:1, ex:'Service is included in the price. A tip (fooi) is a nice extra if you are happy, often around 5–10%, but it is not required.'},
 {ch:'NiG 7', tier:1, t:'Geld', q:'U koopt iets in een webshop. Hoeveel dagen heeft u meestal om het terug te sturen?', opts:['Minstens 14 dagen','2 dagen','U mag het nooit terugsturen'], a:0, ex:'For online purchases you have a cooling-off period (bedenktijd) of at least 14 days in the EU. In a physical shop, returning is a shop policy, not a right.'},
 {ch:'NiG 8', tier:1, t:'Wonen', q:'U huurt een nieuwe woning. Wat is de borg?', opts:['Geld dat u aan het begin betaalt en meestal terugkrijgt als u vertrekt','De huur van de laatste maand','Een cadeau voor de verhuurder'], a:0, ex:'The deposit (borg) protects the landlord against damage or unpaid rent. You get it back when you leave the house in good condition.'},
 {ch:'NiG 9', tier:1, t:'Gezondheid', q:'Het is zaterdagavond. U heeft snel een dokter nodig, maar het is geen levensgevaar. Wie belt u?', opts:['112','De huisartsenpost','De apotheek'], a:1, ex:'Outside office hours you call the huisartsenpost. 112 is only for life-threatening emergencies.'},
 {ch:'NiG 10', tier:1, t:'Verkeer', q:'Wat is verplicht als u in het donker fietst?', opts:['Een helm','Licht voor en achter','Een fietstas'], a:1, ex:'In the dark you must have a white or yellow front light and a red rear light. Without lights you can get a fine.'},
 {ch:'NiG 11', tier:1, t:'Normen en waarden', q:'U bent op de verjaardag van een vriendin. Wie feliciteert u als u binnenkomt?', opts:['Alleen de jarige','De jarige en ook de familie, bijvoorbeeld “Gefeliciteerd met je moeder”','Niemand'], a:1, ex:'At Dutch birthday parties you often congratulate the family members too, e.g. “Gefeliciteerd met je dochter!”'},
 {ch:'NiG 12', tier:1, t:'Verkeer', q:'U reist met de trein. Wat moet u doen met uw OV-chipkaart of bankpas?', opts:['Inchecken bij het begin en uitchecken aan het eind van de reis','Alleen inchecken','Niets, de conducteur regelt het'], a:0, ex:'Always check in AND check out at the card readers. If you forget to check out, you pay too much.'},
 {ch:'NiG 13', tier:1, t:'Geld', q:'U wilt een abonnement (bijvoorbeeld sportschool of telefoon) opzeggen. Wat is verstandig?', opts:['Gewoon niet meer betalen','Schriftelijk of via de app opzeggen en de bevestiging bewaren','Niets doen, het stopt vanzelf'], a:1, ex:'Cancel in writing or via the official channel and keep the confirmation. If you just stop paying, you can get debts and extra costs.'},
 {ch:'NiG 14', tier:1, t:'Onderwijs', q:'Wat kunt u doen in een openbare bibliotheek in Nederland?', opts:['Alleen boeken kopen','Boeken lenen, en vaak gratis taalcafés en computerhulp','Alleen studeren voor studenten'], a:1, ex:'Libraries lend books (children are usually free) and often offer free language cafés (taalcafé) and help with computers and DigiD.'},
 {ch:'NiG 15', tier:1, t:'Werk', q:'U werkt fulltime (5 dagen per week). Hoeveel vakantiedagen heeft u minimaal per jaar?', opts:['10 dagen','20 dagen','30 dagen'], a:1, ex:'By law you get at least 4 times the number of days you work per week: 5 × 4 = 20 days. Many employers give more.'},
 {ch:'NiG 16', tier:1, t:'Wonen', q:'Wat doet u met oud papier en karton?', opts:['In de gewone vuilniszak','In de papiercontainer of papierbak','Op straat zetten'], a:1, ex:'In NL people separate their waste. Paper goes in the paper container. Check the gemeente’s website or app for the rules where you live.'},
 // ---- graduated practice: start easy within a chapter, build up to exam level ----
 {ch:'NiG 1', tier:2, t:'Onderwijs', q:'U begrijpt iets niet goed tijdens de les. Wat is normaal om te doen?', opts:['Vragen stellen aan de docent','Niets zeggen en het later opzoeken','De les verlaten'], a:0, ex:'In Nederland is het normaal en gewenst om vragen te stellen tijdens de les.', hint:'Denk aan hoe actief leren in Nederland wordt gewaardeerd.'},
 {ch:'NiG 1', tier:3, t:'Tijd en afspraken', q:'U heeft een afspraak om 10.00 uur. Wanneer komt u aan?', opts:['Rond 10.00 uur, op tijd','Een uur later, dat is normaal','Een paar dagen later'], a:0, ex:'Punctualiteit is belangrijk in Nederland; op tijd komen wordt verwacht.', hint:'Denk aan hoe belangrijk op tijd komen is in Nederland.'},
 {ch:'NiG 1', tier:4, t:'Communicatie', q:'Een Nederlandse collega zegt eerlijk dat hij het niet eens is met uw idee. Wat betekent dit meestal?', opts:['Hij is boos op u persoonlijk','Hij geeft gewoon zijn eerlijke mening, dat is normaal','Hij wil niet meer met u samenwerken'], a:1, ex:'Nederlanders staan bekend om directheid; een eerlijke mening is geen persoonlijke aanval.', hint:'Denk aan de Nederlandse directe communicatiestijl.'},
 {ch:'NiG 2', tier:2, t:'Werk', q:'Het is normaal in Nederland om tijdens de lunchpauze…', opts:['Samen met collega’s te lunchen in de kantine','Altijd alleen te eten op je eigen bureau','De pauze over te slaan en door te werken'], a:0, ex:'Samen lunchen in de kantine is in Nederland heel gebruikelijk op het werk.', hint:'Denk aan hoe Nederlandse collega’s vaak samen pauze nemen.'},
 {ch:'NiG 2', tier:3, t:'Werk', q:'U bent ziek en kunt niet naar uw werk komen. Wat doet u?', opts:['U belt of appt uw werkgever vóór de werktijd begint','U gaat gewoon niet en zegt er later iets over','U stuurt een collega om het door te geven'], a:0, ex:'Het is gebruikelijk om uzelf persoonlijk en op tijd ziek te melden bij uw werkgever.', hint:'Denk aan wie u zelf moet informeren, en wanneer.'},
 {ch:'NiG 2', tier:4, t:'Werk', q:'Uw leidinggevende geeft u directe feedback over uw werk, ook als het kritiek is. Hoe moet u dit zien?', opts:['Als een persoonlijke belediging','Als normale, directe communicatie om u te helpen verbeteren','Als een teken dat u ontslagen wordt'], a:1, ex:'Directe feedback is in Nederland normaal en is bedoeld om samen te verbeteren, niet als aanval.', hint:'Denk aan de Nederlandse directe manier van communiceren op het werk.'},
 {ch:'NiG 3', tier:2, t:'Uitgaan', q:'U bent tevreden over de bediening in een café. Wat is gebruikelijk in Nederland?', opts:['U geeft altijd verplicht 15% fooi','U mag een kleine fooi geven, maar het is niet verplicht','Fooi geven is niet toegestaan'], a:1, ex:'In Nederland is fooi geven gebruikelijk maar niet verplicht, een paar euro of afronden is normaal.', hint:'Denk aan hoe fooi geven in Nederland meestal werkt.'},
 {ch:'NiG 3', tier:3, t:'Uitgaan', q:'U wilt met een grote groep (8 personen) naar een café of restaurant. Wat is verstandig?', opts:['Van tevoren reserveren','Gewoon zonder afspraak komen','Een ander café kiezen'], a:0, ex:'Bij grotere groepen is het gebruikelijk en verstandig om van tevoren te reserveren.', hint:'Denk aan wat handig is bij grote groepen.'},
 {ch:'NiG 3', tier:4, t:'Alcohol en verkeer', q:'U heeft een paar biertjes gedronken in het café. U moet straks naar huis rijden. Wat is correct?', opts:['U mag altijd rijden na een paar biertjes','U rijdt niet, want alcohol en verkeer is gevaarlijk en er is een wettelijke limiet','Alleen ’s ochtends mag u niet rijden na alcohol'], a:1, ex:'Er geldt een wettelijke alcohollimiet voor bestuurders; na alcohol is het verstandig en vaak verplicht om niet te rijden.', hint:'Denk aan de wettelijke regels over alcohol en autorijden.'},
 {"ch":"NiG 4","tier":2,"t":"Verkeer","q":"U loopt op straat. Waar moet u lopen als er een stoep is?","opts":["Op de stoep","Op de weg","Op de fietspad"],"a":0,"ex":"Pedestrians use the stoep (sidewalk); walking on the road or cycle path is both unusual and unsafe.","hint":"Denk aan waar voetgangers normaal lopen."},
 {"ch":"NiG 4","tier":3,"t":"Verkeer","q":"Een fietser steekt van rechts de weg over op een kruising zonder verkeersborden. Wie heeft voorrang?","opts":["De fietser van rechts","Altijd de auto","Niemand, iedereen stopt"],"a":0,"ex":"Without signs, traffic from the right (rechts) has priority — including cyclists.","hint":"Denk aan de regel \"rechts gaat voor\"."},
 {"ch":"NiG 4","tier":4,"t":"Verkeer","q":"U parkeert uw auto in een blauwe zone. Wat moet u doen?","opts":["Niets, parkeren is daar gratis","Een parkeerschijf met de aankomsttijd neerleggen","Altijd een boete betalen"],"a":1,"ex":"In a blauwe zone you must display a parking disc (parkeerschijf) showing your arrival time; parking is free but time-limited.","hint":"Denk aan het schijfje dat auto’s op het dashboard leggen."},
 {"ch":"NiG 5","tier":2,"t":"Geld","q":"Op de markt wilt u afdingen (minder betalen). Is dat normaal in Nederland?","opts":["Ja, bij elke kraam verwacht men dit","Soms, vooral bij grote bestellingen of aan het einde van de dag","Nee, dat mag nooit"],"a":1,"ex":"Light bargaining happens sometimes, especially for larger quantities or near closing time, but it is not expected everywhere.","hint":"Denk aan wanneer afdingen wél gebruikelijk is."},
 {"ch":"NiG 5","tier":3,"t":"Gezondheid","q":"U koopt vis op de markt die bedorven blijkt te zijn. Wat kunt u doen?","opts":["Niets, u heeft al betaald","Teruggaan naar de kraam en het melden","Een nieuwe marktkraam zoeken"],"a":1,"ex":"Market vendors generally want satisfied customers; going back and explaining the problem is normal and usually resolved fairly.","hint":"Denk aan wat normaal is bij een klacht over een product."},
 {"ch":"NiG 5","tier":4,"t":"Milieu","q":"U heeft op de markt groente gekocht in een plastic tasje. Wat is in Nederland steeds gebruikelijker?","opts":["Gratis plastic tasjes gebruiken","Een eigen (herbruikbare) tas meenemen","Alles los dragen zonder tas"],"a":1,"ex":"Plastic bags are often not free and the Netherlands actively encourages reusable bags (herbruikbare tassen) to reduce waste.","hint":"Denk aan hoe Nederland met plastic afval omgaat."},
 {"ch":"NiG 6","tier":2,"t":"Normen en waarden","q":"U bent met een groep vrienden uit eten geweest. Hoe wordt de rekening meestal betaald?","opts":["Altijd één persoon betaalt alles","Vaak \"ieder betaalt zijn eigen deel\" (apart afrekenen of delen)","Het restaurant beslist"],"a":1,"ex":"Splitting the bill (apart afrekenen) or dividing it equally is very common among friends in the Netherlands — \"gaan we Dutch\" even comes from this.","hint":"Denk aan de uitdrukking \"Dutch\" betalen."},
 {"ch":"NiG 6","tier":3,"t":"Gezondheid","q":"U heeft een voedselallergie en gaat voor het eerst naar een restaurant. Wat is verstandig?","opts":["Gewoon bestellen en hopen dat het goed komt","Dit vooraf of bij het bestellen duidelijk melden","Niet uit eten gaan"],"a":1,"ex":"Dutch restaurants take allergies seriously and expect you to mention them clearly — staff will usually check with the kitchen.","hint":"Denk aan wat je proactief moet doen."},
 {"ch":"NiG 6","tier":4,"t":"Normen en waarden","q":"U bent te gast bij een etentje thuis bij Nederlandse vrienden. Wat is gebruikelijk om mee te nemen?","opts":["Niets, dat is niet nodig","Een kleine attentie, bijvoorbeeld een fles wijn of bloemen","Een groot, duur cadeau"],"a":1,"ex":"Bringing a small gift such as wine or flowers (een kleinigheidje) when invited to dinner is common Dutch etiquette.","hint":"Denk aan wat gastvrij maar niet overdreven is."},
 {"ch":"NiG 7","tier":2,"t":"Geld","q":"U past kleding in een winkel. De verkoper geeft advies, maar u wilt niets kopen. Wat is normaal?","opts":["Gewoon beleefd bedanken en weggaan","U moet altijd iets kopen","Nooit passen zonder te kopen"],"a":0,"ex":"Trying on clothes without buying, then politely declining, is completely normal in Dutch shops.","hint":"Denk aan wat beleefd is zonder te hoeven kopen."},
 {"ch":"NiG 7","tier":3,"t":"Geld","q":"U koopt kleding met korting (uitverkoop). Kunt u die daarna nog ruilen?","opts":["Nee, afgeprijsde artikelen kunt u nooit ruilen","Dat hangt af van het beleid van de winkel, vaak wel binnen de normale termijn","Ja, altijd zonder voorwaarden"],"a":1,"ex":"Return policies for sale items vary by shop — some allow it under the normal terms, others exclude sale items, so check the store’s policy (ruilvoorwaarden).","hint":"Denk aan hoe winkels onderling kunnen verschillen."},
 {"ch":"NiG 7","tier":4,"t":"Milieu","q":"Wat kunt u doen met kleding die u niet meer draagt, in plaats van weggooien?","opts":["Bij het restafval zetten","Naar een kledingcontainer of kringloopwinkel brengen","Verbranden"],"a":1,"ex":"Old clothing should go to a kledingcontainer (textile recycling bin) or a kringloopwinkel (thrift shop), not the regular trash.","hint":"Denk aan hoe Nederland afval scheidt, ook voor textiel."},
 {"ch":"NiG 8","tier":2,"t":"Wonen","q":"U gaat verhuizen naar een nieuwe woning. Waar moet u zich binnen enkele dagen inschrijven?","opts":["Bij de bank","Bij de gemeente (Basisregistratie Personen)","Bij de school"],"a":1,"ex":"You must register your new address with the gemeente within a short period; this affects your zorgverzekering, toeslagen and more.","hint":"Denk aan waar je adreswijzigingen doorgeeft."},
 {"ch":"NiG 8","tier":3,"t":"Geld","q":"Wat is een inboedelverzekering?","opts":["Een verzekering voor uw spullen in huis, bijvoorbeeld bij brand of diefstal","Een verzekering voor uw gezondheid","Een verzekering voor uw auto"],"a":0,"ex":"An inboedelverzekering covers your belongings inside the home against fire, theft, and water damage.","hint":"Denk aan het woord \"inboedel\" = spullen in huis."},
 {"ch":"NiG 8","tier":4,"t":"Wonen","q":"Uw verhuurder wil zonder reden uw huurcontract per direct beëindigen. Mag dat?","opts":["Ja, een verhuurder mag dat altijd","Meestal niet; huurders hebben in Nederland sterke huurbescherming","Alleen als u een jaar huurt"],"a":1,"ex":"Tenants in the Netherlands have strong legal protection (huurbescherming); a landlord generally cannot terminate a contract without valid legal grounds.","hint":"Denk aan hoe sterk huurders beschermd zijn in Nederland."},
 {"ch":"NiG 9","tier":2,"t":"Gezondheid","q":"U heeft een afspraak bij de huisarts, maar kunt op het laatste moment niet komen. Wat doet u?","opts":["Gewoon wegblijven","De praktijk bellen om af te zeggen","Een vriend sturen in uw plaats"],"a":1,"ex":"You should always call to cancel an appointment; many practices charge a fee for no-shows (niet verschenen).","hint":"Denk aan wat beleefd en verstandig is."},
 {"ch":"NiG 9","tier":3,"t":"Gezondheid","q":"Wat is een \"verwijzing\" van de huisarts?","opts":["Een recept voor medicijnen","Een document waarmee u naar een specialist of het ziekenhuis kunt","Een afspraak bij de apotheek"],"a":1,"ex":"A verwijzing (referral) is required to see most specialists or go to the hospital — insurance usually only covers this with a referral.","hint":"Denk aan wat je nodig hebt om naar een specialist te gaan."},
 {"ch":"NiG 9","tier":4,"t":"Gezondheid","q":"U bent het niet eens met de diagnose van uw huisarts. Wat kunt u doen?","opts":["Niets, de huisarts heeft altijd gelijk","Om een tweede mening (second opinion) vragen","Direct naar de Spoedeisende Hulp gaan"],"a":1,"ex":"Patients have the right to request a second opinion if they are unsure about a diagnosis or treatment plan.","hint":"Denk aan het recht dat patiënten hebben."},
 {"ch":"NiG 10","tier":2,"t":"Verkeer","q":"U parkeert uw fiets op straat. Wat is verstandig?","opts":["Hem nergens aan vastmaken","Hem op slot zetten, het liefst aan iets vasts","Overal mag u de fiets neerzetten"],"a":1,"ex":"Bike theft is common in the Netherlands; always lock your bike, preferably to a fixed object like a rack.","hint":"Denk aan diefstal en hoe je dat voorkomt."},
 {"ch":"NiG 10","tier":3,"t":"Verkeer","q":"Mag u met uw telefoon in de hand fietsen?","opts":["Ja, dat mag altijd","Nee, dat is verboden, net als in de auto","Alleen als u stilstaat bij een stoplicht"],"a":1,"ex":"Using a handheld phone while cycling is prohibited in the Netherlands, similar to driving — you can get a fine.","hint":"Denk aan de regels over telefoongebruik tijdens het fietsen."},
 {"ch":"NiG 10","tier":4,"t":"Verkeer","q":"Uw fiets is gestolen. Wat is een belangrijke eerste stap?","opts":["Meteen een nieuwe fiets kopen","Aangifte doen bij de politie (eventueel online)","Niets doen, dat heeft geen zin"],"a":1,"ex":"Filing a police report (aangifte) is important for both statistics and insurance claims, even if recovery is unlikely.","hint":"Denk aan wat nodig is voor de verzekering."},
 {"ch":"NiG 11","tier":2,"t":"Normen en waarden","q":"U komt op een Nederlandse verjaardag binnen. Wat is gebruikelijk om als eerste te doen?","opts":["Meteen gaan zitten zonder iets te zeggen","Alle aanwezigen een hand geven en uzelf voorstellen","Direct naar de jarige lopen en de rest negeren"],"a":1,"ex":"It’s customary to greet everyone present with a handshake and introduce yourself, even people you don’t know.","hint":"Denk aan wat gastvrij is tegenover alle gasten."},
 {"ch":"NiG 11","tier":3,"t":"Normen en waarden","q":"Hoe laat eindigen Nederlandse verjaardagsfeestjes vaak, vergeleken met andere culturen?","opts":["Vaak relatief vroeg, bijvoorbeeld rond 22.00-23.00 uur","Altijd na middernacht","Nooit voor 2 uur ’s nachts"],"a":0,"ex":"Dutch birthday parties, especially among adults, often wind down earlier than in many other cultures.","hint":"Denk aan het stereotype van vroeg naar bed gaan."},
 {"ch":"NiG 11","tier":4,"t":"Werk","q":"Een collega vertelt u dat hij ontslagen is. Wat is een gepaste reactie?","opts":["Doen alsof u het niet hoort","Medeleven tonen en vragen hoe het met diegene gaat","Meteen advies geven zonder te luisteren"],"a":1,"ex":"Showing empathy and asking how someone feels is appropriate; jumping straight to advice can feel dismissive.","hint":"Denk aan wat invoelend is in een moeilijk gesprek."},
 {"ch":"NiG 12","tier":2,"t":"Geld","q":"U checkt uit bij een hotel. Wat is gebruikelijk om te controleren voordat u vertrekt?","opts":["Niets, de rekening klopt altijd","De rekening, om te zien of alles klopt","Alleen de kamer op schade"],"a":1,"ex":"It is normal and sensible to check your hotel bill for any unexpected charges before leaving.","hint":"Denk aan wat verstandig is voor je vertrekt."},
 {"ch":"NiG 12","tier":3,"t":"Normen en waarden","q":"U bent niet tevreden met uw hotelkamer. Wat is de gebruikelijke eerste stap?","opts":["Meteen een slechte recensie online zetten","Het probleem melden bij de receptie en om een oplossing vragen","Zwijgen en niet meer terugkomen"],"a":1,"ex":"Raising the issue directly with staff first gives them a chance to fix it, which is the expected first step before going public.","hint":"Denk aan wat de meest directe en eerlijke aanpak is."},
 {"ch":"NiG 12","tier":4,"t":"Geld","q":"U betaalt bij het hotel met creditcard en krijgt een \"borg\" (hold) van €100. Wat betekent dit meestal?","opts":["U bent €100 kwijt","Het bedrag wordt tijdelijk geblokkeerd en later vrijgegeven als er geen schade is","Het is een fooi voor het personeel"],"a":1,"ex":"A hold (borg) temporarily blocks funds on your card as a security deposit; it’s released after checkout if there’s no damage.","hint":"Denk aan het verschil tussen \"betalen\" en \"blokkeren\"."},
 {"ch":"NiG 13","tier":2,"t":"Geld","q":"U wilt stoppen met uw sportschoolabonnement. Wat is meestal nodig?","opts":["Gewoon niet meer komen","Opzeggen volgens de opzegtermijn in het contract","Een boete betalen om te stoppen"],"a":1,"ex":"Memberships usually have a notice period (opzegtermijn); you must formally cancel, not just stop attending.","hint":"Denk aan wat er in contracten staat over opzeggen."},
 {"ch":"NiG 13","tier":3,"t":"Gezondheid","q":"Wat is gebruikelijk voordat u met gewichten gaat trainen in een Nederlandse sportschool?","opts":["Meteen beginnen zonder uitleg","Een intake of uitleg vragen over de apparaten","Alleen kijken naar anderen"],"a":1,"ex":"Most gyms offer an intake session or basic instruction; asking staff for guidance on equipment is normal and expected.","hint":"Denk aan wat veilig en gebruikelijk is voor beginners."},
 {"ch":"NiG 13","tier":4,"t":"Geld","q":"U kunt tijdelijk niet sporten (bijvoorbeeld door een blessure of verhuizing). Wat biedt een sportschool vaak aan?","opts":["Niets, u blijft gewoon betalen","De mogelijkheid om het abonnement tijdelijk te \"bevriezen\"","Automatisch stopzetten zonder vragen"],"a":1,"ex":"Many gyms allow you to temporarily freeze (bevriezen) your membership for valid reasons like injury or relocation.","hint":"Denk aan de term die in het gesprek werd gebruikt."},
 {"ch":"NiG 14","tier":2,"t":"Onderwijs","q":"Kinderen tot 18 jaar: hoeveel kost meestal een bibliotheekpas?","opts":["Hetzelfde als voor volwassenen","Vaak gratis of sterk gereduceerd","Het dubbele van volwassenen"],"a":1,"ex":"Library memberships for children and teens are usually free or heavily discounted in the Netherlands, to encourage reading.","hint":"Denk aan hoe bibliotheken lezen bij kinderen stimuleren."},
 {"ch":"NiG 14","tier":3,"t":"Normen en waarden","q":"Wat is een \"taalcafé\"?","opts":["Een café waar alleen Engels gesproken wordt","Een gratis bijeenkomst om Nederlands te oefenen met vrijwilligers","Een restaurant voor toeristen"],"a":1,"ex":"A taalcafé is a free, informal meetup (often at a library or cultural center) where people practice Dutch with volunteers.","hint":"Denk aan het woord \"taal\" en waar je het kunt oefenen."},
 {"ch":"NiG 14","tier":4,"t":"Normen en waarden","q":"U wilt vrijwilligerswerk doen in Nederland. Wat is daarbij gebruikelijk?","opts":["U krijgt altijd een hoog salaris","Het is onbetaald, maar wordt sociaal zeer gewaardeerd","Het is verplicht voor iedereen"],"a":1,"ex":"Volunteering (vrijwilligerswerk) is unpaid but highly valued in Dutch society and common across all age groups.","hint":"Denk aan het verschil tussen een baan en vrijwilligerswerk."},
 {"ch":"NiG 15","tier":2,"t":"Werk","q":"U komt een keer te laat op het werk door de file. Wat is gebruikelijk?","opts":["Niets zeggen en gewoon binnenkomen","Uw leidinggevende of collega’s van tevoren informeren","Een vrije dag opnemen"],"a":1,"ex":"Letting your manager or team know in advance, even by a short message, is considered polite and professional.","hint":"Denk aan wat beleefd en verantwoordelijk is."},
 {"ch":"NiG 15","tier":3,"t":"Werk","q":"Wat betekent het Nederlandse \"poldermodel\" in een werkcontext?","opts":["Alleen de baas beslist","Overleg en consensus tussen alle betrokkenen voordat een beslissing valt","Beslissingen worden willekeurig genomen"],"a":1,"ex":"The poldermodel refers to a consensus-based decision-making style, rooted in Dutch history of collaborative water management.","hint":"Denk aan overleg en samenwerking als basis voor beslissingen."},
 {"ch":"NiG 15","tier":4,"t":"Werk","q":"Veel Nederlanders werken 4 dagen per week. Wat zegt dit over de Nederlandse werkcultuur?","opts":["Nederlanders werken weinig en zijn lui","Er wordt veel waarde gehecht aan werk-privébalans","Vier dagen werken is wettelijk verplicht"],"a":1,"ex":"Part-time work and a strong work-life balance (werk-privébalans) are highly valued and common in Dutch culture, not seen as laziness.","hint":"Denk aan hoe Nederlanders aankijken tegen vrije tijd."},
 {"ch":"NiG 16","tier":2,"t":"Wonen","q":"U heeft last van lawaai van de buren. Wat is de eerste stap die Nederlanders meestal nemen?","opts":["Meteen de politie bellen","Zelf bij de buren aanbellen en het vriendelijk vragen","Niets zeggen en het negeren"],"a":1,"ex":"The first step is usually to talk to your neighbors directly and politely; calling the police is a last resort for serious or repeated issues.","hint":"Denk aan de meest directe en vriendelijke aanpak."},
 {"ch":"NiG 16","tier":3,"t":"Wonen","q":"Er is een ernstige lekkage in uw huurwoning. Wie is meestal verantwoordelijk voor de reparatie?","opts":["Altijd de huurder zelf","Meestal de verhuurder/huisbaas","De buren"],"a":1,"ex":"For most structural repairs (like leaks), the landlord (verhuurder) is responsible, especially for sudden/urgent issues.","hint":"Denk aan wie het huis bezit en onderhoudt."},
 {"ch":"NiG 16","tier":4,"t":"Wonen","q":"Wat is een VvE (Vereniging van Eigenaren)?","opts":["Een sportvereniging","Een organisatie van appartementseigenaren die samen het gebouw beheren","Een overheidsinstantie voor belastingen"],"a":1,"ex":"A VvE is an association of apartment owners who jointly manage shared building matters like maintenance and costs.","hint":"Denk aan wie samen verantwoordelijk is voor een appartementengebouw."},
],
};
