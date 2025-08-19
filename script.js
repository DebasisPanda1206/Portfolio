function AdressRecommendation(event) {
  event.preventDefault();

  var name = document.getElementById("name").value.trim();
  var designation = document.getElementById("designation").value.trim();
  var message = document.getElementById("message").value.trim();


  let html = `
    <div class="recommended-box">
      <p>" ${message} "</p>
      ${name ? `<h4>-${name}</h4>` : ""}
      ${designation ? `<span>${designation}</span>` : ""}
    </div>
  `;

  document.getElementById("recommendation-sec").insertAdjacentHTML('beforeend', html);

  alert("Thank you for your recommendation!");

  // Optional: Clear the form
  document.getElementById("name").value = "";
  document.getElementById("designation").value = "";
  document.getElementById("message").value = "";
}

function toggleFunction() {
  var getNav = document.getElementById('navigation_keys');
  console.log("hamburger clicked");
  console.log(getNav);
  getNav.classList.toggle('show');
}

// Hide menu after clicking a nav link
document.querySelectorAll('.nav_keys').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navigation_keys').classList.remove('show');
  });
});