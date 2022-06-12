
let decision='' ;
const Comparison = (filledArray) => {
// console.log("filled array= "+ filledArray)
            //   if      (filledArray[index1]===filledArray[index2] && filledArray[index2]===filledArray[index3] ) {return ("someone won")}
            //   else {return ("Still playing")}
              
               
                   if (filledArray[0]===filledArray[1] && filledArray[1]===filledArray[2] && filledArray[1]) {return (["someone won",filledArray[1],''])}
              else if (filledArray[3]===filledArray[4] && filledArray[4]===filledArray[5] && filledArray[4] ) {return (["someone won",filledArray[4],''])}
              else if (filledArray[6]===filledArray[7] && filledArray[7]===filledArray[8] && filledArray[7] ) {return (["someone won",filledArray[7],''])}
              else if (filledArray[0]===filledArray[3] && filledArray[3]===filledArray[6] && filledArray[3] ) {return (["someone won",filledArray[3],''])}
              else if (filledArray[1]===filledArray[4] && filledArray[4]===filledArray[7] && filledArray[4] ) {return (["someone won",filledArray[4],''])}
              else if (filledArray[2]===filledArray[5] && filledArray[5]===filledArray[8] && filledArray[5] ) {return (["someone won",filledArray[5],''])}
              else if (filledArray[2]===filledArray[4] && filledArray[4]===filledArray[6] && filledArray[4] ) {return (["someone won",filledArray[4],''])}   
              else if (filledArray[0]===filledArray[4] && filledArray[4]===filledArray[8] && filledArray[4] ) {return (["someone won",filledArray[4],''])}
              else {return "Still Playing"}
 }

export default Comparison


// if      (filledArray[0]===filledArray[4]===filledArray[8]) {decision='someone won'; return decision}
//     else if (filledArray[2]===filledArray[4]===filledArray[6]) {decision='someone won'; return decision}
//     else if (filledArray[0]===filledArray[1]===filledArray[2]) {decision='someone won'; return decision}
//     else if (filledArray[3]===filledArray[4]===filledArray[5]) {decision='someone won'; return decision}
//     else if (filledArray[6]===filledArray[7]===filledArray[8]) {decision='someone won'; return decision}
//     else if (filledArray[0]===filledArray[3]===filledArray[6]) {decision='someone won'; return decision}
//     else if (filledArray[1]===filledArray[4]===filledArray[7]) {decision='someone won'; return decision}
//     else if (filledArray[3]===filledArray[4]===filledArray[5]) {decision='someone won'; return decision}

// const array = [[0,1,2],[5,6,7],[9,10,11]]

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log('test array ' + element)
// }