let sign = ["gemini", "cancer", "scorpion", "terius","sun"]
let benefit = ["luck", "strength", "omen", "will"]
let should = ["trust no one", "help others", "love others", "kill others"]

function message(sign, benefit, should) {
    return {
        sign: sign,
        benefit: benefit,
        should: should
    }
}

let sign_random = Math.floor(Math.random()*sign.length)
let benefit_random = Math.floor(Math.random()*benefit.length)
let should_random = Math.floor(Math.random()*should.length)

console.log(sign_random,benefit_random,should_random)

let output_message = message(sign[sign_random],benefit[benefit_random],should[should_random])

console.log(`Your sign is ${output_message.sign}.`)
console.log(`You are having good ${output_message.benefit}.`)
console.log(`You should: '${output_message.should}'`)
/* "Your sign is sun.", "You are having good luck.", "You should: 'trust no one'" */