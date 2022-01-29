const deleteButtonHandler = function(event) {
    console.log("clicked", event)
    let cardId = document.getElementById('card-id').innerHTML
    cardId = extractID(cardId);
    console.log(cardId)

    fetch("/deletePart/" + cardId, {
        method: "DELETE"
    })
    .then(function() {
        document.location.replace("/parts");
    })
    .catch(err => console.log(err))
}

document.getElementById('deleteBtn').addEventListener('click', deleteButtonHandler);


const extractID = (el) => {
    return parseInt(String(el).match(/\d+/gi).join(''))
};