/*
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
Return the wealth that the richest customer has.
A customer's wealth is the amount of money they have in all their bank accounts.
The richest customer is the customer that has the maximum wealth.
https://leetcode.com/problems/richest-customer-wealth/
*/

import CheckAnswer from '../utils/check-answer';

const questions = [{
        input: [[1, 2, 3], [3, 2, 1]],
        answer: 6
    }, {
        input: [[1, 5], [7, 3], [3, 5]],
        answer: 10
    }, {
        input: [[2, 8, 7], [7, 1, 3], [1, 9, 5]],
        answer: 17
    }
];

const arraySum = (accumulator, currentValue) => accumulator + currentValue;

const maximumWealth = (accounts: number[][]): number => {
    const sumAccounts = [];

    accounts.forEach(account => {
        const sum = account.reduce(arraySum);
        sumAccounts.push(sum);
    });

    const result = Math.max(...sumAccounts);

    return result;
};

export default () => {
    questions.forEach(question => {
        const answer = maximumWealth(question.input);
        CheckAnswer(question, answer);
    });
};
