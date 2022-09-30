const addToZero = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] == 0){
                return true
            }
            
        }
    }
    return false
}

//The time complexity is o(n^2)
//The space complexity is o(1)
console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True



const hasUniqueChars = (str) => {
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < str.length; j++)
            if(str[i] == str[j])
            return false
        }
        return true
    }

    // The time complexity is o(n^2)
    //The space complexity is o(n)
    console.log(hasUniqueChars("Monday"));
    // -> True
    
    console.log(hasUniqueChars("Moonday"));
    // -> False


    const isPangram = (str) => {
        let strArr = str.toLowerCase()
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
        for (let i = 0; i < alphabet.length; i++) {
            if (strArr.indexOf(alphabet[i]) < 0) {
                return false
            }
        }
        return true
    }
        
    //The time complexity is o(n)
    //The time complexity is o(1)
    console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
    // -> True
    
    console.log(isPangram("I like cats, but not mice"));
    // -> False)



    

    function findLongestWord(arr) {
        let arrWord = "";
        for(let i = 0; i < arr.length; i++) {
            if(arrWord.length < arr[i].length){
                words = arr[i]
            }
        }
        return words.length
    }
    console.log(findLongestWord(["hi", "hello", "bradyiscute"]))
// -> 5

//The time complexity is o(n)
//The space complexity is o(1)