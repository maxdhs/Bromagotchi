import React from 'react';
import skinny from '../images/skinny.gif';
import train from '../images/train.gif';
import fat from '../images/fat.png';
import strong from '../images/strong.png';
import eating from '../images/eating.png'

const Avatar = (props) => {
    if(props.isTraining) {
        return (
            <div className='train'>
                <img src={train} />
              </div>
            );
    }
    if(props.isEating) {
        return (
            <div>
                <img src={eating} />
              </div>
            );
    }
    else if(props.muscle < 15 && props.fat < 20) {
        return (
            <div>
                <img src={skinny} />
              </div>
            );
    }
    else if(props.fat > 30) {
        return (
            <div>
                <img src={fat} />
              </div>
            );
    }
    else if(props.muscle > 20) {
        return (
            <div>
                <img src={strong} />
              </div>
            );
    }
    else {
        return (
            <div>
                <img src={skinny} />
              </div>
            );
    }
    
}

export default Avatar;