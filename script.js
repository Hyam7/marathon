document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let table = document.getElementById('participantTable').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    let name = document.getElementById('name').value;
    let dob = document.getElementById('dob').value;
    let gender = document.getElementById('gender').value;
    let city = document.getElementById('city').value;
    let phone = document.getElementById('phone').value;
    let category = document.getElementById('category').value;
    let medicalHistory = document.getElementById('medicalHistory').value;
    let shirtSize = document.getElementById('shirtSize').value;
    let agreement = document.getElementById('agreement').checked ? "Ya" : "Tidak";

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${dob}</td>
        <td>${gender}</td>
        <td>${city}</td>
        <td>${phone}</td>
        <td>${category}</td>
        <td>${medicalHistory}</td>
        <td>${shirtSize}</td>
        <td>${agreement}</td>
    `;

    this.reset();
});
