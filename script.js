const chat = document.getElementById("chat");

function addMessage(text, type){

    const div = document.createElement("div");

    div.className = `msg ${type}`;

    div.textContent = text;

    chat.appendChild(div);

    chat.scrollTop = chat.scrollHeight;
}

function botReply(text){

    text = text.toLowerCase();

    if(text.includes("hola"))
        return "Hola 👋 ¿Cómo estás?";

    if(text.includes("nombre"))
        return "Soy un Mini ChatBot";

    if(text.includes("hora"))
        return `Son las ${new Date().toLocaleTimeString()}`;

    return "No entendí eso 😅";
}

function sendMessage(){

    const input =
        document.getElementById("message");

    const text =
        input.value.trim();

    if(!text)
        return;

    addMessage(text,"user");

    setTimeout(()=>{

        addMessage(
            botReply(text),
            "bot"
        );

    },500);

    input.value="";
}

document
.getElementById("message")
.addEventListener(
"keypress",
e=>{

if(e.key==="Enter")
sendMessage();

});