/* ============================================================================
   Swedish CI — data/exam-reading-c.js
   Timed SFI C-style reading comprehension tests.
   Level: SFI Kurs C (A2-high / B1 vocabulary range).
   Time limit: 30 minutes.
   Contains 2 exams. Registers into window.SvCI_EXAM_READING_C.
   ========================================================================== */
(function () {
  "use strict";

  var exams = [
    {
      id: "exam-rc-1",
      title: "Läsförståelse C — Prov 1",
      level: "C",
      timeMinutes: 30,
      texts: [
        {
          id: "rc1-t1",
          title: "Hyra en lägenhet i andra hand",
          type: "informerande",
          text:
            "Lägenhet uthyres i andra hand i centrala Uppsala. Det är en ljus och fin tvåa på 55 kvadratmeter. " +
            "Lägenheten ligger på tredje våningen. Hiss finns i fastigheten. Hyran är 8 500 kronor per månad. " +
            "I hyran ingår el, värme och bredband. Lägenheten hyrs ut möblerad från den 1 september och sex " +
            "månader framåt, med möjlighet till förlängning. Vi söker en lugn och skötsam person som inte " +
            "röker och inte har husdjur. En månads deposition krävs vid kontraktsskrivning. Om du är intresserad, " +
            "skicka ett mejl till oss och berätta lite om vem du är och vad du gör.",
          questions: [
            {
              q: "Hur stor är lägenheten?",
              qEn: "How large is the apartment?",
              options: ["55 kvadratmeter", "8 500 kvadratmeter", "35 kvadratmeter", "Två våningar"],
              correct: 0,
              explain: "Texten säger: „Det är en ljus och fin tvåa på 55 kvadratmeter.“"
            },
            {
              q: "Vad ingår i månadshyran?",
              qEn: "What is included in the monthly rent?",
              options: ["Mat", "El, värme och bredband", "Bara möbler", "Ingenting extra"],
              correct: 1,
              explain: "Texten anger: „I hyran ingår el, värme och bredband.“"
            },
            {
              q: "Från och med när hyrs lägenheten ut?",
              qEn: "From when is the apartment rented out?",
              options: ["1 september", "1 augusti", "1 oktober", "Efter sex månader"],
              correct: 0,
              explain: "Texten säger: „Lägenheten hyrs ut möblerad från den 1 september...“"
            }
          ]
        },
        {
          id: "rc1-t2",
          title: "Arbetsschema på restaurangen",
          type: "instruerande",
          text:
            "Här är arbetsschemat för vecka 25 på Restaurang Blå Havet. Måndag till onsdag arbetar Johan från " +
            "klockan 10:00 till 18:00 i köket. På torsdag och fredag tar han hand om disken mellan 12:00 och " +
            "20:00. Lördag är han helt ledig, men på söndag arbetar han kvällsskift i matsalen från 16:00 till " +
            "22:00. Lunchrasten är 30 minuter lång varje dag och ska tas mitt under arbetspasset. Om du blir " +
            "sjuk måste du ringa chefen senast klockan 08:00 på morgonen. Byte av arbetspass måste alltid " +
            "godkännas av restaurangchefen i förväg.",
          questions: [
            {
              q: "Vilka dagar arbetar Johan i köket?",
              qEn: "Which days does Johan work in the kitchen?",
              options: ["Torsdag och fredag", "Söndag kväll", "Måndag till onsdag", "Lördag"],
              correct: 2,
              explain: "Enligt texten: „Måndag till onsdag arbetar Johan från klockan 10:00 till 18:00 i köket.“"
            },
            {
              q: "Vad ska man göra om man blir sjuk?",
              qEn: "What should you do if you get sick?",
              options: [
                "Skicka ett SMS till en kollega",
                "Ringa chefen senast klockan 08:00",
                "Komma till jobbet ändå",
                "Ringa restaurangchefen efter klockan 10:00"
              ],
              correct: 1,
              explain: "Texten säger klart: „Om du blir sjuk måste du ringa chefen senast klockan 08:00 på morgonen.“"
            }
          ]
        }
      ]
    },
    {
      id: "exam-rc-2",
      title: "Läsförståelse C — Prov 2",
      level: "C",
      timeMinutes: 30,
      texts: [
        {
          id: "rc2-t1",
          title: "Information från Vårdcentralen Kronan",
          type: "informerande",
          text:
            "Välkommen till Vårdcentralen Kronan. Vi har öppet måndag till fredag från klockan 08:00 till 17:00. " +
            "Om du behöver akut vård på helgen hänvisar vi till närakuten som har öppet alla dagar från 08:00 till " +
            "22:00. Du kan boka tid hos oss genom att ringa på telefonnummer 018-123 456 under våra telefontider som " +
            "är vardagar 08:00 till 11:00. Det går också bra att boka tid digitalt via vår hemsida dygnet runt. " +
            "Avbokning av besök måste göras senast 24 timmar före din bokade tid. Om du uteblir från besöket utan " +
            "att avboka får du betala en avgift på 400 kronor.",
          questions: [
            {
              q: "När har vårdcentralen öppet?",
              qEn: "When is the health clinic open?",
              options: [
                "Varje dag dygnet runt",
                "Lördag och söndag",
                "Måndag till fredag klockan 08:00 till 17:00",
                "Måndag till fredag klockan 08:00 till 11:00"
              ],
              correct: 2,
              explain: "Texten säger: „Vi har öppet måndag till fredag från klockan 08:00 till 17:00.“"
            },
            {
              q: "Vad händer om man missar sin tid utan att avboka?",
              qEn: "What happens if you miss your appointment without cancelling?",
              options: [
                "Man får en ny tid automatiskt",
                "Man måste betala 400 kronor",
                "Ingenting, det är gratis att missa tid",
                "Man får inte boka tid igen"
              ],
              correct: 1,
              explain: "Texten anger: „Om du uteblir från besöket utan att avboka får du betala en avgift på 400 kronor.“"
            },
            {
              q: "När kan man boka tid digitalt via hemsidan?",
              qEn: "When can you book an appointment digitally via the website?",
              options: [
                "Bara under telefontiderna",
                "Dygnet runt",
                "Endast på natten",
                "Bara måndag till fredag"
              ],
              correct: 1,
              explain: "Texten anger: „Det går också bra att boka tid digitalt via vår hemsida dygnet runt.“"
            }
          ]
        },
        {
          id: "rc2-t2",
          title: "Klädhusets regler för öppet köp",
          type: "instruerande",
          text:
            "Hos oss på Klädhuset har du alltid 30 dagars öppet köp och bytesrätt på alla ordinarie varor. För att " +
            "få pengarna tillbaka eller byta en vara måste du visa upp ett giltigt kvitto. Varan måste vara helt " +
            "oanvänd, ligga i originalförpackning och alla prislappar måste sitta kvar på kläderna. Observera att " +
            "öppet köp och bytesrätt inte gäller för underkläder av hygienskäl. Om du har köpt en vara på rea " +
            "(utförsäljning) gäller endast bytesrätt inom 14 dagar, inget öppet köp. Kontakta kundtjänst vid frågor.",
          questions: [
            {
              q: "Hur långt öppet köp har man på ordinarie varor?",
              qEn: "How long is the money-back guarantee for regular items?",
              options: ["14 dagar", "30 dagar", "7 dagar", "Inget alls"],
              correct: 1,
              explain: "Texten säger: „...alltid 30 dagars öppet köp och bytesrätt på alla ordinarie varor.“"
            },
            {
              q: "Vilka varor kan man inte lämna tillbaka på öppet köp av hygienskäl?",
              qEn: "Which items cannot be returned due to hygiene reasons?",
              options: ["Jackor", "Skor", "Underkläder", "Reavaror"],
              correct: 2,
              explain: "Texten påpekar: „Observera att öppet köp och bytesrätt inte gäller för underkläder av hygienskäl.“"
            }
          ]
        }
      ]
    }
  ];

  window.SvCI_EXAM_READING_C = exams;
})();
