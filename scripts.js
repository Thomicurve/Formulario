const buttonSubmit = document.querySelector(".button-submit");

const submitForm = ()=>{
    alert("Form submitted successfully!");
}

const getInputs = ()=>{
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const containerInputs = document.querySelectorAll("#cont-inputs");
    const boxForm = document.querySelector(".box-form");

    return [firstName, lastName, email, password, containerInputs, boxForm];
}



const verifyInputs = (inputs)=>{
    let empty = undefined;
    let correctEmail = undefined;  

    const activateIncorrectInputs = (numIndex, numberClass)=>{
        inputs[numIndex].setAttribute("class", "input" + numberClass);
        inputs[4][numIndex].setAttribute("class","entradas cont" + numberClass);
        inputs[5].setAttribute("id", "box-form");
    }
    const activateCorrectInputs = (numIndex)=>{
        inputs[numIndex].setAttribute("class", "");
        inputs[4][numIndex].setAttribute("class","");
        inputs[5].setAttribute("id", "");
    }
        //Verificar si los campos estan vacios
        for(let i = 0; i < 4; i++){
            if(inputs[i].value == ""){
                activateIncorrectInputs(i,(i+1));
                empty = true;
            }else{
                activateCorrectInputs(i);
                empty = false;
            }
        }
        const verifyNames = (selector, input, num)=>{
            for(let i = 0; i < selector.length; i++){
                for(let index = 0; index < 10; index++){
                    if(selector[i] == `${index}`){
                        activateIncorrectInputs(input,num);
                    }
                }
            }
        }
        //Verificar Nombre
        let valueName = inputs[0].value;
        verifyNames(valueName, 0,1);
       
        //verificar Apellido
        let valueLastName = inputs[1].value; 
        verifyNames(valueLastName,1,2);

        //Verificar Email
        let arroba = inputs[2].value.includes("@");
        let punto = inputs[2].value.includes(".");
        if(arroba && punto){
            correctEmail = true;
        }else{  
            activateIncorrectInputs(2, 3);
            correctEmail = false;
        }

        //Verificar Contraseña
        if(inputs[3].value.length <= 6){
            activateIncorrectInputs(3,4);
        }

        let attributeName = inputs[0].getAttribute("class");
        let attributeLastName = inputs[1].getAttribute("class");
        if(correctEmail == true && empty == false && attributeName == "" && attributeLastName == ""){
            submitForm();
        }else{
            console.error("No se envio el formulario");
        }
}

buttonSubmit.addEventListener("click", ()=>{
    const inputs = getInputs();
    verifyInputs(inputs);
})

window.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        const inputs = getInputs();
        verifyInputs(inputs);
    }
})