/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]".
https://leetcode.com/problems/defanging-an-ip-address/
*/

import CheckAnswer from '../utils/check-answer';

const questions = [{
        input: 'address = "1.1.1.1"',
        answer: '1[.]1[.]1[.]1'
    }, {
        input: 'address = "255.100.50.0"',
        answer: '255[.]100[.]50[.]0'
    }
];

const defangIPaddr = (address: string): string => {
    const maskIP = address.split('=').pop().replace(/\"/g, '').trim();

    const result = maskIP.replace(/\./g, '[.]');
    return result;
};

export default () => {
    questions.forEach(question => {
        const answer = defangIPaddr(question.input);
        CheckAnswer(question, answer);
    });
};
