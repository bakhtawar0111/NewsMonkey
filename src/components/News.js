import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spiner from "./Spiner.js";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  static defaultProps={
    country:'in',
    category:'general'
  }
  static defaultPropsTypes={
    country: PropTypes.string,
    category: PropTypes.string
  }
  capitalizeFirst=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      page:1,
      loading:false,
      totalResults:0,
    };
    document.title=`${this.capitalizeFirst(this.props.category)}-NewsMonkey`;
  }
  async upadatenews(){
    this.props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
    })
    this.props.setProgress(20);
    let data=await fetch(url);
    this.props.setProgress(30);
    let parseddata= await data.json();
    this.props.setProgress(50);
   this.setState({
    article: parseddata.articles,
    totalResults:parseddata.totalResults,
    loading:false
    });
    this.props.setProgress(100);
  }
 async componentDidMount(){
    this.upadatenews();
  }
  handleNextClick= async ()=>{
    this.setState({
      page:this.state.page+1
    })
    this.upadatenews();
  }
  handlePrevClick= async ()=>{
    this.setState({
      page:this.state.page-1
    })
    this.upadatenews();
  }
  fetchMoreData = async () => {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=44c1e79d59224a079af569d1cdb3e9da&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({page:this.state.page+1})
    this.setState({
      loading:true
    })
    let data=await fetch(url);
    let parseddata= await data.json();
   this.setState({
    article: this.state.article.concat(parseddata.articles),
    totalResults:parseddata.totalResults,
    loading:false
    });
  };
  render() {
    return (
      <>
        <div className="container">
        <h1 className="bg-transparent rounded py-1 text-light text-center" style={{marginTop:'100px'}}><span className="ms-2">NewsMonkey-Top {this.capitalizeFirst(this.props.category)} Headlines</span></h1>
        <hr style={{color:"red"}}/>
        {this.state.loading && <Spiner/>}
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalResults}
          loader={this.state.loading && <Spiner/>}
        >
        <div className="container">
        <div className="row">
          {this.state.article.map((element) => {
            return (
              <div className="col-lg-4 col-md-6 my-2 d-flex justify-content-around" key={element.url}>
                <Newsitem title={!element.title?element.title:element.title.slice(0,45)} description={!element.description?element.description:element.description.slice(0,65)} urlToImage={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt}/>
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
        </div>
      </>
    );
  }
}
