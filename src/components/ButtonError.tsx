import { Component } from 'react';

interface ButtonProps {
  onClick: () => void;
}

class ButtonError extends Component<ButtonProps> {
  state = {
    nameBtn: 'error',
  };
  render() {
    return (
      <button onClick={this.props.onClick} className="mr-0">
        {this.state.nameBtn.toUpperCase()}
      </button>
    );
  }
}

export default ButtonError;
