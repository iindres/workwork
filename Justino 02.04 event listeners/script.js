document.getElementById('checkin-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const employeeNumber = document.getElementById('employeeNumber').value;

    if (validateFirstName(firstName) && validateLastName(lastName) && validateEmployeeNumber(employeeNumber)) {
        const checkinData = {
            firstName,
            lastName,
            employeeNumber,
            checkinTime: new Date().toISOString()
        };
        saveCheckinData(checkinData);
        alert('Check-in successful!');
    }
});

document.getElementById('firstName').addEventListener('input', function () {
    const firstName = this.value;
    const helpText = document.getElementById('firstNameHelp');
    if (validateFirstName(firstName)) {
        helpText.textContent = 'Valid';
        helpText.className = 'success';
    } else {
        helpText.textContent = 'Invalid first name';
        helpText.className = 'error';
    }
});

document.getElementById('lastName').addEventListener('input', function () {
    const lastName = this.value;
    const helpText = document.getElementById('lastNameHelp');
    if (validateLastName(lastName)) {
        helpText.textContent = 'Valid';
        helpText.className = 'success';
    } else {
        helpText.textContent = 'Invalid last name';
        helpText.className = 'error';
    }
});

document.getElementById('employeeNumber').addEventListener('input', function () {
    let employeeNumber = this.value.toUpperCase();
    if (employeeNumber.length === 3 && !employeeNumber.includes('-')) {
        employeeNumber += '-';
    }
    this.value = employeeNumber;
    const helpText = document.getElementById('employeeNumberHelp');
    if (validateEmployeeNumber(employeeNumber)) {
        helpText.textContent = 'Valid';
        helpText.className = 'success';
    } else {
        helpText.textContent = 'Invalid employee number';
        helpText.className = 'error';
    }
});

function validateFirstName(name) {
    const regex = /^[A-Z][a-zA-Z]{2,49}$/;
    return regex.test(name);
}

function validateLastName(name) {
    const regex = /^[A-Z][a-zA-Z]{2,49}$/;
    return regex.test(name);
}

function validateEmployeeNumber(number) {
    const regex = /^[A-Z]{3}-\d{3}$/;
    return regex.test(number);
}

function saveCheckinData(data) {
    let checkinList = JSON.parse(localStorage.getItem('checkinList')) || [];
    checkinList.push(data);
    localStorage.setItem('checkinList', JSON.stringify(checkinList));
}
