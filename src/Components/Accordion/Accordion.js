import React, {useState} from 'react'
import './Accordion.css'

const Accordion = () => {
    const [activeItem, setActiveItem] = useState(null);

    const accordionItems = [
        {
          title: 'How can I cancel a payment?',
          content: 'Payments are processed instantly and are final. Please refer to our refund policy if warranted.'
        },
        {
          title: 'How long does it take for a payment to reflect?',
          content: 'Once you submit a payment, expressPay verifies your payment authorization with your bank and then securely submits it to the biller. Most payments are reflected instantly on your account and we will keep you updated on the status of all pending payments.'
        },
        {
            title: 'What can I use to pay?',
            content: 'You can use your debit, credit card, bank or other payment account to make payments with expressPay.'
          },
        {
            title: 'Why is there a limit on my account?',
            content: 'Due to BoG regulations, each account has a set number of transactions that can be performed daily. However, at your request, that limit can be increased after the required verification process has been completed.'
        },
      ];


  return (

  <div className="accordion">
    <h3>Frequently Asked Questions</h3>
        {accordionItems.map((item, index) => (
      <div className='accordion-index' key={index}>
        <button
          className="accordion-item"
          onClick={() => setActiveItem(index === activeItem ? null : index)}
        >
          {item.title}

        </button>
         <div className= {index === activeItem ? "accordion-content" : "accordion-hidden"}>{item.content}</div>
      </div>
        ))}
  </div>

  )
}

export default Accordion