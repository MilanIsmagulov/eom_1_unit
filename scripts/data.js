window.dataLoaded = false;
    let title_of_eom = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugiat voluptatum quos rerum, repudiandae doloribus dolores pariatur explicabo laborum corporis!';
    let methodRecomendation = 'fghfghfhfg Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugiat voluptatum quos rerum, repudiandae doloribus dolores pariatur explicabo laborum corporis!';
    let dropType = 13;
    let typeOfButtons = 'lightning'; // Можер быть "hexagon", "lightning", "tiles" или "video";
    let background_type = dropType; 

    let literaListEOM1 = 
    `<b>Гонсалес, Р. Ц., Вудс, Р. Е.</b> Цифровая обработка изображений / Р. Ц. Гонсалес, Р. Е. Вудс. — 3-е изд. — М.: Техносфера, 2012. — 1072 с.
    Рашка, С., Миржалили, В. Python и машинное обучение / С. Рашка, В. Миржалили. — 3-е изд. — Бирмингем: Packt Publishing, 2019. — 770 с.
    Сзелиски, Р. Компьютерное зрение: алгоритмы и приложения / Р. Сзелиски. — М.: Вильямс, 2011. — 1104 с.
    Гудфеллоу, И., Бенжио, Й., Курвилль, А. Глубокое обучение / И. Гудфеллоу, Й. Бенжио, А. Курвилль; пер. с англ. — М.: ДМК Пресс, 2018. — 732 с.
    Бишоп, К. М. Распознавание образов и машинное обучение / К. М. Бишоп; пер. с англ. — М.: ИД «Вильямс», 2007. — 736 с.
    Сонка, М., Главач, В., Бойл, Р. Обработка изображений, анализ и машинное зрение / М. Сонка, В. Главач, Р. Бойл; пер. с англ. — М.: ИД «Вильямс», 2004. — 770 с.
    Черемисин Д.Г., Мкртчян В.Р. Использование нейронных сетей в задачах распознавания математических выражений // Международный научный журнал “СИМВОЛ НАУКИ” №12-2 2022 год 34-36 с.
    Карахтанов А.А. Использование нейронных сетей для распознавания математических выражений // Математическое и компьютерное моделирование в экономике, страховании и управлении рисками, №5 2020 год 86-89 с.
    Шолле, Ф. Глубокое обучение с использованием Python / Ф. Шолле. — 2-е изд. — Шелтер-Айленд: Manning Publications, 2021. — 544 с.
    Документация по Tensorflow Keras URL: https://www.tensorflow.org/ (дата обращения: 11.06.2024)
    Документация по OpenCV URL: https://docs.opencv.org/4.10.0/ (дата обращения: 11.06.2024)`


    const data = {
        "index_1":{
            "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
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
            "subtitle": "dfgdgdgd gdgdgdg",
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
        "index_3":{
            "subtitle": "dfgdgd gdgdgdgdg",
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
        "index_4":{
            "subtitle": "dfgdgdgd gdgdgdg",
        },
        "index_5":{
            "subtitle": "dfgdgdgd gdgdgdg",
        },
        "index_6":{
            "subtitle": "dfgdgdgd gdgdgdg",
        },
        "index_7":{
            "subtitle": "dfgdgdg dgdgdgdg",
        },
        "index_8":{
            "subtitle": "dfgdgd gdgdgdgdg",
        }
        ,
        "index_9":{
            "subtitle": "dfgdgdgdgd gdgdg",
        } ,
        "index_10":{
            "subtitle": "dfgdgdgdgdgdgdg 10",
        }
        // ,
        // "index_11":{
        //     "subtitle": "dfgdgdgdgdgdgdg 8",
        // },
        // "index_12":{
        //     "subtitle": "dfgdgdgdgdgdgdg 9",
        // },
        // "index_13":{
        //     "subtitle": "dfgdgdgdgdgdgdg 10",
        // },
        // "index_14":{
        //     "subtitle": "dfgdgdgdgdgdgdg 8",
        // },
        // "index_15":{
        //     "subtitle": "dfgdgdgdgdgdgdg 9",
        // }
        // ,
        // "index_16":{
        //     "subtitle": "dfgdgdgdgdgdgdg 8",
        // },
        // "index_17":{
        //     "subtitle": "dfgdgdgdgdgdgdg 9",
        // },
        // "index_18":{
        //     "subtitle": "dfgdgdgdgdgdgdg 10",
        // }     
    };

    const themesOfEOM1 = Object.values(data).map(item => item.subtitle).join('\n');
window.dataLoaded = true;