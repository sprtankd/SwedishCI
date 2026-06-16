/* ============================================================
   Swedish CI — News Reader data: B1+ articles
   ~250-400 words each (lead + body combined). Heavier connector use
   (trots att, dessutom, däremot, dock, samtidigt som, oavsett) and more
   abstract vocabulary than the B1 set. Deliberately spans all three
   SFI D text types (informational / argumentative / instructional) so
   the text-type badges built in news.html have real examples of each,
   not just "informational". Articles are written for this app, not
   real reporting — "source" is a fictional in-app byline.
   ============================================================ */
const NEWS_B1_PLUS = [
  {
    id: "newsb1plus-integration-1",
    title: "Behövs en ny integrationspolitik?",
    titleEn: "Is a new integration policy needed?",
    level: "B1+",
    theme: "integration",
    textType: "argumentative",
    source: "Svenska CI Nyheter",
    wordCount: 266,
    lead:
      "Sveriges integrationspolitik har återigen blivit en av de mest diskuterade frågorna i den politiska " +
      "debatten. Medan vissa politiker vill satsa mer på språkundervisning och arbetsmarknadsåtgärder, menar " +
      "andra att integrationen redan fungerar relativt väl.",
    body:
      "Debatten har blossat upp efter att en ny rapport visat att skillnaderna i sysselsättning mellan " +
      "inrikes och utrikes födda fortfarande är stora, trots flera decenniers integrationsinsatser. " +
      "Förespråkare för en striktare politik menar att Sverige måste kräva mer av nyanlända, exempelvis " +
      "genom obligatoriska språktest innan permanent uppehållstillstånd beviljas. De anser att en sådan " +
      "åtgärd skulle öka motivationen att lära sig svenska snabbare och därmed underlätta inträdet på " +
      "arbetsmarknaden.\n\nAndra debattörer ställer sig dock kritiska till denna linje. De menar att " +
      "problemet inte primärt handlar om individens vilja, utan om strukturella hinder som diskriminering " +
      "och bristande erkännande av utländska utbildningar. Enligt dem riskerar hårdare krav att straffa de " +
      "svagaste i samhället, samtidigt som de rikaste och mest välutbildade redan klarar sig bra oavsett " +
      "politiska förändringar. Dessutom påpekar flera forskare att integration är en process som tar tid " +
      "och att resultat sällan syns förrän efter flera år i landet. En jämförelse med andra europeiska " +
      "länder visar att Sverige inte är ensamt om denna utmaning, vilket enligt forskarna tyder på att " +
      "enkla lösningar sällan räcker för ett så komplext samhällsproblem.\n\nTrots de motstridiga åsikterna " +
      "verkar de flesta vara överens om en sak: språket spelar en avgörande roll för att kunna delta fullt " +
      "ut i det svenska samhället, oavsett vilken politik som till slut väljs. Frågan är alltså inte om " +
      "språket är viktigt, utan hur man bäst hjälper människor att lära sig det utan att skapa nya " +
      "orättvisor.",
    glossary: {
      integrationspolitik: "integration policy",
      sysselsättning: "employment",
      förespråkare: "advocates, proponents",
      "strukturella hinder": "structural obstacles",
      diskriminering: "discrimination",
      motstridiga: "conflicting",
      avgörande: "decisive, crucial",
      debattörer: "debaters, commentators",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["En debatt om Sveriges integrationspolitik", "En ny lag om bilskatt", "Ett reportage om sommarvädret"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad vill förespråkarna för en striktare politik göra?",
        qEn: "What do advocates of a stricter policy want to do?",
        options: ["Ta bort alla bidrag till nyanlända", "Kräva obligatoriska språktest innan permanent uppehållstillstånd", "Stänga gränserna helt"],
        correct: 1,
      },
      {
        type: "detail",
        q: "Vad anser kritikerna är det egentliga problemet?",
        qEn: "What do the critics believe the real problem is?",
        options: ["Att nyanlända inte vill lära sig svenska", "Att Sverige tar emot för få invandrare", "Strukturella hinder som diskriminering"],
        correct: 2,
      },
      {
        type: "detail",
        q: "Vad säger forskare om integration enligt texten?",
        qEn: "What do researchers say about integration, according to the text?",
        options: ["Att den sker direkt", "Att den är en process som tar tid", "Att den aldrig lyckas"],
        correct: 1,
      },
      {
        type: "detail",
        q: "Vad är de flesta överens om enligt texten?",
        qEn: "What do most people agree on, according to the text?",
        options: ["Att integrationspolitiken bör avskaffas", "Att inga fler nyanlända ska få komma till Sverige", "Att språket är viktigt för att delta i samhället"],
        correct: 2,
      },
    ],
  },

  {
    id: "newsb1plus-climate-1",
    title: "Regeringen presenterar ny klimatplan",
    titleEn: "The government presents a new climate plan",
    level: "B1+",
    theme: "climate",
    textType: "informational",
    source: "Svenska CI Nyheter",
    wordCount: 254,
    lead:
      "Regeringen har presenterat en ny klimatplan som ska minska Sveriges utsläpp av växthusgaser med " +
      "fyrtio procent fram till år tjugotrettio. Planen innehåller flera konkreta åtgärder inom transport, " +
      "industri och jordbruk.",
    body:
      "Enligt klimat- och miljöministern är planen den mest omfattande som tagits fram på flera år. En av " +
      "de viktigaste delarna handlar om att skynda på utbyggnaden av laddinfrastruktur för elbilar, " +
      "eftersom transportsektorn fortfarande står för en stor del av landets utsläpp. Dessutom föreslås " +
      "nya skatteregler som ska göra det dyrare att använda fossila bränslen inom industrin, samtidigt som " +
      "företag som satsar på förnybar energi får ekonomiskt stöd.\n\nJordbruket pekas också ut som en " +
      "viktig sektor att förändra. Regeringen vill bland annat uppmuntra lantbrukare att minska sin " +
      "användning av konstgödsel och istället satsa på mer hållbara metoder. Kritiker menar dock att " +
      "planen saknar konkreta tidsramar för flera av åtgärderna, vilket gör det svårt att följa upp om " +
      "målen verkligen nås. Miljöorganisationer välkomnar ambitionen men efterlyser tydligare uppföljning " +
      "och hårdare sanktioner om utsläppsminskningarna inte uppnås i tid. Enligt myndigheten " +
      "Naturvårdsverket kommer planen även att följas upp årligen genom en oberoende utvärdering, för att " +
      "säkerställa att åtgärderna faktiskt ger effekt i praktiken och inte bara på pappret.\n\nOppositionen är delad i sin " +
      "respons. Vissa partier anser att planen går i rätt riktning, medan andra menar att den hotar svensk " +
      "konkurrenskraft genom att öka kostnaderna för redan pressade branscher. Trots oenigheten verkar de " +
      "flesta partier ändå överens om att klimatfrågan måste prioriteras högre de kommande åren, även om " +
      "vägen dit ser olika ut beroende på vem man frågar.",
    glossary: {
      klimatplan: "climate plan",
      växthusgaser: "greenhouse gases",
      laddinfrastruktur: "charging infrastructure",
      "fossila bränslen": "fossil fuels",
      "förnybar energi": "renewable energy",
      konstgödsel: "artificial fertilizer",
      sanktioner: "sanctions",
      konkurrenskraft: "competitiveness",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["En ny klimatplan från regeringen", "En ny skola i Stockholm", "En fotbollsturnering i Europa"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Hur mycket ska utsläppen minska enligt planen?",
        qEn: "How much are emissions supposed to decrease according to the plan?",
        options: ["Tio procent", "Hundra procent", "Fyrtio procent"],
        correct: 2,
      },
      {
        type: "detail",
        q: "Vad vill regeringen att lantbrukare ska minska inom jordbruket?",
        qEn: "What does the government want farmers to reduce in agriculture?",
        options: ["Antalet kor", "Storleken på gårdarna", "Användningen av konstgödsel"],
        correct: 2,
      },
      {
        type: "detail",
        q: "Vad säger kritiker om planen?",
        qEn: "What do critics say about the plan?",
        options: ["Att den saknar konkreta tidsramar", "Att den redan har genomförts", "Att den är för dyr för staten"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Hur reagerar oppositionen på planen enligt texten?",
        qEn: "How does the opposition react to the plan, according to the text?",
        options: ["Alla partier är helt eniga", "Oppositionen är delad i sin respons", "Oppositionen ignorerar frågan helt"],
        correct: 1,
      },
    ],
  },

  {
    id: "newsb1plus-education-1",
    title: "Ny skolreform ska stärka likvärdigheten",
    titleEn: "New school reform aims to strengthen equality in education",
    level: "B1+",
    theme: "education",
    textType: "informational",
    source: "Svenska CI Nyheter",
    wordCount: 256,
    lead:
      "Regeringen har lagt fram ett förslag till en ny skolreform som ska minska skillnaderna mellan " +
      "skolor i olika delar av landet. Reformen innebär bland annat förändringar i hur skolor finansieras " +
      "och hur lärare fördelas.",
    body:
      "Bakgrunden till reformen är en rad rapporter som visat att elevernas resultat varierar stort " +
      "beroende på vilken skola de går i, och att skillnaderna ofta hänger samman med socioekonomiska " +
      "faktorer i området. För att motverka detta föreslår regeringen ett nytt finansieringssystem där " +
      "skolor i utsatta områden ska få mer resurser per elev än skolor i mer välbeställda " +
      "områden.\n\nDessutom vill man införa ett nationellt system för att fördela erfarna lärare mer jämnt " +
      "mellan skolor, eftersom undersökningar visar att skolor med stora utmaningar ofta har svårast att " +
      "rekrytera och behålla kvalificerad personal. Förslaget innebär även extra ekonomiska incitament för " +
      "lärare som väljer att arbeta i skolor med särskilt stora behov. Reformen planeras att börja gälla " +
      "från och med nästa läsår, men redan nu förbereder flera kommuner sina budgetar för att kunna möta " +
      "de nya kraven på ett ansvarsfullt sätt utan att behöva dra ner på andra viktiga " +
      "verksamheter.\n\nLärarfacken har reagerat positivt " +
      "på förslaget men efterlyser samtidigt mer detaljer kring hur incitamenten ska utformas i praktiken. " +
      "Friskolornas representanter är mer kritiska och menar att reformen riskerar att missgynna " +
      "fristående skolor som redan i dag tar emot elever från olika bakgrunder. Samtidigt som debatten " +
      "pågår betonar utbildningsministern att målet inte är att straffa några skolor, utan att se till att " +
      "alla elever, oavsett var de bor, får en likvärdig chans att lyckas i skolan.",
    glossary: {
      skolreform: "school reform",
      likvärdig: "equitable, equal",
      finansieringssystem: "funding system",
      "socioekonomiska faktorer": "socioeconomic factors",
      incitament: "incentive",
      lärarfacken: "the teachers' unions",
      "fristående skolor": "independent schools",
      utbildningsministern: "the minister of education",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["En ny skolreform för ökad likvärdighet", "Ett nytt betygssystem för gymnasiet", "En strejk bland lärare"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad ska skolor i utsatta områden få enligt förslaget?",
        qEn: "What are schools in disadvantaged areas supposed to get according to the proposal?",
        options: ["Mindre resurser per elev", "Färre lärare", "Mer resurser per elev"],
        correct: 2,
      },
      {
        type: "detail",
        q: "Varför vill regeringen fördela erfarna lärare mer jämnt?",
        qEn: "Why does the government want to distribute experienced teachers more evenly?",
        options: ["Eftersom utmanande skolor har svårt att rekrytera personal", "Eftersom alla lärare vill flytta", "Eftersom det är billigare"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Hur reagerar friskolornas representanter på förslaget?",
        qEn: "How do representatives of independent schools react to the proposal?",
        options: ["De är mycket positiva", "De är kritiska", "De har inte hört om förslaget"],
        correct: 1,
      },
      {
        type: "detail",
        q: "Vad säger utbildningsministern är målet med reformen?",
        qEn: "What does the minister of education say is the goal of the reform?",
        options: ["Att straffa vissa skolor", "Att stänga friskolor", "Att ge alla elever en likvärdig chans"],
        correct: 2,
      },
    ],
  },

  {
    id: "newsb1plus-gender-1",
    title: "Är jämställdheten i hemmet en myt?",
    titleEn: "Is equality at home a myth?",
    level: "B1+",
    theme: "gender-equality",
    textType: "argumentative",
    source: "Svenska CI Nyheter",
    wordCount: 259,
    lead:
      "Sverige beskrivs ofta som ett av världens mest jämställda länder, men en ny debattartikel " +
      "ifrågasätter om jämställdheten verkligen sträcker sig in i hemmet. Enligt skribenten tar kvinnor " +
      "fortfarande på sig en större del av det obetalda hemarbetet, trots decennier av jämställdhetspolitik.",
    body:
      "Debattören, som själv är forskare inom sociologi, hänvisar till flera studier som visar att kvinnor " +
      "i genomsnitt lägger fler timmar i veckan på städning, matlagning och omsorg om barn än män gör, " +
      "även i hushåll där båda parter arbetar heltid. Enligt henne räcker det inte att lagstifta om " +
      "jämställd föräldraledighet om normerna i hemmet inte förändras i samma takt.\n\nHon menar dessutom " +
      "att den offentliga debatten ofta fokuserar på arbetsmarknaden och politiken, där Sverige onekligen " +
      "har gjort stora framsteg, medan den obetalda omsorgen i hemmet sällan diskuteras på samma sätt. Det " +
      "är, enligt henne, ett tecken på att jämställdhet riskerar att bli en symbolfråga snarare än en fråga " +
      "som verkligen förändrar vardagen för de allra flesta familjer.\n\nAndra debattörer invänder att " +
      "utvecklingen trots allt går åt rätt håll, om än långsamt, och att yngre generationer av män i högre " +
      "grad delar på hushållsarbetet än tidigare generationer gjorde. De varnar för att måla upp en " +
      "alltför negativ bild som riskerar att osynliggöra de framsteg som faktiskt har gjorts under de " +
      "senaste decennierna.\n\nOavsett vilken sida man lutar åt verkar de flesta vara överens om att frågan " +
      "om jämställdhet i hemmet förtjänar mer uppmärksamhet än den får i dag, särskilt eftersom den " +
      "påverkar både kvinnors karriärmöjligheter och barns syn på vad som är ett rimligt sätt att dela på " +
      "ansvar.",
    glossary: {
      sociologi: "sociology",
      jämställdhetspolitik: "gender-equality policy",
      föräldraledighet: "parental leave",
      normerna: "the norms",
      "obetalda omsorgen": "the unpaid care",
      symbolfråga: "symbolic issue",
      osynliggöra: "to make invisible, to obscure",
      generationer: "generations",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["En debatt om jämställdhet i hemmet", "Ett reportage om svensk fotboll", "En ny lag om skatter"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad visar studierna som debattören hänvisar till?",
        qEn: "What do the studies the debater refers to show?",
        options: ["Att kvinnor lägger fler timmar på hemarbete än män", "Att män gör allt hemarbete", "Att hemarbete har försvunnit helt"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad menar debattören räcker inte ensamt?",
        qEn: "What does the debater say is not enough on its own?",
        options: ["Att resa utomlands", "Att byta jobb", "Att lagstifta om jämställd föräldraledighet"],
        correct: 2,
      },
      {
        type: "detail",
        q: "Vad invänder andra debattörer?",
        qEn: "What do other commentators object?",
        options: ["Att inget har förändrats alls", "Att jämställdhet inte är viktigt", "Att utvecklingen går åt rätt håll, om än långsamt"],
        correct: 2,
      },
      {
        type: "detail",
        q: "Vad verkar de flesta vara överens om enligt texten?",
        qEn: "What do most people seem to agree on, according to the text?",
        options: ["Att frågan är oviktig", "Att frågan förtjänar mer uppmärksamhet", "Att män aldrig kommer att dela på hushållsarbetet"],
        correct: 1,
      },
    ],
  },

  {
    id: "newsb1plus-digital-1",
    title: "Så skyddar du dig bättre på nätet",
    titleEn: "How to better protect yourself online",
    level: "B1+",
    theme: "digital-society",
    textType: "instructional",
    source: "Svenska CI Nyheter",
    wordCount: 279,
    lead:
      "I takt med att fler tjänster flyttar in i mobilen och datorn ökar också riskerna för bedrägerier och " +
      "intrång. Här är några konkreta råd för att skydda din identitet och din ekonomi när du rör dig i den " +
      "digitala vardagen.",
    body:
      "Det första och viktigaste rådet är att aldrig dela koder från Mobilt BankID eller andra " +
      "inloggningsuppgifter med någon annan, inte heller om personen säger att den ringer från banken eller " +
      "en myndighet. Riktiga banker och myndigheter ber aldrig om sådana uppgifter över telefon. Om du blir " +
      "osäker bör du alltid avsluta samtalet och själv ringa upp banken på ett nummer du hittar på deras " +
      "officiella hemsida.\n\nDessutom är det viktigt att använda olika, starka lösenord till olika " +
      "tjänster, eftersom ett läckt lösenord annars kan ge obehöriga tillgång till flera av dina konton " +
      "samtidigt. Många väljer att använda en lösenordshanterare för att slippa komma ihåg alla lösenord " +
      "själv, vilket gör det lättare att hålla god säkerhet utan att tappa överblicken.\n\nVar också " +
      "uppmärksam på mejl och sms som ber dig klicka på en länk för att \"bekräfta\" en betalning eller en " +
      "leverans. Den här typen av nätfiske blir allt svårare att upptäcka, eftersom avsändarna ofta " +
      "kopierar utseendet från riktiga företag och myndigheter. Kontrollera alltid avsändaradressen " +
      "noggrant, och skriv hellre in adressen till tjänsten manuellt i webbläsaren än att klicka direkt på " +
      "en länk i ett meddelande du inte litar på.\n\nSlutligen rekommenderas det att regelbundet uppdatera " +
      "mjukvaran på sin telefon och dator, eftersom uppdateringarna ofta innehåller säkerhetsfixar som " +
      "täcker kända sårbarheter. Genom att kombinera dessa vanor minskar du risken för att drabbas av " +
      "digitala bedrägerier avsevärt, samtidigt som du kan dra nytta av de digitala tjänsternas fördelar " +
      "utan onödig oro.",
    glossary: {
      bedrägerier: "fraud, scams",
      intrång: "intrusion, breach",
      inloggningsuppgifter: "login credentials",
      obehöriga: "unauthorized persons",
      lösenordshanterare: "password manager",
      nätfiske: "phishing",
      sårbarheter: "vulnerabilities",
      avsändaradressen: "the sender's address",
    },
    questions: [
      {
        type: "gist",
        q: "Vad handlar texten om?",
        qEn: "What is the text about?",
        options: ["Hur man skyddar sig bättre på nätet", "Hur man startar ett företag", "Hur man lagar mat snabbt"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Vad ska man aldrig göra enligt texten?",
        qEn: "What should you never do, according to the text?",
        options: ["Dela koder från Mobilt BankID med andra", "Uppdatera sin mjukvara", "Använda starka lösenord"],
        correct: 0,
      },
      {
        type: "detail",
        q: "Varför rekommenderas en lösenordshanterare?",
        qEn: "Why is a password manager recommended?",
        options: ["Den gör lösenord svårare att komma ihåg", "Den är billigare än andra appar", "Den gör det lättare att hålla god säkerhet utan att tappa överblicken"],
        correct: 2,
      },
      {
        type: "detail",
        q: "Vad kännetecknar nätfiske enligt texten?",
        qEn: "What characterizes phishing, according to the text?",
        options: ["Det sker bara via brev", "Det är lätt att upptäcka alltid", "Avsändarna kopierar ofta utseendet från riktiga företag"],
        correct: 2,
      },
      {
        type: "detail",
        q: "Varför är det viktigt att uppdatera mjukvaran regelbundet?",
        qEn: "Why is it important to update software regularly?",
        options: ["Uppdateringar gör bara telefonen snabbare", "Uppdateringar innehåller ofta säkerhetsfixar för kända sårbarheter", "Uppdateringar är gratis"],
        correct: 1,
      },
    ],
  },
];
