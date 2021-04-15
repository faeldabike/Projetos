var p = document.getElementsByTagName('p')

//  p objeto

p[0].innerHTML = 'Manipulado via JS!'


for( var i = 0; i < 10; i++){
    p[0].innerHTML = p[0].innerHTML + '- algo - ';
}
/* se eu adicionar apos o for posso mudar valores especificos
p[1].innerHTML = 'Vem q tem!'
*/

