import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import image from '../tictactoepngicon.png'
import image2 from '../PngItem_5074466.png'
import image3 from '../—Pngtree—red color neon circle_6034608.png'
import { addEntry, flipTurn } from '../redux/actions';
import Comparison from './Comparison';


export const GameBoard2 = () => {
  const myState = useSelector ((state) => state.rowColumns)
  const myState2 = useSelector ((state) => state.Turner)

  const dispatch = useDispatch()
  let placeHolder = image2
  let placeHolder2 = image3
 
  let phSelector = (i) => {
    if (i) {
      return placeHolder
    }
    else {return placeHolder2}
  }

  let turn = phSelector(myState2)

  let [winnerstatement,setwinnerstatement]=useState(['Still Playing'])
  let [victor,setVictor] = useState('')
  let [editable,setEditable] = useState(true)
  let [winColor,setWinColor] = useState ('')

  useEffect(()=>{

    (function () {
              if (myState[0]!==undefined && myState[1]!==undefined && myState[2]!==undefined) {setwinnerstatement(Comparison(myState))}
              else if (myState[3]!==undefined && myState[4]!==undefined && myState[5]!==undefined) {setwinnerstatement(Comparison(myState))}
              else if (myState[6]!==undefined && myState[7]!==undefined && myState[8]!==undefined) {setwinnerstatement(Comparison(myState))}
              else if (myState[0]!==undefined && myState[3]!==undefined && myState[6]!==undefined) {setwinnerstatement(Comparison(myState))}
              else if (myState[1]!==undefined && myState[4]!==undefined && myState[7]!==undefined) {setwinnerstatement(Comparison(myState))}
              else if (myState[2]!==undefined && myState[5]!==undefined && myState[8]!==undefined) {setwinnerstatement(Comparison(myState))}
              else if (myState[0]!==undefined && myState[4]!==undefined && myState[8]!==undefined) {setwinnerstatement(Comparison(myState))}
              else if (myState[2]!==undefined && myState[4]!==undefined && myState[6]!==undefined) {setwinnerstatement(Comparison(myState))}

    })()

    if (winnerstatement[1]===placeHolder){  
      setEditable(false); setVictor('Blue won'); setWinColor ('blueplayer')
    }
    else if (winnerstatement[1]===placeHolder2) {setVictor('Red won') ; setEditable(false);setWinColor ('redplayer')}
   
  },[myState,winnerstatement])
  
  function dispatcher (turner,indexno,toggler) {
      if (toggler) {
    dispatch(addEntry(turner,indexno));dispatch(flipTurn())}
  }

  return (
      <div>
    {/* <div className='heading'>Tic Tac Toe <img src={image} alt='logo' length={40} width={40}/></div> */}
   
    <div className='main_container' >
    <span>
    <table className='board'>
        <tbody>
      <tr className='row1'>
          <td className='_11' onClick={()=>{if (!myState[0]) {dispatcher(turn,0,editable)}}} >{ <img src={myState[0]} alt='' length={40} width={40}/>}</td>
          <td className='_12' onClick={()=>{if (!myState[1]) {dispatcher(turn,1,editable)}}} >{ <img src={myState[1]} alt='' length={40} width={40}/>}</td>
          <td className='_13' onClick={()=>{if (!myState[2]) {dispatcher(turn,2,editable)}}} >{ <img src={myState[2]} alt='' length={40} width={40}/>}</td>
      </tr>

      <tr className='row2'>
          <td className='_21' onClick={()=>{if (!myState[3]) {dispatcher(turn,3,editable)}}} >{ <img src={myState[3]} alt='' length={40} width={40}/>}</td>
          <td className='_22' onClick={()=>{if (!myState[4]) {dispatcher(turn,4,editable)}}} >{ <img src={myState[4]} alt='' length={40} width={40}/>}</td>
          <td className='_23' onClick={()=>{if (!myState[5]) {dispatcher(turn,5,editable)}}} >{ <img src={myState[5]} alt='' length={40} width={40}/>}</td>
      </tr>

      <tr className='row3'>
          <td className='_31' onClick={()=>{if (!myState[6]) {dispatcher(turn,6,editable)}}} >{ <img src={myState[6]} alt='' length={40} width={40}/>}</td>
          <td className='_32' onClick={()=>{if (!myState[7]) {dispatcher(turn,7,editable)}}} >{ <img src={myState[7]} alt='' length={40} width={40}/>}</td>
          <td className='_33' onClick={()=>{if (!myState[8]) {dispatcher(turn,8,editable)}}} >{ <img src={myState[8]} alt='' length={40} width={40}/>}</td>
      </tr>
      </tbody>
    </table>
    </span>
    {/* <span className='sideelement'> lorem ipsum njfhkjdsfhkdljfhakljdfndjkvncmvndskjvndfkjnvdkfjvnfdskjvnkfjv </span> */}
      <br />
      <br />
    <p className={`${winColor}`}>{victor}</p>
    </div>
    </div>
  )
}



{/* <div className='row1'>
        <span className='_11' onClick={()=> {dispatch(addEntry(turn,0));dispatch(flipTurn());}}>{ <img src={myState[0]} alt='' length={40} width={40}/> }</span> 
        <span className='_12' onClick={()=> {dispatch(addEntry(turn,1));dispatch(flipTurn());}}>{ <img src={myState[1]} alt='' length={40} width={40}/> } </span>
        <span className='_13' onClick={()=> {dispatch(addEntry(turn,2));dispatch(flipTurn());}}>{ <img src={myState[2]} alt='' length={40} width={40}/> }</span>
    </div>
    <div className='row2'>
        <span className='_21' onClick={()=> {dispatch(addEntry(turn,3));dispatch(flipTurn());}}>{ <img src={myState[3]} alt='' length={40} width={40}/> } </span>
        <span className='_22' onClick={()=> {dispatch(addEntry(turn,4));dispatch(flipTurn());}}>{ <img src={myState[4]} alt='' length={40} width={40}/> } </span>
        <span className='_23' onClick={()=> {dispatch(addEntry(turn,5));dispatch(flipTurn());}}>{ <img src={myState[5]} alt='' length={40} width={40}/> } </span>
    </div>
    <div className='row3'>
        <span className='_31' onClick={()=> {dispatch(addEntry(turn,6));dispatch(flipTurn());}}>{ <img src={myState[6]} alt='' length={40} width={40}/> } </span>
        <span className='_32' onClick={()=> {dispatch(addEntry(turn,7));dispatch(flipTurn());}}>{ <img src={myState[7]} alt='' length={40} width={40}/> } </span>
        <span className='_33' onClick={()=> {dispatch(addEntry(turn,8));dispatch(flipTurn());}}>{ <img src={myState[8]} alt='' length={40} width={40}/> } </span>
    </div> */}


// function iter(ourarray,index1,index2,index3) {
  //   if (ourarray[index1]!==undefined && ourarray[index2]!==undefined && ourarray[index3]!==undefined )
  //   {return setwinnerstatement(Comparison(myState,index1,index2,index3)) }
  // }