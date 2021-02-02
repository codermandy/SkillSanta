function clock(){
    let data=new Date();
    let hrs = data.getHours();
    let mins= data.getMinutes();
    let secs=data.getSeconds();
    let period="AM"
    if(hrs==0) hrs=12;
    else if(hrs>12){
        hrs=hrs%12;
        period="PM";
    }
    hrs=hrs<10? `0${hrs}`:hrs;
    mins=mins<10? `0${mins}`:mins;
    secs=secs<10? `0${secs}`:secs;
    
    let result=hrs+":"+mins+":"+secs+" "+period;
    setInterval(clock, 1000);
    document.getElementById("clock").innerText=result;
    
}
function helloWorld(){
    console.log("hello timeout");
    setTimeout(helloWorld,3000);
}
function helloWorld2(){
    console.log("hello interval");
    setInterval(helloWorld2,3000);
}
helloWorld2();


clock();
