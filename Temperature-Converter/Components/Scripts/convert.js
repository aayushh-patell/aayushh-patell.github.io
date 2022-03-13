function convertCtoF(degree) {
    let x;
    if (degree == "C") {
        x = Math.round(document.getElementById("c").value * 1.8 + 32).toFixed(1);
        document.getElementById("c-out").value = x;
    }
}

function convertFtoC(degree) {
    let y;
    if (degree == "F") {
        y = Math.round((document.getElementById("f").value - 32) / 1.8).toFixed(1);
        document.getElementById("f-out").value = y;
    }
}

let count = 0;

function themeChange() {
    count += 1;

    if (count % 2 == 0) {
        let link = document.getElementById("default");
        link.href = "Components/Styling/base.css";
    } else {
        let link = document.getElementById("default");
        link.href = "Components/Styling/dark.css";
    }
}