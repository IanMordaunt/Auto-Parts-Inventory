const newReview = (id) => {
    $('#modalPartID').text(id)
    $('#newReviewModal').modal('show');
};

const showReview = (id) => {

};

const closeReviewModal = () => {
    $('#newReviewModal').modal('hide');
};

const saveReviewModal = async () => {
    const id = $('#modalPartID').text();
    const content = $('#reviewContent').val();
    const response = await fetch("/addReview", {
        method: "POST",
        body: JSON.stringify({ id, content }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
          console.log("review added")
          $('#newReviewModal').modal('hide');
        // document.location.replace("/parts");
      } else {
        alert(response.statusText);
      }
};
