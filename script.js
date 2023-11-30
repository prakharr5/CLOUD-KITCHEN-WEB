window.addEventListener("DOMContentLoaded", () => {
  gsap.from("h1", {
    duration: 1,
    opacity: 0,
    y: -50,
    stagger: 0.3,
  });

  gsap.from(".image-container img", {
    duration: 1,
    opacity: 0,
    scale: 0.5,
    stagger: 0.2,
  });
});

window.addEventListener("DOMContentLoaded", () => {
  gsap.from(".imgbackground img", {
    duration: 1,
    opacity: 0,
    y: 0,
  });

  gsap.from(".rectangle1", {
    duration: 1,
    opacity: 0,
    y: 10,
  });

  gsap.from(".rectangle1 li", {
    duration: 1,
    opacity: 0,
    y: 10,
    stagger: 0.3,
  });
});
let cartItems = [];

function incrementItem(itemName, quantityId, price) {
  const quantityElement = document.getElementById(quantityId);
  const quantity = parseInt(quantityElement.textContent) + 1;
  quantityElement.textContent = quantity;

  updateCart(itemName, quantity, price);
}

function decrementItem(itemName, quantityId, price) {
  const quantityElement = document.getElementById(quantityId);
  const quantity = parseInt(quantityElement.textContent);

  if (quantity > 0) {
    quantityElement.textContent = quantity - 1;
    updateCart(itemName, quantity - 1, price);
  }
}

function updateCart(itemName, quantity, price) {
  const existingItemIndex = cartItems.findIndex(
    (item) => item.name === itemName
  );

  if (existingItemIndex !== -1) {
    cartItems[existingItemIndex].quantity = quantity;
  } else {
    cartItems.push({ name: itemName, quantity, price });
  }

  // Update the cart in localStorage
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

function viewCart() {
  // Redirect to the cart page
  window.location.href = "cart.html";
}

function orderNow() {
  // Implement your order submission logic here
  alert("Order placed successfully!");
}
document.addEventListener("DOMContentLoaded", function () {
  displayCart();
});

function displayCart() {
  const cartList = document.getElementById("cart-list");
  const subtotalElement = document.getElementById("subtotal");

  const storedCart = localStorage.getItem("cart");
  const cartItems = storedCart ? JSON.parse(storedCart) : [];

  let total = 0;

  cartList.innerHTML = ""; // Clear the previous content

  cartItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - Quantity: ${
      item.quantity
    } - Price: Rs${item.price * item.quantity}`;
    cartList.appendChild(listItem);

    total += item.price * item.quantity;
  });

  subtotalElement.textContent = `Rs${total.toFixed(2)}`;
}
