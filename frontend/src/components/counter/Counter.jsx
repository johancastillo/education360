
import {useState} from "react"

const Counter = ({usersQuantity, studentsQuantity, teachersQuantity, coursesQuantity}) => {
    const [users, setUsers] = useState(0)
    const [students, setStudents] = useState(0)
    const [teachers, setTeachers] = useState(0)
    const [courses, setCourses] = useState(0)

    return (
        <div className="container mt-5">
            <div className="row counters" data-aos="fade-up" data-aos-delay="100">
                
                <div className="col-lg-3 col-6 text-center">
                    <h2 className="purecounter m-0">{users}</h2>
                    <p>Alumnos</p>
                </div>

                <div className="col-lg-3 col-6 text-center">
                    <h2 className="purecounter m-0">{students}</h2>
                    <p>Profesores</p>
                </div>

                <div className="col-lg-3 col-6 text-center">
                    <h2 className="purecounter m-0">{teachers}</h2>
                    <p>Cursos</p>
                </div>

                <div className="col-lg-3 col-6 text-center">
                    <h2 className="purecounter m-0">{courses}</h2>
                    <p>Categorías</p>
                </div>

            </div>
        </div>
    )
}


export default Counter
