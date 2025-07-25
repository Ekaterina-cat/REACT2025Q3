import React from 'react';

interface ItemTechnicalSkillProps {
  skill: string;
  level: string;
}

const ItemTechnicalSkill = ({
  skill,
  level,
}: ItemTechnicalSkillProps): React.JSX.Element => {
  return (
    <li className="flex flex-row gap-2 font-serif">
      <h3>{skill}:</h3>
      <p>{level}</p>
    </li>
  );
};

export default ItemTechnicalSkill;
