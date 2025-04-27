document.addEventListener('DOMContentLoaded', function() {
    // Product data (sample data with more than 10 products)
    const products = [
        {
            id: 1,
            name: 'Wireless Headphones',
            price: 7999,
            description: 'Noise-cancelling over-ear headphones.',
            image: 'https://via.placeholder.com/100x100?text=Headphones'
        },
        {
            id: 2,
            name: 'Smartwatch',
            price: 12999,
            description: 'Fitness tracking smartwatch.',
            image: 'https://via.placeholder.com/100x100?text=Smartwatch'
        },
        {
            id: 3,
            name: 'Gaming Mouse',
            price: 2499,
            description: 'Ergonomic gaming mouse.',
            image: 'https://via.placeholder.com/100x100?text=Mouse'
        },
        {
            id: 4,
            name: 'Laptop Stand',
            price: 1999,
            description: 'Adjustable aluminium stand.',
            image: 'https://via.placeholder.com/100x100?text=LaptopStand'
        },
        {
            id: 5,
            name: 'Bluetooth Speaker',
            price: 3499,
            description: 'Portable waterproof speaker.',
            image: 'https://via.placeholder.com/100x100?text=Speaker'
        },
        {
            id: 6,
            name: 'Mechanical Keyboard',
            price: 5999,
            description: 'RGB mechanical gaming keyboard.',
            image: 'https://via.placeholder.com/100x100?text=Keyboard'
        },
        {
            id: 7,
            name: 'External SSD',
            price: 8499,
            description: '1TB external solid state drive.',
            image: 'https://via.placeholder.com/100x100?text=SSD'
        },
        {
            id: 8,
            name: 'Webcam',
            price: 4999,
            description: '1080p HD webcam with microphone.',
            image: 'https://via.placeholder.com/100x100?text=Webcam'
        },
        {
            id: 9,
            name: 'Graphic Tablet',
            price: 6499,
            description: 'Digital drawing tablet for designers.',
            image: 'https://via.placeholder.com/100x100?text=Tablet'
        },
        {
            id: 10,
            name: 'USB-C Hub',
            price: 2999,
            description: 'Multi-port USB-C adapter.',
            image: 'https://via.placeholder.com/100x100?text=USBHub'
        },
        {
            id: 11,
            name: 'Wireless Charger',
            price: 1499,
            description: 'Fast wireless charging pad.',
            image: 'https://via.placeholder.com/100x100?text=Charger'
        },
        {
            id: 12,
            name: 'Monitor',
            price: 15999,
            description: '27-inch 4K IPS monitor.',
            image: 'https://via.placeholder.com/100x100?text=Monitor'
        },
        {
            id: 13,
            name: 'Phone Case',
            price: 999,
            description: 'Protective smartphone case.',
            image: 'https://via.placeholder.com/100x100?text=PhoneCase'
        },
        {
            id: 14,
            name: 'Power Bank',
            price: 1799,
            description: '20000mAh portable charger.',
            image: 'https://via.placeholder.com/100x100?text=PowerBank'
        },
        {
            id: 15,
            name: 'Wireless Earbuds',
            price: 4999,
            description: 'True wireless earbuds with case.',
            image: 'https://via.placeholder.com/100x100?text=Earbuds'
        }
    ];

    // Pagination settings
    const productsPerPage = 5;
    let currentPage = 1;
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Function to display products for the current page
    function displayProducts(page) {
        const tableBody = document.getElementById('productTableBody');
        tableBody.innerHTML = ''; // Clear existing content
        
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = Math.min(startIndex + productsPerPage, products.length);
        
        for (let i = startIndex; i < endIndex; i++) {
            const product = products[i];
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${product.image}" alt="${product.name}" class="product-image"></td>
                <td>${product.name}</td>
                <td>₹${product.price}</td>
                <td>${product.description}</td>
            `;
            
            tableBody.appendChild(row);
        }
        
        // Update pagination display
        updatePagination(page);
    }

    // Function to update pagination controls
    function updatePagination(page) {
        const paginationElement = document.getElementById('pagination');
        paginationElement.innerHTML = '';
        
        // Previous button
        const prevButton = document.createElement('button');
        prevButton.textContent = 'Previous';
        prevButton.disabled = page === 1;
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayProducts(currentPage);
            }
        });
        paginationElement.appendChild(prevButton);
        
        // Page info
        const pageInfo = document.createElement('span');
        pageInfo.className = 'page-info';
        pageInfo.textContent = `Page ${page} of ${totalPages}`;
        paginationElement.appendChild(pageInfo);
        
        // Next button
        const nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        nextButton.disabled = page === totalPages;
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                displayProducts(currentPage);
            }
        });
        paginationElement.appendChild(nextButton);
    }

    // Initialize the product display
    displayProducts(currentPage);
});
