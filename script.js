const chat =
document.getElementById("chat");

const input =
document.getElementById("message");

loadMessages();

function addMessage(
text,
type
){

const div =
document.createElement("div");

div.className =
`msg ${type}`;

div.textContent =
text;

chat.appendChild(div);

saveMessages();

chat.scrollTop =
chat.scrollHeight;

}

function saveMessages(){

localStorage.setItem(
"chat",
chat.innerHTML
);

}

function loadMessages(){

const saved =
localStorage.getItem(
"chat"
);

if(saved)
chat.innerHTML =
saved;

}

function answer(text){

text =
text.toLowerCase();

if(text.includes("hola"))
return "Hola 👋";

if(text.includes("hora"))
return new Date()
.toLocaleTimeString();

if(text.includes("github"))
return "Puedes subir este proyecto usando GitHub Pages 🚀";

if(text.includes("adios"))
return "Hasta luego";

return "Todavía soy pequeño 😅";

}

function typing(){

const div =
document.createElement("div");

div.className =
"msg bot typing";

div.id =
"typing";

div.textContent =
"Escribiendo...";

chat.appendChild(div);

chat.scrollTop =
chat.scrollHeight;

}

function send(){

const text =
input.value.trim();

if(!text)
return;

addMessage(
text,
"user"
);

input.value="";

typing();

setTimeout(()=>{

document
.getElementById(
"typing"
)
.remove();

addMessage(
answer(text),
"bot"
);

},1000);

}

document
.getElementById(
"send"
)
.onclick =
send;

input
.addEventListener(
"keydown",
e=>{

if(
e.key==="Enter"
)
send();

});