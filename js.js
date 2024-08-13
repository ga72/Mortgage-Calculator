let repay = document.getElementById("repay");
let type = document.getElementsByClassName("type");
let required = document.getElementById("required");


function calculateMortgage(){
    const mortgageAmount = document.getElementById('mortgageAmount').value;
    const mortgageTerm = document.getElementById('mortgageTerm').value;
    const interestRate = document.getElementById('interestRate').value;
    let radio = document.querySelector("input[type='radio']");


if( mortgageAmount =='' || mortgageTerm ==''|| interestRate == "" || radio.checked == false
     || isNaN(mortgageAmount) ||isNaN (mortgageTerm )|| isNaN(interestRate)){

    alert("This field is required");
    
    // if(mortgageAmount != ''  || mortgageTerm !=''|| interestRate !=''){
    //     required.classList.replace("d-block" , "d-none")

    // }
    // else{
    //     required.classList.replace("d-none" , "d-block")
    // }
}

// else if( isNaN(mortgageAmount) ||isNaN (mortgageTerm )|| isNaN(interestRate) ){
// alert("enter a valid number")
// }

   else{
    const monthlyInterestRate = (interestRate / 100) / 12;
    const numberOfPayments = mortgageTerm * 12;
    const monthlyPayment = (mortgageAmount * monthlyInterestRate) / 
                           (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const totalRepayment = monthlyPayment * numberOfPayments;
    const monthlyPaymentFormatted = monthlyPayment.toFixed(2);
    const totalRepaymentFormatted = totalRepayment.toFixed(2);

    const result = document.querySelector(".result");
    result.innerHTML=`
   <h4>Your results</h4>
   <p class='tittle'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
   <div class='dataStyle'>
   <p>Your monthly repayments</p>
   <h2>£${monthlyPaymentFormatted}</h2>
   <hr>
   <p>Total you'll repay over the term</p>
   <h4>£${totalRepaymentFormatted}</h4>
   </div>
    `
   }
//    // Add an event listener to each radio button
// for (let i = 0; i < type.length; i++) {
//     let radio = type[i].querySelector("input[type='radio']");
    
//     radio.addEventListener("change", function() {
//         // First, remove the 'highlighted' class from all 'type' elements
//         for (let j = 0; j < type.length; j++) {
//             type[j].classList.remove("highlighted");
//         }
        
//         // Then, add the 'highlighted' class to the parent 'type' of the selected radio
//         if (radio.checked) {
//             radio.closest('.type').classList.add("highlighted");
//         }
//     });
// }

    
    
}

calculate.addEventListener("click",calculateMortgage )


