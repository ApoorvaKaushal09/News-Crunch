import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 5,
        category:'general'
      }
      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
      }
      capital = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);

      }
    constructor(props){
        super(props);
        console.log("Constructor ")
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults:0
        }
        
        document.title = `${this.capital(this.props.category)} - News Crunch`
    }
    async updatePage()
    {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f768a18fae4043b7a67d3699526fd48f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page,
            articles: parsedData.articles || [],
            loading:false
        })
    }

    async componentDidMount()
    {
        this.updatePage()
    }

    handlePrevClick = async () =>{
        
        this.setState({page:
          this.state.page-1})
          this.updatePage()

    }
    handleNextClick = async () =>{
        
      this.setState({page:
        this.state.page+1})
        this.updatePage()
    }

  render() {
    return (
      <div className='container my-5'>
        <center>
            <h1>News Crunch - Top {this.capital(this.props.category)}  Headlines</h1>
        </center>
        {this.state.loading && <Spinner/>}
        <div className="row my-3">
        {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
            <NewsItem source = {element.source.name} newsUrl = {element.url} title={element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,88):""} date={element.publishedAt} author={element.author} imageUrl={element.urlToImage?element.urlToImage:"https://s.yimg.com/uu/api/res/1.2/_eu1adeRJ.rdweo42h5tKQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/380e28c0-c1ca-11ed-97ff-c9e661fe4172.cf.jpg" } />
            </div>
        })}
            
            
        </div>
        <div className='my-3 container d-flex justify-content-between'>
        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize) || (this.state.articles === [])} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
        </div>
        
      </div>
    )
  }
}

export default News