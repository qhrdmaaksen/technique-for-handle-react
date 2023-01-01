import { Component } from "react";

const Style = {
  border: "1px solid black",
  height: "300px",
  width: "300px",
  overflow: "auto",
  position: "relative",
};

const innerStyle = {
  width: "100%",
  height: "650px",
  background: "linear-gradient(white, black)",
};

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };
  render() {
    return (
      <div
        style={Style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default ScrollBox;
