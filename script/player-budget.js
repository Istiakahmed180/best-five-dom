let playerNameArray = [];
function display(loop) {
    const playerBody = document.getElementById("display-player");
    playerBody.innerHTML = "";
    for (let i = 0; i < loop.length; i++) {
        const elementName = playerNameArray[i].name;
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}:</th>
        <td>${elementName}</td>
        `;
        playerBody.appendChild(tr)
    }
}

function btnClick(element) {
    const playerNameElement = element.parentNode.parentNode.children[0].innerText;

    const playerObject = {
        name: playerNameElement
    };
    playerNameArray.push(playerObject);
    display(playerNameArray);
}