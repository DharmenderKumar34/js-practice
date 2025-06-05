function countVowels(str) {
   
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    str.split("").map(res => {
        if (vowel.includes(res.toLowerCase())) {
            count++;
        }
    })
    // return count;
      console.log(count);

}


countVowels("JavaScript");