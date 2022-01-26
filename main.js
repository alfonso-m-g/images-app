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

GET();
localStorage.clear();

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

for (i = 1; i <= 21; i++) {
    string = string + "<div class='item' id='" + i + "'><img src='./images/" + i + ".jpg' alt='te amo'><h3>" + frases[i - 1] + "</h3></div>";
}

document.getElementById("place-pic").innerHTML = string;

function Comment(name, comment) {
    this.name = name;
    this.comment = comment;
}

function accion() {
    let value;
    let exec_count;
    let test = localStorage.getItem('pressed');
    let exec_count_storage = localStorage.getItem('count');

    if (test == null) {
        value = 'false';
        exec_count = 0;
    } else {
        value = test;
        exec_count = exec_count_storage;
    }

    scroll(0, 0);
    let num = 1;

    const timeValue = setInterval(function() {
        if (value == 'false') {
            document.getElementById(num).innerHTML = "<img src='./images/wola.png'></img>";
        }

        if (value == 'true') {
            if (exec_count % 2 == 1) {
                document.getElementById(num).innerHTML = "<img src='./images/" + num + ".jpg'></img>";
            }

            if (exec_count % 2 == 0) {
                document.getElementById(num).innerHTML = "<img src='./images/wola.png'></img>";
            }
        }

        if (num == 21) {
            clearInterval(timeValue);
            exec_count++;
            localStorage.setItem('count', exec_count);
            localStorage.setItem('pressed', true);
            value = localStorage.getItem('pressed');
        }
        num++
    }, 750);
}

function GET() {

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            let result = JSON.parse(this.responseText);
            let size = result.length;
            let string = "";

            for (let i = 0; i < size; i++) {
                string = string + "<tr><td>" + result[i].id + "</td><td>" + result[i].name + "</td><td>" + result[i].comment + "</td></tr>"
            }
            document.getElementById("insert").innerHTML = string;

        }
    };

    xhttp.open("GET", "https://retoolapi.dev/DO1qZf/pachi_api/", true);
    xhttp.send();
}

function POST() {
    let name = document.getElementsByName('name')[0].value;
    let comment = document.getElementsByName('comment')[0].value;
    let body = new Comment(name, comment);

    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "https://retoolapi.dev/DO1qZf/pachi_api", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(body));
    GET();
    window.scrollTo(0,document.body.scrollHeight);
    clearBoxes();
}

function clearBoxes() {
    document.getElementsByName('name')[0].value = "";
    document.getElementsByName('comment')[0].value = "";
}
