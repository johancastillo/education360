
const AboutSection = () => {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-5 col-md-6">
                        <div className="about-img" data-aos="fade-right" data-aos-delay={100}>
                            <img src="assets/img/about-img.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="about-content" data-aos="fade-left" data-aos-delay={100}>
                            <h2>Sobre nosotros</h2>
                            <h3>"Te damos el poder de alcanzar tus sueños a través de la educación."</h3>
                            <p>Education360 tiene como objetivo ser una plataforma de educación en línea sumamente optimizada para dar una excelente calidad y experiencia a los estudiantes y profesores de toda Venezuela.</p>
                            <p></p>
                            
                            <ul>
                                <li><i className="bi bi-check-circle" /> Profesores de distintas universidades e instituciones.</li>
                                <li><i className="bi bi-check-circle" /> Educación en línea.</li>
                                <li><i className="bi bi-check-circle" /> Tutorias personalizadas.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection



