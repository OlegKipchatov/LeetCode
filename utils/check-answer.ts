const printQuestion = (question) => {
    Object.keys(question).forEach(key => {
        if(key === 'answer') {
            return;
        }

        console.log(`${key}:`)
        console.table(question[key]);
    })
}

export default (question, expected) => {
    const jsonResult = JSON.stringify(question.answer);
    const jsonExpected = JSON.stringify(expected);

    if (jsonResult != jsonExpected) {
        printQuestion(question);
        throw new Error(`You answer: ${jsonResult}\nTrue answer: ${jsonExpected}`);
    }
}
