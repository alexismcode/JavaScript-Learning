let date = new Date();
console.log(date);
//Day of the month
console.log(date.getDate());
//Weekday (S,M,T,W,T,F,S -> 0,1,2,3,4,5,6)
console.log(date.getDay());
//Mont (Jan, Feb, Mar, Apr, May, Jun, Jul, Ago, Sep, Oct, Nov, Dic -> 0,1,2,3,4,5,6,7,8,9,10,11)
console.log(date.getMonth());
//Year
console.log(date.getFullYear());
//Hours, Minutes and Seconds
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
//MilliSeconds
console.log(date.getMilliseconds());

//In text
console.log(date.toString());
//Only the Date
console.log(date.toDateString());
    //In numbers
    console.log(date.toLocaleDateString());
    //Hours
    console.log(date.toLocaleTimeString());

//Hours difference with zero hour (Greenwich Meridian)
console.log(date.getTimezoneOffset());
//Day at zero hour (Greenwich Meridian)
console.log(date.getUTCDate());
//Zero hour (Greenwich Meridian)
console.log(date.getUTCHours());

//Updated seconds since January 1, 1970 (TIME STAMP)
console.log(Date.now());

//Note: Use MOMENT.JS LIBRARY
let birthdayA = new Date(2002,10,8);
console.log(birthdayA);