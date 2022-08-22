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
    document.getElementById("selected-player").innerText = playerNameArray.length;
}

document.getElementById("calculate").addEventListener("click", function () {
    const budgetInput = document.getElementById("budget-input");
    const budgetValue = budgetInput.value;
    const budgetNumber = parseInt(budgetValue)

    const playerExpence = budgetNumber * playerNameArray.length;

    const playerExpenceElement = document.getElementById("player-expence");

    playerExpenceElement.innerText = playerExpence;
})
document.getElementById("calculate-total").addEventListener("click", function () {
    const managerInput = document.getElementById("manager");
    const managerString = managerInput.value;
    const managerNumber = parseInt(managerString);

    const coachInput = document.getElementById("coach");
    const coachString = coachInput.value;
    const coachNumber = parseInt(coachString);

    const playerExpenceElement = document.getElementById("player-expence").innerText;
    const playerExpenceElementNumber = parseInt(playerExpenceElement)

    const total = playerExpenceElementNumber + managerNumber + coachNumber;

    const totalAmount = document.getElementById("total-amount");
    totalAmount.innerText = total;
})