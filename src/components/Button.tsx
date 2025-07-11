import { Component } from 'react';

interface ButtonProps {
  onClick: () => void;
}

class Button extends Component<ButtonProps> {
  state = {
    nameBtn: 'search',
  };
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.state.nameBtn.toUpperCase()}
      </button>
    );
  }
}

export default Button;
