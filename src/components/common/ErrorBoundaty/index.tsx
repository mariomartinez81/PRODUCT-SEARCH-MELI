/* eslint-disable react/destructuring-assignment */
import React from 'react';
import DebugDev from '@layouts/DebugDev';
import Unavailable from '@layouts/Unavailable';

interface MyState {
  errorInfo?: any;
  stringError?: string;
}
class ErrorBoundary extends React.Component<any, MyState> {
  constructor(props: any) {
    super(props);
    this.state = { errorInfo: null };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(`
      🚀 ~ file: ErrorBoundary.tsx ~ line 17 ~ ErrorBoundary ~ componentDidCatch ~ errorInfo
      ${error}
      ${errorInfo}
    `);
    const stringError = JSON.stringify(errorInfo, null, 2);

    this.setState({
      errorInfo,
      stringError,
    });
    // You can also log error messages to an error reporting service here
  }

  goToHome() {
    window.location.replace('/');
  }

  render() {
    if (this.state.errorInfo) {
      if (
        ['prod'].some((enviroment) =>
          window.location.origin.includes(enviroment),
        )
      ) {
        return <DebugDev stringError={this.state.stringError} />;
      }
      // Error path
      return (
        <Unavailable
          type={window.location.pathname === '/' ? 'home' : 'general'}
        />
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
export default ErrorBoundary;
