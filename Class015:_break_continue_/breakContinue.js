const NUMBERS = [1,2,3,4,5,6,7,8,9,0];

for(let i = 0; i < NUMBERS.length; i++){
    if(i === 5){
        break;
    };
    console.log(NUMBERS[i]);
};

for(let i = 0; i < NUMBERS.length; i++){
    if(i === 5){
        continue;
    };
    console.log(NUMBERS[i]);
};