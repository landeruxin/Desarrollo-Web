
function mostrar(nombre,edad){

    
    
    if(nombre=="" ||edad==""){


        alert("Debe de introducir los dos valores.");

        

    }else{
        if(isNaN(edad)==false){

            if(edad>0 && edad<100){
                alert("Los valores introducidos son correctos.")
            }else{
                alert("Los valores válidos para la edad van desde 1 hasta 99.")
            }

        }else{
            alert("Para la edad debe de introducir valores numéricos.");
        }
    }
    
    
    

    
}
