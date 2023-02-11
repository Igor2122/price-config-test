(function toggleHandler() {
  window.addEventListener("load", function () {
    const basePrice = 65;

    const priceMap = {
      "online-support": 0.05,
      "remote-support": 1,
      "both-support": 0.08,
      numberOfUsers: {
        base: 1,
        hundredPlus: 0.95,
      },
      responseTime: {
        base: 1,
        oneDay: 0.5,
        eightHours: 1,
        asap: 1.5,
      },
    };

    const pricePeriod = document.querySelector(".period-toggle-wrapper");
    const periodSpan = document.querySelector(".period-span");
    const configPricing = document.querySelector(".config-pricing");
    let priceVal = document.querySelector(".price-val");

    priceVal.textContent = basePrice;

    function generatePrice(val) {
      priceMap[val]
    }

    function updatePrice(val) {
      console.log(val, ": ===:val");
      priceVal.textContent = val;
    }

    pricePeriod.addEventListener("change", (e) => {
      if (e.target.classList.contains("period-toggle")) {
        if (e.target.checked) {
          periodSpan.textContent = "year";
          updatePrice(45);
        } else {
          updatePrice(85);
          periodSpan.textContent = "month";
        }
      }
    });

    configPricing.addEventListener("change", (e) => {
      updatePrice(e.target.value);
    });
  });
})();
