// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/

function switchItUp(number){
    const words = { 0: 'Zero', 1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', }
    return words[number]

}
// switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]

console.log(switchItUp(1))
