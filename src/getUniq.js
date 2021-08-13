export default (input) => {
    if(input.length === 0) return ''
    let arr = [];
    if(typeof input === 'string') {
        arr = input.split(' ')
    } else arr = Array.from(input)

    let targetId = arr[0];
    for (let i = 0; i < arr.length -1 ; i += 1) {        
        for (let j = i + 1; j < arr; j += 1) {
            if(targetId === arr[j]) targetId = arr[j]
        }
    }
    
    return targetId;
}