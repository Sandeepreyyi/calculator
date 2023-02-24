import React,{useState} from 'react'
function Calculator() {
    const [input,setInput]=useState('')
    const [result,setResult]=useState(0)
    const handler=e=>{
        setInput(e.target.value)
    }
  return (
    <div > 
        <input type="text" value={input} onChange={handler}/>
         <br></br>
          <button onClick={()=>setResult(eval(input))}>result</button>
          <h1>{result}</h1>
          <button onClick={()=>setInput(input+'1')}>1</button>
          <button onClick={()=>setInput(input+'2')}>2</button>
          <button onClick={()=>setInput(input+'3')}>3</button><br/>
          <button onClick={()=>setInput(input+'4')}>4</button>
          <button onClick={()=>setInput(input+'5')}>5</button>
          <button onClick={()=>setInput(input+'6')}>6</button><br/>
          <button onClick={()=>setInput(input+'7')}>7</button>
          <button onClick={()=>setInput(input+'8')}>8</button>
          <button onClick={()=>setInput(input+'9')}>9</button><br/>
          <button onClick={()=>setInput(input+'0')}>0</button>
          <button onClick={()=>setInput(input+'+')}>+</button>
          <button onClick={()=>setInput(input+'-')}>-</button><br/>
          <button onClick={()=>setInput(input+'/')}>/</button>
          <button onClick={()=>setInput('')}>clr</button>
          <button onClick={()=>setInput(input+'*')}>*</button><br/>
    </div>
  )
}
export default Calculator