// import "./CourseCard.css"

import { Link } from 'wouter'
import Stars from "./Stars"
import { useState } from 'react'
import BtnPrice from "./BtnPrice"



const CourseCard = ({ id, title, image, stars, tag, price, teacher, teacherImg, description }) => {
    <span className="icon-cart"></span>
    const [favorite, setFavorite] = useState(false)

    const addedFovorite = () => {

    }

    return (
        <div className="card" style={{ width: '100%' }}>
            <Link href="/cursos/html">
                <a style={{ cursor: "pointer" }}>
                    <img src={image} className="card-img-top" alt="..." />
                </a>
            </Link>

            <div className="card-body">
                <Link href="/curso">
                    <a style={{ cursor: "pointer" }}>
                        <h6 className="card-title">{title}</h6>
                    </a>
                </Link>

                <div className="d-flex justify-content-between">
                    {/* Stars rendering component */}
                    <Stars stars={stars} />

                    <div>
                        <span className={favorite ? "icon-heart-full" : "icon-heart-void"}
                            style={{ fontSize: "22px", cursor: 'pointer' }}
                            onClick={addedFovorite}></span>
                    </div>
                </div>




                    <Link href="/teacher-profile">
                        <div className="teacher d-flex align-items-center mb-4 mt-2">
                            <img className="teacher-img" src={teacherImg} alt={teacher} style={{ borderRadius: "50%", width: "40px", height: "40px" }} />
                            <p className="d-none d-sm-block p-0 m-0 mx-2">{teacher}</p>
                        </div>
                    </Link>





                    <div className="price">

                        {
                            price === 'free' ?
                                <Link href="/curso">
                                    <span className="price" style={{ color: 'red', marginLeft: '8px' }}>
                                        ¡Gratis!
                                    </span>
                                </Link>
                                :
                                <BtnPrice price={price} courseID={id} />
                        }

                    </div>

                <Link href="/">
                    <a className="badge bg-danger mt-2">
                        {tag}
                    </a>
                </Link>

            </div>
        </div>
    )
}

export default CourseCard
