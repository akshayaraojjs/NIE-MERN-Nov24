// Function to create a student card and append it to the container
function createStudentCard(name, marks, email, dateOfBirth) {
    const studentCard = `
        <div class="card shadow-sm mb-3">
            <div class="card-header bg-primary text-white">
                <h5 class="card-title mb-0">${name}</h5>
            </div>
            <div class="card-body">
                <p class="card-text"><strong>Marks:</strong> ${marks}</p>
                <p class="card-text"><strong>Email:</strong> ${email}</p>
                <p class="card-text"><strong>Date of Birth:</strong> ${new Date(dateOfBirth).toLocaleDateString()}</p>
            </div>
        </div>
    `;

    // Append the card to the container
    document.getElementById('studentCardContainer').innerHTML += studentCard;
}

// Handle form submission
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // Get form data
    const name = document.getElementById('name').value;
    const marks = document.getElementById('marks').value;
    const email = document.getElementById('email_id').value;
    const dateOfBirth = document.getElementById('date_of_birth').value;

    // Call the function to create and display the student card
    createStudentCard(name, marks, email, dateOfBirth);

    // Clear the form after submission
    document.getElementById('studentForm').reset();
});