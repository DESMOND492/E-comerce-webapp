
         let cart = JSON.parse(localStorage.getItem('cart')) || []; // Initialize cart from localStorage


         const fetcProduct = async () => {
            try{
                const reponse = await fetch("http://127.0.0.1:8000/product/");

                if(!reponse.ok){
                    throw new Error("Network problem, so buy data!!!!!!!!!!");
                }

                const data = await reponse.json();
                console.log("Product:", data);



            }catch(error) {
                console.error(error);
            }
         } 

         fetcProduct();

        const products = [
            {
                id: 1,
                name: "4K Gaming Monitor",
                image: "pc5.jpg",
                price: "Gh₵5,000",
                rating: 4.5,
                reviews: 120,
                discount: 5,
                paymentMethods: ["Credit Card", "PayPal"],
                category: "pcps"
            },
            {
                id: 2,
                name: "Google Pixel 6",
                image: "AndroidPIT-Best-High-End-Smartphones-Hero-1.webp",
                price: "Gh₵2,000",
                rating: 4.2,
                reviews: 200,
                discount: 10,
                paymentMethods: ["Credit Card", "Digital Wallet"],
                category: "phones"
            },
            {
                id: 3,
                name: "4K Smart TV",
                image: "nascp-vidaa-tv.webp",
                price: "Gh₵6,000",
                rating: 4.3,
                reviews: 90,
                discount: 7,
                paymentMethods: ["MOMO", "Credit Card"],
                category: "tv"
            },
            {
                id: 4,
                name: "IPhone 12 Pro",
                image: "phone1.jpg",
                price: "Gh₵4,300",
                rating: 5.0,
                reviews: 85,
                discount: 12,
                paymentMethods: ["MOMo","Credit Card"],
                category: "phones"
            },
            {
                id: 5,
                name: "G7 Server",
                image: "server 2.webp",
                price: "Gh₵13,876",
                rating: 4.7,
                reviews: 87,
                discount: 6,
                paymentMethods: ["MOMO","Credit Card"],
                category: "server"
            },
            {
                id: 6,
                name: "Samsung Galaxy Tab S9+",
                image: "tb2.avif",
                price: "Gh₵2,456",
                rating: 5.0,
                reviews: 77,
                discount: 10,
                paymentMethods: ["MOMO","Credit Card"],
                category: "phones"
            },

            {
                id: 7,
                name: "stack1 server",
                image: "download.jpeg",
                price: "Gh₵11,678",
                rating: 4.0,
                reviews: 80,
                discount: 2,
                paymentMethods: ["MOMO","Credit Card"],
                category: "server"
            },
            {
                id: 8,
                name: "Iphone 16 Pro",
                image: "iph16prr.webp",
                price: "Gh₵10,000",
                rating: 5.0,
                reviews: 95,
                discount: 10,
                paymentMethods: ["Credit Card" ,"MOMO"],
                category: "phones"
            },
            {
                id: 9,
                name: "ConCave Smart TV",
                image: "istockphoto-467946398-612x612.jpg",
                price: "Gh₵3,000",
                rating: 4.8,
                reviews: 50,
                discount: 5,
                paymentMethods: ["MOMO","Credit Card"],
                category: "tv"
            },
            {
                id: 10,
                name: "Lenovo Legion 5",
                image: "pc2.jpg",
                price: "Gh₵5,500",
                rating: 4.8,
                reviews: 80,
                discount: 0,
                paymentMethods: ["MOMO","Credit Card"],
                category: "pcps"
            },
            {
                id: 11,
                name: "galaxy tab s9",
                image: "besttablets-2048px-9875.jpg",
                price: "Gh₵1,980",
                rating: 4.8,
                reviews: 30,
                discount: 2,
                paymentMethods: ["Credit Card ","MOMO"],
                category: "phones"
            },
            {
                id: 12,
                name: "Samsung Galaxy S24",
                image: "sams24.avif",
                price: "Gh₵3,000",
                rating: 3.8,
                reviews: 35,
                discount: 10,
                paymentMethods: ["MOMO","Credit Card"],
                category: "phones"
            },
            {
                id: 13,
                name: "Gaming pc setup 40000u intel",
                image: "gDst.jpg",
                price: "Gh₵12,000",
                rating: 5.0,
                reviews: 120,
                discount: 0,
                paymentMethods: ["MOMO","Credit Card"],
                category: "phones"
            },
            {
                id: 14,
                name: "Iphone 13 mini",
                image: "IP13MINI.jpeg",
                price: "Gh₵3,800",
                rating: 4.8,
                reviews: 55,
                discount: 5,
                paymentMethods: ["Credit Card"],
                category: "phones"
            },
            {
                id: 15,
                name: "Server Rack Js8",
                image: "server 1.jpg",
                price: "Gh₵10,000",
                rating: 4.3,
                reviews: 89,
                discount: 8,
                paymentMethods: ["MOMO","Credit Card"],
                category: "server"
            },
            {
                id: 16,
                name: "Dell Desktop Computer",
                image: "64ecb280bb36e77b0e1cb0c3-dell-optiplex-desktop-computer-with.jpg",
                price: "Gh₵2,000",
                rating: 4.9,
                reviews: 110,
                discount: 0.00,
                paymentMethods: ["Credit Card"],
                category: "pcps"
            },
            {
                id: 17,
                name: "Smart Tv",
                image: "tv2.webp",
                price: "Gh₵5,000",
                rating: 5.0,
                reviews: 70,
                discount: 0,
                paymentMethods: ["MOMO","Credit Card"],
                category: "tv"
            },
            {
                id: 18,
                name: "lenovo Tab3",
                image: "tab1.jpg",
                price: "Gh₵1,700",
                rating: 4.0,
                reviews: 36,
                discount: 5,
                paymentMethods: ["Credit Card"],
                category: "phones"
            },
            {
                id: 19,
                name: "Volted Pc setup",
                image: "gmidst2.jpg",
                price: "Gh₵20,543",
                rating: 4.5,
                reviews: 91,
                discount: 7,
                paymentMethods: ["Credit Card"],
                category: "pcps"
            },
            {
                id: 20,
                name: "Iphone 13 Pro",
                image: "IP13PR.webp",
                price: "Gh₵4,000",
                rating: 4.2,
                reviews: 31,
                discount: 5,
                paymentMethods: ["Credit Card"],
                category: "phones"
            },
            {
                id: 21,
                name: "Xbox Playstation 5",
                image: "xbox-playstation-group-0057-64c3e751a896f.avif",
                price: "Gh₵8,543",
                rating: 5.0,
                reviews: 76,
                discount: 4,
                paymentMethods: ["Credit Card/ MOMO"],
                category: "pcps"
            },
            {
                id: 22,
                name: "6 in 1 type c multi port Adaptor",
                image: "6-in-1-Type-C-Multi-Port-Adapter-.webp",
                price: "Gh₵200",
                rating: 4.6,
                reviews: 80,
                discount: 0,
                paymentMethods: ["MOMO","Credit Card"],
                category: "network"
            },
            {
                id: 23,
                name: "Air pods Pro 2",
                image: "airpod pro 2.webp",
                price: "Gh₵600",
                rating: 5.0,
                reviews: 80,
                discount: 2,
                paymentMethods: ["MOMO","Credit Card"],
                category: "watchpopds"
            },
             {
                id: 24,
                name: "Asus PIT Router",
                image: "Asus Router.webp",
                price: "Gh₵2,650",
                rating: 4.9,
                reviews: 50,
                discount: 0,
                paymentMethods: ["MOMO","Credit Card"],
                category: "network"
            }, 
            {
                id: 25,
                name: "Generic IP3 smart watch",
                image: "generic watch1.jpg",
                price: "Gh₵450",
                rating: 4.8,
                reviews: 80,
                discount: 3,
                paymentMethods: ["MOMO","Credit Card"],
                category: "watchpopds"
            },
             {
                id: 26,
                name: "Touchscreen Airpod s3",
                image: "touchscreen airpod.avif",
                price: "Gh₵500",
                rating: 5.0,
                reviews: 80,
                discount: 0,
                paymentMethods: ["MOMO","Credit Card"],
                category: "watchpods` z"
            },
             {
                id: 27,
                name: "Cart 6 cable",
                image: "cat 6 cables.webp",
                price: "Gh₵60",
                rating: 5.0,
                reviews: 80,
                discount: 0.00,
                paymentMethods: ["MOMO","Credit Card"],
                category: "network"
            },
            {
                id: 28,
                name: "Virg Pro Watch",
                image: "verg pro watch.webp",
                price: "Gh₵350",
                rating: 5.0,
                reviews: 80,
                discount: 5,
                paymentMethods: ["MOMO","Credit Card"],
                category: "watchpopds"
            },
            {
                id: 29,
                name: "Gaming Router",
                image: "gaming-router.jpg",
                price: "Gh₵1,900",
                rating: 5.0,
                reviews: 120,
                discount: 1,
                paymentMethods: ["MOMO","Credit Card"],
                category: "network"
            },
            {
                id: 30,
                name: "Access Point",
                image: "accespoint.webp",
                price: "Gh₵350",
                rating: 4.5,
                reviews: 40,
                discount: 2,
                paymentMethods: ["MOMO","Credit Card"],
                category: "network"
            },
            {
                id: 31,
                name: "IGN Router",
                image: "ign router.jpg",
                price: "Gh₵3,000",
                rating: 5.0,
                reviews: 80,
                discount: 5,
                paymentMethods: ["MOMO","Credit Card"],
                category: "network"
            },
            {
                id: 32,
                name: "T800 Ultra Watch",
                image: "t800 ultra watch.webp",
                price: "Gh₵300",
                rating: 5.0,
                reviews: 100,
                discount: 0.00,
                paymentMethods: ["MOMO","Credit Card"],
                category: "watchpopds"
            },
            {
                id: 33,
                name: "Laptop Stand",
                image: "laptop stand.jpg",
                price: "Gh₵200",
                rating: 4.8,
                reviews: 80,
                discount: 2,
                paymentMethods: ["MOMO","Credit Card"],
                category: "pcps"
            }


        ];

        function toggleTheme() {
            const body = document.body;
            const themeToggle = document.querySelector('.theme-toggle i');
            
            if(body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                themeToggle.className = 'fas fa-moon';
                localStorage.setItem('theme', 'light');
            } else {
                body.setAttribute('data-theme', 'dark');
                themeToggle.className = 'fas fa-sun';
                localStorage.setItem('theme', 'dark');
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme') || 'light';
            const themeToggle = document.querySelector('.theme-toggle i');
            
            if(savedTheme === 'dark') {
                document.body.setAttribute('data-theme', 'dark');
                themeToggle.className = 'fas fa-sun';
            }

            // Call renderProducts on page load
            renderProducts(products);

            // Add event listeners to category items
            const categoryItems = document.querySelectorAll('.category-item');
            categoryItems.forEach(item => {
                item.addEventListener('click', () => {
                    const category = item.getAttribute('data-category');
                    filterProductsByCategory(category);

                    // Update active category
                    categoryItems.forEach(cat => cat.classList.remove('active'));
                    item.classList.add('active');
                });
            });

            const searchBar = document.querySelector('.search-bar');

            // Add event listener for search input
            searchBar.addEventListener('input', () => {
                const query = searchBar.value.toLowerCase();
                filterProductsBySearch(query);
            });

            renderRecentlyViewed(); // Render recently viewed products
        });

        function renderProducts(filteredProducts) {
            const grid = document.getElementById('products-grid');
            grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <div class="product-image-container">
                ${product.discount ? `<span class="product-badge">-${product.discount}%</span>` : ''}
                <img src="${product.image}" class="product-image" alt="${product.name}">
            </div>
            <div class="product-details">
                <h3>${product.name}</h3>
                <div class="product-rating">
                    <div class="rating-stars">
                        ${renderRating(product.rating)}
                    </div>
                    <span class="rating-count">(${product.reviews} reviews)</span>
                </div>
                <div class="product-price">${product.price}</div>
                <div class="payment-methods">
                    ${product.paymentMethods.map(method => `
                        <div class="payment-method">
                            <i class="${getPaymentIcon(method)}"></i>
                            <span>${method}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="product-actions">
                    <button class="action-btn btn-primary" title="Add to Cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus btn-icon"></i>
                    </button>
                    <button class="action-btn btn-preview" title="Preview" onclick="showPreview(${product.id})">
                        <i class="fas fa-eye btn-icon"></i>
                    </button>
                    <button class="action-btn btn-payment" title="Pay Now" onclick="showPaymentForm(${product.id})">
                        <i class="fas fa-credit-card btn-icon"></i>
                    </button>
                    <button class="action-btn btn-wishlist" title="Wishlist" onclick="addToWishlist(${product.id})">
                        <i class="fas fa-heart btn-icon"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
        }

        function filterProductsByCategory(category) {
            if (category === 'all') {
                renderProducts(products);
            } else {
                const filteredProducts = products.filter(product => product.category === category);
                renderProducts(filteredProducts);
            }
        }

        function filterProductsBySearch(query) {
            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
            renderProducts(filteredProducts);
        }

        function renderRating(rating) {
            const stars = Math.floor(rating);
            const halfStar = rating % 1 >= 0.5;
            let html = '';
            for (let i = 0; i < 5; i++) {
                if (i < stars) {
                    html += '<i class="fas fa-star"></i>';
                } else if (halfStar && i === stars) {
                    html += '<i class="fas fa-star-half-alt"></i>';
                } else {
                    html += '<i class="far fa-star"></i>';
                }
            }
            return html;
        }

        function getPaymentIcon(method) {
            switch (method.toLowerCase()) {
                case 'credit card':
                    return 'fab fa-cc-visa';
                case 'paypal':
                    return 'fab fa-paypal';
                case 'digital wallet':
                    return 'fas fa-wallet';
                default:
                    return 'fas fa-credit-card';
            }
        }

        // Payment Method Handling
        function handlePayment(method) {
            document.querySelectorAll('.payment-method').forEach(item => {
                item.classList.remove('active');
            });
            method.classList.add('active');
        }

        // Initialize payment methods
        document.querySelectorAll('.payment-method').forEach(item => {
            item.addEventListener('click', () => handlePayment(item));
        });

        // Add to Cart function
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                const existingItem = cart.find(item => item.id === productId);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({ ...product, quantity: 1 });
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
                showCartPopupFeedback(`✅ ${product.name} added to cart!`);
                showCartPortal(); // Slide out cart portal on add
            }
        }

        function updateCartCount() {
            const cartCount = document.querySelector('.cart-count');
            cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0); // Sum of all quantities
        }

        // Preview function
        function showPreview(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                // Display product details in a modal
                const modal = document.createElement('div');
                modal.className = 'preview-modal';
                modal.style.position = 'fixed';
                modal.style.top = '0';
                modal.style.left = '0';
                modal.style.width = '100%';
                modal.style.height = '100%';
                modal.style.background = 'rgba(0, 0, 0, 0.5)';
                modal.style.display = 'flex';
                modal.style.justifyContent = 'center';
                modal.style.alignItems = 'center';
                modal.style.zIndex = '2000';

                modal.innerHTML = `
                    <div style="background: white; padding: 20px; border-radius: 10px; text-align: center; width: 90%; max-width: 500px;">
                        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: auto; border-radius: 10px;">
                        <h3>${product.name}</h3>
                        <p>${product.price}</p>
                        <p>${product.reviews} reviews</p>
                        <button onclick="document.body.removeChild(this.parentElement.parentElement)" style="margin-top: 10px; padding: 10px 20px; background: #e74c3c; color: white; border: none; border-radius: 5px; cursor: pointer;">Close</button>
                    </div>
                `;
                document.body.appendChild(modal);

                addToRecentlyViewed(productId); // Add to recently viewed
            }
        }

        function addToRecentlyViewed(productId) {
            let viewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
            viewed = viewed.filter(id => id !== productId); // Remove if exists
            viewed.unshift(productId); // Add to front
            if (viewed.length > 5) viewed.pop(); // Keep only 5
            localStorage.setItem('recentlyViewed', JSON.stringify(viewed));
        }

        // To display:
        function renderRecentlyViewed() {
            let viewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
            let html = viewed.map(id => {
                const product = products.find(p => p.id === id);
                return product ? `<div>${product.name}</div>` : '';
            }).join('');
            document.getElementById('recently-viewed').innerHTML = html;
        }

        // Complete Purchase
        function completePurchase(event) {
            event.preventDefault();
            const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
            alert(`Payment of $${total.toFixed(2)} completed successfully!`);
            cart = []; // Clear cart
            localStorage.setItem('cart', JSON.stringify(cart)); // Clear cart in localStorage
            updateCartCount();
            document.getElementById('checkout-modal').style.display = 'none'; // Close checkout modal
        }

        // Initialize payment methods
        document.querySelectorAll('.payment-method').forEach(item => {
            item.addEventListener('click', () => handlePayment(item));
        });

        // Render products on page load
        document.addEventListener('DOMContentLoaded', () => {
            renderProducts(products);
            updateCartCount();
        });

        // Show Payment Form Modal (with address and delivery details)
        function showPaymentForm(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                // Remove any existing modal
                const oldModal = document.querySelector('.modal');
                if (oldModal) oldModal.remove();

                // Create modal
                const modal = document.createElement('div');
                modal.className = 'modal';
                modal.innerHTML = `
<form class="form" onsubmit="return handleCustomCheckout(event, ${product.id})">
  <div class="payment--options">
    <button name="paypal" type="button" title="PayPal">
      <!-- PayPal SVG -->
      <svg xml:space="preserve" viewBox="0 0 124 33" height="33px" width="124px" y="0px" x="0px" id="Layer_1" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><path d="M46.211,6.749h-6.839c-0.468,0-0.866,0.34-0.939,0.802l-2.766,17.537c-0.055,0.346,0.213,0.658,0.564,0.658  h3.265c0.468,0,0.866-0.34,0.939-0.803l0.746-4.73c0.072-0.463,0.471-0.803,0.938-0.803h2.165c4.505,0,7.105-2.18,7.784-6.5  c0.306-1.89,0.013-3.375-0.872-4.415C50.224,7.353,48.5,6.749,46.211,6.749z M47,13.154c-0.374,2.454-2.249,2.454-4.062,2.454  h-1.032l0.724-4.583c0.043-0.277,0.283-0.481,0.563-0.481h0.473c1.235,0,2.4,0,3.002,0.704C47.027,11.668,47.137,12.292,47,13.154z" fill="#253B80"></path><path d="M66.654,13.075h-3.275c-0.279,0-0.52,0.204-0.563,0.481l-0.145,0.916l-0.229-0.332  c-0.709-1.029-2.29-1.373-3.868-1.373c-3.619,0-6.71,2.741-7.312,6.586c-0.313,1.918,0.132,3.752,1.22,5.031  c0.998,1.176,2.426,1.666,4.125,1.666c2.916,0,4.533-1.875,4.533-1.875l-0.146,0.91c-0.055,0.348,0.213,0.66,0.562,0.66h2.95  c0.469,0,0.865-0.34,0.939-0.803l1.77-11.209C67.271,13.388,67.004,13.075,66.654,13.075z M62.089,19.449  c-0.316,1.871-1.801,3.127-3.695,3.127c-0.951,0-1.711-0.305-2.199-0.883c-0.484-0.574-0.668-1.391-0.514-2.301  c0.295-1.855,1.805-3.152,3.67-3.152c0.93,0,1.686,0.309,2.184,0.892C62.034,17.721,62.232,18.543,62.089,19.449z" fill="#253B80"></path><path d="M84.096,13.075h-3.291c-0.314,0-0.609,0.156-0.787,0.417l-4.539,6.686l-1.924-6.425  c-0.121-0.402-0.492-0.678-0.912-0.678h-3.234c-0.393,0-0.666,0.384-0.541,0.754l3.625,10.638l-3.408,4.811  c-0.268,0.379,0.002,0.9,0.465,0.9h3.287c0.312,0,0.604-0.152,0.781-0.408L84.564,13.97C84.826,13.592,84.557,13.075,84.096,13.075z" fill="#253B80"></path><path d="M94.992,6.749h-6.84c-0.467,0-0.865,0.34-0.938,0.802l-2.766,17.537c-0.055,0.346,0.213,0.658,0.562,0.658  h3.51c0.326,0,0.605-0.238,0.656-0.562l0.785-4.971c0.072-0.463,0.471-0.803,0.938-0.803h2.164c4.506,0,7.105-2.18,7.785-6.5  c0.307-1.89,0.012-3.375-0.873-4.415C99.004,7.353,97.281,6.749,94.992,6.749z M95.781,13.154c-0.373,2.454-2.248,2.454-4.062,2.454  h-1.031l0.725-4.583c0.043-0.277,0.281-0.481,0.562-0.481h0.473c1.234,0,2.4,0,3.002,0.704  C95.809,11.668,95.918,12.292,95.781,13.154z" fill="#179BD7"></path><path d="M115.434,13.075h-3.273c-0.281,0-0.52,0.204-0.562,0.481l-0.145,0.916l-0.23-0.332  c-0.709-1.029-2.289-1.373-3.867-1.373c-3.619,0-6.709,2.741-7.311,6.586c-0.312,1.918,0.131,3.752,1.219,5.031  c1,1.176,2.426,1.666,4.125,1.666c2.916,0,4.533-1.875,4.533-1.875l-0.146,0.91c-0.055,0.348,0.213,0.66,0.564,0.66h2.949  c0.467,0,0.865-0.34,0.938-0.803l1.771-11.209C116.053,13.388,115.785,13.075,115.434,13.075z M110.869,19.449  c-0.314,1.871-1.801,3.127-3.695,3.127c-0.949,0-1.711-0.305-2.199-0.883c-0.484-0.574-0.666-1.391-0.514-2.301  c0.297-1.855,1.805-3.152,3.67-3.152c0.93,0,1.686,0.309,2.184,0.892C110.816,17.721,111.014,18.543,110.869,19.449z" fill="#179BD7"></path><path d="M119.295,7.23l-2.807,17.858c-0.055,0.346,0.213,0.658,0.562,0.658h2.822c0.469,0,0.867-0.34,0.939-0.803  l2.768-17.536c0.055-0.346-0.213-0.659-0.562-0.659h-3.16C119.578,6.749,119.338,6.953,119.295,7.23z" fill="#179BD7"></path><path d="M7.266,29.154l0.523-3.322l-1.165-0.027H1.061L4.927,1.292C4.939,1.218,4.978,1.149,5.035,1.1  c0.057-0.049,0.13-0.076,0.206-0.076h9.38c3.114,0,5.263,0.648,6.385,1.927c0.526,0.6,0.861,1.227,1.023,1.917  c0.17,0.724,0.173,1.589,0.007,2.644l-0.012,0.077v0.676l0.526,0.298c0.443,0.235,0.795,0.504,1.065,0.812  c0.45,0.513,0.741,1.165,0.864,1.938c0.127,0.795,0.085,1.741-0.123,2.812c-0.24,1.232-0.628,2.305-1.152,3.183  c-0.482,0.809-1.096,1.48-1.825,2c-0.696,0.494-1.523,0.869-2.458,1.109c-0.906,0.236-1.939,0.355-3.072,0.355h-0.73  c-0.522,0-1.029,0.188-1.427,0.525c-0.399,0.344-0.663,0.814-0.744,1.328l-0.055,0.299l-0.924,5.855l-0.042,0.215  c-0.011,0.068-0.03,0.102-0.058,0.125c-0.025,0.021-0.061,0.035-0.096,0.035H7.266z" fill="#253B80"></path><path d="M23.048,7.667L23.048,7.667L23.048,7.667c-0.028,0.179-0.06,0.362-0.096,0.55  c-1.237,6.351-5.469,8.545-10.874,8.545H9.326c-0.661,0-1.218,0.48-1.321,1.132l0,0l0,0L6.596,26.83l-0.399,2.533  c-0.067,0.428,0.263,0.814,0.695,0.814h4.881c0.578,0,1.069-0.42,1.16-0.99l0.048-0.248l0.919-5.832l0.059-0.32  c0.09-0.572,0.582-0.992,1.16-0.992h0.73c4.729,0,8.431-1.92,9.513-7.476c0.452-2.321,0.218-4.259-0.978-5.622  C24.022,8.286,23.573,7.945,23.048,7.667z" fill="#179BD7"></path><path d="M21.754,7.151c-0.189-0.055-0.384-0.105-0.584-0.15c-0.201-0.044-0.407-0.083-0.619-0.117  c-0.742-0.12-1.555-0.177-2.426-0.177h-7.352c-0.181,0-0.353,0.041-0.507,0.115C9.927,6.985,9.675,7.306,9.614,7.699L8.05,17.605  l-0.045,0.289c0.103-0.652,0.66-1.132,1.321-1.132h2.752c5.405,0,9.637-2.195,10.874-8.545c0.037-0.188,0.068-0.371,0.096-0.55  c-0.313-0.166-0.652-0.308-1.017-0.429C21.941,7.208,21.848,7.179,21.754,7.151z" fill="#222D65"></path><path d="M9.614,7.699c0.061-0.393,0.313-0.714,0.652-0.876c0.155-0.074,0.326-0.115,0.507-0.115h7.352  c0.871,0,1.684,0.057,2.426,0.177c0.212,0.034,0.418,0.073,0.619,0.117c0.2,0.045,0.395,0.095,0.584,0.15  c0.094,0.028,0.187,0.057,0.278,0.086c0.365,0.121,0.704,0.264,1.017,0.429c0.368-2.347-0.003-3.945-1.272-5.392  C20.378,0.682,17.853,0,14.622,0h-9.38c-0.66,0-1.223,0.48-1.325,1.133L0.01,25.898c-0.077,0.49,0.301,0.932,0.795,0.932h5.791  l1.454-9.225L9.614,7.699z" fill="#253B80"></path>
      </svg>
    </button>
    <button name="apple-pay" type="button" title="Apple Pay">
      <!-- Apple Pay SVG -->
      <svg xml:space="preserve" viewBox="0 0 512 210.2" y="0px" x="0px" id="Layer_1" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><path d="M93.6,27.1C87.6,34.2,78,39.8,68.4,39c-1.2-9.6,3.5-19.8,9-26.1c6-7.3,16.5-12.5,25-12.9  C103.4,10,99.5,19.8,93.6,27.1 M102.3,40.9c-13.9-0.8-25.8,7.9-32.4,7.9c-6.7,0-16.8-7.5-27.8-7.3c-14.3,0.2-27.6,8.3-34.9,21.2  c-15,25.8-3.9,64,10.6,85c7.1,10.4,15.6,21.8,26.8,21.4c10.6-0.4,14.8-6.9,27.6-6.9c12.9,0,16.6,6.9,27.8,6.7  c11.6-0.2,18.9-10.4,26-20.8c8.1-11.8,11.4-23.3,11.6-23.9c-0.2-0.2-22.4-8.7-22.6-34.3c-0.2-21.4,17.5-31.6,18.3-32.2  C123.3,42.9,107.7,41.3,102.3,40.9 M182.6,11.9v155.9h24.2v-53.3h33.5c30.6,0,52.1-21,52.1-51.4c0-30.4-21.1-51.2-51.3-51.2H182.6z   M206.8,32.3h27.9c21,0,33,11.2,33,30.9c0,19.7-12,31-33.1,31h-27.8V32.3z M336.6,169c15.2,0,29.3-7.7,35.7-19.9h0.5v18.7h22.4V90.2  c0-22.5-18-37-45.7-37c-25.7,0-44.7,14.7-45.4,34.9h21.8c1.8-9.6,10.7-15.9,22.9-15.9c14.8,0,23.1,6.9,23.1,19.6v8.6l-30.2,1.8  c-28.1,1.7-43.3,13.2-43.3,33.2C298.4,155.6,314.1,169,336.6,169z M343.1,150.5c-12.9,0-21.1-6.2-21.1-15.7c0-9.8,7.9-15.5,23-16.4  l26.9-1.7v8.8C371.9,140.1,359.5,150.5,343.1,150.5z M425.1,210.2c23.6,0,34.7-9,44.4-36.3L512,54.7h-24.6l-28.5,92.1h-0.5  l-28.5-92.1h-25.3l41,113.5l-2.2,6.9c-3.7,11.7-9.7,16.2-20.4,16.2c-1.9,0-5.6-0.2-7.1-0.4v18.7C417.3,210,423.3,210.2,425.1,210.2z" id="XMLID_34_"></path></svg>
    </button>
    <button name="google-pay" type="button" title="Google Pay">
      <!-- Google Pay SVG -->
      <svg fill="none" viewBox="0 0 80 39" height="39" width="80" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_134_34)"><path fill="#5F6368" d="M37.8 19.7V29H34.8V6H42.6C44.5 6 46.3001 6.7 47.7001 8C49.1001 9.2 49.8 11 49.8 12.9C49.8 14.8 49.1001 16.5 47.7001 17.8C46.3001 19.1 44.6 19.8 42.6 19.8L37.8 19.7ZM37.8 8.8V16.8H42.8C43.9 16.8 45.0001 16.4 45.7001 15.6C47.3001 14.1 47.3 11.6 45.8 10.1L45.7001 10C44.9001 9.2 43.9 8.7 42.8 8.8H37.8Z"></path><path fill="#5F6368" d="M56.7001 12.8C58.9001 12.8 60.6001 13.4 61.9001 14.6C63.2001 15.8 63.8 17.4 63.8 19.4V29H61V26.8H60.9001C59.7001 28.6 58 29.5 56 29.5C54.3 29.5 52.8 29 51.6 28C50.5 27 49.8 25.6 49.8 24.1C49.8 22.5 50.4 21.2 51.6 20.2C52.8 19.2 54.5 18.8 56.5 18.8C58.3 18.8 59.7 19.1 60.8 19.8V19.1C60.8 18.1 60.4 17.1 59.6 16.5C58.8 15.8 57.8001 15.4 56.7001 15.4C55.0001 15.4 53.7 16.1 52.8 17.5L50.2001 15.9C51.8001 13.8 53.9001 12.8 56.7001 12.8ZM52.9001 24.2C52.9001 25 53.3001 25.7 53.9001 26.1C54.6001 26.6 55.4001 26.9 56.2001 26.9C57.4001 26.9 58.6 26.4 59.5 25.5C60.5 24.6 61 23.5 61 22.3C60.1 21.6 58.8 21.2 57.1 21.2C55.9 21.2 54.9 21.5 54.1 22.1C53.3 22.6 52.9001 23.3 52.9001 24.2Z"></path><path fill="#5F6368" d="M80 13.3L70.1 36H67.1L70.8 28.1L64.3 13.4H67.5L72.2 24.7H72.3L76.9 13.4H80V13.3Z"></path><path fill="#4285F4" d="M25.9 17.7C25.9 16.8 25.8 15.9 25.7 15H13.2V20.1H20.3C20 21.7 19.1 23.2 17.7 24.1V27.4H22C24.5 25.1 25.9 21.7 25.9 17.7Z"></path><path fill="#34A853" d="M13.1999 30.5999C16.7999 30.5999 19.7999 29.3999 21.9999 27.3999L17.6999 24.0999C16.4999 24.8999 14.9999 25.3999 13.1999 25.3999C9.7999 25.3999 6.7999 23.0999 5.7999 19.8999H1.3999V23.2999C3.6999 27.7999 8.1999 30.5999 13.1999 30.5999Z"></path><path fill="#FBBC04" d="M5.8001 19.8999C5.2001 18.2999 5.2001 16.4999 5.8001 14.7999V11.3999H1.4001C-0.499902 15.0999 -0.499902 19.4999 1.4001 23.2999L5.8001 19.8999Z"></path><path fill="#EA4335" d="M13.2 9.39996C15.1 9.39996 16.9 10.1 18.3 11.4L22.1 7.59996C19.7 5.39996 16.5 4.09996 13.3 4.19996C8.3 4.19996 3.7 6.99996 1.5 11.5L5.9 14.9C6.8 11.7 9.8 9.39996 13.2 9.39996Z"></path></g><defs><clipPath id="clip0_134_34"><rect fill="white" height="38.1" width="80"></rect></clipPath></defs></svg>
    </button>
    <button name="momo" type="button" title="Mobile Money" onclick="showMomoForm(${product.id})" style="background:#f6f6f6;">
      <img src="mtn-momo-mobile-money-uganda-logo-png_seeklogo-556395.png" alt="MOMO" style="height:22px;vertical-align:middle;">
      <span style="font-size:13px;vertical-align:middle;">MOMO</span>
    </button>
  </div>
  <div class="separator">
    <hr class="line">
    <p>or pay using credit card</p>
    <hr class="line">
  </div>
  <div class="credit-card-info--form">
    <div class="input_container">
      <label class="input_label">Card holder full name</label>
      <input class="input_field" type="text" name="input-name" title="Input title" placeholder="Enter your full name" required>
    </div>
    <div class="input_container">
      <label class="input_label">Card Number</label>
      <input class="input_field" type="number" name="input-card" title="Input title" placeholder="0000 0000 0000 0000" required>
    </div>
    <div class="input_container">
      <label class="input_label">Expiry Date / CVV</label>
      <div class="split">
        <input class="input_field" type="text" name="input-expiry" title="Expiry Date" placeholder="01/23" required>
        <input class="input_field" type="number" name="cvv" title="CVV" placeholder="CVV" required>
      </div>
    </div>
  </div>
  <button class="purchase--btn" type="submit">Checkout</button>
  <button type="button" style="margin-top:10px;background:#e74c3c;color:#fff;border:none;border-radius:8px;padding:10px 18px;cursor:pointer;" onclick="document.body.removeChild(this.closest('.modal'));">Close</button>
</form>
        `;
        document.body.appendChild(modal);
    }
}

// MOMO payment form
function showMomoForm(productId) {
    const product = products.find(p => p.id === productId);
    const oldModal = document.querySelector('.modal');
    if (oldModal) oldModal.remove();

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
    <form class="form" onsubmit="return handleMomoCheckout(event, ${product.id})">
      <h3 style="text-align:center;">Mobile Money Payment</h3>
      <div class="input_container">
        <label class="input_label">MOMO Number</label>
        <input class="input_field" type="tel" name="momo-number" pattern="\\d{10,13}" placeholder="Enter MOMO number" required>
      </div>
      <div class="input_container">
        <label class="input_label">Account Name</label>
        <input class="input_field" type="text" name="momo-name" placeholder="Account Name" required>
      </div>
      <button class="purchase--btn" type="submit">Pay Now</button>
      <button type="button" style="margin-top:10px;background:#e74c3c;color:#fff;border:none;border-radius:8px;padding:10px 18px;cursor:pointer;" onclick="document.body.removeChild(this.closest('.modal'));">Cancel</button>
    </form>
    `;
    document.body.appendChild(modal);
}

// Handle MOMO checkout
function handleMomoCheckout(event, productId) {
    event.preventDefault();
    showCartPopupFeedback("✅ MOMO Payment successful!");
    setTimeout(() => {
        const modal = document.querySelector('.modal');
        if (modal) document.body.removeChild(modal);
    }, 1600);
    return false;
}

// --- Wishlist Logic ---

function updateWishlistCount() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistCount = document.querySelector('.wishlist-count');
    if (wishlistCount) wishlistCount.textContent = wishlist.length;
}

// Show Wishlist Portal
function showWishlistPortal() {
    renderWishlist();
    document.getElementById('wishlist-portal').classList.add('active');
}

// Close Wishlist Portal
function closeWishlistPortal() {
    document.getElementById('wishlist-portal').classList.remove('active');
}

// Render Wishlist Items
function renderWishlist() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistItemsDiv = document.getElementById('wishlist-items');
    if (!wishlistItemsDiv) return;
    if (wishlist.length === 0) {
        wishlistItemsDiv.innerHTML = "<p>Your wishlist is empty.</p>";
        return;
    }
    wishlistItemsDiv.innerHTML = wishlist.map(id => {
        const product = products.find(p => p.id === id);
        if (!product) return '';
        return `
            <div class="wishlist-item">
                <img src="${product.image}" alt="${product.name}">
                <div class="wishlist-item-details">
                    <h4>${product.name}</h4>
                    <p>${product.price}</p>
                </div>
                <div class="wishlist-item-actions">
                    <button class="add-to-cart-btn" onclick="addToCartFromWishlist(${product.id})"><i class="fas fa-cart-plus"></i> Add to Cart</button>
                    <button class="remove-wishlist-btn" onclick="removeFromWishlist(${product.id})"><i class="fas fa-trash"></i> Remove</button>
                </div>
            </div>
        `;
    }).join('');
}

// Add to Wishlist
function addToWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistCount();
        showCartPopupFeedback("❤️ Added to wishlist!");
        showWishlistPortal();
    } else {
        showWishlistPortal();
    }
}

// Remove from Wishlist
function removeFromWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(id => id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    renderWishlist();
}

// Add to Cart from Wishlist
function addToCartFromWishlist(productId) {
    addToCart(productId);
    removeFromWishlist(productId);
    showCartPopupFeedback("✅ Moved to cart!");
}

// --- Cart Logic ---

function showCartPortal() {
    renderCartPortal();
    document.getElementById('cart-portal').classList.add('active');
}
function closeCartPortal() {
    document.getElementById('cart-portal').classList.remove('active');
}
function renderCartPortal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsDiv = document.getElementById('cart-portal-items');
    const totalSpan = document.getElementById('cart-portal-total');
    if (!cartItemsDiv || !totalSpan) return;
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
        totalSpan.textContent = "₵0.00";
        return;
    }
    let total = 0;
    cartItemsDiv.innerHTML = cart.map(item => {
        const price = parseFloat(item.price.replace(/[^\d.]/g, '')) || 0;
        total += price * item.quantity;
        return `
            <div class="cart-portal-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-portal-item-details">
                    <h4>${item.name}</h4>
                    <p>${item.price}</p>
                    <div>
                        <button onclick="changeCartQuantity(${item.id}, -1)">-</button>
                        <span style="margin:0 8px;">${item.quantity}</span>
                        <button onclick="changeCartQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <div class="cart-portal-item-actions">
                    <button onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
    }).join('');
    totalSpan.textContent = `₵${total.toLocaleString(undefined, {minimumFractionDigits:2})}`;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showCartPopupFeedback(`✅ ${product.name} added to cart!`);
        showCartPortal();
    }
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartPortal();
    showCartPopupFeedback("❌ Product removed from cart!");
}

function changeCartQuantity(productId, delta) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCartPortal();
    }
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
}

// --- Feedback Popup ---
function showCartPopupFeedback(message) {
    const popup = document.getElementById('cartPopupFeedback');
    if (!popup) return;
    popup.querySelector('span:last-child').textContent = message;
    popup.style.display = 'flex';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 1500);
}

// --- On page load, update counts ---
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateWishlistCount();
});
    