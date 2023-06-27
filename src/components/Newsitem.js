import './component.css';
import React, { Component } from "react";
import blankimg from './blankimg.jpg';
export default class Newsitem extends Component {
  render() {
    let {title,description,urlToImage,url,author,date}=this.props;
    const d= new Date(date).toUTCString();
    return (
      <div>
        <div className="card bg-transparent border overflow-auto scroll" style={{ width: "18rem",height:"27rem" }}>
          <img src={!urlToImage?blankimg:urlToImage} className="card-img-top" style={{height:"12rem"}} alt="..." />
          <div className="card-body text-light">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
            {description}
            </p>
           <footer className="blockquote-footer">{!author?"NA":author}<p className='card-text text-secondary'>{d}</p></footer>
            
            <a rel="noreferrer" href={url} target="_blank" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
