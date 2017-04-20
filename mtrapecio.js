/*Autor: Jesus Hazael Jimenez Barrera TNM - ITCuautla*/
var mtrapecio = function(){
  //Obtenemos los valores de n,a y b que el usuario ingreso en el formulario
  var n = parseFloat(document.getElementById('nParticiones').value);
  var a = parseFloat(document.getElementById('CotaInicial').value);
  var b = parseFloat(document.getElementById('CotaFinal').value);
  //Calculamos h
  var h = (b-a)/n;
  //creamos un arreglo donde guardaremos el valor de X de todas las iteraciones que se realizaran
  var Xi = [];
  Xi[0] = a;
  i=1;
  do{
    if((Xi[i-1]+ h)>b){
      Xi[i-1] = b;
    }else{
      Xi[i] = parseFloat(Xi[i-1] + h);
    }
    i++;
  }while (Xi[i-1]<=b);
  //creamos un arreglo donde guardaremos la funcion utilizando el valor de Xi en cada iteracion
  var Fx = [];
  for (i = 0; i < Xi.length; i++) {
      Fx[i] = 2/(Math.pow(Xi[i],2)+4);
  }
  /*Sumamos los datos de Fx:
    El primer dato y el ultimo que se encuentran en el array se suman normal
    Del segundo en adelante hasta el penultimo se multiplica primero cada posicion * 2 y se suma el resultado
  */
  var sum=0;
  for (i = 0; i < Xi.length; i++) {
    if(i == 0 || i == (Xi.length-1)){
      sum += Fx[i];
    }else{
      sum += (2*Fx[i]);
    }
  }
  //La suma la multiplicamos por h/2 y ese es nuestro resultado del area
  var areatot = sum*(h/2);
  //Mostramos los datos
  var body = document.getElementsByTagName('body')[0];
  var div = document.createElement('div');
  div.id = "Datos";
  var tit = document.createElement('h2');
  var text = document.createTextNode("Datos");
  tit.appendChild(text);
  div.appendChild(tit);
  //Creamos una tabla para mostrar i de iteraciones los Xi y las funciones f(x)
  var tabla = document.createElement('table');
  tabla.id="Tab";
  //tabla.setAttribute("border", "2");
  //cramos la primera fila donde sera la que contendra los encabezados
  var fila = document.createElement('tr');
  fila.id = "Tit";
  //Creamos la primera columna de la celda
  var columna = document.createElement('td');
  text = document.createTextNode("i");
  columna.appendChild(text);
  fila.appendChild(columna);
  //Creamos la segunda columna de la celda
  columna = document.createElement('td');
  text = document.createTextNode("Xi");
  columna.appendChild(text);
  fila.appendChild(columna);
  //Creamos la tercera columna de la celda
  columna = document.createElement('td');
  text = document.createTextNode("f(x)");
  columna.appendChild(text);
  fila.appendChild(columna);
  tabla.appendChild(fila);
  //Crearemos las demas filas ahora en un for
  for (i = 0; i < Xi.length; i++) {
    fila = document.createElement('tr');
    //col1
    columna = document.createElement('td');
    text = document.createTextNode(i);
    columna.appendChild(text);
    fila.appendChild(columna);
    //col2
    columna = document.createElement('td');
    text = document.createTextNode(Xi[i]);
    columna.appendChild(text);
    fila.appendChild(columna);
    //col3
    columna = document.createElement('td');
    text = document.createTextNode(Fx[i]);
    columna.appendChild(text);
    fila.appendChild(columna);
    tabla.appendChild(fila);
  }
  fila = document.createElement('tr');
  fila.id="formula";
  //col1
  columna = document.createElement('td');
  text = document.createTextNode("");
  columna.appendChild(text);
  fila.appendChild(columna);
  //col2
  columna = document.createElement('td');
  text = document.createTextNode("");
  columna.appendChild(text);
  fila.appendChild(columna);
  //col3
  columna = document.createElement('td');
  text = document.createTextNode("\u03A3 = "+sum+" * h/2("+(h/2)+")");
  columna.appendChild(text);
  fila.appendChild(columna);
  tabla.appendChild(fila);
  div.appendChild(tabla);

  divAtot = document.createElement('div');
  divAtot.id = "Atot";
  text = document.createTextNode("Area: "+areatot);
  divAtot.appendChild(text);
  div.appendChild(divAtot);
  body.appendChild(div);
}

var enviarA = function(){
  var dat = document.getElementById('CotaInicial').value;
  var desti = document.getElementById('CA');
  desti.innerHTML = dat;
}

var enviarB = function(){
  dat = document.getElementById('CotaFinal').value;
  desti = document.getElementById('CB');
  desti.innerHTML = dat;
}

var clean = function(){
  desti = document.getElementById('CA');
  desti.innerHTML = " ";
  desti = document.getElementById('CB');
  desti.innerHTML  = " ";
  document.getElementById("form").reset();
  body = document.getElementsByTagName('body')[0];
  div = document.getElementById('Datos');
  body.removeChild(div);

}
