import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export const Welcome = () => {
    return (
        <button className="button">
        <Link to="/bro"><span>Play </span></Link>
        </button>
    );
}

export default Welcome;