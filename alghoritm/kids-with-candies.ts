/*
Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them.
Notice that multiple kids can have the greatest number of candies.
https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
*/

import CheckAnswer from '../utils/check-answer';

const questions = [{
        candies: [2, 3, 5, 1, 3],
        extraCandies: 3,
        answer: [true, true, true, false, true]
    }, {
        candies: [4, 2, 1, 1, 2],
        extraCandies: 1,
        answer: [true, false, false, false, false]
    }, {
        candies: [12, 1, 12],
        extraCandies: 10,
        answer: [true, false, true]
    }
];

const kidsWithCandies = (candies: number[], extraCandies: number) => {
    const maxCandies = Math.max(...candies);
    const result = candies.map(candi => candi + extraCandies >= maxCandies);

    return result;
};

export default () => {
    questions.forEach(question => {
        const answer = kidsWithCandies(question.candies, question.extraCandies);
        CheckAnswer(question, answer);
    });
};
