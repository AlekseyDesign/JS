var radio = document.getElementsByName('prim');

for (var i = 0; i < radio.length; i++)
{
    radio[i].onchange = testRadio; // берем массив radio, берем его i -ый элемент и присвамваем ему событие onchange какую-либо функцию testRadio
    // этот цикл перебирает input-ы и на каждый вешает событие onchange,при изменении
}

function testRadio()
{
    console.log (this.value); // эта запись возвращает value выбранного элемента
}

document.getElementById('one').onclick = checkRadio;

// Перебираем все инпуты и находим тот который выделен
function checkRadio()
{
    var m = document.getElementsByName('prim'); // получаем все элементы примеры в переменную m
    for( var i = 0; i < m.length; i++)
    {
        if ( m[i].checked ) // берём каждый элемент массива и проверяем выбран он или нет
        {                   // если m[i] - это текущий элемент массива выбран
            alert( m[i].value ); // информируем какой элемент выбран
            break;
        }
    }
}
