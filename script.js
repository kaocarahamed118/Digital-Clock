const hoursCOde = document.getElementById('hours');
const miniutesCOde = document.getElementById('miniutes');
const secoundCOde = document.getElementById('secound');


function setTime(){
    const getTime = new Date();
    
    // get hours
    const getHours = getTime.getHours() % 12;
    if(getHours <= 9){
        hoursCOde.innerHTML = '0' + getHours;
    }else{
        hoursCOde.innerHTML = getHours;
    }
    
    // get Miniutes
    const getMinitues = getTime.getMinutes();
    if(getMinitues <= 9){
        miniutesCOde.innerHTML = "0" + getMinitues;
    }else{
        miniutesCOde.innerHTML = getMinitues
    }

    // get Secound
    const getSecound = getTime.getSeconds();
    if(getSecound <= 9){
        secoundCOde.innerHTML = "0" + getSecound;
    }else{
        secoundCOde.innerHTML = getSecound;
    }
}






setInterval(setTime, 1000);