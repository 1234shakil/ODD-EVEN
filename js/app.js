function sub(){
    let num = Number(document.querySelector('#inp').value);

    let odev = num % 2;



    if(odev == 0 ){
    document.querySelector('h1').innerText = 'EVEN';
    document.querySelector('h1').style.color = 'rgb(255, 212, 18)';
    document.querySelector('.ev').style.color = 'red';
    document
    }else{
        document.querySelector('h1').innerText = 'ODD';
        document.querySelector('h1').style.color = 'rgb(255, 212, 18)';
        document.querySelector('.od').style.color = 'red';
    }
}