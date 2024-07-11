const balanceBracket = (string) => {
    const queue = []
    const startBracket = '({['

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        const lastChar = queue[queue.length-1]
        if(startBracket.includes(char)) {
            queue.push(char)
        } else {
            if((lastChar === '(' && char === ')') || (lastChar === '{' && char === '}') || (lastChar === '[' && char === ']')){
                queue.pop()
            } else {
                return 'No'
            }
        }
    }
    if(queue.length === 0) return 'Yes'
    return 'No'
} 

console.log(balanceBracket('{[()]}'))
console.log(balanceBracket('{[(])}'))
console.log(balanceBracket('{(([])[])[]}'))