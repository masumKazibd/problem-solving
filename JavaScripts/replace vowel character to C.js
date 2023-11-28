

var input = "I love My country";
var output = '';
for (let i =0; i<input.length; i++ ){
    var linput = input.charAt(i).toLowerCase();
        if(linput =='a'||linput =='e'||linput =='i'||linput =='o'||linput =='u'){
            output = output+"C";
        } else {
        output = output+input.charAt(i);
            
        }
}
console.log(output);
