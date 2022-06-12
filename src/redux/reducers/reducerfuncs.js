let r1 = new Array (10)
let turner = true
let r2 = 'Still playing'

// let r1=[0,0,0,0,0,0,0,0,0]

export const rowColumns = (state=r1,action) => {
    
    switch (action.type) {
        case "ADDENTRY": 
            let newArray = [...state]
            newArray.splice(action.index,1,action.payload) // newArray.splice(action.payload.item2,1,action.payload.item) works as well
            
            // console.log("main before condition= "+ newArray)
            // return newArray
            // if      (newArray[0]===newArray[4]===newArray[8]) {winnerstatement = "someone won";console.log("before condition= "+ winnerstatement); return [...newArray,newArray[9]=winnerstatement] }
            
            // else if (newArray[2]===newArray[4]===newArray[6]) {winnerstatement = "someone won"; return [...newArray,newArray[9]=winnerstatement]}
            // else if (newArray[0]===newArray[1]===newArray[2]) {winnerstatement = "someone won"; return [...newArray,newArray[9]=winnerstatement]}
            // else if (newArray[3]===newArray[4]===newArray[5]) {winnerstatement = "someone won"; return [...newArray,newArray[9]=winnerstatement]}
            // else if (newArray[6]===newArray[7]===newArray[8]) {winnerstatement = "someone won"; return [...newArray,newArray[9]=winnerstatement]}
            // else if (newArray[0]===newArray[3]===newArray[6]) {winnerstatement = "someone won"; return [...newArray,newArray[9]=winnerstatement]}
            // else if (newArray[1]===newArray[4]===newArray[7]) {winnerstatement = "someone won"; return [...newArray,newArray[9]=winnerstatement]}
            // else if (newArray[3]===newArray[4]===newArray[5]) {winnerstatement = "someone won"; return [...newArray,newArray[9]=winnerstatement]}
            // else {return newArray}
            return newArray
        default : return state
        
    }
}

export const Turner =(state=turner,action) => {
    // console.log ("flip= " + state)
    switch (action.type) {
        case "FLIPTURN": 
        return !state
        default: return state
    }
}

export const checkWinner= (state=r2,action) => {
    switch (action.type) {
        case "CHECKWINNER":
           const winArray=[...action.payload]
            // console.log("winner array= " + winArray)

            if      (winArray[0]===winArray[4]===winArray[8]) return state = "someone won"
            else if (winArray[2]===winArray[4]===winArray[6]) return state = "someone won"
            else if (winArray[0]===winArray[1]===winArray[2]) return state = "someone won"
            else if (winArray[3]===winArray[4]===winArray[5]) return state = "someone won"
            else if (winArray[6]===winArray[7]===winArray[8]) return state = "someone won"
            else if (winArray[0]===winArray[3]===winArray[6]) return state = "someone won"
            else if (winArray[1]===winArray[4]===winArray[7]) return state = "someone won"
            else if (winArray[3]===winArray[4]===winArray[5]) return state = "someone won"
            else return state
        default:return state
    }
}
    








// [ ...state,state[action.payload.item2] = action.payload.item]

// [...state,action.payload.item2=action.payload.item]



// switch (action.type) {
    //     case "CHECKWINNER":
    //         let winArray = [...state]
    //         winArray.splice(action.index,1,action.payload) // newArray.splice(action.payload.item2,1,action.payload.item) works as well
    //         console.log('winArray= '+winArray)
          
    //         if      (winArray[0]===winArray[4]===winArray[8]) {state = ["someone won"]; return state}
    //         else if (winArray[2]===winArray[4]===winArray[6]) {state = ["someone won"]; return state}
    //         else if (winArray[0]===winArray[1]===winArray[2]) {state = ["someone won"]; return state}
    //         else if (winArray[3]===winArray[4]===winArray[5]) {state = ["someone won"]; return state}
    //         else if (winArray[6]===winArray[7]===winArray[8]) {state = ["someone won"]; return state}
    //         else if (winArray[0]===winArray[3]===winArray[6]) {state = ["someone won"]; return state}
    //         else if (winArray[1]===winArray[4]===winArray[7]) {state = ["someone won"]; return state}
    //         else if (winArray[3]===winArray[4]===winArray[5]) {state = ["someone won"]; return state}
    //         break
    //         default: return state

    //         }
       
    // }
