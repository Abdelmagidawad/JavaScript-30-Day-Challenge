
// Problem of Day7 about topic Functions

// Problem Name:  Function Composition

// Problem on leetcode:  https://leetcode.com/problems/function-composition/description/

// Solution of this problem :

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        //using reduce
       
        return functions.reverse().reduce((accu,fun)=>{
            return accu=fun(accu);
        },x)
       
       //using for loop 

        // for(const fn of functions.reverse()){
        //     x=fn(x);
        // }
        // return x;
    }
};


  const fn = compose([x => x + 1, x => 2 * x])
  fn(4) // 9
 