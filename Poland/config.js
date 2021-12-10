var config = {
    style: 'mapbox://styles/jillita/ckc0w2abj3jx81iqrtgflkwtq',
    accessToken: 'pk.eyJ1IjoiamlsbGl0YSIsImEiOiJjaWdoNXJ4bzM4NGNhdmdrcnczZmxnd2hyIn0.HA1T3_gMTk1ORJ9JUQ326w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Holocaust Rescuers during World War II',
    subtitle: 'Poland: Jan Karski and Irene Gut Opdyke',
    byline: 'Scroll down the right side to read the story. On the left, zoom or pan around the map using your mouse, or use keyboard shortcuts (arrows, plus and minus keys).',
    footer: 'Source: source citations, etc.',
    chapters: [
//OPENING CHAPTER//
        {
            id: 'opening-chapter-id',
            alignment: 'right',
            hidden: false,
            title: 'World War II Allies and Axis Countries in 1944',
            image: './images/WWIICountriesLegend_2021_1203c.png',
            description: 'European alliances were in a constant state of flux throughout World War II. This map is a general display of Germany’s influence at its height in April 1944. The map shows countries where they held occupation, adoption of racial laws, puppet states, protectorates, and Axis alliances. The green dots represent various types of concentration camps (labor, transit, extermination, internment, etc.) during the war. The purpose of both datasets is to give the user an idea of what Europe looked like at the time.',
                   location: {
                //center: [16.84923, 48.09285],
                //zoom: 4.09,
center: [28.15015, 49.45338],
zoom: 3.88,
pitch: 0.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'april-30-1944 Labels',
                     opacity: 1,
                     duration: 1000
                 }
            ],

            onChapterExit: [


            ],
        },

//FIRST CHAPTER//
        {
            id: 'chapter-one-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 1: Poland Overview',
            image: './images/GermanTrainToPoland_WeAreTravelingToPolandToBeatTheJews .jpg',
            description: '<p><i>Germany 1939. German soldiers aboard a train en route to Poland, with a sign “We are traveling to Poland to beat the Jews” (photo Yad Vashem).</i></p><p>The Germans sought to expand their empire and redeem themselves from World War I. They invaded Poland in 1939 from the west and the south in a military blitz, while in a coordinated effort, Russia invaded from the east a few weeks later. The Polish army was brave in its fight, but ultimately overpowered in a few days and World War II had officially begun. The western Poland provinces were annexed to the German Reich; the eastern ones given to Russia and Lithuania; and the middle was called the “General Government.”</p><p>Poland had 3.3 million Jews before the German invasion, which was the largest Jewish population in Europe. The Nazis plan was to extinguish Jews and other minorities and make Poland expanded “living space for Germans.” Only Poles with German blood were treated fairly and welcomed into the fold. The rest of the native Poles faced their own racial injustices and deportations. They were removed from their villages and replaced by Germans, the towns were given German names, the Polish language was banned, and any German could shoot a Pole for almost no reason. They were rounded up like the Jews and sent to labor camps to support the war and Germany’s expansion, but these were not meant as long-term living conditions. By the end of the war, two million native Poles were killed.</p>',
            location: {
center: [27.40100, 52.31306],
zoom: 5.33,
pitch: 0.00,
bearing: 0.00
 },
            mapAnimation: 'flyTo', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 
            ],
            onChapterExit: [

            ]
        },
		
		//FIRST B CHAPTER//
        {
            id: 'chapter-oneb-id',
            alignment: 'full',
            hidden: false,
            title: 'Chapter 1B: Poland Overview',
            image: '',
            description: '<p><i>Jewish families being deported from Krakow (photo Yad Vashem).</i></p><p><img src="./images/KrakowDeportation_YadVashem.jpg"></p>',
            location: {
center: [24.07682, 52.50108],
zoom: 5.79,
pitch: 0.00,
bearing: 0.00
 },
            mapAnimation: 'flyTo', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 
            ],
            onChapterExit: [

            ]
        },
		
				//FIRST C CHAPTER//
        {
            id: 'chapter-onec-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 1C: Poland Overview',
            image: '',
            description: '<p>Jews living within the annexed areas were sent to the General Government to live in ghettos. Those already living in the region were removed from their businesses and homes, and publicly humiliated as they transferred to their new destinations. Nazis would taunt them in the street, make them shave the beards of Orthodox Jews as public shaming, and have public hangings. They were ordered to wear “Jewish Stars” to distinguish them from other citizens and easily target them for abuse.</p><p><img src="./images/LublinJewishStarHumiliation.jpg"><p><i>A Jew in Lublin is forced to stand outside a cemetery and wear a Jewish star on his neck in order to publicly humiliate and abuse him (photo Yad Vashem).</i></p><p>As the horror of their new lives took shape, in 1941 the first extermination camp within the General Government began its function at Chelmno. A few months later, Sobibor, Belzec, and Treblinka opened and Auschwitz and Majdanek added assembly line killings to their camps. These six camps are where millions would be sent for the Nazis’ ruthless annihilation of innocent people.</p><p>Leaders of Allied countries, including Franklin Roosevelt and Winston Churchill, were aware as far back as 1938 for the plans of Jewish persecution, but despite causes for concern, still would not budge with increasing their immigration quotas. Even though alarms by European officials grew louder with mounting evidence of ghettos, round ups, and dead-end railways to concentration camps, the Allied leaders did not hold the oppression of Jews as a priority. Winning the war was the only thing in their sights and the Jews suffered for it.</p>',
            location: {
center: [25.28826, 50.95987],
zoom: 6.00,
pitch: 0.00,
bearing: 0.00
 },
            mapAnimation: 'flyTo', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 
            ],
            onChapterExit: [

            ]
        },
		
				//SECOND CHAPTER KARSKI//
        {
            id: 'chapter-two-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 2: Karski Intro',
            image: './images/CadetJanKarski1936_JanKarskiNet.jpg',
            description: '<p><i>Jan Karski as a cadet in the Polish Army 1936 (photo jankarski.net).</i></p><p>Jan Karski of Poland became one of the most courageous diplomats of World War 2. Tall and lean from a youth full of outdoor activity, he grew up in a socially privileged Catholic family in Lodz and spent his summers traveling around Europe and skiing its mountains. His adventures dialed in his command of multiple languages and nurtured his curiosity for government diplomacy. His family instilled in him a sense of social justice and tolerance for others from different backgrounds. At school his classes in government included other teens from different backgrounds, including Jews, with whom he developed strong friendships. His education at Lwow University launched his career as a multilingual civil servant in Poland’s Ministry of Foreign Affairs. When Germany invaded in 1939, his love for his country led him to join the Polish army, but they were easily overpowered by the Germans invaded from the west and then by the Russians from the east. After escaping capture by the Russians, the 28-year-old fled to Warsaw and joined the underground.</p> ',
            location: {
center: [25.28826, 50.95987],
zoom: 6.00,
pitch: 0.00,
bearing: 0.00
 },
            mapAnimation: 'flyTo', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
   
            ],
            onChapterExit: [

            ]
        },
		
		//SECOND B CHAPTER KARSKI//
        {
            id: 'chapter-twob-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 2B: Karski Warsaw',
            image: './images/KarskiYadVashem.jpg',
            description: '<p><i>Jan Karski portrait (photo Yad Vashem).</i></p><p>Karski’s new identity was as a crucial courier and spy between the Polish government-in-exile in Paris and London, and the Polish underground. His legendary photographic memory was a blessing and a curse. To bear witness to the atrocities of his countrymen, the Polish Jews, and report back to Allied leaders, the underground arranged to sneak him into the Warsaw ghetto through a newly dug tunnel. What he saw horrified him and was burned into his memory:</p><p><i>In Shoah, Claude Lanzmann’s classic documentary about the Holocaust, he would tell of seeing many naked dead bodies lying in the streets, and describe emaciated and starving people, listless infants and older children with expressionless eyes. He remembered watching from an apartment while two pudgy teenage boys in the uniforms of the Hitler Youth hunted Jews for sport, cheering and laughing when one of their rifle shots struck its target and brought screams of agony. - New York Times</i></p>',
            location: {
center: [21.20809, 52.23276],
zoom: 10.48,
pitch: 0.00,
bearing: 0.00
 },
            mapAnimation: 'flyTo', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
   
            ],
            onChapterExit: [

            ]
        },
		
						//SECOND BBB PHOTO CHAPTER KARSKI//
        {
            id: 'chapter-twobbb-id',
            alignment: 'full',
            hidden: false,
            title: 'Chapter 2BBB: Warsaw Ghetto Photo',
            image: '',
            description: '<p><i>Jews in the Warsaw ghetto, September 1941 (photo Yad Vashem).</i> Karski snuck into the Warsaw ghetto and was the first eyewitness to report what he saw to Allied leaders, but they failed to be moved into action to help.</p><p><img src="./images/JewsWarsawGhettoSept1941_YadVashem04_52.jpg"</p>',
            location: {
center: [21.20809, 52.23276],
zoom: 10.48,
pitch: 0.00,
bearing: 0.00
 },
            mapAnimation: 'flyTo', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
   
            ],
            onChapterExit: [

            ]
        },
		
		
				//SECOND BB PHOTO CHAPTER KARSKI//
        {
            id: 'chapter-twobb-id',
            alignment: 'full',
            hidden: false,
            title: 'Chapter 2BB: Warsaw Ghetto Photo',
            image: '',
            description: '<p><i>Children begging in the Warsaw ghetto (photo Yad Vashem).</i> Its population rose to 450,000 Jews amid deplorable conditions behind walls they were forced to build themselves. 80,000 Jews died in the ghetto while most of the rest were deported to Treblinka extermination camp.</p><p><img src="./images/ChildrenBeggingWarsawGhetto_YadVashem933_7_17.jpg"></p>',
            location: {
center: [21.20809, 52.23276],
zoom: 10.48,
pitch: 0.00,
bearing: 0.00
 },
            mapAnimation: 'flyTo', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
   
            ],
            onChapterExit: [

            ]
        },
		
				//SECOND C CHAPTER KARSKI//
        {
            id: 'chapter-twoc-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 2C: Karski Witnesses the Camps',
            image: './images/BuchenwaldLiberationApril1945_USHMM.PNG',
            description: '<p><i>Buchenwald camp at liberation, April 15, 1945 (photo USHMM).</i></p><p>Next, the underground bribed Ukrainian guards to take him into an Lublin concentration camp: </p><p><i>"Mr. Karski heard keening cries of men and women and thought he smelled burning flesh. Soon he witnessed the arrival of several thousand starving and frightened Jews who had been brought to the camp from Czechoslovakia. He watched as their valises and bags were taken away from them. Then he saw Jews being beaten and stabbed. Ranks of uniformed men pressed the crowd onto waiting box cars that had been coated with quicklime. Those who fell or fainted or who could not move were thrown into the cars. When no more bodies could fit inside, the doors were shut. Mr. Karski was told that the trains were heading for a camp not far away where their human cargo would be led into gas chambers. But he was also told that sometimes the trains were just left on sidings until those inside starved or suffocated.”</i></p><p><img src="./images/AmericanSoldierDachauDeathTrainApril291945_USHMM768761.jpg"></p>',
            location: {
center: [23.17789, 51.25729],
zoom: 8.58,
pitch: 0.00,
bearing: 0.00
 },
            mapAnimation: 'flyTo', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
   
            ],
            onChapterExit: [

            ]
        },
		
						//SECOND D CHAPTER KARSKI//
        {
            id: 'chapter-twod-id',
            alignment: 'full',
            hidden: false,
            title: 'Chapter 2D: Karski Testimony',
             image: '',
            description: '<p>Karski risked his life traveling in and out of German-occupied Poland with microfilm hidden in hollowed-out keys to report to his Polish government-in-exile in London. His diplomatic status bought him meetings with Allied leaders in England and the United States to report what was happening to the Jews. He found, however, that while the Allied leaders were sympathetic, their priority was militaristic. Their strategy was to win the war and Joseph Stalin’s confidence, preventing Russia from collapsing, and folding it into the United Nations.</p><p align="center"><iframe width="100%" height="500" src="https://www.youtube.com/embed/ZdbvjWygaIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>',
            location: {
center: [24.07682, 52.50108],
zoom: 5.79,
pitch: 0.00,
bearing: 0.00
				 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                  
            ],
            onChapterExit: [

            ]
        },
		
			//SECOND E CHAPTER KARSKI//
        {
            id: 'chapter-twoe-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 2E: Karski London',
             image: './images/RooseveltChurchill1943_YadVashem.jpg',
            description: '<p><i>President Roosevelt and Prime Minister Churchill at the Casablanca Conference, January 1943 (photo Yad Vashem)</i></p><p>In meetings with intelligence officers, Karski proposed they draft an official declaration to the German citizens with his information of the camps, ghettos, data, and statistics. The German people could put pressure on their government to stop the Holocaust, or would otherwise be held accountable by the Allies. He also recommended bombing important German infrastructure such as railroads and military camps, but the official countered that these non-military actions would appear that the war was provoked by the Jews and managed by international Jewry. Countries like France would wonder why this effort on the Jews, but not other oppressed people. This lack of support from military leaders set the Jewish people up to fight on their own, which they did mightily as individuals and underground or partisan groups, but they were never destined to succeed without intervention or their own government identity.</p><p>Despite Karski’s efforts, within a few years, as Germany took control of western and eastern Europe, their Final Solution became pervasive - and accepted. Deportation and killings of Jews in the street and in death camps went unquestioned and millions became complicit. By the time Germany surrendered in May 1945, the Nazis’ unchecked disregard for human life left six million Jews of all ages and social status murdered, in addition to another 3 million non-Jewish “undesirables,” such as the disabled, homosexuals, gypsies, and those who disagreed with their policies. </p>',
            location: {
   center: [2.72148, 51.27013],
zoom: 6.27,
pitch: 0.00,
bearing: 0.00
				 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                  
            ],
            onChapterExit: [

            ]
        },
		
			//SECOND F CHAPTER KARSKI//
        {
            id: 'chapter-twof-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 2F: Karski United States',
             image: './images/StoryOfASecretState.jpg',
            description: '<p>Despite all his careful measures to protect his identity, his work as a spy was leaked to the Nazis and the Polish government-in-exile made him stay in the United States for the remainder of the war. He continued to make the atrocities known to the American public, writing in several national publications and a book called "Story of a Secret State." Poland did not return to the country he knew before the war, its communist state compelled him to stay in the U.S. and pursue academic studies and a career as a professor at Georgetown University.</P><p>Karski was heralded for his bravery to tell the world about the truth of the Holocaust. While he did not save Jewish individuals like other rescuers, his unique contribution was in risking his life to witness the atrocities firsthand in the ghettos and camps, and then traveling to Allied countries and reporting to their leaders and pleading for action. He was awarded as Righteous Among the Nations by Yad Vashem in 1982.</p>',
            location: {
center: [-74.86078, 38.77791],
zoom: 6.92,
pitch: 0.00,
bearing: 0.00
				 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                  
            ],
            onChapterExit: [

            ]
        },

		
				//SECOND G CHAPTER//
        {
            id: 'chapter-twog-id',
            alignment: 'full',
            hidden: false,
            title: 'Chapter 2G: Karski Love Your Neighbor',
             image: '',
            description: '<p align="center"><iframe width="100%" height="500" src="https://www.youtube.com/embed/B3joHfKeKAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>',
            location: {
center: [-74.86078, 38.77791],
zoom: 6.92,
pitch: 0.00,
bearing: 0.00
				 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                  
            ],
            onChapterExit: [

            ]
        },
		
						//THIRD CHAPTER//
        {
            id: 'chapter-three-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 3: Intro to Irene',
             image: './images/IreneOpdyke1939YV_2317.jpg',
            description: '<p><i>Irene Opdyke, 1939 (photo Yad Vashem)</i></p><p>Irene Opdyke grew up in rural Częstochowa, Poland, in a loving Catholic family. As both the Oliner and Fogelman research has pointed out, her parents’ influence was instrumental in forming morals that would drive her to rescue Jews later in life. Growing up, Opdyke played with kids of different nationalities, and her family helped gypsies who lived in the nearby forest. Their table was always open to other people who were in need of warm food and friendly company.</p><p align="center"><iframe width="100%" height="500" src="https://www.youtube.com/embed/B0C_nx81qDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p><p>Despite Poland’s reputation for antisemitism, Opdyke’s parents modeled how to be accepting of people from other races and religions. For a child, the most important thing was to have friends and play well together, which was such an important part of her development that she never heard of antisemitism.</p><p><iframe width="100%" height="500" src="https://www.youtube.com/embed/SmqV-VrNZdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p><p>Researcher Nechama Tec found that a family’s History of Altruism would influence whether a person would engage in acts of rescue. This could be from a religious upbringing, political views, or family backgrounds that instilled a life-long pattern of helping anyone in need.</p><p><iframe width="100%" height="500" src="https://www.youtube.com/embed/HK9sUYHG0-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>',
            location: {
center: [21.63651, 51.05108],
zoom: 6.63,
pitch: 0.00,
bearing: 0.00
				 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                  
            ],
            onChapterExit: [

            ]
        },
		
				//FOURTH A CHAPTER//
        {
            id: 'chapter-foura-id',
            alignment: 'full',
            hidden: false,
            title: 'Chapter 4: Working for the Nazis',
             image: '',
            description: '<p><i>German soldiers during a military mission in Tarnopol, Poland (photo U.S. Holocaust Memorial Museum, courtesy of Eli Wallach)</i></p><p><img src="./images/GermanSoldiersTarnopol_USHMM710030.jpg"></p>',
            location: {
center: [25.77018, 49.55562],
zoom: 10.49,
pitch: 0.00,
bearing: 0.00
				 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                  
            ],
            onChapterExit: [

            ]
        },
		
				//FOURTH CHAPTER//
        {
            id: 'chapter-four-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 4: Working for the Nazis',
             image: '',
            description: '<p>Irene was enrolled in nursing school at a university when the German’s invaded Poland. Because she was young and healthy, she was taken by Germans to work at their headquarters in Tarnopol (Ternopil) where she became the manager of a laundry room and trusted housekeeper to a Nazi military leader. Opdyke was in charge of 12 Jews who were selected from the nearby labor camp to work under her supervision. They became friends and she would provide them food to bring back to the camp at night. </p><p><iframe width="100%" height="500" src="https://www.youtube.com/embed/3gjo4R-5D3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>',
            location: {
center: [25.77018, 49.55562],
zoom: 10.49,
pitch: 0.00,
bearing: 0.00
				 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                  
            ],
            onChapterExit: [

            ]
        },
		
		//FOURTH B CHAPTER//
        {
            id: 'chapter-fourb-id',
            alignment: 'full',
            hidden: false,
            title: 'Chapter 4B: Ghetto Deportation',
             image: '',
            description: '<p><i>Jews wearing circular badges are gathered with their belongings on an unpaved street during a deportation action from the Krzemieniec ghetto, Tarnopol, Poland (photo U.S. Holocaust Memorial Museum, courtesy of John R. Dennis).</i></p><p><img src="./images/JewsBeingDeportedFromTarnopolGhetto_USHMM766029.jpg"></p>',
            location: {
center: [25.77018, 49.55562],
zoom: 10.49,
pitch: 0.00,
bearing: 0.00
				 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                  
            ],
            onChapterExit: [

            ]
        },
		
						//FOURTH C CHAPTER//
        {
            id: 'chapter-fourc-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 4C: Murder of Jews',
             image: './images/GermansHumiliateElderlyJew_USHMM765943.jpg',
            description: '<p><i>Three young Germans publicly humiliate an elderly Jew in the streets of Krzemieniec, Poland, 1942 (photo U.S. Holocaust Memorial Museum, courtesy of Instytut Pamieci Narodowej.</i><p>The pervasive sense of antisemitism in Poland coupled with the native Polish population dealing with its own struggle to survive did little to breathe sympathy for what the Jews were enduring even as they were rounded up from ghettos and shot in mass graves, which Opdyke witnessed in her new surroundings.</p><p><iframe width="100%" height="500" src="https://www.youtube.com/embed/jaYO0PqKO_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>',
            location: {
center: [25.77018, 49.55562],
zoom: 10.49,
pitch: 0.00,
bearing: 0.00
				 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                  
            ],
            onChapterExit: [

            ]
        },
		
		//FOURTH D CHAPTER//
        {
            id: 'chapter-fourd-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 4D: Helping Jews',
             image: '',
            description: '<p>Her upbringing in a caring family created a willingness to help the Jews who also became her friends. Each day was a constant struggle to work under the eyes of Nazis while knowing that she could be killed for helping her friends, but she her faith never allowed her to give up.</p><p><iframe width="100%" height="500" src="https://www.youtube.com/embed/BKfozxinkr0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p><p>None of Nechama Tec’s research showed that a rescuer planned to help ahead of time. Each case was spontaneous and unplanned; an impulsive reaction when either someone came to them in need or they were presented with a situation to solve. They often took action without thinking, just doing what they felt needed to happen.</p><p>Working at the Nazi headquarters, oftentimes Opdyke would overhear that they were planning to raid the ghetto for deportation. She quickly figured how to hide her Jewish friends behind blankets on the shelves of the laundry room and lock them inside. During another raid, she led them up to the bathroom of one of the Nazi leaders and hid them in the air vent of his bathroom. Another time, she took them to a renovated villa to hide, locking them in the attic and then a servant’s quarters. She and her Jewish friends discovered that the villa had been built by a Jew who cleverly constructed a secret room in the cellar by way of the coal chute. Opdyke still had to care for them by bringing food and water, and removing their waste with pails. None of these solutions to hiding her friends was planned. Opdyke had to be spontaneous in response to the Nazis she worked for, and constantly think of how to keep her friends safe. </p><p><iframe width="100%" height="500" src="https://www.youtube.com/embed/mj_xbR090ls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>',
            location: {
center: [25.77018, 49.55562],
zoom: 10.49,
pitch: 0.00,
bearing: 0.00
				 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                  
            ],
            onChapterExit: [

            ]
        },
		
				//FIVE CHAPTER//
        {
            id: 'chapter-five-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 5: After the War',
             image: './images/IreneOpdykeTreeYV_2317_8.jpg',
            description: '<p><i>Irene Opdyke planting a carob tree at her Righteous Gentile ceremony (photo Yad Vashem).</i><p>There is a distortion in trying to compare the number of Righteous titles in each country given the great differences in their situations during the war and incalculable number of rescuers who will never be known. It also diminishes the efforts of the equally courageous few. Still, it is inspiring to see that in the occupied Polish region targeted by the Nazis as the center of extermination has by far the largest number of Righteous Gentiles: 7,177.  On the other hand, Poland also had the largest Jewish population in Europe, over 3 million, and only 10% survived. Of that, Yad Vashem estimates that only 1% were saved by rescuers. Irene Opdyke’s extraordinary example of moral courage while living with and working for the Nazis was recognized as Righteous Among the Nations by Yad Vashem in 1982.</p>',
            location: {
center: [35.17980, 31.77412],
zoom: 16.00,
pitch: 0.00,
bearing: 0.00
				 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                  
            ],
            onChapterExit: [

            ]
        },
		
//MARKS BELOW ARE AT END//
    ]
};
