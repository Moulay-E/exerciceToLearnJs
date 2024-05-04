// import { ShowCodeAndHideHimself } from "../../basicScript.js";
import { fetchData } from "../fetch/fetchData.js";
import { ShowCodeAndHideHimself, HideAndShowBtn } from "./generateBtnDynamically.js";
export async function  generateHtmlDynamically(arrayName){
    const dataHtmlUrl = "/data/dataToGenerateHtml.json";
try {
    const data = await fetchData(dataHtmlUrl);
    if(data && data[arrayName]){
        let htmlId = document.getElementById("generateContentJs");
            let result= "";
                data[arrayName].forEach(item =>{
                    // console.log(item);
                    result += 
                        `<div class="example__container flexCenter flexColumn">
                            <div class="example__container__title borderRadius">
                                <h2>${item.title}</h2>
                            </div>
                            <div id="bubleSort">
                                <form>
                                    <input type="text" id="${item.inputValueId}" />
                                    <button type="button" id="${item.inputValueId}Btn">
                                        afficher data
                                    </button>
                                    <p>result: <span id="${item.outputResultId}"></span></p>
                                </form>
                            </div>
                            <div  class="example__container__code hide borderRadius codeContainerJs">
                                <div class="example__container__code__header">
                                    <h3 class="example__container__code__h3">Code</h3>
                                    <button class="example__container__code__btn borderRadius" >hide</button>
                                </div>
                                <pre>
                                <code id="${item.idToMarkCodeArea}"></code>
                                </pre>
                            </div>
                            <div  class="showMore flexDisplay borderRadius"  >
                                <h3>afficher code</h3>
                            </div>
                        </div> `
                ;
                
            })
            htmlId.innerHTML = result;

             // Attaching event listeners after the HTML is added to the document
            data[arrayName].forEach(item => {
                const button = document.getElementById(item.inputValueId+'Btn');
                if (button) {
                    button.addEventListener('click', window[item.onclickFonctionToCall]);
                }
                else{
                    console.log("Btn id for function or function in the json is not there.");
                }
            });
            ShowCodeAndHideHimself();
            HideAndShowBtn()
    }
    else{
        console.log("Array does not exist in the JSON.");
    }
    
 } catch (error) {
    console.log(`Error loading the data from the json to generate html: ${error}`)
 }
}  