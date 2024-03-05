import React, { useState } from 'react'

export const Form = () => {

    // Making state
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('');

    // Logic
    let calcBmi = (e)=> {

        e.preventDefault();

        if(weight===0 || height===0) {
            alert('Please enter a valid weight and height')
        }
        else {
            let bmi = (weight/(height*height)*703)
            //Bhaiya se puchna
            setBmi(bmi.toFixed(1))

            if(bmi<25) {
                setMessage('You are underweight')
            }
            else if(bmi>=25 && bmi < 30 ) {
                setMessage('You are a healthy weight')
            }
            else {
                setMessage('You arr overweight')
            }
        }
    }

    //bhaiya se
    let reload = () => {
        window.location.reload()
    }

    return (
        <div className='container'>
            <h2>BMI Calculater</h2>
            <form onSubmit={calcBmi}>
                <div>
                    <label>Weight (ibs)</label>
                    <input type='text' placeholder='Enter weight value' value={weight} onChange={(e) => setWeight(e.target.value)}></input>
                </div>
                <div>
                    <label>Height (in)</label>
                    <input type='text' placeholder='Enter Height value' value={height} onChange={(event) => setHeight(event.target.value)}></input>
                </div>

                <div>
                    <button className='btn' type='submit'>Submit</button>
                    <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
                </div>

                <div className='center'>
                    <h3>Your BMI is:{bmi}</h3>
                    <p>{message}</p>
                </div>
            </form>
        </div>
    )
}