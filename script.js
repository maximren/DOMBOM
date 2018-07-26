function validate_form(age, username, date) {
    // console.log(validate_name(username));
    console.log(validate_age(age));
    // console.log(validate_date(date));
    if (validate_name(username) == true && validate_age(age) == true && validate_date(date) == true) {
        return true;
    } else {
        return false;
    }
}

function validate_age(age) {
    if (age.value.indexOf(" ") !== -1) {
        return false;
    }
    const characters = age.value.split('');
    let temporary = true;
    for (let i = 0; i <= characters.length - 1; i++) {
        if (characters[i] >= 0) {
            temporary = temporary && true;
        } else {
            temporary = false;
        }
    }
    return temporary;
}

function validate_name(username) {
    if (username.value.startsWith('user_')) {
        return true;
    } else {
        return false;
    }
}

function validate_date(date) {
    var currentDate = new Date();
    var dd = currentDate.getDate();
    var mm = currentDate.getMonth() + 1;
    var yyyy = currentDate.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    currentDate = dd + '/' + mm + '/' + yyyy;
    if (date.value == currentDate) {
        return true;
    } else {
        alert('your data is invalid');
        return false;
    }
}

function create_form() {
    const form = document.createElement("form");
    form.setAttribute('name', "login");
    form.setAttribute('action', "https://www.google.com.ua/");
    form.addEventListener('submit', function (e) {
        // e.preventDefault()
        const result = validate_form(age, username, date)
        if (result === true) {
            return true;
        } else if (result === false) {
            e.preventDefault();
            return false;
        }
    })

    const age = document.createElement("input");
    age.setAttribute('type', "text");
    age.setAttribute('name', "age");
    age.setAttribute('placeholder', "enter your age");
    age.style.border = '1px solid black';

    const username = document.createElement("input");
    username.setAttribute('type', "text");
    username.setAttribute('name', "username");
    username.setAttribute('placeholder', "enter your username");
    username.style.border = '1px solid black';

    const date = document.createElement("input");
    date.setAttribute('type', "text");
    date.setAttribute('name', "date");
    date.setAttribute('placeholder', "enter current date");
    date.style.border = '1px solid black';

    const submit = document.createElement("input");
    submit.setAttribute('type', "submit");
    submit.setAttribute('value', "Validate Me");

    form.appendChild(age);
    form.appendChild(username);
    form.appendChild(date);
    form.appendChild(submit);

    document.body.appendChild(form);
    console.log(form);
}

create_form();