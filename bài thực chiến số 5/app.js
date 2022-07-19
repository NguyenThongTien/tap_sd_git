
var searchBox = document.querySelector('.search-box__btn')

searchBox.addEventListener('click', function(){
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus();
})