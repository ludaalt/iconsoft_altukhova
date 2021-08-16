export default (input) => {
    if(input.length === 0) return ''
    let arr = [];
    if(typeof input === 'string') {
        arr = input.split(' ')
    } else arr = Array.from(input)
    
    for (let i = 0; i < arr.length - 1; i += 1) {
        for (let j = i + 1; j < arr.length; j += 1) {
            if (arr[i] == arr[j]) {
                arr[i] = ''
                arr[j] = ''
            }
        }
    }
    return arr.filter(item => !!item).toString()
}