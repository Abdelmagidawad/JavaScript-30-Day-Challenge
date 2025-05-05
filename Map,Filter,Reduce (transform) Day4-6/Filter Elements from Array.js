


// Problem of Day5 about topic Filter (Higher Order Functions)

// Problem Name:  Filter Elements from Array

// Problem on leetcode: https://leetcode.com/problems/filter-elements-from-array/description/

// Solution of this problem :

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result=[];

    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
        result.push(arr[i]);
        }
    }
    
    return result;
};
