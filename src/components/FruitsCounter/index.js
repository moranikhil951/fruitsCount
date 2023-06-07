// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onIncrement = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1} = this.state
    const {count2} = this.state

    return (
      <div className="container">
        <div className="mini-container">
          <h1 className="heading">
            Bob ate <span className="spancolor">{count1}</span> mangoes{' '}
            <span className="spancolor">{count2}</span> bananas
          </h1>
          <div className="fruitContainer">
            <div>
              <img
                alt="EatMango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="MangoImg"
              />
              <div className="buttonFlexBanana">
                <button
                  className="Mangobutton"
                  type="button"
                  onClick={this.onIncrement}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div>
              <img
                alt="EatBanana"
                className="BananaImg"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <div className="buttonFlexBanana">
                <button
                  className="Bananabutton"
                  type="button"
                  onClick={this.onDecrement}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
