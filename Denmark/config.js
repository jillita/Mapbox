var config = {
    style: 'mapbox://styles/jillita/ckvb95xzd14fg15mtm94q0cav',
    accessToken: 'pk.eyJ1IjoiamlsbGl0YSIsImEiOiJjaWdoNXJ4bzM4NGNhdmdrcnczZmxnd2hyIn0.HA1T3_gMTk1ORJ9JUQ326w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Holocaust Rescuers during World War II',
    subtitle: 'Denmark and Knud Dyby',
    byline: '',
    footer: 'Sources: All videos from the <a href="https://collections.ushmm.org/search/" target="blank">U.S. Holocaust Memorial Museum</a>. Information on the map data can be found at my <a href="https://jillgrecobodnar.com/mfa-project-index#index-map-data" target="blank">MFA Project Map Data page</a>.',
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
  
            ],

            onChapterExit: [

            ],
        },

//FIRST CHAPTER//
        {
            id: 'chapter-onea-id',
            alignment: 'right',
            hidden: false,
            title: 'Rescuer Knud Dyby',
            image: './images/KnudDyby1941SM.jpg',
            description: '<p><i>Knud Dyby in 1941 (photo Yad Vashem)</i></p><p>Knud Dyby was a member of the King Christian X’s Royal Guard before becoming a police officer in Copenhagen. He was instrumental to the Dane’s resistance against Germany and saving thousands of Jews and resistance workers by coordinating their escape to Sweden. </p><p>Denmark was invaded and occupied by Germany in April of 1940, but it was a far different situation than most other countries. The Danes were allowed to maintain their own government and police forces because Germany wanted to keep good relations with their “fellow Aryans.” Denmark was a key, if reluctant, player to Germany’s war effort. They obtained food from the Danish farms and used their ports and air bases for transportation of wartime materials.</p><p align="right"><iframe width="100%" height="500" src="https://www.youtube.com/embed/d3rMZHCnhoE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>',
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
      
            ],
            onChapterExit: [

            ]
        },

		//FIRST CHAPTER b Video//
		      {
            id: 'chapter-oneb-id',
            alignment: 'full',
            hidden: false,
            title: 'Jews in Denmark',
            image: '',
            description: '<p>Denmark also had very few Jews in its population, around 7,500 (0.2%). Knud Dyby, a police officer and rescuer working for the Danish Underground, describes Jews in Denmark as mostly merchants and farmers who were well-liked and accepted by the otherwise homogenous society. The Danish government did not require their Jews to register or relinquish any of their businesses or property. Jews’ lives remained mostly unobstructed. They were never gathered into ghettos or camps that would allow the Germans to easily round them up onto trains east.</p><p align="center"><iframe width="100%" height="500" src="https://www.youtube.com/embed/aqZcoQGPY3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>',
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
      
            ],
            onChapterExit: [

            ]
        },
		
			//FIRST CHAPTER c Morals//
		      {
            id: 'chapter-onec-id',
            alignment: 'right',
            hidden: false,
            title: 'Denmark’s Moral Values',
            image: '',
            description: '<p>Holocaust rescuer researcher, Eva Fogelman, identified that rescuers often developed <b>core values in early childhood</b>, which can be seen in Denmark at that time. Rescuers routinely lauded their parents and upbringing in nurturing, loving homes. Fogelman’s study reported that 89% of rescuers had a parent or other adult who acted as an altruistic role model. Either the parents or a trusted adult acted as a role model in altruistic behavior, teaching the young person about helping others regardless of differences.</p><p align="center"><iframe width="100%" height="500" src="https://www.youtube.com/embed/IuJmz6rspTY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>',
            location: {
center: [12.54736, 56.18104],
zoom: 6.69,
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
            title: 'The Rescue of Jews in Denmark',
            image: './images/DanishFishermenFerryJews_USHMM.jpg',
            description: '<p><i>Danish fishermen (foreground) ferry a boatload of fugitives across a narrow sound to neutral Sweden, May 1945 (photo USHMM, courtesy of Frihedsmuseet, Copenhagen).</i></p><p>By August 1943, the Danes had become less tolerant of their occupiers and more active in acts of sabotage and nationwide factory strikes. The Danish government refused to implement German demands to clamp down on unruly behavior, so Germany declared martial law to take control. The Danish government was dissolved and with it the protection of their Jews as Germany initiated its full authoritarian rule.</p><p>A sympathetic Nazi, Georg Ferdinand Duckwitz, tipped off the Danish government that deportations would begin, and the underground went to work. Over the period of a few weeks in October 1943, almost 8,000 Jews were ferried to Sweden using the Danish fishing fleet.A sympathetic Nazi, Georg Ferdinand Duckwitz, tipped off the Danish government that deportations would begin, and the underground went to work. Over the period of a few weeks in October 1943, almost 8,000 Jews were ferried to Sweden using the Danish fishing fleet. Jews flocked to the small villages all along the eastern coast of Denmark where rescuers helped coordinate their escape. The underground recruited fishermen and hid Jews in homes and warehouses until they could safely leave for Sweden.</p>',
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
      
            ],
            onChapterExit: [

            ]
        },
				//SECOND CHAPTER Moral Network//
        {
            id: 'chapter-twob-id',
            alignment: 'full',
            hidden: false,
            title: 'The Network Rescuers',
            image: '',
            description: '<p>Researcher Eva Fogelman identified a category of moral rescuers who belonged to a Network. Their groups opposed to the Nazi ideology and performed acts of resistance. Their initial focus was to oppose Hitler’s agenda, but later saving Jews elevated in priority. Fogelman describes Denmark’s country-wide effort to save their Jewish population as one of the best examples of a moral Network.  </p><p align="center"><iframe width="100%" height="500" src="https://www.youtube.com/embed/V6HNiszfb1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p><p>Knud offers his own description of the kind of people who were active in resistance activities.</p><p><iframe width="100%" height="500" src="https://www.youtube.com/embed/NubvjTz2bPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>',
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
      
            ],
            onChapterExit: [

            ]
        },


//THIRD CHAPTER//
        {
            id: 'chapter-three-id',
            alignment: 'right',
            hidden: false,
            title: 'The Dangers of Rescue',
            image: './images/RescuerDanishBoatSM.JPG',
            description: '<p><i>View of a Danish fishing boat that was used in the rescue of Jews during the occupation of Denmark. Driven by Thormod Larsen, this boat is the one now on display in the permanent exhibition of the U.S. Holocaust Memorial Museum (photo USHMM, courtesy of Frihedsmuseet, Copenhagen).</i></p><p>Rescuers faced their own dangers not only from the Nazis, but from well-intentioned friends and family or bitter neighbors who could expose them and have everyone they loved and protected killed in retribution. Unfortunately, exposure or betrayal  happened all too often and they knew it, yet their moral compass continued to point them to do what they believed was right. Knud Dybys identity, essentially as a spy, had to be kept secret and he had several of his own fake identification cards with different names. Still, he was continuously suspected by the Germans and tipped off, but he never stopped his missions until the end of the war.</p><p><iframe width="100%" height="500" src="https://www.youtube.com/embed/CVlBpvUBHpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p><p>Another Holocaust rescuer researcher, Nechama Tec, identified the characteristic of Universalism in her studies of rescuer behavior. The so-called “Jewishness” of the person was not a catalyst for action. Rescuers responded to the persecution and suffering of a victim regardless of race or religion. Knud Dybys description of universalism align with the morals and courage that Denmark was known for.</p><p><iframe width="100%" height="500" src="https://www.youtube.com/embed/yreIgg7YSaY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>',
            location: {
center: [12.30020, 55.85480],
zoom: 9.36,
pitch: 54.50,
bearing: -177.60
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
            title: 'After the War',
            image: '',
            description: '<p>Approximately 8000 Jews, non-Jewish family members, and at-risk resistance workers were ferried to Sweden in October 1943. Less than 500 Jews, mostly elderly or sick, were captured and deported to a camp in the German-occupied region of Czechoslovakia and 120 died. When Jews and their families returned to Denmark after the war, they were greeted by neighbors who protected their homes and businesses. Some womens organizations even went in to clean while they were away. Unlike in other countries, the Danes did not allow non-Jews to take over an empty Jewish house or business. The Jews were often greeted with a meal made by their neighbors to welcome them back.</p><p><iframe width="100%" height="500" src="https://www.youtube.com/embed/AUMKCdPq5iQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p><p>However, even in Denmark where so many came together to help, there was still bitterness between those that helped and those that stood by:</p><p><iframe width="100%" height="500" src="https://www.youtube.com/embed/XGbkYKlth54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>',
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
               
            ],
            onChapterExit: [

            ]
        },
		
  		//FIFTH CHAPTER//
        {
            id: 'chapter-five-id',
            alignment: 'full',
            hidden: false,
            title: 'Righteous Among the Nations',
            image: '',
            description: '<p>The Danish Underground considered their massive rescue effort a group undertaking and a matter of national pride to refute the Germans and uphold moral values. They elected to have their group recognized by Yad Vashem, rather than by individual names. At the Yad Vashem campus there is a carob tree, plaque, and fishing vessel dedicated to their efforts.</p><p>Several Danes were still recognized by Yad Vashem with the title Righteous Among the Nations due to their extraordinary risk taking and contributions to the rescue of Danish Jews. Knud Dyby was recognized for using his position as a policeman to supply the resistance with intelligence information, false identification documents, coordinating Jews meeting with fishing boats, and transporting sensitive documents to and from Sweden. He spent many of his later years sharing his stories with audiences, especially to young people, to encourage goodness to all of their neighbors.</p><p><iframe width="100%" height="500" src="https://www.youtube.com/embed/Qi8hvxx4Bo8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>',
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
               
            ],
            onChapterExit: [

            ]
        },


//MARKS BELOW ARE AT END//
    ]
};
