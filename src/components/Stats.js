import React from 'react';


function Stats(props) {

    return(
       <div>
           <div className='Energy'>
                <h1>energy: {props.energy}</h1>
           </div>
           <div className='Muscle'>
                <h1>muscle: {props.muscle}</h1>
           </div>
           <div className='Fat'>
                <h1>fat: {props.fat}</h1>
           </div>
           <div className='Moeny'>
                <h1>money: {props.money}</h1>
           </div>
           <div className='Happiness'>
                <h1>happiness: {props.happiness}</h1>
           </div>
           <div className='Stress'>
                <h1>stress: {props.stress}</h1>
           </div>
           <div className='Alive'>
                <h1>alive: {props.alive.toString()}</h1>
           </div>
       </div>
    )
}
export default Stats;