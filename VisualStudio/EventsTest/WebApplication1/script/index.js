// bubbling capturing example

var diven = document.getElementById('ett');
diven.addEventListener('click', function (e) {
    alert("hej");
    e.stopPropagation();
}, false);

var para = document.getElementById('paraOne');

para.addEventListener('click', function (e) {
    alert("paragrafen");
    //e.stopPropagation();
});