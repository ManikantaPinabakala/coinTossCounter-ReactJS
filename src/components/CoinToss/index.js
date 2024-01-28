import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    totalCount: 0,
    headCount: 0,
    tailCount: 0,
  }

  onTossCoin = () => {
    const num = Math.floor(Math.random() * 2)
    const headsOrTails = num === 0 ? 'heads' : 'tails'

    if (headsOrTails === 'heads') {
      this.setState(prevState => ({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        totalCount: prevState.totalCount + 1,
        headCount: prevState.headCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        totalCount: prevState.totalCount + 1,
        tailCount: prevState.tailCount + 1,
      }))
    }
  }

  render() {
    const {imageUrl, totalCount, headCount, tailCount} = this.state

    return (
      <div className="main-bg-container">
        <div className="bg-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img className="coin-image" src={imageUrl} alt="toss result" />
          <button
            className="toss-button"
            type="button"
            onClick={this.onTossCoin}
          >
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
