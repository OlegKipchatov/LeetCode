/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

import CheckAnswer from '../utils/check-answer';

var questions = [{
        nums: [2, 7, 11, 15],
        target: 9,
        answer: [0, 1]
    }, {
        nums: [0, 4, 3, 0],
        target: 0,
        answer: [0, 3]
    }, {
        nums: [-3, 4, 3, 90],
        target: 0,
        answer: [0, 2]
    }
];

const twoSum = function(nums, target) {
    // My answer
    for(let firstIndex = 0; firstIndex < nums.length - 1; firstIndex += 1) {
        const firstNum = nums[firstIndex];
        
        for(let secondIndex = nums.length; secondIndex != firstIndex; secondIndex -= 1) {
            const secondNum = nums[secondIndex];
            
            const sumNum = firstNum + secondNum;
            if(sumNum === target) {
                return [firstIndex, secondIndex];
            }
        }
    }

    // Fast algo from annieg4123
    /*
        Use a hashmap to store remainders: target - nums[i].
        Keys are the remainders and values are indices.
        In each iteration, check if nums[i] was calculated as a remainder from earlier iterations.
        If exists, return the index at the remainder and the current index.
    */
    /*
    const remainders = {};
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num in remainders)  {
            return [remainders[num], i];
        }

        remainders[target-num] = i;
    }
    */

    // One-pass Hash Table
    /*
    const values = new Map()
    for (let i = 0; i < nums.length; i++) {
        const targetSubtract = target - nums[i]
        const matchingValue = values.get(targetSubtract)
        if (matchingValue !== undefined) {
            return [matchingValue, i]
        }

        values.set(nums[i], i)
    }
    */
    
    throw new Error('This array no hase two sum solution');
};

export default () => {
    questions.forEach(question => {
        const answer = twoSum(question.nums, question.target);
        CheckAnswer(question, answer);
    });
}
