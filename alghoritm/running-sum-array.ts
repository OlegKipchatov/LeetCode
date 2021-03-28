/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
https://leetcode.com/problems/running-sum-of-1d-array/
*/

import CheckAnswer from '../utils/check-answer';

const questions = [{
        input: [1, 2, 3, 4],
        answer: [1, 3, 6, 10]
    }, {
        input: [1, 1, 1, 1, 1],
        answer: [1, 2, 3 ,4 ,5]
    }, {
        input: [3, 1, 2, 10, 1],
        answer: [3, 4, 6, 16, 17]
    }
];

const runningSumArray = (nums: number[]): number[] => {
    let sum = 0;

    const result = nums.map(num => {
        const temp = sum + num;
        sum = sum + num;
        return temp;
    })

    return result;
};

export default () => {
    questions.forEach(question => {
        const answer = runningSumArray(question.input);
        CheckAnswer(question, answer);
    });
};
