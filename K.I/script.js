function encrypt(text, shift) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            // Upper case letters
            result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Lower case letters
            result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
            // Non-alphabetic characters
            result += text.charAt(i);
        }
    }

    return result;
}

function decrypt(text, shift) {
    return encrypt(text, 26 - shift);
}

const inputText = document.getElementById("inputText");
const shiftInput = document.getElementById("shift");
const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const outputText = document.getElementById("outputText");

encryptBtn.addEventListener("click", function() {
    const text = inputText.value;
    const shift = parseInt(shiftInput.value);

    const encryptedText = encrypt(text, shift);
    outputText.value = encryptedText;
});

decryptBtn.addEventListener("click", function() {
    const text = inputText.value;
    const shift = parseInt(shiftInput.value);

    const decryptedText = decrypt(text, shift);
    outputText.value = decryptedText;
});