// procurar o botão
document.querySelector("#add-time") 
// Quando clicar no botão 
.addEventListener('click', cloneField)  

// Executar uma acao
function cloneField(){
    // Duplicar os campos
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //booleam | verdadeiro e falso


    // limpar os campos. quando for duplicado os horarios
    const fields = newFieldContainer.querySelectorAll('input')

    fields[0].value = ""
    fields[1].value = ""

    //para cada campo, limpar
    fields.forEach(function(field){
        //pega o field do moment e limpar ele
        field.value = ""
    })

    // colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
