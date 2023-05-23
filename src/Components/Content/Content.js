import React from 'react'
import './Content.css'
import Form from '../Form/Form'
import Accordion from '../Accordion/Accordion'

const Content = () => {
  return (
    <div className='content'>
        <Form />
        <Accordion />
    </div>
  )
}

export default Content