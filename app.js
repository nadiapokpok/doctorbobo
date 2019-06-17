var part1 = document.getElementById('part1');
var part2 = document.getElementById('part2');
var part3 = document.getElementById('part3');
var part4 = document.getElementById('part4');
var part5 = document.getElementById('part5');
var part6 = document.getElementById('part6');

function show(choice){
    var choix = document.getElementById(choice);
    if (choix.style.display == 'none'){
        choix.style.display = 'block'
    }else{
        choix.style.display = 'none';
    }
}
