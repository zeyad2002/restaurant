// إظهار النموذج عند الضغط على الزر
const openFormBtn = document.getElementById("openFormBtn");
const closeFormBtn = document.getElementById("closeFormBtn");
const jobForm = document.getElementById("jobForm");

openFormBtn.addEventListener("click", () => {
  jobForm.classList.remove("hidden");
});

closeFormBtn.addEventListener("click", () => {
  jobForm.classList.add("hidden");
});

const toggleButton = document.getElementById('toggle-nav');
const navMenu = document.getElementById('nav-menu');


toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('show'); // تبديل كلاس "show" لإظهار/إخفاء القائمة
});

