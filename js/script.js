let sentence = prompt("Enter a sentence")
let wordNot = sentence.indexOf("not");
console.log(wordNot);
let wordBad  = sentence.indexOf("bad");
console.log(wordBad);
if(wordBad > wordNot) {
    let slice = sentence.slice(wordNot, wordBad + 3)
    console.log(sentence.replace(slice,"good"))
}else{
    console.log(sentence)

}