const toggleBtn = document.getElementById("toggleBtn");
const profile = document.getElementById("perfil");

toggleBtn.addEventListener("click", () => {
  if (profile.style.display === "none") {
    profile.style.display = "block";
  } else {
    profile.style.display = "none";
  }
});
