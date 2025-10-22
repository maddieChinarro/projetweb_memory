import { visible, hidden, testRegex } from "./formShortcuts.js";

export function passwordHelper() {
    let strSymbol, strNbr, strLgth;
    const regexSymbol = /[#$%&()@=¿_€?*+-]/;
    const regexNbr = /[\d]/;
    const regexLength = /.{10,}/;
    const inputPassword = document.getElementById("userPassword");

    inputPassword.addEventListener("input", () => {
        if (testRegex(regexSymbol, inputPassword.value)) {
            strSymbol = 1;
        } else {
            strSymbol = 0;
        }
        if (testRegex(regexNbr, inputPassword.value)) {
            strNbr = 1;
        } else {
            strNbr = 0;
        }
        if (testRegex(regexLength, inputPassword.value)) {
            strLgth = 1;
        } else {
            strLgth = 0;
        }

        let passStrength = strSymbol + strNbr + strLgth ;
        switch (passStrength) {
            case 1: visible("weak"); break;
            case 2: visible("weak"); visible("mid"); break;
            case 3: visible("weak"); visible("mid"); visible("strong"); break;
            default: hidden("weak"); hidden("mid"); hidden("strong"); break;
        }
    });
}