
// Problem of Day3 about topic closure

// Problem Name:  Counter II

// Problem on leetcode: https://leetcode.com/problems/counter-ii/description/

// Solution of this problem :

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function(init) {
    let count=init;

    function increment(){
        return ++count;
    }
    function decrement(){
        return --count;
    }
    function reset(){
        count =init;
        return count;
    }

    return {increment:increment,decrement:decrement,reset:reset}
};

// Another solution using class

// class createCounter {
//   constructor(init) {
//     this.init = init;
//   }

//   increment() {
//     return ++this.init;
//   }

//   decrement() {
//     return --this.init;
//   }

//   reset() {
//     return this.init;
//   }
// }

const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
