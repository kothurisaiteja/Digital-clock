function UpdateClock(){
    const Now = new Date();
    let hours = Now.getHours();
    const Meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, "0");
    const min=Now.getMinutes().toString().padStart(2,0);
    const sec=Now.getSeconds().toString().padStart(2,0);
    const timestring=`${hours}:${min}:${sec} ${Meridian}`;
    document.getElementById("Clock").textContent=timestring;
    const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
    
};
document.getElementById("Date").textContent =
    Now.toLocaleDateString("en-US", options);
let greeting;

if (Now.getHours() < 12) {
    greeting = "Good Morning 🌅";
}
else if (Now.getHours() < 18) {
    greeting = "Good Afternoon ☀️";
}
else {
    greeting = "Good Evening 🌙";
}

document.getElementById("Greeting").textContent = greeting;
}

UpdateClock();
setInterval(UpdateClock,1000)