// document.addEventListener('DOMContentLoaded', function() {
//    var noScrollLinks = document.querySelectorAll('.no-scroll');

//    noScrollLinks.forEach(function(link) {
//        link.addEventListener('click', function(event) {
//            event.preventDefault();
//            event.stopPropagation(); // Stop event propagation
//            openModal();
//        });
//    });
// });

function openModal() {
   var modal = document.getElementById("myModal");
   modal.style.display = "block";
}

function closeModal() {
   var modal = document.getElementById("myModal");
   modal.style.display = "none";
}
