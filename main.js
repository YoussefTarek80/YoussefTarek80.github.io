let navbar=document.querySelector('.container_nav');
window.addEventListener('scroll',()=>{
    if(innerWidth>1036){
        if(scrollY>0){
            navbar.style.height='60px';
            navbar.style.backgroundColor='white';
        }
        else if(scrollY==0){
            navbar.style.height='80px';
        }
    }
    else{
        navbar.style.height='80px';
    }

})

// animation
window.addEventListener('scroll',reaveal);
function reaveal(){
    var reaveals=document.querySelectorAll('.reveal');
    for(var i=0;i<reaveals.length;i++){
        var windowheight=window.innerHeight;
        var reavealtop=reaveals[i].getBoundingClientRect().top;
        var reavealpoint=150;

        if(reavealtop<windowheight-reavealpoint){
            reaveals[i].classList.add('active');
        }
        else{
            reaveals[i].classList.remove('active');
        }
    }
}

// resetpage
let reset=document.querySelector('.Reset');
window.addEventListener('scroll',()=>{
    if(scrollY>462.8746337890625){
        reset.style.display='block';
        reset.style.transform='scale(1.1)';
        reset.style.transformOrigin='bottom left';
        // reset.classList.add('.pop');
    }
    else{
        reset.style.display='none';
    }
})
reset.addEventListener('click',()=>{
    scroll({
        top:0,
        behavior:"smooth"
    })
})

//menu
let menubtn=document.querySelector('.menu');

menubtn.addEventListener('click',()=>{
    menubtn.classList.toggle("show");
})
//store data in localstorage
let btn=document.querySelector('.btnsend');
let namee=document.querySelector('#in1');
let email=document.querySelector('#in2');
let phone=document.querySelector('#in3');
let message=document.querySelector('#in4');
let data;
let i=document.querySelector('.bx-check-double')
if(localStorage.info!=null){
    data=JSON.parse(localStorage.info);
}
else{
    data=[];
}
function hide(){
    i.style.visibility='hidden ';
}
btn.addEventListener('click',()=>{
    let obj={
        namee:namee.value,
        email:email.value,
        phone:phone.value,
        message:message.value
    }
    if(namee.value!=''&&email.value!=''&&phone.value!=''&&message.value!=''){
        data.push(obj);
        if(innerWidth>1300){
            i.style.display='block';
            setTimeout('hide()',3000);
        }
    }
    localStorage.setItem('info',JSON.stringify(data));
    clear();
})
function clear(){
    namee.value='';
    email.value='';
    phone.value='';
    message.value='';
}
