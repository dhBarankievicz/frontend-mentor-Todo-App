const imagem = document.getElementById('imagemTrocar');
const bg = document.querySelector('.background');
const main = document.querySelector('main');
const boxNova = document.querySelector('.new');
const todolist = document.querySelector('.todoList');
const tarefa = document.querySelectorAll('.todoList > *');
const op = document.querySelectorAll('.opcoes h4');
const circulo = document.querySelectorAll('.todoList .circulo')
const input = document.querySelector('.new input');
const quantidade=document.getElementById('qtde');
const botao = document.getElementById('addbotao');


//////
function removerEstilos(){
   bg.removeAttribute('style');
   main.removeAttribute('style');
   boxNova.removeAttribute('style');
   input.removeAttribute('style');
   todolist.removeAttribute('style');
   circulo.forEach(c => c.removeAttribute('style'));
   tarefa.forEach(t => t.removeAttribute('style'));
    
}
///////
function temaClaro() {
    removerEstilos();
    bg.style.backgroundImage = 'url(images/bg-desktop-light.jpg)';
    main.style.backgroundColor = 'hsl(236, 33%, 92%)';
    boxNova.style.color = 'hsl(236, 9%, 61%)';
    input.style.color = 'hsl(236, 9%, 61%)';
    boxNova.style.backgroundColor = 'hsl(0, 0%, 98%)';
    todolist.style.backgroundColor = 'hsl(0, 0%, 98%)';
    botao.style.border='2px solid hsl(236, 33%, 92%)'

}
////////////////
function temaEscuro() {
    removerEstilos();
    bg.style.backgroundImage = 'url(images/bg-desktop-dark.jpg)';
    main.style.backgroundColor = 'hsl(235, 21%, 11%)';
    boxNova.style.color = 'hsl(235, 19%, 35%)';
    input.style.color = 'hsl(235, 19%, 35%)';
    boxNova.style.backgroundColor = 'hsl(235, 24%, 19%)';
    todolist.style.backgroundColor = 'hsl(235, 24%, 19%)';
    botao.style.border='2px solid hsl(237, 14%, 26%)';

}
/////////////////
imagem.addEventListener('click', () => {
    if (imagem.src.includes('icon-sun.svg')) {
        imagem.src = 'images/icon-moon.svg'
        temaClaro()
        //ao clicar para no tema claro
    } else if (imagem.src.includes('icon-moon.svg')) {
        imagem.src = 'images/icon-sun.svg'
        temaEscuro()
        //ao clicar para o tema escuro
    }
})

//////////////////////
function add(){
    const botao = document.getElementById('addbotao')
    botao.addEventListener('click', () => {
        if (todolist.children.length<=6) {          
            const textoTarefa = document.getElementById('add').value;
            if (textoTarefa == '') {
                return
            } else {
                const novatarefa = document.createElement('li');   
                novatarefa.classList.add('tarefa');
                //
                const flex=document.createElement('div');
                flex.classList.add('flex');
                novatarefa.appendChild(flex);
                //
                const circ=document.createElement('div');
                circ.classList.add('circulo');
                if (imagem.src.includes('icon-sun.svg')){
            
                }




                flex.appendChild(circ);
                //
                const texto= document.createElement('h3');
                texto.textContent = textoTarefa;
                flex.appendChild(texto)
                //
                const lixeira=document.createElement ('div');
                lixeira.classList.add('excluir');
                flex.appendChild(lixeira)
                todolist.appendChild(novatarefa)
            }
        atualizarQunatidade()
        } else {
            return
        }
    })
}
add()
/////////////////////
function deletar(){
    todolist.addEventListener('click',(e)=>{
        if(e.target.classList.contains('excluir')){
            let tarefa=e.target.closest('.tarefa');
            if(tarefa){
                tarefa.remove()   
        }
        atualizarQunatidade()   
    }
})
}
deletar()
///////////////////
function concluir(){
    todolist.addEventListener('click',(e)=>{
        if(e.target.classList.contains('circulo')){
            let ok = e.target.closest('.circulo');
            let h3 = e.target.closest('.tarefa').querySelector('h3')
            if(circulo){
                ok.classList.add('marcado');
                h3.style.textDecoration='line-through'
            }
        }
    })
}
concluir()
///////////////
function atualizarQunatidade(){
    const q=todolist.querySelectorAll('.tarefa').length;
    quantidade.innerHTML=q
}
///////////////
function limpando(){
    const limpar = document.getElementById('limpar');
    limpar.addEventListener('click',()=>{
        let todos= document.querySelectorAll('li');
        todos.forEach(t=>{
            t.remove();
            atualizarQunatidade()
        })
    })
}
limpando()
//////////
function ativados(){
    const ativos = document.getElementById('ativos');
    ativos.addEventListener('click',(e)=>{
        let tudo=document.querySelectorAll('.circulo');
        tudo.forEach(t=>{
            if(t.classList.contains('marcado')){
                t.closest('.tarefa').style.display='none'
            };
            if(!t.classList.contains('marcado')){
                t.closest('.tarefa').style.display='block'
            }; 
        })
       op.forEach(o=>{
        o.classList.remove('escolhido')
       })
       let ativando = e.target.classList;
       ativando.add('escolhido')
    })
}
ativados()
///////
function completos(){
    const completo = document.getElementById('completos');
    completo.addEventListener('click',(e)=>{
        let tudo=document.querySelectorAll('.circulo');
        tudo.forEach(t=>{
            if(!t.classList.contains('marcado')){
                t.closest('.tarefa').style.display='none'
            }; 
            if(t.classList.contains('marcado')){
                t.closest('.tarefa').style.display='block'
            }; 
        })
        op.forEach(o=>{
            o.classList.remove('escolhido')
        })
        let ativando = e.target.classList;
        ativando.add('escolhido')
    })
}
completos()
///////
function todos(){
    const tudo = document.getElementById('tudo');
    tudo.addEventListener('click',(e)=>{
        const tarefas = document.querySelectorAll('.todoList .tarefa');
        tarefas.forEach(ta=>{
            ta.style.display='block'
        })
        op.forEach(o=>{
            o.classList.remove('escolhido')
        })
        let ativando = e.target.classList;
        ativando.add('escolhido')  
    })
}
todos()


    
    




