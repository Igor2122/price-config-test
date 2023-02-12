(function toggleHandler() {
  window.addEventListener("load", function () {
    function addPercentage(number, percentage) {
      if (!percentage) return 0;

      return Math.floor(number * (percentage / 100));
    }

    function removePercentage(number, percentage) {
      console.log(percentage, ": ===:percentage");
      if (!percentage) return number;

      return Math.floor(number * (percentage / 100));
    }

    const basePrice = 100;

    const pricesMap = {
      "support-type": {
        "onsite-support": 5,
        "remote-support": null,
        "both-support": 8,
      },
      "number-of-users": {
        "one-oneHundred": 1,
        "hundred-plus": 5,
        "thousand-plus": 5,
      },
      support: {
        "support-8-5": 1,
        "support-24-5": 1,
        "support-24-7": 1,
      },
      "respond-time": {
        "3-5-days": 1,
        "24-hours": 1,
        "8-hours": 1,
        asap: 1,
      },
    };

    const pricePeriod = document.querySelector(".period-toggle-wrapper");
    const periodSpan = document.querySelector(".period-span");
    const configPricing = document.querySelector(".config-pricing");
    let priceVal = document.querySelector(".price-val");

    priceVal.textContent = basePrice;

    function generatePrice(val) {
      let supportPercentSelected = "remote-support";

      const radioButtons = document.querySelectorAll(
        'input[name="support-type"]'
      );

      radioButtons.forEach((radioButton) => {
        if (radioButton.checked) {
          supportPercentSelected = radioButton.value;
        }
      });

      let supportPrice = addPercentage(
        basePrice,
        pricesMap["support-type"][supportPercentSelected]
      );

      console.log(supportPercentSelected, ": ===:supportPercentSelected");

      console.log(supportPrice, ": ===:supportPrice");

      // if (selectedRadio) {
      //   console.log("A radio button is selected:", selectedRadio.value);
      // } else {
      //   console.log("No radio button is selected");
      // }

      let total = basePrice + supportPrice;

      updatePrice(total);
    }

    function updatePrice(val) {
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
      // console.log(e.target.name, ": ===:e.target.name");
      // console.log(e.target.value, ": ===:e.target.value");

      generatePrice(e.target.value);
    });
  });
})();
