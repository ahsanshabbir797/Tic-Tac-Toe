export const addEntry = (item,item2,item3) => {
    return {
        type : "ADDENTRY",
        payload:item,//payload : {item,item2} works too
        index:item2,
        winner:item3
    }
}

export const flipTurn = () => {
    return {
        type: "FLIPTURN",
    }
}

export const checkWinner = (item,item2) => {
    return {
        type:"CHECKWINNER",
        payload:item,
        index:item2
    }
}


// const testarray= [0,1,2,3,4,1,6,7,8,1]

// function tester (array) {
//     if (array[1]==array[5]==array[9]) return 'someone won'
//     else if (array[4]==array[5]==array[6]) return "someone won"
//     else if (array[2]==array[5]==array[8]) return "someone won"
//     else return 'no one won'
// }
// console.log("tester array= " + tester(testarray))
