function openForm() {
  document.body.classList.add("body-fixed");
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.body.classList.remove("body-fixed");
  document.getElementById("myForm").style.display = "none";
}

const closeIcon = document.querySelector('.close-icon');
closeIcon.addEventListener('click', closeForm);