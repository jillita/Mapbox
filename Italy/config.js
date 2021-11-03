var config = {
    style: 'mapbox://styles/jillita/ckc0w2abj3jx81iqrtgflkwtq',
    accessToken: 'pk.eyJ1IjoiamlsbGl0YSIsImEiOiJjaWdoNXJ4bzM4NGNhdmdrcnczZmxnd2hyIn0.HA1T3_gMTk1ORJ9JUQ326w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Holocaust Rescuers during World War II',
    subtitle: 'Italian Cycling Champion: Gino Bartali',
    byline: '',
    footer: 'Source: source citations, etc.',
    chapters: [

//TEST CHAPTER//
        {
            id: 'test-chapter-id',
            alignment: 'full',
            hidden: false,
            title: 'World War II Allies and Axis Countries in 1944',
            image: '',
            description:
'<p align="center"><iframe width="100%" height="600" src="https://www.youtube.com/embed/vCDbpP5POSQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>',


			location: {
                //center: [16.84923, 48.09285],
                //zoom: 4.09,
				center: [-4.24672, 50.63563],
                zoom: 3.43,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'april-30-1944-boundaries',
                     opacity: 0.25,
                     duration: 1000
                 },
                 {
                     layer: 'april-30-1944-boundaries thick',
                     opacity: 1,
                     duration: 1000
                 },

            
                 {
                     layer: 'april-30-1944 Labels',
                     opacity: 1,
                     duration: 1000
                 }
            ],

            onChapterExit: [
                 {
                     layer: 'april-30-1944-boundaries',
                     opacity: 0
                 },
                 {
                     layer: 'april-30-1944-boundaries thick',
                     opacity: 0
                 },

                 {
                     layer: 'april-30-1944 Labels',
                     opacity: 0
                 }

            ],
        },




//OPENING CHAPTER//
        {
            id: 'opening-chapter-id',
            alignment: 'right',
            hidden: false,
            title: 'World War II Allies and Axis Countries in 1944',
            image: '',
            description: '<p><iframe width="100%" height="400" src="./video/Rocky Barb_2021_1021sm.mp4"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p><p>A Holocaust rescuer story that is not well known outside of Italy is of Gino Bartali, a champion cyclist in the 1930s and 1940s and winner of the 1938 and 1948 Tour de France, and the 1936, 1937, and 1946 Giro d’Italia. In the early years of the war, Italy’s rule under fascist leader Benito Mussolini followed Germany’s lead in limiting Jewish citizen way of life [expand] and sending them to Italian camps, but not mandating deportation to foreign labor and extermination camps. Bartali was enlisted in the Italian army in 1940, but a medical condition prevented him from active duty and he was assigned as a courier and allowed to continue racing and training </p>',
                   location: {
                //center: [16.84923, 48.09285],
                //zoom: 4.09,
				center: [-4.24672, 50.63563],
                zoom: 3.43,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'april-30-1944-boundaries',
                     opacity: 0.25,
                     duration: 1000
                 },
                 {
                     layer: 'april-30-1944-boundaries thick',
                     opacity: 1,
                     duration: 1000
                 },

            
                 {
                     layer: 'april-30-1944 Labels',
                     opacity: 1,
                     duration: 1000
                 }
            ],

            onChapterExit: [
                 {
                     layer: 'april-30-1944-boundaries',
                     opacity: 0
                 },
                 {
                     layer: 'april-30-1944-boundaries thick',
                     opacity: 0
                 },

                 {
                     layer: 'april-30-1944 Labels',
                     opacity: 0
                 }

            ],
        },

//THIRD CHAPTER//
        {
            id: 'chapter-three-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 3: Italy and Gino Bartali',
            image: './images/gino-bartali-2.jpg',
            description: 'In 1943, however, Germany invaded and occupied Italy, bringing its extermination policies inside the formerly passive state. At this time, Bartali was called up by his friend, the cardinal of Florence to assist in his efforts to hide and provide fake identification documents to thousands of Jews who were hiding within his region’s religious buildings  and trying to flee to Allied countries or southern Italy. Bartalis years of training while working for the Army provided him a consistent story as he worked clandestinely as a courier for the Assisi Network between Florence and Assisi, and as far as Rome and Genoa. Hidden within the frame of his bicycle were false identification papers that he would deliver to others in his network or directly to Jews fleeing occupied Italy. If stopped by the Nazis along his route, his notoriety gave him the excuse that he was training to win great races after the war (McConnon McConnon, 2012). At other times, his mission was to ride to Genoa to pick up money provided by a lawyer aid in helping the network’s efforts [cite Road.cc]. From 1943 to 1944, it is estimated that he rode at least 40 missions for the Assisi Network .',
            location: {
                center: [15.56374, 42.09781],
                zoom: 5.30,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'Florence to Assisi Track 2',
                     opacity: 0,
                     duration: 5000
			},
			{
                     layer: 'Assisi to Terontola Track 3',
                     opacity: 0,
                     duration: 5000

                 },
                 {
                     layer: 'april-30-1944-boundaries',
                     opacity: 0.25,
                     duration: 1000
                },
                 {
                     layer: 'april-30-1944-boundaries thick',
                     opacity: 1,
                     duration: 1000
                 },
                 {
                     layer: 'april-30-1944 Labels',
                     opacity: 1,
                     duration: 1000
                 }                 

                 
            ],
            onChapterExit: [
                 {
                     layer: 'Florence to Assisi Track 2',
                     opacity: 0
			}, 
			{
                     layer: 'Assisi to Terontola Track 3',
                     opacity: 0

                 },
                 {
                     layer: 'april-30-1944-boundaries',
                     opacity: 0
                 },
                 {
                     layer: 'april-30-1944-boundaries thick',
                     opacity: 0,
                     duration: 1000
                 },
                 {
                     layer: 'april-30-1944 Labels',
                     opacity: 0,
                     duration: 1000
                 }                 


            ]
        },
//Fourth CHAPTER//
        {
            id: 'chapter-four-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 4: Gino and Cardinal Della Costa, the Bishop of Florence',
			image: './images/DallaCosta-Bartali.png',
            description: '<p>His successful bike racing career afforded him the money to own a few properties in Florence. During the German occupation, he hid Jewish family friends in one of his buildings and also supplied the family’s mother with false identification so she could leave their hiding place for water and food (Yad Vashem, 2021). A humble and deeply religious Catholic with the nickname Il Pio (the Pious), Bartali frequently prayed for guidance and protection for his family as he was gripped with fear knowing the danger that each day presented when he left on his missions and seeing what was happening to others (McConnon McConnon, 2012).</p><p>During and after the war, Bartali never told his family or friends about his role. Like millions of others, he wanted to forget and move on with his life. He resumed racing and reclaimed his grand tour titles in 1946 and 1948 to great fanfare as Italy struggled to rebuild its national identity after the war. He and his wife, Adriana, raised their two children, Andrea and Luigi, and watched grandchildren born. But as the decades passed, Bartali’s son, Luigi, began to ask his father questions about the war, and slowly revelations began to unfold.</p>',
            location: {
                center: [11.26244, 43.76776],
                zoom: 14.88,
                pitch: 0,
                bearing: 13.60
            },
            mapAnimation: 'flyTo',
	      rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'Italy Towns',
                     opacity: 1,
                     duration: 5000
                 },
				                  {
                     layer: 'mapbox-satellite',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'Italy Towns',
                     opacity: 1
                 },
				 {
                     layer: 'mapbox-satellite',
                     opacity: 1
                 }
            ]
        },
//FIFTH CHAPTER//
        {
            id: 'chapter-five-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 5: Gino Rides from Florence to Assisi for the Underground',
            image: './images/Florence2016.jpg',
            description: 'Even those who were brave and clear in their moral decisions faced a spectrum of emotions during their involvement. Father Rufino Niccacci, who coordinated the clandestine activities in Assisi, “discovered within himself an uncommon reservoir of courage and wisdom” as he led the rescue efforts instructed by Cardinal Dalla Costa from Florence. Father Niccacci managed the combined efforts of his San Damiano monastery, the San Quirico convent, the Brizi family secret printing press, among other parts of the region’s network. This isn’t to say that the rescue efforts were pure feats of confidence and mental fortitude. Being human, the rescuers were prone to fear and weakness. The Germans nearly caught Luigi, the father of the Brizi family, printing forged documents when they visited his shop. Gripped with fear, he ran to Father Niccacci to resign from the work, but at San Damiano he caught his first glimpse of champion Gino Bartali trading papers with the Father and then riding off into the darkness. The Father explained to the startled man, “It will please you to know that some of the documents you prepared have been brought to Perugia and to Florence by Gino himself.” That moment recalibrated Brizi and renewed his strength. “The idea of taking part in an organization that could boast a champion like Gino Bartali among its ranks, filled me with such pride that my fear took a back seat.”',
            location: {
                center: [11.70321, 43.40513],
                zoom: 9.07,
                pitch: 60,
                bearing: 108
            },
            mapAnimation: 'flyTo',
	      rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'Florence to Assisi Dash',
                     opacity: 1,
                     duration: 5000
                 },
				 {
                     layer: 'Florence to Assisi Track 2',
                     opacity: 1,
                     duration: 5000
                 },
				                  {
                     layer: 'Italy Towns',
                     opacity: 1,
                     duration: 5000
                 },
			    {
                     layer: 'mapbox-satellite',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'Florence to Assisi Dash',
                     opacity: 1
                 },                
				{
                     layer: 'Florence to Assisi Track 2',
                     opacity: 1
                 },
				 {
                     layer: 'Italy Towns',
                     opacity: 1
                 },
				  {
                     layer: 'mapbox-satellite',
                     opacity: 0
                 }
            ]
        },
//SIXTH CHAPTER//
        {
            id: 'chapter-six-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 6: Assisi, the Holy City and center of the Underground',
            image: './images/Assisi.jpg',
            description: 'Over the past ten years as Bartali’s story has become more widely known, there has been a steady effort in the cycling world and in the Italian and Jewish communities to keep Bartali’s heroic deeds in the public eye. Although these relationships are mainly centered in Europe, when covered by the press they have potential worldwide reach. They are led by people who believe that by continuing Bartali’s legacy they have a real opportunity to make a change in the world. In Israel they have founded the Gino Bartali Youth Leadership boarding school for children ages 14-17. Using cycling as a program to learn confidence and leadership, the students are taught academic and life skills that embrace diversity and multi-cultural knowledge. Near Terontola is the first public school in Italy named for Gino Bartali, which was dedicated in 2017 and attended by Ivo. The Gino Bartali Museum outside Florence, and the Museum of the Memory in Assisi continue educating locals and visitors of Bartali’s stories and of other Holocaust rescuers. A few of Bartali’s posthumous accolades include being awarded Righteous Among Nations in 2013 by Israel, which honors non-Jewish rescuers who risked their lives to save Jews during the Holocaust. ',
            location: {
                center: [12.60977, 43.06866],
                zoom: 15.68,
                pitch: 45,
                bearing: 60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'Florence to Assisi Dash',
                     opacity: 1,
                     duration: 5000
                 },
				 {
                     layer: 'Florence to Assisi Track 2',
                     opacity: 1,
                     duration: 5000
                 },
			    {
                     layer: 'Italy Towns',
                     opacity: 1,
                     duration: 5000
                 },
                 {
                     layer: 'Bartali Features',
                     opacity: 1,
                     duration: 5000
                 },

                 {
                     layer: 'mapbox-satellite',
                     opacity: 1,
                     duration: 5000
                 }

            ],
            onChapterExit: [
                 {
                     layer: 'Florence to Assisi Dash',
                     opacity: 1
                 },
				 {
                     layer: 'Florence to Assisi Track 2',
                     opacity: 1
                 },
				{
                     layer: 'Italy Towns',
                     opacity: 0
                 },
                 {
                     layer: 'Bartali Features',
                     opacity: 0
                 },

                 {
                     layer: 'mapbox-satellite',
                     opacity: 0
                 }

            ]
        },
//SEVENTH CHAPTER//
        {
            id: 'chapter-seven-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 7: Gino Rides from Assisi to Terontola',
            image: './images/LakeTresimeno.jpg',
            description: '<p>	In the case of Bartali, he held tight to his role in WWII, as did many others in the Assisi Network who died with their secrets. Additionally, Italy’s cities, villages, and infrastructure had been ravaged into ruins, so as a whole the country after the war was consumed by the mindset to move forward and rebuild. After the war, Bartali was consumed with proving his racing form despite his lost war years and age, 30 in 1944. </p><p>Big races such as the Tour de France and Giro dItalia, were not held during the war from 1940-1946 (Giro 1941-1945). The French race organizers of the Tour protested the German-occupation of France, and no one would get behind Germany’s attempt to hold the race as a sign of national unity [cite]. Many of Bartali’s former competitors had died in the war, and a new, younger crop of racers were ready to challenge the former champion. Remarkably, he won the Tour de France again in 1948, ten years after his first victory and when many in the media and professional ranks considered him too old at 34, calling him “Il Vecchio”, the Old Man [McConnin] Over 70 years later, this is still the longest gap between Tour de France victories for a single rider.</p> ',
            location: {
                center: [12.51069, 43.11674],
                zoom: 9.51,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
 
				 {
                     layer: 'Florence to Assisi Dash',
                     opacity: 1,
                     duration: 5000
                 },
				 {
                     layer: 'Florence to Assisi Track 2',
                     opacity: 1,
                     duration: 5000
                 },
		         {
                     layer: 'Assisi to Terontola Dash',
                     opacity: 1,
                     duration: 5000

                 },
			     {
                     layer: 'Assisi to Terontola Track 3',
                     opacity: 1,
                     duration: 5000

                 }

            ],
            onChapterExit: [
 
				{
                     layer: 'Florence to Assisi Dash',
                     opacity: 1
                 },
				 {
                     layer: 'Florence to Assisi Track 2',
                     opacity: 1
                 },
		    	{
                     layer: 'Assisi to Terontola Dash',
                     opacity: 1
                 },
			{
                     layer: 'Assisi to Terontola Track 3',
                     opacity: 1
                 }

            ]
        },
//EIGHTH CHAPTER//
        {
            id: 'chapter-eight-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 8: Gino at the Terontola Train Station',
            image: './images/TerontolaBridge.jpg',
            description: 'He raised three children with his wife, Adriana. Throughout his life he only mentioned what he did on his so-called wartime training rides briefly to a few close friends and his family. The man I met while in Perugia, Ivo Faltoni, was one of his trusted confidents. While on long drives to races or promotional events, Bartali would exorcise some of his demons with Ivo as his confessor. [Few translated quotes] In 1978, a Polish Jew war journalist, Alexander Ramati, who was with the Allies as they liberated Assisi, published a book, The Assisi Underground, with interviews of Father Rufino Niccacci and Luigi and Trento Brizi. For the first time, the story publicly mentioned Bartali’s role as a courier. This was later made into a film in 1985 and the Italian press hounded Bartali about his life during the war. Ever the combatant, “Il Ginettaccio,” refused to discuss his role, saying that it would overshadow those who lost their lives and suffered profoundly more than he had. “I don’t want to appear to be a hero. Heroes are those who died, who were injured, who spent many months in prison.” [RTV] ',
            location: {
                center: [12.01191, 43.20853],
                zoom: 16.21,
                pitch: 60,
                bearing: -14.39
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'Italy Towns',
                     opacity: 1,
                     duration: 5000
                 },
				 {
                     layer: 'Florence to Assisi Dash',
                     opacity: 0,
                     duration: 5000
                 },
				 {
                     layer: 'Florence to Assisi Track 2',
                     opacity: 0,
                     duration: 5000
                 },
				 {
                     layer: 'Assisi to Terontola Dash',
                     opacity: 1,
                     duration: 5000
                 },
                 
			{
                     layer: 'Assisi to Terontola Track 3',
                     opacity: 1,
                     duration: 5000
                 },
			{
                     layer: 'mapbox-satellite',
                     opacity: 1,
                     duration: 5000
                 }

            ],
            onChapterExit: [
                 {
                     layer: 'Italy Towns',
                     opacity: 0
                 },
				 {
                     layer: 'Florence to Assisi Dash',
                     opacity: 0
                 },
				 {
                     layer: 'Florence to Assisi Track 2',
                     opacity: 0
                 },
               	{
                     layer: 'Assisi to Terontola Dash',
                     opacity: 0
                 },
			{
                     layer: 'Assisi to Terontola Track 3',
                     opacity: 0
                 },
			{
                     layer: 'mapbox-satellite',
                     opacity: 0
                 }

            ]
        },
//NINTH CHAPTER//
        {
            id: 'chapter-nine-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 9: The Flight South to Allied Territory',
            image: '',
            description:
'<p><iframe width="100%" height="315" src="https://www.youtube.com/embed/vCDbpP5POSQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p><p>He raised three children with his wife, Adriana. Throughout his life he only mentioned what he did on his so-called wartime training rides briefly to a few close friends and his family. The man I met while in Perugia, Ivo Faltoni, was one of his trusted confidents. While on long drives to races or promotional events, Bartali would exorcise some of his demons with Ivo as his confessor. [Few translated quotes] In 1978, a Polish Jew war journalist, Alexander Ramati, who was with the Allies as they liberated Assisi, published a book, The Assisi Underground, with interviews of Father Rufino Niccacci and Luigi and Trento Brizi. For the first time, the story publicly mentioned Bartali’s role as a courier. This was later made into a film in 1985 and the Italian press hounded Bartali about his life during the war. Ever the combatant, “Il Ginettaccio,” refused to discuss his role, saying that it would overshadow those who lost their lives and suffered profoundly more than he had. “I don’t want to appear to be a hero. Heroes are those who died, who were injured, who spent many months in prison.” [RTV] </p>',

            location: {
                center: [17.34337, 40.27676],
                zoom: 5.77,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'april-30-1944-boundaries',
                     opacity: 0.25,
                     duration: 1000
                 },
                 {
                     layer: 'april-30-1944-boundaries thick',
                     opacity: 1,
                     duration: 1000
                 },
				 {
                     layer: 'flightsouth',
                     opacity: 1,
                     duration: 1000
                 },

            
                 {
                     layer: 'april-30-1944 Labels',
                     opacity: 1,
                     duration: 1000
                 }
            ],

            onChapterExit: [
                 {
                     layer: 'april-30-1944-boundaries',
                     opacity: 0
                 },
                 {
                     layer: 'april-30-1944-boundaries thick',
                     opacity: 0
                 },
				 {
                     layer: 'flightsouth',
                     opacity: 0
                 },

                 {
                     layer: 'april-30-1944 Labels',
                     opacity: 0
                 }
            ]
        },
//TENTH CHAPTER//
        {
            id: 'chapter-ten-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 10: Yad Vashem and the Righteous Among the Nations',
            image: './images/TerontolaPlaque.jpg',
            description: 'To date, there have been 27,712 rescuers awarded the title Righteous Among the Nations by Yad Vashem. They are from 51 countries around the world. It must be noted that these numbers will never reflect all those who rescued Jews and others under persecution. Nor is it a competition among nations as who has the greatest number. Unfortunately, the number of survivors who were rescued will also never be known. An educational excercise is to further investigate these countries to determine factors such as: the number of Jews in their population, how Germany influenced or occupatied the country, their history with Jewish people and other minorities, and their cultural attitude towards others. For more information visit www.yadvashem.org',
                   location: {
                center: [-0.46550, 48.21242],
                zoom: 3.85,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [               
                 {
                     layer: 'april-30-1944-boundaries',
                     opacity: 0,
                     duration: 1000
                 },
                 {
                     layer: 'country-label',
                     opacity: 1,
                     duration: 1000
                 },
				 {
                    layer: 'ran-countriesonlypoints',
                     opacity: 1,
                    duration: 1000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'april-30-1944-boundaries',
                     opacity: 0
                 },
                 {
                     layer: 'country-labels',
                     opacity: 0
                 },
			{
                  layer: 'ran-countriesonlypoints',
                     opacity: 0
                 }
            ]
        },
//MARKS BELOW ARE AT END//
    ]
};
