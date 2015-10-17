function checkSpam(str){
    var lowerStr=str.toLowerCase();
    return !!(~lowerStr.indexOf('spam') || ~lowerStr.indexOf('sex'));
}

console.log(checkSpam('get new Sex videos'));
console.log(checkSpam('[SPAM] How to earn fast money?'));
console.log(checkSpam('New PSD template'));