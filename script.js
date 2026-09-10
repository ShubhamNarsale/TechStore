/* =====================================================
   TECHSTORE
   STEP 2 - PRODUCT SYSTEM
   ===================================================== */


/* =====================================================
   PRODUCT DATABASE
   ===================================================== */

const products = [

    /* ================= LAPTOPS ================= */

    {
        id: 101,
        name: "HP Pavilion 15",
        brand: "HP",
        category: "laptop",
        price: 59999,
        originalPrice: 69999,
        rating: 4.6,
        reviewCount: 124,
        icon: "💻",
        processor: "Intel Core i5",
        ram: "16GB",
        storage: "512GB SSD",
        graphics: "Intel Iris Xe"
    },

    {
        id: 102,
        name: "Dell Inspiron 15",
        brand: "Dell",
        category: "laptop",
        price: 62999,
        originalPrice: 72999,
        rating: 4.5,
        reviewCount: 98,
        icon: "💻",
        processor: "Intel Core i5",
        ram: "16GB",
        storage: "512GB SSD",
        graphics: "Intel Iris Xe"
    },

    {
        id: 103,
        name: "Lenovo IdeaPad Slim 3",
        brand: "Lenovo",
        category: "laptop",
        price: 48999,
        originalPrice: 61999,
        rating: 4.4,
        reviewCount: 87,
        icon: "💻",
        processor: "AMD Ryzen 5",
        ram: "16GB",
        storage: "512GB SSD",
        graphics: "AMD Radeon"
    },

    {
        id: 104,
        name: "HP 15s Laptop",
        brand: "HP",
        category: "laptop",
        price: 44999,
        originalPrice: 52999,
        rating: 4.3,
        reviewCount: 65,
        icon: "💻",
        processor: "Intel Core i3",
        ram: "8GB",
        storage: "512GB SSD",
        graphics: "Intel UHD"
    },

    {
        id: 105,
        name: "Dell Vostro 3520",
        brand: "Dell",
        category: "laptop",
        price: 55999,
        originalPrice: 64999,
        rating: 4.5,
        reviewCount: 73,
        icon: "💻",
        processor: "Intel Core i5",
        ram: "16GB",
        storage: "512GB SSD",
        graphics: "Intel Iris Xe"
    },

    {
        id: 106,
        name: "Lenovo ThinkBook 15",
        brand: "Lenovo",
        category: "laptop",
        price: 67999,
        originalPrice: 77999,
        rating: 4.7,
        reviewCount: 54,
        icon: "💻",
        processor: "Intel Core i7",
        ram: "16GB",
        storage: "512GB SSD",
        graphics: "Intel Iris Xe"
    },

    {
        id: 107,
        name: "ASUS VivoBook 15",
        brand: "ASUS",
        category: "laptop",
        price: 52999,
        originalPrice: 61999,
        rating: 4.4,
        reviewCount: 91,
        icon: "💻",
        processor: "AMD Ryzen 5",
        ram: "16GB",
        storage: "512GB SSD",
        graphics: "AMD Radeon"
    },

    {
        id: 108,
        name: "Acer Aspire 5",
        brand: "Acer",
        category: "laptop",
        price: 49999,
        originalPrice: 58999,
        rating: 4.3,
        reviewCount: 82,
        icon: "💻",
        processor: "Intel Core i5",
        ram: "16GB",
        storage: "512GB SSD",
        graphics: "Intel Iris Xe"
    },

    {
        id: 109,
        name: "ASUS Vivobook S14",
        brand: "ASUS",
        category: "laptop",
        price: 71999,
        originalPrice: 82999,
        rating: 4.7,
        reviewCount: 62,
        icon: "💻",
        processor: "Intel Core i7",
        ram: "16GB",
        storage: "1TB SSD",
        graphics: "Intel Iris Xe"
    },

    {
        id: 110,
        name: "Acer Aspire 7",
        brand: "Acer",
        category: "laptop",
        price: 64999,
        originalPrice: 74999,
        rating: 4.5,
        reviewCount: 77,
        icon: "💻",
        processor: "AMD Ryzen 5",
        ram: "16GB",
        storage: "512GB SSD",
        graphics: "NVIDIA GTX"
    },


    /* ================= GAMING LAPTOPS ================= */

    {
        id: 201,
        name: "ASUS TUF Gaming F15",
        brand: "ASUS",
        category: "gaming",
        price: 74999,
        originalPrice: 88999,
        rating: 4.8,
        reviewCount: 198,
        icon: "🎮",
        processor: "Intel Core i5",
        ram: "16GB",
        storage: "512GB SSD",
        graphics: "RTX 3050"
    },

    {
        id: 202,
        name: "Acer Nitro V",
        brand: "Acer",
        category: "gaming",
        price: 69999,
        originalPrice: 92999,
        rating: 4.7,
        reviewCount: 145,
        icon: "🎮",
        processor: "Intel Core i5",
        ram: "16GB",
        storage: "512GB SSD",
        graphics: "RTX 4050"
    },

    {
        id: 203,
        name: "Lenovo LOQ Gaming",
        brand: "Lenovo",
        category: "gaming",
        price: 77999,
        originalPrice: 89999,
        rating: 4.8,
        reviewCount: 134,
        icon: "🎮",
        processor: "Intel Core i5",
        ram: "16GB",
        storage: "1TB SSD",
        graphics: "RTX 4050"
    },

    {
        id: 204,
        name: "HP Victus Gaming",
        brand: "HP",
        category: "gaming",
        price: 72999,
        originalPrice: 84999,
        rating: 4.6,
        reviewCount: 116,
        icon: "🎮",
        processor: "AMD Ryzen 5",
        ram: "16GB",
        storage: "512GB SSD",
        graphics: "RTX 3050"
    },

    {
        id: 205,
        name: "Dell G15 Gaming",
        brand: "Dell",
        category: "gaming",
        price: 84999,
        originalPrice: 94999,
        rating: 4.7,
        reviewCount: 104,
        icon: "🎮",
        processor: "Intel Core i7",
        ram: "16GB",
        storage: "1TB SSD",
        graphics: "RTX 4060"
    },

    {
        id: 206,
        name: "ASUS ROG Strix G16",
        brand: "ASUS",
        category: "gaming",
        price: 119999,
        originalPrice: 139999,
        rating: 4.9,
        reviewCount: 89,
        icon: "🎮",
        processor: "Intel Core i7",
        ram: "16GB",
        storage: "1TB SSD",
        graphics: "RTX 4060"
    },

    {
        id: 207,
        name: "Acer Predator Helios Neo",
        brand: "Acer",
        category: "gaming",
        price: 109999,
        originalPrice: 129999,
        rating: 4.8,
        reviewCount: 71,
        icon: "🎮",
        processor: "Intel Core i7",
        ram: "16GB",
        storage: "1TB SSD",
        graphics: "RTX 4060"
    },


    /* ================= DESKTOPS ================= */

    {
        id: 301,
        name: "HP All-in-One Desktop",
        brand: "HP",
        category: "desktop",
        price: 54999,
        originalPrice: 61999,
        rating: 4.4,
        reviewCount: 76,
        icon: "🖥️",
        processor: "Intel Core i5",
        ram: "16GB",
        storage: "512GB SSD",
        graphics: "Intel UHD"
    },

    {
        id: 302,
        name: "Dell Inspiron Desktop",
        brand: "Dell",
        category: "desktop",
        price: 57999,
        originalPrice: 67999,
        rating: 4.5,
        reviewCount: 68,
        icon: "🖥️",
        processor: "Intel Core i5",
        ram: "16GB",
        storage: "512GB SSD",
        graphics: "Intel UHD"
    },

    {
        id: 303,
        name: "Lenovo IdeaCentre 3",
        brand: "Lenovo",
        category: "desktop",
        price: 45999,
        originalPrice: 53999,
        rating: 4.3,
        reviewCount: 58,
        icon: "🖥️",
        processor: "AMD Ryzen 5",
        ram: "8GB",
        storage: "512GB SSD",
        graphics: "AMD Radeon"
    },

    {
        id: 304,
        name: "HP Pro Tower Desktop",
        brand: "HP",
        category: "desktop",
        price: 69999,
        originalPrice: 79999,
        rating: 4.6,
        reviewCount: 47,
        icon: "🖥️",
        processor: "Intel Core i7",
        ram: "16GB",
        storage: "1TB SSD",
        graphics: "Intel UHD"
    },

    {
        id: 305,
        name: "Dell OptiPlex Desktop",
        brand: "Dell",
        category: "desktop",
        price: 63999,
        originalPrice: 72999,
        rating: 4.5,
        reviewCount: 52,
        icon: "🖥️",
        processor: "Intel Core i5",
        ram: "16GB",
        storage: "512GB SSD",
        graphics: "Intel UHD"
    },

    {
        id: 306,
        name: "Lenovo ThinkCentre",
        brand: "Lenovo",
        category: "desktop",
        price: 59999,
        originalPrice: 69999,
        rating: 4.4,
        reviewCount: 43,
        icon: "🖥️",
        processor: "Intel Core i5",
        ram: "16GB",
        storage: "512GB SSD",
        graphics: "Intel UHD"
    },


    /* ================= ACCESSORIES ================= */

    {
        id: 401,
        name: "Logitech Wireless Keyboard",
        brand: "Logitech",
        category: "accessories",
        price: 1599,
        originalPrice: 1999,
        rating: 4.7,
        reviewCount: 215,
        icon: "⌨️",
        processor: "-",
        ram: "-",
        storage: "-",
        graphics: "-"
    },

    {
        id: 402,
        name: "Logitech Wireless Mouse",
        brand: "Logitech",
        category: "accessories",
        price: 899,
        originalPrice: 1299,
        rating: 4.6,
        reviewCount: 189,
        icon: "🖱️",
        processor: "-",
        ram: "-",
        storage: "-",
        graphics: "-"
    },

    {
        id: 403,
        name: "Logitech Gaming Headset",
        brand: "Logitech",
        category: "accessories",
        price: 3499,
        originalPrice: 4499,
        rating: 4.6,
        reviewCount: 154,
        icon: "🎧",
        processor: "-",
        ram: "-",
        storage: "-",
        graphics: "-"
    },

    {
        id: 404,
        name: "Logitech Mechanical Keyboard",
        brand: "Logitech",
        category: "accessories",
        price: 5999,
        originalPrice: 7499,
        rating: 4.8,
        reviewCount: 132,
        icon: "⌨️",
        processor: "-",
        ram: "-",
        storage: "-",
        graphics: "-"
    },

    {
        id: 405,
        name: "Acer 24-inch Monitor",
        brand: "Acer",
        category: "accessories",
        price: 8999,
        originalPrice: 10999,
        rating: 4.5,
        reviewCount: 94,
        icon: "🖥️",
        processor: "-",
        ram: "-",
        storage: "-",
        graphics: "-"
    },

    {
        id: 406,
        name: "ASUS WiFi Adapter",
        brand: "ASUS",
        category: "accessories",
        price: 1299,
        originalPrice: 1699,
        rating: 4.4,
        reviewCount: 81,
        icon: "📡",
        processor: "-",
        ram: "-",
        storage: "-",
        graphics: "-"
    },

    {
        id: 407,
        name: "Laptop Cooling Pad",
        brand: "ASUS",
        category: "accessories",
        price: 1999,
        originalPrice: 2499,
        rating: 4.3,
        reviewCount: 63,
        icon: "❄️",
        processor: "-",
        ram: "-",
        storage: "-",
        graphics: "-"
    }

];


/* =====================================================
   STATE
   ===================================================== */

let currentPage = 1;

const productsPerPage = 8;

let currentProducts = [...products];

let currentSearch = "";

let selectedCategory = "all";

let selectedPrice = "all";

let selectedRating = "all";

let selectedBrands = [];


/* =====================================================
   FORMAT PRICE
   ===================================================== */

function formatPrice(price) {

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(price);

}


/* =====================================================
   CALCULATE DISCOUNT
   ===================================================== */

function getDiscount(product) {

    return Math.round(
        ((product.originalPrice - product.price) /
        product.originalPrice) * 100
    );

}


/* =====================================================
   CREATE PRODUCT CARD
   ===================================================== */

function createProductCard(product) {

    const discount = getDiscount(product);

    return `

        <article class="product-card">

            <div class="product-image">

                ${
                    discount > 0
                    ?
                    `<span class="product-badge sale">
                        -${discount}%
                    </span>`
                    :
                    ""
                }

                <button
                    class="wishlist-button"
                    data-id="${product.id}"
                    title="Add to wishlist">

                    ♡

                </button>


                <div class="product-placeholder">

                    ${product.icon}

                </div>

            </div>


            <div class="product-info">

                <span class="product-category">

                    ${getCategoryName(product.category)}

                </span>


                <h3>
                    ${product.name}
                </h3>


                <p class="product-brand">

                    ${product.brand}

                </p>


                <div class="rating">

                    ${createStars(product.rating)}

                    <span>
                        (${product.reviewCount})
                    </span>

                </div>


                <div class="product-specs">

                    <span>
                        ${product.processor}
                    </span>

                    <span>
                        ${product.ram}
                    </span>

                    <span>
                        ${product.storage}
                    </span>

                </div>


                <div class="product-bottom">

                    <div>

                        <span class="price">

                            ${formatPrice(product.price)}

                        </span>

                        <span class="old-price">

                            ${formatPrice(product.originalPrice)}

                        </span>

                    </div>


                    <div class="product-card-actions">

                     <a href="product-details.html?id=${product.id}" class="view-details-btn" > View Details </a>

                     <button
                       class="add-cart"
                       data-id="${product.id}"
                       title="Add to cart">
                       🛒
                     </button>

                    </div>
                </div>

            </div>

        </article>

    `;

}


/* =====================================================
   CATEGORY NAME
   ===================================================== */

function getCategoryName(category) {

    const names = {

        laptop: "Laptop",

        gaming: "Gaming Laptop",

        desktop: "Desktop",

        accessories: "Accessories"

    };

    return names[category] || category;

}


/* =====================================================
   STARS
   ===================================================== */

function createStars(rating) {

    let stars = "";

    for (let i = 1; i <= 5; i++) {

        stars +=
            i <= Math.round(rating)
            ? "★"
            : "☆";

    }

    return stars;

}


/* =====================================================
   APPLY FILTERS
   ===================================================== */

function applyFilters() {

    let filtered = [...products];


    /* SEARCH */

    if (currentSearch) {

        const search =
            currentSearch.toLowerCase();

        filtered = filtered.filter(product =>

            product.name.toLowerCase().includes(search) ||

            product.brand.toLowerCase().includes(search) ||

            product.category.toLowerCase().includes(search) ||

            product.processor.toLowerCase().includes(search)

        );

    }


    /* CATEGORY */

    if (selectedCategory !== "all") {

        filtered = filtered.filter(product =>

            product.category === selectedCategory

        );

    }


    /* BRAND */

    if (selectedBrands.length > 0) {

        filtered = filtered.filter(product =>

            selectedBrands.includes(product.brand)

        );

    }


    /* PRICE */

    if (selectedPrice !== "all") {

        const maxPrice =
            Number(selectedPrice);

        filtered = filtered.filter(product =>

            product.price <= maxPrice

        );

    }


    /* RATING */

    if (selectedRating !== "all") {

        const minRating =
            Number(selectedRating);

        filtered = filtered.filter(product =>

            product.rating >= minRating

        );

    }


    currentProducts = filtered;

    currentPage = 1;

    sortProducts();

}


/* =====================================================
   SORT PRODUCTS
   ===================================================== */

function sortProducts() {

    const sortSelect =
        document.getElementById("sortProducts");

    if (!sortSelect) {
        return;
    }

    const sortValue =
        sortSelect.value;


    if (sortValue === "price-low") {

        currentProducts.sort(
            (a, b) => a.price - b.price
        );

    }

    else if (sortValue === "price-high") {

        currentProducts.sort(
            (a, b) => b.price - a.price
        );

    }

    else if (sortValue === "rating") {

        currentProducts.sort(
            (a, b) => b.rating - a.rating
        );

    }

    else if (sortValue === "name") {

        currentProducts.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }

    else if (sortValue === "discount") {

        currentProducts.sort(
            (a, b) =>
                getDiscount(b) -
                getDiscount(a)
        );

    }


    renderProducts();

}


/* =====================================================
   RENDER PRODUCTS
   ===================================================== */

function renderProducts() {

    const grid =
        document.getElementById("productGrid");

    const noResults =
        document.getElementById("noResults");

    const productCount =
        document.getElementById("productCount");

    const showingCount =
        document.getElementById("showingCount");


    if (!grid) {
        return;
    }


    /* UPDATE COUNTS */

    productCount.textContent =
        `${currentProducts.length} products`;


    showingCount.textContent =
        currentProducts.length;


    /* NO RESULTS */

    if (currentProducts.length === 0) {

        grid.innerHTML = "";

        noResults.classList.add("show");

        renderPagination();

        return;

    }


    noResults.classList.remove("show");


    /* PAGINATION */

    const startIndex =
        (currentPage - 1) *
        productsPerPage;

    const endIndex =
        startIndex + productsPerPage;


    const pageProducts =
        currentProducts.slice(
            startIndex,
            endIndex
        );


    grid.innerHTML =
        pageProducts
            .map(createProductCard)
            .join("");


    renderPagination();


    /* PRODUCT BUTTONS */

    addProductButtonEvents();

}


/* =====================================================
   PAGINATION
   ===================================================== */

function renderPagination() {

    const pagination =
        document.getElementById("pagination");

    if (!pagination) {
        return;
    }


    const totalPages =
        Math.ceil(
            currentProducts.length /
            productsPerPage
        );


    if (totalPages <= 1) {

        pagination.innerHTML = "";

        return;

    }


    let html = "";


    /* PREVIOUS */

    html += `

        <button
            class="page-btn"
            data-page="${currentPage - 1}"
            ${currentPage === 1 ? "disabled" : ""}>

            ←

        </button>

    `;


    /* PAGE NUMBERS */

    for (
        let page = 1;
        page <= totalPages;
        page++
    ) {

        html += `

            <button
                class="page-btn
                ${page === currentPage ? "active" : ""}"
                data-page="${page}">

                ${page}

            </button>

        `;

    }


    /* NEXT */

    html += `

        <button
            class="page-btn"
            data-page="${currentPage + 1}"
            ${currentPage === totalPages ? "disabled" : ""}>

            →

        </button>

    `;


    pagination.innerHTML = html;


    document
        .querySelectorAll(".page-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const page =
                        Number(
                            this.dataset.page
                        );

                    if (
                        page >= 1 &&
                        page <= totalPages
                    ) {

                        currentPage = page;

                        renderProducts();

                        window.scrollTo({
                            top: 350,
                            behavior: "smooth"
                        });

                    }

                }
            );

        });

}


/* =====================================================
   PRODUCT BUTTON EVENTS
   ===================================================== */

/* =====================================================
   CART + WISHLIST
   ===================================================== */

/* getCart() and getWishlist() are defined once, in the
   STEP 4 - CART SYSTEM / WISHLIST SYSTEM section below.
   (Duplicate demo versions removed during audit.) */


/* Update Navbar Counters */

function updateNavbarCounts() {

    const cart = getCart();

    const wishlist = getWishlist();

    const compareList = getCompareList();


    const cartCount =
        document.getElementById("cartCount");

    const wishlistCount =
        document.getElementById("wishlistCount");

    const compareCount =
        document.getElementById("compareCount");


    if (cartCount) {

        const totalQuantity =
            cart.reduce(
                (total, item) =>
                    total +
                    Number(item.quantity || 0),
                0
            );

        cartCount.textContent =
            totalQuantity;

    }


    if (wishlistCount) {

        wishlistCount.textContent =
            wishlist.length;

    }


    if (compareCount) {

        compareCount.textContent =
            compareList.length;

    }

}

/* addToCart(), toggleWishlist() and addProductButtonEvents()
   are defined once, in the STEP 4 - CART SYSTEM / WISHLIST
   SYSTEM section below. (Duplicate demo versions that only
   used localStorage.setItem directly and did not validate
   input were removed during audit.) */


/* =====================================================
   SEARCH EVENTS
   ===================================================== */

function setupSearch() {

    const searchInput =
        document.getElementById("productSearch");


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                currentSearch =
                    this.value.trim();

                applyFilters();

            }
        );

    }


    const globalSearch =
        document.getElementById("searchInput");

    const searchSubmit =
        document.getElementById("searchSubmit");


    if (globalSearch) {

        globalSearch.addEventListener(
            "input",
            function () {

                currentSearch =
                    this.value.trim();

                applyFilters();

            }
        );

    }


    if (searchSubmit) {

        searchSubmit.addEventListener(
            "click",
            function () {

                currentSearch =
                    globalSearch.value.trim();

                applyFilters();

            }
        );

    }

}


/* =====================================================
   FILTER EVENTS
   ===================================================== */

function setupFilters() {


    /* CATEGORY */

    document
        .querySelectorAll(
            'input[name="category"]'
        )
        .forEach(input => {

            input.addEventListener(
                "change",
                function () {

                    selectedCategory =
                        this.value;

                    applyFilters();

                }
            );

        });


    /* PRICE */

    document
        .querySelectorAll(
            'input[name="price"]'
        )
        .forEach(input => {

            input.addEventListener(
                "change",
                function () {

                    selectedPrice =
                        this.value;

                    applyFilters();

                }
            );

        });


    /* RATING */

    document
        .querySelectorAll(
            'input[name="rating"]'
        )
        .forEach(input => {

            input.addEventListener(
                "change",
                function () {

                    selectedRating =
                        this.value;

                    applyFilters();

                }
            );

        });


    /* BRANDS */

    document
        .querySelectorAll(".brand-filter")
        .forEach(input => {

            input.addEventListener(
                "change",
                function () {

                    if (this.checked) {

                        selectedBrands.push(
                            this.value
                        );

                    }

                    else {

                        selectedBrands =
                            selectedBrands.filter(
                                brand =>
                                    brand !==
                                    this.value
                            );

                    }

                    applyFilters();

                }
            );

        });


    /* SORT */

    const sortSelect =
        document.getElementById(
            "sortProducts"
        );

    if (sortSelect) {

        sortSelect.addEventListener(
            "change",
            function () {

                sortProducts();

            }
        );

    }


    /* RESET */

    const resetButton =
        document.getElementById(
            "resetFilters"
        );

    const noResultsReset =
        document.getElementById(
            "noResultsReset"
        );


    if (resetButton) {

        resetButton.addEventListener(
            "click",
            resetAllFilters
        );

    }


    if (noResultsReset) {

        noResultsReset.addEventListener(
            "click",
            resetAllFilters
        );

    }

}


/* =====================================================
   RESET FILTERS
   ===================================================== */

function resetAllFilters() {

    currentSearch = "";

    selectedCategory = "all";

    selectedPrice = "all";

    selectedRating = "all";

    selectedBrands = [];

    currentPage = 1;


    const searchInput =
        document.getElementById(
            "productSearch"
        );

    if (searchInput) {
        searchInput.value = "";
    }


    const globalSearch =
        document.getElementById(
            "searchInput"
        );

    if (globalSearch) {
        globalSearch.value = "";
    }


    document
        .querySelectorAll(
            'input[name="category"]'
        )
        .forEach(input => {

            input.checked =
                input.value === "all";

        });


    document
        .querySelectorAll(
            'input[name="price"]'
        )
        .forEach(input => {

            input.checked =
                input.value === "all";

        });


    document
        .querySelectorAll(
            'input[name="rating"]'
        )
        .forEach(input => {

            input.checked =
                input.value === "all";

        });


    document
        .querySelectorAll(
            ".brand-filter"
        )
        .forEach(input => {

            input.checked = false;

        });


    const sortSelect =
        document.getElementById(
            "sortProducts"
        );

    if (sortSelect) {

        sortSelect.value =
            "default";

    }


    currentProducts =
        [...products];

    renderProducts();

}


/* =====================================================
   URL CATEGORY
   ===================================================== */

function readCategoryFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const category =
        params.get("category");


    if (!category) {
        return;
    }


    const categoryMap = {

        laptops: "laptop",

        gaming: "gaming",

        desktops: "desktop",

        accessories: "accessories"

    };


    if (
        categoryMap[category]
    ) {

        selectedCategory =
            categoryMap[category];


        const radio =
            document.querySelector(
                `input[name="category"][value="${selectedCategory}"]`
            );


        if (radio) {
            radio.checked = true;
        }


        applyFilters();

    }

}


/* =====================================================
   MOBILE MENU
   ===================================================== */

function setupMobileMenu() {

    const menuBtn =
        document.getElementById(
            "menuBtn"
        );

    const navMenu =
        document.getElementById(
            "navMenu"
        );


    if (
        !menuBtn ||
        !navMenu
    ) {
        return;
    }


    menuBtn.addEventListener(
        "click",
        function () {

            navMenu.classList.toggle(
                "show"
            );


            const isOpen =
                navMenu.classList.contains(
                    "show"
                );

            menuBtn.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuBtn.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );


            if (isOpen) {

                menuBtn.textContent = "✕";

            }

            else {

                menuBtn.textContent = "☰";

            }

        }
    );

}


/* =====================================================
   GLOBAL SEARCH BAR
   ===================================================== */

function setupGlobalSearch() {

    const searchBtn =
        document.getElementById(
            "searchBtn"
        );

    const searchContainer =
        document.getElementById(
            "searchContainer"
        );


    if (
        searchBtn &&
        searchContainer
    ) {

        searchBtn.addEventListener(
            "click",
            function () {

                searchContainer.classList.toggle(
                    "show"
                );

                const isOpen =
                    searchContainer.classList.contains(
                        "show"
                    );

                searchBtn.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

                searchBtn.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Close search"
                        : "Open search"
                );

            }
        );

    }

}


/* =====================================================
   TOAST
   ===================================================== */

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );

    const toastMessage =
        document.getElementById(
            "toastMessage"
        );


    if (
        !toast ||
        !toastMessage
    ) {

        alert(message);

        return;

    }


    toastMessage.textContent =
        message;

    toast.classList.add("show");


    setTimeout(
        function () {

            toast.classList.remove(
                "show"
            );

        },
        2500
    );

}




/* =====================================================
   STEP 8 PART 1 - FAQ ACCORDION
   ===================================================== */

function setupFAQPage() {
    const faqList = document.getElementById("faqList");

    if (!faqList) {
        return;
    }

    const questions = faqList.querySelectorAll(".faq-question");

    questions.forEach(function (button) {
        button.addEventListener("click", function () {
            const answerId = button.getAttribute("aria-controls");
            const answer = document.getElementById(answerId);
            const isExpanded = button.getAttribute("aria-expanded") === "true";

            button.setAttribute("aria-expanded", String(!isExpanded));

            if (answer) {
                answer.hidden = isExpanded;
            }
        });
    });
}


/* =====================================================
   STEP 9 - DYNAMIC SEO HELPERS
   ===================================================== */

function setMetaByName(name, content) {
    let meta = document.querySelector(
        `meta[name="${name}"]`
    );

    if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
    }

    meta.setAttribute("content", content);
}


function setMetaByProperty(property, content) {
    let meta = document.querySelector(
        `meta[property="${property}"]`
    );

    if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
    }

    meta.setAttribute("content", content);
}


function updateCategoryPageSEO() {
    if (!document.getElementById("productGrid")) {
        return;
    }

    const params = new URLSearchParams(
        window.location.search
    );

    const category = params.get("category");

    const categorySEO = {
        laptops: {
            title: "Laptops | TechStore",
            description: "Browse laptops at TechStore and compare models by processor, RAM, storage, graphics and price."
        },
        gaming: {
            title: "Gaming Laptops | TechStore",
            description: "Browse gaming laptops at TechStore and compare models by processor, graphics, RAM, storage and price."
        },
        desktops: {
            title: "Desktop Computers | TechStore",
            description: "Browse desktop computers at TechStore and compare models by processor, RAM, storage, graphics and price."
        },
        accessories: {
            title: "Computer Accessories | TechStore",
            description: "Browse computer accessories at TechStore and compare available products by category, brand and price."
        }
    };

    if (!categorySEO[category]) {
        return;
    }

    document.title = categorySEO[category].title;

    setMetaByName(
        "description",
        categorySEO[category].description
    );

    setMetaByProperty(
        "og:title",
        categorySEO[category].title
    );

    setMetaByProperty(
        "og:description",
        categorySEO[category].description
    );

    setMetaByName(
        "twitter:title",
        categorySEO[category].title
    );

    setMetaByName(
        "twitter:description",
        categorySEO[category].description
    );
}


function updateDynamicProductSEO(product) {
    const description =
        `View ${product.name} specifications, ${product.ram} RAM, ${product.storage}, ${product.graphics}, pricing and key product details at TechStore.`;

    document.title =
        `${product.name} | TechStore`;

    setMetaByName(
        "description",
        description
    );

    setMetaByProperty(
        "og:title",
        `${product.name} | TechStore`
    );

    setMetaByProperty(
        "og:description",
        description
    );

    setMetaByName(
        "twitter:title",
        `${product.name} | TechStore`
    );

    setMetaByName(
        "twitter:description",
        description
    );

    let schema = document.getElementById(
        "productStructuredData"
    );

    if (!schema) {
        schema = document.createElement("script");
        schema.type = "application/ld+json";
        schema.id = "productStructuredData";
        document.head.appendChild(schema);
    }

    schema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "brand": {
            "@type": "Brand",
            "name": product.brand
        },
        "description": description,
        "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": product.price
        }
    });
}


/* =====================================================
   INITIALIZE
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /* Runs on every page */

        setupMobileMenu();

        setupGlobalSearch();

        updateNavbarCounts();

        updateAuthUI();

        /* FAQ page (Step 8 Part 1) */

        setupFAQPage();


        /* Products listing page (products.html) */

        if (document.getElementById("productGrid")) {

            setupSearch();

            setupFilters();

            readCategoryFromURL();

            updateCategoryPageSEO();

            renderProducts();

            /* renderProducts() already calls
               addProductButtonEvents() after it
               builds the product cards. */

        }

        else {

            /* Static product cards that are already in the
               page HTML (Home page, Deals page) still need
               their Add to Cart / Wishlist buttons wired up,
               since renderProducts() never runs for them. */

            addProductButtonEvents();

        }


        /* Product Details page (product-details.html) */

        if (document.getElementById("productDetails")) {

            renderProductDetails();

            renderRelatedProducts();

        }


        /* Cart page (cart.html) */

        if (document.getElementById("cartContainer")) {

            renderCartPage();

        }


        /* Wishlist page (wishlist.html) */

        if (document.getElementById("wishlistContainer")) {

            renderWishlistPage();

        }


        /* Signup page (signup.html) */

        setupSignupPage();


        /* Login page (login.html) */

        setupLoginPage();


        /* Profile page (profile.html) */

        setupProfilePage();

        /* Checkout page (checkout.html) */

        setupCheckoutPage();

        /* Orders pages (Step 7 Part 2) */

        setupOrdersPage();
        setupOrderDetailsPage();

    }
);

/* =====================================================
   STEP 3 - PRODUCT DETAILS
   ===================================================== */


/* Get Product ID From URL */

function getProductIdFromURL() {

    const urlParams = new URLSearchParams(window.location.search);

    return Number(urlParams.get("id"));

}


/* Create Product Detail Page */

function renderProductDetails() {

    const productDetails = document.getElementById("productDetails");

    if (!productDetails) {
        return;
    }


    const productId = getProductIdFromURL();

    const product = products.find(
        item => item.id === productId
    );


    /* Product Not Found */

    if (!product) {

        productDetails.innerHTML = `

            <div class="no-results">

                <h2>Product Not Found</h2>

                <p>
                    Sorry, the product you are looking for
                    does not exist.
                </p>

                <a
                    href="products.html"
                    class="btn btn-primary"
                >
                    Back to Products
                </a>

            </div>

        `;

        return;

    }


    /* Calculate Discount */

    const discount = getDiscount(product);


    /* Update Page SEO */

    updateDynamicProductSEO(product);


    /* Update Breadcrumb */

    const breadcrumbProduct =
        document.getElementById("breadcrumbProduct");

    if (breadcrumbProduct) {

        breadcrumbProduct.textContent =
            product.name;

    }


    /* Create Product Details */

    productDetails.innerHTML = `

        <div class="product-detail-layout">


            <!-- Product Image -->

            <div class="product-detail-image">

                ${product.icon}

            </div>


            <!-- Product Information -->

            <div class="product-detail-info">


                <div class="product-detail-brand">

                    ${product.brand}

                </div>


                <h1 class="product-detail-title">

                    ${product.name}

                </h1>


                <!-- Rating -->

                <div class="product-detail-rating">

                    <span class="product-detail-stars">

                        ${createStars(product.rating)}

                    </span>

                    <span>

                        ${product.rating}
                        (${product.reviewCount} Reviews)

                    </span>

                </div>


                <!-- Price -->

                <div class="product-detail-price-box">

                    <span class="product-detail-price">

                        ${formatPrice(product.price)}

                    </span>


                    <span class="product-detail-original-price">

                        ${formatPrice(product.originalPrice)}

                    </span>


                    <span class="product-detail-discount">

                        ${discount}% OFF

                    </span>

                </div>


                <!-- Description -->

                <p class="product-detail-description">

                    The ${product.name} is designed to provide
                    reliable performance for everyday computing,
                    productivity and entertainment.
                    It offers a balanced combination of performance,
                    storage and modern features.

                </p>


                <!-- Highlights -->

                <div class="product-highlights">

                    <h3>Product Highlights</h3>

                    <ul>

                        <li>
                            ${product.processor}
                        </li>

                        <li>
                            ${product.ram} RAM
                        </li>

                        <li>
                            ${product.storage}
                        </li>

                        <li>
                            ${product.graphics}
                        </li>

                    </ul>

                </div>


                <!-- Availability -->

                <div class="product-availability">

                    ✓ In Stock

                </div>


                <!-- Quantity -->

                <div class="quantity-section">

                    <label>
                        Quantity:
                    </label>


                    <div class="quantity-control">

                        <button
                            type="button"
                            id="decreaseQuantity"
                        >
                            −
                        </button>


                        <input
                            type="number"
                            id="productQuantity"
                            value="1"
                            min="1"
                            max="10"
                        >


                        <button
                            type="button"
                            id="increaseQuantity"
                        >
                            +
                        </button>

                    </div>

                </div>


                <!-- Action Buttons -->

                <div class="product-actions">


                    <button
                        class="product-action-btn add-cart-btn"
                        id="detailAddCart"
                        data-id="${product.id}"
                    >

                        🛒 Add to Cart

                    </button>


                    <button
                        class="product-action-btn buy-now-btn"
                        id="detailBuyNow"
                        data-id="${product.id}"
                    >

                        ⚡ Buy Now

                    </button>


                    <button
                        class="product-action-btn wishlist-btn"
                        id="detailWishlist"
                        data-id="${product.id}"
                    >

                        ❤️ Wishlist

                    </button>


                    <button
                        class="product-action-btn compare-btn"
                        id="detailCompare"
                        data-id="${product.id}"
                    >

                        ⚖ Compare

                    </button>


                </div>


                <!-- Delivery -->

                <div class="delivery-info">

                    <p>
                        🚚 <strong>Free Delivery</strong>
                        on eligible orders
                    </p>

                    <p>
                        📦 Estimated delivery:
                        3–7 business days
                    </p>

                    <p>
                        💳 Cash on Delivery available
                    </p>

                    <p>
                        🛡️ Manufacturer warranty available
                    </p>

                </div>


            </div>

        </div>


        <!-- Specifications -->

        <div class="specifications-section">

            <h2>
                Technical Specifications
            </h2>


            <table class="specifications-table">

                <tr>

                    <th>
                        Brand
                    </th>

                    <td>
                        ${product.brand}
                    </td>

                </tr>


                <tr>

                    <th>
                        Processor
                    </th>

                    <td>
                        ${product.processor}
                    </td>

                </tr>


                <tr>

                    <th>
                        RAM
                    </th>

                    <td>
                        ${product.ram}
                    </td>

                </tr>


                <tr>

                    <th>
                        Storage
                    </th>

                    <td>
                        ${product.storage}
                    </td>

                </tr>


                <tr>

                    <th>
                        Graphics
                    </th>

                    <td>
                        ${product.graphics}
                    </td>

                </tr>


                <tr>

                    <th>
                        Category
                    </th>

                    <td>
                        ${getCategoryName(product.category)}
                    </td>

                </tr>


                <tr>

                    <th>
                        Rating
                    </th>

                    <td>
                        ${product.rating} / 5
                    </td>

                </tr>


            </table>

        </div>

    `;


    setupProductDetailEvents(product);

}


/* Quantity + Buttons */

function setupProductDetailEvents(product) {

    const quantityInput =
        document.getElementById("productQuantity");

    const decreaseButton =
        document.getElementById("decreaseQuantity");

    const increaseButton =
        document.getElementById("increaseQuantity");


    /* Decrease Quantity */

    if (decreaseButton) {

        decreaseButton.addEventListener(
            "click",
            function () {

                let quantity =
                    Number(quantityInput.value);

                if (quantity > 1) {

                    quantity--;

                    quantityInput.value =
                        quantity;

                }

            }
        );

    }


    /* Increase Quantity */

    if (increaseButton) {

        increaseButton.addEventListener(
            "click",
            function () {

                let quantity =
                    Number(quantityInput.value);

                if (quantity < 10) {

                    quantity++;

                    quantityInput.value =
                        quantity;

                }

            }
        );

    }


    /* Add To Cart */

    const addCartButton =
    document.getElementById("detailAddCart");

    if (addCartButton) {

        addCartButton.addEventListener(
            "click",
            function () {

                const quantity =
                    Number(
                        document.getElementById(
                            "productQuantity"
                        )?.value
                    ) || 1;

                addToCart(
                    product.id,
                    quantity
                );

            }
        );

    }


    /* Buy Now */

    const buyNowButton =
    document.getElementById(
        "detailBuyNow"
    );

    if (buyNowButton) {

        buyNowButton.addEventListener(
            "click",
            function () {

                const quantity =
                    Number(
                        document.getElementById(
                            "productQuantity"
                        )?.value
                    ) || 1;


                addToCart(
                    product.id,
                    quantity
                );


                window.location.href =
                    "cart.html";

            }
        );

    }


    /* Wishlist */

    const wishlistButton =
        document.getElementById("detailWishlist");


    if (wishlistButton) {

    wishlistButton.addEventListener(
        "click",
        function () {

            toggleWishlist(
                product.id
            );


            const wishlist =
                getWishlist();


            if (
                wishlist.includes(product.id)
            ) {

                this.textContent =
                    "❤️ Added to Wishlist";

            }

            else {

                this.textContent =
                    "❤️ Wishlist";

            }

        }
    );

}


    /* Compare */

    const compareButton =
        document.getElementById("detailCompare");


    if (compareButton) {

        if (isInCompare(product.id)) {

            compareButton.textContent =
                "⚖ Added to Compare";

        }


        compareButton.addEventListener(
            "click",
            function () {

                addToCompare(product.id);


                if (isInCompare(product.id)) {

                    this.textContent =
                        "⚖ Added to Compare";

                }

                else {

                    this.textContent =
                        "⚖ Compare";

                }

            }
        );

    }

}


/* =====================================================
   RELATED PRODUCTS
   ===================================================== */

function renderRelatedProducts() {

    const relatedContainer =
        document.getElementById("relatedProducts");


    if (!relatedContainer) {
        return;
    }


    const productId =
        getProductIdFromURL();


    const currentProduct =
        products.find(
            product => product.id === productId
        );


    if (!currentProduct) {
        return;
    }


    /* Find Products From Same Category */

    let relatedProducts =
        products.filter(
            product =>
                product.category === currentProduct.category &&
                product.id !== currentProduct.id
        );


    /* Show Maximum 4 */

    relatedProducts =
        relatedProducts.slice(0, 4);


    relatedContainer.innerHTML =
        relatedProducts
            .map(product => createProductCard(product))
            .join("");


    /* Add Events */

    if (
        typeof addProductButtonEvents ===
        "function"
    ) {

        addProductButtonEvents();

    }

}


/* Step 3 (Product Details) and Step 4 (Cart/Wishlist page)
   initialization now happens from the single consolidated
   "INITIALIZE" DOMContentLoaded listener near the top of
   this file. (A duplicate listener that was nested inside
   another DOMContentLoaded callback here has been removed —
   it could never fire, since DOMContentLoaded only fires
   once and had already fired by the time the inner
   addEventListener call ran. That bug was the reason
   cart.html and wishlist.html never rendered their saved
   items on page load.) */


/* =========================================================
   STEP 4 - CART SYSTEM
   ========================================================= */


/* Get cart */

function getCart() {

    try {

        const cart =
            JSON.parse(
                localStorage.getItem("techstoreCart")
            );

        return Array.isArray(cart) ? cart : [];

    } catch (error) {

        return [];

    }

}


/* Save cart */

function saveCart(cart) {

    localStorage.setItem(
        "techstoreCart",
        JSON.stringify(cart)
    );

}


/* Add product to cart */

function addToCart(productId, quantity = 1) {

    productId = Number(productId);
    quantity = Number(quantity);

    if (!productId || quantity < 1) {
        return;
    }


    const cart = getCart();

    const existingProduct =
        cart.find(
            item =>
                Number(item.id) === productId
        );


    if (existingProduct) {

        existingProduct.quantity += quantity;

    } else {

        cart.push({

            id: productId,

            quantity: quantity

        });

    }


    saveCart(cart);

    updateNavbarCounts();

    showToast("Product added to cart.");

}


/* Remove product */

function removeFromCart(productId) {

    productId = Number(productId);

    let cart = getCart();

    cart = cart.filter(
        item =>
            Number(item.id) !== productId
    );

    saveCart(cart);

    updateNavbarCounts();

}


/* Update quantity */

function updateCartQuantity(productId, quantity) {

    productId = Number(productId);
    quantity = Number(quantity);

    const cart = getCart();

    const item =
        cart.find(
            product =>
                Number(product.id) === productId
        );


    if (!item) {
        return;
    }


    if (quantity <= 0) {

        removeFromCart(productId);

        return;

    }


    item.quantity = quantity;

    saveCart(cart);

    updateNavbarCounts();

}


/* Clear cart */

function clearCart() {

    localStorage.removeItem(
        "techstoreCart"
    );

    updateNavbarCounts();

}


/* =========================================================
   WISHLIST SYSTEM
   ========================================================= */


/* Get wishlist */

function getWishlist() {

    try {

        const wishlist =
            JSON.parse(
                localStorage.getItem(
                    "techstoreWishlist"
                )
            );

        return Array.isArray(wishlist)
            ? wishlist
            : [];

    } catch (error) {

        return [];

    }

}


/* Save wishlist */

function saveWishlist(wishlist) {

    localStorage.setItem(
        "techstoreWishlist",
        JSON.stringify(wishlist)
    );

}


/* Check wishlist */

function isInWishlist(productId) {

    productId = Number(productId);

    return getWishlist().includes(productId);

}


/* Add/remove wishlist */

function toggleWishlist(productId) {

    productId = Number(productId);

    const wishlist = getWishlist();

    const index =
        wishlist.indexOf(productId);


    if (index !== -1) {

        wishlist.splice(index, 1);

        saveWishlist(wishlist);

        updateNavbarCounts();

        return false;

    }


    wishlist.push(productId);

    saveWishlist(wishlist);

    updateNavbarCounts();

    showToast("Added to wishlist.");

    return true;

}


/* Remove from wishlist */

function removeFromWishlist(productId) {

    productId = Number(productId);

    let wishlist = getWishlist();

    wishlist =
        wishlist.filter(
            id =>
                Number(id) !== productId
        );

    saveWishlist(wishlist);

    updateNavbarCounts();

}


/* Clear wishlist */

function clearWishlist() {

    localStorage.removeItem(
        "techstoreWishlist"
    );

    updateNavbarCounts();

}


/* =========================================================
   COMPARE SYSTEM
   ========================================================= */


const COMPARE_LIMIT = 4;


/* Get compare list (sanitized: numbers, valid IDs, unique) */

function getCompareList() {

    try {

        const compare =
            JSON.parse(
                localStorage.getItem(
                    "techstoreCompare"
                )
            );

        if (!Array.isArray(compare)) {
            return [];
        }

        const valid =
            compare
                .map(id => Number(id))
                .filter(id =>
                    !isNaN(id) &&
                    products.some(
                        p => Number(p.id) === id
                    )
                );

        return [...new Set(valid)];

    } catch (error) {

        return [];

    }

}


/* Save compare list */

function saveCompareList(compareList) {

    localStorage.setItem(
        "techstoreCompare",
        JSON.stringify(compareList)
    );

}


/* Check compare */

function isInCompare(productId) {

    productId = Number(productId);

    return getCompareList().includes(productId);

}


/* Add to compare */

function addToCompare(productId) {

    productId = Number(productId);

    const compareList = getCompareList();


    if (compareList.includes(productId)) {

        showToast(
            "This product is already in your comparison."
        );

        return false;

    }


    if (compareList.length >= COMPARE_LIMIT) {

        showToast(
            `You can compare up to ${COMPARE_LIMIT} products.`
        );

        return false;

    }


    compareList.push(productId);

    saveCompareList(compareList);

    updateNavbarCounts();


    const product =
        products.find(
            p => Number(p.id) === productId
        );

    showToast(
        `${product ? product.name : "Product"} added to compare.`
    );

    return true;

}


/* Remove from compare */

function removeFromCompare(productId) {

    productId = Number(productId);

    let compareList = getCompareList();

    compareList =
        compareList.filter(
            id =>
                Number(id) !== productId
        );

    saveCompareList(compareList);

    updateNavbarCounts();

}


/* Clear compare */

function clearCompare() {

    localStorage.removeItem(
        "techstoreCompare"
    );

    updateNavbarCounts();

}

function addProductButtonEvents() {

    document
        .querySelectorAll(".add-cart")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const id =
                        Number(
                            this.dataset.id
                        );

                    if (!id) {
                        return;
                    }

                    addToCart(id, 1);

                }
            );

        });


    document
        .querySelectorAll(".wishlist-button")
        .forEach(button => {

            const id =
                Number(
                    button.dataset.id
                );

            if (!id) {
                return;
            }

            /* Show saved wishlist state on load */

            button.textContent =
                isInWishlist(id) ? "♥" : "♡";

            button.addEventListener(
                "click",
                function () {

                    const added =
                        toggleWishlist(id);

                    this.textContent =
                        added ? "♥" : "♡";

                }
            );

        });

}
function renderCartPage() {

    const container =
        document.getElementById(
            "cartContainer"
        );

    if (!container) {
        return;
    }


    const cart = getCart();


    /* Empty cart */

    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h2>Your Cart is Empty</h2>

                <p>
                    You haven't added any products yet.
                </p>

                <a
                    href="products.html"
                    class="continue-shopping-btn"
                >
                    Continue Shopping
                </a>

            </div>

        `;

        return;

    }


    let subtotal = 0;


    let html = `

        <div class="cart-layout">

            <div class="cart-items">

    `;


    cart.forEach(item => {

        const product =
            products.find(
                p =>
                    Number(p.id) ===
                    Number(item.id)
            );


        if (!product) {
            return;
        }


        const quantity =
            Number(item.quantity) || 1;


        const itemTotal =
            product.price * quantity;


        subtotal += itemTotal;


        html += `

            <div class="cart-item">

                <div class="cart-product-icon">
                    ${product.icon || "💻"}
                </div>

                <div class="cart-product-info">

                    <h3>
                        ${product.name}
                    </h3>

                    <p>
                        ${product.brand}
                    </p>

                    <strong>
                        ${formatPrice(product.price)}
                    </strong>

                </div>


                <div class="cart-quantity">

                    <button
                        class="quantity-minus"
                        data-id="${product.id}"
                    >
                        −
                    </button>

                    <span>
                        ${quantity}
                    </span>

                    <button
                        class="quantity-plus"
                        data-id="${product.id}"
                    >
                        +
                    </button>

                </div>


                <div class="cart-item-total">

                    ${formatPrice(itemTotal)}

                </div>


                <button
                    class="cart-remove"
                    data-id="${product.id}"
                >
                    Remove
                </button>

            </div>

        `;

    });


    html += `

            </div>


            <aside class="cart-summary">

                <h2>Order Summary</h2>

                <div class="summary-row">

                    <span>Subtotal</span>

                    <strong>
                        ${formatPrice(subtotal)}
                    </strong>

                </div>


                <div class="summary-row">

                    <span>Delivery</span>

                    <strong>${formatPrice(getDeliveryCharge(subtotal))}</strong>

                </div>


                <hr>


                <div class="summary-total">

                    <span>Total</span>

                    <strong>
                        ${formatPrice(subtotal + getDeliveryCharge(subtotal))}
                    </strong>

                </div>


                <a
                    class="checkout-btn checkout-link"
                    href="checkout.html"
                >
                    Proceed to Checkout
                </a>


                <button
                    class="clear-cart-btn"
                    id="clearCartBtn"
                >
                    Clear Cart
                </button>

            </aside>

        </div>

    `;


    container.innerHTML = html;


    /* Quantity minus */

    container
        .querySelectorAll(".quantity-minus")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const id =
                        Number(
                            this.dataset.id
                        );

                    const cart =
                        getCart();

                    const item =
                        cart.find(
                            product =>
                                Number(product.id) === id
                        );


                    if (item) {

                        updateCartQuantity(
                            id,
                            item.quantity - 1
                        );

                        renderCartPage();

                    }

                }
            );

        });


    /* Quantity plus */

    container
        .querySelectorAll(".quantity-plus")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const id =
                        Number(
                            this.dataset.id
                        );

                    const cart =
                        getCart();

                    const item =
                        cart.find(
                            product =>
                                Number(product.id) === id
                        );


                    if (item) {

                        updateCartQuantity(
                            id,
                            item.quantity + 1
                        );

                        renderCartPage();

                    }

                }
            );

        });


    /* Remove */

    container
        .querySelectorAll(".cart-remove")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const id =
                        Number(
                            this.dataset.id
                        );

                    removeFromCart(id);

                    renderCartPage();

                    showToast(
                        "Product removed from cart."
                    );

                }
            );

        });


    /* Clear */

    const clearButton =
        document.getElementById(
            "clearCartBtn"
        );


    if (clearButton) {

        clearButton.addEventListener(
            "click",
            function () {

                clearCart();

                renderCartPage();

                showToast(
                    "Cart cleared."
                );

            }
        );

    }

}
function renderWishlistPage() {

    const container =
        document.getElementById(
            "wishlistContainer"
        );

    if (!container) {
        return;
    }


    const wishlist =
        getWishlist();


    /* Empty wishlist */

    if (wishlist.length === 0) {

        container.innerHTML = `

            <div class="empty-wishlist">

                <div class="empty-wishlist-icon">
                    ♡
                </div>

                <h2>Your Wishlist is Empty</h2>

                <p>
                    Save products here to view them later.
                </p>

                <a
                    href="products.html"
                    class="continue-shopping-btn"
                >
                    Browse Products
                </a>

            </div>

        `;

        return;

    }


    let html = `

        <div class="wishlist-grid">

    `;


    wishlist.forEach(id => {

        const product =
            products.find(
                p =>
                    Number(p.id) ===
                    Number(id)
            );


        if (!product) {
            return;
        }


        html += `

            <article class="wishlist-card">

                <div class="wishlist-product-icon">
                    ${product.icon || "💻"}
                </div>


                <div class="wishlist-product-info">

                    <span class="wishlist-brand">
                        ${product.brand}
                    </span>

                    <h3>
                        ${product.name}
                    </h3>

                    <div class="wishlist-rating">
                        ⭐ ${product.rating}
                        (${product.reviewCount})
                    </div>

                    <div class="wishlist-price">

                        ${formatPrice(product.price)}

                    </div>


                    <div class="wishlist-actions">

                        <a
                            href="product-details.html?id=${product.id}"
                            class="view-details-btn"
                        >
                            View Details
                        </a>

                        <button
                            class="wishlist-cart-btn"
                            data-id="${product.id}"
                        >
                            🛒 Add to Cart
                        </button>

                        <button
                            class="wishlist-remove-btn"
                            data-id="${product.id}"
                        >
                            Remove
                        </button>

                    </div>

                </div>

            </article>

        `;

    });


    html += `

        </div>

        <div class="wishlist-bottom">

            <button
                id="clearWishlistBtn"
                class="clear-wishlist-btn"
            >
                Clear Wishlist
            </button>

        </div>

    `;


    container.innerHTML = html;


    /* Add to cart */

    container
        .querySelectorAll(".wishlist-cart-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const id =
                        Number(
                            this.dataset.id
                        );

                    addToCart(id, 1);

                }
            );

        });


    /* Remove */

    container
        .querySelectorAll(".wishlist-remove-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const id =
                        Number(
                            this.dataset.id
                        );

                    removeFromWishlist(id);

                    renderWishlistPage();

                    showToast(
                        "Removed from wishlist."
                    );

                }
            );

        });


    /* Clear */

    const clearButton =
        document.getElementById(
            "clearWishlistBtn"
        );


    if (clearButton) {

        clearButton.addEventListener(
            "click",
            function () {

                clearWishlist();

                renderWishlistPage();

                showToast(
                    "Wishlist cleared."
                );

            }
        );

    }

}


/* =========================================================
   STEP 5 - COMPARE PAGE
   ========================================================= */


function renderComparePage() {

    const container =
        document.getElementById(
            "compareContainer"
        );

    if (!container) {
        return;
    }


    /* getCompareList() already drops any invalid/unknown IDs;
       persist that sanitized result back so a stale/tampered
       LocalStorage value can never resurface. */

    const compareList =
        getCompareList();

    saveCompareList(compareList);


    const clearButton =
        document.getElementById(
            "clearCompareBtn"
        );


    /* Empty compare */

    if (compareList.length === 0) {

        if (clearButton) {
            clearButton.style.display = "none";
        }

        container.innerHTML = `

            <div class="empty-compare">

                <div class="empty-compare-icon">
                    ⚖️
                </div>

                <h2>No Products to Compare</h2>

                <p>
                    Add products from their details page
                    to compare them here.
                </p>

                <a
                    href="products.html"
                    class="continue-shopping-btn"
                >
                    Browse Products
                </a>

            </div>

        `;

        return;

    }


    if (clearButton) {
        clearButton.style.display = "";
    }


    const compareProducts =
        compareList
            .map(id =>
                products.find(
                    p => Number(p.id) === id
                )
            )
            .filter(Boolean);


    const fields = [

        { label: "Product", key: "name" },

        { label: "Brand", key: "brand" },

        {
            label: "Category",
            key: "category",
            format: getCategoryName
        },

        {
            label: "Price",
            key: "price",
            format: formatPrice
        },

        {
            label: "Original Price",
            key: "originalPrice",
            format: formatPrice
        },

        {
            label: "Rating",
            key: "rating",
            format: value => `⭐ ${value}`
        },

        { label: "Processor", key: "processor" },

        { label: "RAM", key: "ram" },

        { label: "Storage", key: "storage" },

        { label: "Graphics", key: "graphics" }

    ];


    let html = `

        <div class="compare-table-wrapper">

            <table class="compare-table">

                <thead>
                    <tr>
                        <th class="compare-row-label"></th>

    `;


    compareProducts.forEach(product => {

        html += `

                        <th>
                            <div class="compare-product-col">

                                <button
                                    class="compare-remove-btn"
                                    data-id="${product.id}"
                                    title="Remove from comparison"
                                >
                                    ✕
                                </button>

                                <div class="compare-product-icon">
                                    ${product.icon || "💻"}
                                </div>

                                <div class="compare-product-name">
                                    ${product.name}
                                </div>

                                <a
                                    href="product-details.html?id=${product.id}"
                                    class="view-details-btn"
                                >
                                    View Details
                                </a>

                            </div>
                        </th>

        `;

    });


    html += `
                    </tr>
                </thead>

                <tbody>
    `;


    fields.forEach(field => {

        html += `
                    <tr>
                        <td class="compare-row-label">
                            ${field.label}
                        </td>
        `;

        compareProducts.forEach(product => {

            const raw = product[field.key];

            let value;

            if (raw === undefined || raw === null || raw === "") {

                value = "—";

            } else if (field.format) {

                value = field.format(raw);

            } else {

                value = raw;

            }

            html += `
                        <td>${value}</td>
            `;

        });

        html += `
                    </tr>
        `;

    });


    html += `
                </tbody>
            </table>
        </div>
    `;


    container.innerHTML = html;


    /* Remove */

    container
        .querySelectorAll(".compare-remove-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const id =
                        Number(
                            this.dataset.id
                        );

                    removeFromCompare(id);

                    renderComparePage();

                    showToast(
                        "Removed from comparison."
                    );

                }
            );

        });

}


/* =========================================================
   STEP 7 PART 1 - CHECKOUT + COUPONS + ORDER PLACEMENT
   ========================================================= */

const ORDERS_KEY = "techstoreOrders";
const CHECKOUT_COUPON_KEY = "techstoreCheckoutCoupon";

const CHECKOUT_COUPONS = {
    TECH10: {
        type: "percent",
        value: 10,
        minOrder: 10000,
        maxDiscount: 5000
    },
    SAVE500: {
        type: "fixed",
        value: 500,
        minOrder: 20000
    },
    WELCOME5: {
        type: "percent",
        value: 5,
        minOrder: 5000,
        maxDiscount: 2000
    }
};

function getOrders() {
    try {
        const raw = localStorage.getItem(ORDERS_KEY);
        if (!raw) return [];

        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];

        return parsed.filter(function (order) {
            return (
                order &&
                typeof order === "object" &&
                typeof order.orderId === "string" &&
                order.orderId.trim() !== "" &&
                (typeof order.userId === "number" || typeof order.userId === "string") &&
                Array.isArray(order.items)
            );
        });
    } catch (error) {
        return [];
    }
}

function saveOrders(orders) {
    try {
        localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
        return true;
    } catch (error) {
        return false;
    }
}

function getDeliveryCharge(subtotal) {
    return Number(subtotal) >= 50000 ? 0 : 99;
}

function getCheckoutItems() {
    return getCart().map(function (item) {
        const product = products.find(function (p) {
            return Number(p.id) === Number(item.id);
        });

        if (!product) return null;

        const quantity = Math.max(1, Number(item.quantity) || 1);

        return {
            product: product,
            quantity: quantity,
            itemTotal: product.price * quantity,
            productDiscount: Math.max(0, (product.originalPrice || product.price) - product.price) * quantity
        };
    }).filter(Boolean);
}

function calculateCouponDiscount(code, subtotal) {
    const normalizedCode = String(code || "").trim().toUpperCase();
    const coupon = CHECKOUT_COUPONS[normalizedCode];
    const cleanSubtotal = Math.max(0, Number(subtotal) || 0);

    if (!coupon) {
        return { valid: false, discount: 0, message: "Invalid or unavailable coupon." };
    }

    if (cleanSubtotal < coupon.minOrder) {
        return {
            valid: false,
            discount: 0,
            message: "Minimum order value for this coupon is " + formatPrice(coupon.minOrder) + "."
        };
    }

    let discount = coupon.type === "percent"
        ? cleanSubtotal * (coupon.value / 100)
        : coupon.value;

    if (typeof coupon.maxDiscount === "number") {
        discount = Math.min(discount, coupon.maxDiscount);
    }

    discount = Math.min(Math.max(0, discount), cleanSubtotal);

    return { valid: true, discount: Math.round(discount), message: "Coupon applied successfully." };
}

function calculateOrderTotals(subtotal, couponCode) {
    const cleanSubtotal = Math.max(0, Number(subtotal) || 0);
    let couponDiscount = 0;
    let appliedCoupon = "";
    let couponResult = { valid: true, discount: 0, message: "" };

    if (couponCode) {
        couponResult = calculateCouponDiscount(couponCode, cleanSubtotal);
        if (couponResult.valid) {
            couponDiscount = couponResult.discount;
            appliedCoupon = String(couponCode).trim().toUpperCase();
        }
    }

    const deliveryCharge = getDeliveryCharge(cleanSubtotal);
    const finalTotal = Math.max(0, cleanSubtotal - couponDiscount + deliveryCharge);

    return {
        subtotal: cleanSubtotal,
        couponDiscount: couponDiscount,
        deliveryCharge: deliveryCharge,
        finalTotal: finalTotal,
        appliedCoupon: appliedCoupon,
        couponResult: couponResult
    };
}

function getCheckoutCouponState() {
    try {
        return (sessionStorage.getItem(CHECKOUT_COUPON_KEY) || "").trim().toUpperCase();
    } catch (error) {
        return "";
    }
}

function setCheckoutCouponState(code) {
    try {
        if (code) sessionStorage.setItem(CHECKOUT_COUPON_KEY, code);
        else sessionStorage.removeItem(CHECKOUT_COUPON_KEY);
    } catch (error) {
        /* Session storage is optional for this demo. */
    }
}

function generateOrderId() {
    const orders = getOrders();
    const now = new Date();
    const date = now.getFullYear().toString() +
        String(now.getMonth() + 1).padStart(2, "0") +
        String(now.getDate()).padStart(2, "0");

    let sequence = orders.filter(function (order) {
        return typeof order.orderId === "string" && order.orderId.indexOf("TS-" + date + "-") === 0;
    }).length + 1;

    let orderId = "TS-" + date + "-" + String(sequence).padStart(4, "0");

    while (orders.some(function (order) { return order.orderId === orderId; })) {
        sequence += 1;
        orderId = "TS-" + date + "-" + String(sequence).padStart(4, "0");
    }

    return orderId;
}

function renderCheckoutPage() {
    const container = document.getElementById("checkoutContainer");
    if (!container) return;

    const cart = getCart();
    const items = getCheckoutItems();

    if (cart.length === 0 || items.length === 0) {
        container.innerHTML = `
            <div class="checkout-empty">
                <div class="checkout-empty-icon">🛒</div>
                <h2>Your Cart is Empty</h2>
                <p>Add products to your cart before starting checkout.</p>
                <a href="products.html" class="continue-shopping-btn">Browse Products</a>
            </div>
        `;
        return;
    }

    const subtotal = items.reduce(function (sum, item) {
        return sum + item.itemTotal;
    }, 0);

    let couponCode = getCheckoutCouponState();
    let totals = calculateOrderTotals(subtotal, couponCode);

    if (couponCode && !totals.couponResult.valid) {
        couponCode = "";
        setCheckoutCouponState("");
        totals = calculateOrderTotals(subtotal, "");
    }

    const currentUser = getCurrentUser();

    container.innerHTML = `
        <div class="checkout-layout">
            <section class="checkout-main-card">
                <div class="checkout-section">
                    <h2>Customer Information</h2>
                    <div class="checkout-form-grid">
                        <div class="checkout-field">
                            <label for="checkoutName">Full Name</label>
                            <input type="text" id="checkoutName" autocomplete="name" value="${escapeCheckoutHTML(currentUser?.name || "")}" required>
                            <small class="checkout-field-error" id="checkoutNameError"></small>
                        </div>
                        <div class="checkout-field">
                            <label for="checkoutEmail">Email</label>
                            <input type="email" id="checkoutEmail" autocomplete="email" value="${escapeCheckoutHTML(currentUser?.email || "")}" required>
                            <small class="checkout-field-error" id="checkoutEmailError"></small>
                        </div>
                    </div>
                </div>

                <div class="checkout-section">
                    <h2>Delivery Information</h2>
                    <div class="checkout-form-grid">
                        <div class="checkout-field checkout-field-full">
                            <label for="checkoutAddress">Address</label>
                            <textarea id="checkoutAddress" rows="3" autocomplete="street-address" required></textarea>
                            <small class="checkout-field-error" id="checkoutAddressError"></small>
                        </div>
                        <div class="checkout-field">
                            <label for="checkoutCity">City</label>
                            <input type="text" id="checkoutCity" autocomplete="address-level2" required>
                            <small class="checkout-field-error" id="checkoutCityError"></small>
                        </div>
                        <div class="checkout-field">
                            <label for="checkoutState">State</label>
                            <input type="text" id="checkoutState" autocomplete="address-level1" required>
                            <small class="checkout-field-error" id="checkoutStateError"></small>
                        </div>
                        <div class="checkout-field">
                            <label for="checkoutPin">PIN Code</label>
                            <input type="text" id="checkoutPin" inputmode="numeric" maxlength="6" autocomplete="postal-code" required>
                            <small class="checkout-field-error" id="checkoutPinError"></small>
                        </div>
                        <div class="checkout-field">
                            <label for="checkoutPhone">Phone Number</label>
                            <input type="tel" id="checkoutPhone" inputmode="numeric" maxlength="10" autocomplete="tel" required>
                            <small class="checkout-field-error" id="checkoutPhoneError"></small>
                        </div>
                    </div>
                </div>

                <div class="checkout-section">
                    <h2>Coupon</h2>
                    <div class="coupon-row">
                        <input type="text" id="couponCode" placeholder="Enter coupon code" value="${escapeCheckoutHTML(couponCode)}" autocomplete="off">
                        <button type="button" class="checkout-secondary-btn" id="applyCouponBtn">Apply Coupon</button>
                    </div>
                    <div id="couponMessage" class="checkout-message" aria-live="polite"></div>
                    <div id="appliedCouponBox" class="applied-coupon" ${couponCode ? "" : "style=\"display:none\""}>
                        <span>Applied: <strong id="appliedCouponCode">${escapeCheckoutHTML(couponCode)}</strong> — <strong id="appliedCouponDiscount">${formatPrice(totals.couponDiscount)}</strong> off</span>
                        <button type="button" id="removeCouponBtn" class="remove-coupon-btn">Remove Coupon</button>
                    </div>
                    <p class="coupon-help">Demo coupons: TECH10, SAVE500, WELCOME5</p>
                </div>

                <div class="checkout-section">
                    <h2>Payment Method</h2>
                    <div class="payment-options">
                        <label class="payment-option">
                            <input type="radio" name="paymentMethod" value="Cash on Delivery">
                            <span><strong>Cash on Delivery</strong><small>Pay when your order is delivered.</small></span>
                        </label>
                        <label class="payment-option">
                            <input type="radio" name="paymentMethod" value="Demo Card Payment">
                            <span><strong>Demo Card Payment</strong><small>Demo payment — no real transaction will be processed.</small></span>
                        </label>
                    </div>
                    <div id="paymentError" class="checkout-field-error" aria-live="polite"></div>
                </div>

                <div id="checkoutFormMessage" class="checkout-form-message" aria-live="polite"></div>
                <button type="button" class="place-order-btn" id="placeOrderBtn">Place Order</button>
            </section>

            <aside class="checkout-summary-card">
                <h2>Order Summary</h2>
                <div class="checkout-items">
                    ${items.map(function (item) {
                        return `
                            <div class="checkout-item">
                                <div class="checkout-item-icon">${item.product.icon || "💻"}</div>
                                <div class="checkout-item-info">
                                    <strong>${escapeCheckoutHTML(item.product.name)}</strong>
                                    <span>Qty: ${item.quantity} × ${formatPrice(item.product.price)}</span>
                                </div>
                                <strong>${formatPrice(item.itemTotal)}</strong>
                            </div>
                        `;
                    }).join("")}
                </div>
                <div class="checkout-summary-row"><span>Subtotal</span><strong id="checkoutSubtotal">${formatPrice(totals.subtotal)}</strong></div>
                <div class="checkout-summary-row"><span>Discount</span><strong id="checkoutProductDiscount">${formatPrice(items.reduce(function(sum,item){return sum+item.productDiscount;},0))}</strong></div>
                <div class="checkout-summary-row"><span>Coupon Discount</span><strong id="checkoutCouponDiscount">-${formatPrice(totals.couponDiscount)}</strong></div>
                <div class="checkout-summary-row"><span>Delivery</span><strong id="checkoutDelivery">${totals.deliveryCharge === 0 ? "FREE" : formatPrice(totals.deliveryCharge)}</strong></div>
                <hr>
                <div class="checkout-summary-total"><span>Final Total</span><strong id="checkoutFinalTotal">${formatPrice(totals.finalTotal)}</strong></div>
                <p class="delivery-rule-note">Free delivery on orders of ${formatPrice(50000)} or more. Otherwise ${formatPrice(99)} delivery.</p>
            </aside>
        </div>
    `;

    setupCheckoutEvents();
}

function escapeCheckoutHTML(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function clearCheckoutErrors() {
    document.querySelectorAll(".checkout-field-error").forEach(function (element) {
        element.textContent = "";
    });
    const message = document.getElementById("checkoutFormMessage");
    if (message) message.textContent = "";
}

function validateCheckoutForm() {
    clearCheckoutErrors();
    let valid = true;

    const fields = {
        name: document.getElementById("checkoutName"),
        email: document.getElementById("checkoutEmail"),
        address: document.getElementById("checkoutAddress"),
        city: document.getElementById("checkoutCity"),
        state: document.getElementById("checkoutState"),
        pin: document.getElementById("checkoutPin"),
        phone: document.getElementById("checkoutPhone")
    };

    function error(id, message) {
        const element = document.getElementById(id + "Error");
        if (element) element.textContent = message;
        valid = false;
    }

    if (!fields.name?.value.trim()) error("checkoutName", "Full name is required.");
    if (!fields.email?.value.trim()) {
        error("checkoutEmail", "Email is required.");
    } else if (!isValidEmailFormat(fields.email.value.trim())) {
        error("checkoutEmail", "Please enter a valid email address.");
    }
    if (!fields.address?.value.trim()) error("checkoutAddress", "Address is required.");
    if (!fields.city?.value.trim()) error("checkoutCity", "City is required.");
    if (!fields.state?.value.trim()) error("checkoutState", "State is required.");
    if (!/^\d{6}$/.test(fields.pin?.value.trim() || "")) error("checkoutPin", "PIN code must contain exactly 6 digits.");
    if (!/^\d{10}$/.test(fields.phone?.value.trim() || "")) error("checkoutPhone", "Phone number must contain exactly 10 digits.");

    const payment = document.querySelector('input[name="paymentMethod"]:checked');
    const paymentError = document.getElementById("paymentError");
    if (!payment) {
        if (paymentError) paymentError.textContent = "Please select a payment method.";
        valid = false;
    }

    return {
        valid: valid,
        paymentMethod: payment ? payment.value : ""
    };
}

function updateCheckoutTotalsUI() {
    const items = getCheckoutItems();
    const subtotal = items.reduce(function (sum, item) { return sum + item.itemTotal; }, 0);
    const couponCode = getCheckoutCouponState();
    const totals = calculateOrderTotals(subtotal, couponCode);

    const couponDiscount = document.getElementById("checkoutCouponDiscount");
    const delivery = document.getElementById("checkoutDelivery");
    const finalTotal = document.getElementById("checkoutFinalTotal");

    if (couponDiscount) couponDiscount.textContent = "-" + formatPrice(totals.couponDiscount);
    if (delivery) delivery.textContent = totals.deliveryCharge === 0 ? "FREE" : formatPrice(totals.deliveryCharge);
    if (finalTotal) finalTotal.textContent = formatPrice(totals.finalTotal);

    const appliedBox = document.getElementById("appliedCouponBox");
    const appliedCode = document.getElementById("appliedCouponCode");
    const appliedDiscount = document.getElementById("appliedCouponDiscount");
    if (appliedBox) appliedBox.style.display = totals.appliedCoupon ? "flex" : "none";
    if (appliedCode) appliedCode.textContent = totals.appliedCoupon;
    if (appliedDiscount) appliedDiscount.textContent = formatPrice(totals.couponDiscount);
}

function setupCheckoutEvents() {
    const applyButton = document.getElementById("applyCouponBtn");
    const removeButton = document.getElementById("removeCouponBtn");
    const couponInput = document.getElementById("couponCode");
    const couponMessage = document.getElementById("couponMessage");
    const placeOrderButton = document.getElementById("placeOrderBtn");

    if (couponInput) {
        couponInput.addEventListener("input", function () {
            if (couponMessage) couponMessage.textContent = "";
        });
    }

    if (applyButton) {
        applyButton.addEventListener("click", function () {
            const items = getCheckoutItems();
            const subtotal = items.reduce(function (sum, item) { return sum + item.itemTotal; }, 0);
            const code = (couponInput?.value || "").trim().toUpperCase();
            const result = calculateCouponDiscount(code, subtotal);

            if (!result.valid) {
                setCheckoutCouponState("");
                if (couponMessage) couponMessage.textContent = result.message;
                updateCheckoutTotalsUI();
                return;
            }

            setCheckoutCouponState(code);
            if (couponMessage) couponMessage.textContent = result.message;
            updateCheckoutTotalsUI();
        });
    }

    if (removeButton) {
        removeButton.addEventListener("click", function () {
            setCheckoutCouponState("");
            if (couponInput) couponInput.value = "";
            if (couponMessage) couponMessage.textContent = "Coupon removed.";
            updateCheckoutTotalsUI();
        });
    }

    if (placeOrderButton) {
        placeOrderButton.addEventListener("click", function () {
            const currentUser = getCurrentUser();

            if (!currentUser) {
                window.location.href = "login.html?redirect=checkout.html";
                return;
            }

            const cart = getCart();
            const items = getCheckoutItems();
            if (!cart.length || !items.length) {
                const message = document.getElementById("checkoutFormMessage");
                if (message) message.textContent = "Your cart is empty. Add a product before placing an order.";
                return;
            }

            const validation = validateCheckoutForm();
            if (!validation.valid) {
                const message = document.getElementById("checkoutFormMessage");
                if (message) message.textContent = "Please correct the highlighted fields before placing your order.";
                return;
            }

            const subtotal = items.reduce(function (sum, item) { return sum + item.itemTotal; }, 0);
            const couponCode = getCheckoutCouponState();
            const totals = calculateOrderTotals(subtotal, couponCode);

            if (couponCode && !totals.couponResult.valid) {
                setCheckoutCouponState("");
                const message = document.getElementById("checkoutFormMessage");
                if (message) message.textContent = totals.couponResult.message;
                renderCheckoutPage();
                return;
            }

            if (!Number.isFinite(totals.finalTotal) || totals.finalTotal < 0) {
                const message = document.getElementById("checkoutFormMessage");
                if (message) message.textContent = "Unable to calculate the order total. Please try again.";
                return;
            }

            const order = {
                orderId: generateOrderId(),
                userId: currentUser.id,
                customer: {
                    name: document.getElementById("checkoutName").value.trim(),
                    email: document.getElementById("checkoutEmail").value.trim().toLowerCase()
                },
                delivery: {
                    address: document.getElementById("checkoutAddress").value.trim(),
                    city: document.getElementById("checkoutCity").value.trim(),
                    state: document.getElementById("checkoutState").value.trim(),
                    pinCode: document.getElementById("checkoutPin").value.trim(),
                    phone: document.getElementById("checkoutPhone").value.trim()
                },
                items: items.map(function (item) {
                    return {
                        productId: item.product.id,
                        quantity: item.quantity,
                        unitPrice: item.product.price
                    };
                }),
                subtotal: totals.subtotal,
                coupon: totals.appliedCoupon,
                discount: totals.couponDiscount,
                deliveryCharge: totals.deliveryCharge,
                finalTotal: totals.finalTotal,
                paymentMethod: validation.paymentMethod,
                status: "Processing",
                orderDate: new Date().toISOString()
            };

            const orders = getOrders();
            orders.push(order);

            if (!saveOrders(orders)) {
                const message = document.getElementById("checkoutFormMessage");
                if (message) message.textContent = "The order could not be saved. Your cart has not been cleared.";
                return;
            }

            clearCart();
            setCheckoutCouponState("");
            renderOrderConfirmation(order);
        });
    }
}

function renderOrderConfirmation(order) {
    const container = document.getElementById("checkoutContainer");
    if (!container) return;

    container.innerHTML = `
        <section class="order-confirmation">
            <div class="confirmation-icon">✓</div>
            <h1>Order placed successfully!</h1>
            <p class="confirmation-lead">Thank you for shopping with TechStore.</p>
            <div class="confirmation-grid">
                <div><span>Order ID</span><strong>${escapeCheckoutHTML(order.orderId)}</strong></div>
                <div><span>Order Date</span><strong>${escapeCheckoutHTML(new Date(order.orderDate).toLocaleString("en-IN"))}</strong></div>
                <div><span>Total</span><strong>${formatPrice(order.finalTotal)}</strong></div>
                <div><span>Payment</span><strong>${escapeCheckoutHTML(order.paymentMethod)}</strong></div>
            </div>
            <div class="confirmation-block">
                <h2>Delivery Information</h2>
                <p>${escapeCheckoutHTML(order.delivery.address)}, ${escapeCheckoutHTML(order.delivery.city)}, ${escapeCheckoutHTML(order.delivery.state)} - ${escapeCheckoutHTML(order.delivery.pinCode)}</p>
                <p>Phone: ${escapeCheckoutHTML(order.delivery.phone)}</p>
            </div>
            <div class="confirmation-block">
                <h2>Ordered Products</h2>
                <ul>
                    ${order.items.map(function (item) {
                        const product = products.find(function (p) { return p.id === Number(item.productId); });
                        return `<li><span>${escapeCheckoutHTML(product ? product.name : "Product")}</span><strong>${item.quantity} × ${formatPrice(item.unitPrice)}</strong></li>`;
                    }).join("")}
                </ul>
            </div>
            <div class="confirmation-actions">
                <a href="order-details.html?id=${encodeURIComponent(order.orderId)}" class="btn btn-primary">View Order</a>
                <a href="products.html" class="checkout-secondary-link">Continue Shopping</a>
                <a href="orders.html" class="checkout-secondary-link">My Orders</a>
            </div>
        </section>
    `;
}

function setupCheckoutPage() {
    const container = document.getElementById("checkoutContainer");
    if (!container) return;

    if (getCart().length === 0) {
        renderCheckoutPage();
        return;
    }

    if (!getCurrentUser()) {
        window.location.href = "login.html?redirect=checkout.html";
        return;
    }

    renderCheckoutPage();
}

/* =====================================================
   STEP 6 - AUTHENTICATION (DEMO ONLY)

   IMPORTANT SECURITY NOTE:
   This is a static, front-end-only demonstration of an
   authentication flow for a college project. Users and
   passwords are stored in plain text in LocalStorage.
   This is NOT secure and must never be treated as a
   production-grade authentication system. Nothing here
   is sent to a server; there is no real backend.
   ===================================================== */

const AUTH_USERS_KEY = "techstoreUsers";
const AUTH_CURRENT_USER_KEY = "techstoreCurrentUser";


/* ---------- Safe LocalStorage helpers ---------- */

function getUsers() {

    try {

        const raw = localStorage.getItem(AUTH_USERS_KEY);

        if (!raw) {
            return [];
        }

        const parsed = JSON.parse(raw);

        if (!Array.isArray(parsed)) {
            return [];
        }

        /* Filter out any malformed user entries so a single
           corrupted record can't break the whole list. */

        return parsed.filter(function (user) {

            return (
                user &&
                typeof user === "object" &&
                typeof user.email === "string" &&
                typeof user.password === "string" &&
                typeof user.name === "string"
            );

        });

    } catch (error) {

        return [];

    }

}


function saveUsers(users) {

    try {

        localStorage.setItem(
            AUTH_USERS_KEY,
            JSON.stringify(users)
        );

        return true;

    } catch (error) {

        return false;

    }

}


function getCurrentUser() {

    try {

        const raw = localStorage.getItem(AUTH_CURRENT_USER_KEY);

        if (!raw) {
            return null;
        }

        const parsed = JSON.parse(raw);

        if (
            !parsed ||
            typeof parsed !== "object" ||
            typeof parsed.email !== "string"
        ) {
            return null;
        }

        /* Guard against a stale current-user pointing at an
           ID/email that no longer exists in techstoreUsers. */

        const users = getUsers();

        const stillExists = users.some(function (user) {
            return user.email === parsed.email;
        });

        if (!stillExists) {
            return null;
        }

        return parsed;

    } catch (error) {

        return null;

    }

}


function saveCurrentUser(user) {

    try {

        localStorage.setItem(
            AUTH_CURRENT_USER_KEY,
            JSON.stringify(user)
        );

        return true;

    } catch (error) {

        return false;

    }

}


function clearCurrentUser() {

    localStorage.removeItem(AUTH_CURRENT_USER_KEY);

}


/* ---------- Validation helpers ---------- */

function isValidEmailFormat(email) {

    if (typeof email !== "string") {
        return false;
    }

    /* Reasonable, not exhaustive, email format check. */

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

}


function normalizeEmail(email) {

    return typeof email === "string" ? email.trim().toLowerCase() : "";

}


function emailExists(email, ignoreUserId) {

    const users = getUsers();

    const target = normalizeEmail(email);

    return users.some(function (user) {

        return (
            normalizeEmail(user.email) === target &&
            user.id !== ignoreUserId
        );

    });

}


function getNextUserId(users) {

    let maxId = 0;

    users.forEach(function (user) {

        const id = Number(user.id);

        if (!Number.isNaN(id) && id > maxId) {
            maxId = id;
        }

    });

    return maxId + 1;

}


/* ---------- Core auth actions ---------- */

function signupUser(name, email, password) {

    const cleanName = (name || "").trim();
    const cleanEmail = normalizeEmail(email);

    if (!cleanName) {
        return { success: false, message: "Please enter your full name." };
    }

    if (!cleanEmail) {
        return { success: false, message: "Please enter your email." };
    }

    if (!isValidEmailFormat(cleanEmail)) {
        return { success: false, message: "Please enter a valid email address." };
    }

    if (!password || password.length < 6) {
        return { success: false, message: "Password must be at least 6 characters." };
    }

    if (emailExists(cleanEmail)) {
        return { success: false, message: "An account with this email already exists." };
    }

    const users = getUsers();

    const newUser = {
        id: getNextUserId(users),
        name: cleanName,
        email: cleanEmail,
        password: password
    };

    users.push(newUser);

    saveUsers(users);

    return { success: true, user: newUser };

}


function loginUser(email, password) {

    const cleanEmail = normalizeEmail(email);

    const users = getUsers();

    const match = users.find(function (user) {

        return (
            normalizeEmail(user.email) === cleanEmail &&
            user.password === password
        );

    });

    if (!match) {
        return { success: false, message: "Invalid email or password." };
    }

    const sessionUser = {
        id: match.id,
        name: match.name,
        email: match.email
    };

    saveCurrentUser(sessionUser);

    return { success: true, user: sessionUser };

}


function logoutUser() {

    /* Cart, Wishlist and Compare must remain untouched. */

    clearCurrentUser();

    updateAuthUI();

    showToast("You have been logged out.");

    setTimeout(function () {
        window.location.href = "index.html";
    }, 600);

}


function updateProfile(newName, newEmail) {

    const current = getCurrentUser();

    if (!current) {
        return { success: false, message: "You must be logged in to edit your profile." };
    }

    const cleanName = (newName || "").trim();
    const cleanEmail = normalizeEmail(newEmail);

    if (!cleanName) {
        return { success: false, message: "Please enter your full name." };
    }

    if (!cleanEmail) {
        return { success: false, message: "Please enter your email." };
    }

    if (!isValidEmailFormat(cleanEmail)) {
        return { success: false, message: "Please enter a valid email address." };
    }

    if (emailExists(cleanEmail, current.id)) {
        return { success: false, message: "An account with this email already exists." };
    }

    const users = getUsers();

    const index = users.findIndex(function (user) {
        return user.id === current.id;
    });

    if (index === -1) {
        return { success: false, message: "Your account could not be found. Please log in again." };
    }

    users[index].name = cleanName;
    users[index].email = cleanEmail;

    saveUsers(users);

    const updatedSessionUser = {
        id: users[index].id,
        name: users[index].name,
        email: users[index].email
    };

    saveCurrentUser(updatedSessionUser);

    return { success: true, user: updatedSessionUser };

}


/* ---------- Header / navigation sync ---------- */

function updateAuthUI() {

    const user = getCurrentUser();

    const accountLinks = document.querySelectorAll(".js-account-link");

    accountLinks.forEach(function (link) {

        const icon = link.querySelector(".account-icon");
        const label = link.dataset.label || "";

        if (user) {

            link.setAttribute("href", "profile.html");
            link.setAttribute("title", "Profile (" + user.name + ")");

            if (icon) {
                icon.textContent = "👤";
            }

            link.classList.add("logged-in");

        } else {

            link.setAttribute("href", "login.html");
            link.setAttribute("title", "Login");

            if (icon) {
                icon.textContent = "👤";
            }

            link.classList.remove("logged-in");

        }

    });

}


/* ---------- Page: signup.html ---------- */

function setupSignupPage() {

    const form = document.getElementById("signupForm");

    if (!form) {
        return;
    }

    const errorBox = document.getElementById("signupError");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("signupName").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;
        const confirmPassword = document.getElementById("signupConfirmPassword").value;

        if (errorBox) {
            errorBox.textContent = "";
            errorBox.classList.remove("show");
        }

        if (password !== confirmPassword) {

            if (errorBox) {
                errorBox.textContent = "Passwords do not match.";
                errorBox.classList.add("show");
            }

            return;

        }

        const result = signupUser(name, email, password);

        if (!result.success) {

            if (errorBox) {
                errorBox.textContent = result.message;
                errorBox.classList.add("show");
            }

            return;

        }

        /* Log the new user in immediately for a smoother demo UX. */

        loginUser(email, password);

        showToast("Account created. Welcome, " + result.user.name + "!");

        setTimeout(function () {
            window.location.href = "profile.html";
        }, 700);

    });

}


/* ---------- Page: login.html ---------- */

function setupLoginPage() {

    const form = document.getElementById("loginForm");

    if (!form) {
        return;
    }

    const errorBox = document.getElementById("loginError");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        if (errorBox) {
            errorBox.textContent = "";
            errorBox.classList.remove("show");
        }

        const result = loginUser(email, password);

        if (!result.success) {

            if (errorBox) {
                errorBox.textContent = result.message;
                errorBox.classList.add("show");
            }

            return;

        }

        updateAuthUI();

        showToast("Welcome back, " + result.user.name + "!");

        setTimeout(function () {
            const redirect = new URLSearchParams(window.location.search).get("redirect");

            if (redirect === "checkout.html") {
                window.location.href = "checkout.html";
            } else {
                window.location.href = "profile.html";
            }
        }, 500);

    });

}


/* ---------- Page: profile.html ---------- */

function renderProfilePage() {

    const loggedOutState = document.getElementById("profileLoggedOut");
    const loggedInState = document.getElementById("profileLoggedIn");

    if (!loggedOutState || !loggedInState) {
        return;
    }

    const user = getCurrentUser();

    if (!user) {

        loggedOutState.style.display = "block";
        loggedInState.style.display = "none";

        return;

    }

    loggedOutState.style.display = "none";
    loggedInState.style.display = "block";

    const nameDisplay = document.getElementById("profileNameDisplay");
    const emailDisplay = document.getElementById("profileEmailDisplay");
    const nameInput = document.getElementById("profileNameInput");
    const emailInput = document.getElementById("profileEmailInput");
    const avatar = document.getElementById("profileAvatar");

    if (avatar) {
        avatar.textContent = (user.name || "?").trim().charAt(0).toUpperCase() || "?";
    }

    if (nameDisplay) {
        nameDisplay.textContent = user.name;
    }

    if (emailDisplay) {
        emailDisplay.textContent = user.email;
    }

    if (nameInput) {
        nameInput.value = user.name;
    }

    if (emailInput) {
        emailInput.value = user.email;
    }

}


function setupProfilePage() {

    const container = document.getElementById("profileContainer");

    if (!container) {
        return;
    }

    renderProfilePage();

    const editBtn = document.getElementById("editProfileBtn");
    const cancelBtn = document.getElementById("cancelEditBtn");
    const viewBlock = document.getElementById("profileViewBlock");
    const editBlock = document.getElementById("profileEditBlock");
    const editForm = document.getElementById("profileEditForm");
    const editError = document.getElementById("profileEditError");
    const logoutBtn = document.getElementById("logoutBtn");

    if (editBtn && viewBlock && editBlock) {

        editBtn.addEventListener("click", function () {

            viewBlock.style.display = "none";
            editBlock.style.display = "block";

        });

    }

    if (cancelBtn && viewBlock && editBlock) {

        cancelBtn.addEventListener("click", function () {

            renderProfilePage();

            editBlock.style.display = "none";
            viewBlock.style.display = "block";

            if (editError) {
                editError.textContent = "";
                editError.classList.remove("show");
            }

        });

    }

    if (editForm) {

        editForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const newName = document.getElementById("profileNameInput").value;
            const newEmail = document.getElementById("profileEmailInput").value;

            const result = updateProfile(newName, newEmail);

            if (editError) {
                editError.textContent = "";
                editError.classList.remove("show");
            }

            if (!result.success) {

                if (editError) {
                    editError.textContent = result.message;
                    editError.classList.add("show");
                }

                return;

            }

            updateAuthUI();
            renderProfilePage();

            if (viewBlock && editBlock) {
                editBlock.style.display = "none";
                viewBlock.style.display = "block";
            }

            showToast("Profile updated.");

        });

    }

    if (logoutBtn) {

        logoutBtn.addEventListener("click", function () {

            logoutUser();

        });

    }

}


/* =========================================================
   STEP 7 PART 2 - ORDER HISTORY + ORDER DETAILS + CANCELLATION
   ========================================================= */

function getUserOrders(userId) {
    const targetId = String(userId);
    return getOrders().filter(function (order) {
        return String(order.userId) === targetId;
    });
}

function getOrderByIdForCurrentUser(orderId) {
    const currentUser = getCurrentUser();
    if (!currentUser) return null;

    const target = String(orderId || "").trim();
    if (!target) return null;

    return getOrders().find(function (order) {
        return String(order.orderId) === target && String(order.userId) === String(currentUser.id);
    }) || null;
}

function getOrderStatusClass(status) {
    const normalized = String(status || "Processing").toLowerCase().replace(/\s+/g, "-");
    if (normalized === "cancelled") return "order-status-cancelled";
    if (normalized === "delivered") return "order-status-delivered";
    if (normalized === "shipped") return "order-status-shipped";
    return "order-status-processing";
}

function canCancelOrder(order) {
    return order && String(order.status || "Processing").toLowerCase() === "processing";
}

function cancelOrderForCurrentUser(orderId) {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        return { success: false, message: "Please log in to manage your orders." };
    }

    const orders = getOrders();
    const index = orders.findIndex(function (order) {
        return String(order.orderId) === String(orderId) && String(order.userId) === String(currentUser.id);
    });

    if (index === -1) {
        return { success: false, message: "Order not found." };
    }

    if (!canCancelOrder(orders[index])) {
        return { success: false, message: "This order can no longer be cancelled." };
    }

    orders[index].status = "Cancelled";
    orders[index].cancelledDate = new Date().toISOString();

    if (!saveOrders(orders)) {
        return { success: false, message: "Unable to save the cancellation. Please try again." };
    }

    return { success: true, order: orders[index] };
}

function formatOrderDate(dateValue) {
    const date = new Date(dateValue);
    if (Number.isNaN(date.getTime())) return "Date unavailable";
    return date.toLocaleString("en-IN");
}

function renderOrdersPage() {
    const container = document.getElementById("ordersContainer");
    if (!container) return;

    const currentUser = getCurrentUser();
    if (!currentUser) {
        container.innerHTML = `
            <div class="orders-empty">
                <div class="orders-empty-icon">🔒</div>
                <h2>Login Required</h2>
                <p>Please log in to view your orders.</p>
                <a href="login.html" class="btn btn-primary">Go to Login</a>
            </div>
        `;
        return;
    }

    const orders = getUserOrders(currentUser.id).sort(function (a, b) {
        return new Date(b.orderDate || 0) - new Date(a.orderDate || 0);
    });

    if (orders.length === 0) {
        container.innerHTML = `
            <div class="orders-empty">
                <div class="orders-empty-icon">📦</div>
                <h2>No Orders Yet</h2>
                <p>Your completed purchases will appear here.</p>
                <a href="products.html" class="btn btn-primary">Start Shopping</a>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="orders-list">
            ${orders.map(function (order) {
                const itemCount = Array.isArray(order.items)
                    ? order.items.reduce(function (sum, item) { return sum + (Number(item.quantity) || 0); }, 0)
                    : 0;
                const status = String(order.status || "Processing");
                return `
                    <article class="order-card">
                        <div class="order-card-header">
                            <div>
                                <span class="order-label">Order ID</span>
                                <h2>${escapeCheckoutHTML(order.orderId)}</h2>
                            </div>
                            <span class="order-status ${getOrderStatusClass(status)}">${escapeCheckoutHTML(status)}</span>
                        </div>
                        <div class="order-card-grid">
                            <div><span>Date</span><strong>${escapeCheckoutHTML(formatOrderDate(order.orderDate))}</strong></div>
                            <div><span>Items</span><strong>${itemCount}</strong></div>
                            <div><span>Total</span><strong>${formatPrice(Number(order.finalTotal) || 0)}</strong></div>
                            <div><span>Payment</span><strong>${escapeCheckoutHTML(order.paymentMethod || "—")}</strong></div>
                        </div>
                        <div class="order-card-actions">
                            <a href="order-details.html?id=${encodeURIComponent(order.orderId)}" class="btn btn-primary">View Details</a>
                            ${canCancelOrder(order) ? `<button type="button" class="btn btn-danger cancel-order-btn" data-order-id="${escapeCheckoutHTML(order.orderId)}">Cancel Order</button>` : ""}
                        </div>
                    </article>
                `;
            }).join("")}
        </div>
    `;

    container.querySelectorAll(".cancel-order-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            const orderId = this.dataset.orderId;
            const result = cancelOrderForCurrentUser(orderId);
            if (!result.success) {
                showToast(result.message);
                return;
            }
            renderOrdersPage();
            showToast("Order cancelled successfully.");
        });
    });
}

function setupOrdersPage() {
    if (!document.getElementById("ordersContainer")) return;
    renderOrdersPage();
}

function renderOrderDetailsPage() {
    const container = document.getElementById("orderDetailsContainer");
    if (!container) return;

    const currentUser = getCurrentUser();
    if (!currentUser) {
        container.innerHTML = `
            <div class="orders-empty">
                <div class="orders-empty-icon">🔒</div>
                <h2>Login Required</h2>
                <p>Please log in to view order details.</p>
                <a href="login.html" class="btn btn-primary">Go to Login</a>
            </div>
        `;
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const orderId = params.get("id");
    const order = getOrderByIdForCurrentUser(orderId);

    if (!order) {
        container.innerHTML = `
            <div class="orders-empty">
                <div class="orders-empty-icon">📦</div>
                <h2>Order Not Found</h2>
                <p>This order does not exist or is not available for your account.</p>
                <a href="orders.html" class="btn btn-primary">Back to My Orders</a>
            </div>
        `;
        return;
    }

    const status = String(order.status || "Processing");
    const delivery = order.delivery || {};
    const items = Array.isArray(order.items) ? order.items : [];

    container.innerHTML = `
        <section class="order-details-card">
            <div class="order-details-top">
                <div>
                    <span class="order-label">Order ID</span>
                    <h1>${escapeCheckoutHTML(order.orderId)}</h1>
                    <p>Placed on ${escapeCheckoutHTML(formatOrderDate(order.orderDate))}</p>
                </div>
                <span class="order-status ${getOrderStatusClass(status)}">${escapeCheckoutHTML(status)}</span>
            </div>

            <div class="order-details-section">
                <h2>Ordered Products</h2>
                <div class="order-detail-items">
                    ${items.map(function (item) {
                        const product = products.find(function (p) { return Number(p.id) === Number(item.productId); });
                        const quantity = Number(item.quantity) || 0;
                        const unitPrice = Number(item.unitPrice) || 0;
                        return `
                            <div class="order-detail-item">
                                <div class="order-detail-product-icon">${product ? product.icon : "💻"}</div>
                                <div class="order-detail-product-info">
                                    <strong>${escapeCheckoutHTML(product ? product.name : "Product unavailable")}</strong>
                                    <span>Quantity: ${quantity}</span>
                                </div>
                                <strong>${formatPrice(unitPrice * quantity)}</strong>
                            </div>
                        `;
                    }).join("")}
                </div>
            </div>

            <div class="order-details-two-column">
                <div class="order-details-section">
                    <h2>Delivery Information</h2>
                    <p>${escapeCheckoutHTML(delivery.name || order.customer?.name || "")}</p>
                    <p>${escapeCheckoutHTML(delivery.address || "")}</p>
                    <p>${escapeCheckoutHTML(delivery.city || "")}, ${escapeCheckoutHTML(delivery.state || "")} - ${escapeCheckoutHTML(delivery.pinCode || "")}</p>
                    <p>Phone: ${escapeCheckoutHTML(delivery.phone || "")}</p>
                </div>
                <div class="order-details-section">
                    <h2>Payment</h2>
                    <p>${escapeCheckoutHTML(order.paymentMethod || "Not specified")}</p>
                    <p>Status: ${escapeCheckoutHTML(status)}</p>
                </div>
            </div>

            <div class="order-summary-box">
                <div><span>Subtotal</span><strong>${formatPrice(Number(order.subtotal) || 0)}</strong></div>
                <div><span>Coupon</span><strong>${escapeCheckoutHTML(order.coupon || "None")}</strong></div>
                <div><span>Discount</span><strong>-${formatPrice(Number(order.discount) || 0)}</strong></div>
                <div><span>Delivery</span><strong>${Number(order.deliveryCharge) === 0 ? "FREE" : formatPrice(Number(order.deliveryCharge) || 0)}</strong></div>
                <div class="order-total-row"><span>Total</span><strong>${formatPrice(Number(order.finalTotal) || 0)}</strong></div>
            </div>

            <div class="order-details-actions">
                <a href="orders.html" class="btn btn-secondary">Back to My Orders</a>
                ${canCancelOrder(order) ? `<button type="button" class="btn btn-danger" id="detailCancelOrderBtn">Cancel Order</button>` : ""}
            </div>
        </section>
    `;

    const cancelButton = document.getElementById("detailCancelOrderBtn");
    if (cancelButton) {
        cancelButton.addEventListener("click", function () {
            const result = cancelOrderForCurrentUser(order.orderId);
            if (!result.success) {
                showToast(result.message);
                return;
            }
            showToast("Order cancelled successfully.");
            renderOrderDetailsPage();
        });
    }
}

function setupOrderDetailsPage() {
    if (!document.getElementById("orderDetailsContainer")) return;
    renderOrderDetailsPage();
}
