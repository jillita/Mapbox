var config = {
    style: 'mapbox://styles/jillita/ckc0w2abj3jx81iqrtgflkwtq',
    accessToken: 'pk.eyJ1IjoiamlsbGl0YSIsImEiOiJjaWdoNXJ4bzM4NGNhdmdrcnczZmxnd2hyIn0.HA1T3_gMTk1ORJ9JUQ326w',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'World War II Holocaust Rescuers',
    subtitle: 'A geographic primer of Rescuers in 1940s Europe',
    byline: 'By Jillita',
    footer: 'Source: source citations, etc.',
    chapters: [
//OPENING CHAPTER//
        {
            id: 'opening-chapter-id',
            alignment: 'right',
            hidden: false,
            title: 'Allies and Axis during World War 2',
            image: './images/Boundaries1942Legend.png',
            description: 'info',
                   location: {
                center: [16.84923, 48.09285],
                zoom: 4.09,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'april-30-1944-boundaries',
                     opacity: 0.28,
                     duration: 1000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'april-30-1944-boundaries',
                     opacity: 0.28
                 }
            ]
        },
//FIRST CHAPTER//
        {
            id: 'chapter-one-id',
            alignment: 'left',
            hidden: false,
            title: 'Chapter 1: Number of Righteous Among the Nations per Country',
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
                     opacity: 0.28,
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
                  layer: 'ran-countriesonlypoints',
                     opacity: 0
                 },
                 {
                     layer: 'april-30-1944-boundaries',
                     opacity: 0
                 }

            ]
        },
//SECOND CHAPTER//
        {
            id: 'chapter-two-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 2: The Danish Rescuers',
            image: './images/RescuerDanishBoatSM.jpg',
            description: 'One of the many remarkable rescuer stories is from Denmark. Surrounded by water and Germany to the south, the Danish Resistance helped Jews fleeing the country by shuttling them in fishing boats to nearby Sweden. When Yad Vashem approached each rescuer to award them with Righteous Among the Nations, they insited that they be recognized as a group, the only one to be done so.',
            location: {
                center: [16.93735, 55.53372],
                zoom: 5.48,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo', 
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'april-30-1944-boundaries',
                     opacity: 0.28,
                     duration: 1000
                }
                 
            ],
            onChapterExit: [
                 {
                     layer: 'april-30-1944-boundaries',
                     opacity: 0
                 }

            ]
        },
//THIRD CHAPTER//
        {
            id: 'chapter-three-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 3: Knud Dyby',
            image: './images/KnudDyby1941.jpg',
            description: 'Knud Dyby was a Danish police officer who was also instrumental to the Resistance. In addition to creating false identification documents in his office, he also helped coordinate the fishermen who left ports around Copenhagen across the Strait to Sweden.',
            location: {
                center: [12.91419, 55.55646],
                zoom: 9.26,
                pitch: 45,
                bearing: 65
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
//THIRD B CHAPTER//
        {
            id: 'chapter-threeb-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 3b: Knud Dyby Testimony',
            image: '',
            description: '<iframe width="100%" height="400" src="https://www.youtube.com/embed/3cbKYXGgRgY?start=65"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: [12.91419, 55.55646],
                zoom: 9.26,
                pitch: 45,
                bearing: 65
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
//FOURTH CHAPTER MIGHT GET RID OF THIS//
        {
            id: 'chapter-four-id',
            alignment: 'left',
            hidden: false,
            title: 'Chapter 4: Le Chambon-sur-Lignon',
            image: './images/LeChambonTeens.jpg',
            description: '',
            location: {
                center: [2.19944, 46.85212],
                zoom: 5.23,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
//FIFTH CHAPTER MIGHT GET RID OF THIS//
        {
            id: 'chapter-five-id',
            alignment: 'left',
            hidden: false,
            title: 'Chapter 5: Survivor from Le Chambon-sur-Lignon',
            image: '',
            description: '<iframe width="450" height="255" src="https://www.youtube.com/embed/3dH28qLWUlo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>This survivor discusses the people of Le Chambon.</p>',
            location: {
                center: [4.29865, 45.06030],
                zoom: 13.91,
                pitch: 45,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
//SIXTH CHAPTER//
        {
            id: 'chapter-six-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 6: Italy and Gino Bartali',
            image: './images/gino-bartali-2.jpg',
            description: '',
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
                     layer: 'Florence_Assisi tracks',
                     opacity: 0,
                     duration: 5000
			},
			{
                     layer: 'Terontola_Assisi track',
                     opacity: 0,
                     duration: 5000

                 },
                 {
                     layer: 'april-30-1944-boundaries',
                     opacity: 0.28,
                     duration: 1000
                }
                 
            ],
            onChapterExit: [
                 {
                     layer: 'Florence_Assisi tracks',
                     opacity: 0
			}, 
			{
                     layer: 'Terontola_Assisi track',
                     opacity: 0

                 },
                 {
                     layer: 'april-30-1944-boundaries',
                     opacity: 0
                 }

            ]
        },
//SEVENTH CHAPTER//
        {
            id: 'chapter-seven-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 7: Gino and the Assisi Underground',
            image: './images/Florence2016.jpg',
            description: '',
            location: {
                center: [11.26571, 43.77048],
                zoom: 13.69,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
	      rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'Florence_Assisi tracks',
                     opacity: 0,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'Florence_Assisi tracks',
                     opacity: 1
                 }
            ]
        },
//SEVENTH B CHAPTER//
        {
            id: 'chapter-sevenb-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 7b: Gino Rides to Assisi',
            image: './images/Florence2016.jpg',
            description: '',
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
                     layer: 'Florence_Assisi tracks',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'Florence_Assisi tracks',
                     opacity: 1
                 }
            ]
        },
//EIGHTH CHAPTER//
        {
            id: 'chapter-eight-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 8: Assisi Underground',
            image: './images/Assisi.jpg',
            description: '',
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
                     layer: 'Florence_Assisi tracks',
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
                     layer: 'Florence_Assisi tracks',
                     opacity: 1
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
            title: 'Chapter 9: Assisi to Terontola',
            image: './images/LakeTresimeno.jpg',
            description: '',
            location: {
                center: [12.41283, 43.16488],
                zoom: 10.03,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'Florence_Assisi tracks',
                     opacity: 1,
                     duration: 5000
                 },
			{
                     layer: 'Terontola_Assisi track',
                     opacity: 1,
                     duration: 5000

                 }

            ],
            onChapterExit: [
                 {
                     layer: 'Florence_Assisi tracks',
                     opacity: 1
                 },
			{
                     layer: 'Terontola_Assisi track',
                     opacity: 1
                 }

            ]
        },
//TENTH CHAPTER//
        {
            id: 'chapter-ten-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 10: Terontola',
            image: './images/TerontolaBridge.jpg',
            description: '',
            location: {
                center: [12.01520, 43.20864],
                zoom: 15.81,
                pitch: 55,
                bearing: -5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'Florence_Assisi tracks',
                     opacity: 0,
                     duration: 5000
                 },
                 
			{
                     layer: 'Terontola_Assisi track',
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
                     layer: 'Florence_Assisi tracks',
                     opacity: 0
                 },
                 
			{
                     layer: 'Terontola_Assisi track',
                     opacity: 0
                 },
			{
                     layer: 'mapbox-satellite',
                     opacity: 0
                 }

            ]
        },
//ELEVENTH CHAPTER//
        {
            id: 'chapter-eleven-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 11: The Flight South',
            image: './images/BikeFalseDocs.jpg',
            description: '',
            location: {
                center: [14.64629, 41.37805],
                zoom: 6.26,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'april-30-1944-boundaries',
                     opacity: 0.28,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'april-30-1944-boundaries',
                     opacity: 0
                 }
            ]
        },
//MARKS BELOW ARE AT END//
    ]
};
