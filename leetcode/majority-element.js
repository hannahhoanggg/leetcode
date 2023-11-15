const majorityElement = function(nums) {
    let count = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!count[num]) {
            count[num] = 1;
        } else {
            count[num]++;
        }
    if (count[num] > nums.length /2) {
        return num;
     }
    }
};

const nums = [2, 2, 1, 1, 1, 2, 2];
const result = majorityElement(nums);
console.log(result);
