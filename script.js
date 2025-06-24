//definir constantes para uso no código
const btnAdd = document.getElementById('btn-add');
const tarefa = document.getElementById('tarefa');
const taskiList = document.getElementById('taskList');
const titulo = document.getElementById('titulo');

let nome = prompt("Qual o seu nome?")
tarefa.focus();
titulo.innerHTML = ` Lista de tarefa: ${nome}`;
//acompanha o evento de clique do botão adicionar tarefa
btnAdd.addEventListener("click",criaTarefa);

function criaTarefa(){
    if (tarefa.value==""){
        alert("Digite o nome de sua tarefa")
    }else{
        
    
 const listItem =document.createElement('li')
 listItem.textContent = tarefa.value;
 // pai     recebe     filho
 taskiList.appendChild(listItem);
  
 //Criar botão de deletar tarefa 

 const removeButton = document.createElement('button');
 removeButton.id = "remove";
 removeButton.textContent = "x"
 

removeButton.addEventListener("click",function(){
    taskiList.removeChild(listItem);
})