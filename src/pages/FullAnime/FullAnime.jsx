import { useParams } from 'react-router-dom';
import { Navigation } from '../../components/nav/Navigation';
import './fullanime-module.css';
import { Footer } from '../../components/footer/Footer';
import { CharacterMenu } from '../../components/fullanime/characterMenu/CharacterMenu';
import { animetitle } from '../../helper/animetitle';

export const FullAnime = () => {
  const { id } = useParams();
  const antitle = animetitle[id];

  return (
    <>
      <Navigation />
      <section className='fullanime-section'>
        <div className='container'>
          <div className='fullanime'>
            <div className='fullanime-about'>
              <div className='fullanime-about__img'>
                <img
                  src={antitle.img}
                  alt='poster'
                  className='fullanime-about__img-main'
                />
                <h1 className='fullanime-about__title'>{antitle.title}</h1>
                <img
                  src={antitle.posterimg}
                  alt='yato'
                  className='fullanime-yato'
                />
              </div>
            </div>
            <div className='fullanime-button'>
              <button className='fullanime-btn__about'>About</button>
              <button className='fullanime-btn__person'>Character</button>
              <button className='fullanime-btn__person'>echo</button>
              <button className='fullanime-btn__person'>chto-to</button>
            </div>
            <div className='fullanime-menu__about'></div>
            <CharacterMenu props={antitle.characters} />
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
