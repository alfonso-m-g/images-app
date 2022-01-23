document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
          "#loader").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
};

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
    string = string + "<div class='item' id='" + i + "'><img src='./images/" + i + ".jpg' alt='te amo'><h3>" + frases[i-1] + "</h3></div>";
}

document.getElementById("place-pic").innerHTML = string;

function accion()
{
    let value;
    let exec_count;
    let test = localStorage.getItem('pressed');
    let exec_count_storage = localStorage.getItem('count');

    if(test == null){
        value = 'false';
        exec_count = 0;
    }
    else{
        value = test;
        exec_count = exec_count_storage;
    }

    scroll(0,0);
    let num=1;

    const timeValue = setInterval(function(){ 
            if(value == 'false'){
                document.getElementById(num).innerHTML = "<img src='./images/wola.png'></img>";
            }

            if(value == 'true'){
                if(exec_count % 2 == 1){
                    document.getElementById(num).innerHTML = "<img src='./images/" + num + ".jpg'></img>";
                }

                if (exec_count % 2 == 0){
                    document.getElementById(num).innerHTML = "<img src='./images/wola.png'></img>";
                }
            }

            if(num == 21){
                clearInterval(timeValue);
                exec_count++;
                localStorage.setItem('count',exec_count);
                localStorage.setItem('pressed',true);
                value = localStorage.getItem('pressed');
            }
            num++
    }, 750);  
}
