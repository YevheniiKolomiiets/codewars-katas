function findKey(nums){
    let result = new Array(nums.length).fill('');
    let tmp = nums.map(num => String(num).split('')).forEach(arr => arr.forEach((n, i) => result[i] += n));
    return result.map(num => num.replace(new RegExp(num.charAt(0), 'g'), '').length === 1 ? num.replace(new RegExp(num.charAt(0), 'g'), '') : num[0]).join('');
}