import React from 'react'
import { Table, Icon } from 'semantic-ui-react'

const TrackingTable = () => {
  return(
    <Table celled structured>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell rowSpan='5'>Tracking Number</Table.HeaderCell>
          <Table.HeaderCell rowSpan='5'>Carrier</Table.HeaderCell>
          <Table.HeaderCell rowSpan='5'>Mailed</Table.HeaderCell>
          <Table.HeaderCell width='two'>Delivered</Table.HeaderCell>
          <Table.HeaderCell rowSpan='5'>Delivered On</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>616X11807523</Table.Cell>
          <Table.Cell>Marken</Table.Cell>
          <Table.Cell>2019-10-04</Table.Cell>
          <Table.Cell textAlign="center"><Icon color='green' name='checkmark' size='large' /></Table.Cell>
          <Table.Cell>2019-10-08 09:48</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>2017106873</Table.Cell>
          <Table.Cell>DHL</Table.Cell>
          <Table.Cell>2019-09-30</Table.Cell>
          <Table.Cell textAlign="center"><Icon color='green' name='checkmark' size='large' /></Table.Cell>
          <Table.Cell>2019-10-01 14:46</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>776022057935</Table.Cell>
          <Table.Cell>FedEx</Table.Cell>
          <Table.Cell>2019-09-10</Table.Cell>
          <Table.Cell textAlign="center"><Icon color='green' name='checkmark' size='large' /></Table.Cell>
          <Table.Cell>2019-09-11 17:50</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

export default TrackingTable
