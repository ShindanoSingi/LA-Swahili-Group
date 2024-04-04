import React from 'react'
import { Radio } from 'react-loader-spinner'

function Loader() {
  return (
    <div class="custom-loader">
        <Radio
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="radio-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />)
    </div>
  )
}

export default Loader