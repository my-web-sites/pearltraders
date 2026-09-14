// Sample Product Data
const productData = {
    electronics: {
        name: 'Electronics',
        icon: '📱',
        products: [
            {
                id: 1,
                name: 'Wireless Headphones',
                price: 79.99,
                image: 'https://via.placeholder.com/300x300?text=Wireless+Headphones',
                description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
                details: {
                    'Brand': 'AudioPro',
                    'Color': 'Black',
                    'Battery Life': '30 hours',
                    'Connectivity': 'Bluetooth 5.0',
                    'Warranty': '2 years'
                },
                rating: 4.5
            },
            {
                id: 2,
                name: 'USB-C Charging Cable',
                price: 12.99,
                image: 'https://via.placeholder.com/300x300?text=USB-C+Cable',
                description: 'Fast charging USB-C cable with reinforced connectors for durability.',
                details: {
                    'Length': '2 meters',
                    'Material': 'Premium Nylon',
                    'Compatibility': 'Universal USB-C',
                    'Max Speed': '100W',
                    'Warranty': '1 year'
                },
                rating: 4.3
            },
            {
                id: 3,
                name: 'Portable Power Bank',
                price: 49.99,
                image: 'https://via.placeholder.com/300x300?text=Power+Bank',
                description: 'High-capacity power bank with dual USB ports and fast charging technology.',
                details: {
                    'Capacity': '20000mAh',
                    'Output': 'Dual USB',
                    'Weight': '400g',
                    'Charging Time': '3 hours',
                    'Warranty': '18 months'
                },
                rating: 4.7
            },
            /*{
                id: 4,
                name: 'Smart Watch',
                price: 199.99,
                image: 'https://via.placeholder.com/300x300?text=Smart+Watch',
                description: 'Feature-rich smartwatch with fitness tracking and heart rate monitoring.',
                details: {
                    'Display': '1.4 inch AMOLED',
                    'Water Resistance': '5ATM',
                    'Battery': '7 days',
                    'Sensors': 'HR, Steps, Sleep',
                    'Warranty': '1 year'
                },
                rating: 4.6
            }*/
        ]
    },
    fashion: {
        name: 'Fashion',
        icon: '👔',
        products: [
            {
                id: 5,
                name: 'Cotton T-Shirt',
                price: 29.99,
                image: 'https://via.placeholder.com/300x300?text=Cotton+T-Shirt',
                description: 'Comfortable 100% cotton t-shirt available in multiple colors.',
                details: {
                    'Material': '100% Cotton',
                    'Sizes': 'XS to XL',
                    'Colors': '8 colors',
                    'Care': 'Machine wash',
                    'Warranty': 'Lifetime defect'
                },
                rating: 4.4
            },
            {
                id: 6,
                name: 'Denim Jeans',
                price: 59.99,
                image: 'https://via.placeholder.com/300x300?text=Denim+Jeans',
                description: 'Classic fit denim jeans with premium quality fabric.',
                details: {
                    'Material': 'Premium Denim',
                    'Sizes': '28 to 40',
                    'Fit': 'Classic',
                    'Inseam': 'Multiple options',
                    'Warranty': 'Lifetime defect'
                },
                rating: 4.5
            },
            {
                id: 7,
                name: 'Sports Running Shoes',
                price: 89.99,
                image: 'https://via.placeholder.com/300x300?text=Running+Shoes',
                description: 'Lightweight running shoes with advanced cushioning technology.',
                details: {
                    'Type': 'Running Shoes',
                    'Weight': '280g per shoe',
                    'Cushioning': 'Memory foam',
                    'Sizes': '5 to 15',
                    'Warranty': '1 year'
                },
                rating: 4.6
            },
            /*{
                id: 8,
                name: 'Casual Hoodie',
                price: 54.99,
                image: 'https://via.placeholder.com/300x300?text=Casual+Hoodie',
                description: 'Cozy hoodie perfect for casual wear in all seasons.',
                details: {
                    'Material': 'Cotton-Polyester blend',
                    'Sizes': 'XS to XXL',
                    'Colors': '12 colors',
                    'Pockets': '2 front pockets',
                    'Warranty': 'Lifetime defect'
                },
                rating: 4.7
            }*/
        ]
    },
    home: {
        name: 'Home & Living',
        icon: '🏠',
        products: [
            {
                id: 9,
                name: 'LED Desk Lamp',
                price: 34.99,
                image: 'https://via.placeholder.com/300x300?text=LED+Desk+Lamp',
                description: 'Energy-efficient LED desk lamp with adjustable brightness.',
                details: {
                    'Type': 'LED Lamp',
                    'Power': '12W',
                    'Brightness': 'Adjustable',
                    'Color': 'White',
                    'Warranty': '2 years'
                },
                rating: 4.4
            },
            {
                id: 10,
                name: 'Memory Foam Pillow',
                price: 44.99,
                image: 'https://via.placeholder.com/300x300?text=Memory+Foam+Pillow',
                description: 'Orthopedic memory foam pillow for better sleep support.',
                details: {
                    'Material': 'Memory Foam',
                    'Size': 'Standard',
                    'Height': '4 inches',
                    'Cover': 'Removable',
                    'Warranty': '1 year'
                },
                rating: 4.6
            },
            {
                id: 11,
                name: 'Stainless Steel Water Bottle',
                price: 24.99,
                image: 'https://via.placeholder.com/300x300?text=Water+Bottle',
                description: 'Double-wall insulated stainless steel water bottle keeps drinks cold for 24 hours.',
                details: {
                    'Material': 'Stainless Steel',
                    'Capacity': '750ml',
                    'Insulation': '24 hours',
                    'Colors': '10 colors',
                    'Warranty': 'Lifetime'
                },
                rating: 4.8
            },
            /*{
                id: 12,
                name: 'Bamboo Cutting Board',
                price: 19.99,
                image: 'https://via.placeholder.com/300x300?text=Cutting+Board',
                description: 'Eco-friendly bamboo cutting board with built-in juice groove.',
                details: {
                    'Material': 'Bamboo',
                    'Size': '15x10 inches',
                    'Features': 'Juice groove',
                    'Care': 'Hand wash',
                    'Warranty': '1 year'
                },
                rating: 4.5
            }*/
        ]
    },
    books: {
        name: 'Books',
        icon: '📚',
        products: [
            {
                id: 13,
                name: 'The Art of Programming',
                price: 39.99,
                image: 'https://via.placeholder.com/300x300?text=Programming+Book',
                description: 'Comprehensive guide to modern programming concepts and practices.',
                details: {
                    'Author': 'John Smith',
                    'Pages': '450',
                    'Language': 'English',
                    'Year': '2023',
                    'Warranty': 'Lifetime'
                },
                rating: 4.7
            },
            {
                id: 14,
                name: 'Mindfulness & Well-being',
                price: 24.99,
                image: 'https://via.placeholder.com/300x300?text=Wellness+Book',
                description: 'Practical guide to achieving mindfulness and improving mental health.',
                details: {
                    'Author': 'Dr. Sarah Johnson',
                    'Pages': '320',
                    'Language': 'English',
                    'Year': '2024',
                    'Warranty': 'Lifetime'
                },
                rating: 4.6
            },
            {
                id: 15,
                name: 'The Science of Everything',
                price: 49.99,
                image: 'https://via.placeholder.com/300x300?text=Science+Book',
                description: 'Fascinating exploration of scientific discoveries and phenomena.',
                details: {
                    'Author': 'Prof. Michael Brown',
                    'Pages': '550',
                    'Language': 'English',
                    'Year': '2023',
                    'Warranty': 'Lifetime'
                },
                rating: 4.8
            },
            /*{
                id: 16,
                name: 'Creative Writing Workshop',
                price: 34.99,
                image: 'https://via.placeholder.com/300x300?text=Writing+Book',
                description: 'Step-by-step guide to improving your creative writing skills.',
                details: {
                    'Author': 'Emily Davis',
                    'Pages': '380',
                    'Language': 'English',
                    'Year': '2024',
                    'Warranty': 'Lifetime'
                },
                rating: 4.5
            }*/
        ]
    },
    /*sports: {
        name: 'Sports & Outdoors',
        icon: '⚽',
        products: [
            {
                id: 17,
                name: 'Yoga Mat',
                price: 29.99,
                image: 'https://via.placeholder.com/300x300?text=Yoga+Mat',
                description: 'Non-slip yoga mat with carrying strap, perfect for home or gym.',
                details: {
                    'Material': 'TPE Rubber',
                    'Size': '72x24 inches',
                    'Thickness': '6mm',
                    'Color': 'Purple',
                    'Warranty': '1 year'
                },
                rating: 4.6
            },
            {
                id: 18,
                name: 'Dumbbells Set',
                price: 89.99,
                image: 'https://via.placeholder.com/300x300?text=Dumbbells',
                description: 'Adjustable dumbbells set for versatile home workouts.',
                details: {
                    'Weight': '5-25 lbs',
                    'Pairs': '2 dumbbells',
                    'Material': 'Cast iron',
                    'Colors': 'Black',
                    'Warranty': '2 years'
                },
                rating: 4.7
            },
            {
                id: 19,
                name: 'Tennis Racket',
                price: 119.99,
                image: 'https://via.placeholder.com/300x300?text=Tennis+Racket',
                description: 'Professional-grade tennis racket with lightweight aluminum frame.',
                details: {
                    'Type': 'Tennis Racket',
                    'Frame': 'Aluminum',
                    'Weight': '300g',
                    'Grip': 'Comfortable',
                    'Warranty': '1 year'
                },
                rating: 4.5
            },
            {
                id: 20,
                name: 'Hiking Backpack',
                price: 99.99,
                image: 'https://via.placeholder.com/300x300?text=Hiking+Backpack',
                description: 'Durable 60L hiking backpack with ergonomic design and multiple compartments.',
                details: {
                    'Capacity': '60 liters',
                    'Material': 'Nylon',
                    'Color': 'Blue',
                    'Pockets': '8 compartments',
                    'Warranty': '2 years'
                },
                rating: 4.8
            }
        ]
    }*/
};

// State management
let currentView = 'categories';
let selectedCategory = null;
let selectedProduct = null;
let cart = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadCategories();
});

// Load and display categories
function loadCategories() {
    const container = $('#categoriesContainer');
    container.empty();

    $.each(productData, function(key, category) {
        const categoryCard = `
            <div class="col-md-6 col-lg-3 mb-4">
                <div class="category-card" onclick="selectCategory('${key}')">
                    <!-- <img src="https://via.placeholder.com/300x200?text=${encodeURIComponent(category.name)}" alt="${category.name}" class="category-card-img">-->
                    <div class="category-card-body">
                        <div class="category-card-title">${category.icon} ${category.name}</div>
                        <div class="category-card-count">${category.products.length} products</div>
                    </div>
                </div>
            </div>
        `;
        container.append(categoryCard);
    });

    currentView = 'categories';
    $('#categoriesContainer').parent().parent().show();
    $('#backButtonContainer').hide();
    $('#productsListView').hide();
    $('#productDetailView').hide();
}

// Select a category and show products
function selectCategory(categoryKey) {
    selectedCategory = categoryKey;
    const category = productData[categoryKey];

    // Update the selected category name
    $('#selectedCategoryName').text(`${category.icon} ${category.name}`);

    // Clear and populate products
    const productsContainer = $('#productsContainer');
    productsContainer.empty();

    $.each(category.products, function(index, product) {
        const ratingStars = generateStars(product.rating);
        const productCard = `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="product-card" onclick1="selectProduct(${product.id})">
                    <!--<img src="${product.image}" alt="${product.name}" class="product-card-img">-->
                    <div class="product-card-body">
                        <div class="product-card-title">${product.name}</div>
                        <div class="product-card-price">$${product.price.toFixed(2)}</div>
                        <div class="product-card-rating">${ratingStars} (${product.rating})</div>
                        <div class="product-card-desc">${product.description}</div>
                        <!--<button class="product-view-btn" onclick="event.stopPropagation(); selectProduct(${product.id})">
                            <i class="fas fa-eye me-2"></i>View Details
                        </button>-->
                    </div>
                </div>
            </div>
        `;
        productsContainer.append(productCard);
    });

    // Update view
    currentView = 'products-list';
    $('#categoriesContainer').parent().parent().hide();
    $('#backButtonContainer').show();
    $('#productsListView').show();
    $('#productDetailView').hide();

    // Scroll to products section
    $('html, body').animate({
        scrollTop: $('#products').offset().top
    }, 0);
}

// Select a product and show details
function selectProduct(productId) {
    const category = productData[selectedCategory];
    selectedProduct = category.products.find(p => p.id === productId);

    if (!selectedProduct) return;

    // Populate product details
    $('#productDetailName').text(selectedProduct.name);
    $('#productDetailImage').attr('src', selectedProduct.image).attr('alt', selectedProduct.name);
    $('#productDetailPrice').text(`$${selectedProduct.price.toFixed(2)}`);
    $('#productDetailDescription').text(selectedProduct.description);

    // Populate product details list
    const detailsList = $('#productDetailsList');
    detailsList.empty();

    $.each(selectedProduct.details, function(key, value) {
        const listItem = `<li><strong>${key}:</strong> ${value}</li>`;
        detailsList.append(listItem);
    });

    // Update view
    currentView = 'product-detail';
    $('#backButtonContainer').show();
    $('#productsListView').hide();
    $('#productDetailView').show();

    // Scroll to product details
    $('html, body').animate({
        scrollTop: $('#products').offset().top
    }, 0);
}

// Go back to categories
function goBackToCategories() {
    selectedCategory = null;
    selectedProduct = null;
    loadCategories();
    $('html, body').animate({
        scrollTop: $('#categories').offset().top
    }, 0);
}

// Go back to products list
function goBackToProducts() {
    selectedProduct = null;
    selectCategory(selectedCategory);
}

// Add to cart
function addToCart() {
    if (selectedProduct) {
        cart.push(selectedProduct);
        showNotification(`${selectedProduct.name} added to cart!`);
    }
}

// Show notification
function showNotification(message) {
    const notification = $(`
        <div class="alert alert-success alert-dismissible fade show position-fixed" role="alert" style="top: 20px; right: 20px; z-index: 9999; min-width: 300px;">
            <i class="fas fa-check-circle me-2"></i>${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `);

    $('body').append(notification);

    setTimeout(function() {
        notification.remove();
    }, 3000);
}

// Generate star rating display
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star" style="color: #f39c12;"></i>';
    }

    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt" style="color: #f39c12;"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star" style="color: #f39c12;"></i>';
    }

    return stars;
}

// Scroll to categories
function scrollToCategories() {
    $('html, body').animate({
        scrollTop: $('#categories').offset().top
    }, 0);
}