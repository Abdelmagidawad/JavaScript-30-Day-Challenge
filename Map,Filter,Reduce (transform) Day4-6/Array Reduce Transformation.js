


// Problem of Day6 about topic Reduce (Higher Order Functions)

// Problem Name:  Array Reduce Transformation

// Problem on leetcode: https://leetcode.com/problems/array-reduce-transformation/description/

// Solution of this problem :

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result=init;
   
    // for(let i=0;i<nums.length;i++){
    //     result=fn(result,nums[i])
    // }
    
    //using forEach
    
    nums.forEach((n)=>{
        result=fn(result,n)
    })
    return result;
};
