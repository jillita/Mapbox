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
//FIRST CHAPTER//
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'First Chapter',
            image: '/images/TerontolaPlaque.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
//SECOND CHAPTER//
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Chapter',
            image: 'images/RescuerDanishBoatSM.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [16.93735, 55.53372],
                zoom: 5.48,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
//THIRD CHAPTER//
        {
            id: 'third-chapter-id',
            alignment: 'right',
            hidden: false,
            title: 'Third Chapter',
            image: './images/KnudDyby1941.jpg',
            description: 'Lorem ipsum, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
//MARKS BELOW ARE AT END//
    ]
};
