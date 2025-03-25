import { CardElement } from '@stripe/react-stripe-js'
import React from 'react'

const StripePayment = ({clientSecret , stripe}) => {
  return (
    <>
        <CardElement />
    </>
  )
}

export default StripePayment
