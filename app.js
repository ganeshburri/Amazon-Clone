let img = document.querySelector('#carousel');
let img1='https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/GW/Unrec/Pets-PC_GW_Hero_3000x1200_01._CB578900116_.jpg';
let img2='https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/GATEWAY/April/CML/CML-GW_HERO_pc_2x._CB561612246_.jpg';
setInterval(()=>{
    if(img.src===img1){
        img.src=img2;
    }else{
        img.src=img1;
    }
},2000);