const newReview = (id) => {
  $('#modalPartID').text(id)
  $('#newReviewModal').modal('show');
};

const showReview = async (id) => {
  const data = await fetch(`/numReviews/${id}`);
  const result = await data.json();
  console.log(result)
  if (result.length === 0) {
    $('#noReviewsModal').modal('show');
  }
  else {  
    document.location.replace(`/reviewPage/${id}`);
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
    document.location.replace(`/reviewPage/${parts_id}`);
  } else {
    alert(response.statusText);
  }
};

// $('.saveReview').on('click', saveReviewModal);
document.getElementById('saveReview').onclick = saveReviewModal;

const noReviewsModalHide = () => {
  $('#noReviewsModal').modal('hide');
};
