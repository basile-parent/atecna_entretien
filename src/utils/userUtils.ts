const veryComplexScoreCalculation = (users) => {
    let score = 0
    for (let i = 0; i < 5000; i++) {
        score += users.reduce((s, user) => Math.random() > 0.5 ? s + user.name.first.length : s - user.name.first.length)
    }

    return score
}

export default {
    veryComplexScoreCalculation
}