import React, { Component } from 'react'

export class NewsItem extends Component {

    
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props
    return (
      <div>
        <div className="card my-3" >
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}<span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '85%', zIndex:'1'}}>{source}</span></h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {!author? 'unknown' : author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
