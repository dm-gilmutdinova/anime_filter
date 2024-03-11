import './footer-module.css';

export const Footer = () => {
  return (
    <div className='footer-card'>
      <div className='footer-card__logo'>
        <a href='/'>anchar</a>
      </div>
      <ul className='footer-card__nav'>
        <li>
          <a href='/'>menu</a>
        </li>
        <li>
          <a href='/catalog'>anime</a>
        </li>
        <li>
          <a href='/'>about us</a>
        </li>
        <li>
          <a href='/'>terms & privace</a>
        </li>
      </ul>
      <ul className='footer-card__soc'>
        <li>
          <a href='https://t.me/n_hates_you'>
            <img src='./img/tel.svg' alt='tel' />
          </a>
        </li>
        <li>
          <a href='https://twitter.com/home?lang=ru'>
            <img src='./img/twi.svg' alt='twi' />
          </a>
        </li>
      </ul>
    </div>
  );
};
