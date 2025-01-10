let cart = [];

        function showSection(sectionId) {
            document.querySelectorAll('.menu-section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');
        }

        function addToCart(itemName, itemPrice) {
            const existingItem = cart.find(item => item.name === itemName);
            if (existingItem) {
                existingItem.quantity += 1; // زيادة الكمية إذا كان المنتج موجودًا
            } else {
                cart.push({ name: itemName, price: itemPrice, quantity: 1 }); // إضافة منتج جديد
            }
            updateCart();
        }

        function toggleCart() {
            document.getElementById('cartPopup').classList.toggle('active');
        }

        function updateCart() {
            const cartItems = document.getElementById('cartItems');
            cartItems.innerHTML = '';
            cart.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <span>${item.name} - ${item.price} جنيه (الكمية: ${item.quantity})</span>
                    <button onclick="removeFromCart(${index})">حذف</button>
                `;
                cartItems.appendChild(cartItem);
            });
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }
    
    
    const toggleButton = document.getElementById('toggle-nav');
const navMenu = document.getElementById('nav-menu');


toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('show'); 
});
