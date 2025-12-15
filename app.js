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