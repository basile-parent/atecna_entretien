import {User} from "../components/Liste";

const veryComplexScoreCalculation = (users: User[]): number => {
    let score = 0
    for (let i = 0; i < 10000; i++) {
        score += users.reduce((s, user) => Math.random() > 0.5 ? s + user.firstName.length : s - user.firstName.length, 0)
    }

    return score
}

export default {
    veryComplexScoreCalculation
}