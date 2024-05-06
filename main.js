const transactionsBtn = document.querySelectorAll("input[name='transaction']");

const deliveryDetails = document.getElementById("delivery-details");
const pickupLocation = document.getElementById("pickup-location");

transactionsBtn.forEach((radio) => {
  radio.addEventListener("change", () => {
    const caller = radio.getAttribute("id");
    if (caller === "delivery") {
      pickupLocation.classList.remove("show");
      deliveryDetails.classList.add("show");
    } else {
      deliveryDetails.classList.remove("show");
      pickupLocation.classList.add("show");
    }
  });
});
