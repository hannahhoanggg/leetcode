// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/description/
// array & hashing

const countKDifference = function(nums, k) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) {
                count++;
            }
        }
    }
    return count;
};

let nums = [1, 3, 5, 7];
let k = 2;
console.log(countKDifference(nums, k));