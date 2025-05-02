// JavaScript code for product table and pagination
// This code assumes you have a table with id 'product-table' and a tbody with id 'product-table-body'
const products = [
    { image: 'images/headphone.jpg', name: 'Wireless Headphones', price: 7999, description: 'Noise-cancelling over-ear headphones.' },
    { image: 'images/smartwatch.jpg', name: 'Smartwatch', price: 12999, description: 'Fitness tracking smartwatch.' },
    { image: 'images/mouse.jpg', name: 'Gaming Mouse', price: 2499, description: 'Ergonomic gaming mouse.' },
    { image: 'images/stand.jpg', name: 'Laptop Stand', price: 1999, description: 'Adjustable aluminium stand.' },
    { image: 'images/keyboard.jpg', name: 'Mechanical Keyboard', price: 4500, description: 'RGB Backlit Keyboard.' },
    { image: 'images/webcam.jpg', name: 'HD Webcam', price: 3200, description: '1080p webcam with microphone.' },
    { image: 'images/monitor.jpg', name: '24-inch Monitor', price: 15000, description: 'Full HD IPS Monitor.' },
    { image: 'images/ssd.jpg', name: 'External SSD 1TB', price: 8500, description: 'Fast portable storage.' },
    { image: 'images/router.jpg', name: 'WiFi Router', price: 2800, description: 'Dual-band AC1200 router.' },
    { image: 'images/speaker.jpg', name: 'Bluetooth Speaker', price: 3500, description: 'Portable waterproof speaker.' },
    { image: 'images/mic.jpg', name: 'USB Microphone', price: 5500, description: 'Condenser microphone for streaming.' },
    // Add more products if needed...
];

const productsPerPage = 10;
let currentPage = 1;

const tableBody = document.getElementById('product-table-body');
const paginationControls = document.getElementById('pagination-controls');

function displayProducts(page) {
    tableBody.innerHTML = ''; // Clear previous table rows
    page--; // Adjust page number to be zero-based index

    const start = productsPerPage * page;
    const end = start + productsPerPage;
    const paginatedProducts = products.slice(start, end);

    paginatedProducts.forEach(product => {
        const row = document.createElement('tr');
        const cellImage = document.createElement('td');
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        cellImage.appendChild(img);
        row.appendChild(cellImage);

        const cellName = document.createElement('td');
        // cellName.setAttribute('data-label', 'Name'); // For stacked layout
        cellName.textContent = product.name;
        row.appendChild(cellName);

        const cellPrice = document.createElement('td');
        // cellPrice.setAttribute('data-label', 'Price'); // For stacked layout
        cellPrice.textContent = `₹${product.price.toLocaleString('en-IN')}`;
        row.appendChild(cellPrice);

        const cellDesc = document.createElement('td');
        // cellDesc.setAttribute('data-label', 'Description'); // For stacked layout
        cellDesc.textContent = product.description;
        row.appendChild(cellDesc);

        tableBody.appendChild(row);
    });
}

function setupPagination() {
    paginationControls.innerHTML = ''; // Clear previous controls
    const pageCount = Math.ceil(products.length / productsPerPage);

    if (pageCount <= 1) return; // No pagination needed if 1 page or less

    // Previous Button
    const prevButton = document.createElement('button');
    prevButton.textContent = '← Previous';
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayProducts(currentPage);
            updatePaginationButtons();
        }
    });
    paginationControls.appendChild(prevButton);
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next →';
    nextButton.addEventListener('click', () => {
        if (currentPage < pageCount) {
            currentPage++;
            displayProducts(currentPage);
            updatePaginationButtons();
        }
    });
    paginationControls.appendChild(nextButton);

    updatePaginationButtons(); // Initial button state
}

function updatePaginationButtons() {
    
}

// Initial Load
displayProducts(currentPage);
if (products.length > productsPerPage) {
    setupPagination();
}