let minQuantity = 1;
let maxQuantity = 10;

function updateButtons() {
    let quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value);

    document.getElementById('decrease-btn').disabled = currentValue <= minQuantity;
    document.getElementById('increase-btn').disabled = currentValue >= maxQuantity;
}

function increase() {
    let quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value);
    if (currentValue < maxQuantity) {
        quantityInput.value = currentValue + 1;
        animateInput();
        updateButtons();
    }
}

function decrease() {
    let quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > minQuantity) {
        quantityInput.value = currentValue - 1;
        animateInput();
        updateButtons();
    }
}

function animateInput() {
    let quantityInput = document.getElementById('quantity');
    quantityInput.style.transition = 'transform 0.3s ease';
    quantityInput.style.transform = 'scale(1.1)';
    setTimeout(() => {
        quantityInput.style.transform = 'scale(1)';
    }, 300);
}

function changeImage(imageUrl) {
    let sliderImage = document.getElementById('slider-image');
    sliderImage.src = imageUrl;
}

// Initial button state
updateButtons();
