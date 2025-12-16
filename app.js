function openModal(modalId, caption) {
      let modal = document.getElementById(modalId);
      modal.style.display = "flex";
      modal.classList.add("show");
      let message = modal.querySelector(".caption");
      message.innerText = caption;
   }

function closeModal(modalId) {
      let modal = document.getElementById(modalId);
      modal.classList.remove("show");
      modal.style.display = "none";
      modal.querySelector(".caption").innerText = "";
   }

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 