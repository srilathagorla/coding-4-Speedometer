// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  Accelerate = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  applyBrakes = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading"> SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img-size"
        />

        <h1 className="heading">Speed is {count}mph</h1>

        <p className="heading">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="accelerate" onClick={this.Accelerate}>
            Accelerate
          </button>
          <button className="apply-brakes" onClick={this.applyBrakes}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
