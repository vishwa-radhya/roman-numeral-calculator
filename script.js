const inputNumber = document.getElementById('number');
const output = document.getElementById('output');
const btn = document.getElementById('convert-btn');
const outP = document.getElementById('opText');
const calc =(input)=>{
    outP.classList.remove('warn');
    const numInput = parseInt(input);
    if(input===''){
        alert('Please enter a valid number');
        return;
    }else if(numInput <=0){
        outP.textContent = 'Please enter a number greater than or equal to 1.';
        outP.classList.add('warn');
        return;
    }else if(numInput > 3999){
        outP.textContent='Please enter a number less than or equal to 3999.';
        outP.classList.add('warn');
        return;
    }
    let opTxt = '';
    let val = numInput;
    while(val>0){
        if(val>=1000){
            opTxt+='M';
            val-=1000;
        }else if(val>=900){
            opTxt+='CM';
            val-=900;
        }else if(val>=500){
            opTxt+='D';
            val-=500;
        }else if(val>=400){
            opTxt+='CD';
            val-=400;
        }else if(val >=100){
            opTxt+='C';
            val-=100;
        }else if(val >=90){
            opTxt+='XC';
            val-=90;
        }else if(val >=50){
            opTxt+='L';
            val-=50;
        }else if(val >=40){
            opTxt+='XL';
            val-=40;
        }else if(val >=10){
            opTxt+='X';
            val-=10;
        }else if(val >=9){
            opTxt+='IX';
            val-=9;
        }else if(val >=5){
            opTxt+='V';
            val-=5;
        }else if(val >=4){
            opTxt+='IV';
            val-=4;
        }else if(val >=1){
            opTxt+='I';
            val-=1;
        }
    }
    output.classList.remove('hidden');
    outP.textContent=opTxt;
}
btn.addEventListener('click',()=>{
    calc(inputNumber.value);
});
inputNumber.addEventListener('keydown',e=>{
    if(e.key==='Enter'){
        calc(inputNumber.value);
    }
})