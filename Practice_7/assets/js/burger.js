// JS код для бургер-меню
const burgerBtn = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.burger__open');
// При клике на кнопку, добавляем/удаляем классы для открытия/закрытия бургер-меню
burgerBtn.addEventListener('click', function() {
burgerBtn.classList.toggle('active');
burgerMenu.classList.toggle('active');
});