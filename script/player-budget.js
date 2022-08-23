let playerNameArray = [];

function display(loop) {
    const playerBody = document.getElementById("display-player");
    playerBody.innerHTML = "";
    for (let i = 0; i < loop.length; i++) {
        const elementName = playerNameArray[i].name;
        const tr = document.createElement("tr");
        tr.classList.add("added");
        tr.innerHTML = `
        <th>${i + 1}:</th>
        <td>${elementName}</td>
        `;
        playerBody.appendChild(tr);

        const dd = document.querySelectorAll(".added")
        if (dd.length >= 5) {
            alert("You Must Be Add Five Players")
            return;
        }
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

    element.disabled = true;

}

function inputValue(inputId) {
    const Input = document.getElementById(inputId);
    const Value = Input.value;
    const Number = parseInt(Value)

    return Number;
}


document.getElementById("calculate").addEventListener("click", function () {
    const budgetNumber = inputValue("budget-input")

    const playerExpence = budgetNumber * playerNameArray.length;

    const playerExpenceElement = document.getElementById("player-expence");

    playerExpenceElement.innerText = playerExpence;
})


document.getElementById("calculate-total").addEventListener("click", function () {
    const managerNumber = inputValue("budget-input");
    const coachNumber = inputValue("coach")

    const playerExpenceElement = document.getElementById("player-expence").innerText;
    const playerExpenceElementNumber = parseInt(playerExpenceElement)

    const total = playerExpenceElementNumber + managerNumber + coachNumber;

    const totalAmount = document.getElementById("total-amount");
    totalAmount.innerText = total;
})
