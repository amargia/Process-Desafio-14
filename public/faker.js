function renderProducts() {
    fetch('http://localhost:8080/faker-list')
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

renderProducts();