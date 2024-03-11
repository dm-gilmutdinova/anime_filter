import { useState } from 'react';
import './characterMenu-module.css';

export const CharacterMenu = (props) => {
  const [isHidden, setIsHidden] = useState(false);

  const filterCharacter = (id) => {
    if (id === 'Shinki' || id === 'Human' || id === 'God') {
      const meow = props.props
        .filter((el) => el.status === id)
        .map((el) => el.character);
      console.log(id, meow);
    } else if (id === 'all') {
      const me = props.props.map((el) => el.character);
      console.log('all', me);
    } else {
      console.log('unknown');
    }
  };

  return (
    <div className='fullanime-menu__character'>
      <div className='fullanime-menu__character-button'>
        <button
          className='fullanime-menu__character-btn btn-active'
          onClick={() => filterCharacter('all')}
        >
          All
        </button>
        <button
          className='fullanime-menu__character-btn'
          onClick={() => filterCharacter('God')}
        >
          God
        </button>
        <button
          className='fullanime-menu__character-btn'
          onClick={() => filterCharacter('Shinki')}
        >
          Shinki
        </button>
        <button
          className='fullanime-menu__character-btn'
          onClick={() => filterCharacter('Human')}
        >
          Human
        </button>
      </div>

      {/* {props.props.map((el) => (
        <div>{el.character}</div>
      ))} */}
    </div>
  );
};
