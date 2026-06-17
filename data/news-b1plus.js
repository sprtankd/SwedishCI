/* ============================================================================
   Swedish CI — data/news-b1plus.js
   News articles at B1+ level (~250-320 words). Advanced connectors, abstract
   vocabulary and argumentative structure for SFI D. Paragraphs separated by
   blank lines. Topics: integration, climate policy, education reform, gender
   equality, the digital society.
   ========================================================================== */
(function () {
  var articles = [

    {
      id: "news-b1plus-integration-001",
      title: "Integration kräver insatser från båda håll",
      titleEn: "Integration requires effort from both sides",
      level: "B1+",
      theme: "Samhälle · Society",
      textType: "argumentative",
      source: "Svenska CI Nyheter",
      lead:
        "Hur ska nyanlända bäst komma in i det svenska samhället? Frågan engagerar många, " +
        "och åsikterna går isär.",
      text:
        "Integration är ett av de mest diskuterade ämnena i Sverige i dag. Med integration " +
        "menar man hur personer som har flyttat till landet blir en del av samhället. Det " +
        "handlar om att lära sig språket, få ett arbete och skapa nya kontakter. Men vem bär " +
        "egentligen ansvaret för att integrationen ska lyckas?\n\n" +
        "Vissa menar att ansvaret framför allt ligger hos den enskilda individen. Enligt " +
        "detta synsätt måste den som kommer till Sverige själv anstränga sig, lära sig " +
        "svenska och anpassa sig till nya regler och vanor. Andra hävdar däremot att " +
        "samhället har ett stort ansvar. De påpekar att det är svårt att få ett jobb om man " +
        "inte får en chans, även om man är välutbildad. Dessutom kan diskriminering göra det " +
        "ännu svårare.\n\n" +
        "Sanningen ligger förmodligen någonstans mitt emellan. Å ena sidan är det viktigt " +
        "att varje person tar eget ansvar och vill bli en del av samhället. Å andra sidan " +
        "måste samhället erbjuda verktyg som språkkurser, praktikplatser och stöd. Forskning " +
        "visar att integration går snabbare när nyanlända tidigt får kontakt med " +
        "arbetslivet.\n\n" +
        "Många kommuner arbetar i dag med olika projekt för att underlätta. Till exempel " +
        "kopplar man ihop nyanlända med en svensk fadder som hjälper till med vardagen. " +
        "Sådana initiativ skapar inte bara kontakter, utan minskar också fördomar på båda " +
        "sidor. Slutsatsen är tydlig: integration är inte något som händer av sig själv, " +
        "utan kräver vilja och insatser från både individen och samhället.",
      glossary: {
        "nyanlända": "newly arrived (immigrants)",
        "engagerar": "engages",
        "åsikterna går isär": "opinions differ",
        "ämnena": "the topics",
        "bär ansvaret": "bears the responsibility",
        "lyckas": "succeed",
        "enskilda individen": "the individual",
        "synsätt": "view / perspective",
        "anstränga sig": "make an effort",
        "anpassa sig": "adapt",
        "hävdar": "claim",
        "påpekar": "point out",
        "välutbildad": "well-educated",
        "diskriminering": "discrimination",
        "förmodligen": "probably",
        "mitt emellan": "in between",
        "å ena sidan": "on the one hand",
        "å andra sidan": "on the other hand",
        "erbjuda": "offer",
        "verktyg": "tools",
        "praktikplatser": "work placements",
        "underlätta": "make easier",
        "fadder": "mentor / sponsor",
        "fördomar": "prejudices",
        "slutsatsen": "the conclusion",
        "vilja": "will / willingness"
      },
      questions: [
        { type: "gist", q: "Vad är textens huvudfråga?", qEn: "What is the text's main question?",
          options: ["Vem som bär ansvaret för integrationen", "Hur man lär sig svenska", "Var nyanlända ska bo"], correct: 0,
          explain: "„Men vem bär egentligen ansvaret för att integrationen ska lyckas?“" },
        { type: "detail", q: "Vad menar de som tycker att individen har ansvaret?", qEn: "What do those who think the individual is responsible argue?",
          options: ["Att man själv måste anstränga sig och anpassa sig", "Att samhället ska göra allt", "Att språket inte spelar roll"], correct: 0,
          explain: "„…måste den som kommer till Sverige själv anstränga sig … och anpassa sig.“" },
        { type: "detail", q: "Vad påpekar de som tycker att samhället har ansvar?", qEn: "What do those who think society is responsible point out?",
          options: ["Att det är svårt att få jobb utan en chans", "Att alla redan har jobb", "Att språket är oviktigt"], correct: 0,
          explain: "„…det är svårt att få ett jobb om man inte får en chans, även om man är välutbildad.“" },
        { type: "detail", q: "Vad visar forskningen?", qEn: "What does the research show?",
          options: ["Integration går snabbare med tidig kontakt med arbetslivet", "Att integration är omöjlig", "Att jobb inte hjälper"], correct: 0,
          explain: "„Forskning visar att integration går snabbare när nyanlända tidigt får kontakt med arbetslivet.“" },
        { type: "detail", q: "Vad gör en fadder?", qEn: "What does a 'fadder' (mentor) do?",
          options: ["Hjälper en nyanländ med vardagen", "Bestämmer var man ska bo", "Ger pengar"], correct: 0,
          explain: "„…en svensk fadder som hjälper till med vardagen.“" },
        { type: "gist", q: "Vad är textens slutsats?", qEn: "What is the text's conclusion?",
          options: ["Integration kräver insatser från både individ och samhälle", "Bara individen är ansvarig", "Bara samhället är ansvarigt"], correct: 0,
          explain: "„…kräver vilja och insatser från både individen och samhället.“" }
      ]
    },

    {
      id: "news-b1plus-climate-002",
      title: "Vem ska betala för klimatomställningen?",
      titleEn: "Who should pay for the climate transition?",
      level: "B1+",
      theme: "Miljö · Environment",
      textType: "argumentative",
      source: "Svenska CI Nyheter",
      lead:
        "Sverige vill bli klimatneutralt, men de gröna förändringarna kostar pengar. Frågan " +
        "är hur kostnaderna ska fördelas.",
      text:
        "Att ställa om samhället för att minska utsläppen är en av vår tids största " +
        "utmaningar. Sverige har som mål att inte släppa ut mer växthusgaser än vad naturen " +
        "kan ta upp. För att nå dit krävs stora förändringar inom transport, industri och " +
        "energi. Men sådana förändringar är dyra, och därför uppstår en svår fråga: vem ska " +
        "betala?\n\n" +
        "En vanlig lösning är att höja skatten på sådant som skadar miljön, till exempel " +
        "bensin och flygresor. Tanken är att den som förorenar också ska stå för kostnaden. " +
        "Kritiker menar dock att detta drabbar vanliga människor hårdast, särskilt de som " +
        "bor på landsbygden och är beroende av bilen. För dem finns det sällan något bra " +
        "alternativ till att köra.\n\n" +
        "Andra anser att de stora företagen borde ta ett större ansvar, eftersom de står " +
        "för en betydande del av utsläppen. Samtidigt varnar vissa ekonomer för att alltför " +
        "höga avgifter kan skada jobben och konkurrenskraften.\n\n" +
        "Det finns alltså inga enkla svar. De flesta är överens om att något måste göras, " +
        "men oeniga om vägen dit. Kanske ligger lösningen i en kombination: rättvisa " +
        "skatter, stöd till dem som har det svårt, och tydliga regler för industrin. " +
        "Oavsett vilken väg politikerna väljer, är en sak säker. Ju längre vi väntar, desto " +
        "dyrare och svårare blir omställningen.",
      glossary: {
        "klimatomställningen": "the climate transition",
        "klimatneutralt": "climate neutral",
        "fördelas": "be distributed",
        "ställa om": "to transform / convert",
        "utsläppen": "the emissions",
        "utmaningar": "challenges",
        "växthusgaser": "greenhouse gases",
        "uppstår": "arises",
        "höja skatten": "raise the tax",
        "förorenar": "pollutes",
        "stå för": "to account for / cover",
        "kritiker": "critics",
        "drabbar": "affects / hits",
        "landsbygden": "the countryside",
        "beroende av": "dependent on",
        "alternativ": "alternative",
        "betydande": "significant",
        "ekonomer": "economists",
        "avgifter": "fees / charges",
        "konkurrenskraften": "the competitiveness",
        "överens": "in agreement",
        "oeniga": "in disagreement",
        "rättvisa": "fair",
        "omställningen": "the transition",
        "desto": "the (more)"
      },
      questions: [
        { type: "gist", q: "Vad handlar texten om?", qEn: "What is the text about?",
          options: ["Vem som ska betala för klimatomställningen", "Hur man återvinner sopor", "Vädret i framtiden"], correct: 0,
          explain: "Texten diskuterar hur kostnaderna för klimatomställningen ska fördelas." },
        { type: "detail", q: "Vad är ett vanligt sätt att minska utsläpp?", qEn: "What is a common way to reduce emissions?",
          options: ["Att höja skatten på sådant som skadar miljön", "Att förbjuda all el", "Att sänka alla skatter"], correct: 0,
          explain: "„En vanlig lösning är att höja skatten på sådant som skadar miljön…“" },
        { type: "detail", q: "Vilken kritik finns mot höjda miljöskatter?", qEn: "What criticism is there of higher environmental taxes?",
          options: ["De drabbar vanliga människor, särskilt på landsbygden", "De är för låga", "Ingen betalar dem"], correct: 0,
          explain: "„…detta drabbar vanliga människor hårdast, särskilt de som bor på landsbygden.“" },
        { type: "detail", q: "Vad tycker vissa om de stora företagen?", qEn: "What do some think about large companies?",
          options: ["Att de borde ta ett större ansvar", "Att de inte påverkar miljön", "Att de ska slippa betala"], correct: 0,
          explain: "„…de stora företagen borde ta ett större ansvar, eftersom de står för en betydande del av utsläppen.“" },
        { type: "detail", q: "Vad varnar vissa ekonomer för?", qEn: "What do some economists warn about?",
          options: ["Att för höga avgifter kan skada jobben", "Att skatter aldrig fungerar", "Att företag är oviktiga"], correct: 0,
          explain: "„…alltför höga avgifter kan skada jobben och konkurrenskraften.“" },
        { type: "detail", q: "Vad blir följden om man väntar enligt texten?", qEn: "What is the consequence of waiting, according to the text?",
          options: ["Omställningen blir dyrare och svårare", "Inget händer", "Problemet löser sig självt"], correct: 0,
          explain: "„Ju längre vi väntar, desto dyrare och svårare blir omställningen.“" }
      ]
    },

    {
      id: "news-b1plus-education-003",
      title: "Skolan ska bli mer likvärdig",
      titleEn: "Making schools more equal",
      level: "B1+",
      theme: "Utbildning · Education",
      textType: "informational",
      source: "Svenska CI Nyheter",
      lead:
        "Alla elever ska ha samma chans att lyckas, oavsett var de bor. Nu diskuteras flera " +
        "förändringar i den svenska skolan.",
      text:
        "Den svenska skolan ska enligt lagen vara likvärdig. Det betyder att alla elever ska " +
        "få en utbildning av god kvalitet, oavsett bakgrund eller bostadsort. Under de " +
        "senaste åren har dock flera rapporter visat att skillnaderna mellan skolor har " +
        "ökat. På vissa skolor når nästan alla elever målen, medan andra skolor kämpar med " +
        "dåliga resultat.\n\n" +
        "Det finns flera orsaker till detta. En viktig faktor är att elever med liknande " +
        "bakgrund ofta hamnar på samma skola. När resursstarka familjer väljer bort vissa " +
        "skolor, blir skillnaderna ännu större. Dessutom råder det brist på behöriga lärare, " +
        "särskilt i områden där behoven är som störst.\n\n" +
        "För att vända utvecklingen föreslår politiker och experter olika åtgärder. En idé " +
        "är att fördela pengar efter behov, så att skolor med många elever som behöver extra " +
        "stöd får mer resurser. En annan förändring handlar om hur elever fördelas mellan " +
        "skolor, för att minska segregationen. Många betonar också vikten av att locka " +
        "skickliga lärare till de skolor som behöver dem mest, till exempel genom högre " +
        "lön.\n\n" +
        "Förändringar i skolan tar tid och väcker ofta debatt. Föräldrar, lärare och " +
        "politiker är inte alltid överens om vad som är bäst. Ändå är de flesta eniga om ett " +
        "mål: att varje barn, oavsett var det växer upp, ska få verktygen för att klara sig " +
        "i framtiden.",
      glossary: {
        "likvärdig": "equal / equitable",
        "elever": "pupils",
        "oavsett": "regardless of",
        "bakgrund": "background",
        "bostadsort": "place of residence",
        "rapporter": "reports",
        "skillnaderna": "the differences",
        "når målen": "reach the goals",
        "orsaker": "causes",
        "faktor": "factor",
        "hamnar": "end up",
        "resursstarka": "well-resourced",
        "väljer bort": "opt out of",
        "råder": "prevails / there is",
        "brist": "shortage",
        "behöriga": "qualified",
        "behoven": "the needs",
        "åtgärder": "measures",
        "fördela": "distribute",
        "segregationen": "the segregation",
        "betonar": "emphasise",
        "vikten": "the importance",
        "skickliga": "skilled",
        "väcker debatt": "sparks debate",
        "eniga": "in agreement"
      },
      questions: [
        { type: "gist", q: "Vad handlar artikeln om?", qEn: "What is the article about?",
          options: ["Att göra skolan mer likvärdig", "Hur man bygger skolor", "Elevernas betyg i matematik"], correct: 0,
          explain: "Artikeln handlar om hur den svenska skolan ska bli mer likvärdig." },
        { type: "detail", q: "Vad betyder det att skolan ska vara likvärdig?", qEn: "What does it mean that schools should be equitable?",
          options: ["Alla elever ska få god utbildning oavsett bakgrund", "Alla skolor ska se likadana ut", "Alla elever ska få samma betyg"], correct: 0,
          explain: "„…alla elever ska få en utbildning av god kvalitet, oavsett bakgrund eller bostadsort.“" },
        { type: "detail", q: "Vad har flera rapporter visat?", qEn: "What have several reports shown?",
          options: ["Skillnaderna mellan skolor har ökat", "Alla skolor är lika bra", "Färre elever går i skolan"], correct: 0,
          explain: "„…flera rapporter visat att skillnaderna mellan skolor har ökat.“" },
        { type: "detail", q: "Vilken åtgärd föreslås?", qEn: "What measure is proposed?",
          options: ["Att fördela pengar efter behov", "Att stänga svaga skolor", "Att ta bort alla prov"], correct: 0,
          explain: "„En idé är att fördela pengar efter behov…“" },
        { type: "detail", q: "Hur vill man locka skickliga lärare?", qEn: "How does one want to attract skilled teachers?",
          options: ["Bland annat genom högre lön", "Genom kortare arbetsdagar", "Genom att ta bort läxor"], correct: 0,
          explain: "„…locka skickliga lärare … till exempel genom högre lön.“" },
        { type: "detail", q: "Vad är de flesta eniga om?", qEn: "What do most people agree on?",
          options: ["Att varje barn ska få verktyg för framtiden", "Att skolan är perfekt", "Att inget behöver ändras"], correct: 0,
          explain: "„…att varje barn … ska få verktygen för att klara sig i framtiden.“" }
      ]
    },

    {
      id: "news-b1plus-equality-004",
      title: "Jämställdhet – på väg men inte i mål",
      titleEn: "Gender equality — progress but not there yet",
      level: "B1+",
      theme: "Samhälle · Society",
      textType: "argumentative",
      source: "Svenska CI Nyheter",
      lead:
        "Sverige räknas som ett av världens mest jämställda länder. Men betyder det att " +
        "arbetet är klart?",
      text:
        "Jämställdhet betyder att kvinnor och män ska ha samma rättigheter, möjligheter och " +
        "skyldigheter. På många sätt har Sverige kommit långt. Kvinnor och män har lika " +
        "rösträtt, flickor och pojkar går i samma skolor, och båda föräldrarna har rätt till " +
        "föräldraledighet. Ändå finns det fortfarande tydliga skillnader.\n\n" +
        "Ett exempel är lönen. I genomsnitt tjänar kvinnor mindre än män, även när de utför " +
        "liknande arbete. En orsak är att kvinnor och män ofta arbetar inom olika yrken, och " +
        "att de yrken där många kvinnor arbetar tyvärr värderas lägre. Dessutom tar kvinnor " +
        "fortfarande ut en större del av föräldraledigheten och utför mer av det obetalda " +
        "arbetet hemma.\n\n" +
        "Vissa hävdar att samhället inte borde lägga sig i hur familjer väljer att leva. Var " +
        "och en ska få bestämma själv, menar de. Andra påpekar däremot att fria val inte " +
        "alltid är så fria, eftersom gamla förväntningar och normer påverkar oss mer än vi " +
        "tror. Om kvinnor förväntas ta huvudansvar för barnen, blir det svårare för dem att " +
        "göra karriär.\n\n" +
        "För att komma vidare behövs både förändrade attityder och politiska beslut. Det kan " +
        "handla om att uppmuntra pappor att vara hemma med barnen eller att höja lönerna i " +
        "kvinnodominerade yrken. Jämställdhet gynnar inte bara kvinnor, utan hela samhället. " +
        "Därför är det en fråga som angår oss alla.",
      glossary: {
        "jämställdhet": "gender equality",
        "rättigheter": "rights",
        "skyldigheter": "obligations",
        "rösträtt": "the right to vote",
        "föräldraledighet": "parental leave",
        "i genomsnitt": "on average",
        "tjänar": "earn",
        "utför": "perform / carry out",
        "yrken": "professions",
        "värderas": "are valued",
        "obetalda": "unpaid",
        "lägga sig i": "to interfere",
        "var och en": "each person",
        "förväntningar": "expectations",
        "normer": "norms",
        "påverkar": "affect",
        "huvudansvar": "main responsibility",
        "göra karriär": "build a career",
        "attityder": "attitudes",
        "uppmuntra": "encourage",
        "kvinnodominerade": "female-dominated",
        "gynnar": "benefits",
        "angår": "concerns"
      },
      questions: [
        { type: "gist", q: "Vad är textens huvudbudskap?", qEn: "What is the text's main message?",
          options: ["Sverige har kommit långt men jämställdheten är inte klar", "Sverige är helt jämställt", "Jämställdhet är onödigt"], correct: 0,
          explain: "Texten visar framsteg men betonar att arbetet inte är klart." },
        { type: "detail", q: "Vad är ett exempel på en kvarvarande skillnad?", qEn: "What is an example of a remaining difference?",
          options: ["Kvinnor tjänar i genomsnitt mindre än män", "Män får inte rösta", "Flickor går i andra skolor"], correct: 0,
          explain: "„I genomsnitt tjänar kvinnor mindre än män…“" },
        { type: "detail", q: "Varför tjänar kvinnor ofta mindre?", qEn: "Why do women often earn less?",
          options: ["De arbetar i yrken som värderas lägre", "De arbetar mindre", "De är sämre utbildade"], correct: 0,
          explain: "„…de yrken där många kvinnor arbetar tyvärr värderas lägre.“" },
        { type: "detail", q: "Vad säger de som tycker att samhället inte ska lägga sig i?", qEn: "What do those who think society shouldn't interfere say?",
          options: ["Att var och en ska få bestämma själv", "Att kvinnor ska stanna hemma", "Att lönerna ska sänkas"], correct: 0,
          explain: "„Var och en ska få bestämma själv, menar de.“" },
        { type: "detail", q: "Vad menar de som säger att fria val inte alltid är fria?", qEn: "What do those who say free choices aren't always free mean?",
          options: ["Gamla normer och förväntningar påverkar oss", "Att ingen får välja", "Att val inte spelar roll"], correct: 0,
          explain: "„…gamla förväntningar och normer påverkar oss mer än vi tror.“" },
        { type: "detail", q: "Vem gynnas av jämställdhet enligt texten?", qEn: "Who benefits from gender equality, according to the text?",
          options: ["Hela samhället", "Bara kvinnor", "Bara män"], correct: 0,
          explain: "„Jämställdhet gynnar inte bara kvinnor, utan hela samhället.“" }
      ]
    },

    {
      id: "news-b1plus-digital-005",
      title: "Det digitala samhället – för alla?",
      titleEn: "The digital society — for everyone?",
      level: "B1+",
      theme: "Teknik · Technology",
      textType: "informational",
      source: "Svenska CI Nyheter",
      lead:
        "Allt fler tjänster finns bara på nätet. Det gör livet enklare för många, men alla " +
        "hänger inte med.",
      text:
        "Sverige är ett av de mest digitaliserade länderna i världen. I dag sköter de flesta " +
        "sina bankärenden, bokar läkartider och kontaktar myndigheter via internet. För den " +
        "som är van vid tekniken innebär detta stora fördelar. Man slipper köa, kan göra " +
        "saker när som helst på dygnet och får ofta svar snabbare än förr.\n\n" +
        "Men utvecklingen har en baksida. Alla har inte tillgång till en dator eller en " +
        "smart telefon, och alla kan inte heller använda dem. Särskilt äldre personer och " +
        "vissa nyanlända riskerar att hamna utanför. När en tjänst bara finns digitalt kan " +
        "det bli svårt att klara vardagen utan hjälp. Detta brukar kallas digitalt " +
        "utanförskap.\n\n" +
        "För att motverka problemet erbjuder bibliotek och olika organisationer kurser i hur " +
        "man använder dator och mobil. Där kan man lära sig att till exempel betala räkningar " +
        "eller logga in hos myndigheter på ett säkert sätt. Samtidigt arbetar staten för att " +
        "digitala tjänster ska bli enklare att förstå och använda för alla.\n\n" +
        "Det är tydligt att digitaliseringen inte kommer att avstanna. Tvärtom kommer ännu " +
        "fler tjänster att flytta ut på nätet. Därför är det viktigt att samhället ser till " +
        "att ingen lämnas efter. Ett modernt och digitalt samhälle bör vara till för alla, " +
        "inte bara för dem som redan behärskar tekniken.",
      glossary: {
        "digitaliserade": "digitalised",
        "sköter": "handle / manage",
        "bankärenden": "banking matters",
        "bokar": "book",
        "myndigheter": "authorities",
        "van vid": "used to",
        "innebär": "means",
        "slipper köa": "avoid queueing",
        "när som helst": "anytime",
        "dygnet": "the day (24 hours)",
        "baksida": "downside",
        "tillgång": "access",
        "riskerar": "risk",
        "hamna utanför": "be left out",
        "utanförskap": "exclusion",
        "motverka": "counteract",
        "erbjuder": "offer",
        "räkningar": "bills",
        "logga in": "log in",
        "säkert": "safely",
        "avstanna": "to stop / halt",
        "tvärtom": "on the contrary",
        "lämnas efter": "be left behind",
        "behärskar": "master"
      },
      questions: [
        { type: "gist", q: "Vad handlar texten om?", qEn: "What is the text about?",
          options: ["Att alla inte hänger med i digitaliseringen", "Hur man bygger datorer", "Bankernas vinster"], correct: 0,
          explain: "Texten handlar om fördelar och baksidor med ett digitalt samhälle." },
        { type: "detail", q: "Vad gör de flesta via internet i dag?", qEn: "What do most people do via the internet today?",
          options: ["Bankärenden, bokar läkartider och kontaktar myndigheter", "Bara spelar spel", "Inget viktigt"], correct: 0,
          explain: "„…sköter de flesta sina bankärenden, bokar läkartider och kontaktar myndigheter via internet.“" },
        { type: "detail", q: "Vad är en fördel med digitala tjänster?", qEn: "What is an advantage of digital services?",
          options: ["Man slipper köa och får snabbare svar", "De är alltid gratis", "De kräver ingen teknik"], correct: 0,
          explain: "„Man slipper köa, kan göra saker när som helst … och får ofta svar snabbare än förr.“" },
        { type: "detail", q: "Vad menas med digitalt utanförskap?", qEn: "What is meant by digital exclusion?",
          options: ["När man hamnar utanför för att man inte kan använda tekniken", "Att internet är trasigt", "Att tjänster är dyra"], correct: 0,
          explain: "„…riskerar att hamna utanför … Detta brukar kallas digitalt utanförskap.“" },
        { type: "detail", q: "Vad gör bibliotek för att hjälpa?", qEn: "What do libraries do to help?",
          options: ["Erbjuder kurser i att använda dator och mobil", "Stänger sina lokaler", "Tar bort datorer"], correct: 0,
          explain: "„…erbjuder bibliotek och olika organisationer kurser i hur man använder dator och mobil.“" },
        { type: "gist", q: "Vad är textens slutsats?", qEn: "What is the text's conclusion?",
          options: ["Ett digitalt samhälle bör vara till för alla", "Bara unga behöver teknik", "Digitaliseringen kommer att avstanna"], correct: 0,
          explain: "„Ett modernt och digitalt samhälle bör vara till för alla…“" }
      ]
    }

  ];

  articles.forEach(function (a) {
    a.wordCount = ((a.lead + " " + a.text).match(/[A-Za-zÅÄÖåäö]+/g) || []).length;
  });
  window.SvCI_NEWS = (window.SvCI_NEWS || []).concat(articles);
})();
