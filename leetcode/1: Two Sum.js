//https://leetcode.com/problems/two-sum/description/
// arrays & hashing


const twoSum = function(nums, target) {
    let map = new Map(); 
    for (let i=0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return null;
};

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target)); 