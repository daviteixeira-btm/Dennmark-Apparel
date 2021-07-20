function store() {
    var form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // <--- isto pára o envio da form
    });

    var name = document.querySelector("#name");
    var email = document.querySelector("#email");
    
    if (
        name.value != null &&
        name.value != "" &&
        email.value != null &&
        email.value != ""
    ){
        localStorage.setItem("name", name.value);
        localStorage.setItem("email", name.email);
        alert(name.value + " seu email foi cadastrado com sucesso!");
        location.reload();
    }else {
        alert("Todos os campos devem ser completados");
    }
    
    return;
}