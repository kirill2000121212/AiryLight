const dialog = document.querySelector("#modal-signUp")
const signUp = document.querySelector("#signup")

import Swiper from 'swiper/bundle';


const slider = new Swiper.Swiper('.slider',{
    direction: 'horizontal',
    loop: false,
    pagination:{
        el: '.swiper-pagination'
        
    }
})

signUp.addEventListener("click",()=>{
   console.log(1);
    dialog.showModal()

})

