/* ============================================================================
   Swedish CI — data/stories-a2-high.js
   Graded reader stories at A2-high level (~100-150 words each).
   More V2 inversion, yes/no & wh-questions, and an introduction to bisatser
   (subordinate clauses with eftersom / att / som / om).
   Topics: job interview, visiting the doctor, apartment hunting, taking the bus,
   Swedish holidays.
   ========================================================================== */
(function () {
  var stories = [

    {
      id: "a2high-interview-001",
      title: "Anställningsintervjun",
      titleEn: "The job interview",
      level: "A2-high",
      theme: "Arbete · Work",
      text:
        "Sofia har sökt ett nytt jobb på ett företag i stan. Idag ska hon på en " +
        "anställningsintervju. Hon är lite nervös, men hon har förberett sig väl. På " +
        "morgonen tar hon på sig fina kläder och åker tidigt med tunnelbanan. När hon " +
        "kommer fram hälsar chefen vänligt på henne. De sätter sig i ett rum och börjar " +
        "prata. Chefen frågar varför Sofia vill ha jobbet. Sofia berättar att hon har " +
        "arbetat med liknande uppgifter förut. Hon säger också att hon gärna lär sig nya " +
        "saker. Chefen verkar nöjd med hennes svar. Efter intervjun säger han att de hör " +
        "av sig inom en vecka. Sofia känner sig glad när hon går därifrån, för hon tror " +
        "att det gick bra.",
      glossary: {
        "sökt": "applied for",
        "företag": "company",
        "anställningsintervju": "job interview",
        "nervös": "nervous",
        "förberett sig": "prepared herself",
        "tunnelbanan": "the subway / metro",
        "hälsar": "greets",
        "chefen": "the boss",
        "vänligt": "kindly",
        "liknande": "similar",
        "uppgifter": "tasks",
        "gärna": "gladly",
        "verkar": "seems",
        "nöjd": "satisfied",
        "hör av sig": "gets in touch",
        "inom": "within",
        "känner sig": "feels",
        "gick bra": "went well"
      },
      questions: [
        { type: "gist", q: "Vad ska Sofia göra idag?", qEn: "What is Sofia going to do today?",
          options: ["Gå på en anställningsintervju", "Börja sitt nya jobb", "Träffa sin chef på lunchen"], correct: 0,
          explain: "„Idag ska hon på en anställningsintervju.“" },
        { type: "detail", q: "Hur åker Sofia till intervjun?", qEn: "How does Sofia travel to the interview?",
          options: ["Med tunnelbanan", "Med buss", "Med bil"], correct: 0,
          explain: "„…åker tidigt med tunnelbanan.“" },
        { type: "detail", q: "Vad frågar chefen Sofia?", qEn: "What does the boss ask Sofia?",
          options: ["Varför hon vill ha jobbet", "Var hon bor", "Hur gammal hon är"], correct: 0,
          explain: "„Chefen frågar varför Sofia vill ha jobbet.“" },
        { type: "detail", q: "När ska företaget höra av sig?", qEn: "When will the company get in touch?",
          options: ["Inom en vecka", "Samma dag", "Inom en månad"], correct: 0,
          explain: "„…de hör av sig inom en vecka.“" },
        { type: "detail", q: "Hur känner sig Sofia efter intervjun?", qEn: "How does Sofia feel after the interview?",
          options: ["Glad — hon tror det gick bra", "Ledsen och besviken", "Trött och arg"], correct: 0,
          explain: "„Sofia känner sig glad … för hon tror att det gick bra.“" }
      ]
    },

    {
      id: "a2high-doctor-002",
      title: "Hos läkaren",
      titleEn: "At the doctor's",
      level: "A2-high",
      theme: "Hälsa · Health",
      text:
        "Anders har känt sig sjuk i flera dagar. Han har ont i halsen och hostar mycket. " +
        "Därför bestämmer han sig för att gå till vårdcentralen. Han ringer på morgonen och " +
        "får en tid samma eftermiddag. I väntrummet sitter andra patienter och väntar på " +
        "sin tur. När det blir Anders tur går han in till läkaren. Läkaren frågar hur länge " +
        "han har varit sjuk och lyssnar på hans lungor. Hon tittar också i hans hals. Sedan " +
        "säger hon att Anders har en vanlig förkylning. Han behöver inte medicin, men han " +
        "ska vila och dricka mycket vatten. Om han inte blir bättre inom en vecka ska han " +
        "komma tillbaka. Anders tackar läkaren och går hem för att vila.",
      glossary: {
        "sjuk": "ill",
        "ont i halsen": "a sore throat",
        "hostar": "coughs",
        "bestämmer sig": "decides",
        "vårdcentralen": "the health centre",
        "tid": "appointment",
        "väntrummet": "the waiting room",
        "patienter": "patients",
        "tur": "turn",
        "läkaren": "the doctor",
        "lungor": "lungs",
        "hals": "throat",
        "förkylning": "a cold",
        "medicin": "medicine",
        "vila": "rest",
        "blir bättre": "gets better",
        "tackar": "thanks"
      },
      questions: [
        { type: "gist", q: "Varför går Anders till vårdcentralen?", qEn: "Why does Anders go to the health centre?",
          options: ["Han är sjuk", "Han ska hämta medicin åt sin fru", "Han arbetar där"], correct: 0,
          explain: "„Anders har känt sig sjuk i flera dagar.“" },
        { type: "detail", q: "Vilka besvär har Anders?", qEn: "What symptoms does Anders have?",
          options: ["Ont i halsen och hosta", "Ont i magen", "Ont i ryggen"], correct: 0,
          explain: "„Han har ont i halsen och hostar mycket.“" },
        { type: "detail", q: "Vad säger läkaren att han har?", qEn: "What does the doctor say he has?",
          options: ["En vanlig förkylning", "En allvarlig sjukdom", "Inget alls"], correct: 0,
          explain: "„…Anders har en vanlig förkylning.“" },
        { type: "detail", q: "Vad ska Anders göra för att bli frisk?", qEn: "What should Anders do to recover?",
          options: ["Vila och dricka mycket vatten", "Ta stark medicin", "Träna hårt"], correct: 0,
          explain: "„…han ska vila och dricka mycket vatten.“" },
        { type: "detail", q: "Vad ska han göra om han inte blir bättre?", qEn: "What should he do if he doesn't get better?",
          options: ["Komma tillbaka inom en vecka", "Åka till sjukhuset direkt", "Vänta en månad"], correct: 0,
          explain: "„Om han inte blir bättre inom en vecka ska han komma tillbaka.“" }
      ]
    },

    {
      id: "a2high-apartment-003",
      title: "Att hitta en lägenhet",
      titleEn: "Finding an apartment",
      level: "A2-high",
      theme: "Boende · Housing",
      text:
        "Emma och hennes pojkvän letar efter en ny lägenhet i Malmö. Deras nuvarande " +
        "lägenhet är för liten, eftersom de snart ska få ett barn. På internet tittar de på " +
        "många annonser. De vill ha minst två rum och ett kök, gärna nära en park. En dag " +
        "hittar de en lägenhet som verkar perfekt. Den ligger på tredje våningen och har en " +
        "balkong. De ringer hyresvärden och bokar en visning. När de kommer dit gillar de " +
        "lägenheten direkt. Rummen är ljusa och köket är nyrenoverat. Hyran är lite hög, men " +
        "de tycker att den är värd pengarna. Efter visningen bestämmer de sig för att skriva " +
        "på kontraktet. Nu ser de fram emot att flytta in.",
      glossary: {
        "pojkvän": "boyfriend",
        "letar efter": "are looking for",
        "nuvarande": "current",
        "eftersom": "because",
        "annonser": "ads / listings",
        "minst": "at least",
        "våningen": "the floor",
        "balkong": "balcony",
        "hyresvärden": "the landlord",
        "visning": "a viewing",
        "ljusa": "bright",
        "nyrenoverat": "newly renovated",
        "hyran": "the rent",
        "värd pengarna": "worth the money",
        "kontraktet": "the contract",
        "ser fram emot": "look forward to",
        "flytta in": "move in"
      },
      questions: [
        { type: "gist", q: "Vad letar Emma och hennes pojkvän efter?", qEn: "What are Emma and her boyfriend looking for?",
          options: ["En ny lägenhet", "Ett nytt jobb", "En ny bil"], correct: 0,
          explain: "„Emma och hennes pojkvän letar efter en ny lägenhet i Malmö.“" },
        { type: "detail", q: "Varför behöver de en större lägenhet?", qEn: "Why do they need a bigger apartment?",
          options: ["De ska snart få ett barn", "De har en hund", "De vill ha ett kontor"], correct: 0,
          explain: "„…eftersom de snart ska få ett barn.“" },
        { type: "detail", q: "Vad har lägenheten som de gillar?", qEn: "What does the apartment they like have?",
          options: ["En balkong", "En trädgård", "En pool"], correct: 0,
          explain: "„Den ligger på tredje våningen och har en balkong.“" },
        { type: "detail", q: "Vad tycker de om hyran?", qEn: "What do they think of the rent?",
          options: ["Lite hög, men värd pengarna", "Alldeles för billig", "Alldeles för dyr"], correct: 0,
          explain: "„Hyran är lite hög, men de tycker att den är värd pengarna.“" },
        { type: "detail", q: "Vad gör de efter visningen?", qEn: "What do they do after the viewing?",
          options: ["Skriver på kontraktet", "Fortsätter att leta", "Säger nej till lägenheten"], correct: 0,
          explain: "„…bestämmer de sig för att skriva på kontraktet.“" }
      ]
    },

    {
      id: "a2high-bus-004",
      title: "Att åka buss",
      titleEn: "Taking the bus",
      level: "A2-high",
      theme: "Resor · Travel",
      text:
        "Varje morgon åker Omar buss till skolan där han läser svenska. Bussen går från " +
        "hållplatsen nära hans hus klockan kvart över åtta. Idag är Omar lite sen, så han " +
        "måste springa till hållplatsen. Som tur är kommer bussen några minuter senare. Omar " +
        "visar sitt busskort för chauffören och sätter sig längst bak. På bussen är det många " +
        "andra resenärer. Några läser på sina telefoner, andra tittar ut genom fönstret. " +
        "Efter tio minuter ringer Omar på stoppknappen, eftersom hans hållplats är nära. När " +
        "bussen stannar går han av och tackar chauffören. Sedan promenerar han sista biten " +
        "till skolan. Han kommer fram precis i tid till första lektionen.",
      glossary: {
        "hållplatsen": "the bus stop",
        "kvart över": "quarter past",
        "sen": "late",
        "springa": "to run",
        "som tur är": "luckily",
        "busskort": "bus pass",
        "chauffören": "the driver",
        "längst bak": "at the very back",
        "resenärer": "passengers",
        "fönstret": "the window",
        "stoppknappen": "the stop button",
        "stannar": "stops",
        "går av": "gets off",
        "promenerar": "walks",
        "sista biten": "the last stretch",
        "precis i tid": "just in time",
        "lektionen": "the lesson"
      },
      questions: [
        { type: "gist", q: "Vart åker Omar med bussen?", qEn: "Where does Omar take the bus to?",
          options: ["Till skolan", "Till jobbet", "Till affären"], correct: 0,
          explain: "„…åker Omar buss till skolan där han läser svenska.“" },
        { type: "detail", q: "Varför måste Omar springa idag?", qEn: "Why does Omar have to run today?",
          options: ["Han är lite sen", "Bussen är full", "Det regnar"], correct: 0,
          explain: "„Idag är Omar lite sen, så han måste springa till hållplatsen.“" },
        { type: "detail", q: "Var sätter sig Omar på bussen?", qEn: "Where does Omar sit on the bus?",
          options: ["Längst bak", "Längst fram", "Bredvid chauffören"], correct: 0,
          explain: "„…sätter sig längst bak.“" },
        { type: "detail", q: "Vad gör Omar när hans hållplats närmar sig?", qEn: "What does Omar do as his stop approaches?",
          options: ["Ringer på stoppknappen", "Ringer ett telefonsamtal", "Somnar"], correct: 0,
          explain: "„…ringer Omar på stoppknappen, eftersom hans hållplats är nära.“" },
        { type: "detail", q: "Kommer Omar i tid till lektionen?", qEn: "Does Omar get to the lesson on time?",
          options: ["Ja, precis i tid", "Nej, han missar den", "Han kommer en timme för sent"], correct: 0,
          explain: "„Han kommer fram precis i tid till första lektionen.“" }
      ]
    },

    {
      id: "a2high-holidays-005",
      title: "Svenska högtider",
      titleEn: "Swedish holidays",
      level: "A2-high",
      theme: "Samhälle · Society",
      text:
        "I Sverige finns det många högtider under året. En av de mest kända är midsommar, " +
        "som firas i juni. Då är dagarna långa och ljusa, och många reser ut på landet. Folk " +
        "klär en majstång med blommor och dansar runt den. På bordet finns sill, potatis och " +
        "jordgubbar. På vintern firar svenskarna jul. Då tänder man ljus och äter god mat " +
        "tillsammans med familjen. Många barn väntar på tomten, som kommer med klappar. En " +
        "annan viktig högtid är lucia i december. Tidigt på morgonen går barn i vita kläder " +
        "och sjunger vackra sånger. De bär ljus och delar ut pepparkakor och bullar. Svenska " +
        "högtider är ett fint sätt att träffa familj och vänner.",
      glossary: {
        "högtider": "holidays / celebrations",
        "firas": "is celebrated",
        "majstång": "maypole",
        "tomten": "Santa Claus / the gnome",
        "klappar": "presents / gifts",
        "lucia": "Lucia",
        "pepparkakor": "gingerbread cookies"
      },
      questions: [
        { type: "gist", q: "Vad handlar texten om?", qEn: "What is the text about?",
          options: ["Svenska högtider", "Svensk mat", "Det svenska vädret"], correct: 0,
          explain: "Texten beskriver flera svenska högtider: midsommar, jul och lucia." },
        { type: "detail", q: "När firas midsommar?", qEn: "When is Midsummer celebrated?",
          options: ["I juni", "I december", "I mars"], correct: 0,
          explain: "„…midsommar, som firas i juni.“" },
        { type: "detail", q: "Vad gör folk runt majstången?", qEn: "What do people do around the maypole?",
          options: ["De dansar", "De sover", "De arbetar"], correct: 0,
          explain: "„Folk klär en majstång med blommor och dansar runt den.“" },
        { type: "detail", q: "Vad delar barnen ut på lucia?", qEn: "What do the children hand out on Lucia?",
          options: ["Pepparkakor och bullar", "Blommor", "Presenter"], correct: 0,
          explain: "„De bär ljus och delar ut pepparkakor och bullar.“" },
        { type: "detail", q: "Vad är högtiderna ett bra sätt att göra?", qEn: "What are the holidays a good way to do?",
          options: ["Träffa familj och vänner", "Tjäna pengar", "Resa utomlands"], correct: 0,
          explain: "„Svenska högtider är ett fint sätt att träffa familj och vänner.“" }
      ]
    },

    {
      id: "a2high-laundry-006",
      title: "I tvättstugan",
      titleEn: "In the laundry room",
      level: "A2-high",
      theme: "Vardagsliv · Daily life",
      text:
        "I Sverige är det vanligt att man delar tvättstuga med sina grannar. Idag har Sara bokat " +
        "en tid i tvättstugan klockan tio eftersom hon har mycket smutsiga kläder. När hon " +
        "kommer dit sorterar hon tvätten i olika högar. Hon lägger de vita kläderna i en " +
        "maskin och de färgade i en annan. Sedan häller hon i tvättmedel och startar maskinerna. " +
        "Det tar ungefär en timme för maskinerna att bli klara. Under tiden går Sara upp till " +
        "sin lägenhet och dricker kaffe. När maskinerna är färdiga flyttar hon kläderna till " +
        "torktumlaren. Det är viktigt att städa efter sig i tvättstugan, så Sara torkar av " +
        "maskinerna innan hon går.",
      glossary: {
        "delar": "share",
        "tvättstuga": "laundry room",
        "bokat": "booked",
        "smutsiga": "dirty",
        "sorterar": "sorts",
        "tvätten": "the laundry",
        "högar": "piles",
        "färgade": "coloured",
        "tvättmedel": "laundry detergent",
        "ungefär": "approximately / about",
        "torktumlaren": "the tumble dryer",
        "torkar av": "wipes down"
      },
      questions: [
        { type: "gist", q: "Varför har Sara bokat tid i tvättstugan idag?", qEn: "Why has Sara booked a time in the laundry room today?",
          options: ["Hon har mycket smutsiga kläder", "Hon vill träffa sina grannar", "Hon ska städa hela rummet"], correct: 0,
          explain: "Sara har bokat tid eftersom hon har mycket smutsiga kläder som måste tvättas." },
        { type: "detail", q: "Hur sorterar Sara tvätten?", qEn: "How does Sara sort the laundry?",
          options: ["I vita kläder och färgade kläder", "Efter storlek", "Hon sorterar inte alls"], correct: 0,
          explain: "„Hon lägger de vita kläderna i en maskin och de färgade i en annan.“" },
        { type: "detail", q: "Vad gör Sara medan maskinerna tvättar?", qEn: "What does Sara do while the machines are washing?",
          options: ["Går till sin lägenhet och dricker kaffe", "Handlar mat", "Sover i tvättstugan"], correct: 0,
          explain: "„Under tiden går Sara upp till sin lägenhet och dricker kaffe.“" },
        { type: "detail", q: "Vart flyttar hon kläderna när de är färdigtvättade?", qEn: "Where does she move the clothes when they are finished washing?",
          options: ["Till torktumlaren", "Till balkongen", "Direkt till garderoben"], correct: 0,
          explain: "„När maskinerna är färdiga flyttar hon kläderna till torktumlaren.“" },
        { type: "detail", q: "Vad gör Sara innan hon lämnar tvättstugan?", qEn: "What does Sara do before she leaves the laundry room?",
          options: ["Hon torkar av maskinerna och städar", "Hon ringer sin granne", "Ingenting"], correct: 0,
          explain: "„Det är viktigt att städa efter sig i tvättstugan, så Sara torkar av maskinerna innan hon går.“" }
      ]
    },

    {
      id: "a2high-gym-007",
      title: "Träning på gymmet",
      titleEn: "Training at the gym",
      level: "A2-high",
      theme: "Hälsa · Health",
      text:
        "Efter jobbet brukar David träna på ett gym i centrum eftersom han vill hålla sig i form. " +
        "Han tycker att det är ett bra sätt att koppla av efter en stressig dag. Idag ska han " +
        "springan på löpbandet och lyfta vikter. Innan han börjar värmer han upp i tio minuter " +
        "för att inte skada sig. Gymmet är populärt och det spelas energisk musik i högtalarna. " +
        "David möter sin vän Henrik som också tränar där. De bestämmer att de ska köra några " +
        "övningar tillsammans. Efter träningspasset känner sig David trött men mycket nöjd. " +
        "Han tar en varm dusch på gymmet innan han åker hem för att äta en stor middag.",
      glossary: {
        "brukar": "usually",
        "hålla sig i form": "keep in shape",
        "koppla av": "relax",
        "stressig": "stressful",
        "löpbandet": "the treadmill",
        "lyfta vikter": "lift weights",
        "värmer upp": "warms up",
        "skada sig": "injure oneself",
        "högtalarna": "the speakers",
        "övningar": "exercises",
        "träningspasset": "the workout session"
      },
      questions: [
        { type: "gist", q: "Varför brukar David träna på gymmet efter jobbet?", qEn: "Why does David usually work out at the gym after work?",
          options: ["Han vill hålla sig i form och koppla av", "Han jobbar på gymmet", "Det är gratis för alla anställda"], correct: 0,
          explain: "David tränar eftersom han vill hålla sig i form och koppla av efter en stressig dag." },
        { type: "detail", q: "Vad ska David göra på gymmet idag?", qEn: "What is David going to do at the gym today?",
          options: ["Springa på löpbandet och lyfta vikter", "Simma i poolen", "Spela tennis med en vän"], correct: 0,
          explain: "„Idag ska han springa på löpbandet och lyfta vikter.“" },
        { type: "detail", q: "Varför värmer David upp i tio minuter?", qEn: "Why does David warm up for ten minutes?",
          options: ["För att inte skada sig", "Eftersom det är kallt på gymmet", "Han väntar på sin vän"], correct: 0,
          explain: "„Innan han börjar värmer han upp i tio minuter för att inte skada sig.“" },
        { type: "detail", q: "Vem bestämmer David att träna tillsammans med?", qEn: "Who does David decide to train together with?",
          options: ["Sin vän Henrik", "Sin chef", "Ingen, han tränar ensam"], correct: 0,
          explain: "„David möter sin vän Henrik... De bestämmer att de ska köra några övningar tillsammans.“" },
        { type: "detail", q: "Vad gör han efter träningspasset innan han åker hem?", qEn: "What does he do after the workout session before going home?",
          options: ["Tar en varm dusch på gymmet", "Köper nya träningskläder", "Ringer sin familj"], correct: 0,
          explain: "„Han tar en varm dusch på gymmet innan han åker hem...“" }
      ]
    },

    {
      id: "a2high-train-008",
      title: "En tågresa till Göteborg",
      titleEn: "A train trip to Gothenburg",
      level: "A2-high",
      theme: "Resor · Travel",
      text:
        "I helgen ska Karin resa till Göteborg för att besöka sin bror. Hon har bokat sin biljett " +
        "på internet eftersom det är billigare. Tåget avgår från Centralstationen i Stockholm " +
        "klockan nio på morgonen. Karin kommer till stationen i god tid och köper en kopp kaffe. " +
        "När tåget kommer visar hon sin biljett på telefonen för konduktören. Resan tar ungefär " +
        "tre timmar. Karin sitter vid fönstret och tittar på det vackra svenska landskapet som " +
        "flyger förbi. Hon passar också på att läsa i sin nya bok. När tåget stannar i Göteborg " +
        "står hennes bror på perrongen och väntar på henne. Karin blir mycket glad att se honom.",
      glossary: {
        "helgen": "the weekend",
        "besöka": "visit",
        "avgår": "departs",
        "i god tid": "with time to spare",
        "konduktören": "the conductor",
        "landskapet": "the landscape",
        "flyger förbi": "flies past",
        "passar på": "takes the opportunity",
        "perrongen": "the platform"
      },
      questions: [
        { type: "gist", q: "Varför ska Karin resa till Göteborg?", qEn: "Why is Karin traveling to Gothenburg?",
          options: ["För att besöka sin bror", "För att söka ett nytt jobb", "Hon ska åka på semester ensam"], correct: 0,
          explain: "„I helgen ska Karin resa till Göteborg för att besöka sin bror.“" },
        { type: "detail", q: "Varför bokade hon sin biljett på internet?", qEn: "Why did she book her ticket on the internet?",
          options: ["Eftersom det är billigare", "Det går inte att köpa på stationen", "Hennes bror köpte den åt henne"], correct: 0,
          explain: "„Hon har bokat sin biljett på internet eftersom det är billigare.“" },
        { type: "detail", q: "Vad gör Karin under själva tågresan?", qEn: "What does Karin do during the train ride itself?",
          options: ["Tittar på landskapet och läser en bok", "Sover hela tiden", "Arbetar på sin dator"], correct: 0,
          explain: "„Karin sitter vid fönstret... Hon passar också på att läsa i sin nya bok.“" },
        { type: "detail", q: "Hur lång tid tar tågresan ungefär?", qEn: "How long does the train ride take approximately?",
          options: ["Tre timmar", "Besökare åker i fem timmar", "En timme"], correct: 0,
          explain: "„Resan tar ungefär tre timmar.“" },
        { type: "detail", q: "Vem väntar på Karin när tåget kommer fram?", qEn: "Who is waiting for Karin when the train arrives?",
          options: ["Hennes bror står på perrongen", "Hennes föräldrar", "Ingen, han tar en taxi"], correct: 0,
          explain: "„...står hennes bror på perrongen och väntar på henne.“" }
      ]
    },

    {
      id: "a2high-supermarket-009",
      title: "Storhandling på stormarknaden",
      titleEn: "Bulk shopping at the supermarket",
      level: "A2-high",
      theme: "Inköp · Shopping",
      text:
        "En gång i veckan åker familjen Andersson till en stor stormarknad utanför stan för att " +
        "storhandla. De gör så eftersom priserna är lägre och utbudet är mycket större än i " +
        "deras lokala affär. Pappa Erik kör bilen medan barnen sitter i baksätet och pratar. " +
        "Innan de går in tar de en kundvagn. Mamma Maria har skrivit en lång inköpslista. De " +
        "köper mycket mjölk, bröd, pasta och frysta grönsaker. Barnen får välja lite " +
        "fredagsmys, så de tar chips och godis. När de har plockat allt går de till " +
        "självskanningen. Det går snabbt eftersom de skannar varorna själva. Sedan packar " +
        "de kassarna i bilens bagageutrymme.",
      glossary: {
        "stormarknad": "supermarket",
        "storhandla": "do bulk shopping",
        "utbudet": "the selection",
        "kundvagn": "shopping trolley / cart",
        "inköpslista": "shopping list",
        "frysta": "frozen",
        "fredagsmys": "Friday night snacks/cosiness",
        "självskanningen": "self-scanning",
        "bagageutrymme": "car boot / trunk"
      },
      questions: [
        { type: "gist", q: "Varför åker familjen till en stor stormarknad för att handla?", qEn: "Why does the family go to a large supermarket to shop?",
          options: ["Priserna är lägre och utbudet är större", "Det ligger närmare deras hus", "Barnen vill leka där"], correct: 0,
          explain: "De åker till stormarknaden eftersom priserna är lägre och utbudet är mycket större än lokalt." },
        { type: "detail", q: "Vad tar familjen med sig innan de går in i affären?", qEn: "What does the family bring with them before entering the shop?",
          options: ["En kundvagn", "Bara en liten påse", "Ingenting"], correct: 0,
          explain: "„Innan de går in tar de en kundvagn.“" },
        { type: "detail", q: "Vilka typer av grönsaker köper de?", qEn: "What kinds of vegetables do they buy?",
          options: ["Frysta grönsaker", "Färska tomater och gurka", "Inga grönsaker alls"], correct: 0,
          explain: "„De köper mycket mjölk, bröd, pasta och frysta grönsaker.“" },
        { type: "detail", q: "Varför går det snabbt att betala vid självskanningen?", qEn: "Why is it fast to pay at the self-scanning?",
          options: ["Eftersom de skannar varorna själva", "Det är ingen kö alls", "Det finns ingen vakt"], correct: 0,
          explain: "„Det går snabbt eftersom de skannar varorna själva.“" },
        { type: "detail", q: "Var lägger de matkassarna när de är klara?", qEn: "Where do they put the grocery bags when they are done?",
          options: ["I bilens bagageutrymme", "I baksätet bredvid barnen", "De lämnar dem i affären"], correct: 0,
          explain: "„Sedan packar de kassarna i bilens bagageutrymme.“" }
      ]
    },

    {
      id: "a2high-pet-010",
      title: "Att skaffa ett husdjur",
      titleEn: "Getting a pet",
      level: "A2-high",
      theme: "Vardagsliv · Daily life",
      text:
        "Familjen Lindgren har länge diskuterat att skaffa ett husdjur eftersom barnen älskar " +
        "djur. Till slut har de bestämt sig för att köpa en kattunge. De åker till ett djurhem " +
        "för att titta på katter som behöver ett nytt hem. Där hittar de en liten grå kattunge " +
        "med stora gröna ögon som leker med ett snöre. Barnen tycker att den är jättesöt och " +
        "vill ta med den hem direkt. Mamma påminner dem om att en katt kräver mycket ansvar. " +
        "Man måste mata den varje dag och hålla kattlådan ren. Barnen lovar att hjälpa till " +
        "med allt arbete. De köper katten och döper den till Findus.",
      glossary: {
        "skaffa": "get",
        "husdjur": "pet",
        "kattunge": "kitten",
        "djurhem": "animal shelter",
        "snöre": "string",
        "jättesöt": "really cute",
        "kräver": "requires",
        "ansvar": "responsibility",
        "kattlådan": "the litter box",
        "döper": "names"
      },
      questions: [
        { type: "gist", q: "Varför vill familjen skaffa ett husdjur?", qEn: "Why does the family want to get a pet?",
          options: ["Barnen älskar djur", "De behöver en vakthund", "Det är gratis att ha djur"], correct: 0,
          explain: "„Familjen Lindgren har länge diskuterat att skaffa ett husdjur eftersom barnen älskar djur.“" },
        { type: "detail", q: "Vilket djur bestämmer de sig för att köpa?", qEn: "Which animal do they decide to buy?",
          options: ["En kattunge", "En liten hund", "En fågel"], correct: 0,
          explain: "„Till slut har de bestämt sig för att köpa en kattunge.“" },
        { type: "detail", q: "Var hittar de kattungen?", qEn: "Where do they find the kitten?",
          options: ["På ett djurhem", "Ute på gatan", "Hos en granne"], correct: 0,
          explain: "„De åker till ett djurhem för att titta på katter...“" },
        { type: "detail", q: "Vad påminner mamman barnen om?", qEn: "What does the mother remind the children about?",
          options: ["Att en katt kräver mycket ansvar", "Att katten är för dyr", "Att de inte får leka med den"], correct: 0,
          explain: "„Mamma påminner dem om att en katt kräver mycket ansvar.“" },
        { type: "detail", q: "Vad döper de katten till?", qEn: "What do they name the cat?",
          options: ["Findus", "Kalle", "Katten"], correct: 0,
          explain: "„De köper katten och döper den till Findus.“" }
      ]
    }

  ];

  stories.forEach(function (s) {
    s.wordCount = (s.text.match(/[A-Za-zÅÄÖåäö]+/g) || []).length;
  });
  window.SvCI_STORIES = (window.SvCI_STORIES || []).concat(stories);
})();
