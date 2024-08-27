window.dataLoaded = false;
    let title_of_eom = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugiat voluptatum quos rerum, repudiandae doloribus dolores pariatur explicabo laborum corporis!';
    let methodRecomendation = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugiat voluptatum quos rerum, repudiandae doloribus dolores pariatur explicabo laborum corporis!';
    let dropType = 1;
    let typeOfButtons = 'hexagon'; // Можер быть еще "lightning" и "tiles";

    const data = {
        "index_1":{
            "subtitle": "dfgdgdgdgdgdgdg 1",
            "paragraph_1":[
                {"text": "<b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b>"},
                {"image": false, "image_path": "./content/test_image.png"}
            ],
            "paragraph_2":[
                {"text": false},
                {"image": true, "image_path": "./content/video/test_video.mp4", "img_sign": " "}
            ],
            "paragraph_3":[
                {"text":"<b><i>Lorem ipsum dolor sit amet consectetur</i></b> adipisicing elit."},
                {"image": true, "image_path": "./content/video/test_video.mp4", "img_sign": " "}
            ],
            "paragraph_4":[
                {"text":" Lorem ipsum dolor sit amet consectetur adipisicing elit."},
                {"image": false, "image_path": "./content/test_image.png"}
            ]
        },
        "index_2":{
            "subtitle": "dfgdgdgdgdgdgdg 2",
        },
        "index_3":{
            "subtitle": "dfgdgdgdgdgdgdg 3",
        },
        "index_4":{
            "subtitle": "dfgdgdgdgdgdgdg 4",
        },
        "index_5":{
            "subtitle": "dfgdgdgdgdgdgdg 5",
        },
        "index_6":{
            "subtitle": "dfgdgdgdgdgdgdg 6",
        },
        "index_7":{
            "subtitle": "dfgdgdgdgdgdgdg 7",
        },
        "index_8":{
            "subtitle": "dfgdgdgdgdgdgdg 8",
        },
        "index_9":{
            "subtitle": "dfgdgdgdgdgdgdg 9",
        },
        "index_10":{
            "subtitle": "dfgdgdgdgdgdgdg 10",
        },
        "index_11":{
            "subtitle": "dfgdgdgdgdgdgdg 8",
        },
        "index_12":{
            "subtitle": "dfgdgdgdgdgdgdg 9",
        },
        "index_13":{
            "subtitle": "dfgdgdgdgdgdgdg 10",
        },
        "index_14":{
            "subtitle": "dfgdgdgdgdgdgdg 8",
        },
        "index_15":{
            "subtitle": "dfgdgdgdgdgdgdg 9",
        }
        // "index_16":{
        //     "subtitle": "dfgdgdgdgdgdgdg 8",
        // },
        // "index_17":{
        //     "subtitle": "dfgdgdgdgdgdgdg 9",
        // },
        // "index_18":{
        //     "subtitle": "dfgdgdgdgdgdgdg 10",
        // },
        // "index_19":{
        //     "subtitle": "dfgdgdgdgdgdgdg 8",
        // },
        // "index_20":{
        //     "subtitle": "dfgdgdgdgdgdgdg 9",
        // }         
    };

    
    const themesOfEOM1 = Object.values(data).map(item => item.subtitle).join('\n');

window.dataLoaded = true;