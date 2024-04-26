// import React from 'react';

function Navbar({ darkMode, toggleDarkMode }) {
  const navbarStyle = darkMode ? 'navbar navbar-expand navbar-dark bg-dark justify-content-between' : 'navbar navbar-expand navbar-light bg-light justify-content-between';
  const switchStyle = darkMode ? { color: 'white' } : { color: 'black' };

  return (
    <nav className={navbarStyle}>
      <a className="navbar-brand" href="#">TextUtils</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#" aria-current="page">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <div className="input-group ml-auto">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div>
          </div>
        </form>
      </div>

      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="darkModeSwitch" onChange={toggleDarkMode} />
        <label className="form-check-label" htmlFor="darkModeSwitch" style={switchStyle}>Dark Mode</label>
      </div>
    </nav>
  );
}

export default Navbar;
