import React, { useState } from 'react';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Menu() {
  const [activeIndex, setActiveIndex] = useState(-1);

  function handleAccordionClick(index) {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div id="accordion" style={{ width: '80%' }}>
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded={activeIndex === 0} onClick={() => handleAccordionClick(0)}>
                Appetizers
              </button>
            </h5>
          </div>

          <div id="collapseOne" className={`collapse ${activeIndex === 0 ? 'show' : ''}`} aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
              Appetizers menu items go here...
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded={activeIndex === 1} onClick={() => handleAccordionClick(1)}>
                Entrees
              </button>
            </h5>
          </div>

          <div id="collapseTwo" className={`collapse ${activeIndex === 1 ? 'show' : ''}`} aria-labelledby="headingTwo" data-parent="#accordion">
            <div className="card-body">
              Entrees menu items go here...
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button className="btn btn-link" data-toggle="collapse" data-target="#collapseThree" aria-expanded={activeIndex === 2} onClick={() => handleAccordionClick(2)}>
                Desserts
              </button>
            </h5>
          </div>

          <div id="collapseThree" className={`collapse ${activeIndex === 2 ? 'show' : ''}`} aria-labelledby="headingThree" data-parent="#accordion">
            <div className="card-body">
              Desserts menu items go here...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
