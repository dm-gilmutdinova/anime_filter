import { useState } from 'react';
import { CardCharacter } from '../../components/card/min/CardCharacter';
import { Footer } from '../../components/footer/Footer';
import { Navigation } from '../../components/nav/Navigation';
import { characterlist } from '../../helper/characterlist';
import './search-module.css';

export const Search = () => {
  const [character, setCharacter] = useState('');
  const [data, setData] = useState(characterlist);

  const handleChange = (e) => {
    setCharacter(e.target.value);
    filterAnime(e);
  };

  const filterAnime = (e) => {
    const loverCaseValue = e.target.value.trim();
    if (!loverCaseValue) {
      setData(characterlist);
    } else {
      const filteredAnime = characterlist.filter((item) => {
        return Object.keys(item).some((key) => {
          return item[key]
            .toString()
            .toLowerCase()
            .includes(loverCaseValue.toLowerCase());
        });
      });
      setData(filteredAnime);
    }
  };

  return (
    <>
      <Navigation />
      <div className='search'>
        <div className='container'>
          <div className='search-container'>
            <h2 className='search-title'>Search anime character</h2>
            <form action='' className='search-form'>
              <input
                type='text'
                name='text'
                className='search-input'
                placeholder='search...'
                value={character}
                onChange={(e) => handleChange(e)}
              />
            </form>
            {data.length === 0 && (
              <div className='search-noFound'>
                <h1>No founds :(</h1>
                <img src='./img/sad-chibi.png' alt='' />
              </div>
            )}
            <div className='lastanime-card search-card'>
              {data.map((props) => {
                return <CardCharacter key={props.id} props={props} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <div className='container'>
          <Footer />
        </div>
      </footer>
    </>
  );
};
