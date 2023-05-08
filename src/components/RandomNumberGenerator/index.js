import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onGenerate = () => {
    const randomNum = Math.ceil(Math.random() * 100)

    this.setState({randomNumber: randomNum})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="desc">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.onGenerate} className="button">
            Generate
          </button>
          <p className="random-num">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
