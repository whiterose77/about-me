let existingUserName = localStorage.getItem ('username');
if (existingUserName){
    window.alert('now entering whiterose hub ');
    window.alert('welcome back ' + existingUserName + '😊')


} else {
    window.alert('Welcome Newuser to my website');
    let userName = window.prompt('What do you want me to call you');
    if (userName){
        localStorage.setItem('username', userName);
    }
    window.alert('welcome to my website,' + userName + ' :)');
}


