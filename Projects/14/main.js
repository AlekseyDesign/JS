document.getElementById('r1').oninput = cssGenerator;

function cssGenerator()
{
    // прямоугольник
    var div = document.getElementById('test');
    // получаю testarea
    var out = document.getElementById('out');
    // console.log(this.value);
    div.style.borderRadius = this.value + 'px'; // то что набегает на ползунке
    // border-radius: 30px;
    out.innerHTML = '-webkit-border-radius: '+this.value+'px;\n' ;
    out.innerHTML += 'border-radius: '+this.value+'px;' ;
}
