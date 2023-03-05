function encodeAndDecodeMessages() {
    const buttons = document.querySelectorAll("button")
    const encodeBtn = buttons[0]
    const decodeBtn = buttons[1]
    const textareas = document.querySelectorAll("textarea")
    const encodeArea = textareas[0]
    const decodeArea = textareas[1]
    encodeBtn.addEventListener("click",encode)
    decodeBtn.addEventListener("click",decode)
    function encode(event){
        const text = encodeArea.value
        let encodedMessage = ""
        for (const char of text) {
            encodedMessage+=String.fromCharCode(char.charCodeAt(0) + 1)
        }
        //Clear the encode area
        encodeArea.value=""
        decodeArea.value = encodedMessage
    }
    
    function decode(event){
        const text = decodeArea.value
        let decodedMessage = ""
        for (const char of text) {
            decodedMessage+=String.fromCharCode(char.charCodeAt(0)-1)
        }
        //Clear the decode area
        //decodeArea.value=""
        decodeArea.value = decodedMessage
    }
}