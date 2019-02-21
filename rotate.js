
/* function rotate(input_list, rotate_steps) {
    let listLength = input_list.length;
    return input_list.slice(rotate_steps, input_list.length).concat(input_list.slice(0, rotate_steps));
    //this method makes a copy of the list, so just going to use for loop
}
 */

function rotate(input_list, rotate_steps) {
    let result = [];
    for(let i = rotate_steps; i < input_list.length; i++){
        result.push(input_list[i]);
    }
    for(let j = 0; j < rotate_steps; j++){
        result.push(input_list[j]);
    }

    return result;
}

console.log(rotate([1,2,3,4,5], 2));
console.log(rotate([1,2,3,4,5], 3));
console.log(rotate([1,2,3,4,5], 4));
console.log(rotate([1,2,3,4,5], 5));
console.log(rotate([1,2,3,4,5], 6));