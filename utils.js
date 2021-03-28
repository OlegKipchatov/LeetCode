const printQuestion = (question) => {
    Object.keys(question).forEach(key => {
        console.log(`${key}:`)
        console.table(question[key]);
    })
}

module.exports = {
    printQuestion
}
