let sign = ["gemini", "cancer", "scorpion", "terius","sun"]
let benefit = ["luck", "strength", "omen", "will"]
let should = ["trust no one", "help others", "love others", "kill others"]

function message(sign, benefit, should) = {
    sign: sign,
    benefit: benefit,
    should: should
}

let sign_random = Math.random()*sign.length
let benefit_random = Math.random()*benefit.length
let should_random = Math.random()*should.length

console.log(sign_random,benefit_random,should_random)
/* "Your sign is sun.", "You are having good luck.", "You should: 'trust no one'" */