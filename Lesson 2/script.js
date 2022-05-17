
// bài 3
function triangle(height){
    let result = "";
    for (let i = 1 ; i <= height ; i++) {
        for (let k = height ; k > i ; k--) {
          result += " ";
        }
        for (let j = 1 ; j<= i ; j++) {
            result += "1" + " ";
        }
        result += "\n";
    }
    return result;
}
console.log(triangle(10));


// Bài 4
