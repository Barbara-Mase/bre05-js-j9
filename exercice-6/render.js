export function fillArticle (articleId, userData) {
    let article = document.getElementById(articleId);
    let h2 = document.createElement('h2');
    let userFullName = document.createTextNode(userData);
    h2.appendChild(userFullName);
    article.appendChild(h2);
}