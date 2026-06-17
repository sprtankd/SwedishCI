/* ============================================================================
   Swedish CI — data/news-b1.js
   Simplified news-style articles at B1 level (informational / instructional).
   Non-fiction register for SFI D reading practice. Each article has a headline,
   a lead paragraph, a body, a (fictional) source, a text-type tag, a glossary
   and comprehension questions.
   Registers into window.SvCI_NEWS so the News Reader can group by level.
   ========================================================================== */
(function () {
  var articles = [

    {
      id: "news-b1-weather-001",
      title: "Varmare väder väntar i hela landet",
      titleEn: "Warmer weather ahead across the country",
      level: "B1",
      theme: "Väder · Weather",
      textType: "informational",
      source: "Svenska CI Nyheter",
      lead:
        "Efter en kall och regnig vecka ser det äntligen ut att bli soligt. " +
        "Meteorologerna lovar varmare temperaturer i helgen.",
      text:
        "Under den senaste veckan har stora delar av Sverige haft grått och blåsigt " +
        "väder. Många har längtat efter solen. Nu kommer äntligen goda nyheter från SMHI, " +
        "Sveriges meteorologiska institut. Enligt prognosen vänder vädret redan på fredag. " +
        "I söder kan temperaturen stiga till över tjugo grader, medan det i norr blir något " +
        "svalare. Meteorologen Karin Lund förklarar att ett högtryck är på väg in över " +
        "landet. „Det betyder mindre moln och mer sol“, säger hon. Hon påminner samtidigt " +
        "om att nätterna fortfarande kan vara kalla. Det varmare vädret väntas hålla i sig " +
        "till mitten av nästa vecka. Många passar på att planera utflykter och grillkvällar. " +
        "Räddningstjänsten varnar dock för att det kan bli torrt i skog och mark. Därför " +
        "uppmanar de alla att vara försiktiga med eld utomhus.",
      glossary: {
        "längtat efter": "longed for",
        "prognosen": "the forecast",
        "vänder": "turns / changes",
        "stiga": "rise",
        "grader": "degrees",
        "svalare": "cooler",
        "högtryck": "high pressure",
        "moln": "clouds",
        "påminner": "reminds",
        "hålla i sig": "to last",
        "utflykter": "excursions",
        "grillkvällar": "barbecue evenings",
        "räddningstjänsten": "the rescue service",
        "varnar": "warns",
        "torrt": "dry",
        "uppmanar": "urges",
        "försiktiga": "careful",
        "eld": "fire"
      },
      questions: [
        { type: "gist", q: "Vad handlar nyheten om?", qEn: "What is the news about?",
          options: ["Att vädret ska bli varmare", "En kraftig storm", "Ett nytt museum"], correct: 0,
          explain: "Nyheten handlar om att vädret vänder och blir varmare och soligare." },
        { type: "detail", q: "När väntas vädret vända?", qEn: "When is the weather expected to change?",
          options: ["På fredag", "På måndag", "Om en månad"], correct: 0,
          explain: "„Enligt prognosen vänder vädret redan på fredag.“" },
        { type: "detail", q: "Varför blir det varmare enligt meteorologen?", qEn: "Why is it getting warmer, according to the meteorologist?",
          options: ["Ett högtryck är på väg in", "Det är redan sommar", "Havet är ovanligt varmt"], correct: 0,
          explain: "„…ett högtryck är på väg in över landet.“" },
        { type: "detail", q: "Vad varnar räddningstjänsten för?", qEn: "What does the rescue service warn about?",
          options: ["Att det kan bli torrt med risk för eld", "Översvämningar", "Halka på vägarna"], correct: 0,
          explain: "„Räddningstjänsten varnar … för att det kan bli torrt i skog och mark.“" },
        { type: "detail", q: "Hur blir vädret i norr jämfört med söder?", qEn: "How is the weather in the north compared with the south?",
          options: ["Något svalare", "Mycket varmare", "Mer regnigt"], correct: 0,
          explain: "„…medan det i norr blir något svalare.“" }
      ]
    },

    {
      id: "news-b1-event-002",
      title: "Stadsfesten lockade tusentals besökare",
      titleEn: "City festival drew thousands of visitors",
      level: "B1",
      theme: "Samhälle · Society",
      textType: "informational",
      source: "Svenska CI Nyheter",
      lead:
        "I helgen fylldes stadens centrum av musik, mat och glada människor. Den årliga " +
        "stadsfesten blev en stor succé.",
      text:
        "Varje sommar ordnar kommunen en stadsfest i centrum. I år kom fler besökare än " +
        "någonsin tidigare. Redan på fredagskvällen var torget fullt av folk. På scenen " +
        "uppträdde flera kända artister, och publiken sjöng med i de mest populära låtarna. " +
        "Runt omkring fanns många stånd där man kunde köpa mat från hela världen. Det fanns " +
        "också aktiviteter för barn, till exempel ansiktsmålning och en liten karusell. Anna " +
        "Berg, som är ansvarig för festen, är mycket nöjd. „Det är fantastiskt att se så " +
        "många människor mötas och ha roligt tillsammans“, säger hon. Festen är gratis, " +
        "eftersom kommunen vill att alla ska kunna delta, oavsett inkomst. Många frivilliga " +
        "hjälper till med att ordna allt. Tack vare dem kan festen bli av varje år. Nästa år " +
        "firar stadsfesten tjugo år, och planeringen har redan börjat.",
      glossary: {
        "lockade": "attracted",
        "besökare": "visitors",
        "årliga": "annual",
        "succé": "success",
        "ordnar": "arranges",
        "kommunen": "the municipality",
        "torget": "the square",
        "uppträdde": "performed",
        "publiken": "the audience",
        "låtarna": "the songs",
        "stånd": "stalls",
        "aktiviteter": "activities",
        "ansiktsmålning": "face painting",
        "ansvarig": "responsible / in charge",
        "mötas": "to meet",
        "delta": "take part",
        "inkomst": "income",
        "frivilliga": "volunteers",
        "tack vare": "thanks to",
        "planeringen": "the planning"
      },
      questions: [
        { type: "gist", q: "Vad handlar artikeln om?", qEn: "What is the article about?",
          options: ["En stadsfest i centrum", "En idrottstävling", "Ett politiskt möte"], correct: 0,
          explain: "Artikeln rapporterar om den årliga stadsfesten." },
        { type: "detail", q: "Hur många besökare kom i år?", qEn: "How many visitors came this year?",
          options: ["Fler än någonsin tidigare", "Färre än vanligt", "Exakt tusen"], correct: 0,
          explain: "„I år kom fler besökare än någonsin tidigare.“" },
        { type: "detail", q: "Varför är festen gratis?", qEn: "Why is the festival free?",
          options: ["Kommunen vill att alla ska kunna delta", "Ingen vill betala", "Artisterna kräver det"], correct: 0,
          explain: "„…eftersom kommunen vill att alla ska kunna delta, oavsett inkomst.“" },
        { type: "detail", q: "Vem hjälper till att ordna festen?", qEn: "Who helps organise the festival?",
          options: ["Många frivilliga", "Bara politiker", "Endast artisterna"], correct: 0,
          explain: "„Många frivilliga hjälper till med att ordna allt.“" },
        { type: "detail", q: "Vad ska hända nästa år?", qEn: "What will happen next year?",
          options: ["Festen firar tjugo år", "Festen läggs ner", "Festen flyttar till en annan stad"], correct: 0,
          explain: "„Nästa år firar stadsfesten tjugo år…“" }
      ]
    },

    {
      id: "news-b1-jobs-003",
      title: "Fler jobb inom vården söker personal",
      titleEn: "Healthcare sector is looking for more staff",
      level: "B1",
      theme: "Arbete · Work",
      textType: "informational",
      source: "Svenska CI Nyheter",
      lead:
        "Arbetsmarknaden förändras snabbt. Just nu finns det särskilt många lediga jobb " +
        "inom vård och omsorg.",
      text:
        "Att hitta rätt jobb kan vara svårt, men inom vissa branscher är behovet av " +
        "personal stort. Enligt Arbetsförmedlingen saknas det i dag tusentals anställda inom " +
        "vård och omsorg. Befolkningen blir allt äldre, och därför behövs fler som kan " +
        "arbeta på sjukhus och äldreboenden. Samtidigt finns det brist på lärare och " +
        "personal inom tekniska yrken. För den som är arbetslös kan det vara en bra idé att " +
        "utbilda sig inom ett av dessa områden. Många utbildningar är korta och leder snabbt " +
        "till jobb. Det finns dessutom möjlighet att studera samtidigt som man arbetar. " +
        "Experter menar att utbildning är nyckeln till en trygg framtid på arbetsmarknaden. " +
        "„Den som vågar lära sig nytt har goda chanser“, säger en rådgivare på " +
        "Arbetsförmedlingen. Hon tipsar om att ta kontakt med en studievägledare för att få " +
        "hjälp att välja rätt.",
      glossary: {
        "arbetsmarknaden": "the labour market",
        "förändras": "changes",
        "lediga jobb": "job vacancies",
        "vård och omsorg": "health and social care",
        "branscher": "industries / sectors",
        "behovet": "the need",
        "Arbetsförmedlingen": "the Public Employment Service",
        "saknas": "are lacking",
        "befolkningen": "the population",
        "äldreboenden": "care homes",
        "brist": "shortage",
        "yrken": "professions",
        "arbetslös": "unemployed",
        "utbilda sig": "to train / get an education",
        "områden": "areas / fields",
        "möjlighet": "opportunity",
        "experter": "experts",
        "nyckeln": "the key",
        "trygg": "secure",
        "vågar": "dares",
        "rådgivare": "adviser",
        "studievägledare": "study counsellor"
      },
      questions: [
        { type: "gist", q: "Vad handlar artikeln om?", qEn: "What is the article about?",
          options: ["Var det finns många lediga jobb", "Hur man startar ett företag", "En ny lag om löner"], correct: 0,
          explain: "Artikeln handlar om branscher som behöver mer personal, särskilt vården." },
        { type: "detail", q: "Inom vilket område finns det många jobb?", qEn: "In which field are there many jobs?",
          options: ["Vård och omsorg", "Turism", "Bilindustrin"], correct: 0,
          explain: "„…saknas det i dag tusentals anställda inom vård och omsorg.“" },
        { type: "detail", q: "Varför behövs fler inom vården?", qEn: "Why are more people needed in healthcare?",
          options: ["Befolkningen blir äldre", "Lönerna har höjts", "Folk slutar studera"], correct: 0,
          explain: "„Befolkningen blir allt äldre, och därför behövs fler…“" },
        { type: "detail", q: "Vad menar experterna är nyckeln till en trygg framtid?", qEn: "What do the experts say is the key to a secure future?",
          options: ["Utbildning", "Att flytta utomlands", "Att byta jobb ofta"], correct: 0,
          explain: "„…utbildning är nyckeln till en trygg framtid på arbetsmarknaden.“" },
        { type: "detail", q: "Vad tipsar rådgivaren om?", qEn: "What does the adviser recommend?",
          options: ["Att kontakta en studievägledare", "Att vänta hemma", "Att starta eget"], correct: 0,
          explain: "„Hon tipsar om att ta kontakt med en studievägledare…“" }
      ]
    },

    {
      id: "news-b1-health-004",
      title: "Små vanor som gör dig friskare",
      titleEn: "Small habits that make you healthier",
      level: "B1",
      theme: "Hälsa · Health",
      textType: "instructional",
      source: "Svenska CI Nyheter",
      lead:
        "Du behöver inte göra stora förändringar för att må bättre. Här är några enkla råd " +
        "som kan förbättra din hälsa.",
      text:
        "Många tror att man måste träna hårt varje dag för att hålla sig frisk. Men i själva " +
        "verket spelar de små vanorna stor roll. Det första rådet är att röra på sig " +
        "regelbundet. Ta trapporna i stället för hissen, eller ta en kort promenad efter " +
        "lunch. För det andra är det viktigt att äta varierat. Försök att äta mycket " +
        "grönsaker, frukt och fullkorn, och drick vatten i stället för läsk. Sömnen är också " +
        "avgörande. De flesta vuxna behöver mellan sju och åtta timmars sömn varje natt. " +
        "Stäng av mobilen en stund innan du går och lägger dig, så somnar du lättare. Glöm " +
        "inte heller bort att ta pauser och slappna av. Stress under lång tid är skadligt " +
        "för kroppen. Slutligen är det bra att träffa andra människor, eftersom goda " +
        "relationer påverkar hälsan positivt. Om du följer dessa råd kommer du troligen att " +
        "känna dig piggare och gladare.",
      glossary: {
        "vanor": "habits",
        "friskare": "healthier",
        "förändringar": "changes",
        "må bättre": "feel better",
        "förbättra": "improve",
        "i själva verket": "in fact",
        "röra på sig": "to be active / move",
        "regelbundet": "regularly",
        "trapporna": "the stairs",
        "hissen": "the lift",
        "varierat": "varied",
        "fullkorn": "whole grain",
        "läsk": "soft drink",
        "sömnen": "sleep",
        "avgörande": "crucial",
        "vuxna": "adults",
        "slappna av": "relax",
        "skadligt": "harmful",
        "påverkar": "affects",
        "piggare": "more energetic"
      },
      questions: [
        { type: "gist", q: "Vad är syftet med texten?", qEn: "What is the purpose of the text?",
          options: ["Att ge råd för bättre hälsa", "Att sälja medicin", "Att berätta om en sjukdom"], correct: 0,
          explain: "Texten ger praktiska råd för en hälsosammare vardag." },
        { type: "detail", q: "Vad är det första rådet?", qEn: "What is the first piece of advice?",
          options: ["Att röra på sig regelbundet", "Att sluta arbeta", "Att äta mycket mindre"], correct: 0,
          explain: "„Det första rådet är att röra på sig regelbundet.“" },
        { type: "detail", q: "Hur mycket sömn behöver de flesta vuxna?", qEn: "How much sleep do most adults need?",
          options: ["Sju till åtta timmar", "Tre till fyra timmar", "Tolv timmar"], correct: 0,
          explain: "„De flesta vuxna behöver mellan sju och åtta timmars sömn varje natt.“" },
        { type: "detail", q: "Vad är skadligt enligt texten?", qEn: "What is harmful, according to the text?",
          options: ["Stress under lång tid", "Att dricka vatten", "Att ta trapporna"], correct: 0,
          explain: "„Stress under lång tid är skadligt för kroppen.“" },
        { type: "detail", q: "Varför är goda relationer viktiga?", qEn: "Why are good relationships important?",
          options: ["De påverkar hälsan positivt", "De ger mer pengar", "De gör en tröttare"], correct: 0,
          explain: "„…goda relationer påverkar hälsan positivt.“" }
      ]
    },

    {
      id: "news-b1-tech-005",
      title: "Allt fler betalar med mobilen",
      titleEn: "More and more people pay with their phones",
      level: "B1",
      theme: "Teknik · Technology",
      textType: "informational",
      source: "Svenska CI Nyheter",
      lead:
        "Kontanter blir allt ovanligare i Sverige. I dag använder de flesta kort eller " +
        "mobilen när de handlar.",
      text:
        "Sverige är ett av de länder i världen där folk använder minst kontanter. I många " +
        "affärer går det inte längre att betala med sedlar och mynt. I stället betalar man " +
        "med kort eller med appar i mobilen. En av de mest populära tjänsterna heter Swish. " +
        "Med den kan man enkelt skicka pengar till andra direkt från telefonen. Även äldre " +
        "och barn har börjat använda digitala betalningar. Fördelen är att det går snabbt " +
        "och att man slipper bära med sig pengar. Men utvecklingen har också nackdelar. Alla " +
        "har inte en smart telefon, och vissa äldre tycker att tekniken är svår. Därför finns " +
        "det de som oroar sig för att samhället går för fort fram. Banker och myndigheter " +
        "försöker nu hjälpa dem som har svårt med tekniken. Samtidigt fortsätter forskare att " +
        "utveckla nya, säkrare sätt att betala. Hur vi betalar i framtiden vet ingen säkert, " +
        "men kontanterna verkar bli allt mindre viktiga.",
      glossary: {
        "kontanter": "cash",
        "ovanligare": "rarer",
        "sedlar": "banknotes",
        "mynt": "coins",
        "appar": "apps",
        "tjänsterna": "the services",
        "skicka": "send",
        "digitala betalningar": "digital payments",
        "fördelen": "the advantage",
        "slipper": "avoid having to",
        "utvecklingen": "the development",
        "nackdelar": "disadvantages",
        "oroar sig": "worry",
        "samhället": "society",
        "myndigheter": "authorities",
        "utveckla": "develop",
        "säkrare": "safer",
        "framtiden": "the future"
      },
      questions: [
        { type: "gist", q: "Vad handlar artikeln om?", qEn: "What is the article about?",
          options: ["Att färre använder kontanter", "Hur man startar en bank", "Ett nytt mobilmärke"], correct: 0,
          explain: "Artikeln handlar om att kontanter används allt mindre i Sverige." },
        { type: "detail", q: "Vad heter en populär betaltjänst?", qEn: "What is a popular payment service called?",
          options: ["Swish", "Skatteverket", "SMHI"], correct: 0,
          explain: "„En av de mest populära tjänsterna heter Swish.“" },
        { type: "detail", q: "Vad är en fördel med digitala betalningar?", qEn: "What is an advantage of digital payments?",
          options: ["Det går snabbt och man slipper bära pengar", "De är alltid gratis", "De fungerar utan telefon"], correct: 0,
          explain: "„Fördelen är att det går snabbt och att man slipper bära med sig pengar.“" },
        { type: "detail", q: "Vad är en nackdel?", qEn: "What is a disadvantage?",
          options: ["Alla har inte en smart telefon", "Det tar för lång tid", "Det är förbjudet"], correct: 0,
          explain: "„Alla har inte en smart telefon, och vissa äldre tycker att tekniken är svår.“" },
        { type: "detail", q: "Vad gör banker och myndigheter?", qEn: "What are banks and authorities doing?",
          options: ["Hjälper dem som har svårt med tekniken", "Tar bort alla kort", "Stänger sina kontor"], correct: 0,
          explain: "„Banker och myndigheter försöker nu hjälpa dem som har svårt med tekniken.“" }
      ]
    }

  ];

  articles.forEach(function (a) {
    a.wordCount = ((a.lead + " " + a.text).match(/[A-Za-zÅÄÖåäö]+/g) || []).length;
  });
  window.SvCI_NEWS = (window.SvCI_NEWS || []).concat(articles);
})();
