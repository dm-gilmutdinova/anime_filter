import { Link } from 'react-router-dom';
import { CardMin } from '../../components/card/min/CardMin';
import { Footer } from '../../components/footer/Footer';
import { Navigation } from '../../components/nav/Navigation';
import { animetitle } from './../../helper/animetitle';
import './main-module.css';

export const Main = () => {
  const animeFirstNine = Object.values(animetitle).slice(0, 9);
  return (
    <>
      <Navigation />
      <header className='main'>
        <div className='container'>
          <div className='main-header'>
            <h1 className='main-title'>Find your loved one</h1>
            <p className='main-subtitle'>
              Choose an anime or write your favorite character
            </p>
            <span className='main-btn'>
              <a href='/catalog'>find character</a>
            </span>
          </div>
        </div>
      </header>
      <section className='lastanime'>
        <div className='container'>
          <div className='lastanime-section'>
            <h2 className='lastanime-title'>Last anime</h2>
            <div className='lastanime-card'>
              {animeFirstNine.map((props) => (
                <CardMin key={props.id} props={props} />
              ))}
            </div>
            <Link to='/catalog'>
              <button className='lastanime-btn'>
                <p className='lastanime-btn__title'>See more</p>
                <img src='./img/btn-arrow.svg' alt='btn' />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <footer className='footer'>
        <div className='container'>
          <Footer />
        </div>
      </footer>
    </>
  );
};
