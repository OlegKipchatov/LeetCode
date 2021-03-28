/*
This is a template for create a new project
*/

import CheckAnswer from '../utils/check-answer';

const questions = [];

const taskName = () => {};

export default () => {
    questions.forEach(question => {
        const answer = taskName();
        CheckAnswer(question, answer);
    });
};
