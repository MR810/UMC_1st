var submitButton = document.querySelector('input[type="submit"]');
var ageInput = document.getElementById('age');

ageInput.addEventListener('input', function() {
    var age = ageInput.value.trim();

    if (!age) {
        displayMessage('age', '나이를 입력해주세요!', 'error');
        submitButton.disabled = true;
    } else {
        if (isNaN(age)) {
            displayMessage('age', '나이는 숫자 형식이어야 합니다!', 'error');
            submitButton.disabled = true;
        } else if (typeof age == 'string') {
            displayMessage('age', '나이는 숫자 형식이어야 합니다!', 'error');
            submitButton.disabled = true;
        } else if (age < 0) {
            displayMessage('age', '나이는 음수가 될 수 없습니다!', 'error');
            submitButton.disabled = true;
        } else if (!Number.isInteger(parseFloat(age))) {
            displayMessage('age', '나이는 소수가 될 수 없습니다!', 'error');
            submitButton.disabled = true;
        } else if (age < 19) {
            displayMessage('age', '미성년자는 가입할 수 없습니다!', 'error');
            submitButton.disabled = true;
        } else {
            displayMessage('age', '올바른 나이 형식입니다.', 'success');
            submitButton.disabled = false;
        }
    }
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // Check if each input field is empty and display error messages accordingly
    if (!name) {
        displayMessage('name', '필수 입력 항목입니다!', 'error');
    } else {
        displayMessage('name', '멋진 이름이네요!', 'success');
    }
    
    if (!email) {
        displayMessage('email', '올바른 이메일 형식이 아닙니다!', 'error');
    } else {
        displayMessage('email', '올바른 이메일 형식입니다.', 'success');
    }

    if (!password) {
        displayMessage('password', '비밀번호는 4자리 이상이어야 합니다.', 'error');
        submitButton.disabled = true;
    } else if (typeof password !== 'string') {
        displayMessage('password', '비밀번호는 문자열이어야 합니다.', 'error');
        submitButton.disabled = true;
    } else if (password.length < 4) {
        displayMessage('password', '비밀번호는 4자리 이상이어야 합니다.', 'error');
        submitButton.disabled = true;
    } else if (password.length > 12) {
        displayMessage('password', '비밀번호는 최대 12자리까지 가능합니다.', 'error');
        submitButton.disabled = true;
    } else if (!containsUpperCase(password) || !containsLowerCase(password) || !containsNumber(password) || !containsSpecialChar(password)) {
        displayMessage('password', '영문 대소문자, 숫자, 특수문자를 모두 포함해야 합니다.', 'error');
        submitButton.disabled = true;
    } else {
        displayMessage('password', '올바른 비밀번호입니다.', 'success');
        submitButton.disabled = false;
    }
    
    if (!confirmPassword) {
        displayMessage('confirm-password', '비밀번호가 일치하지 않습니다.', 'error');
    } else {
        displayMessage('confirm-password', '비밀번호가 일치합니다.', 'success');
    }

    // 이메일 형식 검사
    if (!validateEmail(email)) {
        displayMessage('email', '올바른 이메일 형식이 아닙니다.', 'error');
        submitButton.disabled = true;
    }
    if (password !== confirmPassword) {
        displayMessage('confirm-password', '비밀번호가 일치하지 않습니다.', 'error');
        submitButton.disabled = false;
    }

    // 여기에 회원가입 처리를 위한 로직을 추가할 수 있습니다.
    console.log("이름:", name);
    console.log("이메일:", email);
    console.log("비밀번호:", password);

    alert("회원가입이 완료되었습니다.");
    // 이후에 다른 동작을 수행하도록 설정 가능
});

// 이메일 형식 검사 함수
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// 함수를 사용하여 메시지 표시
function displayMessage(fieldId, message, type) {
    var errorMessageElement = document.getElementById(fieldId + '-error');
    if (type === 'error') {
        errorMessageElement.textContent = message;
        errorMessageElement.style.color = 'red';
    } else if (type === 'success') {
        errorMessageElement.textContent = message;
        errorMessageElement.style.color = 'green';
    }
}

// 비밀번호에 대문자 포함 여부 확인
function containsUpperCase(str) {
    return /[A-Z]/.test(str);
}

// 비밀번호에 소문자 포함 여부 확인
function containsLowerCase(str) {
    return /[a-z]/.test(str);
}

// 비밀번호에 숫자 포함 여부 확인
function containsNumber(str) {
    return /[0-9]/.test(str);
}

// 비밀번호에 특수문자 포함 여부 확인
function containsSpecialChar(str) {
    return /[!@#$%^&*(),.?":{}|<>]/.test(str);
}
