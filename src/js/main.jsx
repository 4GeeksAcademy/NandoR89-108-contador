import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// index.css'
import '../styles/index.css'


// components
function SimpleCounter(props){
return (
<div className="bigCounter">
  <div className="calendar">
    <i className="far fa-clock" />
  </div>
  <div className="four">{props.digitFour % 10}</div>
  <div className="three">{props.digitThree % 10}</div>
  <div className="two">{props.digitTwo % 10}</div>
  <div className="one">{props.digitOne % 10}</div>
</div>)
}

SimpleCounter.propTypes = {
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number,
}

const root = ReactDOM.createRoot(document.getElementById('root'));

let counter = 0
setInterval(function() {
  const four = Math.floor(counter/1000)
  const three = Math.floor(counter/100)
  const two = Math.floor(counter/10)
  const one = Math.floor(counter/1)
  counter++
root.render(
  <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>
)
},1000)


