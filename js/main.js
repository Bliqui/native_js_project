// p1. popup engineer

const popupEngineerBtn = document.querySelector('#popup_engineer_btn'), // зелёная кнопка
    popupWindow = document.querySelector('.popup'), // модальное окно класса popup
    popupEngineer = document.querySelector('.popup_engineer'), // одальное окно класса engineer
    popupCalcEnd = document.querySelector('.popup_calc_end'), // чёрная подложка
    popupEngineerCloseBtn = document.querySelector('#popup_engineer_close_btn'),
    popupCloseBtn = document.querySelector('#popup_close_btn'),
    phoneLink = document.querySelectorAll('.phone_link'),
    clientForms = document.querySelectorAll('form'),
    clientName = document.getElementsByName('user_name'),
    clientTel = document.getElementsByName('user_phone'),
    submitBtn = document.getElementsByName('submit'),
    tabs = document.querySelectorAll('.glazing_block.text-center.wow.fadeInUp'),
    tabName = document.getElementsByName('tab'),
    tabLink = document.getElementsByName('tabLink'),
    calcBtns = document.querySelectorAll('.button.glazing_price_btn.text-uppercase.popup_calc_btn'),
    popupCalc = document.querySelector('.popup_calc'),
    balconIcons = document.querySelectorAll('.balcon_icons_img'),
    popupCalcBtn = document.querySelector('.button.popup_calc_button'),
    balconBigImg = document.getElementsByName('balconBigImg'),
    popupCalcProfile = document.querySelector('.popup_calc_profile'),
    formControl = document.querySelector('.form-control'),
    checkboxCustom = document.querySelectorAll('.checkbox-custom'),
    popUpCalcProfileMenu = document.querySelector('.popup_calc_profile_content.text-center'),
    popUpCalcProfileButton = document.querySelector('.button.popup_calc_profile_button'),
    decorationTabs = document.getElementsByName('decorationTabs'),
    decorationTabsContent = document.getElementsByName('decorationTabsContent'),
    worksPreviewBody = document.querySelectorAll('.col-lg-3.col-md-4.col-sm-6.col-xs-12.text-center.wow.fadeIn')
    worksPreview = document.querySelectorAll('.preview'),
    overlay = document.querySelector('.overlay');

popupEngineerBtn.addEventListener('click', (event) => {
    event.target.tagName == 'BUTTON' ? popupEngineer.style = 'display: block;' : '';
});
popupEngineerCloseBtn.addEventListener('click', (event) => {
    popupEngineer.style = 'display: none;';
});
popupEngineer.addEventListener('click', (event) => {
    if (event.target === popupEngineer) {
        popupEngineer.style = 'display: none;';
    }
});

//

// p2. popup

phoneLink.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.target.tagName == 'A' ? popupWindow.style = 'display: block;' : '';
    });
});

popupCloseBtn.addEventListener('click', () => {
    popupWindow.style = 'display: none;'
});

popupWindow.addEventListener('click', (event) => {
    event.target === popupWindow ? popupWindow.style = 'display: none;' : '';
});

//

// p3. modal windows, AJAX.

clientForms.forEach((item, i) => {
    item.onsubmit = (event) => {
        event.preventDefault();
        clientInfoName = clientName[i].value;
        clientInfoTel = clientTel[i].value;

        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    name: clientInfoName,
                    body: clientInfoTel
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then(() => alert('Спасибо за обращение, ожидайте звонок!'));

        clientName[i].value = '';
        clientTel[i].value = '';
    };
});


//

// p5. Tabs.

tabs.forEach((item, i) => {
    tabLink[0].classList.add('active');
    item.addEventListener('click', (event) => {
        if (event.target.tagName == 'A' || event.target.tagName == 'IMG') {
            tabName.forEach((i)=>{
                i.style = 'display: none;';
            });
            tabLink.forEach((i)=> {
                i.classList.remove('active');
            });
            
            tabLink[i].classList.add('active');
            tabName[i].style = 'display: block;';
        };
    })
});

// p6. tab calculator.

let clientChoice = {};

calcBtns.forEach((item) => {
    item.addEventListener('click', () => {
        popupCalc.style = 'display: block;';
        balconIcons.forEach((item, i) => {
            item.classList.remove('do_image_more');
        });
    });
});


balconIcons.forEach((item, i) => {
    item.addEventListener('click', (event) => {
        if (event.target.tagName == 'IMG') {
        balconIcons.forEach((item, i) => {
            item.classList.remove('do_image_more');
            balconBigImg.forEach((item) => {
                item.style = 'display: none';    
            });
        });
        item.classList.add('do_image_more');
        balconBigImg[i].style = 'display: block; margin: 0 auto; padding-bottom: 25px;';
    };   
    });
}); 

popupCalc.addEventListener('click', (event) => {
    event.target.tagName == 'STRONG' || event.target.className == 'popup_calc_close' ? popupCalc.style = 'display: none;' : '';
    event.target === popupCalc ? popupCalc.style = 'display: none;' : '';
});

popupCalcBtn.addEventListener('click', (event) => {
    popupCalc.style = 'display: none;'
    popupCalcProfile.style = 'display: block;'
})

// profile page

popupCalcProfile.addEventListener('click', (event) => {
    event.target === popupCalcProfile ? popupCalcProfile.style = 'display: none;' : '';
    event.target.tagName == 'STRONG' || event.target.className == 'popup_calc_close' ? popupCalcProfile.style = 'display: none;' : '';
});

formControl.addEventListener('change', function() {
    const n = this.value;
})

/* checkboxCustom.forEach((item, i) => {

});
 */

popUpCalcProfileButton.addEventListener('click', () => {
    popupCalcProfile.style = 'display: none;'
});

//

// p7. tabs v2
decorationTabs.forEach((item, i) => {
    decorationTabs[0].classList.add('after_click');
    item.addEventListener('click', () => {
        decorationTabs.forEach((item) => {
            item.classList.remove('after_click')
        })
        item.classList.add('after_click');
        decorationTabsContent.forEach((item) => {
            item.style = 'display: none;'
        });
        decorationTabsContent[i].style = 'display: block;';
    })
})
//

// p8. timer

    // Timer

    const deadline = '2022-12-31'; // дедлайн
    
    function getTimeRemaining(item) { // разница между дедлайном и тек.временем.
        const t = Date.parse(item) - Date.parse(new Date());  // тех.переменная, разница между датами
        const days = Math.floor(t / (1000 * 60 * 60 * 24)); // получаем сутки.
        const hours = Math.floor((t / (1000 * 60 * 60) % 24)); // часы.
        const minutes = Math.floor((t / 1000 / 60) % 60); // минуты
        const seconds = Math.floor((t / 1000) % 60); // секунды

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero (num) {  // добавляем 0 в начало 1-значного числа
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    };

    function setClock(selector, item) { // установка часов selector - блок таймер с вёрстки, айтем - дедлайн
        const timer = document.querySelector(selector);
        const days = document.querySelector('#days');
        const hours = document.querySelector('#hours');
        const minutes = document.querySelector('#minutes');
        const seconds = document.querySelector('#seconds');
        timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock () { // обновляем часы
            const t = getTimeRemaining(item);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        } 
    };

    setClock('.timer', deadline);

//

// p9. previews

    worksPreview.forEach((item, i) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();

            overlay.style = 'display: block; position: fixed; z-index: 9;'
            //overlay.innerHTML += '<button type="button" class="worksCloseBtn"><strong>x</strong></button>'
            //const worksCloseBtn = document.querySelector('.worksCloseBtn');
            //worksCloseBtn.style = 'z-index: 10; position: absolute; top: -2.2rem; right: -5rem; font-size: 4rem; color: #ffffff; border: none; background: transparent;'
            item.style = 'position: fixed; top: 20%; left: 50%; -webkit-transform: translateX(-50%); z-index: 10; transform: translateX(-50%); width: 40rem;'
            overlay.addEventListener('click', () => {
                overlay.style = 'display: none;';
                item.style = 'height: 270px; width: 270px';
            });
            
        });
    });

// p10. setTimeout

setTimeout(() => {
    popupWindow.style = 'display: block';
}, 60000);
