document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const heroPosition = document.querySelector('.hero');
    const heightHero = heroPosition.clientHeight;

    for (let i = 0; i< buttons.length; i++){
        buttons[i].addEventListener('click', function(button){
            const tabTarget = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);
            hideTabs();
            tab.classList.add('shows__list--active');
            removeButtonActive();
            button.target.classList.add('shows__tabs__button--active');
        })
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openCloseAnswer);
    }

    window.addEventListener('scroll', function(){
        const actualPosition = window.scrollY;

        if (heightHero > actualPosition) {
            hideHeader();
        }else {
            showHeader();
        }
    })
})

function removeButtonActive(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i =0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--active');
    }
}

function hideTabs(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i =0; i <tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--active');
    }
}

function openCloseAnswer(element){
    const classe = "faq__questions__item--is-open";
    const elementFather = element.target.parentNode;

    elementFather.classList.toggle(classe);
}

function hideHeader () {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showHeader(){ 
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}