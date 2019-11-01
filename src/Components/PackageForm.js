import React, { useState } from 'react'
import { Form, Segment, Grid } from 'semantic-ui-react'

const PackageForm = () => {

  const [ trackingNum, setTrackingNum ] = useState('')
  const [ carrier, setCarrier ] = useState('')

  const options = [
    { key: 'd', text: 'DHL', value: 'dhl'},
    { key: 'f', text: 'FedEx', value: 'fedex' },
    { key: 'm', text: 'Marken', value: 'marken'}
  ]

  const handleInput = (e, { name, value }) => {
    if(name === "tracking"){
      setTrackingNum(value)
    } else if (name === "carrier"){
      setCarrier(value)
    }
  }

  const handleTrackingNum = (e, { value}) => {
  }

  return(
    <Grid centered id="form-grid">
    <Form id="form">
      <Form.Group>
        <Form.Input inline label="Tracking Number" name="tracking" onChange={handleInput} value={trackingNum} />
        <Form.Select inline label="Carrier" name="carrier" options={options} onChange={handleInput} placeholder='Select Carrier' />
      </Form.Group>
    </Form>
    </Grid>
  )
}

export default PackageForm
