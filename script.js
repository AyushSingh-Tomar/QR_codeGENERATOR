let imgBox = document.getElementById("imgB");
let btn = document.getElementById("btn");
let textData = document.getElementById("textData");
let bor = document.getElementById("bor");
btn.addEventListener('click',()=>getQR());
function getQR(){
    if(textData.value!==""){
        document.getElementById("err").classList.remove("show");
        imgBox.classList.remove("hide");
        imgBox.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+textData.value;
        bor.classList.remove("red");
        bor.classList.add("green");
    }
    else{
        imgBox.classList.add("hide");
        document.getElementById("err").classList.add("show");
        bor.classList.add("red");
    }
}
