/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {  
    
    if(nums.length === 0) return 0;
    let numsObj={};
    let max = 1;
    let tempMax = 1;
    
    for(let i=0; i<nums.length; i++) {
        numsObj[nums[i]] = false;
    }
    
    for(const key in numsObj) {
                
        if (numsObj[parseInt(key) - 1] === undefined) {
            let tempMax = 0;
            while(numsObj[parseInt(key) + tempMax] !== undefined) {
                tempMax++;
            }
            max = Math.max(max, tempMax);
        }
    }
   return max;
    
};

const input=[100,4,200,1,3,2];

console.log(longestConsecutive(input));