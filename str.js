var str = "At this checkpoint you are asked to write an algorithm that read a sentence which ends with a point character by character."
var nmb_words   = str.split(' ').length
var nmb_vowels =0
var vowels =["e","i","o","y","a","u"]
/*for (var i= 0; i < str.length; i++) {
    for(var j=0 ; j<vowels.length;j++){
        if(vowels[j]==str[i])
        nmb_vowels++
    }     
}*/
for (var i= 0; i < str.length; i++){
    var nmbv=vowels.indexOf(str[i])
    if(nmbv!=-1){
        nmb_vowels++
    }
}
    
console.log("The length of the sentence: "+(str.length))
console.log("The number of word is: "+nmb_words)
console.log("The number of vowels is: "+nmb_vowels)