let input = prompt("Enter your text:");
let UPPER="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LOWER="abcdefghijklmnopqrstuvwxyz";
let result = [];

for(let index = 0 ; index <input.length;index++){
    if(UPPER.indexOf(input[index])!== -1){ //So sanh ky tu tai vi tri index cua mang input voi ki tu viet hoa trong mang UPPER
        let changed = input[index].toLowerCase(); // ham toLowerCase() ; chuyen doi ki tu in hoa ve ki tu in thuong
        result.push(changed);

    }else if (LOWER.indexOf(input[index])!== -1){
        changed = input[index].toUpperCase();
        result.push(changed);
    }else{
        result.push(input[index]);
    }
}
alert(result.join(""));
