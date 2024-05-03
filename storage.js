const add = () =>{
    const inputKey = document.getElementById('input_key').value;
    const inputValue = document.getElementById('input_value').value;

    if(inputKey && inputValue){
        localStorage.setItem(inputKey, inputValue);
    }

    document.getElementById('input_key').value = "";
    document.getElementById('input_value').value = "";
}