document.getElementById("submit").addEventListener("click", checkData);

//   alert(`Check Your Details
//   First Name  : ${firstName.value}
//   Last Name  : ${lastName.value}
//   Age             : ${age.value}
//   Address
//   Street/Area : ${area.value}
//   Land Mark  : ${landMark.value}
//   City             : ${city.value}
//   State           : ${state.value}
//   Phone Number : ${phone.value}
//   ZIP Code     : ${zipCode.value}`);

function checkData() {
  let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let age = document.getElementById("age");
  let area = document.getElementById("area");
  let landMark = document.getElementById("land-mark");
  let city = document.getElementById("city");
  let state = document.getElementById("state");
  let phone = document.getElementById("phone");
  let zipCode = document.getElementById("zip-code");

  let firstNameValue = firstName.value.trim();
  let lastNameValue = lastName.value.trim();
  let ageValue = age.value.trim();
  let areaValue = area.value.trim();
  let landMarkValue = landMark.value.trim();
  let cityValue = city.value.trim();
  let stateValue = state.value.trim();
  let phoneValue = phone.value.trim();
  let zipCodeValue = zipCode.value.trim();

  if (firstNameValue == "") {
    setError(firstName, "first name can't be blank");
  } else {
    setSuccess(firstName);
  }

  if (lastNameValue == "") {
    setError(lastName, "last name can't be blank");
  } else {
    setSuccess(lastName);
  }

  if (ageValue == "") {
    setError(age, "age name can't be blank");
  } else if (!ageValue.match(/^\d+/)) {
    setError(age, "please fill only numericals");
  } else {
    setSuccess(age);
  }

  if (areaValue == "") {
    setError(area, "stree/area name can't be blank");
  } else {
    setSuccess(area);
  }

  if (landMarkValue == "") {
    setError(landMark, "landmark name can't be blank");
  } else {
    setSuccess(landMark);
  }

  if (cityValue == "") {
    setError(city, "city name can't be blank");
  } else {
    setSuccess(city);
  }

  if (stateValue == "") {
    setError(state, "state can't be blank");
  } else {
    setSuccess(state);
  }

  if (phoneValue == "") {
    setError(phone, "phone can't be blank");
  } else if (!phoneValue.match(/^\d+/)) {
    setError(phone, "please fill only numericals");
  } else {
    setSuccess(phone);
  }
}

function setError(u, msg) {
  let parentBox = u.parentElement;
  parentBox.className = "input-field error";
  let span = parentBox.querySelector("span");
  let fa = parentBox.querySelector(".fa");
  span.innerText = msg;
  fa.className = "fa fa-exclamation-circle";
}

function setSuccess(u) {
  let parentBox = u.parentElement;
  parentBox.className = "input-field success";
  let fa = parentBox.querySelector(".fa");
  fa.className = "fa fa-check-circle";
}
