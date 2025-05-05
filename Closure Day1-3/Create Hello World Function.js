
// Problem of Day1 about topic closure

// Problem Name:  Create Hello World Function

// Problem on leetcode: https://leetcode.com/problems/create-hello-world-function/description/

// Solution of this problem :

/**
 * @return {Function}
 */


var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};


  const f = createHelloWorld();
 f(); // "Hello World"
 