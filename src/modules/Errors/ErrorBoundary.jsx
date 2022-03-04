import React from 'react';

import errorData from './errors.json';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      message: '',
      userMessage: '',
      cause: ''
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.

    try {
      error = JSON.parse(error.message);
    } catch (err) {
      error = {
        message: error.message,
        userMessage: error.userMessage ? error.userMessage : errorData.messages.technical,
        cause: error.cause ? error.cause : ''
      };
    }
    return {
      hasError: true,
      ...error
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error Messsage: ', this.state.message);
    console.error('Error User Message: ', this.state.userMessage);
    console.error('Error Possible Cause: ', this.state.cause);
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.userMessage ? this.state.userMessage : errorData.messages.technical}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
