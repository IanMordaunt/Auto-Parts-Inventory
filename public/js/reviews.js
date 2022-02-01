const newReview = (id) => {
  $('#modalPartID').text(id)
  $('#newReviewModal').modal('show');
};

const showReview = async (id) => {
  const data = await fetch(`/numReviews/${id}`);
  const result = await data.json();
  if (result.length === 0) {
    $('#noReviewsModal').modal('show');
  }
  else {  
    const response = await fetch(`/reviews/${id}`);
    const r = await response.json();
    let output = "";
    for (let i = 0; i < r.length; i++) {
      output += `<div><h5>${r[i].user.user_name}</h5><h5>${r[i].review_text}</h5><br>`;
    }
    $('#reviewBody').html(output)
    $('#reviewsModal').modal('show');
  }
};


const closeReviewModal = () => {
  $('#newReviewModal').modal('hide');
};

const saveReviewModal = async () => {
  const parts_id = $('#modalPartID').text();
 
  const review_text = $('#reviewContent').val();
  const response = await fetch("/addReview", {
    method: "POST",
    body: JSON.stringify({ parts_id, review_text }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    $('#newReviewModal').modal('hide');
    showReview(parts_id);
  } else {
    alert(response.statusText);
  }
};

// $('.saveReview').on('click', saveReviewModal);
document.getElementById('saveReview').onclick = saveReviewModal;

const noReviewsModalHide = () => {
  $('#noReviewsModal').modal('hide');
};

const reviewsModalHide = () => {
  $('#reviewsModal').modal('hide');
}
