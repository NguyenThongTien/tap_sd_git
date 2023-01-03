const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const slidercontainer = $('.sliders')
const sliderImg = $$('.slider')

let index = 1;
function next(){
    if(index < slidercontainer.length -1)
    {
        index++
    }
    else
}