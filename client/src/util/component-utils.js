export function prepareOrder(orderSummary, orderTotal) {
    orderSummary.sort()
    let msg = ''
    let temp = orderSummary[0]
    let pointer = 0
    for(let i=0;i<=orderSummary.length;i++) {
        let count = 0
        for(let j=pointer;j<=orderSummary.length;j++) {
            if(temp === orderSummary[j]) {
                count++
            } else if(`${temp}-` === orderSummary[j]) {
                count--
            } else {
                msg = msg + count.toString() + 'x' + temp + ' '
                temp = orderSummary[j]
                count = 0
                pointer = j
                break;
            }
        }
    }
    return orderTotal <= 0 ? 'no meal selected' : msg + `at total amount of ${orderTotal}`
}

export function generateOrderId() {
    return Math.random()*10000000000000000000
}