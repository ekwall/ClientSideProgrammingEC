var lenght;
var weight;
var theButton = document.getElementById('calcButton');
var btnCheckBodyStatus = document.getElementById('bodyStatus');
var bmiResult;
var bodyStatusMessage;
var bmi;



theButton.addEventListener('click', function () {
    
    lenght = document.getElementById('length').value;
    weight = document.getElementById('weight').value;

    bmi = document.getElementById('bmi');

    
    bmiResult = (Number(weight) / (Number(lenght) * Number(lenght))) * 10000;
    
    var rounded = Math.round(bmiResult);
   
    bmi.innerHTML = Number(rounded);
}, false);



btnCheckBodyStatus.addEventListener('click', function (e) {
    //e.stopPropagation();
    switch (true) {
        case bmiResult < 19:
            bodyStatusMessage = "You are a thinner";
            break;
        case bmiResult > 20 && bmiResult < 25:
            bodyStatusMessage = "You are average";
            break;
        case bmiResult > 26:
            bodyStatusMessage = "You are a fattie";
            break;

        default:
            bodyStatusMessage = "I dont know what you are!";
    }

    bodyStatusPara.innerHTML = bodyStatusMessage;

}, false);