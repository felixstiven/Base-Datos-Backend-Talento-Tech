const selectBtn = document.querySelector(".select-btn"),
    item = document.querySelectorAll(".items");

    selectBtn.addEventListener("click", () =>{
        selectBtn.classList.toggle("open");
    });

    item.forEach(items =>{
        items.addEventListener("click", () =>{
            items.classList.toggle("select");

            let select = document.querySelectorAll(".select"),
                btnText = document.querySelector(".btn-text");
                
                if(select && select.length > 0){
                    btnText.textContent = `${select.length} Seleccionado`
                }else{
                    btnText.textContent = "selecciona materias"
                    
                }
                
        });
    })


    // const formAgregar = document.querySelector("#form")
    // const formAsistencia = document.querySelector("#form-2")


    // form.addEventListener("submit", function(event){
    //     event.preventDefault();
    //     let transactionFormData = new FormData(formAgregar);
    //     let transactionObj = convertFormDataToTransationObj(transactionFormData);
    //     saveTransactionObj(transactionObj);
    //     insertRowInTransactionTable(transactionObj);
    //     form.reset()
    
    // })
    
    // document.addEventListener("DOMContentLoaded", function(event){
    //     let transactionObjArr = JSON.parse(localStorage.getItem("transactionData"));
    //     transactionObjArr.forEach(
    //         function (arrayElement){
    //             insertRowInTransactionTable(arrayElement)
    //         }
    //     )
    // })
    
    // function getNewTransactionId(){
    //     return "1"
    
    // }
    
    // function convertFormDataToTransationObj(transactionFormData){
    //     let transactionIdEstudiante = transactionFormData.get("transactionId");
    //     let transactionNameEstudiante = transactionFormData.get("transactionEstudiante");
    //     let transactionOpcionLenguaje = transactionFormData.get("transactionOpcionLenguaje");
    //     let transactionId = getNewTransactionId;
    //     return {
    //         "transactionIdEstudiante": transactionIdEstudiante,
    //         "transactionNameEstudiante": transactionNameEstudiante,
    //         "transactionAmount": transactionOpcionLenguaje,
    //         "transactionId" : transactionId

    //     }
    // }
    
    // function insertRowInTransactionTable(transactionObj){
    //     let transactionTableRef = document.getElementById("transactionTable");
    
    //     let newTransactionRowRef = transactionTableRef.insertRow(-1);
    
    //     let newTypeCellRef = newTransactionRowRef.insertCell(0);
    //     newTypeCellRef.textContent = transactionObj["IdEstudiante"];
    
    //     newTypeCellRef = newTransactionRowRef.insertCell (1);
    //     newTypeCellRef .textContent = transactionObj["nombreEstudiante"];
    
    //     newTypeCellRef = newTransactionRowRef.insertCell (2);
    //     newTypeCellRef .textContent = transactionObj["transactionAmount"];
    
    //     newTypeCellRef = newTransactionRowRef.insertCell (3);
    //     newTypeCellRef .textContent = transactionObj["transactionCategory"];

    //     newTypeCellRef = newTransactionRowRef.insertCell (4);
    //     newTypeCellRef .textContent = transactionObj["transactionCategory"];

    
    //     let newDeletCell = newTransactionRowRef.insertCell(5);
    //     let deleteButton = document.createElement("button");
    //     deleteButton.textContent = "eliminar";
    //     newDeletCell.appendChild(deleteButton)
    
    //     deleteButton.addEventListener("click", (event) =>{
    //         event.target.parentNode.parentNode.remove()
    //     })
    // }    
    
    // function saveTransactionObj(transactionObj){
    //     let myTransactionArray = JSON.parse(localStorage.getItem("transactionData")) || [];
    //     myTransactionArray.push(transactionObj);
    //     // convierto mi array de transaccion a json
    //     let transactionArrayJSON = JSON.stringify(myTransactionArray);
    //     // guardo mi array de transaccion en formato JSON en el local storage
    //     localStorage.setItem("transactionData", transactionArrayJSON)
    // }
    