/* ============================================================================
   Swedish CI — data/stories-b1.js
   Graded reader stories at B1 level (~150-250 words each).
   Compound sentences, BIFF word order in subordinate clauses, and discourse
   connectors (därför, dessutom, eftersom, trots att, däremot, i stället).
   Topics: workplace culture, healthcare system, environmental issues, Swedish
   traditions, immigrant experiences.
   ========================================================================== */
(function () {
  var stories = [

    {
      id: "b1-work-001",
      title: "Arbetskultur i Sverige",
      titleEn: "Workplace culture in Sweden",
      level: "B1",
      theme: "Arbete · Work",
      text:
        "Arbetslivet i Sverige skiljer sig på många sätt från andra länder. En viktig del " +
        "av den svenska arbetskulturen är att alla på en arbetsplats ska känna sig " +
        "delaktiga. Cheferna bestämmer inte allt själva, utan de lyssnar ofta på vad " +
        "medarbetarna tycker. Därför är möten vanliga, och man försöker komma fram till " +
        "beslut tillsammans. Ett annat känt begrepp är „fika“. Flera gånger om dagen tar " +
        "kollegorna en paus, dricker kaffe och pratar med varandra. Fikan är inte bara en " +
        "paus, utan också ett sätt att bygga goda relationer på jobbet. Svenskar tycker " +
        "dessutom att balansen mellan arbete och fritid är mycket viktig. De flesta arbetar " +
        "ungefär åtta timmar om dagen och går hem i tid för att vara med sin familj. Trots " +
        "att man arbetar hårt under dagen, förväntas man sällan svara på mejl på kvällen. " +
        "Många anställda har också rätt till flera veckors semester varje år. För den som " +
        "är ny i Sverige kan arbetskulturen kännas ovanlig i början. Med tiden brukar de " +
        "flesta uppskatta det öppna klimatet, där alla får komma till tals.",
      glossary: {
        "arbetslivet": "working life",
        "skiljer sig": "differs",
        "arbetskulturen": "the work culture",
        "delaktiga": "involved / included",
        "medarbetarna": "the employees / co-workers",
        "möten": "meetings",
        "beslut": "decisions",
        "begrepp": "concept / term",
        "paus": "break",
        "relationer": "relationships",
        "balansen": "the balance",
        "fritid": "free time",
        "förväntas": "is expected",
        "sällan": "rarely",
        "anställda": "employees",
        "rätt till": "entitled to",
        "semester": "holiday / vacation",
        "ovanlig": "unusual",
        "uppskatta": "appreciate",
        "klimatet": "the climate / atmosphere",
        "komma till tals": "have a say"
      },
      questions: [
        { type: "gist", q: "Vad handlar texten om?", qEn: "What is the text about?",
          options: ["Den svenska arbetskulturen", "Svenska semesterregler", "Hur man söker jobb"], correct: 0,
          explain: "Texten beskriver hur arbetslivet och arbetskulturen fungerar i Sverige." },
        { type: "detail", q: "Hur fattar man ofta beslut på svenska arbetsplatser?", qEn: "How are decisions often made at Swedish workplaces?",
          options: ["Tillsammans, efter att ha lyssnat på medarbetarna", "Chefen bestämmer allt ensam", "Genom omröstning på nätet"], correct: 0,
          explain: "„…de lyssnar ofta på vad medarbetarna tycker … man försöker komma fram till beslut tillsammans.“" },
        { type: "detail", q: "Vad är „fika“ enligt texten?", qEn: "What is 'fika' according to the text?",
          options: ["En paus med kaffe som bygger relationer", "Ett möte med chefen", "En typ av lunch"], correct: 0,
          explain: "„Fikan är inte bara en paus, utan också ett sätt att bygga goda relationer.“" },
        { type: "detail", q: "Vad förväntas man oftast INTE göra på kvällen?", qEn: "What are you usually NOT expected to do in the evening?",
          options: ["Svara på jobbmejl", "Laga middag", "Träffa familjen"], correct: 0,
          explain: "„…förväntas man sällan svara på mejl på kvällen.“" },
        { type: "detail", q: "Hur kan arbetskulturen kännas för någon som är ny?", qEn: "How can the work culture feel for someone new?",
          options: ["Ovanlig i början", "Tråkig och sträng", "Helt självklar"], correct: 0,
          explain: "„För den som är ny i Sverige kan arbetskulturen kännas ovanlig i början.“" }
      ]
    },

    {
      id: "b1-health-002",
      title: "Den svenska sjukvården",
      titleEn: "The Swedish healthcare system",
      level: "B1",
      theme: "Hälsa · Health",
      text:
        "Sjukvården i Sverige är till största delen offentlig, vilket betyder att den " +
        "betalas med skattepengar. Tanken är att alla ska ha rätt till vård, oavsett hur " +
        "mycket pengar de har. När man blir sjuk vänder man sig först till en vårdcentral. " +
        "Där träffar man en allmänläkare som undersöker patienten och ger råd. Om problemet " +
        "är allvarligt kan läkaren skicka patienten vidare till ett sjukhus eller en " +
        "specialist. Eftersom vården är offentlig betalar patienten bara en mindre avgift " +
        "för ett besök. Det finns dessutom ett högkostnadsskydd, vilket innebär att man " +
        "aldrig behöver betala mer än en viss summa under ett år. För barn och unga är " +
        "vården oftast helt gratis. Ett problem som många diskuterar är att det ibland kan " +
        "vara långa väntetider. Till exempel kan man få vänta länge på en operation som " +
        "inte är akut. Trots detta är de flesta nöjda med kvaliteten på vården. Många som " +
        "flyttar till Sverige blir förvånade över att läkaren ofta inte skriver ut medicin " +
        "direkt. I stället får patienten råd om att vila och dricka vatten, eftersom kroppen " +
        "ofta läker av sig själv.",
      glossary: {
        "sjukvården": "healthcare",
        "offentlig": "public",
        "skattepengar": "tax money",
        "vård": "care",
        "oavsett": "regardless of",
        "vårdcentral": "health centre",
        "allmänläkare": "general practitioner",
        "undersöker": "examines",
        "råd": "advice",
        "allvarligt": "serious",
        "specialist": "specialist",
        "avgift": "fee",
        "högkostnadsskydd": "high-cost ceiling (cost cap)",
        "innebär": "means",
        "viss summa": "a certain amount",
        "gratis": "free",
        "väntetider": "waiting times",
        "akut": "urgent / acute",
        "kvaliteten": "the quality",
        "förvånade": "surprised",
        "skriver ut": "prescribes",
        "läker": "heals"
      },
      questions: [
        { type: "gist", q: "Vad beskriver texten?", qEn: "What does the text describe?",
          options: ["Hur den svenska sjukvården fungerar", "En särskild sjukdom", "Ett sjukhusbygge"], correct: 0,
          explain: "Texten förklarar hur sjukvårdssystemet i Sverige är uppbyggt." },
        { type: "detail", q: "Vad betyder det att vården är offentlig?", qEn: "What does it mean that the care is public?",
          options: ["Den betalas med skattepengar", "Den är gratis för turister", "Den drivs av privata företag"], correct: 0,
          explain: "„…offentlig, vilket betyder att den betalas med skattepengar.“" },
        { type: "detail", q: "Vart vänder man sig först när man blir sjuk?", qEn: "Where do you turn first when you get ill?",
          options: ["Till en vårdcentral", "Direkt till en specialist", "Till apoteket"], correct: 0,
          explain: "„När man blir sjuk vänder man sig först till en vårdcentral.“" },
        { type: "detail", q: "Vad är ett problem som många diskuterar?", qEn: "What is a problem many people discuss?",
          options: ["Långa väntetider", "För dyra besök", "För få läkare på landet"], correct: 0,
          explain: "„…det ibland kan vara långa väntetider.“" },
        { type: "detail", q: "Varför skriver läkaren ofta inte ut medicin direkt?", qEn: "Why does the doctor often not prescribe medicine right away?",
          options: ["Kroppen läker ofta av sig själv", "Medicin är förbjuden", "Patienten måste betala extra"], correct: 0,
          explain: "„…eftersom kroppen ofta läker av sig själv.“" }
      ]
    },

    {
      id: "b1-environment-003",
      title: "Miljö och klimat",
      titleEn: "Environment and climate",
      level: "B1",
      theme: "Miljö · Environment",
      text:
        "Miljöfrågor är viktiga för många människor i Sverige. Landet har som mål att bli " +
        "ett av de första i världen utan fossila bränslen. Därför satsar både staten och " +
        "företagen mycket pengar på förnybar energi, till exempel vindkraft och solenergi. " +
        "I vardagen försöker många svenskar att leva mer hållbart. Att källsortera är något " +
        "nästan alla gör. Man delar upp sopor i olika kärl, så att glas, papper och plast " +
        "kan återvinnas. Dessutom väljer allt fler att åka kollektivt eller cykla i stället " +
        "för att ta bilen. På senare år har tåget blivit populärare igen, eftersom " +
        "flygresor släpper ut mycket koldioxid. Vissa väljer till och med att inte flyga " +
        "alls, en trend som kallas „flygskam“. Att handla begagnade kläder och möbler har " +
        "också blivit vanligare, särskilt bland unga. Trots alla dessa insatser finns det " +
        "fortfarande mycket att göra. Klimatförändringarna märks även i Sverige, till " +
        "exempel genom varmare somrar och mildare vintrar. Många forskare menar att alla " +
        "länder måste samarbeta för att lösa problemen. För den enskilda personen kan det " +
        "kännas svårt att göra skillnad, men många små förändringar tillsammans kan få stor " +
        "effekt.",
      glossary: {
        "miljöfrågor": "environmental issues",
        "mål": "goal",
        "fossila bränslen": "fossil fuels",
        "satsar": "invests",
        "förnybar energi": "renewable energy",
        "vindkraft": "wind power",
        "solenergi": "solar energy",
        "hållbart": "sustainably",
        "källsortera": "to sort waste",
        "sopor": "rubbish / waste",
        "kärl": "bins / containers",
        "återvinnas": "be recycled",
        "kollektivt": "by public transport",
        "släpper ut": "emits",
        "koldioxid": "carbon dioxide",
        "flygskam": "flight shame",
        "begagnade": "second-hand",
        "insatser": "efforts",
        "klimatförändringarna": "climate change",
        "forskare": "researchers",
        "samarbeta": "cooperate",
        "enskilda": "individual",
        "göra skillnad": "make a difference"
      },
      questions: [
        { type: "gist", q: "Vad handlar texten mest om?", qEn: "What is the text mostly about?",
          options: ["Miljö och hållbarhet i Sverige", "Svenska bilmärken", "Vädret förra sommaren"], correct: 0,
          explain: "Texten handlar om miljöarbete och hållbart liv i Sverige." },
        { type: "detail", q: "Vad är ett av Sveriges mål?", qEn: "What is one of Sweden's goals?",
          options: ["Att bli fritt från fossila bränslen", "Att bygga fler flygplatser", "Att sänka skatten"], correct: 0,
          explain: "„…mål att bli ett av de första i världen utan fossila bränslen.“" },
        { type: "detail", q: "Vad gör nästan alla i Sverige enligt texten?", qEn: "What do almost all people in Sweden do, according to the text?",
          options: ["Källsorterar sopor", "Kör elbil", "Odlar egen mat"], correct: 0,
          explain: "„Att källsortera är något nästan alla gör.“" },
        { type: "detail", q: "Varför har tåget blivit populärare?", qEn: "Why has the train become more popular?",
          options: ["Flyg släpper ut mycket koldioxid", "Tåg är alltid billigare", "Det finns inga flygplatser"], correct: 0,
          explain: "„…eftersom flygresor släpper ut mycket koldioxid.“" },
        { type: "detail", q: "Vad menar många forskare?", qEn: "What do many researchers think?",
          options: ["Att länder måste samarbeta", "Att problemet redan är löst", "Att bara Sverige kan lösa det"], correct: 0,
          explain: "„…alla länder måste samarbeta för att lösa problemen.“" }
      ]
    },

    {
      id: "b1-traditions-004",
      title: "Svenska traditioner",
      titleEn: "Swedish traditions",
      level: "B1",
      theme: "Kultur · Culture",
      text:
        "Sverige har många traditioner som följer årstiderna. En av de mest älskade är " +
        "midsommar, som firas i slutet av juni. Då är nätterna ljusa och naturen grön. " +
        "Familjer och vänner samlas ute, ofta på landet, för att äta, dansa och umgås. Man " +
        "reser en majstång, klär den med blommor och löv och dansar runt den till glada " +
        "sånger. På bordet står sill, färskpotatis och jordgubbar. En annan viktig " +
        "tradition är allemansrätten. Den ger alla rätt att vara ute i naturen, plocka bär " +
        "och svamp och tälta, även på mark som någon annan äger. Men med denna rätt följer " +
        "också ett ansvar: man får inte förstöra naturen eller störa djuren. På hösten, när " +
        "bären och svamparna mognar, går många ut i skogen för att plocka. Att vara nära " +
        "naturen är en stor del av den svenska kulturen. Även under vintern fortsätter " +
        "traditionerna. I december firar man advent och tänder ett ljus varje söndag fram " +
        "till jul. Trots att Sverige har blivit mer modernt, är dessa traditioner " +
        "fortfarande levande, och de förs vidare från en generation till nästa.",
      glossary: {
        "traditioner": "traditions",
        "årstiderna": "the seasons",
        "älskade": "beloved",
        "firas": "is celebrated",
        "nätterna": "the nights",
        "samlas": "gather",
        "umgås": "socialise",
        "majstång": "maypole",
        "löv": "leaves",
        "sill": "herring",
        "färskpotatis": "new potatoes",
        "allemansrätten": "the right of public access",
        "plocka": "pick",
        "svamp": "mushrooms",
        "tälta": "to camp",
        "äger": "owns",
        "ansvar": "responsibility",
        "förstöra": "destroy",
        "störa": "disturb",
        "mognar": "ripen",
        "förs vidare": "is passed on",
        "generation": "generation"
      },
      questions: [
        { type: "gist", q: "Vad handlar texten om?", qEn: "What is the text about?",
          options: ["Svenska traditioner och naturen", "Svensk politik", "En resa utomlands"], correct: 0,
          explain: "Texten beskriver svenska traditioner och förhållandet till naturen." },
        { type: "detail", q: "När firas midsommar?", qEn: "When is Midsummer celebrated?",
          options: ["I slutet av juni", "I december", "I mars"], correct: 0,
          explain: "„…midsommar, som firas i slutet av juni.“" },
        { type: "detail", q: "Vad är allemansrätten?", qEn: "What is the right of public access?",
          options: ["Rätten att vara ute i naturen", "En lag om skatter", "En typ av fest"], correct: 0,
          explain: "„Den ger alla rätt att vara ute i naturen, plocka bär och svamp och tälta.“" },
        { type: "detail", q: "Vilket ansvar följer med allemansrätten?", qEn: "What responsibility comes with this right?",
          options: ["Man får inte förstöra naturen", "Man måste betala en avgift", "Man måste fråga ägaren först"], correct: 0,
          explain: "„…man får inte förstöra naturen eller störa djuren.“" },
        { type: "detail", q: "Vad gör man under advent?", qEn: "What do people do during Advent?",
          options: ["Tänder ett ljus varje söndag fram till jul", "Reser en majstång", "Plockar svamp"], correct: 0,
          explain: "„…firar man advent och tänder ett ljus varje söndag fram till jul.“" }
      ]
    },

    {
      id: "b1-newlife-005",
      title: "Att börja ett nytt liv",
      titleEn: "Starting a new life",
      level: "B1",
      theme: "Samhälle · Society",
      text:
        "För många människor som flyttar till ett nytt land är de första åren både " +
        "spännande och svåra. Amir kom till Sverige för fem år sedan. I början kunde han " +
        "inte ett enda ord svenska, och allt kändes främmande. Han saknade sin familj och " +
        "sina vänner, och vintern var mörkare och kallare än han var van vid. Det första " +
        "han gjorde var att börja på SFI, alltså svenska för invandrare. Där träffade han " +
        "andra som var i samma situation, och tillsammans hjälpte de varandra. Att lära sig " +
        "ett nytt språk tar tid och kräver tålamod. Amir pluggade varje dag, både i skolan " +
        "och hemma. Han tittade på svensk tv, läste enkla böcker och försökte prata med " +
        "sina grannar, trots att han gjorde många fel. Efter ett tag märkte han att det " +
        "blev lättare. När han väl kunde tillräckligt mycket svenska, fick han praktik på " +
        "ett företag. Praktiken ledde senare till ett riktigt jobb. I dag känner sig Amir " +
        "hemma i Sverige, även om han ibland fortfarande saknar sitt gamla land. Han säger " +
        "att det viktigaste är att inte ge upp, utan att fortsätta kämpa, ett steg i taget.",
      glossary: {
        "flyttar": "move",
        "spännande": "exciting",
        "främmande": "foreign / strange",
        "saknade": "missed",
        "van vid": "used to",
        "invandrare": "immigrants",
        "situation": "situation",
        "kräver": "requires",
        "tålamod": "patience",
        "pluggade": "studied",
        "grannar": "neighbours",
        "gjorde många fel": "made many mistakes",
        "märkte": "noticed",
        "tillräckligt": "enough",
        "praktik": "internship / work placement",
        "ledde": "led",
        "hemma": "at home",
        "ge upp": "give up",
        "kämpa": "fight / keep going",
        "ett steg i taget": "one step at a time"
      },
      questions: [
        { type: "gist", q: "Vad handlar texten om?", qEn: "What is the text about?",
          options: ["Amirs väg till ett nytt liv i Sverige", "En semester i Sverige", "Hur man undervisar i svenska"], correct: 0,
          explain: "Texten följer Amir när han bygger upp ett nytt liv i Sverige." },
        { type: "detail", q: "Vad gjorde Amir först när han kom till Sverige?", qEn: "What did Amir do first when he came to Sweden?",
          options: ["Började på SFI", "Köpte ett hus", "Startade ett företag"], correct: 0,
          explain: "„Det första han gjorde var att börja på SFI.“" },
        { type: "detail", q: "Hur övade Amir svenska hemma?", qEn: "How did Amir practise Swedish at home?",
          options: ["Tittade på tv och läste enkla böcker", "Gick på kurser utomlands", "Anlitade en privatlärare"], correct: 0,
          explain: "„Han tittade på svensk tv, läste enkla böcker och försökte prata med sina grannar.“" },
        { type: "detail", q: "Vad ledde praktiken till?", qEn: "What did the work placement lead to?",
          options: ["Ett riktigt jobb", "En ny utbildning", "En resa hem"], correct: 0,
          explain: "„Praktiken ledde senare till ett riktigt jobb.“" },
        { type: "detail", q: "Vad säger Amir är viktigast?", qEn: "What does Amir say is most important?",
          options: ["Att inte ge upp", "Att tjäna mycket pengar", "Att flytta tillbaka"], correct: 0,
          explain: "„…det viktigaste är att inte ge upp, utan att fortsätta kämpa.“" }
      ]
    }

  ];

  stories.forEach(function (s) {
    s.wordCount = (s.text.match(/[A-Za-zÅÄÖåäö]+/g) || []).length;
  });
  window.SvCI_STORIES = (window.SvCI_STORIES || []).concat(stories);
})();
