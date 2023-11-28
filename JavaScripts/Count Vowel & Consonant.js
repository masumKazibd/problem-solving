var input = "I love My country";
var vowel = 0;
var consonant = 0;
for (let i = 0; i<input.length; i++ ){
    var linput = input.charAt(i).toLowerCase();
    if(linput !=' '){
        
        if(linput =='a'||linput =='e'||linput =='i'||linput =='o'||linput =='u'){
            vowel++;
        }
        else{
            consonant++;
        }
    }
}
console.log("Total vowel is :" + vowel);
console.log("Total Consonant is: " + consonant);