function remainder(n, m){
    if (n == null || m == null || 
        (n == 0 && n < m) || 
        (m == 0 && m < n))
    return NaN;

    if (n > m)
        return n % m;

    return m % n;
}

function remainder(a, b){
    return a > b ? a % b : b % a;
}

function remainder(a, b){
    var min = Math.min(a,b);
    var max = Math.max(a,b);

    return min ? max % min : NaN;
}