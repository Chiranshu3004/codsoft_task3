let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');

let string = "";
for(items of buttons){
    items.addEventListener('click', (e) =>{
        if(e.target.innerHTML == " = "){
            console.log(eval(string));
            input.value = eval(string);
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
}