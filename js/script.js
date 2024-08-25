const hamburger = document.querySelector('.pagecrm_hamburger');
const menuItems = document.querySelectorAll('.menu-item');
let modal = document.getElementById("contactModal");
let modal2 = document.getElementById("contactModal2");
let buttons = document.querySelectorAll(".contactButton");
let span = document.querySelector(".close");
let btn2 = document.getElementById("contactButton2");
let span2 = document.querySelector(".close2");

hamburger.addEventListener('click', () => {
  menuItems.forEach(item => {
    item.style.display = item.style.display === 'block' ? 'none' : 'block';
  });
});





buttons.forEach(button => {
    button.addEventListener("click", () => {
        modal.style.display = "block";
    });
});


span.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
});


btn2.addEventListener("click", () => {
    let nameInput = document.querySelector('.modal-content-form[type="text"]');
    let emailInput = document.querySelector('.modal-content-form[type="email"]');
    let agreementCheckbox = document.getElementById('agreementCheckbox');
    let agreementContainer = document.querySelector('.agreement-container');
    let agreementLink = document.querySelector('.agreement-link');


    nameInput.style.border = "";
    emailInput.style.border = "";
    agreementContainer.style.color = "#fff";
    agreementLink.style.color = "#fff";


    let isValid = true;
    if (nameInput.value.trim() === "") {
        nameInput.style.border = "2px solid red";
        isValid = false;
    }
    if (emailInput.value.trim() === "") {
        emailInput.style.border = "2px solid red";
        isValid = false;
    }
    if (!agreementCheckbox.checked) {
        agreementContainer.style.color = "red";
        agreementLink.style.color = "red";
        isValid = false;
    }


    if (isValid) {
        modal.style.display = "none";
        modal2.style.display = "block";
    } else {
        alert("Пожалуйста, заполните все поля и подтвердите согласие с политикой конфиденциальности.");
    }
});


span2.addEventListener("click", () => {
    modal2.style.display = "none";
});
