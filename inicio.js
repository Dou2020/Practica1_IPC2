function validarForma(forma){
    let Usuario = forma.usuario;
    if(Usuario.value == ""){
        alert("Debe proporcionar un nombre de usuario");
        Usuario.focus();
        Usuario.select();
        return false;
        
    }
    let password = forma.password;
    if (password.value == "" || password.value.length < 3) {
        alert("Debe proporcionar un password al menos de 3 caracteres");
        password.focus();
        password.select();
        return false;
    }
    if(password.value == "123456" || Usuario.value == "Admin"){  
        alert("formulario valido Bienvenido "+Usuario.value);
        console.log("Formulario valido Bienvenido "+Usuario.value);
        return true;
    }else{
        alert("Nombre usuario o contraseña incorrecta");
        console.log("Nombre Usuario o contraseña incorrecta "+Usuario.value+" "+password.value);
        return false;
    }
}
function mensajes(forma1){
    var nombre = forma1;
    alert(nombre);
}