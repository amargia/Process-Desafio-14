const socket = io.connect();

function renderProducts() {
    fetch('http://localhost:8080/lista-productos')
    .then(response => response.json())
    .then((data) => {
    const html = data.map((el, index) => {   
        return(
            `<tr>
            <td>${el.title}</td>
            <td>${el.price}</td>
            <td><img src="${el.thumbnail}"></td>                  
            </tr>`
        )
    }).join(" ");
    document.getElementById('tbodyList').innerHTML = html;
    })
}


function renderMessages(data) {
    const html = data.map((el, index) => {
        return(`<div>
            <p class="text colorMail"><strong>${el.email}</strong></p>
            <p class="text colorFecha">[${el.fecha}]:</p>
            <p class="text colorMensaje"><i>${el.mensaje}</i></p> </div>`)
    }).join(" ");
    document.getElementById('mensajes').innerHTML = html;
}


function addMessage() {
    const mensaje = {
        email: document.getElementById('mail').value,
        fecha: `${(new Date).toLocaleDateString()} - ${(new Date).toLocaleTimeString()}`,
        mensaje: document.getElementById('mensaje').value
    };  
    socket.emit('newMessage', mensaje);
    return false;
}

socket.on('productos', function() { renderProducts(); });
socket.on('messages', function(data) { renderMessages(data); });