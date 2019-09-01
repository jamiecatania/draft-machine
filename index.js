Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

const bidMap = {
    jamie: 1,
    peter: 3,
    noah: 4,
    jeff: 5,
    nick: 8,
    andy: 11,
    ryan: 14,
    shane: 18,
    jimmy: 18,
    chris: 18
}

let remainingBids = []

const finalDraftOrder = []

const initBidArray = () => {
    for (let [key, value] of Object.entries(bidMap)) {
        for (let i = value; i > 0; i--) {
            remainingBids.push(key)
        }
    }
}

const removeFromBidArray = name => {
    const newArr = remainingBids.filter(b => b !== name)
    return newArr
}

const makeSelection = () => {
    const name = remainingBids.random()
    console.log(`Picked ${name}`)
    finalDraftOrder.push(name)
    remainingBids = removeFromBidArray(name)
}

initBidArray()

while (remainingBids.length > 0) {
    makeSelection()
}

console.log('Draft order: ', finalDraftOrder)

