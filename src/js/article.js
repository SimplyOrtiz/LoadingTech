// Function to navigate to the specified article
function goToArticle(articleName) {
    // Construct the URL based on the article name
    //const articlePath = `LoadingTech/subpages/articles/${articleName}.html`;
    const articlePath = `./articles/${articleName}.html`;
    
    // Redirect to the article page
    window.location.href = articlePath;
}