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
      <div className="w-full flex justify-end">
        <button
          onClick={this.props.onClick}
          className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
        >
          {this.state.nameBtn.toUpperCase()}
        </button>
      </div>
    );
  }
}

export default ButtonError;
