import React from 'react';
import './styles/main.scss';
import logo from './assets/images/logo.png';
import frame9 from './assets/images/frame9.png';
import frame10 from './assets/images/frame10.png';
import frame4 from './assets/images/frame4.png';
import frame16 from './assets/images/frame16.png';
import frame17 from './assets/images/frame17.png';
import { FaSearch } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src={logo} alt="ADELSOCIAL" height="40" className="me-2" />
            <span>ADELSOCIAL</span>
          </a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-4">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#domain">Domain & Hosting</a>
              </li>
            </ul>
            
            <div className="search-box d-flex align-items-center">
              <input type="text" placeholder="Search" className="me-2" />
              <FaSearch className="text-primary" />
            </div>
          </div>
        </div>
      </nav>

      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 mb-3">Audience of your kind</h1>
              <p className="text-opacity-60 mb-4">
                We аre аn аgenсy thаt believe in the роwer оf digitаl tо trаnsfоrm yоur business. 
                Whether it be а new website, mаrketing саmраign оr рrоduсtivity imрrоving sоftwаre, 
                digitаl саn trаnsfоrm аnd grоw yоur business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section py-5">
        <div className="container">
          <h2 className="mb-4">We Provide:</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="service-card">
                <img src={frame9} alt="Search Engine Optimization" />
                <div className="card-body">
                  <h5 className="card-title">Search Engine Optimization</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <img src={frame10} alt="Local SEO" />
                <div className="card-body">
                  <h5 className="card-title">Local SEO</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <img src={frame4} alt="App Development" />
                <div className="card-body">
                  <h5 className="card-title">App Development</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <img src={frame16} alt="Social Media Marketing" />
                <div className="card-body">
                  <h5 className="card-title">Social Media Marketing</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <img src={frame17} alt="Email Management" />
                <div className="card-body">
                  <h5 className="card-title">Email Management</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <img src={frame4} alt="Pay Per Click Management" />
                <div className="card-body">
                  <h5 className="card-title">Pay Per Click Management</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App; 