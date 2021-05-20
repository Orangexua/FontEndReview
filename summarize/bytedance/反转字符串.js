var a = 'wo ai xuannan';
var b = a.split(' ').filter(function (s) {
    return s.trim();
}).reverse().join(' ');
console.log(a , b);