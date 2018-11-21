document.addEventListener('DOMContentLoaded', () => {
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    const apiURL = 'https://content.viaplay.se/pc-se/serier/samtliga';
    
    fetch(proxyURL + apiURL).then(response => {
        response.json().then(viaplay => {
            console.log(viaplay)
            let viaplayAPILink = viaplay._embedded['viaplay:blocks'][0]._embedded['viaplay:products'][0]
            let displayImg = document.querySelector('.img')
            let displayHeadline = document.querySelector('.headline')
            let displayDescription = document.querySelector('.description')           
            let displayYear = document.querySelector('.year')           
            
            let imgDiv = document.createElement('div')
                imgDiv.setAttribute('class', 'img')
                imgDiv.innerHTML = `<img src="${viaplayAPILink.content.images.boxart.url}">`
                displayImg.appendChild(imgDiv)
                
            let headlineDiv = document.createElement('div')
                headlineDiv.setAttribute('class', 'headline')
                headlineDiv.innerHTML = `<h1>${viaplayAPILink.content.series.title}</h1>`
                displayHeadline.appendChild(headlineDiv)
            
            let descriptionDiv = document.createElement('div')
                descriptionDiv.setAttribute('class', 'headline')
                descriptionDiv.innerHTML = `<p>${viaplayAPILink.content.series.synopsis}<p>`
                displayDescription.appendChild(descriptionDiv)
            
            let yearDiv = document.createElement('div')
                yearDiv.setAttribute('class', 'year')
                yearDiv.innerHTML = `<p>${viaplayAPILink.content.production.year} ${viaplayAPILink._links['viaplay:genres'][0].title}<p>`
                displayYear.appendChild(yearDiv)
        });
    });
});