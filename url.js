const url = require('url');

const myUrl = '/products?category=books&sort=price';

const parsedUrl = url.parse(myUrl, true);

console.log("Pathname:", parsedUrl.pathname);
console.log("Query Parameters:", parsedUrl..query);