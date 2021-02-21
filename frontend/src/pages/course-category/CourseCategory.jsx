import CourseCard from "../../components/course-card/CourseCard"

const paths = {
    "software": "Desarrollo de Software",
    "matematicas": "Matemáticas",
    "negocios": "Negocios",
    "marketing": "Marketing",
    "diseno": "Diseño",
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
        </div>
    )
}

export default CourseCategory

