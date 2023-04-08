// mostly code from reactjs.org/docs/error-boundaries.html
import React, { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen w-full flex justify-center items-center text-3xl">
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to back to the home page.
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
