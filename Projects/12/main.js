var p = document.getElementsByTagName('p'); // получаем все параграфы p - массив
var one = document.getElementsByClassName('one'); // обращение по имени класса
console.log(p);

for (var i = 0; i < p.length; i++) // запускаем цикл и обращаемся к каждому элементу массива
{
    p[i]. onclick = f1;
}

for (var i = 0; i < one.length; i++) // массив one
{
    one[i]. onclick = f2; // присваиваем функцию f2
}

function f1()
{
    console.log(this); //this - переменная в которую помещается помещается тот элемент,на котором произошло событие
    this.style.background = 'pink'; // внутри this лежит элемент на котором произошло событие клик
}

function f2()
{
    this.style.fontWeight = 'bold';
}
