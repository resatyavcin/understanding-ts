const paragraph = document.querySelector("p");
const paragraph2 = document.getElementById("message-output");

// const userInputElement = <HTMLInputElement>document.getElementById("user-input")
const userInputElement = document.getElementById("user-input")! as HTMLInputElement;
const userInputElement2 = document.getElementById("user-input");

userInputElement.value = "Hi! resat"

if(userInputElement2){
    (userInputElement2 as HTMLInputElement).value = "Hi! resats"
}
