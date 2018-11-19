document.addEventListener('DOMContentLoaded', () => {
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    const apiURL = 'https://content.viaplay.se/pc-se/serier/samtliga';
    
    fetch(proxyURL + apiURL).then(response => {
        response.json().then(viaplay => {
            console.log(viaplay)
            let displayDiv = document.querySelector('#category')
            viaplay._links['viaplay:categoryFilters'].forEach(category => {
                let categoryDiv = document.createElement('div')
                categoryDiv.innerHTML = category.title
                displayDiv.appendChild(categoryDiv)
            })
        });
    });
});