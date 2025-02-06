document.addEventListener('DOMContentLoaded', () => {
    const breedSelect = document.getElementById('breedSelect');
    const breedName = document.getElementById('breedName');
    const dogImage = document.getElementById('dogImage');

    // Fetch all breeds
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            populateBreedSelect(breeds);
        })
        .catch(error => console.error('Error fetching breeds:', error));

    // Populate the <select> element with breeds
    function populateBreedSelect(breeds) {
        breeds.forEach(breed => {
            const option = document.createElement('option');
            option.value = breed;
            option.textContent = breed.charAt(0).toUpperCase() + breed.slice(1);
            breedSelect.appendChild(option);
        });
    }

    // Fetch and display a random image for the selected breed
    breedSelect.addEventListener('change', () => {
        const selectedBreed = breedSelect.value;
        if (selectedBreed) {
            fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
                .then(response => response.json())
                .then(data => {
                    breedName.textContent = selectedBreed.charAt(0).toUpperCase() + selectedBreed.slice(1);
                    dogImage.src = data.message;
                    dogImage.style.display = 'block';
                })
                .catch(error => console.error('Error fetching dog image:', error));
        } else {
            breedName.textContent = '';
            dogImage.src = '';
            dogImage.style.display = 'none';
        }
    });
});