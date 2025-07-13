import { Component, type ReactNode } from 'react';

interface ButtonProps {
  onClick: () => void;
}

class Button extends Component<ButtonProps> {
  state = {
    nameBtn: 'search',
  };
  render(): ReactNode {
    return (
      <button
        onClick={this.props.onClick}
        className="px-6 py-3 bg-gradient-to-r from-pink-700 to-yellow-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-700 ease-in-out transform hover:scale-105"
      >
        {this.state.nameBtn.toUpperCase()}
      </button>
    );
  }
}

export default Button;
