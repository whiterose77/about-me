window.alert('Welcome to the math demo.');
window.alert ('so tell me a number between 1 and 10');
    let x = parseInt(window.prompt ('so tell me a number between 1 and 10' ));
    let savenumber = window.prompt ('are you sure you like that number?' );
if (x == 10){
    window.alert('The number you have picked is equal to 10');
} 
if (x > 10){
    window.alert('The number you have picked is greater than 10');
}
if (x < 10){
    window.alert('The number you have picked is less than 10');
}
if (!x){
    window.alert('Sorry but you need to enter a number');
}