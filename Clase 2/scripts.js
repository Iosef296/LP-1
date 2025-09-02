function calcular1(){
    var a =document.getElementById("a").value;
    var b =document.getElementById("b").value;
    var c =document.getElementById("c").value;
    console.log(a+", "+b+", "+c)
    d=Math.pow(b,2)-4*a*c;
    if(d>0){
    x1=(-b+Math.sqrt(d))/(2*a);
    x2=(-b-Math.sqrt(d))/(2*a);
    document.getElementById("r").innerHTML="x1=" +x1+"<br>"+"x2="+x2;
    }else{
        alert("Sin soluciones reales")
    }
}  
function calcular2(){
    var horas = document.getElementById("horas").value;
    var voucher = document.getElementById("opt").value;
    if(horas!=""){
    if(voucher=="SI"){
    document.getElementById("cobro").innerHTML="El total a pagar es:" + (horas - 2)*2;
    }
    else{
    document.getElementById("cobro").innerHTML="El total a pagar es:" + horas*2; 
    }
}else{
 document.getElementById("cobro").innerHTML="Resultado";
}  
}

function changeColor(color){
   switch(color){
    case "Rojo":
        document.getElementById("fotoa").src='img/rojo.png'
        document.getElementById("color_auto").innerHTML="Color: Rojo";
        break;
    case "Blanco":
        document.getElementById("fotoa").src='img/blanco.png'
        document.getElementById("color_auto").innerHTML="Color: Blanco";
        break;
    case "Gris":
        document.getElementById("fotoa").src='img/gris.png'
        document.getElementById("color_auto").innerHTML="Color: Gris";
        break;
    case "Cafe":
        document.getElementById("fotoa").src='img/marron.png'
        document.getElementById("color_auto").innerHTML="Color: Marron";
        break;
    case "Negro":
        document.getElementById("fotoa").src='img/negro.png'
        document.getElementById("color_auto").innerHTML="Color: Negro";
        break;
    default:
        break;
        
   }
}