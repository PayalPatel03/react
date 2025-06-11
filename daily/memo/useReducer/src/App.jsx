import React, { useReducer } from 'react'

function App() {
  const reducer=(state,action)=>{
    switch(action.type){
      case 'increment':
        return state+=1;
        case 'decrement':
          return state-+1;
          case 'reset':
            return 0;

    }

  }

  const[state,dispatch]=useReducer(reducer,0);
  return (
    <>
    <h2>Count:{state}</h2>
    <button onClick={()=> dispatch ({type:'increment'})} className='btn btn-info'>Increment</button>
    <button onClick={()=> dispatch ({type:'decrement'})} className='btn btn-info'>Decrement</button>
    <button onClick={()=> dispatch ({type:'reset'})} className='btn btn-info'>Reset</button>
      
    </>
  )
}

export default App
