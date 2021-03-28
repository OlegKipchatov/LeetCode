/*
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
Return the array in the form [x1,y1,x2,y2,...,xn,yn].
https://leetcode.com/problems/shuffle-the-array/
*/

import CheckAnswer from '../utils/check-answer';

const questions = [{
        nums: [2, 5, 1, 3, 4, 7],
        n: 3,
        answer: [2, 3, 5, 4, 1, 7]     
    }, {
        nums: [1, 2, 3, 4, 4, 3, 2, 1],
        n: 4,
        answer: [1, 4, 2, 3, 3, 2, 4, 1]
    }, {
        nums: [1, 1, 2, 2],
        n: 2,
        answer: [1, 2, 1, 2]
    }
];

const shuffle = (nums: number[], n: number): number[] => {
    const arrX = nums.slice(0, n);
    const arrY = nums.slice(n);

    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(arrX[i])
        result.push(arrY[i])
    }

    return result;
};

export default () => {
    questions.forEach(question => {
        const answer = shuffle(question.nums, question.n);
        CheckAnswer(question, answer);
    });
};
