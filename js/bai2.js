let number = prompt("Enter the number");
str = number.toString();
arr = [str[0]];

for (let index = 1; index<str.length;index ++){
    if(str[index-1]%2==0&&str[index]%2==0){
        arr.push("-" , str[index]);
    }else
    arr.push(str[index]);
}
prompt(arr.join(""));