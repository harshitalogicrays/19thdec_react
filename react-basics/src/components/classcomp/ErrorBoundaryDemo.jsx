import React, { Component } from 'react'
import ErrorComp from './ErrorComp'
import ErrorBoundary from './ErrorBoundary'

export default class ErrorBoundaryDemo extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
            <ErrorComp username="Shivam"/> 
        </ErrorBoundary>
        <ErrorBoundary>
            <ErrorComp username="Dilip"/> 
        </ErrorBoundary>
        <ErrorBoundary>
            <ErrorComp username="Joker"/> 
        </ErrorBoundary>
        <ErrorBoundary>
            <ErrorComp username="Pranab"/> 
        </ErrorBoundary>
      </div>
    )
  }
}
