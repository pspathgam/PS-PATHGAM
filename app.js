document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("check-result-btn");
  const rollInput = document.getElementById("roll-no-input");
  const container = document.getElementById("report-card-container");

  btn.addEventListener("click", function () {

    const roll = rollInput.value.trim();

    container.style.display = "block";

    if (roll === "") {
      container.innerHTML =
        "<p style='color:red;text-align:center;'>❌ Please enter Roll Number</p>";
      return;
    }

    // DEMO DATABASE (TEMP)
    if (roll === "406") {

      container.innerHTML = `
        <iframe 
          src="marksheet.html" 
          style="width:100%;height:1100px;border:none;">
        </iframe>
      `;

    } else {
      container.innerHTML =
        "<p style='color:red;text-align:center;'>❌ Result not found</p>";
    }
  });

});
