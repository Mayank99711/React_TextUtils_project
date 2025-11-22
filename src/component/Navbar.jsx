function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-a" href="/about">About</a>
        </li> */}
      </ul>
      <div className="d-flex align-items-center mx-3">
        <button className="btn btn-danger btn-sm mx-1" title="Red mode" onClick={() => props.toggleMode('red')}>Red</button>
        <button className="btn btn-primary btn-sm mx-1" title="Blue mode" onClick={() => props.toggleMode('blue')}>Blue</button>
        <button className="btn btn-success btn-sm mx-1" title="Green mode" onClick={() => props.toggleMode('green')}>Green</button>
      </div>
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`}>
        <input
          className="form-check-input"
          onChange={() => props.toggleMode()}
          type="checkbox"
          role="switch"
          id="switchCheckDefault"
          checked={props.mode === 'dark'}
        />
        <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
// import { a } from "react-router-dom";
export default Navbar;