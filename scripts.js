function openModal(modalId) {
   document.getElementById(modalId).style.display = "block";
   document.body.style.overflow = "hidden"; //prevents scrolling

}

function closeModal(modalId) {
   document.getElementById(modalId).style.display = "none";
   document.body.style.overflow = "auto"; //re-enables scrolling

}