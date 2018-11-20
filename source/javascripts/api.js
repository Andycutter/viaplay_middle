document.addEventListener('DOMContentLoaded', () => {
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    const apiURL = 'https://content.viaplay.se/pc-se/serier/samtliga';
    
    fetch(proxyURL + apiURL).then(response => {
        response.json().then(viaplay => {
            console.log(viaplay)
            let displayDiv = document.querySelector('.category')
            viaplay._embedded['viaplay:blocks'][0]._embedded['viaplay:products'].forEach(category => {
                let categoryDiv = document.createElement('div')
                categoryDiv.setAttribute('class', 'imgDiv')
                categoryDiv.innerHTML = `<a href="${category.publicPath}.html"><img src="${category.content.images.boxart.url}"></a>`
                displayDiv.appendChild(categoryDiv)
            });
        });
    });
});
