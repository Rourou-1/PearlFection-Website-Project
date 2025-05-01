document.addEventListener('DOMContentLoaded', function() {
    const minusBtn = document.querySelector('.amount-button:first-child');
    const plusBtn = document.querySelector('.amount-button:last-child');
    const input = document.querySelector('.amount-field');
    
    minusBtn.addEventListener('click', function() {
        const currentValue = parseInt(input.value);
        if (currentValue > 1) {
            input.value = currentValue - 1;
        }
    });
    
    plusBtn.addEventListener('click', function() {
        const currentValue = parseInt(input.value);
        if (currentValue < Infinity) {
            input.value = currentValue + 1;
        }
    });
    

    const addToCartBtn = document.querySelector('.purchase-button');
    addToCartBtn.addEventListener('click', function() {
      window.location.href = "thanks.html"
        setTimeout(() => {
            this.innerHTML = 'Buy Now';
            this.style.backgroundColor = '#A78F7C';
        }, 2000);
    });
    
  
    
});