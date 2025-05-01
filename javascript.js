 
  window.addEventListener('scroll', function() { 
    const navbar = document.querySelector('.custom-navbar'); 
     
    
    if (window.scrollY > 100) { 
      navbar.classList.add('navbar-sticky'); 
    } else { 
      navbar.classList.remove('navbar-sticky'); 
    } 
  }); 

 
  document.querySelectorAll('.nav-link').forEach(link => { 
    link.addEventListener('click', function(e) { 
    
      document.querySelectorAll('.nav-link').forEach(l => { 
        l.classList.remove('active'); 
      }); 
      this.classList.add('active'); 
   
      this.style.transition = 'transform 0.3s ease'; 
      this.style.transform = 'scale(1.1)'; 
       
      setTimeout(() => { 
        this.style.transform = 'scale(1)'; 
      }, 300); 
    }); 
  }); 
   

  const navbarToggler = document.querySelector('.navbar-toggler'); 
  if (navbarToggler) { 
    navbarToggler.addEventListener('click', function() { 
      const navLinks = document.querySelectorAll('.navbar-nav-center .nav-link'); 
       
    
      if (!document.querySelector('.navbar-collapse').classList.contains('show')) { 
        navLinks.forEach((link, index) => { 
          link.style.opacity = '0'; 
          link.style.transform = 'translateY(-20px)'; 
           
          setTimeout(() => { 
            link.style.transition = `opacity 0.4s ease ${index * 0.1}s, transform 0.4s ease ${index * 0.1}s`; 
            link.style.opacity = '1'; 
            link.style.transform = 'translateY(0)'; 
          }, 50); 
        }); 
      } 
    }); 
  }
  
 
    document.querySelectorAll('.item-btn').forEach(button => {
      button.addEventListener('click', function() {
       
       
        this.textContent = 'Added!';
        this.style.backgroundColor = '#d4af37';
        this.style.color = 'white';
        
        setTimeout(() => {
          this.textContent = 'Add to Cart';
          this.style.backgroundColor = 'transparent';
          this.style.color = 'white';
        }, 1500);
        
       
       
      });
    });
  ;

  function redirect()
    {
    var url = "shop.html";
    window.location(url);
    }

    document.addEventListener('DOMContentLoaded', function() {
      
        const cartItems = [];
        const cartCount = document.getElementById('cartCount');
        const cartDropdown = document.getElementById('cartDropdown');
        const cartItemsContainer = document.getElementById('cartItems');
        const emptyCartMessage = document.getElementById('emptyCart');
        const cartFooter = document.getElementById('cartFooter');
        const cartTotal = document.getElementById('cartTotal');
        
       
        const addToCartButtons = document.querySelectorAll('.item-btn');
        addToCartButtons.forEach(button => {
          button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            const img = this.getAttribute('data-img');
            
            
            addToCart(id, name, price, img);
            
           
            this.classList.add('added');
            setTimeout(() => {
              this.classList.remove('added');
            }, 1500);
          });
        });
        
       
        document.getElementById('cartIconWrapper').addEventListener('click', function(e) {
          e.stopPropagation();
          cartDropdown.classList.toggle('show');
        });
        
       
        document.addEventListener('click', function() {
          cartDropdown.classList.remove('show');
        });
        
     
        cartDropdown.addEventListener('click', function(e) {
          e.stopPropagation();
        });
        
     
        document.querySelector('.continue-shopping').addEventListener('click', function() {
          cartDropdown.classList.remove('show');
        });
        
        function addToCart(id, name, price, img) {
       
          const existingItem = cartItems.find(item => item.id === id);
          
          if (existingItem) {
           
            existingItem.quantity += 1;
          } else {
           
            cartItems.push({
              id,
              name,
              price,
              img,
              quantity: 1
            });
          }
          
         
          updateCart();
          
        
          cartCount.classList.add('show');
          
        
          cartDropdown.classList.add('show');
          setTimeout(() => {
            cartDropdown.classList.remove('show');
          }, 2000);
        }
        
        function updateCart() {
         
          const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
          cartCount.textContent = totalItems;
          
       
          if (totalItems > 0) {
            cartCount.classList.add('show');
          } else {
            cartCount.classList.remove('show');
          }
          
          
          cartItemsContainer.innerHTML = '';
          
         
          if (cartItems.length === 0) {
            emptyCartMessage.style.display = 'block';
            cartFooter.style.display = 'none';
          } else {
            emptyCartMessage.style.display = 'none';
            cartFooter.style.display = 'block';
            
           
            cartItems.forEach(item => {
              const cartItemElement = document.createElement('div');
              cartItemElement.classList.add('cart-item');
              cartItemElement.innerHTML = `
                <img class="cart-item-img" src="${item.img}" alt="${item.name}">
                <div class="cart-item-details">
                  <h4 class="cart-item-title">${item.name}</h4>
                  <div class="cart-item-price">₱${item.price.toFixed(2)} × ${item.quantity}</div>
                </div>
                <button class="cart-item-remove" data-id="${item.id}">×</button>
              `;
              cartItemsContainer.appendChild(cartItemElement);
            });
            
         
            document.querySelectorAll('.cart-item-remove').forEach(button => {
              button.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                removeFromCart(id);
              });
            });
            
           
            const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = `₱${total.toFixed(2)}`;
          }
        }
        
        function removeFromCart(id) {
       
          const index = cartItems.findIndex(item => item.id === id);
          
          if (index !== -1) {
         
            if (cartItems[index].quantity > 1) {
              cartItems[index].quantity -= 1;
            } else {
             
              cartItems.splice(index, 1);
            }
            
           
            updateCart();
          }
        }
        
      
        updateCart();
      });


      document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll("footer a, .navbar a, .profile-icon-link-icon-wrapper");
      
        links.forEach(link => {
          const text = link.textContent.trim().toLowerCase();
      
          if (text === "privacy policy") {
            link.addEventListener("click", e => {
              e.preventDefault();
              window.location.href = "privacypolicy.html";
            });
          } else if (text === "terms of use") {
            link.addEventListener("click", e => {
              e.preventDefault();
              window.location.href = "termsofuse.html";
            });
          } else if (text === "faq") {
            link.addEventListener("click", e => {
              e.preventDefault();
              window.location.href = "faq.html";
            });
          } else if (text === "contact") {
            link.addEventListener("click", e => {
              e.preventDefault();
              window.location.href = "contact.html";
            });
          } else if (link.classList.contains("profile-icon-link-icon-wrapper")) {
            link.addEventListener("click", e => {
              e.preventDefault();
              window.location.href = "account.html";
            });
          }
        });
      });
      
      function directfeedback () {
window.location.href = "feedback.html";
      }