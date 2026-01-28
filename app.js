document.getElementById("checkoutWhatsapp").addEventListener("click", function (e) {
  e.preventDefault();

  let cartItems = document.querySelectorAll(".item_cart");
  let message = "🛒 *تفاصيل الطلب* %0A%0A";
  let total = 0;

  cartItems.forEach((item, index) => {
    let name = item.querySelector("h4").innerText;
    let priceText = item.querySelector(".price_cart").innerText.replace("$", "");
    let price = parseFloat(priceText);
    let quantity = parseInt(item.querySelector(".quantity").innerText);

    let itemTotal = price * quantity;
    total += itemTotal;

    message += `${index + 1}- ${name}%0A`;
    message += `الكمية: ${quantity}%0A`;
    message += `السعر: $${price}%0A`;
    message += `الإجمالي: $${itemTotal}%0A%0A`;
  });

  message += `💰 *السعر الكلي:* $${total}`;

  let phoneNumber = "201067680542";
  let whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(whatsappURL, "_blank");
});
