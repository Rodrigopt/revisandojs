let nums = [3, 3];
let target = 6;

for (i = 0; i <= nums.length; i++) {
    for (j = i+1; j <= nums.length ; j++)
        if (nums[i] + nums[j] === target) {
            console.log(i,j);
        }
}