/* ============================================================
   Swedish CI — News Reader data: B1 articles
   ~150-250 words each (lead + body combined). Non-fiction,
   informational news style (SFI D focus) — same gloss + comprehension
   system as the Graded Reader, reused by news.html once built.
   Articles are written for this app, not real reporting, so the
   "source" field uses a fictional in-app byline rather than a real
   publication.
   ============================================================ */
const NEWS_B1 = [
  {
    id: "newsb1-weather-1",
    title: "Värmebölja väntas över hela landet",
    titleEn: "Heat wave expected across the country",
    level: "B1",
    theme: "weather",
    textType: "informational",
    source: "Svenska CI Nyheter",
    wordCount: 131,
    lead:
      "Sverige väntas få en ovanligt varm vecka, enligt SMHI. Temperaturen kan nå över tjugofem grader på " +
      "flera platser i landet.",
    body:
      "Värmen kommer från ett högtryck som ligger över norra Europa och drar in varm luft från söder. " +
      "Meteorologer säger att värmen kan hålla i sig till helgen, men att risken för åskväder ökar mot " +
      "slutet av veckan. I Stockholm väntas temperaturer runt tjugosex grader på onsdagen, medan det i " +
      "norra Sverige fortfarande är några grader svalare. Myndigheterna varnar för att äldre personer och " +
      "barn bör undvika att vara utomhus mitt på dagen när solen är som starkast. Många badplatser runt om " +
      "i landet rapporterar redan fler besökare än vanligt för säsongen. Trots värmen rekommenderar SMHI " +
      "att man tar med sig ett tunt regnplagg, eftersom kraftiga sommarskurar kan komma snabbt och " +
      "oväntat.",
    glossary: {
      högtryck: "high-pressure system",
      meteorologer: "meteorologists",
      åskväder: "thunderstorm",
      badplatser: "swimming spots",
      myndigheterna: "the authorities",
      regnplagg: "rain gear",
      sommarskurar: "summer showers",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["Ett snöoväder i Sverige", "En värmebölja i Sverige", "En skogsbrand i Sverige"],
        correct: 1,
      },
      {
        type: "detail",
        q: "Varifrån kommer värmen enligt texten?",
        qEn: "Where does the heat come from, according to the text?",
        options: ["Från ett högtryck över norra Europa", "Från Afrika", "Från Atlanten"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vilken temperatur väntas i Stockholm på onsdagen?",
        qEn: "What temperature is expected in Stockholm on Wednesday?",
        options: ["Omkring tio grader", "Omkring fyrtio grader", "Omkring tjugosex grader"],
        correct: 2,
      },
      {
        type: "detail",
        q: "Vem varnar myndigheterna särskilt?",
        qEn: "Who do the authorities specifically warn?",
        options: ["Äldre personer och barn", "Bara turister", "Bara bönder"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad rekommenderar SMHI trots värmen?",
        qEn: "What does SMHI recommend despite the heat?",
        options: ["Att stanna inomhus hela dagen", "Att ta med ett tunt regnplagg", "Att åka utomlands"],
        correct: 1,
      },
    ],
  },

  {
    id: "newsb1-event-1",
    title: "Stor sommarfestival lockar tusentals besökare",
    titleEn: "Big summer festival draws thousands of visitors",
    level: "B1",
    theme: "local-event",
    textType: "informational",
    source: "Svenska CI Nyheter",
    wordCount: 141,
    lead:
      "Den årliga sommarfestivalen i stadens centrum drog över tio tusen besökare under helgen. " +
      "Festivalen bjöd på musik, mat och aktiviteter för hela familjen.",
    body:
      "Festivalen, som har arrangerats i staden i över tjugo år, är ett av sommarens mest populära " +
      "evenemang. På den stora scenen uppträdde flera lokala band, och barnen kunde delta i tävlingar och " +
      "pyssel på en separat aktivitetsyta. Längs gatorna sålde lokala restauranger och föreningar mat från " +
      "olika delar av världen, vilket gjorde att besökarna fick smaka på allt från grillad korv till " +
      "indiska curryrätter. Arrangörerna berättar att de är mycket nöjda med årets festival, trots att " +
      "vädret var lite ostadigt på lördagen. \"Vi är glada att så många kom, även om det regnade en stund " +
      "på eftermiddagen\", säger projektledaren Maria Lind. Nästa år planerar arrangörerna att utöka " +
      "festivalen med ytterligare en dag, eftersom intresset har ökat varje år.",
    glossary: {
      arrangerats: "organized, arranged",
      evenemang: "event",
      föreningar: "associations, clubs",
      ostadigt: "unsettled (weather)",
      arrangörerna: "the organizers",
      utöka: "to expand",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["En sommarfestival i stadens centrum", "En fotbollsmatch", "Ett politiskt möte"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Hur många besökare kom till festivalen?",
        qEn: "How many visitors came to the festival?",
        options: ["Bara hundra", "En miljon", "Över tio tusen"],
        correct: 2,
      },
      {
        type: "detail",
        q: "Vad kunde barnen göra på festivalen?",
        qEn: "What could the children do at the festival?",
        options: ["Jobba i en affär", "Delta i tävlingar och pyssel", "Se en film på bio"],
        correct: 1,
      },
      {
        type: "detail",
        q: "Hur var vädret på lördagen?",
        qEn: "What was the weather like on Saturday?",
        options: ["Lite ostadigt, det regnade en stund", "Perfekt och soligt hela dagen", "Mycket kallt och snöigt"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad planerar arrangörerna inför nästa år?",
        qEn: "What are the organizers planning for next year?",
        options: ["Att avsluta festivalen för gott", "Att flytta festivalen till vintern", "Att utöka festivalen med en dag"],
        correct: 2,
      },
    ],
  },

  {
    id: "newsb1-jobs-1",
    title: "Fler nya jobb inom vården och tekniksektorn",
    titleEn: "More new jobs in healthcare and the tech sector",
    level: "B1",
    theme: "work",
    textType: "informational",
    source: "Svenska CI Nyheter",
    wordCount: 144,
    lead:
      "Arbetsmarknaden visar tecken på återhämtning, enligt en ny rapport från Arbetsförmedlingen. Flest " +
      "nya jobb skapas just nu inom vården och tekniksektorn.",
    body:
      "Enligt rapporten har antalet lediga jobb inom sjukvården ökat markant under det senaste året, " +
      "särskilt för sjuksköterskor och undersköterskor. Samtidigt fortsätter techbolag att anställa " +
      "programmerare och dataanalytiker, trots en svagare ekonomi i andra branscher. Arbetsförmedlingen " +
      "menar att den ökade efterfrågan beror dels på en åldrande befolkning som behöver mer vård, dels på " +
      "att fler företag digitaliserar sin verksamhet. Experter varnar dock för att det fortfarande är " +
      "svårt för nyanlända och unga utan erfarenhet att komma in på arbetsmarknaden, även om antalet jobb " +
      "ökar totalt sett. Flera kommuner har därför startat särskilda program för att hjälpa nyanlända att " +
      "snabbare få sitt första jobb i Sverige. Arbetsförmedlingen uppmanar arbetssökande att satsa på " +
      "yrken inom vård och teknik, eftersom efterfrågan väntas fortsätta växa de kommande åren.",
    glossary: {
      återhämtning: "recovery",
      tekniksektorn: "the tech sector",
      undersköterskor: "nursing assistants",
      dataanalytiker: "data analysts",
      efterfrågan: "demand",
      digitaliserar: "digitizes",
      arbetssökande: "job seekers",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["Att alla företag går i konkurs", "Att jobbmarknaden växer inom vård och teknik", "Att Sverige har för många arbetslösa läkare"],
        correct: 1,
      },
      {
        type: "detail",
        q: "Vilka yrken behövs det fler av inom vården?",
        qEn: "Which professions are needed more of in healthcare?",
        options: ["Sjuksköterskor och undersköterskor", "Poliser och brandmän", "Lärare och rektorer"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Varför ökar efterfrågan på vårdpersonal enligt texten?",
        qEn: "Why is the demand for healthcare staff increasing, according to the text?",
        options: ["Det finns för många sjukhus", "Lönerna är mycket höga", "Befolkningen blir äldre"],
        correct: 2,
      },
      {
        type: "detail",
        q: "Vem har det fortfarande svårt att få jobb enligt experterna?",
        qEn: "Who still has a hard time getting a job, according to the experts?",
        options: ["Nyanlända och unga utan erfarenhet", "Personer med universitetsexamen", "Erfarna chefer"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad uppmanar Arbetsförmedlingen arbetssökande att göra?",
        qEn: "What does the employment agency urge job seekers to do?",
        options: ["Flytta utomlands", "Satsa på yrken inom vård och teknik", "Sluta söka jobb helt"],
        correct: 1,
      },
    ],
  },

  {
    id: "newsb1-healthadvice-1",
    title: "Nya råd om sömn och hälsa",
    titleEn: "New advice about sleep and health",
    level: "B1",
    theme: "health",
    textType: "informational",
    source: "Svenska CI Nyheter",
    wordCount: 147,
    lead:
      "Folkhälsomyndigheten har publicerat nya råd om hur viktig en god sömn är för hälsan. Allt fler " +
      "svenskar uppger att de sover för lite varje natt.",
    body:
      "Enligt myndighetens undersökning sover var tredje vuxen mindre än sex timmar per natt, vilket är " +
      "betydligt mindre än de sju till nio timmar som rekommenderas. Bristande sömn kan leda till " +
      "koncentrationssvårigheter, sämre immunförsvar och ökad risk för hjärt- och kärlsjukdomar på lång " +
      "sikt. Forskarna bakom rapporten menar att skärmtid sent på kvällen är en av de vanligaste orsakerna " +
      "till sömnproblem, eftersom blått ljus från mobiler och datorer kan störa kroppens naturliga " +
      "dygnsrytm. Myndigheten rekommenderar att man undviker skärmar minst en timme innan läggdags och att " +
      "man försöker gå och lägga sig vid samma tid varje kväll. Regelbunden motion och mindre koffein på " +
      "eftermiddagen kan också förbättra sömnkvaliteten. Folkhälsomyndigheten hoppas att de nya råden ska " +
      "hjälpa fler svenskar att prioritera sömnen i vardagen.",
    glossary: {
      Folkhälsomyndigheten: "the Public Health Agency",
      bristande: "lacking, insufficient",
      immunförsvar: "immune system",
      "hjärt- och kärlsjukdomar": "cardiovascular diseases",
      dygnsrytm: "circadian rhythm",
      läggdags: "bedtime",
      sömnkvaliteten: "the sleep quality",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["Nya råd om sömn och hälsa", "Nya regler om arbetstider", "En ny sjukdom som spridits i Sverige"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Hur många timmar sömn rekommenderas enligt texten?",
        qEn: "How many hours of sleep are recommended, according to the text?",
        options: ["Tre till fyra timmar", "Tolv timmar", "Sju till nio timmar"],
        correct: 2,
      },
      {
        type: "detail",
        q: "Vad säger forskarna är en vanlig orsak till sömnproblem?",
        qEn: "What do the researchers say is a common cause of sleep problems?",
        options: ["Skärmtid sent på kvällen", "Att äta för mycket frukt", "Att bo i en stor stad"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad rekommenderar myndigheten att man gör innan läggdags?",
        qEn: "What does the agency recommend doing before bedtime?",
        options: ["Träna intensivt direkt innan man somnar", "Undvika skärmar minst en timme innan", "Dricka mycket kaffe"],
        correct: 1,
      },
      {
        type: "detail",
        q: "Vad kan, förutom mindre skärmtid, förbättra sömnkvaliteten enligt texten?",
        qEn: "What, besides less screen time, can improve sleep quality according to the text?",
        options: ["Regelbunden motion och mindre koffein", "Mer skärmtid på morgonen", "Att sova mitt på dagen istället"],
        correct: 0,
      },
    ],
  },

  {
    id: "newsb1-tech-1",
    title: "Fler svenska skolor satsar på digital undervisning",
    titleEn: "More Swedish schools invest in digital teaching",
    level: "B1",
    theme: "technology",
    textType: "informational",
    source: "Svenska CI Nyheter",
    wordCount: 152,
    lead:
      "Allt fler grundskolor i Sverige inför digitala verktyg i klassrummet. Lärare menar att tekniken kan " +
      "göra undervisningen mer varierad, men varnar också för nya utmaningar.",
    body:
      "Enligt en ny undersökning använder nu nästan alla svenska grundskolor någon form av digitalt " +
      "verktyg, till exempel surfplattor, interaktiva tavlor eller program för att öva läsning och " +
      "matematik. Många lärare berättar att eleverna blir mer motiverade när de får arbeta med digitala " +
      "spel och appar, särskilt i ämnen som annars kan kännas tråkiga. Samtidigt uttrycker flera lärare " +
      "oro för att eleverna spenderar för mycket tid framför skärmar, både i skolan och hemma. Forskare " +
      "diskuterar nu hur skolorna bäst kan balansera traditionell undervisning, som läsning av böcker och " +
      "handskrivning, med ny teknik. Skolverket har därför tagit fram nya riktlinjer som ska hjälpa " +
      "skolor att använda digitala verktyg på ett sätt som stödjer lärandet utan att ersätta viktiga " +
      "grundläggande färdigheter. Många kommuner väntas uppdatera sina riktlinjer redan till hösten.",
    glossary: {
      grundskolor: "primary/elementary schools",
      "digitala verktyg": "digital tools",
      "interaktiva tavlor": "interactive whiteboards",
      motiverade: "motivated",
      riktlinjer: "guidelines",
      "grundläggande färdigheter": "fundamental skills",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["Hur svenska skolor bygger nya byggnader", "Hur svenska skolor anställer fler lärare", "Hur svenska skolor använder digital teknik"],
        correct: 2,
      },
      {
        type: "detail",
        q: "Vilka digitala verktyg nämns i texten?",
        qEn: "Which digital tools are mentioned in the text?",
        options: ["Surfplattor och interaktiva tavlor", "Skrivmaskiner", "Telefonväxlar"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad blir eleverna enligt lärarna när de använder digitala spel?",
        qEn: "What do students become, according to the teachers, when they use digital games?",
        options: ["Mer trötta", "Mer motiverade", "Mer bortkomna"],
        correct: 1,
      },
      {
        type: "detail",
        q: "Vad är några lärare oroliga för?",
        qEn: "What are some teachers worried about?",
        options: ["Att eleverna spenderar för mycket tid framför skärmar", "Att eleverna läser för många böcker", "Att eleverna pratar för mycket med varandra"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad har Skolverket tagit fram?",
        qEn: "What has the National Agency for Education produced?",
        options: ["En ny lag om skolavgifter", "Nya riktlinjer för digitala verktyg", "Ett nytt betygssystem"],
        correct: 1,
      },
    ],
  },
];
