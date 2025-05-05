

// Problem of Day2 about topic closure

// Problem Name:  Counter

// Problem on leetcode: https://leetcode.com/problems/counter/description/

// Solution of this problem :

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count=n
    return function(){
        return count++;
    }
};

 
 const counter = createCounter(10)
  counter() // 10
  counter() // 11
  counter() // 12
 
