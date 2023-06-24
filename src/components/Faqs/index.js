// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="main-container">
      <div className="inside-container">
        <h1 className="title">FAQs</h1>
        <ul className="faqs-list-items">
          {faqsList.map(eachFaq => (
            <FaqItem key={eachFaq.id} faqsDetails={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
