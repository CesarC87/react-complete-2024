import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

    constructor(){
        super()
        this.state = {
            hasError: false
        }
    }

  componentDidCatch(error){
    console.log('err',error)
    this.setState({hasError:true})
  }

  render() {
    if(this.state.hasError){
        return <p>Something is wrong!</p>
    }
    return this.props.children
  }
}

