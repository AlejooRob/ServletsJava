function validateForm(form) {
    let user = form.user;
    if(user.value == "") {
        alert("Proporciona un nombre de usuario");
        user.focus();
        user.select();
        return false;
    }
    
    let password = form.password;
    if(password.value == "" || password.value.length < 3) {
        alert("Debes proporcionar una contraseña de al menos 3 caracteres");
        password.focus();
        password.select();
        return false;
    }
    
    let tecnologies = form.tecnology;
    let selectedCheck = false;
    
    for(let i = 0; i < tecnologies.length; i++) {
        if(tecnologies[i].checked) {
            selectedCheck = true;
        }
    }
    if(!selectedCheck) {
        alert("Debes seleccionar una tecnología");
        return false;
    }
    
    let genders = form.gender;
    let selectedRadio = false;
    for(let i = 0; i < genders.length; i++) {
        if(genders[i].checked) {
            selectedRadio = true;
        }
    }
    if(!selectedRadio) {
        alert("Debe seleccionar un genero");
        return false;
    }
    
    let occupation = form.occupation;
    if(occupation.value == "")  {
        alert("Debe seleccionar una ocupación");
        return false;
    }
    
    // Validate Form
    alert("Formulario valido ingresando datos en el servidor");
    return true;
    
}

