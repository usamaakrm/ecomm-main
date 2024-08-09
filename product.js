document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');
    const reviewForm = document.getElementById('reviewForm');
    const reviewList = document.getElementById('reviewList');

    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', function () {
            selectedRating = this.getAttribute('data-value');
            ratingInput.value = selectedRating;
            stars.forEach(s => s.classList.remove('selected'));
            for (let i = 0; i < selectedRating; i++) {
                stars[i].classList.add('selected');
            }
    });

        star.addEventListener('mouseover', function () {
            stars.forEach(s => s.classList.remove('hover'));
            for (let i = 0; i < this.getAttribute('data-value'); i++) {
                stars[i].classList.add('hover');
            }
    });

        star.addEventListener('mouseout', function () {
            stars.forEach(s => s.classList.remove('hover'));
            });
});

    reviewForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value.charAt(0) + '.';
        const rating = ratingInput.value;
        const comment = document.getElementById('comment').value;

        if (firstName && lastName && rating && comment) {
            const review = document.createElement('div');
            review.innerHTML = `<strong>${firstName} ${lastName}</strong> (${rating} stars)<br>${comment}<hr>`;
            reviewList.appendChild(review);

            reviewForm.reset();
            stars.forEach(s => s.classList.remove('selected'));
        }
  })});