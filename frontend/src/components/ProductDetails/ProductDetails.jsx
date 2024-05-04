import React from 'react'
import "./ProductDetails.css"
import Breadcrumb from './Breadcrumb/Breadcrumb';
import Gallery from './Gallery/Gallery';
import Info from './Info/Info';
import Tabs from './Tabs/Tabs';

function ProductDetails () {
  return (
    <React.Fragment>
        <section className="single-product">
        <div className="container">
        <div className="single-product-wrapper">
          <Breadcrumb />
          <div className="single-content">
            <main className="site-main">
              <Gallery />
              <Info />
            </main>
          </div>
          <Tabs />
        </div>
      </div>
    </section>
    </React.Fragment>
  );
};

export default ProductDetails;