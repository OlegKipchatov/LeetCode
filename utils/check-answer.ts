const printQuestion = (question) => {
    Object.keys(question).forEach(key => {
        if(key === 'answer') {
            return;
        }

        console.log(`${key}:`)
        console.table(question[key]);
    })
}

export default (question, currentAnswer) => {
    const jsonResult = JSON.stringify(currentAnswer);
    const jsonExpected = JSON.stringify(question.answer);

    if (jsonResult != jsonExpected) {
        printQuestion(question);
        throw new Error(`You answer: ${jsonResult}\nTrue answer: ${jsonExpected}`);
    }
}
