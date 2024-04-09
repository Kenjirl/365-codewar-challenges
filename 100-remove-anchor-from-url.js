// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/

function removeUrlAnchor(url){
    if (url.includes('#')) {
        return url.split('').slice(0, url.indexOf('#')).join('');
    }
    return url;
}

console.log(removeUrlAnchor('www.codewars.com#about'))
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))
console.log(removeUrlAnchor('www.codewars.com/katas/'))