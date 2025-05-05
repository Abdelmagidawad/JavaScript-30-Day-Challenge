

// Problem of Day4 about topic Map (Higher Order Functions)

// Problem Name:  Apply Transform Over Each Element in Array

// Problem on leetcode:  https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/

// Solution of this problem :

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let array=[];
    
    for(let i=0;i<arr.length;i++){
        array.push( fn(arr[i],i));
    }
    
    return array;
};
