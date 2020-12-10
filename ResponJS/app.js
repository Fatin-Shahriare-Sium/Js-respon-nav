
//Allah is Almighty
let toInsert=document.getElementById('nav-g-ul')
let bar=document.getElementById('nav-g-hambar-icon')

bar.addEventListener('click',function(){
    if(toInsert.classList.value=='nav-g-ul'){
        toInsert.classList.add('responsive')
    }else{
        toInsert.classList.remove('responsive')
    }
})
