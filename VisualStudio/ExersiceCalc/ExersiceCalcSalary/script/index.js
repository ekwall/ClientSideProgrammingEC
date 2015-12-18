$(document).ready(function () {

    var lön = prompt("Enter your salary!");
    var skatt = prompt("Enter your taxrate");
    var church = prompt("Are you member of the church?");

    



    $('#calcSalary').click(function () {
        
        var infoArray = [];

        var salary = document.getElementById('lön').value;
        var sysselgrad = document.getElementById('grad').value;
        var skatteTabell = document.getElementById('Skattetabell').value;
        var aldersGrupp = document.getElementById('aldersGrupp').value;

       
        
        

    });
});

var printSalary = function (salary, tax, church) {
    alert("gick in");
    if (church.toUpperCase() == 'N') {
        document.getElementById('completed').innerHTML("hejsan");
        return Number(tax) * Number(salary);
    }
    else {
        document.getElementById('completed').innerHTML("hejsan");
        return (Number(tax) * Number(salary)) * 0.99;
    }
}

//