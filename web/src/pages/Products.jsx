import React from 'react'

export default function Products() {
  return (
    <div>
      <>
  {/* Page Header Start */}
  <div
    className="container-fluid page-header py-5 mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container text-center py-5">
      <h1 className="display-3 text-white mb-4 animated slideInDown">
        Products
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Products
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Product Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 500 }}
      >
        <p className="section-title bg-white text-center text-primary px-3">
          Our Products
        </p>
        <h1 className="mb-5">Our Dairy Products For Healthy Living</h1>
      </div>
      <div className="row gx-4">
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="product-item">
            <div className="position-relative">
              <img className="img-fluid" src="img/product-1.jpg" alt="" />
              <div className="product-overlay">
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-link" />
                </a>
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-cart" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <a className="d-block h5" href="">
                Pure Milk
              </a>
              <span className="text-primary me-1">$19.00</span>
              <span className="text-decoration-line-through">$29.00</span>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="product-item">
            <div className="position-relative">
              <img className="img-fluid" src="img/product-2.jpg" alt="" />
              <div className="product-overlay">
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-link" />
                </a>
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-cart" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <a className="d-block h5" href="">
                Fresh Meat
              </a>
              <span className="text-primary me-1">$19.00</span>
              <span className="text-decoration-line-through">$29.00</span>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="product-item">
            <div className="position-relative">
              <img className="img-fluid" src="img/product-3.jpg" alt="" />
              <div className="product-overlay">
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-link" />
                </a>
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-cart" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <a className="d-block h5" href="">
                Dairy Products
              </a>
              <span className="text-primary me-1">$19.00</span>
              <span className="text-decoration-line-through">$29.00</span>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.7s"
        >
          <div className="product-item">
            <div className="position-relative">
              <img className="img-fluid" src="img/product-4.jpg" alt="" />
              <div className="product-overlay">
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-link" />
                </a>
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-cart" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <a className="d-block h5" href="">
                Organic Food
              </a>
              <span className="text-primary me-1">$19.00</span>
              <span className="text-decoration-line-through">$29.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Product End */}
  {/* Features Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title bg-white text-start text-primary pe-3">
            Why Us!
          </p>
          <h1 className="mb-4">Few Reasons Why People Choosing Us!</h1>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <p>
            <i className="fa fa-check text-primary me-3" />
            Justo magna erat amet
          </p>
          <p>
            <i className="fa fa-check text-primary me-3" />
            Aliqu diam amet diam et eos
          </p>
          <p>
            <i className="fa fa-check text-primary me-3" />
            Clita erat ipsum et lorem et sit
          </p>
          <a className="btn btn-secondary rounded-pill py-3 px-5 mt-3" href="">
            Explore More
          </a>
        </div>
        <div className="col-lg-6">
          <div className="rounded overflow-hidden">
            <div className="row g-0">
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="text-center bg-primary py-5 px-4">
                  <img
                    className="img-fluid mb-4"
                    src="img/experience.png"
                    alt=""
                  />
                  <h1 className="display-6 text-white" data-toggle="counter-up">
                    25
                  </h1>
                  <span className="fs-5 fw-semi-bold text-secondary">
                    Years Experience
                  </span>
                </div>
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                <div className="text-center bg-secondary py-5 px-4">
                  <img className="img-fluid mb-4" src="img/award.png" alt="" />
                  <h1 className="display-6" data-toggle="counter-up">
                    183
                  </h1>
                  <span className="fs-5 fw-semi-bold text-primary">
                    Award Winning
                  </span>
                </div>
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="text-center bg-secondary py-5 px-4">
                  <img className="img-fluid mb-4" src="img/animal.png" alt="" />
                  <h1 className="display-6" data-toggle="counter-up">
                    2619
                  </h1>
                  <span className="fs-5 fw-semi-bold text-primary">
                    Total Animals
                  </span>
                </div>
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                <div className="text-center bg-primary py-5 px-4">
                  <img className="img-fluid mb-4" src="img/client.png" alt="" />
                  <h1 className="display-6 text-white" data-toggle="counter-up">
                    51940
                  </h1>
                  <span className="fs-5 fw-semi-bold text-secondary">
                    Happy Clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Features End */}
</>

    </div>
  )
}
