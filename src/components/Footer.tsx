import type React from 'react';

const Footer = (): React.JSX.Element => {
  return (
    <>
      <footer className="flex flex-row justify-between items-center h-15">
        <a href="https://rs.school/courses/reactjs">
          <img src="rs_school_js.svg" alt="rs_school_js" className="h-10" />
        </a>
        <h3 className="font-bold">2025</h3>
        <a
          href="https://github.com/Ekaterina-cat"
          className="flex flex-row justify-center items-center caret-amber-950 font-bold text-black-500 hover:text-red-700 transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <img src="logo_github.png" alt="logo_github" className="h-10" />
          <h3 className="uppercase">Katsiaryna Dounar</h3>
        </a>
      </footer>
    </>
  );
};

export default Footer;
