const highestPalindrome = (s, k, pos = 0, lastCycle = false) => {
    const string = s.split('')
    const endPos = string.length - (pos+1)
    let newK = k
    if(string[pos] !== string[endPos]){
        if(k >= 2){
            if(Number(string[pos]) < 9) {
                string[pos] = '9'
                newK--
            }
            if(Number(string[endPos]) < 9) {
                string[endPos] = '9'
                newK--
            }
        } else if (k >= 1){
            const isPosHigher = Number(string[pos]) > Number(string[endPos])
            if(isPosHigher) string[endPos] = string[pos]
            else string[pos] = string[endPos]
            newK--
        }
    } else if (pos === endPos && (k === 1 || (k >= 1 && lastCycle)) ){
        string[pos] = '9'
        newK--
    } else if(k >= 2 && !lastCycle){
        if(string[pos] < 9){
            string[pos] = '9'
            string[endPos] = '9'
            newK -= 2
        }
    }
    if(string[pos] !== string[endPos]) return -1

    if(endPos - pos === 1 || endPos - pos === 0){
        if(newK >= 2 && !lastCycle) {
            return highestPalindrome(string.join(''), newK, 0, true)
        }
        return string.join('')
    } else {
        return highestPalindrome(string.join(''), newK, pos+1, lastCycle)
    }
}
console.log(highestPalindrome('3943', 1))
console.log(highestPalindrome('932239', 2))
console.log(highestPalindrome('1234221', 3))