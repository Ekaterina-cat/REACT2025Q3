import { Component } from 'react';

interface ButtonProps {
  onClick: () => void;
}

class Button extends Component<ButtonProps> {
  render() {
    return <button onClick={this.props.onClick}>search</button>;
  }
}

export default Button;
