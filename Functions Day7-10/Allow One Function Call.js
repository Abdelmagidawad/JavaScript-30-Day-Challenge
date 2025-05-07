
// Problem of Day8 about topic Functions

// Problem Name:  Allow One Function Call

// Problem on leetcode:  https://leetcode.com/problems/allow-one-function-call/description/

// Solution of this problem :

/**
 * @param {Function} fn
 * @return {Function}
 */

var once = function(fn) {
    let called=false;
    
    return function(...args){
        
        if(called){
            return undefined;
        }    
        called=true;
        return fn(...args);
    }
};


  let fn = (a,b,c) => (a + b + c)
  let onceFn = once(fn)
 
  onceFn(1,2,3); // 6
  onceFn(2,3,6); // returns undefined without calling fn

