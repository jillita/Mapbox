var config = {
    style: 'mapbox://styles/jillita/ckc0w2abj3jx81iqrtgflkwtq',
    accessToken: 'pk.eyJ1IjoiamlsbGl0YSIsImEiOiJjaWdoNXJ4bzM4NGNhdmdrcnczZmxnd2hyIn0.HA1T3_gMTk1ORJ9JUQ326w',
    showMarkers: false,
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
            alignment: 'left',
            hidden: false,
            title: 'World War II Allies and Axis Countries in 1944',
            image: './video/Poland_2021_1004sm.mp4',
            description: 'This map shows the extent of German occupation throughout Europe in April 1944.',
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

//FIRST CHAPTER//
        {
            id: 'chapter-one-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 1: The Danish Rescuers',
            image: './images/BikeFalseDocs.jpg',
            description: 'One of the many remarkable rescuer stories is from Denmark. Surrounded by water and Germany to the south, the Danish Resistance helped Jews fleeing the country by shuttling them in fishing boats to nearby Sweden. When Yad Vashem approached each rescuer to award them with Righteous Among the Nations, they insited that they be recognized as a group, the only one to be done so.',
            location: {
                center: [16.93735, 55.53372],
                zoom: 5.33,
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
                     layer: 'country-label',
                     opacity: 0,
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
                     opacity: 0.25
                 },
                 {
                     layer: 'april-30-1944-boundaries thick',
                     opacity: 1,
                     duration: 1000
                 },
                 {
                     layer: 'country-labels',
                     opacity: 0
                 },
            
                 {
                     layer: 'april-30-1944 Labels',
                     opacity: 1,
                     duration: 1000
                 }

            ]
        },
//SECOND CHAPTER//
        {
            id: 'chapter-two-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 2: Knud Dyby',
            image: './images/KnudDyby1941SM.jpg',
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
                     opacity: 0.25
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
            ]
        },
//SECOND B CHAPTER//
        {
            id: 'chapter-twob-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 2: Knud Dyby Testimony',
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
                     opacity: 0.25
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
            ]
        },
//THIRD CHAPTER//
        {
            id: 'chapter-three-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 3: Italy and Gino Bartali',
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
            description: '',
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
            description: '',
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
            description: '',
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
'<iframe width="100%" height="315" src="https://www.youtube.com/embed/vCDbpP5POSQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

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
            alignment: 'left',
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
