function countString(word){
    var spltArray = word.split("");
    var a=0
    for( let i = 0; i < spltArray.length ; i++){
        if( spltArray[i] === " "){
            a++;
        }
        var total = spltArray.length - a;
    }
    console.log(total);
}
countString("anysia");