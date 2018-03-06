import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ImageCarousel from '../components/ImageCarousel'

class Home extends Component {
  // componentDidMount() {
  //   const contentNode = ReactDOM.findDOMNode(this.refs.content)
  //   if (contentNode){
  //     window.scrollTo(0, contentNode.offsetTop);
  //   }
  // }

  render() {
    return (
      <div ref="content" style={{ marginTop: '10px'}}>
        <h3>Welcome</h3>
        <ImageCarousel images={['../assets/homepage/photo_1.jpg', '../assets/homepage/photo_2.jpg', '../assets/homepage/photo_3.jpg']} />
      </div>
    )
  }
}

export default {
  component: Home
}
