
document.addEventListener('DOMContentLoaded', function() {
    
    const categoryButtons = document.querySelectorAll('.category-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    
    const categoryMap = {
      'bracelet': 'Bracelets',
      'ring': 'Rings',
      'necklace': 'Necklaces',
      'necklace-2': 'Necklaces',
      'bracelet-2': 'Bracelets',
      'ring-2': 'Rings',
      'bracelet-3': 'Bracelets'
    };
    
   
    categoryButtons.forEach(button => {
      button.addEventListener('click', function() {
       
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        
     
        this.classList.add('active');
        
       
        const selectedCategory = this.textContent;
        
     
        productCards.forEach(card => {
         
          const addButton = card.querySelector('.item-btn');
          if (!addButton) return;
          
          const productId = addButton.getAttribute('data-id');
          const productCategory = categoryMap[productId];
          
          if (selectedCategory === 'All Collections') {
            card.style.display = 'block'; 
          } else if (productCategory === selectedCategory) {
            card.style.display = 'block'; 
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
    
    
    const allCollectionsButton = document.querySelector('.category-btn');
    if (allCollectionsButton) {
      allCollectionsButton.classList.add('active');
    }
    
    
   


  });