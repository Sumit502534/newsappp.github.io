import React from 'react'

const NewsItem = (props) => {
  // destructuring
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card" >
              <div style={{ display:'flex',justifyContent:'flex-end',position:'absolute',right:'0' }}>
                <span className="badge rounded-pill bg-secondary">{source}</span>
              </div>
            <img src={!imageUrl? "https://png.pngtree.com/element_pic/16/10/21/277448a877a33e8d0efc778025291c86.png" : imageUrl}
            className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="" style={{color:'#1711e1'}}>By {author?author: "Unknown"} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  
}

export default NewsItem
