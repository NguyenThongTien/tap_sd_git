
var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var removeAll = document.querySelector('.remove-all')


var tags = ['visual', 'java']

function render(){
    content.innerHTML = ''
    for(let i = 0 ; i < tags.length ; i++)
    {
        const tag = tags[i]
        content.innerHTML += `<li>
                                ${tag}
                                <i class="fa-solid fa-xmark" onclick = "removeTags(${i})"></i>
                            </li>`
    }
    content.appendChild(input);
    input.focus();
}

render();


input.addEventListener('keydown', function(event){
    if(event.key == 'Enter')
    {
        tags.push(input.value.trim())
        input.value= ''
        render();
    }
})

function removeTags(index)
{
     tags.splice(index, 1)
     render()
}

removeAll.addEventListener('click' , function(index){
    tags.splice(index, tags.length)
    render()
})
