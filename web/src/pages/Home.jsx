import React from 'react'



export default function Home() {
  return (
    <div>
      <>
  {/* Carousel Start */}
  <div className="container-fluid px-0 mb-5">
    <div
      id="header-carousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
          <div className="carousel-caption">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-8 text-start">
                  <p className="fs-4 text-white">Welcome to our dairy farm</p>
                  <h1 className="display-1 text-white mb-5 animated slideInRight">
                    The Farm of Dairy products
                  </h1>
                  <a
                    href=""
                    className="btn btn-secondary rounded-pill py-3 px-5 animated slideInRight"
                  >
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
          <div className="carousel-caption">
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-lg-8 text-end">
                  <p className="fs-4 text-white">Welcome to our dairy farm</p>
                  <h1 className="display-1 text-white mb-5 animated slideInRight">
                    Best Organic Dairy Products
                  </h1>
                  <a
                    href=""
                    className="btn btn-secondary rounded-pill py-3 px-5 animated slideInLeft"
                  >
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  {/* Carousel End */}
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-end">
        <div className="col-lg-6">
          <div className="row g-2">
            <div
              className="col-6 position-relative wow fadeIn"
              data-wow-delay="0.7s"
            >
              <div className="about-experience bg-secondary rounded">
                <h1 className="display-1 mb-0">25</h1>
                <small className="fs-5 fw-bold">Years Experience</small>
              </div>
            </div>
            <div className="col-6 wow fadeIn" data-wow-delay="0.1s">
              <img className="img-fluid rounded" src="img/service-1.jpg" />
            </div>
            <div className="col-6 wow fadeIn" data-wow-delay="0.3s">
              <img className="img-fluid rounded" src="img/service-2.jpg" />
            </div>
            <div className="col-6 wow fadeIn" data-wow-delay="0.5s">
              <img className="img-fluid rounded" src="img/service-3.jpg" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <p className="section-title bg-white text-start text-primary pe-3">
            About Us
          </p>
          <h1 className="mb-4">Know About Our Dairy Farm &amp; Our History</h1>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <div className="row g-5 pt-2 mb-5">
            <div className="col-sm-6">
              <img className="img-fluid mb-4" src="img/service.png" alt="" />
              <h5 className="mb-3">Dedicated Services</h5>
              <span>
                Clita erat ipsum et lorem et sit, sed stet lorem sit clita
              </span>
            </div>
            <div className="col-sm-6">
              <img className="img-fluid mb-4" src="img/product.png" alt="" />
              <h5 className="mb-3">Organic Products</h5>
              <span>
                Clita erat ipsum et lorem et sit, sed stet lorem sit clita
              </span>
            </div>
          </div>
          <a className="btn btn-secondary rounded-pill py-3 px-5" href="">
            Explore More
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
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
  {/* Banner Start */}
  <div
    className="container-fluid banner my-5 py-5"
    data-parallax="scroll"
    data-image-src="img/banner.jpg"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
          <div className="row g-4 align-items-center">
            <div className="col-sm-4">
              <img
                className="img-fluid rounded"
                src="img/banner-1.jpg"
                alt=""
              />
            </div>
            <div className="col-sm-8">
              <h2 className="text-white mb-3">We Sell Best Dairy Products</h2>
              <p className="text-white mb-4">
                Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                justo magna dolore erat amet
              </p>
              <a className="btn btn-secondary rounded-pill py-2 px-4" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <div className="row g-4 align-items-center">
            <div className="col-sm-4">
              <img
                className="img-fluid rounded"
                src="img/banner-2.jpg"
                alt=""
              />
            </div>
            <div className="col-sm-8">
              <h2 className="text-white mb-3">
                We Deliver Fresh Mild Worldwide
              </h2>
              <p className="text-white mb-4">
                Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                justo magna dolore erat amet
              </p>
              <a className="btn btn-secondary rounded-pill py-2 px-4" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Banner End */}
  {/* Service Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto pb-4 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 500 }}
      >
        <p className="section-title bg-white text-center text-primary px-3">
          Our Services
        </p>
        <h1 className="mb-5">Services That We Offer For Entrepreneurs</h1>
      </div>
      <div className="row gy-5 gx-4">
        <div
          className="col-lg-4 col-md-6 pt-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="service-item d-flex h-100">
            <div className="service-img">
              <img className="img-fluid" src="img/service-1.jpg" alt="" />
            </div>
            <div className="service-text p-5 pt-0">
              <div className="service-icon">
                <img
                  className="img-fluid rounded-circle"
                  src="img/service-1.jpg"
                  alt=""
                />
              </div>
              <h5 className="mb-3">Best Animal Selection</h5>
              <p className="mb-4">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet.
              </p>
              <a className="btn btn-square rounded-circle" href="">
                <i className="bi bi-chevron-double-right" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 pt-5 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="service-item d-flex h-100">
            <div className="service-img">
              <img className="img-fluid" src="img/service-2.jpg" alt="" />
            </div>
            <div className="service-text p-5 pt-0">
              <div className="service-icon">
                <img
                  className="img-fluid rounded-circle"
                  src="img/service-2.jpg"
                  alt=""
                />
              </div>
              <h5 className="mb-3">Breeding &amp; Veterinary</h5>
              <p className="mb-4">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet.
              </p>
              <a className="btn btn-square rounded-circle" href="">
                <i className="bi bi-chevron-double-right" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 pt-5 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="service-item d-flex h-100">
            <div className="service-img">
              <img className="img-fluid" src="img/service-3.jpg" alt="" />
            </div>
            <div className="service-text p-5 pt-0">
              <div className="service-icon">
                <img
                  className="img-fluid rounded-circle"
                  src="img/service-3.jpg"
                  alt=""
                />
              </div>
              <h5 className="mb-3">Care &amp; Milking</h5>
              <p className="mb-4">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet.
              </p>
              <a className="btn btn-square rounded-circle" href="">
                <i className="bi bi-chevron-double-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* Gallery Start */}
  <div className="container-xxl py-5 px-0">
    <div className="row g-0">
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="row g-0">
          <div className="col-12">
            <a
              className="d-block"
              href="img/gallery-5.jpg"
              data-lightbox="gallery"
            >
              <img className="img-fluid" src="img/gallery-5.jpg" alt="" />
            </a>
          </div>
          <div className="col-12">
            <a
              className="d-block"
              href="img/gallery-1.jpg"
              data-lightbox="gallery"
            >
              <img className="img-fluid" src="img/gallery-1.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="row g-0">
          <div className="col-12">
            <a
              className="d-block"
              href="img/gallery-2.jpg"
              data-lightbox="gallery"
            >
              <img className="img-fluid" src="img/gallery-2.jpg" alt="" />
            </a>
          </div>
          <div className="col-12">
            <a
              className="d-block"
              href="img/gallery-6.jpg"
              data-lightbox="gallery"
            >
              <img className="img-fluid" src="img/gallery-6.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="row g-0">
          <div className="col-12">
            <a
              className="d-block"
              href="img/gallery-7.jpg"
              data-lightbox="gallery"
            >
              <img className="img-fluid" src="img/gallery-7.jpg" alt="" />
            </a>
          </div>
          <div className="col-12">
            <a
              className="d-block"
              href="img/gallery-3.jpg"
              data-lightbox="gallery"
            >
              <img className="img-fluid" src="img/gallery-3.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
        <div className="row g-0">
          <div className="col-12">
            <a
              className="d-block"
              href="img/gallery-4.jpg"
              data-lightbox="gallery"
            >
              <img className="img-fluid" src="img/gallery-4.jpg" alt="" />
            </a>
          </div>
          <div className="col-12">
            <a
              className="d-block"
              href="img/gallery-8.jpg"
              data-lightbox="gallery"
            >
              <img className="img-fluid" src="img/gallery-8.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Gallery End */}
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
  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 500 }}
      >
        <p className="section-title bg-white text-center text-primary px-3">
          Our Team
        </p>
        <h1 className="mb-5">Experienced Team Members</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item rounded p-4">
            <img
              className="img-fluid rounded mb-4"
              src="img/team-1.jpg"
              alt=""
            />
            <h5>Adam Crew</h5>
            <p className="text-primary">Founder</p>
            <div className="d-flex justify-content-center">
              <a
                className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                href=""
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                href=""
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                href=""
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item rounded p-4">
            <img
              className="img-fluid rounded mb-4"
              src="img/team-2.jpg"
              alt=""
            />
            <h5>Doris Jordan</h5>
            <p className="text-primary">Veterinarian</p>
            <div className="d-flex justify-content-center">
              <a
                className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                href=""
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                href=""
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                href=""
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item rounded p-4">
            <img
              className="img-fluid rounded mb-4"
              src="img/team-3.jpg"
              alt=""
            />
            <h5>Jack Dawson</h5>
            <p className="text-primary">Farmer</p>
            <div className="d-flex justify-content-center">
              <a
                className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                href=""
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                href=""
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                href=""
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
</>

    </div>
  )
}
