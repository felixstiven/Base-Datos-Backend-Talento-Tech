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