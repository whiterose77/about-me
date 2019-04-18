let existingUserName = localStorage.getItem ('username');
if (existingUserName){
    window.alert('Now entering, Whiterose Hub ');
    window.alert('Welcome Back ' + existingUserName + '😊')


} else {
    window.alert('Welcome Newuser to my website hope you enjoy your stay here at the whiterose hub');
    let userName = window.prompt('What do you want me to call you newsuser');
    if (userName){
        localStorage.setItem('username', userName);
    }
    window.alert('welcome to my website,' + userName + ' 😊');
}

$( '#clicks-me').click(function(){
    console.log('it works');
    window.alert("You fool you just clicked me  now you have a virus in 10 seconds you device will be infected");
    setTimeout(function(){ window.alert('Jk just messing around  with you have a nice day:D') }, 10000 );
})

