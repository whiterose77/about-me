let existingUserName = localStorage.getItem ('username');
if (existingUserName){
    window.alert('welcome,to whiterose hub ,' + existingUserName + ' :D');



} else {
    window.alert('welcome Newcomer');
    let userName = window.prompt('what do you want me to call you');
    if (userName){
        localStorage.setItem('username', userName);
    }
    window.alert('welcome to my website,' + userName + ' :)');
}


