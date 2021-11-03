var config = {
    style: 'mapbox://styles/jillita/ckc0w2abj3jx81iqrtgflkwtq',
    accessToken: 'pk.eyJ1IjoiamlsbGl0YSIsImEiOiJjaWdoNXJ4bzM4NGNhdmdrcnczZmxnd2hyIn0.HA1T3_gMTk1ORJ9JUQ326w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Holocaust Rescuers during World War II',
    subtitle: 'Poland: Jan Karski and Irene Gut',
    byline: 'By Jillita',
    footer: 'Source: source citations, etc.',
    chapters: [
//OPENING CHAPTER//
        {
            id: 'opening-chapter-id',
            alignment: 'right',
            hidden: false,
            title: 'World War II Allies and Axis Countries in 1944',
            image: './images/WWIICountriesLegend2b.png',
            description: 'This map shows the extent of German occupation throughout Europe in April 1944.',
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
            image: './images/KarskiYadVashem.jpg',
            description: 'In Poland I saw terrible things in Poland that I don’t want to remember….I want to keep my sanity…..it is unhealthy….if I remember how was it possible that it happened, and this I reflected and thought about….why we should remember the H why we should not let humanity forget the H….not only for the reasons how terrible it was, for different reasons…..what I want to remember, what I remembered….I was taught as a youngster dignity, responsible to the society, humans have capacity to choose between good and evil and God gives them free will to choose, but then you have to respond, “What did I do with my life”….What I did not realize only indvs have souls, govts, hierarchies don’t have souls, there is no collective soul…..my reports every indv was sympathetic, but I reported to the most powerful allied leaders, the osmt powerful leaders of govts. They discarded their conscious which might have been sympathetic towards the Jews…',
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
		
						//FIRST B CHAPTER//
        {
            id: 'chapter-oneb-id',
            alignment: 'full',
            hidden: false,
            title: 'Chapter 1B: Karski Testimony',
             image: '',
            description: '<p align="center"><iframe width="100%" height="500" src="https://www.youtube.com/embed/giieNwR16bw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>',
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
		
		//SECOND CHAPTER//
        {
            id: 'chapter-two-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 2: Warsaw',
            image: './images/KarskiYadVashem.jpg',
            description: '<p>We should also emphasize…after the war over half a million Jews survived in Europe. Now, some of them dont owe anything to anybody. They survived in camps, the Nazis had no time to finish them. There are others who dont owe anything to anybody. They survived in the mountains, in the forests fighting as partisans, but most of them were helped by individuals: priests, nuns, peasants, some intelligencia…wherever they were…in France, in Belgium, in Poland, in Romania, Bulgaria, Serbia, Greece.</p> <p>Now, to help a Jew during the war was very dangerous. In France…in Belgium… you might go to jail if they caught you. Some cases you would be punished…penalty, pay some money…but in eastern Europe, particularly Poland, instantaneous death, execution. Sometimes if the family was involved, entire families shot. There were a few cases, not many, but a few cases, where Gestapo found out that peasants in the village knew that there was some Jewish family in hiding…they burned the entire village. But still there were people who were helping the Jews.</p> ',
            location: {
center: [21.23807, 52.22011],
zoom: 9.85,
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
            title: 'Chapter 3: Lublin',
             image: './images/KarskiYadVashem.jpg',
            description: 'In Jerusalem you have approximately 5,800 those trees of diplomacy. This is a fraction, a small fraction [i.e. planted to honor each recognized Righteous Gentile]. There must have been many, many, many more. They should be sought after even if they are dead already. Their names should be known. For the Jewish post-war generation, again, not to lose faith in humanity. For the non-Jewish post-war generation, make them realize first where a lack of tolerance…antisemitism, racism, hatred…where do they lead to? Yesterday Jews, tomorrow perhaps Catholics, or whites or yellows or blacks… And secondly, what obedience to our Lord’s commandment, “Love your neighbor” can do, it can save people even in such circumstances as the Second World War. And in those cases those Jewish survivors…Gestapo, SS, Germany army…were helpless. They were not clever enough.',
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

//FOURTH CHAPTER//
        {
            id: 'chapter-four-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 4: London',
             image: './images/KarskiYadVashem.jpg',
            description: 'One of the many remarkable rescuer stories.....',
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
		
		//FIFTH CHAPTER//
        {
            id: 'chapter-five-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 5: Washington DC',
             image: './images/KarskiYadVashem.jpg',
            description: 'Indvs, the more we teach the more we made change them, we should inform the people, but not limiting ourselves to the horrors and nothing else, make young minds more noble, more loving, solidarity with humanity….Elie Weisel said “the H did happen, let us not commit another….”…we should inform young people about personal responsibility, dignity',
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
		
				//SIXTH CHAPTER//
        {
            id: 'chapter-six-id',
            alignment: 'full',
            hidden: false,
            title: 'Chapter 6: Karski Testimony',
             image: '',
            description: '<p align="center"><iframe width="100%" height="500" src="https://www.youtube.com/embed/AC_DIts3GL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>',
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
		
						//SEVENTH CHAPTER//
        {
            id: 'chapter-seven-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 7: Intro to Irene',
             image: './images/IreneOpdyke1939YV_2317.jpg',
            description: 'Irene Opdyke grew up in Częstochowa, Poland. It was very happy family. We were at peace with God and people. My mother was saint because there were gypsies around in the forests and they were poor and my mother twice took gypsie to our home because she did have pneumonia she was very sick. My mother also encouraged us always to help no matter what. And when we were coming from school we brought the dogs and the cats and lost children and birds and whoever. My mother never said “Why are you doing that, it’s too much.” She knew how to fix. She knew how to help. And so we grow in that type of a home. I was born into Catholic faith. And I believe school we did go to church on Sunday but many times I could not pray because if you go with bunch of kids they just laughing giggling. And so when I needed to pray and away from school there was my favorite place little birch tree surrounded with the evergreens. There if needed prayer that was my God. I could almost feel and see him. And can tell him everything. It was a very precious time for me and maybe maybe because of that when was the war and prosecution I could pray to God in any place was and he was there for me. ',
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
		
								//SEVENTH B CHAPTER//
        {
            id: 'chapter-sevenb-id',
            alignment: 'full',
            hidden: false,
            title: 'Chapter 7B: Irene Growing Up',
             image: '',
            description: '<p align="center"><iframe width="100%" height="500" src="https://www.youtube.com/embed/RPhwArgNkVU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>',
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
		
				//EIGHTH CHAPTER//
        {
            id: 'chapter-eight-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 8: Irene in Ternopil General Government',
             image: './images/IreneOpdyke1939YV_2317.jpg',
            description: '<p>My father built a factory. And he did have many people under study and there were Polish and Russian and Jewish and Christian and Germans and many of the people were married. So we did have united nation with children and we played together. There was not any hate between us. We just tried to find nicest way to have pleasure in playing. That is all.</p> <p>SO YOUR PARENTS ALWAYS WERE ACCEPTING OF OTHER</p><p> And umm…we were wonderful. I did not know the word antisemitism. I learned that during the war and after the war. There was not any difference in that place I lived. Thatis true. There was not any “This is Jew” or “this is a dumb Pole” or I didnot hear my father or mother speaking about that. But often they said “You have to be good and play together.” And they tried to put lots of love in us for us for ourselves and also for other people. </p><p>DID YOU HAVE NEIGHBORS WHO WERE JEWISH OR GYPSIE</p><p>Yeah. The gypsies in the forest. We always help. And they were neighbor. But there were Jewish neighbors and Christian neighbors. I donot remember really thinking any big thing. We were all kids together playing.</p><p>HOW DID YOUR MOTHER COME TO KNOW GYPSIES IN THE FOREST</p><p>Well they were very close to our house because we lived out of town and we did have nice villa and you know the gypsies played music and so many times our people did go to see and they tell you story of your life you give a hand and they tell you story. So my mother many times shared with them food or something And then when the gypsy was very sick and she was dying and so my mother did go and took her to our home. That I remember. And the doctor come to help. So when there were poor people we brought them food and we... on holidays there was always three to four people at our tables you know.</p>',
            location: {
center: [26.56349, 49.83431],
zoom: 6.19,
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
