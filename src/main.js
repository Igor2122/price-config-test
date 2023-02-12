(function toggleHandler() {
  window.addEventListener("load", function () {
    function addPercentage(number, percentage) {
      if (!percentage) return 0;

      return Math.floor(number * (percentage / 100));
    }

    function getSelectedCheckbox(radioButtons) {
      let selectedRadioButton = "";
      radioButtons.forEach((radioButton) => {
        if (radioButton.checked) {
          return (selectedRadioButton = radioButton.value);
        }
      });

      return selectedRadioButton;
    }

    const basePrice = 100;

    const pricesMap = {
      "support-type": {
        "onsite-support": 5,
        "remote-support": null,
        "both-support": 8,
      },
      "number-of-users": {
        "one-oneHundred": null,
        "hundred-plus": 5,
        "thousand-plus": 8,
      },
      support: {
        "support-8-5": null,
        "support-24-5": 50,
        "support-24-7": 100,
      },
      "respond-time": {
        "3-5-days": null,
        "24-hours": 50,
        "8-hours": 100,
        asap: 150,
      },
    };

    const pricePeriod = document.querySelector(".period-toggle-wrapper");
    const periodSpan = document.querySelector(".period-span");
    const configPricing = document.querySelector(".config-pricing");
    let priceVal = document.querySelector(".price-val");

    priceVal.textContent = basePrice;

    function generatePrice(val) {
      const supportTypePercent = getSelectedCheckbox(
        document.querySelectorAll('input[name="support-type"]') ||
          "remote-support"
      );

      const usersPercentSelected =
        getSelectedCheckbox(
          document.querySelectorAll('input[name="number-of-users"]')
        ) || "one-oneHundred";

      const supportPercentSelected =
        getSelectedCheckbox(
          document.querySelectorAll('input[name="support"]')
        ) || "support-8-5";

      const responsePercentSelected =
        getSelectedCheckbox(
          document.querySelectorAll('input[name="respond-time"]')
        ) || "3-5-days";

      let supportTypePrice = addPercentage(
        basePrice,
        pricesMap["support-type"][supportTypePercent]
      );

      let usersPrice = addPercentage(
        basePrice + supportTypePrice,
        pricesMap["number-of-users"][usersPercentSelected]
      );

      let supportHoursPrice = addPercentage(
        basePrice + supportTypePrice + usersPrice,
        pricesMap["support"][supportPercentSelected]
      );

      let responsePercentPrice = addPercentage(
        basePrice + supportTypePrice + usersPrice + supportHoursPrice,
        pricesMap["respond-time"][responsePercentSelected]
      );

      console.log(usersPrice, ": ===:usersPrice");

      let total =
        basePrice +
        supportTypePrice -
        usersPrice +
        supportHoursPrice +
        responsePercentPrice;

      updatePrice(total);
    }

    function updatePrice(val) {
      priceVal.textContent = val;
    }

    pricePeriod.addEventListener("change", (e) => {
      if (e.target.value === "monthly-price") {
        periodSpan.textContent = "month";
        updatePrice(85);
      }
      if (e.target.value === "yearly-price") {
        updatePrice(45);
        periodSpan.textContent = "year";
      }
    });

    configPricing.addEventListener("change", (e) => {
      generatePrice(e.target.value);
    });
  });
})();
