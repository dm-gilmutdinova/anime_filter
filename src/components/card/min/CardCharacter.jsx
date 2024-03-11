import './cardMin-module.css';

export const CardCharacter = (props) => {
  return (
    <a className='cardmain'>
      <img src={props.props.img} alt='' className='cardmain-img' />
      <p className='cardmain-title'>{props.props.character}</p>
    </a>
  );
};
