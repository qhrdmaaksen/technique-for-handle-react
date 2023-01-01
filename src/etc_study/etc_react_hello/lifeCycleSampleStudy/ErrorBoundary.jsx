import { Component } from "react";

/** 에러가 발생하면 componentDidCatch method 가 호출되며 이 메서드는 this.state.error 값을 true 로 업데이트해주고
 * render 함수는 this.state.error 값이 true 가면 에러가 발생했음을 알려주는 문구를 보여줌*/
class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true,
    });
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return <div>에러가 발생했습니다.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
