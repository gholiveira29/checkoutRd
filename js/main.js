//funcao para validacao de cpf, valida se está sendo digitado apenas numeros 
let inputCpf = document.getElementById("cpf");
let senha = document.getElementById("senha");
let confirmeSenha = document.getElementById("confirmeSenha");
let inputcep = document.getElementById("cep");
let numeroCartao = document.getElementById("numeroDoCartao");
let dataCartao = document.getElementById("datadevalidade");
let ccv = document.getElementById("codseguranca");
let cpfTitular = document.getElementById("cpfdotitular");
let inputEndereco = document.getElementById("endereco");
let inputCidade = document.getElementById("cidade");
let inputEstado = document.getElementById("estado");
let inputBairro = document.getElementById("bairro");

function buscarCep(cep) {
    fetch("https://viacep.com.br/ws/" + cep + "/json/") // fetch por padrão utiliza GET
    .then(resposta => resposta.json())
    .then(dados => {
        if(dados.erro) {
            return inputCEP.setAttribute("class", "form-control is-invalid")
        }
        inputcep.setAttribute("class", "form-control is-valid")
        inputEndereco.value = dados.logradouro
        inputBairro.value = dados.bairro
        inputCidade.value = dados.localidade
        inputEstado.value = dados.uf
    })
}



inputCpf.addEventListener("keyup",()=>{
    if (isNaN(inputCpf.value)){
         //substring retira o ultimo elemento do array string 
        inputCpf.value = inputCpf.value.substring(0,(inputCpf.value.length-1));
        }
        if(inputCpf.value.length >= 11){
            inputCpf.value = inputCpf.value.substring(0,11);
        }
});

confirmeSenha.addEventListener("blur",(event)=>{
    if(senha.value != confirmeSenha.value){
        confirmeSenha.setAttribute("class", "form-control is-invalid")
     }else{
         confirmeSenha.setAttribute("class", "form-control is-valid")
     }
})
inputcep.addEventListener("keyup",(event)=>{
    if (isNaN(inputcep.value)){
      
        inputcep.value = inputcep.value.substring(0,(inputcep.value.length-1));
        }
        if(inputcep.value.length >= 8){
            inputcep.value = inputcep.value.substring(0,8);
            buscarCep(inputcep.value)
        
        }
});

numeroCartao.addEventListener("keyup",()=>{
    if (isNaN(numeroCartao.value)){
         
        numeroCartao.value = numeroCartao.substring(0,(numeroCartao.value.length-1));
        }
        if(numeroCartao.value.length >= 16){
            numeroCartao.value = numeroCartao.value.substring(0,16);
        }
});

dataCartao.addEventListener("keyup",()=>{
    if (isNaN(dataCartao.value)){
         
        dataCartao.value = dataCartao.substring(0,(dataCartao.value.length-1));
        }
        if(dataCartao.value.length >=6){
            dataCartao.value = dataCartao.value.substring(0,6);
        }
});

ccv.addEventListener("keyup",()=>{
    if (isNaN(ccv.value)){
         
        ccv.value = ccv.substring(0,(ccv.value.length-1));
        }
        if(ccv.value.length >=3){
            ccv.value = ccv.value.substring(0,3);
        }
});

cpfTitular.addEventListener("keyup",()=>{
    if (isNaN(cpfTitular.value)){
         
        cpfTitular.value = cpfTitular.substring(0,(cpfTitular.value.length-1));
        }
        if(cpfTitular.value.length >=11){
            cpfTitular.value = cpfTitular.value.substring(0,11);
        }
});



