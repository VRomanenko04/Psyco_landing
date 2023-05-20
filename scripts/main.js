// Три модальных окна

document.querySelector('.first__btn').addEventListener('click', () => {
    Swal.fire({
        title: 'Інструкція',
        icon: 'info',
        html: 
        'Перейдіть за посиланням на одну з представлених соціальних мереж та напишіть на що ви бажаєте записатися. ' +
        "Ми з вами зв'яжемось - запропонуємо можливі дати та проведемо смс консультацію.<br>" +
        '<a href="#"><img class="social__item me-2 mt-3" src="imgs/facebook icon.svg" alt="facebook"></a>' +
        '<a href="#"><img class="social__item mt-3" src="imgs/inst icon.svg" alt="instagram"></a>',
        confirmButtonColor: '#79afff',
        confirmButtonText: 'Зрозуміло',
        customClass: {
            confirmButton: 'popup__btn',
            popup: 'popup__container',
        }
    });
});

document.querySelector('.second__btn').addEventListener('click', () => {
    Swal.fire({
        title: 'Інструкція',
        icon: 'info',
        html: 
        'Перейдіть за посиланням на одну з представлених соціальних мереж та напишіть на що ви бажаєте записатися. ' +
        "Ми з вами зв'яжемось - запропонуємо можливі дати та проведемо смс консультацію.<br>" +
        '<a href="#"><img class="social__item me-2 mt-3" src="imgs/facebook icon.svg" alt="facebook"></a>' +
        '<a href="#"><img class="social__item mt-3" src="imgs/inst icon.svg" alt="instagram"></a>',
        confirmButtonColor: '#79afff',
        confirmButtonText: 'Зрозуміло',
        customClass: {
            confirmButton: 'popup__btn',
            popup: 'popup__container'
        }
    });
});

document.querySelector('.third__btn').addEventListener('click', () => {
    Swal.fire({
        title: 'Інструкція',
        icon: 'info',
        html: 
        'Перейдіть за посиланням на одну з представлених соціальних мереж та напишіть на що ви бажаєте записатися. ' +
        "Ми з вами зв'яжемось - запропонуємо можливі дати та проведемо смс консультацію.<br>" +
        '<a href="#"><img class="social__item me-2 mt-3" src="imgs/facebook icon.svg" alt="facebook"></a>' +
        '<a href="#"><img class="social__item mt-3" src="imgs/inst icon.svg" alt="instagram"></a>',
        confirmButtonColor: '#79afff',
        confirmButtonText: 'Зрозуміло',
        customClass: {
            confirmButton: 'popup__btn',
            popup: 'popup__container'
        }
    });
});