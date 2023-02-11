(function toggleHandler() {
  window.addEventListener("load", function (event) {
    const basePrice = 65;

    const pricePeriod = document.querySelector(".period-toggle-wrapper");
    const periodSpan = document.querySelector(".period-span");
    const configPricing = document.querySelector(".config-pricing");
    let priceVal = (document.querySelector(".price-val").textContent =
      basePrice);

    function updatePrice() {
      priceVal.textContent = "55";
    }

    pricePeriod.addEventListener("change", (e) => {
      if (e.target.classList.contains("period-toggle")) {
        if (e.target.checked) periodSpan.textContent = "year";
        else periodSpan.textContent = "month";
      }
    });

    configPricing.addEventListener("change", (e) => {
      if (e.target.id === "online-support") {
        console.log("cuw");
        updatePrice();
      }
    });
  });
})();
