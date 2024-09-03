let allThemesButtons = document.querySelectorAll('.themes_button');
let currentPageIndex = 1;
let currentTestIndex = null;
const testContainer = document.getElementById('test-container');
const contentDiv = document.getElementById('content');



allThemesButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        updatePage(index);
        let backgroundColorDiv = document.querySelector('.background_color');
        backgroundColorDiv.classList.add('theme_page_color');
        let mainContentDiv = document.querySelector('#content');
        mainContentDiv.classList.add('theme_page_div');
    });
});

function updatePage(index) {
    displayPage(index);
    console.log(`Button ${index} clicked!`);
}

// Функция для создания блока с текстом и изображением
function createTextWithImage(paragraph) {
    // Создание контейнера
    const container = document.createElement('div');
    // Присвоение класса контейнеру
    container.className = 'text_with_img';

    // Перебор элементов параграфа
    paragraph.forEach(item => {
        if (item.subtitle2lvl) {
            const subSecLvl = document.createElement('h3');
            subSecLvl.classList = 'subtitle_second_level';
            subSecLvl.innerHTML = item.subtitle2lvl;
            container.appendChild(subSecLvl);
        }
        // Если есть текст, создаем и добавляем текстовый элемент
        if (item.text) {
            const textElement = document.createElement('p');
            textElement.innerHTML = item.text; // Использование innerHTML для поддержки HTML-тегов
            container.appendChild(textElement);
        }
        // Если есть изображение, создаем и добавляем элемент изображения
        if (item.image) {

            const imgContainer = document.createElement('div');
            imgContainer.className = 'img_with_sgn';
            let imgElement;
            if (item.image_path.includes(".jpg") || item.image_path.includes(".png")) {
                imgElement = document.createElement('img');
            } else if (item.image_path.includes(".mp4")) {
                imgElement = document.createElement('video');
                imgElement.controls = "controls";
            }
            if (imgElement) {  // Проверяем, что элемент был создан
                imgElement.src = item.image_path;
                imgElement.alt = 'img_with_sgn';
                const caption = document.createElement('p');
                caption.textContent = item.img_sign || 'Текст подпись к рисунку (Проверьте данные в data.js)';
                imgContainer.appendChild(imgElement);
                imgContainer.appendChild(caption);
                container.appendChild(imgContainer);
            }
        }
    });

    // Возвращаем созданный контейнер
    return container;
}

// Функция для создания блока только с изображением
function createOnlyImage(paragraph) {
    // Создание контейнера
    const container = document.createElement('div');
    // Присвоение класса контейнеру
    container.className = 'only_img';

    // Перебор элементов параграфа
    paragraph.forEach(item => {
        if (item.subtitle2lvl) {
            const subSecLvl = document.createElement('h3');
            subSecLvl.classList = 'subtitle_second_level';
            subSecLvl.innerHTML = item.subtitle2lvl;
            container.appendChild(subSecLvl);
        }
        // Если есть изображение, создаем и добавляем элемент изображения
        if (item.image) {
            let imgElement;
            if (item.image_path.includes(".jpg") || item.image_path.includes(".png")) {
                imgElement = document.createElement('img');
            } else if (item.image_path.includes(".mp4")) {
                imgElement = document.createElement('video');
                imgElement.controls = "controls";
            }
        
            if (imgElement) {  // Проверяем, что элемент был создан
                imgElement.src = item.image_path;
                imgElement.alt = 'image';
                const caption = document.createElement('p');
                caption.textContent = item.img_sign || 'Текст подпись к рисунку (Проверьте данные в data.js)';
                container.appendChild(imgElement);
                container.appendChild(caption);
            }
        }
    });

    // Возвращаем созданный контейнер
    return container;
}

// Функция для создания блока только с текстом
function createPlainText(paragraph) {
    // Создание контейнера
    const container = document.createElement('div');
    // Присвоение класса контейнеру
    container.className = 'plane_text';

    // Перебор элементов параграфа
    paragraph.forEach(item => {
        if (item.subtitle2lvl) {
            const subSecLvl = document.createElement('h3');
            subSecLvl.classList = 'subtitle_second_level';
            subSecLvl.innerHTML = item.subtitle2lvl;
            container.appendChild(subSecLvl);
        }
        // Если есть текст, создаем и добавляем текстовый элемент
        if (item.text) {
            const textElement = document.createElement('p');
            textElement.innerHTML = item.text; // Использование innerHTML для поддержки HTML-тегов
            container.appendChild(textElement);
        }
    });

    // Возвращаем созданный контейнер
    return container;
}


// Функция для отображения страницы
function displayPage(index) {
    // Получение данных страницы по индексу
    const pageData = data[`index_${index}`];
    // Очистка содержимого контейнера
    contentDiv.innerHTML = '';

    // Добавление подзаголовка с нумерацией
    if (pageData.subtitle) {
        const subtitleWrapper = document.createElement('div');
        const subtitleButtonPop = document.createElement('button');
        const spanOfDiscription = document.createElement('span');
        subtitleButtonPop.id = 'popup_button_1';
        subtitleButtonPop.innerHTML = `<img src="./content/description.svg" alt="desc">`;
        subtitleWrapper.className = 'subtitle_wrapper';
        contentDiv.appendChild(subtitleWrapper);
        const subtitleDiv = document.createElement('div');
        subtitleDiv.className = 'number_of_step';
        const subtitleSpan = document.createElement('span');
        subtitleSpan.className = 'pink_subtitle';
        subtitleSpan.innerHTML = ` ${pageData.subtitle}`;
        // subtitleDiv.innerHTML = `${index + 1}.`;
        spanOfDiscription.classList = 'span_of_discription';
        subtitleDiv.appendChild(subtitleSpan);
        subtitleWrapper.appendChild(subtitleDiv);
        subtitleWrapper.appendChild(spanOfDiscription);
        // spanOfDiscription.appendChild(subtitleButtonPop);
        // spanOfDiscription.innerHTML += `${index + 1}/${Object.keys(data).length}`
    }
    // Проверка наличия параграфов на странице
    if (pageData.hasOwnProperty('paragraph_1')) {

        // Перебор всех параграфов страницы
        for (let key in pageData) {

            if (key.startsWith('paragraph_')) {
                const paragraph = pageData[key];
                let element;
                // Определение типа параграфа и создание соответствующего элемента
                if (paragraph.some(item => item.text) && paragraph.some(item => item.image)) {

                    element = createTextWithImage(paragraph);
                } else if (paragraph.some(item => item.image)) {
                    element = createOnlyImage(paragraph);
                } else if (paragraph.some(item => item.text)) {
                    element = createPlainText(paragraph);
                }
                // Добавление созданного элемента на страницу
                contentDiv.appendChild(element);
            }
        }

    } 
}