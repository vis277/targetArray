/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
/**
 * step1 : take a blank array
 * step2 : iterate in the loop
 * step3 : keep adding the elemnts at targettted index using splice.
 * 
 */

 var createTargetArray = function(nums, index) {
    let arr=[];
 for(let i=0;i<nums.length;i++){
 
     
         arr.splice(index[i],0,nums[i]);
         console.log("LN21:",arr);
         
         // console.log("LN18:",arr);
 
     }
     return arr;
 }