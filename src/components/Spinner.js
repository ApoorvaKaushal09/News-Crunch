import React, { Component } from 'react'
import loading from '../loading.gif'

export class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        {/* <iframe src="https://giphy.com/embed/L05HgB2h6qICDs5Sms" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/crearecreativita-loading-load-creare-creativita-L05HgB2h6qICDs5Sms">via GIPHY</a></p> */}
       
       <video src={loading}></video>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default spinner