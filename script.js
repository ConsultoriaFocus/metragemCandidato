const formulario = document.querySelector('#form');

const button = document.querySelector('#button');

const nome = document.querySelector("#nome");
const motivo = document.querySelector("#motivo");
const data =  document.querySelector("#data");
let advertencia = document.querySelector('#advertencia');
const motivo2 = document.querySelector('#motivo2')

formulario.addEventListener('submit', e=>{
    e.preventDefault();
    verificaFormulario();
})

function verificaFormulario(){
    if(nome.value == '' || motivo.options[motivo.selectedIndex].value == '' || data.value == ''){
        alert('Preencha todos os campos!');
        return false
    }
    else{
        let aux2 = data.value;
        let aux = motivo.selectedOptions[0];
        motivo2.value = aux.textContent;
        data.value = aux2;
        advertencia2();
        const dataForm = new FormData(formulario);
        fetch(formulario.action, {
            method: "POST",
            body: dataForm,
        })
        .then(response => response.json())
        .then(message => alert('Os dados foram enviados'))
        .catch(error => alert('Os dados não foram salvos'));
        return true;
    };
}

function advertencia2(){
    const optgroupSelecionado = motivo.selectedOptions[0].parentNode.label;
    if (optgroupSelecionado === "Leve") {
        advertencia.value = "2";
    }
    else if(optgroupSelecionado === "Moderado") {
        advertencia.value = "4";
    }
    else if(optgroupSelecionado === "Grave") {
        advertencia.value = "6";
    }
    else if(optgroupSelecionado === "Gravíssima") {
        advertencia.value = "10";
    }
    else if(optgroupSelecionado === "Eliminatória") {
        advertencia.value = "12";
    } 
}
