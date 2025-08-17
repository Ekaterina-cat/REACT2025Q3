import type React from 'react';

interface ItemContactProps {
  imgSrc?: string;
  imgAlt?: string;
  href: string;
  text: string;
}

const ItemContact = ({
  imgSrc,
  imgAlt,
  href,
  text,
}: ItemContactProps): React.JSX.Element => {
  return (
    <li className="flex flex-row font-serif gap-2">
      {imgSrc && (
        <img
          src={imgSrc}
          alt={imgAlt || 'Contact icon'}
          className="w-7 invert dark:invert-0"
        />
      )}
      <a href={href}>{text}</a>
    </li>
  );
};

export default ItemContact;
