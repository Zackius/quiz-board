var firstQuestion = document.getElementById('forms1')
var secondQuestion = document.getElementById('forms2')
var thirdQuestion = document.getElementById('forms3')
var fourthQuestion = document.getElementById('forms4')



function  checkUp() {
    var answer = 0; 
    var calc = forms1.value;
   if(calc == 'A programming language that makes websites interactive' ) {answer ++} 


   var calc = forms2.value;
   if (calc == 'JS') { answer ++ }


   var calc = forms3.value;
   if (calc == 'A JS container for stroring data') { answer ++ }


   var calc = forms4.value;
   if (calc == 'Strings, Boolean, numbers, undefined,  and null ') {answer++    
   }
   document.write(answer)
}
