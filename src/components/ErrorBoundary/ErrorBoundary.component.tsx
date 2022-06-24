import React from "react";
import Error from "next/error";

type Props = {
  key: string;
};

class ErrorBoundary extends React.Component<Props, any> {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<any>,
    nextContext: any
  ): boolean {
    return this.props.key !== nextProps.key;
  }

  render() {
    if (this.state.hasError) {
      return <Error statusCode={500} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
