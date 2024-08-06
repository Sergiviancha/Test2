/*--------------------------------------------------------------------*/
//Modal js se replican 3 veces ya que son entidades diferentes

// Obtener elementos del DOM 1
const modal = document.getElementById("myModal");
const btnOpenModal = document.getElementById("openModal");
const btnCloseModal = document.getElementById("closeModal");

// Abrir modal al hacer clic en el botón
btnOpenModal.addEventListener("click", () => {
  modal.style.display = "block";
});

// Cerrar modal al hacer clic en la "X"
btnCloseModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Obtener elementos del DOM 2
const modal2 = document.getElementById("myModal2");
const btnOpenModal2 = document.getElementById("openModal2");
const btnCloseModal2 = document.getElementById("closeModal2");

// Abrir modal al hacer clic en el botón
btnOpenModal2.addEventListener("click", () => {
  modal2.style.display = "block";
});

// Cerrar modal al hacer clic en la "X"
btnCloseModal2.addEventListener("click", () => {
  modal2.style.display = "none";
});

// Obtener elementos del DOM 3
const modal3 = document.getElementById("myModal3");
const btnOpenModal3 = document.getElementById("openModal3");
const btnCloseModal3 = document.getElementById("closeModal3");

// Abrir modal al hacer clic en el botón
btnOpenModal3.addEventListener("click", () => {
  modal3.style.display = "block";
});

// Cerrar modal al hacer clic en la "X"
btnCloseModal3.addEventListener("click", () => {
  modal3.style.display = "none";
});
