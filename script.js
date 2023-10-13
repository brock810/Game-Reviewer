const reviewList = document.getElementById("review-list");
const newReviewInput = document.getElementById("new-review");
const submitReviewButton = document.getElementById("submit-review");
const reviewerNameInput = document.getElementById("reviewer-name");

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

submitReviewButton.addEventListener("click", addReview);

newReviewInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addReview();
    }
});
