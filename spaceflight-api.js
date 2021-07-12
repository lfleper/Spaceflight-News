
function createArticles() {
    let articlesContainer = document.getElementById('articles-container');

    getArticles().then(articles => {
        articles.forEach(article => {
            console.log(article);
            let articleBox = getArticleHTMLSection(article);
            articlesContainer.appendChild(articleBox);
        });
    });
}

function getArticleHTMLSection(article) {
    let articleBox = document.createElement('section');
    articleBox.classList.add('article-box');

    let image = document.createElement('img');
    image.src = article.imageUrl;
    image.alt = article.title;

    let header = document.createElement('h3');
    header.innerHTML = "<a href='"+ article.url +"'>"+ article.title +"</a>";

    let subHeader = document.createElement('h5');
    subHeader.innerText = "@" + article.newsSite;

    let summary = document.createElement('p');
    summary.innerText = article.summary;

    articleBox.appendChild(image);
    articleBox.appendChild(header);
    articleBox.appendChild(subHeader);
    articleBox.appendChild(summary);

    return articleBox;
}

function getArticles() {
    return fetch("https://api.spaceflightnewsapi.net/v3/articles", {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(data => {
        return data.json();  
    })
    .catch(err => {
        console.log(err);
    });
}