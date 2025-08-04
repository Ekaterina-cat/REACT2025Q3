import type React from 'react';

const DescriptionProjectMe = (): React.JSX.Element => {
  return (
    <>
      <table className="w-full">
        <tbody>
          <tr>
            <td>
              <a
                href="https://rolling-scopes-school.github.io/ekaterina-cat-JSFE2024Q4/christmas-shop/home.html"
                className="w-25"
              >
                Christmas Shop
              </a>
            </td>
            <td className="w-40">
              <img
                src="icon-chris-shop.png"
                alt="icon-chris-shop"
                className="w-30"
              />
            </td>
            <td>
              <h4>
                <strong>Christmas Shop</strong> - daptive Website for a
                Christmas Toy Shop
              </h4>
              <ul>
                <li>
                  <strong>HTML5:</strong> Structured the content on web pages.
                </li>
                <li>
                  <strong>CSS3:</strong> Styled and designed adaptively, using
                  Flexbox and Grid Layout for positioning elements.
                </li>
                <li>
                  <strong>JavaScript:</strong> Added interactivity, including
                  opening and closing the burger menu, implementing a slider,
                  timer, modal windows, and other dynamic elements.
                </li>
                <li>
                  <strong>Figma:</strong> Utilized for designing the layout and
                  visual elements of the web pages, ensuring that the
                  implementation matched the intended design.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <a
                href="https://rolling-scopes-school.github.io/ekaterina-cat-JSFE2024Q4/simon-says"
                className="w-20"
              >
                Simon Says
              </a>
            </td>
            <td className="w-40">
              <img
                src="icon-simon-says.png"
                alt="icon-simon-says"
                className="h-25"
              />
            </td>
            <td>
              <h4>
                The task is a variant of the classical
                <strong>`Simon Says`</strong>
                game, where players must remember and reproduce sequences of
                keyboard symbols. In this task, `symbols`` refer only to letters
                and numbers.
              </h4>
              <p>
                Developed the interactive game <strong>`Simon Says`</strong>{' '}
                using
                <strong>HTML, CSS and JavaScript</strong>. The game requires
                users to memorize and reproduce sequences of keyboard symbols,
                offering three difficulty levels: easy (numbers only), medium
                (letters only) and hard (both letters and numbers).
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <a
                href="https://rolling-scopes-school.github.io/ekaterina-cat-JSFE2023Q4/hangman/"
                className="w-25"
              >
                Hangman
              </a>
            </td>
            <td className="w-40">
              <img src="icon-hangman.png" alt="icon-hangman" className="h-20" />
            </td>
            <td>
              <h4>
                <strong>Hangman</strong> is a classic word game in which you
                must find the correct answer by guessing letters one at a time.
              </h4>
              <p>
                Developed an interactive game called <strong>`Hangman`</strong>
                using <strong>HTML, CSS and JavaScript</strong>. The game
                consists of two main parts: the hangman and the quiz. The player
                must guess the letters in the hidden word related to the
                question to avoid building the hangman.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DescriptionProjectMe;
