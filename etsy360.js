document.addEventListener('DOMContentLoaded', function () {
    fetchEtsyItems();
});

function fetchEtsyItems() {
    const shopName = 'wishcraftbytwisha'; // Replace with your Etsy shop name
    const apiKey = 'your_api_key'; // Replace with your Etsy API key

    fetch(`https://openapi.etsy.com/v2/shops/${shopName}/listings/active?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayEtsyItems(data.results);
        })
        .catch(error => console.error('Error fetching Etsy items:', error));
}

function displayEtsyItems(items) {
    const etsy360Widget = document.getElementById('etsy-360-widget');
    etsy360Widget.innerHTML = '';

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'etsy-item';

        itemElement.innerHTML = `
            <h3>${item.title}</h3>
            <img src="${item.Images[0].url_fullxfull}" alt="${item.title}">
            <p>${item.description}</p>
            <a href="${item.url}" target="_blank">View on Etsy</a>
        `;

        etsy360Widget.appendChild(itemElement);
    });
}
