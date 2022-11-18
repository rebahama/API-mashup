import { Spinner } from "react-bootstrap";

import React from 'react'

const SpinnerBar = () => {
  return (
    <div>
    <p>Searching....</p><Spinner animation="border" variant="info"></Spinner>
    </div>
  )
}

export default SpinnerBar