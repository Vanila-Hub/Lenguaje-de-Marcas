function changemas(num) {
  
   var btn = document.getElementById("plusBTN");
   var fas = document.getElementById("plusBTN").firstElementChild;
   btn.style.transition = "all 2s  cubic-bezier(0,-0.32, 0.32, 1.28)";
   fas.classList.remove("fa-bookmark-0");
   fas.classList.add("fa-bookmark");
}

/////////////////////////////////////*//
function cambiacolor(color) {
   
   var cambio = document.getElementsByClassName("avatar_princi");  
   
   switch (color) {
      case 0:
         cambio[0].style.filter = "hue-rotate(10deg)";
         cambio[1].style.filter = "hue-rotate(10deg)";
         
         break;
      case 1:
         cambio[0].style.filter = "hue-rotate(-90deg)";
         cambio[1].style.filter = "hue-rotate(-90deg)";
         break;
      case 2:
         cambio[0].style.filter = "hue-rotate(120deg)";
         cambio[1].style.filter = "hue-rotate(120deg)";
         break;
   
      default:
         break;
   }

}



function Perfiles(estado) 
{
   var cajadeperfiles = document.getElementsByClassName("perfles")[0];

   if (estado==3) {  
      cajadeperfiles.style.scale = "1";

   }else if(estado==4){
      cajadeperfiles.style.scale = "0";
      
   }

   
}

function wrapinfo(i)
{
   var wrap1 = document.getElementsByClassName("infowrap")[i];
   
   var wrap_left= [0.09,25,0,0];
   var warp_top = [200,280,0,0];

   wrap_left[2] = wrap_left[1]+wrap_left[1]/2;
   wrap_left[3] = 47.8;

   switch (i) {
      
      case 0:

         wrap1.style.display="block";
         wrap1.style.scale = "1"; 
         wrap1.style.width = "51%";
         wrap1.style.left = wrap_left[0]+"%";
         wrap1.style.background="rgb(98 148 173 / 32%)";
         wrap1.style.transition = "all .32s ease 0s";
         break;

      case 1:
         wrap1.style.display="block";
         wrap1.style.scale = "1"; 
         wrap1.style.width = "51%";  
         wrap1.style.left = wrap_left[1]+"%";  
         wrap1.style.background="rgb(0 0 0 / 32%)";
         wrap1.style.transition = "all .32s ease 0s";
         break;

      case 2:
         
         wrap1.style.display="block";
         wrap1.style.scale = "1"; 
         wrap1.style.width = "51%";  
         wrap1.style.left = wrap_left[2]+"%";  
         wrap1.style.background="rgba(54 104 169 /32%)";
         wrap1.style.transition = "all .32s ease 0s";
         break;

      case 3:
         
         wrap1.style.display="block";
         wrap1.style.scale = "1"; 
         wrap1.style.width = "51%";  
         wrap1.style.left = wrap_left[3]+"%"; 
         wrap1.style.background="rgba(148 150 152 /32%)"; 
         wrap1.style.transition = "all .32s ease 0s";
         break;



         /////////////////////////////////////////matrimoniale////////////////////////////
      case 4:
         wrap1.style.display="block";
         wrap1.style.scale = "1"; 
         wrap1.style.width = "51%";  
         wrap1.style.left = wrap_left[0]+"%";  
         wrap1.style.top = warp_top[0] + "%";
         wrap1.style.transition = "all .32s ease 0s";
         break;
      case 5:
         wrap1.style.display="block";
         wrap1.style.scale = "1"; 
         wrap1.style.width = "51%";  
         wrap1.style.top = warp_top[0] + "%";
         wrap1.style.left = wrap_left[1]+"%";  
         wrap1.style.transition = "all .32s ease 0s";
         break;
      case 6:
         wrap1.style.display="block";
         wrap1.style.scale = "1"; 
         wrap1.style.width = "51%";  
         wrap1.style.left = wrap_left[2]+"%";
         wrap1.style.top = warp_top[0] + "%";  
         wrap1.style.transition = "all .32s ease 0s";
         break;
      case 7:
         wrap1.style.display="block";
         wrap1.style.scale = "1"; 
         wrap1.style.width = "51%";  
         wrap1.style.left = wrap_left[3]+"%";
         wrap1.style.top = warp_top[0] + "%";  
         wrap1.style.transition = "all .32s ease 0s";
         break;
         ///////////////aaaaaaaaaaaaaaaaaaaaaaaaaaaaa///////////////////////////
      case 8:
         wrap1.style.display="block";
         wrap1.style.scale = "1"; 
         wrap1.style.width = "51%";  
         wrap1.style.left = wrap_left[0]+"%";  
         wrap1.style.top = warp_top[1] + "%";
         wrap1.style.transition = "all .32s ease 0s";
         break;
      case 9:
         wrap1.style.display="block";
         wrap1.style.scale = "1"; 
         wrap1.style.width = "51%";  
         wrap1.style.top = warp_top[1] + "%";
         wrap1.style.left = wrap_left[1]+"%";  
         wrap1.style.transition = "all .32s ease 0s";
         break;
      case 10:
         wrap1.style.display="block";
         wrap1.style.scale = "1"; 
         wrap1.style.width = "51%";  
         wrap1.style.left = wrap_left[2]+"%";
         wrap1.style.top = warp_top[1] + "%";  
         wrap1.style.transition = "all .32s ease 0s";
         break;
      case 11:
         wrap1.style.display="block";
         wrap1.style.scale = "1"; 
         wrap1.style.width = "51%";  
         wrap1.style.left = wrap_left[3]+"%";
         wrap1.style.top = warp_top[1] + "%";  
         wrap1.style.transition = "all .32s ease 0s";
         break;
      default:
         break;
   }



}
function wrapinfocls(i)
{
   var wrap1 = document.getElementsByClassName("infowrap")[i]; 

   switch (i) {
      case 0:
         wrap1.style.width = "1%"; 
         wrap1.style.transition = "all .3s ease-out 0s";
         wrap1.style.scale="0"
         break;
      case 1:
         wrap1.style.width = "1%"; 
         wrap1.style.transition = "all .3s ease-out 0s";
         wrap1.style.scale="0"
         break;
      case 2:
         wrap1.style.width = "1%"; 
         wrap1.style.transition = "all .3s ease-out 0s";
         wrap1.style.scale="0"
         wrap1.style.left = "62%";  
         break;
      case 3:
         wrap1.style.width = "1%"; 
         wrap1.style.transition = "all .3s ease-out 0s";
         wrap1.style.scale="0"
         wrap1.style.left = "82%";
         break;
      case 4:
         wrap1.style.width = "1%";
         wrap1.style.transition = "all .3s ease-out 0s";
         wrap1.style.scale="0";

         break;
      case 5:
         wrap1.style.width = "1%"; 
         wrap1.style.transition = "all .3s ease-out 0s";
         wrap1.style.scale="0";
         break;
      case 6:
         wrap1.style.width = "1%"; 
         wrap1.style.transition = "all .3s ease-out 0s";
         wrap1.style.left = "62%";
         wrap1.style.scale="0";
         break;
      case 7:
         wrap1.style.width = "1%";
         wrap1.style.left = "82%"; 
         wrap1.style.transition = "all .3s ease-out 0s";
         wrap1.style.scale="0";   
         break;

      case 8:
         wrap1.style.width = "1%";
         wrap1.style.transition = "all .3s ease-out 0s";
         wrap1.style.scale="0";

         break;
      case 9:
         wrap1.style.width = "1%"; 
         wrap1.style.transition = "all .3s ease-out 0s";
         wrap1.style.scale="0";
         break;
      case 10:
         wrap1.style.width = "1%"; 
         wrap1.style.transition = "all .3s ease-out 0s";
         wrap1.style.left = "62%";
         wrap1.style.scale="0";
         break;
      case 11:
         wrap1.style.width = "1%";
         wrap1.style.left = "82%"; 
         wrap1.style.transition = "all .3s ease-out 0s";
         wrap1.style.scale="0";
         break;
   
      default:
         wrap1.style.width = "1%"; 
         wrap1.style.transition = "all .3s ease-out 0s";
         wrap1.style.scale="0";
         
         break;
   }


}

function wrapinfo2(i) {
   var wrap2 = document.querySelector('.pantall2poster');
   console.log(wrap2);
}