import { useState } from 'react';
import { CardMin } from '../../components/card/min/CardMin';
import { Footer } from '../../components/footer/Footer';
import { Navigation } from '../../components/nav/Navigation';
import { animetitle } from './../../helper/animetitle';
import './catalog-module.css';

export const Catalog = () => {
  const [animeList, setAnimeList] = useState(
    Object.values(animetitle).slice(0, 9)
  );

  const visibilityClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle('hidden');
    }
  };

  const expandList = (id, id2) => {
    visibilityClick(id);
    const element = document.getElementById(id2);
    if (element) {
      element.classList.toggle('active-btn');
    }
  };

  const expandArray = (id) => {
    setAnimeList(Object.values(animetitle));
    visibilityClick(id);
  };

  return (
    <>
      <Navigation />
      <section className='catalog'>
        <div className='container'>
          <div className='catalog-list'>
            <div className='catalog-cat'>
              <div className='catalog-cat__title'>Catalog</div>
              <div className='catalog-cat__list'>
                <div className='catalog-cat__list-title'>
                  <p>year</p>
                  <button
                    className='rotate-btn'
                    id='catalog-year__btn'
                    onClick={() =>
                      expandList('catalog-year', 'catalog-year__btn')
                    }
                  ></button>
                </div>
                <ul id='catalog-year' className='catalog-cat__list-list hidden'>
                  <li>
                    <label className='cyberpunk-checkbox-label'>
                      <input type='checkbox' className='cyberpunk-checkbox' />{' '}
                      2000
                    </label>
                  </li>
                  <li>
                    <label className='cyberpunk-checkbox-label'>
                      <input type='checkbox' className='cyberpunk-checkbox' />{' '}
                      2001
                    </label>
                  </li>
                  <li>
                    <label className='cyberpunk-checkbox-label'>
                      <input type='checkbox' className='cyberpunk-checkbox' />{' '}
                      2002
                    </label>
                  </li>
                  <li>
                    <label className='cyberpunk-checkbox-label'>
                      <input type='checkbox' className='cyberpunk-checkbox' />{' '}
                      2003
                    </label>
                  </li>
                </ul>
              </div>
              <div className='catalog-cat__list'>
                <div className='catalog-cat__list-title'>
                  <p>genres</p>
                  <button
                    className='rotate-btn'
                    id='catalog-genres__btn'
                    onClick={() =>
                      expandList('catalog-genres', 'catalog-genres__btn')
                    }
                  ></button>
                </div>
                <ul
                  id='catalog-genres'
                  className='catalog-cat__list-list hidden'
                >
                  <li>
                    <label className='cyberpunk-checkbox-label'>
                      <input type='checkbox' className='cyberpunk-checkbox' />{' '}
                      2000
                    </label>
                  </li>
                  <li>
                    <label className='cyberpunk-checkbox-label'>
                      <input type='checkbox' className='cyberpunk-checkbox' />{' '}
                      2001
                    </label>
                  </li>
                  <li>
                    <label className='cyberpunk-checkbox-label'>
                      <input type='checkbox' className='cyberpunk-checkbox' />{' '}
                      2002
                    </label>
                  </li>
                  <li>
                    <label className='cyberpunk-checkbox-label'>
                      <input type='checkbox' className='cyberpunk-checkbox' />{' '}
                      2003
                    </label>
                  </li>
                </ul>
              </div>
              <div className='catalog-cat__list'>
                <div className='catalog-cat__list-title'>
                  <p>studio</p>
                  <button
                    className='rotate-btn'
                    id='catalog-studio__btn'
                    onClick={() =>
                      expandList('catalog-studio', 'catalog-studio__btn')
                    }
                  ></button>
                </div>
                <ul
                  id='catalog-studio'
                  className='catalog-cat__list-list hidden'
                >
                  <li>
                    <label className='cyberpunk-checkbox-label'>
                      <input type='checkbox' className='cyberpunk-checkbox' />{' '}
                      Studio Pierrot
                    </label>
                  </li>
                  <li>
                    <label className='cyberpunk-checkbox-label'>
                      <input type='checkbox' className='cyberpunk-checkbox' />{' '}
                      P.A. Works
                    </label>
                  </li>
                  <li>
                    <label className='cyberpunk-checkbox-label'>
                      <input type='checkbox' className='cyberpunk-checkbox' />
                      Studio Ghibli
                    </label>
                  </li>
                  <li>
                    <label className='cyberpunk-checkbox-label'>
                      <input type='checkbox' className='cyberpunk-checkbox' />
                      Ufotable
                    </label>
                  </li>
                  <li>
                    <label className='cyberpunk-checkbox-label'>
                      <input type='checkbox' className='cyberpunk-checkbox' />
                      Tencent Penguin Pictures
                    </label>
                  </li>
                  <li>
                    <label className='cyberpunk-checkbox-label'>
                      <input type='checkbox' className='cyberpunk-checkbox' />
                      Studio MAPPA
                    </label>
                  </li>
                  <li>
                    <label className='cyberpunk-checkbox-label'>
                      <input type='checkbox' className='cyberpunk-checkbox' />
                      Production I.G
                    </label>
                  </li>
                  <li>
                    <label className='cyberpunk-checkbox-label'>
                      <input type='checkbox' className='cyberpunk-checkbox' />
                      Sunrise Inc.
                    </label>
                  </li>
                  <li>
                    <label className='cyberpunk-checkbox-label'>
                      <input type='checkbox' className='cyberpunk-checkbox' />
                      Bones Animation Studios
                    </label>
                  </li>
                  <li>
                    <label className='cyberpunk-checkbox-label'>
                      <input type='checkbox' className='cyberpunk-checkbox' />
                      Kyoto Animation
                    </label>
                  </li>
                  <li>
                    <label className='cyberpunk-checkbox-label'>
                      <input type='checkbox' className='cyberpunk-checkbox' />
                      Toei Animation
                    </label>
                  </li>
                  <li>
                    <label className='cyberpunk-checkbox-label'>
                      <input type='checkbox' className='cyberpunk-checkbox' />
                      Madhouse
                    </label>
                  </li>
                  <li>
                    <label className='cyberpunk-checkbox-label'>
                      <input type='checkbox' className='cyberpunk-checkbox' />
                      CoMix Wave Films
                    </label>
                  </li>
                </ul>
              </div>
              <button className='catalog-cat__list-btn catalog-anime__btn'>
                Start
              </button>
            </div>
            <div className='catalog-anime'>
              <div className='lastanime-card catalog-anime__card'>
                {animeList.map((props) => (
                  <CardMin key={props.id} props={props} />
                ))}
              </div>
              <button
                id='btn__catalog'
                className='catalog-anime__btn'
                onClick={() => expandArray('btn__catalog')}
              >
                Next
              </button>
            </div>
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
