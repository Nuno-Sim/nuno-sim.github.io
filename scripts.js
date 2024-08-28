function openModal(modalId) {
   var modal = document.getElementById(modalId);
   modal.style.display = "block";
   document.body.style.overflow = "hidden"; 
}

function closeModal(modalId) {
   var modal = document.getElementById(modalId);
   modal.style.display = "none";
   document.body.style.overflow = "auto"; 
}
