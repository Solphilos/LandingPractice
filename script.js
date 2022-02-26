

function signUp() {
    let answer = prompt('Please enter email address')
    if(answer) {
        let name = prompt('Please enter name')
        if(name != null) {
            alert("Thanks for subscribing" + " " + name + "!")
        }
       
    }
}