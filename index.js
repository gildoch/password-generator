let pass1 = document.getElementById('passWord1');
let pass2 = document.getElementById('passWord2');
let pass3 = document.getElementById('passWord3');
let pass4 = document.getElementById('passWord4');
let tamanho = document.getElementById('tam-pass');

let inputCollection = document.getElementsByTagName('input')




let caracter = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '#', '$', '^', '&', '*', '~'
]

function gerarPass() {
    tam = tamanho.value;
    console.log(tam)
    let passW1 = "";
    let passW2 = "";
    let passW3 = "";
    let passW4 = "";
    for (let i = 0; i < tam; i++) {
        passW1 += caracter[Math.floor(Math.random() * caracter.length)]
        passW2 += caracter[Math.floor(Math.random() * caracter.length)]
        passW3 += caracter[Math.floor(Math.random() * caracter.length)]
        passW4 += caracter[Math.floor(Math.random() * caracter.length)]
    }

    pass1.value = passW1;
    pass2.value = passW2;
    pass3.value = passW3;
    pass4.value = passW4;
}


function copyToClipBoard(input) {
    // Select the text field
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(input.value);

    // Alert the copied text
    alert("Copied the text: " + input.value);
}

for (let i = 0; i < inputCollection.length; i++) {
    if (i > 0) {

        inputCollection[i].addEventListener('click', () => {
            copyToClipBoard(inputCollection[i])
            console.log(inputCollection[i].value);
        })
    }

}



function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}