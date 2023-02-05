const formulario = document.querySelector('.coluna-direita form');
const camposDoFormulario = document.querySelectorAll('.coluna-direita form input');

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    camposDoFormulario.forEach((input)=>{
        if (!input.value) {
            input.parentElement.classList.add('erro');
        }else{
            input.parentElement.classList.remove('erro');
            if (input.type == 'email'){
            if (emailValido(input.value)) {
                input.parentElement.classList.remove('erro');
            }else {
                input.parentElement.classList.add('erro');
            }
        }   
     }
    });
});

function emailValido (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
