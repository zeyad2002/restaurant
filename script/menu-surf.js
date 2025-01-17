let cart = [];

function toggleSubButtons(category) {
    const subButtons = document.getElementById(`${category}-buttons`);
    const allSubButtons = document.querySelectorAll('.category-buttons');

    // إخفاء جميع الأزرار الفرعية أولاً
    allSubButtons.forEach(button => {
        if (button.id !== `${category}-buttons`) {
            button.style.display = 'none';
        }
    });

    // تبديل حالة الأزرار الفرعية المحددة
    if (subButtons.style.display === 'none' || subButtons.style.display === '') {
        subButtons.style.display = 'grid';
    } else {
        subButtons.style.display = 'none';
    }
}

function showSection(sectionId) {
    document.querySelectorAll('.menu-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function closeSection(sectionId) {
    document.getElementById(sectionId).classList.remove('active');
}

function addToCart(itemName, itemPrice) {
    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    updateCart();
    showToast();
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000); // تختفي الرسالة بعد 3 ثوانٍ
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