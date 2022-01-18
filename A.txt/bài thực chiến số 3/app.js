var btnopen = document.querySelector('.open-modal-btn');
var modal = document.querySelector('.modal');
var iconclose = document.querySelector('.modal__header i');
var btnclose = document.querySelector('.modal__footer button');

function toggleModal(){
    modal.classList.toggle('hide');
}

btnopen.addEventListener('click', toggleModal);
btnclose.addEventListener('click',toggleModal);
iconclose.addEventListener('click',toggleModal);
modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget)
    {
        toggleModal();
    }
});