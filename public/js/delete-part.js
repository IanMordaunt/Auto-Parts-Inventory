const deleteButtonHandler = function (event) {
    let cardId = document.getElementById('card-id').innerHTML
    cardId = extractID(cardId);

    fetch("/deletePart/" + cardId, {
        method: "DELETE"
    })
        .then(function () {
            document.location.replace("/parts");
        })
        .catch(err => console.log(err))
}

document.getElementById('deleteBtn').addEventListener('click', deleteButtonHandler);


const extractID = (el) => {
    return parseInt(String(el).match(/\d+/gi).join(''))
};