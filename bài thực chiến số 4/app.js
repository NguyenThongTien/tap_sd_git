var image = document.querySelectorAll('.image img');
var prew = document.querySelector('.prew');
var next = document.querySelector('.next');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery__inner img');
var gallery = document.querySelector('.gallery');

var currenIndex = 0;
function showgallery(){
    if(currenIndex == 0)
    {
        prew.classList.add('hide');
    }else{
        prew.classList.remove('hide')
    }

    if(currenIndex == image.length-1)
    {
        next.classList.add('hide');
    }else{
        next.classList.remove('hide')

    }

    gallery.classList.add('show');  
    galleryImg.src = image[currenIndex].src;
};

image.forEach((item, index)=>{
    item.addEventListener('click',function(){
        currenIndex = index;
        showgallery();
    })
})
close.addEventListener('click',function(){
    gallery.classList.remove('show');
})
document.addEventListener('keydown',function(e){
    if(e.keydown == 27)
    {
        gallery.classList.remove('show');
    }
})
prew.addEventListener('click', function(){
    if(currenIndex > 0)
    {
        currenIndex--;
        showgallery();
    }
})
next.addEventListener('click', function(){
    if(currenIndex < image.length-1)
    {
        currenIndex++;
        showgallery();
    }
})