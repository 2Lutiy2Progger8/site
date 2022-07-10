const paragraph = document.querySelector('#p')
document.querySelector("#submit0").onclick = function(){
    image.src = 'https://media2.giphy.com/media/evcB2qZZuYOi2lHqbh/giphy.webp'
    paragraph.textContent = 'You are fuckin asshole. Refresh this page and do it once again. There is another one thing you should be occupied with - if it is still "1-5" I will slap you. Thanks :)'
  }

document.querySelector("#submit1").onclick = function(){
    image.src = 'https://media3.giphy.com/media/VyzxI8ssSDLaLZdHJJ/giphy.webp'
    paragraph.textContent = 'It makes me happy, but I consider you have underestimated my work. Do it again please or you`ll be teared by my furious anger ;)'
}
const image = document.querySelector('#img')
document.querySelector("#submit2").onclick = function abc(){
    paragraph.textContent = 'You are widely belived as a handsome man. However, be more generous and insert some feedback by double(click/tap) on button'
    image.src = 'https://media2.giphy.com/media/3oKIPxk5wD9fCFN8Xe/giphy.gif?cid=ecf05e47wao1bvixk2w3foe27o2n452zdnujcu18hpcd3a06&rid=giphy.gif&ct=g'
    document.querySelector("#submit2").addEventListener('dblclick',()=>{
       const result = prompt('Рискни');
        if(result){
            alert('Какой деловой, может еще отзыв хочешь оставить. Бабки сначала скинь');
        }
    })
}

document.querySelector("#submit3").onclick = function(){
    image.src = 'https://media1.giphy.com/media/3o7bukVqeKOX7eIARW/giphy.gif?cid=ecf05e47qiju8bdnqc7pczey63u9532gvrgrl4l1sptk2fry&rid=giphy.gif&ct=g'

    paragraph.textContent = 'Thank you, enjoy yourself and if you still want to choose previous options, please, read this: "You need suck very big dick. As big as you could if you would be negro faggot"'
}




