window.alert('welcome Newcomer');
console.log('Running JavaScript now')
let userName = window.prompt('what do you want me to call you')
let saveuserName = window.prompt(' Do you want me to save you Username')
if (saveuserName){
    localStorage.setItem('username', userName)
}
window.alert('welcome Back,' + userName + ' :)')


