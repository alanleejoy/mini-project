document.addEventListener('DOMContentLoaded', () => {
  const accessMenuBtn = document.getElementById('access-menu-btn');
  const backToHomeBtn = document.getElementById('back-to-home-btn');
  const menuSection = document.getElementById('menu-section');
  const hotelCodeSection = document.getElementById('hotel-code-section');
  const menuList = document.getElementById('menu-list');
  const orderSummary = document.getElementById('order-summary');
  const totalPriceElement = document.getElementById('total-price');

  let totalPrice = 0;

  // Example menu items (these can be dynamically fetched from a server)
  const menuItems = [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 8 },
    { id: 3, name: 'Pasta', price: 12 },
  ];

  // Show menu when clicking "Access Menu"
  accessMenuBtn.addEventListener('click', () => {
    hotelCodeSection.classList.add('hidden');
    menuSection.classList.remove('hidden');

    // Dynamically add menu items to the list
    menuList.innerHTML = '';
    menuItems.forEach(item => {
      const li = document.createElement('li');
      li.style.marginBottom = "10px";
      li.textContent = `${item.name} - $${item.price}`;

      const addToCartBtn = document.createElement('button');
      addToCartBtn.textContent = 'Add to Cart';
      addToCartBtn.style.marginLeft = '20px'; // Add space for better alignment
      addToCartBtn.addEventListener('click', () => addToCart(item));
      li.appendChild(addToCartBtn);

      menuList.appendChild(li);
    });
  });

  // Back button functionality
  backToHomeBtn.addEventListener('click', () => {
    menuSection.classList.add('hidden');
    hotelCodeSection.classList.remove('hidden');
  });

  // Add to cart
  function addToCart(item) {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';

    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = '&times;'; // Cross icon
    removeBtn.style.background = 'none';
    removeBtn.style.border = 'none';
    removeBtn.style.color = '#f00';
    removeBtn.style.fontSize = '1.2rem';
    removeBtn.style.cursor = 'pointer';
    removeBtn.title = 'Remove item';

    removeBtn.addEventListener('click', () => {
      orderSummary.removeChild(li);
      totalPrice -= item.price;
      updateTotalPrice();
    });

    li.appendChild(removeBtn);
    orderSummary.appendChild(li);

    totalPrice += item.price;
    updateTotalPrice();
  }

  // Update total price
  function updateTotalPrice() {
    totalPriceElement.textContent = totalPrice.toFixed(2);
  }
});

