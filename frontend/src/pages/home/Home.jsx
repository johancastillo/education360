
const Home = () => {
    return (
        <>
            {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero" className="clearfix">
                <div className="container d-flex h-100">
                    <div className="row justify-content-center align-self-center" data-aos="fade-up">
                        <div className="col-lg-6 intro-info order-lg-first order-last" data-aos="zoom-in" data-aos-delay="100">
                            <h2>
                            ¡Adquiere los conocimientos <br/>
                            que necesitas para lograr 
                            <span> tus sueños!</span></h2>
                            <div>
                                <a href="#about" className="btn-get-started scrollto">
                                    Regístrate gratis
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6 intro-img order-lg-last order-first" data-aos="zoom-out" data-aos-delay="200">
                            <img src="assets/img/intro-img.svg" alt="" className="img-fluid" />
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End Hero --> */}

            <main id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  <div className="about-img" data-aos="fade-right" data-aos-delay={100}>
                    <img src="assets/img/about-img.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="about-content" data-aos="fade-left" data-aos-delay={100}>
                    <h2>About Us</h2>
                    <h3>Odio sed id eos et laboriosam consequatur eos earum soluta.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui dolor nulla dolores neque. Aspernatur consectetur omnis numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut quidem alias veritatis repudiandae ut fugit. Est ut eligendi aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut maxime incidunt accusantium totam repellendus eum error. Et repudiandae eum iste qui et ut ab alias.</p>
                    <ul>
                      <li><i className="bi bi-check-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i className="bi bi-check-circle" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i className="bi bi-check-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End About Section */}
          {/* ======= Services Section ======= */}
          <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h3>Services</h3>
                <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
              </header>
              <div className="row">
                <div className="col-md-6 col-lg-4 wow bounceInUp" data-aos="zoom-in" data-aos-delay={100}>
                  <div className="box">
                    <div className="icon" style={{background: '#fceef3'}}><i className="bi bi-briefcase" style={{color: '#ff689b'}} /></div>
                    <h4 className="title"><a href>Lorem Ipsum</a></h4>
                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay={200}>
                  <div className="box">
                    <div className="icon" style={{background: '#fff0da'}}><i className="bi bi-card-checklist" style={{color: '#e98e06'}} /></div>
                    <h4 className="title"><a href>Dolor Sitema</a></h4>
                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay={300}>
                  <div className="box">
                    <div className="icon" style={{background: '#e6fdfc'}}><i className="bi bi-bar-chart" style={{color: '#3fcdc7'}} /></div>
                    <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 wow" data-aos="zoom-in" data-aos-delay={100}>
                  <div className="box">
                    <div className="icon" style={{background: '#eafde7'}}>
                        <i className="bi bi-binoculars" style={{color: '#41cf2e'}} />
                    </div>

                    <h4 className="title">
                        <a href>Magni Dolores</a>
                    </h4>

                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay={200} >
                  <div className="box">
                    <div className="icon" style={{background: '#e1eeff'}}><i className="bi bi-brightness-high" style={{color: '#2282ff'}} /></div>
                    <h4 className="title"><a href>Nemo Enim</a></h4>
                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay={300}>
                  <div className="box">
                    <div className="icon" style={{background: '#ecebff'}}><i className="bi bi-calendar4-week" style={{color: '#8660fe'}} /></div>
                    <h4 className="title"><a href>Eiusmod Tempor</a></h4>
                    <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Services Section */}
          {/* ======= Why Us Section ======= */}
          <section id="why-us" className="why-us">
            <div className="container-fluid" data-aos="fade-up">
              <header className="section-header">
                <h3>Why choose us?</h3>
                <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
              </header>
              <div className="row">
                <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={100}>
                  <div className="why-us-img">
                    <img src="assets/img/why-us.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="why-us-content">
                    <p>Molestiae omnis numquam corrupti omnis itaque. Voluptatum quidem impedit. Odio dolorum exercitationem est error omnis repudiandae ad dolorum sit.</p>
                    <p>
                      Explicabo repellendus quia labore. Non optio quo ea ut ratione et quaerat. Porro facilis deleniti porro consequatur
                      et temporibus. Labore est odio.
                      Odio omnis saepe qui. Veniam eaque ipsum. Ea quia voluptatum quis explicabo sed nihil repellat..
                    </p>
                    <div className="features clearfix" data-aos="fade-up" data-aos-delay={100}>
                      <i className="bi bi-bookmarks" style={{color: '#f058dc'}} />
                      <h4>Corporis dolorem</h4>
                      <p>Commodi quia voluptatum. Est cupiditate voluptas quaerat officiis ex alias dignissimos et ipsum. Soluta at enim modi ut incidunt dolor et.</p>
                    </div>
                    <div className="features clearfix" data-aos="fade-up" data-aos-delay={200}>
                      <i className="bi bi-box-seam" style={{color: '#ffb774'}} />
                      <h4>Eum ut aspernatur</h4>
                      <p>Molestias eius rerum iusto voluptas et ab cupiditate aut enim. Assumenda animi occaecati. Quo dolore fuga quasi autem aliquid ipsum odit. Perferendis doloremque iure nulla aut.</p>
                    </div>
                    <div className="features clearfix" data-aos="fade-up" data-aos-delay={300}>
                      <i className="bi bi-card-checklist" style={{color: '#589af1'}} />
                      <h4>Voluptates dolores</h4>
                      <p>Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur. Totam dolores ut enim ullam voluptas distinctio aut.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row counters" data-aos="fade-up" data-aos-delay={100}>
                <div className="col-lg-3 col-6 text-center">
                  <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
                  <p>Clients</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                  <span data-purecounter-start={0} data-purecounter-end={421} data-purecounter-duration={1} className="purecounter" />
                  <p>Projects</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                  <span data-purecounter-start={0} data-purecounter-end={1453} data-purecounter-duration={1} className="purecounter" />
                  <p>Hours Of Support</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                  <span data-purecounter-start={0} data-purecounter-end={48} data-purecounter-duration={1} className="purecounter" />
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </section>{/* End Why Us Section */}
          {/* ======= Call To Action Section ======= */}
          <section id="call-to-action" className="call-to-action">
            <div className="container" data-aos="zoom-out">
              <div className="row">
                <div className="col-lg-9 text-center text-lg-start">
                  <h3 className="cta-title">Call To Action</h3>
                  <p className="cta-text"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col-lg-3 cta-btn-container text-center">
                  <a className="cta-btn align-middle" href="#">Call To Action</a>
                </div>
              </div>
            </div>
          </section>{/*  End Call To Action Section */}
          {/* ======= Features Section ======= */}
          <section id="features" className="features">
            <div className="container" data-aos="fade-up">
              <div className="row feature-item">
                <div className="col-lg-6" data-aos="fade-right" data-aos-delay={100}>
                  <img src="assets/img/features-1.svg" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0" data-aos="fade-left" data-aos-delay={150}>
                  <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>
                  <p>
                    Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati possimus ea. Quas molestiae perspiciatis occaecati qui rerum. Deleniti quod porro sed quisquam saepe. Numquam mollitia recusandae non ad at et a.
                  </p>
                  <p>
                    Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti. Odit qui asperiores ea corporis deserunt veritatis quidem expedita perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum eum eum.
                  </p>
                </div>
              </div>
              <div className="row feature-item mt-5 pt-5">
                <div className="col-lg-6 wow fadeInUp order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
                  <img src="assets/img/features-2.svg" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-right" data-aos-delay={150}>
                  <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4>
                  <p>
                    Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt.
                  </p>
                  <p>
                    Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.
                  </p>
                  <p>
                    Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga mollitia exercitationem nam accusantium provident quia.
                  </p>
                </div>
              </div>
            </div>
          </section>{/* End Features Section */}
          {/* ======= Portfolio Section ======= */}
          <section id="portfolio" className="portfolio section-bg">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h3 className="section-title">Our Portfolio</h3>
              </header>
              <div className="row" data-aos="fade-up" data-aos-delay={100}>
                <div className="col-lg-12">
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-card">Card</li>
                    <li data-filter=".filter-web">Web</li>
                  </ul>
                </div>
              </div>
              <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/app1.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4><a href="portfolio-details.html">App 1</a></h4>
                      <p>App</p>
                      <div>
                        <a href="assets/img/portfolio/app1.jpg" data-gallery="portfolioGallery" title="App 1" className="link-preview portfolio-lightbox"><i className="bi bi-plus" /></a>
                        <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/web3.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4><a href="portfolio-details.html">Web 3</a></h4>
                      <p>Web</p>
                      <div>
                        <a href="assets/img/portfolio/web3.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Web 3"><i className="bi bi-plus" /></a>
                        <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/app2.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4><a href="portfolio-details.html">App 2</a></h4>
                      <p>App</p>
                      <div>
                        <a href="assets/img/portfolio/app2.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="App 2"><i className="bi bi-plus" /></a>
                        <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/card2.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4><a href="portfolio-details.html">Card 2</a></h4>
                      <p>Card</p>
                      <div>
                        <a href="assets/img/portfolio/card2.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Card 2"><i className="bi bi-plus" /></a>
                        <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/web2.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4><a href="portfolio-details.html">Web 2</a></h4>
                      <p>Web</p>
                      <div>
                        <a href="assets/img/portfolio/web2.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Web 2"><i className="bi bi-plus" /></a>
                        <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/app3.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4><a href="portfolio-details.html">App 3</a></h4>
                      <p>App</p>
                      <div>
                        <a href="assets/img/portfolio/app3.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="App 3"><i className="bi bi-plus" /></a>
                        <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/card1.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4><a href="portfolio-details.html">Card 1</a></h4>
                      <p>Card</p>
                      <div>
                        <a href="assets/img/portfolio/card1.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Card 1"><i className="bi bi-plus" /></a>
                        <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card" data-wow-delay="0.1s">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/card3.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4><a href="portfolio-details.html">Card 3</a></h4>
                      <p>Card</p>
                      <div>
                        <a href="assets/img/portfolio/card3.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Card 3"><i className="bi bi-plus" /></a>
                        <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.2s">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/web1.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4><a href="portfolio-details.html">Web 1</a></h4>
                      <p>Web</p>
                      <div>
                        <a href="assets/img/portfolio/web1.jpg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Web 1"><i className="bi bi-plus" /></a>
                        <a href="portfolio-details.html" className="link-details" title="More Details"><i className="bi bi-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Portfolio Section */}
          {/* ======= Testimonials Section ======= */}
          <section id="testimonials" className="testimonials">
            <div className="container" data-aos="zoom-in">
              <header className="section-header">
                <h3>Testimonials</h3>
              </header>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay={100}>
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <img src="assets/img/testimonial-1.jpg" className="testimonial-img" alt="" />
                          <h3>Saul Goodman</h3>
                          <h4>Ceo &amp; Founder</h4>
                          <p>
                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                          </p>
                        </div>
                      </div>{/* End testimonial item */}
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <img src="assets/img/testimonial-2.jpg" className="testimonial-img" alt="" />
                          <h3>Sara Wilsson</h3>
                          <h4>Designer</h4>
                          <p>
                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                          </p>
                        </div>
                      </div>{/* End testimonial item */}
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <img src="assets/img/testimonial-3.jpg" className="testimonial-img" alt="" />
                          <h3>Jena Karlis</h3>
                          <h4>Store Owner</h4>
                          <p>
                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                          </p>
                        </div>
                      </div>{/* End testimonial item */}
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <img src="assets/img/testimonial-4.jpg" className="testimonial-img" alt="" />
                          <h3>Matt Brandon</h3>
                          <h4>Freelancer</h4>
                          <p>
                            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                          </p>
                        </div>
                      </div>{/* End testimonial item */}
                    </div>
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Testimonials Section */}
          {/* ======= Team Section ======= */}
          <section id="team" className="team section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h3>Team</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                  <div className="member">
                    <img src="assets/img/team-1.jpg" className="img-fluid" alt="" />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Walter White</h4>
                        <span>Chief Executive Officer</span>
                        <div className="social">
                          <a href><i className="bi bi-twitter" /></a>
                          <a href><i className="bi bi-facebook" /></a>
                          <a href><i className="bi bi-instagram" /></a>
                          <a href><i className="bi bi-linkedin" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                  <div className="member">
                    <img src="assets/img/team-2.jpg" className="img-fluid" alt="" />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Sarah Jhonson</h4>
                        <span>Product Manager</span>
                        <div className="social">
                          <a href><i className="bi bi-twitter" /></a>
                          <a href><i className="bi bi-facebook" /></a>
                          <a href><i className="bi bi-instagram" /></a>
                          <a href><i className="bi bi-linkedin" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                  <div className="member">
                    <img src="assets/img/team-3.jpg" className="img-fluid" alt="" />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>William Anderson</h4>
                        <span>CTO</span>
                        <div className="social">
                          <a href><i className="bi bi-twitter" /></a>
                          <a href><i className="bi bi-facebook" /></a>
                          <a href><i className="bi bi-instagram" /></a>
                          <a href><i className="bi bi-linkedin" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                  <div className="member">
                    <img src="assets/img/team-4.jpg" className="img-fluid" alt="" />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Amanda Jepson</h4>
                        <span>Accountant</span>
                        <div className="social">
                          <a href><i className="bi bi-twitter" /></a>
                          <a href><i className="bi bi-facebook" /></a>
                          <a href><i className="bi bi-instagram" /></a>
                          <a href><i className="bi bi-linkedin" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Team Section */}
          {/* ======= Clients Section ======= */}
          <section id="clients" className="clients">
            <div className="container" data-aos="zoom-in">
              <header className="section-header">
                <h3>Our Clients</h3>
              </header>
              <div className="clients-slider swiper-container">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide"><img src="assets/img/clients/client-1.png" className="img-fluid" alt="" /></div>
                  <div className="swiper-slide"><img src="assets/img/clients/client-2.png" className="img-fluid" alt="" /></div>
                  <div className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt="" /></div>
                  <div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt="" /></div>
                  <div className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt="" /></div>
                  <div className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt="" /></div>
                  <div className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt="" /></div>
                  <div className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt="" /></div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </section>{/* End Clients Section */}
          {/* ======= Pricing Section ======= */}
          <section id="pricing" className="pricing section-bg wow fadeInUp">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h3>Pricing</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
              </header>
              <div className="row flex-items-xs-middle flex-items-xs-center">
                {/* Basic Plan  */}
                <div className="col-xs-12 col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                  <div className="card">
                    <div className="card-header">
                      <h3><span className="currency">$</span>19<span className="period">/month</span></h3>
                    </div>
                    <div className="card-block">
                      <h4 className="card-title">
                        Basic Plan
                      </h4>
                      <ul className="list-group">
                        <li className="list-group-item">Odio animi voluptates</li>
                        <li className="list-group-item">Inventore quisquam et</li>
                        <li className="list-group-item">Et perspiciatis suscipit</li>
                        <li className="list-group-item">24/7 Support System</li>
                      </ul>
                      <a href="#" className="btn">Choose Plan</a>
                    </div>
                  </div>
                </div>
                {/* Regular Plan  */}
                <div className="col-xs-12 col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                  <div className="card">
                    <div className="card-header">
                      <h3><span className="currency">$</span>29<span className="period">/month</span></h3>
                    </div>
                    <div className="card-block">
                      <h4 className="card-title">
                        Regular Plan
                      </h4>
                      <ul className="list-group">
                        <li className="list-group-item">Odio animi voluptates</li>
                        <li className="list-group-item">Inventore quisquam et</li>
                        <li className="list-group-item">Et perspiciatis suscipit</li>
                        <li className="list-group-item">24/7 Support System</li>
                      </ul>
                      <a href="#" className="btn">Choose Plan</a>
                    </div>
                  </div>
                </div>
                {/* Premium Plan  */}
                <div className="col-xs-12 col-lg-4" data-aos="fade-up" data-aos-delay={300}>
                  <div className="card">
                    <div className="card-header">
                      <h3><span className="currency">$</span>39<span className="period">/month</span></h3>
                    </div>
                    <div className="card-block">
                      <h4 className="card-title">
                        Premium Plan
                      </h4>
                      <ul className="list-group">
                        <li className="list-group-item">Odio animi voluptates</li>
                        <li className="list-group-item">Inventore quisquam et</li>
                        <li className="list-group-item">Et perspiciatis suscipit</li>
                        <li className="list-group-item">24/7 Support System</li>
                      </ul>
                      <a href="#" className="btn">Choose Plan</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Pricing Section */}
          {/* ======= F.A.Q Section ======= */}
          <section id="faq" className="faq">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h3>Frequently Asked Questions</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
              </header>
              <ul className="faq-list" data-aso="fade-up" data-aos-delay={100}>
                <li>
                  <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
                  <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                    </p>
                  </div>
                </li>
                <li>
                  <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
                  <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </p>
                  </div>
                </li>
                <li>
                  <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
                  <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                    </p>
                  </div>
                </li>
                <li>
                  <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
                  <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </p>
                  </div>
                </li>
                <li>
                  <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
                  <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                    <p>
                      Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                    </p>
                  </div>
                </li>
                <li>
                  <div data-bs-toggle="collapse" href="#faq6" className="collapsed question">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
                  <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                    <p>
                      Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          
          {/* End F.A.Q Section */}
        
        </main>
        
        {/* End #main */}
        
        {/* ======= Footer ======= */}
        <footer id="footer" className="section-bg">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="footer-info">
                        <h5>Education360</h5>
                        <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                      </div>
                      <div className="footer-newsletter">
                        <h4>Our Newsletter</h4>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem.</p>
                        <form action method="post">
                          <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                        </form>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                          <li><a href="#">Home</a></li>
                          <li><a href="#about">About us</a></li>
                          <li><a href="#">Services</a></li>
                          <li><a href="#">Terms of service</a></li>
                          <li><a href="#">Privacy policy</a></li>
                        </ul>
                      </div>
                      <div className="footer-links">
                        <h4>Contact Us</h4>
                        <p>
                          A108 Adam Street <br />
                          New York, NY 535022<br />
                          United States <br />
                          <strong>Phone:</strong> +1 5589 55488 55<br />
                          <strong>Email:</strong> info@example.com<br />
                        </p>
                      </div>
                      <div className="social-links">
                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form">
                    <h4>Send us a message</h4>
                    <p>Eos ipsa est voluptates. Nostrum nam libero ipsa vero. Debitis quasi sit eaque numquam similique commodi harum aut temporibus.</p>
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                      <div className="form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                      </div>
                      <div className="form-group mt-3">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                      </div>
                      <div className="form-group mt-3">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                      </div>
                      <div className="form-group mt-3">
                        <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                      </div>
                      <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                      </div>
                      <div className="text-center"><button type="submit" title="Send Message">Send Message</button></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              © Copyright <strong>Education360</strong>. All Rights Reserved
            </div>
            <div className="credits">
              {/*
        All the links in the footer should remain intact.
        You can delete the links only if you purchased the pro version.
        Licensing information: https://bootstrapmade.com/license/
        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Rapid
      */}
              Desarrollado por <a href="https://instagram.com/jcboxing2707">Jc Johan</a>
            </div>
          </div>
        </footer>
        {/* End  Footer */}
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>

        </>
    )
}

export default Home
