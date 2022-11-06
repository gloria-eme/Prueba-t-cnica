import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="nav">
      <NavLink className="navH1" to="">
        DEMO Streaming
      </NavLink>
      {/* <div className="navBtns"> */}
      <button className="navBtn1">Log in</button>
      <button className="navBtn2">Start your free trial</button>
      {/* </div> */}
    </div>
  );
};

export default Header;
