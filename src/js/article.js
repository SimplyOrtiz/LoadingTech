// Function to navigate to the specified article
function goToArticle(articleName) {
    // Construct the URL based on the article name
    const articlePath = `/subpages/articles/${articleName}.html`;
    
    // Redirect to the article page
    window.location.href = articlePath;
}