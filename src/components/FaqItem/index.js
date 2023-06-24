// Write your code here.
import {Component} from 'react'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  clickOnIconButton = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const imageUrl = isActive ? minusImage : plusImage
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button
        type="button"
        className="icon-button"
        onClick={this.clickOnIconButton}
      >
        <img src={imageUrl} alt={altText} className="icon-image" />
      </button>
    )
  }

  renderAnswerText = () => {
    const {isActive} = this.state
    const {faqsDetails} = this.props
    const {answerText} = faqsDetails

    if (isActive) {
      return (
        <div>
          <hr />
          <p>{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqsDetails} = this.props
    const {questionText} = faqsDetails

    return (
      <li className="list-items">
        <div>
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswerText()}
      </li>
    )
  }
}

export default FaqItem
