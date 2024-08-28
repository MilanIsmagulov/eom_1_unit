let titleUpper = document.querySelector('#upper_title');
let blackHeader  = document.querySelector('#header_text');
let miniHead  = document.querySelector('#title_of_eom_1');
let windowWidth  = window.innerWidth;
let originalTitle = title_of_eom;
let mainBody = document.getElementById('main_window_eom_one');
let backgroundColor = document.createElement('div');
let backgroundImage = document.createElement('div');
backgroundColor.classList = 'background_color';
mainBody.appendChild(backgroundColor);
backgroundImage.classList = 'background_image';
mainBody.appendChild(backgroundImage);

var typeOfDrop = `<img width="100%" src="../../content/background_${background_type}.jpg" alt="background">`;

backgroundImage.innerHTML = typeOfDrop;

function waitForData() {
    miniHead.innerHTML = originalTitle;
    if (window.dataLoaded) {
        window.addEventListener('load',() => {
            let windowWidth  = window.innerWidth;
            if (windowWidth  <=  650){
                shortenTitle(blackHeader, 30);  // Сокращаем заголовок до 20 символов
            } else {
                restoreTitle(blackHeader, originalTitle);
            }
        });

        window.addEventListener('resize',() => {
            let windowWidth  = window.innerWidth;
            if (windowWidth  <=  650) {
                shortenTitle(blackHeader, 30);  // Сокращаем заголовок до 20 символов
            } else {
                restoreTitle(blackHeader, originalTitle);
            }
        });

        function restoreTitle(element, originalTitle) {
            element.innerText = originalTitle;  // Восстанавливаем оригинальный заголовок
        }

        function shortenTitle(element, maxLength) {
            let title = element.innerHTML;  // Получаем заголовок элемента
            if (title.length > maxLength) {
                let shortenedTitle = title.substring(0, maxLength - 3) + '...';  // Обрезаем и добавляем многоточие
                element.innerHTML = shortenedTitle;  // Обновляем заголовок элемента
            }
        }

        function adjustContentWrapper() {
            const headerHeight = document.getElementById('header').offsetHeight;
            const contentWrapper = document.getElementById('contentWrapper');

            contentWrapper.style.paddingTop = headerHeight + 0 + 'px';
        }

        window.addEventListener('load', adjustContentWrapper);
        window.addEventListener('resize', adjustContentWrapper);

        const isMainWindow = document.getElementById('content');

        const contentWindow = document.createElement('div');
        contentWindow.classList.add('content__div');
        isMainWindow.appendChild(contentWindow);
    
        const contentWindowLeft = document.createElement('div');
        contentWindowLeft.classList.add('content__div_left');
        contentWindowLeft.innerHTML = `${methodRecomendation}`;
        contentWindow.appendChild(contentWindowLeft);
    
        const literaBtn = document.createElement('button');
        literaBtn.classList.add('content__litera_btn');
        literaBtn.innerHTML = 'Список использованной литературы';
        contentWindowLeft.appendChild(literaBtn);
    
        const contentWindowCenter = document.createElement('div');
        contentWindowCenter.classList.add('content__div_center');
        contentWindow.appendChild(contentWindowCenter);
    
        const contentWindowRight = document.createElement('div');
        contentWindowRight.classList.add('content__div_right');
        contentWindowRight.innerHTML = `<img src="./../content/drop_logo_${dropType}.png" alt="drop_logo">`;
        contentWindow.appendChild(contentWindowRight);

        const themesNameArr = themesOfEOM1.split('\n');
        let numberOfColumns, numberOfRows;
        
        if (themesNameArr.length === 12) {
            numberOfColumns = 4;
            numberOfRows = 3;
        } else if (themesNameArr.length <= 9) {
            numberOfColumns = Math.ceil(themesNameArr.length / 3);
            numberOfRows = Math.ceil(themesNameArr.length / numberOfColumns);
        } else if (themesNameArr.length <= 12) {
            numberOfColumns = 4;
            numberOfRows = 3;
        } else if (themesNameArr.length <= 15) {
            numberOfColumns = 5;
            numberOfRows = 3;
        } else if (themesNameArr.length <= 18) {
            numberOfColumns = 6;
            numberOfRows = 3;
        } else if (themesNameArr.length <= 20) {
            numberOfColumns = 5;
            numberOfRows = 4;
        } else {
            numberOfColumns = Math.ceil(themesNameArr.length / 4);
            numberOfRows = Math.ceil(themesNameArr.length / numberOfColumns);
        }
        
        if(typeOfButtons === 'hexagon'){
            for (let i = 0; i < numberOfColumns; i++) {
                let columnsOfHexagon = document.createElement('div');
                columnsOfHexagon.classList.add('columns__hexagon', 'col_' + i);
                contentWindowCenter.appendChild(columnsOfHexagon);
                for (let j = 0; j < numberOfRows; j++) {
                    let hexagonBtn = document.createElement('button');
                    hexagonBtn.classList.add('button__hexagon_type');
                    hexagonBtn.classList.add('themes_button');
                    columnsOfHexagon.appendChild(hexagonBtn);
                }
            }
            
            let allHexagoneBtn = document.querySelectorAll('.button__hexagon_type');
            allHexagoneBtn.forEach(function(item, index) {
                if (index < themesNameArr.length) {
                    item.innerHTML = (index + 1) + '. ' + themesNameArr[index];
                    item.setAttribute('onclick', `location.href='#'`);
                } else {
                    item.classList.add('hidden_block');
                }
            });

            let hexagonField = document.querySelector('.content__div_center');
            // Увеличиваем высоту на 100 пикселей
            let newHeight = hexagonField.clientHeight + 80;
            // Применяем новую высоту
            hexagonField.style.height = newHeight + 'px';

        } else if (typeOfButtons === 'lightning') {
            contentWindowCenter.classList.add('lightning');
            let leftColumn = document.createElement('div');
            leftColumn.classList = 'left_column';
            contentWindowCenter.appendChild(leftColumn);
            let rightColumn = document.createElement('div');
            rightColumn.classList = 'right_column';
            contentWindowCenter.appendChild(rightColumn);

            // Подсчитываем количество элементов в массиве
            const totalThemes = themesNameArr.length;
            // Определяем количество элементов, которые должны попасть в левую колонку
            const leftColumnCount = Math.floor(totalThemes / 2);

            // Проходим по массиву и создаем кнопки
            themesNameArr.forEach((theme, index) => {
                // Создаем кнопку
                let button = document.createElement('button');
                button.classList = 'lightning_button themes_button';
                // Добавляем обработчик клика для кнопки
                button.onclick = function() {
                    location.href = '#'; // Здесь нужный URL
                };
                button.innerHTML = `<p class="themes_lightning">${index + 1}. ${theme}</p>`;

                // Распределяем по колонкам
                if (index < leftColumnCount) {
                    leftColumn.appendChild(button);
                } else {
                    rightColumn.appendChild(button);
                }
            });

            // Если количество элементов нечетное, последний элемент добавляется в правую колонку
            if (totalThemes % 2 !== 0) {
                rightColumn.appendChild(rightColumn.removeChild(rightColumn.lastChild));
            }

            if (themesNameArr.length <= 10){
                let lightningButton = document.querySelectorAll('.lightning_button');
                lightningButton.forEach((item) => {
                    item.classList.add('big');
                });
            } else if (themesNameArr.length <= 15) {
                let lightningButton = document.querySelectorAll('.lightning_button');
                lightningButton.forEach((item) => {
                    item.classList.add('medium');
                });
            } else if (themesNameArr.length >= 18) {
                let lightningButton = document.querySelectorAll('.lightning_button');
                lightningButton.forEach((item) => {
                    item.classList.add('small');
                });
            } 

        } else if (typeOfButtons === 'tiles') {
            console.log('tiles')

        } else if (typeOfButtons === 'video') {
            console.log('video')

        }

        let mainDivContent = document.querySelector('#contentWrapper')
        let popUpStructure = 
        `<div id="popup_litera_1" class="popup disabled">
                <div class="popup_body">
                    <div class="popup_content">
                        <div class="popup_header">
                            <h3>Список литературы</h3>
                            <button class="close_popup" onclick="document.querySelector('#popup_litera_1').classList.add('disabled')"><img src="./content/close.svg" alt="close"></button>
                        </div>
                    <div class="popup_text" id="popup_text_2">
                        <ol>
                            ${literaListEOM1.split('\n').map(item => `<li>${item}</li>`).join('')}
                        </ol>
                    </div>
                </div>
            </div>
        </div>`
        mainDivContent.innerHTML += popUpStructure;
        let literaBtnOn = document.querySelector('.content__litera_btn');
        literaBtnOn.onclick = function() {
            let popupWindow = document.querySelector('#popup_litera_1');
            popupWindow.classList.remove('disabled');
        };

    } else {
        // Если данные ещё не загружены, ждем и проверяем снова
        setTimeout(waitForData, location.reload(),  50);
    }

    let viewportHeight = window.innerHeight
    let blackHeaderHeight = document.querySelector('#header').clientHeight
    document.querySelector('.content__div').style.height = (viewportHeight - blackHeaderHeight*2 +10 ) + 'px';



}

waitForData();

