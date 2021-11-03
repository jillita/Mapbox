var config = {
    style: 'mapbox://styles/jillita/ckc0w2abj3jx81iqrtgflkwtq',
    accessToken: 'pk.eyJ1IjoiamlsbGl0YSIsImEiOiJjaWdoNXJ4bzM4NGNhdmdrcnczZmxnd2hyIn0.HA1T3_gMTk1ORJ9JUQ326w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Holocaust Rescuers during World War II',
    subtitle: 'The Netherlands and Tina Strobos',
    byline: '',
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
  
            ],

            onChapterExit: [

            ],
        },

//FIRST CHAPTER//
        {
            id: 'chapter-one-id',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 1: The Netherlands',
            image: './images/TinaStrobosTeenAndMom.jpg',
            description: 'One of the many remarkable rescuer stories is from Denmark. Surrounded by water and Germany to the south, the Danish Resistance helped Jews fleeing the country by shuttling them in fishing boats to nearby Sweden. When Yad Vashem approached each rescuer to award them with Righteous Among the Nations, they insited that they be recognized as a group, the only one to be done so.',
            location: {
center: [9.23206, 52.17400],
zoom: 5.66,
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
            title: 'Chapter 2: Amsterdam',
            image: './images/TinaStrobosTeenAndMom.jpg',
            description: 'One of the many remarkable rescuer stories is from Denmark. Surrounded by water and Germany to the south, the Danish Resistance helped Jews fleeing the country by shuttling them in fishing boats to nearby Sweden. When Yad Vashem approached each rescuer to award them with Righteous Among the Nations, they insited that they be recognized as a group, the only one to be done so.',
            location: {
center: [5.12223, 52.38318],
zoom: 9.91,
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
            alignment: 'full',
            hidden: false,
            title: 'Chapter 3: Growing up in Amsterdam',
            image: '',
            description: '<p align="center"><iframe width="100%" height="500" src="https://www.youtube.com/embed/IuJmz6rspTY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>',
            location: {
 center: [5.12223, 52.38318],
zoom: 9.91,
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
