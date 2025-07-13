import { Component, type ReactNode } from 'react';

class ErrorDataRetrieval extends Component {
  render(): ReactNode {
    return (
      <>
        <section className="flex justify-center items-center h-screen">
          <div className="border border-gray-500 p-4 uppercase font-bold text-4xl">
            Error description
          </div>
        </section>
      </>
    );
  }
}

export default ErrorDataRetrieval;
