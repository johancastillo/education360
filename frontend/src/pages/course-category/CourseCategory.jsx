import CourseCard from "../../components/course-card/CourseCard"

const paths = {
    "software": "Desarrollo de Software",
    "matematicas": "Matemáticas",
    "negocios": "Negocios",
    "marketing": "Marketing",
    "diseno": "Diseño",
    "ingles": "Inglés",
}

const CourseCategory = ({ params }) => {
    return (
        <div className="container page">
            <h1 className="text-center">
                Cursos de {paths[params.title]}
            </h1>

            <h4 className="mt-4">Cursos para dar tus primeros pasos</h4>

            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                        Populares
                    </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                        Recientes
                    </button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                        Más vendidos
                    </button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="container mt-4">
                        <div className="row">

                            <div className="col-md-4">
                                <CourseCard
                                    title="JavaScript desde cero"
                                    image="https://edteam-media.s3.amazonaws.com/courses/small/cd6b19fb-bfcb-4197-bf68-4fd2ab7f37e2.png"
                                    stars={3.5}
                                    price={12.5}
                                    teacherImg="https://edteam-media.s3.amazonaws.com/users/thumbnail/36ee2910-a392-46f3-8303-937dc3055c91.jpg"
                                    teacher="Johan Castillo"
                                />
                            </div>

                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                </div>

                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                </div>
            </div>

            <h5 className="mt-4">Cursos destacados</h5>

            <p>Carrusel de cursos</p>

            <h5 className="mt-4">Temas populares</h5>

            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            PHP
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            JavaScript
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            TypeScript
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            Node.js
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            MongoDB
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card py-4 px-2">
                            Laravel
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card py-4 px-2">
                            Flask
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card py-4 px-2">
                            Python
                        </div>
                    </div>
                </div>
            </div>

            <h5 className="mt-4">Instructores populares</h5>

            <div className="container">
                <div className="row">

                    <div className="col-md-6">
                        <div class="card mb-3" style={{ maxWidth: "540px" }}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="..." alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div class="card mb-3" style={{ maxWidth: "540px" }}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="..." alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>



            <h5 className="mt-4">Todos los cursos de {paths[params.title]}</h5>

            <div className="my-2">
                <button className="btn btn-primary">Filtrar</button>

                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Accordion Item #1
      </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Accordion Item #2
      </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
      </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="col-md-6">
                            <div class="card mb-3" style={{ width: "100%" }}>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="..." alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col-md-6">
                            <div class="card mb-3" style={{ width: "100%" }}>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="..." alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col-md-6">
                            <div class="card mb-3" style={{ width: "100%" }}>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="..." alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>


        </div>
    )
}

export default CourseCategory

