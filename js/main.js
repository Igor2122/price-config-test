(function toggleHandler() {
  window.addEventListener("load", function (event) {
    const managedTab = document.querySelector(".managed-tab");
    const hocTab = document.querySelector(".add-hoc-tab");

    const billingButton = document.getElementById("billingButton");
    const hocButton = document.getElementById("hocButton");

    hocTab.style.display = "none";

    billingButton.addEventListener("click", () => {
      hocTab.style.display = "none";
      managedTab.style.display = "block";
    });

    hocButton.addEventListener("click", () => {
      console.log("clicked");
      hocTab.style.display = "block";
      managedTab.style.display = "none";
    });
  });
});
