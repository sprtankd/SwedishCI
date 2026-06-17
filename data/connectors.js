/* Discourse connectors for the Connector Challenge mode.
   Schema: {id, connector, connectorEn, category, level, exercises}
   - category: addition|contrast|cause|consequence|concession|time|example
   - exercises: [{text, textEn, options, correct, explanation}]
   - options: 3 connectors from DIFFERENT categories (plausible but distinguishable). */
const CONNECTORS = [
  // ==== ADDITION ====
  {
    id: "conn-dessutom",
    connector: "dessutom",
    connectorEn: "furthermore, besides",
    category: "addition",
    level: "B1",
    exercises: [
      {
        text: "Hon pluggar svenska på dagarna. ___ lär hon sig engelska på kvällen.",
        textEn: "She studies Swedish during the day. Furthermore, she is learning English in the evening.",
        options: ["dessutom", "däremot", "eftersom"],
        correct: 0,
        explanation: "'Dessutom' lägger till information — hon studerar båda språken."
      },
      {
        text: "Det nya jobbet är mycket intressant. ___ är lönen mycket bättre än förut.",
        textEn: "The new job is very interesting. Furthermore, the salary is much better than before.",
        options: ["därför", "dessutom", "fastän"],
        correct: 1,
        explanation: "'Dessutom' används för att lägga till ytterligare en positiv sak."
      }
    ]
  },
  {
    id: "conn-aven",
    connector: "även",
    connectorEn: "also, even",
    category: "addition",
    level: "B1",
    exercises: [
      {
        text: "Mötet är öppet för alla anställda. ___ vikarier är välkomna att delta.",
        textEn: "The meeting is open to all employees. Even temporary staff are welcome to participate.",
        options: ["Även", "Däremot", "Eftersom"],
        correct: 0,
        explanation: "'Även' visar att även vikarierna inkluderas i gruppen."
      },
      {
        text: "Han talar flytande engelska och franska. Han kan ___ lite spanska.",
        textEn: "He speaks fluent English and French. He also knows a little Spanish.",
        options: ["därför", "men", "även"],
        correct: 2,
        explanation: "'Även' fungerar här som 'också' för att lägga till spanskakunskaperna."
      }
    ]
  },
  {
    id: "conn-också",
    connector: "också",
    connectorEn: "also, too",
    category: "addition",
    level: "B1",
    exercises: [
      {
        text: "Jag gillar att bo i staden. Min familj vill ___ bo nära centrum.",
        textEn: "I like living in the city. My family also wants to live near the center.",
        options: ["också", "eftersom", "ändå"],
        correct: 0,
        explanation: "'Också' lägger till information om familjens önskan (liksom jag)."
      },
      {
        text: "Vi köpte nya möbler till vardagsrummet. Vi målade ___ om väggarna.",
        textEn: "We bought new furniture for the living room. We also repainted the walls.",
        options: ["trots", "också", "därför"],
        correct: 1,
        explanation: "'Också' används här för att visa att de gjorde en till sak."
      }
    ]
  },
  {
    id: "conn-forutom",
    connector: "förutom",
    connectorEn: "apart from, besides",
    category: "addition",
    level: "B1",
    exercises: [
      {
        text: "___ spanska talar hon arabiska och svenska flytande.",
        textEn: "Apart from Spanish, she speaks Arabic and Swedish fluently.",
        options: ["Eftersom", "Förutom", "Därför"],
        correct: 1,
        explanation: "'Förutom' visar att spanska läggs till de andra språken hon kan."
      },
      {
        text: "Alla kom till festen ___ Johan, som var tvungen att arbeta.",
        textEn: "Everyone came to the party except for Johan, who had to work.",
        options: ["sedan", "däremot", "förutom"],
        correct: 2,
        explanation: "'Förutom' utesluter Johan från gruppen som kom till festen."
      }
    ]
  },
  {
    id: "conn-inte-bara-utan-aven",
    connector: "inte bara... utan även",
    connectorEn: "not only... but also",
    category: "addition",
    level: "B1",
    exercises: [
      {
        text: "Han pratar ___ svenska ___ engelska på jobbet.",
        textEn: "He speaks not only Swedish but also English at work.",
        options: ["inte bara... utan även", "antingen... eller", "trots att... så"],
        correct: 0,
        explanation: "'Inte bara... utan även' kombinerar båda språken som han talar."
      },
      {
        text: "Projektet sparar ___ tid ___ pengar för företaget.",
        textEn: "The project saves not only time but also money for the company.",
        options: ["eftersom... därför", "inte bara... utan även", "dels... dels"],
        correct: 1,
        explanation: "'Inte bara... utan även' lägger till ytterligare en fördel med projektet."
      }
    ]
  },

  // ==== CONTRAST ====
  {
    id: "conn-daremot",
    connector: "däremot",
    connectorEn: "on the other hand, however",
    category: "contrast",
    level: "B1",
    exercises: [
      {
        text: "Min bror älskar att resa. Jag ___ trivs bäst hemma.",
        textEn: "My brother loves to travel. I, on the other hand, feel best at home.",
        options: ["däremot", "också", "eftersom"],
        correct: 0,
        explanation: "'Däremot' visar motsatsen mellan mig och min bror."
      },
      {
        text: "Tåget var försenat. Bussarna ___ gick helt enligt tidtabellen.",
        textEn: "The train was delayed. The buses, however, ran completely on schedule.",
        options: ["därför", "också", "däremot"],
        correct: 2,
        explanation: "'Däremot' kontrasterar tågets försening med bussarnas punktlighet."
      }
    ]
  },
  {
    id: "conn-a-andra-sidan",
    connector: "å andra sidan",
    connectorEn: "on the other hand",
    category: "contrast",
    level: "B1",
    exercises: [
      {
        text: "Lägenheten är ganska dyr. ___, ligger den väldigt nära mitt jobb.",
        textEn: "The apartment is quite expensive. On the other hand, it is very close to my work.",
        options: ["Eftersom", "Å andra sidan", "Följaktligen"],
        correct: 1,
        explanation: "'Å andra sidan' väger en nackdel (dyr) mot en fördel (nära jobbet)."
      },
      {
        text: "Det är skönt att bo på landet. ___, saknar man ibland stadens nöjen.",
        textEn: "It is nice to live in the countryside. On the other hand, one sometimes misses the city's entertainment.",
        options: ["Å andra sidan", "Dessutom", "Därför att"],
        correct: 0,
        explanation: "'Å andra sidan' introducerar ett motargument eller en motsatt aspekt."
      }
    ]
  },
  {
    id: "conn-tvartom",
    connector: "tvärtom",
    connectorEn: "on the contrary",
    category: "contrast",
    level: "B1",
    exercises: [
      {
        text: "Filmen var inte alls tråkig. ___, var den väldigt spännande.",
        textEn: "The movie wasn't boring at all. On the contrary, it was very exciting.",
        options: ["Tvärtom", "Dessutom", "Eftersom"],
        correct: 0,
        explanation: "'Tvärtom' visar att motsatsen till 'tråkig' (spännande) stämmer."
      },
      {
        text: "Hon blev inte arg när jag kom sent. ___, var hon väldigt förstående.",
        textEn: "She didn't get angry when I arrived late. On the contrary, she was very understanding.",
        options: ["Följaktligen", "Tvärtom", "Också"],
        correct: 1,
        explanation: "'Tvärtom' visar att hon var motsatsen till arg."
      }
    ]
  },
  {
    id: "conn-dock",
    connector: "dock",
    connectorEn: "however, yet",
    category: "contrast",
    level: "B1",
    exercises: [
      {
        text: "Han studerade hårt inför provet. Han blev ___ inte godkänd.",
        textEn: "He studied hard for the test. However, he did not pass.",
        options: ["även", "eftersom", "dock"],
        correct: 2,
        explanation: "'Dock' uttrycker en motsättning till förväntningen att han borde klarat sig."
      },
      {
        text: "Bilen är gammal. Den fungerar ___ fortfarande utan problem.",
        textEn: "The car is old. However, it still works without any problems.",
        options: ["därför", "dock", "också"],
        correct: 1,
        explanation: "'Dock' modifierar faktumet att den är gammal med att den ändå fungerar."
      }
    ]
  },
  {
    id: "conn-anda",
    connector: "ändå",
    connectorEn: "still, anyway",
    category: "contrast",
    level: "B1",
    exercises: [
      {
        text: "Det regnade kraftigt ute. De gick ___ ut på en promenad.",
        textEn: "It rained heavily outside. Still, they went out for a walk.",
        options: ["sedan", "också", "ändå"],
        correct: 2,
        explanation: "'Ändå' visar att handlingen utfördes trots det dåliga vädret."
      },
      {
        text: "Jag var väldigt trött, men jag stannade ___ kvar till slutet av konserten.",
        textEn: "I was very tired, but I still stayed until the end of the concert.",
        options: ["ändå", "därför", "eftersom"],
        correct: 0,
        explanation: "'Ändå' förstärker motsatsen — trots tröttheten stannade jag kvar."
      }
    ]
  },
  {
    id: "conn-trots-det",
    connector: "trots det",
    connectorEn: "despite that",
    category: "contrast",
    level: "B1",
    exercises: [
      {
        text: "Han var sjuk under helgen. ___, kom han till jobbet på måndagen.",
        textEn: "He was sick during the weekend. Despite that, he came to work on Monday.",
        options: ["Därför", "Trots det", "Eftersom"],
        correct: 1,
        explanation: "'Trots det' betyder 'trots att han var sjuk'."
      },
      {
        text: "Väglaget var mycket halt. ___, körde hon ganska fort på motorvägen.",
        textEn: "The road conditions were very slippery. Despite that, she drove quite fast on the highway.",
        options: ["Trots det", "Sedan", "Följaktligen"],
        correct: 0,
        explanation: "'Trots det' kontrasterar halkfaran med hennes höga fart."
      }
    ]
  },

  // ==== CAUSE ====
  {
    id: "conn-eftersom",
    connector: "eftersom",
    connectorEn: "since, because",
    category: "cause",
    level: "B1",
    exercises: [
      {
        text: "___ hon var trött gick hon och lade sig tidigt.",
        textEn: "Since she was tired, she went to bed early.",
        options: ["Eftersom", "Därför", "Däremot"],
        correct: 0,
        explanation: "'Eftersom' inleder en bisats som anger orsaken till att hon lade sig."
      },
      {
        text: "Vi ställde in matchen ___ planen var helt blöt efter regnet.",
        textEn: "We cancelled the match because the field was completely wet after the rain.",
        options: ["fastän", "trots", "eftersom"],
        correct: 2,
        explanation: "'Eftersom' förklarar orsaken till att matchen ställdes in."
      }
    ]
  },
  {
    id: "conn-darfor-att",
    connector: "därför att",
    connectorEn: "because",
    category: "cause",
    level: "B1",
    exercises: [
      {
        text: "Han köpte en ny cykel ___ den gamla hade gått sönder.",
        textEn: "He bought a new bicycle because the old one was broken.",
        options: ["därför att", "därför", "ändå"],
        correct: 0,
        explanation: "'Därför att' svarar på frågan *varför* han köpte en ny cykel."
      },
      {
        text: "Hon stannade hemma ___ hon behövde vila inför resan.",
        textEn: "She stayed home because she needed to rest before the trip.",
        options: ["däremot", "därför att", "sedan"],
        correct: 1,
        explanation: "'Därför att' inleder orsaken (behövde vila)."
      }
    ]
  },
  {
    id: "conn-pa-grund-av",
    connector: "på grund av",
    connectorEn: "due to, because of",
    category: "cause",
    level: "B1",
    exercises: [
      {
        text: "Tåget ställdes in ___ ett tekniskt fel på spåret.",
        textEn: "The train was cancelled due to a technical error on the track.",
        options: ["trots", "på grund av", "däremot"],
        correct: 1,
        explanation: "'På grund av' följs av ett substantiv/en nominalfras som förklarar orsaken."
      },
      {
        text: "___ det dåliga vädret stannade vi inomhus hela dagen.",
        textEn: "Because of the bad weather, we stayed indoors all day.",
        options: ["På grund av", "Fastän", "Därför"],
        correct: 0,
        explanation: "'På grund av' inleder orsaken (det dåliga vädret)."
      }
    ]
  },
  {
    id: "conn-namligen",
    connector: "nämligen",
    connectorEn: "namely, because (as an explanation)",
    category: "cause",
    level: "B1",
    exercises: [
      {
        text: "Hon kunde inte svara i telefon. Hon sov ___ vid den tiden.",
        textEn: "She couldn't answer the phone. She was, you see, asleep at that time.",
        options: ["nämligen", "därför", "dock"],
        correct: 0,
        explanation: "'Nämligen' ger en förklarande orsak i efterhand och placeras efter verbet."
      },
      {
        text: "Vi måste skynda oss. Tåget går ___ om fem minuter.",
        textEn: "We must hurry. The train leaves, you see, in five minutes.",
        options: ["också", "nämligen", "däremot"],
        correct: 1,
        explanation: "'Nämligen' förklarar *varför* vi måste skynda oss."
      }
    ]
  },

  // ==== CONSEQUENCE ====
  {
    id: "conn-alltsa",
    connector: "alltså",
    connectorEn: "therefore, so, in other words",
    category: "consequence",
    level: "B1",
    exercises: [
      {
        text: "Butiken stänger klockan arton. Vi måste ___ skynda oss dit nu.",
        textEn: "The shop closes at six. So we must hurry there now.",
        options: ["eftersom", "dock", "alltså"],
        correct: 2,
        explanation: "'Alltså' drar en slutsats (konsekvens) av butikens stängningstid."
      },
      {
        text: "Det är röd dag på torsdag. Vi är ___ lediga då.",
        textEn: "It is a public holiday on Thursday. So we are off work then.",
        options: ["alltså", "trots att", "även"],
        correct: 0,
        explanation: "'Alltså' visar konsekvensen av att det är en röd dag."
      }
    ]
  },
  {
    id: "conn-darfor",
    connector: "därför",
    connectorEn: "therefore, that's why",
    category: "consequence",
    level: "B1",
    exercises: [
      {
        text: "Det var mycket halt på vägarna. ___, körde bilarna mycket långsamt.",
        textEn: "It was very slippery on the roads. Therefore, the cars drove very slowly.",
        options: ["Därför", "Eftersom", "Tvärtom"],
        correct: 0,
        explanation: "'Därför' visar konsekvensen av halkan i början av meningen (V2-inversion följer)."
      },
      {
        text: "Hon vill bo i Göteborg. ___, söker hon jobb i den staden.",
        textEn: "She wants to live in Gothenburg. Therefore, she is looking for a job in that city.",
        options: ["Trots det", "Därför", "Eftersom"],
        correct: 1,
        explanation: "'Därför' visar att jobbsökandet är en konsekvens av hennes vilja."
      }
    ]
  },
  {
    id: "conn-foljaktligen",
    connector: "följaktligen",
    connectorEn: "consequently, as a result",
    category: "consequence",
    level: "B1",
    exercises: [
      {
        text: "Han missade sista bussen. Han blev ___ tvungen att ta en taxi.",
        textEn: "He missed the last bus. Consequently, he was forced to take a taxi.",
        options: ["även", "följaktligen", "eftersom"],
        correct: 1,
        explanation: "'Följaktligen' anger slutsatsen/följden av att missa bussen."
      },
      {
        text: "Priserna har stigit mycket. ___, har folk mindre pengar kvar till nöjen.",
        textEn: "Prices have risen a lot. Consequently, people have less money left for entertainment.",
        options: ["Följaktligen", "Fastän", "Dessutom"],
        correct: 0,
        explanation: "'Följaktligen' visar resultatet av prishöjningarna."
      }
    ]
  },
  {
    id: "conn-det-innebar-att",
    connector: "det innebär att",
    connectorEn: "it means that",
    category: "consequence",
    level: "B1",
    exercises: [
      {
        text: "Företaget ska spara pengar. ___ vissa tjänster försvinner.",
        textEn: "The company will save money. It means that some positions will disappear.",
        options: ["Eftersom", "Det innebär att", "Trots det"],
        correct: 1,
        explanation: "'Det innebär att' länkar besparingen till dess direkta konsekvens."
      },
      {
        text: "Skolan renoveras under sommaren. ___ undervisningen flyttar tillfälligt.",
        textEn: "The school is being renovated during the summer. This means that teaching moves temporarily.",
        options: ["Det innebär att", "Eftersom", "Men"],
        correct: 0,
        explanation: "'Det innebär att' förklarar konsekvensen av renoveringen för undervisningen."
      }
    ]
  },

  // ==== CONCESSION ====
  {
    id: "conn-trots-att",
    connector: "trots att",
    connectorEn: "although, despite the fact that",
    category: "concession",
    level: "B1",
    exercises: [
      {
        text: "___ han var jättetrött, fortsatte han att studera.",
        textEn: "Although he was very tired, he continued to study.",
        options: ["Eftersom", "Därför att", "Trots att"],
        correct: 2,
        explanation: "'Trots att' inleder en medgivande bisats (att han var trött stoppade honom inte)."
      },
      {
        text: "De spelade fotboll utomhus ___ det snöade.",
        textEn: "They played football outdoors although it was snowing.",
        options: ["trots att", "därför", "också"],
        correct: 0,
        explanation: "'Trots att' visar att snöandet inte hindrade dem från att spela."
      }
    ]
  },
  {
    id: "conn-aven-om",
    connector: "även om",
    connectorEn: "even if, even though",
    category: "concession",
    level: "B1",
    exercises: [
      {
        text: "___ det blir svårt, tänker jag göra mitt bästa.",
        textEn: "Even if it gets difficult, I plan to do my best.",
        options: ["Även om", "Eftersom", "Därför"],
        correct: 0,
        explanation: "'Även om' uttrycker ett villkor eller en eftergift (svårigheten stoppar mig inte)."
      },
      {
        text: "Vi åker till stranden ___ det är lite molnigt ute.",
        textEn: "We are going to the beach even though it is a bit cloudy outside.",
        options: ["däremot", "även om", "därför"],
        correct: 1,
        explanation: "'Även om' visar att molnen inte hindrar strandbesöket."
      }
    ]
  },
  {
    id: "conn-fastan",
    connector: "fastän",
    connectorEn: "although, even though",
    category: "concession",
    level: "B1",
    exercises: [
      {
        text: "Hon gick till jobbet ___ hon kände sig hängig.",
        textEn: "She went to work although she felt under the weather.",
        options: ["fastän", "därför att", "sedan"],
        correct: 0,
        explanation: "'Fastän' introducerar motsättningen (kände sig hängig men gick ändå)."
      },
      {
        text: "___ de hade bokat bord i förväg, fick de vänta länge.",
        textEn: "Although they had booked a table in advance, they had to wait a long time.",
        options: ["Eftersom", "Fastän", "Därför"],
        correct: 1,
        explanation: "'Fastän' sätter förhandsbokningen i kontrast till väntetiden."
      }
    ]
  },
  {
    id: "conn-visserligen-men",
    connector: "visserligen... men",
    connectorEn: "admittedly... but",
    category: "concession",
    level: "B1",
    exercises: [
      {
        text: "Boken är ___ lång, ___ den är mycket spännande.",
        textEn: "The book is admittedly long, but it is very exciting.",
        options: ["visserligen... men", "inte bara... utan även", "eftersom... så"],
        correct: 0,
        explanation: "'Visserligen... men' medger en svaghet (lång) men framhäver en styrka (spännande)."
      },
      {
        text: "Det är ___ kallt ute, ___ solen skiner i alla fall.",
        textEn: "It is admittedly cold outside, but the sun is shining at least.",
        options: ["dels... dels", "visserligen... men", "antingen... eller"],
        correct: 1,
        explanation: "'Visserligen... men' väger kylan mot solskenet."
      }
    ]
  },

  // ==== TIME/ORDER ====
  {
    id: "conn-sedan",
    connector: "sedan",
    connectorEn: "then, afterwards, since",
    category: "time",
    level: "B1",
    exercises: [
      {
        text: "Vi åt middag. ___ diskade vi tillsammans.",
        textEn: "We ate dinner. Then we did the dishes together.",
        options: ["Däremot", "Eftersom", "Sedan"],
        correct: 2,
        explanation: "'Sedan' visar tidsföljden (diskade efter middagen)."
      },
      {
        text: "Hon bodde i London i tre år, men ___ flyttade hon till Sverige.",
        textEn: "She lived in London for three years, but then she moved to Sweden.",
        options: ["därför", "sedan", "fastän"],
        correct: 1,
        explanation: "'Sedan' markerar nästa tidspunkt i hennes liv."
      }
    ]
  },
  {
    id: "conn-darefter",
    connector: "därefter",
    connectorEn: "after that, subsequently",
    category: "time",
    level: "B1",
    exercises: [
      {
        text: "Han avslutade sin utbildning. Kort ___ fick han sitt första jobb.",
        textEn: "He finished his education. Shortly after that, he got his first job.",
        options: ["också", "därefter", "däremot"],
        correct: 1,
        explanation: "'Därefter' betyder 'efter det' (efter utbildningen)."
      },
      {
        text: "Skriv ditt namn här. Gå ___ till nästa rum.",
        textEn: "Write your name here. After that, go to the next room.",
        options: ["därefter", "eftersom", "ändå"],
        correct: 0,
        explanation: "'Därefter' visar ordningen på stegen man ska ta."
      }
    ]
  },
  {
    id: "conn-slutligen",
    connector: "slutligen",
    connectorEn: "finally, lastly",
    category: "time",
    level: "B1",
    exercises: [
      {
        text: "Vi diskuterade i flera timmar. ___ kom vi överens om ett beslut.",
        textEn: "We discussed for several hours. Finally, we agreed on a decision.",
        options: ["Eftersom", "Även", "Slutligen"],
        correct: 2,
        explanation: "'Slutligen' markerar det sista steget i en process eller tidsföljd."
      },
      {
        text: "Först städade han köket, sen handlade han mat och ___ lagade han middag.",
        textEn: "First he cleaned the kitchen, then he shopped for food, and finally he cooked dinner.",
        options: ["trots", "slutligen", "därför"],
        correct: 1,
        explanation: "'Slutligen' avslutar listan av saker som gjordes."
      }
    ]
  },
  {
    id: "conn-forst-sedan",
    connector: "först... sedan",
    connectorEn: "first... then",
    category: "time",
    level: "B1",
    exercises: [
      {
        text: "Vi måste ___ boka biljetter, ___ kan vi planera hotellet.",
        textEn: "First we must book tickets, then we can plan the hotel.",
        options: ["först... sedan", "visserligen... men", "eftersom... därför"],
        correct: 0,
        explanation: "'Först... sedan' visar den nödvändiga tidsordningen."
      },
      {
        text: "Han vill ___ äta lunch, ___ tänker han fortsätta arbeta.",
        textEn: "He wants first to eat lunch, then he plans to continue working.",
        options: ["trots att... så", "antingen... eller", "först... sedan"],
        correct: 2,
        explanation: "'Först... sedan' strukturerar hans planer för eftermiddagen."
      }
    ]
  },
  {
    id: "conn-medan",
    connector: "medan",
    connectorEn: "while, whereas",
    category: "time",
    level: "B1",
    exercises: [
      {
        text: "Jag läste tidningen ___ min fru lagade mat.",
        textEn: "I read the newspaper while my wife cooked.",
        options: ["sedan", "medan", "därför"],
        correct: 1,
        explanation: "'Medan' visar att de två handlingarna pågick samtidigt."
      },
      {
        text: "___ vi väntade på bussen, pratade vi om helgen.",
        textEn: "While we were waiting for the bus, we talked about the weekend.",
        options: ["Medan", "Därför", "Trots"],
        correct: 0,
        explanation: "'Medan' markerar tidsperioden för samtalet."
      }
    ]
  },

  // ==== EXAMPLE ====
  {
    id: "conn-till-exempel",
    connector: "till exempel",
    connectorEn: "for example",
    category: "example",
    level: "B1",
    exercises: [
      {
        text: "Du kan äta många goda bär i skogen, ___ blåbär och smultron.",
        textEn: "You can eat many delicious berries in the forest, for example blueberries and wild strawberries.",
        options: ["däremot", "till exempel", "eftersom"],
        correct: 1,
        explanation: "'Till exempel' ger exempel på bär man kan hitta."
      },
      {
        text: "Många sporter är populära i Sverige, ___ fotboll och ishockey.",
        textEn: "Many sports are popular in Sweden, for example football and ice hockey.",
        options: ["till exempel", "därför", "också"],
        correct: 0,
        explanation: "'Till exempel' introducerar exempel på populära sporter."
      }
    ]
  },
  {
    id: "conn-bland-annat",
    connector: "bland annat",
    connectorEn: "among other things, including",
    category: "example",
    level: "B1",
    exercises: [
      {
        text: "I läxan ingår ___ att läsa kapitel tre och skriva en sammanfattning.",
        textEn: "The homework includes, among other things, reading chapter three and writing a summary.",
        options: ["fastän", "även", "bland annat"],
        correct: 2,
        explanation: "'Bland annat' visar att läxan innehåller fler saker, men dessa nämns särskilt."
      },
      {
        text: "Han har jobbat i många länder, ___ i Norge och Tyskland.",
        textEn: "He has worked in many countries, including Norway and Germany.",
        options: ["däremot", "bland annat", "sedan"],
        correct: 1,
        explanation: "'Bland annat' lyfter fram två av länderna han har arbetat i."
      }
    ]
  },
  {
    id: "conn-det-vill-saga",
    connector: "det vill säga",
    connectorEn: "that is to say, i.e.",
    category: "example",
    level: "B1",
    exercises: [
      {
        text: "Vi ses på måndag nästa vecka, ___ den tjugoförsta juni.",
        textEn: "We'll meet on Monday next week, i.e., the twenty-first of June.",
        options: ["eftersom", "däremot", "det vill säga"],
        correct: 2,
        explanation: "'Det vill säga' förtydligar datumet för måndagen."
      },
      {
        text: "Hon är sambo, ___ hon bor tillsammans med sin partner utan att vara gift.",
        textEn: "She is 'sambo', i.e., she lives together with her partner without being married.",
        options: ["det vill säga", "även", "därför"],
        correct: 0,
        explanation: "'Det vill säga' förklarar innebörden av det svenska ordet 'sambo'."
      }
    ]
  }
];

window.SvCI_CONNECTORS = CONNECTORS;
