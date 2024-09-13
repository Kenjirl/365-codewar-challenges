// https://www.codewars.com/kata/563f037412e5ada593000114/
// 14 September 2024

function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    
    while (principal < desired) {
        let accruedInterest = principal * interest;
        let taxedInterest = accruedInterest * (1 - tax);
        principal += taxedInterest; 
        years++;
    }
    
    return years;
}
