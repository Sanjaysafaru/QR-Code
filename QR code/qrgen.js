const wrapper = document.querySelector(".wrapper"),
qrInput = document.querySelector(".form input"),
qrImg = wrapper.querySelector(".qr-code img"),
generateBtn = document.querySelector(".form button");


generateBtn.addEventListener("click", () =>{
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerHTML = "Generating QR Code...";
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example=${qrValue}`;
    qrImg.addEventListener("load", ()=>{
        wrapper.classList.add("active");
        generateBtn.innerHTML = "Generate QR Code";
    });
    qrInput.addEventListener("keyup", () =>{
        if(!qrInput.value){
            wrapper.classList.remove("active");
        }
    });
    
});