const weightedStrings = (string, queries) => {
    const weights = []
    let lastSubstring = ''
    for (let i = 0; i < string.length; i++) {
        let substring = string[i]
        const weight = substring.charCodeAt(0)-96
    
        if(lastSubstring.includes(substring)) substring = lastSubstring + substring
        weights.push(weight*substring.length)
        lastSubstring = substring
    }
    return queries.map(item => {
        if (weights.includes(item)) return 'Yes'
        return 'No'
    })
} 
console.log(weightedStrings('abbcccd', [1, 3, 9, 8]))