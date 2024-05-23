// https://www.codewars.com/kata/514a024011ea4fb54200004b/
// 21 Mei 2024

function domainName(url){
    const regex = /^(?:https?:\/\/)?(?:www\.)?/i;
    return url.replace(regex, '').split('.')[0];
}