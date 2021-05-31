let fs = require('fs');
let array = fs.readFileSync(__dirname+'/' + '41.md').toString().split("\n");
let i = -1;
let fn;
let wc;
let word, word2;
let num;

while(++i < array.length) {
    word = array[i].split(" ");
    if(word[0] == "#") fn = word[1];
    else continue;

    while(++i < array.length) {
        let word2 = array[i].split(" ");
        if(word2[0] == "```javascript") {
            num = 1;
            break;
        }
        if(word2[0] == "```html") {
            num = 2; 
            break;
        }
    }

    wc = "";
    while(++i < array.length) {
        word2 = array[i].split(" ");
        if(word2[0] == "```") break;
        wc += array[i] + "\n";
    }

    if (num == 1) fs.writeFileSync(__dirname+'/' + fn + '.js', wc);
    if (num == 2) fs.writeFileSync(__dirname+'/' + fn + '.html', wc);
}