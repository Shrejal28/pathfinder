
document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const answers = { arts: 0, commerce: 0, science: 0 };

    // Collect all answers
    const formData = new FormData(this);
    formData.forEach(value => {
        answers[value]++;
    });

    // Determine the recommended stream
    const recommendedStream = Object.keys(answers).reduce((a, b) =>
        answers[a] > answers[b] ? a : b
    );

    // Redirect to the next page with the result in the query string
    window.location.href = `colleges.html?stream=${recommendedStream}`;
});

