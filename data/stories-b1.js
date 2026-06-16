/* ============================================================
   Swedish CI — Graded Reader data: B1 stories
   ~150-250 words each. Compound sentences, BIFF word order in
   subordinate clauses (eftersom hon inte..., trots att de inte...),
   and a wider range of connectors (eftersom, trots att, medan, så,
   även om, samtidigt som). Loaded by reader.html.
   ============================================================ */
const STORIES_B1 = [
  {
    id: "b1-work-1",
    title: "En annorlunda arbetskultur",
    titleEn: "A different workplace culture",
    level: "B1",
    theme: "work",
    wordCount: 196,
    text:
      "Amara har jobbat i Sverige i sex månader, och hon tycker att den svenska arbetskulturen är " +
      "annorlunda jämfört med hennes hemland. På hennes kontor är hierarkin platt, vilket betyder att " +
      "chefen och de anställda pratar med varandra som jämlikar. Ingen är rädd för att säga vad de tycker " +
      "under ett möte. Varje dag klockan tio tar alla en paus för fika, även om de har mycket att göra. " +
      "Amara trodde först att fikan bara var en kort kafferast, men hon förstod snart att den är viktig " +
      "för gemenskapen på jobbet. Medan kollegorna dricker kaffe pratar de om allt från väder till " +
      "politik. Amara märkte också att svenskar ofta jobbar hemifrån några dagar i veckan, eftersom " +
      "flexibilitet är viktig i svensk arbetskultur. Trots att arbetsdagarna känns kortare än i hennes " +
      "hemland, är svenskarna ofta mycket effektiva. Chefen litar på att de anställda gör sitt jobb utan " +
      "att bli övervakade hela tiden. I början var det svårt för Amara att vänja sig vid att ta egna " +
      "beslut utan att fråga chefen om allt. Nu, efter ett halvår, känner hon sig mycket bekvämare. Hon " +
      "uppskattar att hennes åsikter räknas, och att balansen mellan jobb och fritid tas på allvar.",
    glossary: {
      arbetskulturen: "the workplace culture",
      hierarkin: "the hierarchy",
      jämlikar: "equals",
      gemenskapen: "the community, the sense of togetherness",
      flexibilitet: "flexibility",
      övervakade: "monitored, supervised",
      "vänja sig vid": "to get used to",
      uppskattar: "appreciates",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["Hur Amara upplever den svenska arbetskulturen", "Hur Amara letar nytt jobb", "Hur Amara semestrar i Sverige"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Hur är hierarkin på Amaras kontor?",
        qEn: "What is the hierarchy like at Amara's office?",
        options: ["Mycket strikt", "Platt", "Den finns inte alls"],
        correct: 1,
      },
      {
        type: "detail",
        q: "Vad gör kollegorna varje dag klockan tio?",
        qEn: "What do the colleagues do every day at ten o'clock?",
        options: ["De har ett möte", "De går hem", "De tar en fikapaus"],
        correct: 2,
      },
      {
        type: "detail",
        q: "Varför jobbar svenskar ofta hemifrån några dagar i veckan?",
        qEn: "Why do Swedes often work from home a few days a week?",
        options: ["Flexibilitet är viktig i arbetskulturen", "Kontoret är stängt", "Chefen jobbar också hemifrån"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad uppskattar Amara efter ett halvår?",
        qEn: "What does Amara appreciate after six months?",
        options: ["Att hon får jobba färre timmar", "Att hennes åsikter räknas", "Att hon får mer lön"],
        correct: 1,
      },
    ],
  },

  {
    id: "b1-health-1",
    title: "Hur sjukvården fungerar",
    titleEn: "How healthcare works",
    level: "B1",
    theme: "health",
    wordCount: 194,
    text:
      "När Yusuf flyttade till Sverige förstod han inte hur sjukvårdssystemet fungerade. I hans hemland " +
      "kunde han gå direkt till en specialist om han kände sig sjuk, men i Sverige måste man oftast börja " +
      "hos en vårdcentral. Första gången han blev sjuk visste han inte vart han skulle vända sig, så han " +
      "ringde 1177, ett nummer där sjuksköterskor ger råd dygnet runt. Sjuksköterskan lyssnade på hans " +
      "symtom och rekommenderade att han skulle boka ett besök hos sin vårdcentral nästa dag. Där " +
      "träffade Yusuf en allmänläkare som undersökte honom noggrant. Läkaren förklarade att om problemet " +
      "var allvarligare skulle hon skriva en remiss till en specialist på sjukhuset. Yusuf blev förvånad " +
      "över att vården var nästan gratis, eftersom skatterna i Sverige finansierar större delen av " +
      "sjukvården. Trots att han ibland tyckte att väntetiderna var långa, kände han sig trygg med att " +
      "alla, oavsett inkomst, har tillgång till samma vård. Efter ett år i Sverige hade Yusuf lärt sig " +
      "systemet bättre. Han visste nu att akutmottagningen bara är till för riktiga nödfall, medan mindre " +
      "allvarliga besvär ska skötas via vårdcentralen. Den här ordningen kändes ovan i början, men nu " +
      "tycker Yusuf att den fungerar bra för de flesta.",
    glossary: {
      sjukvårdssystemet: "the healthcare system",
      vårdcentral: "primary care clinic, health center",
      allmänläkare: "general practitioner",
      remiss: "referral",
      finansierar: "finances, funds",
      väntetiderna: "the waiting times",
      akutmottagningen: "the emergency room",
      nödfall: "emergencies",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["Hur Yusuf lär sig hur svensk sjukvård fungerar", "Hur Yusuf öppnar en egen klinik", "Hur Yusuf blir sjuksköterska"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vart vänder Yusuf sig först när han blir sjuk?",
        qEn: "Where does Yusuf turn first when he gets sick?",
        options: ["Direkt till en specialist", "Till akutmottagningen", "Han ringer 1177"],
        correct: 2,
      },
      {
        type: "detail",
        q: "Vem undersöker Yusuf på vårdcentralen?",
        qEn: "Who examines Yusuf at the health center?",
        options: ["En allmänläkare", "En tandläkare", "En psykolog"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Varför är vården nästan gratis enligt texten?",
        qEn: "Why is care almost free, according to the text?",
        options: ["Sjukhusen får pengar från EU", "Skatterna finansierar sjukvården", "Läkarna jobbar gratis"],
        correct: 1,
      },
      {
        type: "detail",
        q: "Vad är akutmottagningen till för enligt Yusuf?",
        qEn: "What is the emergency room for, according to Yusuf?",
        options: ["Riktiga nödfall", "Alla typer av besök", "Bara barn"],
        correct: 0,
      },
    ],
  },

  {
    id: "b1-environment-1",
    title: "Att leva miljövänligt",
    titleEn: "Living in an environmentally friendly way",
    level: "B1",
    theme: "environment",
    wordCount: 198,
    text:
      "Linda har alltid varit intresserad av miljöfrågor, men sedan hon flyttade till en svensk stad har " +
      "hennes vardag förändrats ännu mer. Varje hushåll måste sortera sitt skräp i flera olika kärl: " +
      "matavfall, plast, papper och glas hamnar i separata påsar. I början tyckte Linda att det var " +
      "krångligt, men nu går det automatiskt. Hon har också märkt att många svenskar väljer att cykla " +
      "eller åka kollektivt istället för att köra bil, särskilt i städerna. Klimatförändringarna " +
      "diskuteras ofta i nyheterna, och regeringen har satt upp mål om att minska utsläppen kraftigt " +
      "fram till år 2045. Linda läste att Sverige är ett av länderna som återvinner mest avfall i hela " +
      "världen, eftersom nästan allt brännbart skräp blir till energi eller fjärrvärme. Trots dessa " +
      "framsteg menar många experter att Sverige fortfarande måste göra mer, särskilt när det gäller " +
      "flygresor och konsumtion. Linda har själv börjat handla second hand-kläder för att minska sin " +
      "miljöpåverkan. Hon tycker att det är viktigt att varje person bidrar, även om de stora besluten " +
      "måste tas av politiker och företag. För Linda känns det meningsfullt att leva i ett land där " +
      "miljötänk är en del av vardagen, även om vägen mot en hållbar framtid fortfarande är lång.",
    glossary: {
      miljöfrågor: "environmental issues",
      sortera: "to sort",
      matavfall: "food waste",
      kollektivt: "by public transport",
      utsläppen: "the emissions",
      återvinner: "recycles",
      miljöpåverkan: "environmental impact",
      hållbar: "sustainable",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["Lindas liv i en miljövänlig svensk stad", "Lindas resa till ett annat land", "Lindas nya jobb på ett kontor"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad måste varje hushåll göra med sitt skräp?",
        qEn: "What must every household do with its trash?",
        options: ["Bränna det själva", "Sortera det i olika kärl", "Lämna det till grannarna"],
        correct: 1,
      },
      {
        type: "detail",
        q: "Vad har regeringen satt upp mål om?",
        qEn: "What has the government set goals about?",
        options: ["Att minska utsläppen fram till 2045", "Att bygga fler vägar", "Att sänka skatterna"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad blir brännbart skräp till i Sverige?",
        qEn: "What does burnable trash become in Sweden?",
        options: ["Nya kläder", "Energi eller fjärrvärme", "Mat till djur"],
        correct: 1,
      },
      {
        type: "detail",
        q: "Vad har Linda själv börjat göra för miljön?",
        qEn: "What has Linda herself started doing for the environment?",
        options: ["Handla second hand-kläder", "Sluta cykla", "Flyga oftare"],
        correct: 0,
      },
    ],
  },

  {
    id: "b1-tradition-1",
    title: "Lagom och svenska traditioner",
    titleEn: "Lagom and Swedish traditions",
    level: "B1",
    theme: "society",
    wordCount: 202,
    text:
      "Många som flyttar till Sverige hör snart ordet \"lagom\", som betyder ungefär \"precis rätt mängd, " +
      "inte för mycket och inte för lite\". Det här ordet säger mycket om den svenska mentaliteten och " +
      "syns även i landets traditioner. På sommaren samlas familjer för att fira midsommar med blommor i " +
      "håret, dans runt en majstång och måltider med sill och nypotatis. Senare på sommaren ordnar många " +
      "en kräftskiva, en fest där man äter kräftor utomhus och bär roliga hattar. En annan viktig del av " +
      "svensk kultur är allemansrätten, som ger alla rätt att vandra, plocka bär och campa i naturen, " +
      "även på privat mark, så länge man visar respekt för naturen och markägaren. Många svenskar " +
      "tillbringar därför mycket tid utomhus, oavsett väder. På hösten firar man Alla helgons dag, då " +
      "familjer besöker kyrkogårdar och tänder ljus för dem som har dött. Eftersom dagarna blir mörkare " +
      "och kallare ju längre hösten går, blir ljusen extra viktiga, både bokstavligt och symboliskt. I " +
      "december firas Lucia, då barn och vuxna går i procession med ljus medan de sjunger traditionella " +
      "sånger. Många nya svenskar tycker att dessa traditioner hjälper dem att förstå den svenska kulturen " +
      "bättre, samtidigt som de skapar en känsla av tillhörighet i sitt nya hemland.",
    glossary: {
      lagom: "just the right amount, not too much, not too little",
      mentaliteten: "the mentality",
      kräftskiva: "crayfish party",
      allemansrätten: "the right of public access (to nature)",
      markägaren: "the landowner",
      kyrkogårdar: "cemeteries",
      procession: "procession",
      tillhörighet: "belonging",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["Svenska traditioner och begreppet lagom", "Svensk politik och ekonomi", "Svensk skolundervisning"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad betyder ordet \"lagom\"?",
        qEn: "What does the word \"lagom\" mean?",
        options: ["Väldigt mycket", "Precis rätt mängd", "Ingenting alls"],
        correct: 1,
      },
      {
        type: "detail",
        q: "Vad äter man på en kräftskiva?",
        qEn: "What do people eat at a crayfish party?",
        options: ["Kräftor", "Köttbullar", "Sill"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad ger allemansrätten alla rätt att göra?",
        qEn: "What does the right of public access allow everyone to do?",
        options: ["Bygga hus var de vill", "Vandra, plocka bär och campa i naturen", "Köra bil var som helst"],
        correct: 1,
      },
      {
        type: "detail",
        q: "Vad gör familjer på Alla helgons dag?",
        qEn: "What do families do on All Saints' Day?",
        options: ["Besöker kyrkogårdar och tänder ljus", "Dansar runt en majstång", "Klär sig som påskkärringar"],
        correct: 0,
      },
    ],
  },

  {
    id: "b1-immigrant-1",
    title: "Att bygga ett liv i ett nytt land",
    titleEn: "Building a life in a new country",
    level: "B1",
    theme: "immigration",
    wordCount: 211,
    text:
      "För tre år sedan lämnade Hana sitt hemland och flyttade till Sverige tillsammans med sin man och " +
      "sina två barn. De första månaderna var svåra, eftersom de inte kunde språket och allting kändes " +
      "nytt och främmande. Hana minns hur ensam hon kände sig de gånger hon inte förstod vad grannarna " +
      "sa, trots att de log vänligt mot henne. Familjen bosatte sig i en mindre stad där kommunen erbjöd " +
      "SFI-kurser för nyanlända. Hana gick på lektioner fyra dagar i veckan, samtidigt som hon tog hand " +
      "om barnen och letade efter ett jobb. Det tog lång tid innan hon kände sig bekväm med att prata " +
      "svenska offentligt, men hennes lärare uppmuntrade henne att våga göra misstag. Så småningom fick " +
      "hon ett extrajobb på ett café, vilket gav henne chansen att öva språket varje dag med kunderna. " +
      "Barnen lärde sig svenska mycket snabbare än Hana, eftersom de gick i skolan tillsammans med andra " +
      "svenska barn. Ibland kände Hana sig stolt över sina barns framsteg men också lite ledsen över att " +
      "hon själv hade det svårare. Trots svårigheterna säger Hana idag att Sverige har blivit deras nya " +
      "hem. Hon har fått nya vänner, både svenskar och andra invandrare, och hon känner att hon sakta men " +
      "säkert bygger ett liv som hon kan vara nöjd med.",
    glossary: {
      främmande: "foreign, unfamiliar",
      "bosatte sig": "settled (down)",
      nyanlända: "newly arrived (immigrants)",
      offentligt: "publicly",
      uppmuntrade: "encouraged",
      extrajobb: "part-time/extra job",
      framsteg: "progress",
      invandrare: "immigrants",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["Hanas resa till att bygga ett nytt liv i Sverige", "Hanas semester i ett nytt land", "Hanas arbete som lärare"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Varför kände Hana sig ensam i början?",
        qEn: "Why did Hana feel lonely in the beginning?",
        options: ["Hon förstod inte vad grannarna sa", "Hon hade inga barn", "Hon ville inte träffa nya människor"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad erbjöd kommunen Hana?",
        qEn: "What did the municipality offer Hana?",
        options: ["Gratis resor", "SFI-kurser för nyanlända", "Ett hus"],
        correct: 1,
      },
      {
        type: "detail",
        q: "Var fick Hana ett extrajobb?",
        qEn: "Where did Hana get a part-time job?",
        options: ["På ett sjukhus", "På ett café", "På en skola"],
        correct: 1,
      },
      {
        type: "detail",
        q: "Vad säger Hana om Sverige idag?",
        qEn: "What does Hana say about Sweden today?",
        options: ["Att det har blivit deras nya hem", "Att hon vill flytta tillbaka", "Att hon ångrar flytten"],
        correct: 0,
      },
    ],
  },
];
