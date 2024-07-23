const qrText=document.getElementById('qr-text');
const sizes =document.getElementById('sizes');
const generateBtn=document.getElementById('generateBtn');
const downloadBtn=document.getElementById('downloadBtn');

const qrContainer=document.querySelector('.qr-body');

let size=sizes.value;
generateBtn.addEventListener('click',(e)=> {
    e.preventDefault();
    isEmptyInput();
    
});

sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    isEmptyInput();
    
});
downloadBtn.addEventListener('click',()=>{
    let img=document.querySelector('.qr-body img');
    if(img!==NULL){
        let imgArr=img.getAttribute('src');
        downloadBtn.setAttribute("href",imgArr);
    }
    else{
        downloadBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
    }
})
function isEmptyInput(){
    // if(qrText.value.length>0){
    //     generateQRCode();
    // }
    // else{
    //     alert("enter the text or url to generate the Qr Code")
    // }
    qrText.value.length>0 ? generateQRCode() :alert("enter the text or url to generate the Qr Code");
}

function generateQRCode(){
    qrContainer.innerHTML="";
    new QRCode(qrContainer,{
       text:qrText.value,
       height:size,
       width:size,
       colorLight:"#fff",
       colorDark:"#000",
    });
}
