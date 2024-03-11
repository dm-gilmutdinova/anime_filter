import { NavLink } from 'react-router-dom';
import './cardMin-module.css';

export const CardMin = (props) => {
  return (
    <NavLink to={`/${props.props.id}`}>
      <div className='cardmain'>
        <img src={props.props.img} alt='' className='cardmain-img' />
        <p className='cardmain-title'>{props.props.title}</p>
      </div>
    </NavLink>
  );
};
