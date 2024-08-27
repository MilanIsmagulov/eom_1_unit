let titleUpper = document.querySelector('#upper_title');
let blackHeader  = document.querySelector('#header_text');
let miniHead  = document.querySelector('#title_of_eom_1');
let windowWidth  = window.innerWidth;
let originalTitle = title_of_eom;
let mainBody = document.getElementById('main_window_eom_one');
let backgroundColor = document.createElement('div');
let backgroundImage = document.createElement('div');
backgroundColor.classList = 'background_color';
mainBody.appendChild(backgroundColor)
backgroundImage.classList = 'background_image';
mainBody.appendChild(backgroundImage)
backgroundImage.innerHTML = `<img width="100%" src="../../content/background_one.jpg" alt="background">
                            <img width="100%" src="../../content/background_one.jpg" alt="background">
                            <img width="100%" src="../../content/background_one.jpg" alt="background">`;

function waitForData() {
    miniHead.innerHTML = originalTitle;
    if (window.dataLoaded) {
        window.addEventListener('load',() => {
            let windowWidth  = window.innerWidth;
            if (windowWidth  <=  650)  {
                shortenTitle(blackHeader, 30);  // Сокращаем заголовок до 20 символов
            } else {
                restoreTitle(blackHeader, originalTitle);
            }
        });

        window.addEventListener('resize',() => {
            let windowWidth  = window.innerWidth;
            if (windowWidth  <=  650)  {
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
        contentWindowLeft.innerHTML = `${methodRecomendation}`
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
        } else if (themesNameArr.length <= 16) {
            numberOfColumns = 4;
            numberOfRows = 4;
        } else if (themesNameArr.length <= 20) {
            numberOfColumns = 5;
            numberOfRows = 4;
        } else {
            numberOfColumns = Math.ceil(themesNameArr.length / 4);
            numberOfRows = Math.ceil(themesNameArr.length / numberOfColumns);
        }
        
        for (let i = 0; i < numberOfColumns; i++) {
            let columnsOfHexagon = document.createElement('div');
            columnsOfHexagon.classList.add('columns__hexagon', 'col_' + i);
            contentWindowCenter.appendChild(columnsOfHexagon);
            for (let j = 0; j < numberOfRows; j++) {
                let hexagonBtn = document.createElement('button');
                hexagonBtn.classList.add('button__hexagon_type');
                columnsOfHexagon.appendChild(hexagonBtn);
            }
        }
        
        let allHexagoneBtn = document.querySelectorAll('.button__hexagon_type');
        allHexagoneBtn.forEach(function(item, index) {
            if (index < themesNameArr.length) {
                item.innerHTML = (index + 1) + '. ' + themesNameArr[index];
                item.setAttribute('onclick', `location.href='./pages/page_${index + 1}_index.html'`);
            } else {
                item.classList.add('hidden_block');
            }
        });
    } else {
        // Если данные ещё не загружены, ждем и проверяем снова
        setTimeout(waitForData, location.reload(),  50);
        
    }

}

waitForData();

