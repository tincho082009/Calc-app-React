//Importacion
import React from 'react'
import Result from './components/Result'
import Button from './components/Button'
import MathOperations from './components/MathOperations'
import Functions from './components/Functions'
import './App.css'

//Arrow function
const App = () => {
    //Lo que ejecuta la funcion
    return (<main className='react-calculator'>
       <Result value={"0"}/>
        <div className="numbers">
           <Button text="1" clickHandler={(text) => {console.log(text)}}/>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
        </div>
        <Functions 
            onContentClear = {
                clear => console.log(clear)}
            onDelete = {
                nose => console.log(nose)} 
                />
        <MathOperations 
            onClickOperation = {
                operation => console.log(operation)} 
            onClickEqual = 
                {equal => console.log(equal)}
        />
    </main> )

}

//Exportacion
export default App