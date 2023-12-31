const btn = document.getElementById("button");
btn.addEventListener("click",changeRandomColor);
const randomColor = () => {
    let val = "0123456789ABCDE";
    let cons = "#";
    for (let i = 0; i < 6; i++) {
        cons = cons + val[Math.floor(Math.random() * 16)];

    }
    return cons;
};


function changeRandomColor() {
    document.body.style.backgroundColor = randomColor();
}


