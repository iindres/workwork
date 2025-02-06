document.addEventListener('DOMContentLoaded', () => {
    const bookCatalog = document.getElementById('bookCatalog');
    const searchInput = document.getElementById('searchInput');
    const categorySelect = document.getElementById('categorySelect');

    let books = [];
    let categories = [];

    // Fetch books and categories
    async function fetchData() {
        try {
            const [booksResponse, categoriesResponse] = await Promise.all([
                fetch('https://in3.dev/knygos/'),
                fetch('https://in3.dev/knygos/types/')
            ]);

            books = await booksResponse.json();
            categories = await categoriesResponse.json();

            populateCategorySelect();
            displayBooks(books);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Populate the category select element
    function populateCategorySelect() {
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.id;
            option.textContent = category.title;
            categorySelect.appendChild(option);
        });
    }

    // Display books in the catalog
    function displayBooks(booksToDisplay) {
        bookCatalog.innerHTML = '';
        booksToDisplay.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');
            bookCard.innerHTML = `
                <img src="${book.img}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <p>${categories.find(category => category.id === book.type).title}</p>
            `;
            bookCatalog.appendChild(bookCard);
        });
    }

    // Filter books based on search input and selected category
    function filterBooks() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categorySelect.value;

        const filteredBooks = books.filter(book => {
            const matchesSearch = book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory === '' || book.type === parseInt(selectedCategory);
            return matchesSearch && matchesCategory;
        });

        displayBooks(filteredBooks);
    }

    // Event listeners for search input and category select
    searchInput.addEventListener('input', filterBooks);
    categorySelect.addEventListener('change', filterBooks);

    // Initial fetch of data
    fetchData();
});