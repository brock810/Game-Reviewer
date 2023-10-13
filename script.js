const reviewList = document.getElementById("review-list");
const newReviewInput = document.getElementById("new-review");
const submitReviewButton = document.getElementById("submit-review");
const reviewerNameInput = document.getElementById("reviewer-name");

// Function to add a new review
function addReview() {
    const reviewText = newReviewInput.value;
    const reviewerName = reviewerNameInput.value;
    if (reviewText && reviewerName) {
        const reviewItem = document.createElement("li");
        reviewItem.innerHTML = `<strong>${reviewerName}:</strong> ${reviewText}`;
        reviewList.appendChild(reviewItem);
        newReviewInput.value = "";
        reviewerNameInput.value = "";
    }
}

// Add event listener for submitting a review
submitReviewButton.addEventListener("click", addReview);

// Alternatively, you can also submit a review by pressing Enter in the textarea
newReviewInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addReview();
    }
});
