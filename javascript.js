document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const ageSlider = document.getElementById("age");
  const ageValueSpan = document.getElementById("ageValue");

  ageSlider.addEventListener("input", function () {
    ageValueSpan.textContent = this.value;
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Name:", this.elements.name.value);
    console.log("Password:", this.elements.password.value);

    this.elements.name.disabled = true;

    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    console.log("Form Data:", formObject);
    this.reset();
  });
});
