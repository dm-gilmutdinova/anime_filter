import './navigation-module.css';

export const Navigation = () => {
  return (
    <nav>
      <a href='/' className='nav-logo'>
        anchar
      </a>
      <div className='nav-search'>
        <a href='/search'>
          <img src='./img/search2.svg' alt='search icon' />
        </a>
      </div>
    </nav>
  );
};
