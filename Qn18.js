function weight(w,h){
    var bmi=w/(h*h);
    if(bmi < 18.5){
        console.log("Underweight");
    }else if(bmi >=18.5 && bmi <25){
        console.log("Normal");
    }else if(bmi >=25 && bmi <30){
        console.log("Overweight");
    }else if(bmi >=30 && bmi <=35){
        console.log("Obesity");
    }
}
 weight(67,1.7);