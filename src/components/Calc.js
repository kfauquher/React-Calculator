import React, {useState} from 'react'
import './calc.css'
import './buttons.css'
import Buttons from './Buttons'


const Calc = () => {

    const [res, setResult] = useState('')

    const findvalue = () => {
      let result = Function('return '+res)();
      setResult(result.toString());

    }

    const handler = (arg) => {
      
      if(arg === 'C') setResult('');
      else if (arg === 'ENTER') findvalue();
      else if (arg === 'DEL'){
        let n = res.length;
        if(n > 0)
        setResult(res.slice(0, n-1));
      }
      else setResult(res.concat(arg))

}

  const buttons = ['C', 'DEL', '**', '/', '+', '-','*', '(', ')', '1', '2', '3', '4', '5','6', '7', '8', '9', '0', '.', 'ENTER'];



  return (
    <div className = 'background'>
      <div className = 'inner_calc'>
        <div className = 'results_calc'>
          <div className = 'inner_results'>
            {res}

          </div>
        </div>

        <div className = 'buttons'>
          {buttons.map((element,index)=> {return <Buttons handler = {handler} value = {element} key = {index} />})}

        </div>
      </div>
    </div>
  )
}

export default Calc