document.addEventListener("DOMContentLoaded", () => {
    const addCartBtns = document.querySelectorAll(".add-cart");
    const wishlistBtns = document.querySelectorAll(".wishlist");
  
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  
    addCartBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const product = btn.closest(".product-card");
        const id = product.dataset.id;
        const name = product.dataset.name;
        const price = parseInt(product.dataset.price);
        cart.push({ id, name, price });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Added to cart!");
      });
    });
  
    wishlistBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const product = btn.closest(".product-card");
        const id = product.dataset.id;
        const name = product.dataset.name;
        const price = parseInt(product.dataset.price);
        const exists = wishlist.find((item) => item.id === id);
  
        if (!exists) {
          wishlist.push({ id, name, price });
          btn.innerHTML = '<i class="fas fa-heart"></i>';
        } else {
          wishlist = wishlist.filter((item) => item.id !== id);
          btn.innerHTML = '<i class="far fa-heart"></i>';
        }
  
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
      });
  
      // Set initial icon
      const product = btn.closest(".product-card");
      const id = product.dataset.id;
      if (wishlist.find((item) => item.id === id)) {
        btn.innerHTML = '<i class="fas fa-heart"></i>';
      }
    });
  });
  