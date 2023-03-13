import React, { useState } from 'react';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function Menu() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div>
        <h1>Menu</h1>
      <div id="accordion">
        <div className="card">
          <div
            className={`card-header ${activeIndex === 0 ? 'active' : ''}`}
            onClick={() => handleAccordionClick(0)}
          >
            <h5 className="mb-0">
              <button className="btn btn-link">
                Appetizers
              </button>
            </h5>
          </div>

          <div
            className={`collapse ${activeIndex === 0 ? 'show' : ''}`}
            data-parent="#accordion"
          >
            <div className="card-body">
              <ul>
                <li>Bruschetta</li>
                <li>Caprese salad</li>
                <li>Garlic bread</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div
            className={`card-header ${activeIndex === 1 ? 'active' : ''}`}
            onClick={() => handleAccordionClick(1)}
          >
            <h5 className="mb-0">
              <button className="btn btn-link">
                Entrees
              </button>
            </h5>
          </div>

          <div
            className={`collapse ${activeIndex === 1 ? 'show' : ''}`}
            data-parent="#accordion"
          >
            <div className="card-body">
              <ul>
                <li>Spaghetti Bolognese</li>
                <li>Chicken Parmesan</li>
                <li>Pizza Margherita</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div
            className={`card-header ${activeIndex === 2 ? 'active' : ''}`}
            onClick={() => handleAccordionClick(2)}
          >
            <h5 className="mb-0">
              <button className="btn btn-link">
                Desserts
              </button>
            </h5>
          </div>

          <div
            className={`collapse ${activeIndex === 2 ? 'show' : ''}`}
            data-parent="#accordion"
          >
            <div className="card-body">
              <ul>
                <li>Tiramisu</li>
                <li>Cannoli</li>
                <li>Gelato</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}    

export default Menu;