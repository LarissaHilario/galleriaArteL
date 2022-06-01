const lista = [{ email: "",usuario: ""},
     ];

const imprimir = ()=>{

    let user= document.getElementById("user").value;
    let email= document.getElementById("email").value;
    let registro={email,user}
    if (user!=""&& email!=""){ 
        lista.push(registro); 
        texto="Registro exitoso,gracias por suscribirse "+user;
        console.log(lista);
        alert(texto);
    }
    else{
       texto="Datos incompletos, vuelve a intentarlo";
        console.log(texto);
        alert(texto)
    }
     console.log(lista);
    }
    
   