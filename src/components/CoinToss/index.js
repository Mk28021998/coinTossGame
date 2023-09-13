// Write your code here
import {Component} from 'react'
import './index.css'

const headUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {imageUrl: headUrl, headsCount: 0, tailsCount: 0}

  randomChangeCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImg = ''
    let latestHeadCount = headsCount
    let latestTailCount = tailsCount

    if (toss === 0) {
      tossImg = headUrl
      latestHeadCount += 1
    } else {
      tossImg = tailUrl
      latestTailCount += 1
    }

    this.setState({
      imageUrl: tossImg,
      headsCount: latestHeadCount,
      tailsCount: latestTailCount,
    })
  }

  render() {
    const {imageUrl, headsCount, tailsCount} = this.state
    const total = headsCount + tailsCount

    return (
      <div className="bg-app-container">
        <div className="card-cont">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="option-text">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="image" />
          <button type="button" className="button">
            Toss Coin
          </button>
          <div className="cont-cont">
            <p className="count-toss">Total: {total}</p>
            <p className="count-toss">Heads: {headsCount}</p>
            <p className="count-toss">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
