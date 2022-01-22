let string = "";
let frases = [ 
              "alfonso",
              "alfonso",
              "alfonso",
              "alfonso",
              "alfonso",
              "alfonso",
              "alfonso",
              "alfonso",
              "alfonso",
              "alfonso",
              "alfonso",
              "alfonso",
              "alfonso",
              "alfonso",
              "alfonso",
              "alfonso",
              "alfonso",
              "alfonso",
              "alfonso",
              "alfonso",
              "alfonso"
            ];
for (i=1; i<=21; i++){
    string = string + "<div class='item' id='" + i + "'><img src='/images/" + i + ".JPG' alt='te amo'><h3>" + frases[i-1] + "</h3></div>";
}
document.getElementById("place-pic").innerHTML = string;




function accion()
{
    scroll(0,0);
    let num=1;
    const timeValue = setInterval(function(){ 

            document.getElementById(num).innerHTML = "<img src='/images/wola.png'></img>";

            if(num == 21){
                clearInterval(timeValue);
            }

            num++
    }, 500);  
}