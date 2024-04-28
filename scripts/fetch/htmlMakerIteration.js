function htmlMakerIteration(arrayName){
    fetch("/data/dataToGenerateHtml.json")
    .then(response => response.json())
    .then(data => {
        if(data[arrayName] ){
            let htmlId = document.getElementById("generateContent");
            let result;
            data[arrayName].forEach(item =>{
                console.log(item);
                result = 
                    `<div class="example__container flexCenter flexColumn">
                        <div class="example__container__title borderRadius">
                            <h2>Extracting string part</h2>
                        </div>
                        <div id="bubleSort">
                            <form>
                                <input type="text" id= " ${item.inputValueId} " />
                                <button type="button" onclick="${new Function(item.onclickFonctionToCall)} ">
                                    afficher data
                                </button>
                                <p>result: <span id=" ${item.outputResultId} "></span></p>
                            </form>
                        </div>
                        <div  class="example__container__code hide borderRadius codeContainerJs">
                            <div class="example__container__code__header">
                                <h3 class="example__container__code__h3">Code</h3>
                                <button class="example__container__code__btn borderRadius" >hide</button>
                            </div>
                            <pre>
                            <code id=" ${item.idToMarkCodeArea} "></code>
                            </pre>
                        </div>
                        <div  class="showMore flexDisplay borderRadius"  >
                            <h3>afficher code</h3>
                        </div>
                    </div> `
              ;
              htmlId.innerHTML += result;
               

            })
        }
        else {
            console.log("Le tableau demandé n'existe pas dans le JSON.");
          }
    })
    .catch(error => console.log("Error loading the code snippet"))
}