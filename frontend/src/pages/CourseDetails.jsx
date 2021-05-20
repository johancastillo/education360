import { Link } from "wouter"
import Stars from "../components/Stars"
import TeacherComponent from "../components/TeacherComponent"

const CourseDetails = ({ params }) => {
    return (
        <div className="page container">

            <div className="px-4 d-flex alig-tems-center">
                <Link href="/">
                    <a>Informática y Software</a>
                </Link>

                <p className="mx-2"> {">"} </p>

                <Link href="/">
                    <a>Desarrollo Web</a>
                </Link>

                <p className="mx-2"> {">"} </p>

                <Link href="/">
                    <a>HTML</a>
                </Link>
            </div>

            <div className="row mb-4">
                <div className="col-md-6">
                    <img
                        src="https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png"
                        alt=""
                        width="100%"
                        height="100%"
                    />
                </div>

                <div className="col-md-6">
                    <h6 className="subtitle">
                        HTML Desde Cero 2020
                    </h6>

                    <p>
                        Aprende los fundamentos del desarrollo web desde cero y paso a paso.
                    </p>

                    <div className="d-flex flex-column">
                        <span>Duración: +8Hrs</span>
                        <span>Fecha de lanzamiento: 25 de Agosto de 2020</span>
                    </div>

                    <Stars
                        stars={3.5}
                    />

                    <TeacherComponent
                        teacherImg="https://edteam-media.s3.amazonaws.com/users/thumbnail/36ee2910-a392-46f3-8303-937dc3055c91.jpg"
                        teacherName="Johan Castillo"
                    />

                    <h5>11,95 US$</h5>

                    <div className="d-flex">
                        <button className="btn btn-info">
                            Comprar este curso
                            </button>

                        <button className="btn btn-info mx-md-2">
                            Regalar
                            </button>
                    </div>

                </div>
            </div>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                        Lo que aprenderás
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                        Contenido
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                        Valoraciones
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                        Instructor
                    </button>
                </li>
            </ul>

            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
            </div>

        </div>
    )
}

export default CourseDetails

