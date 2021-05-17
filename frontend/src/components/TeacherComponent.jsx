import {Link} from "wouter"

const TeacherComponent = ({teacherImg, teacherName}) => {
    return (
        <Link href="/teacher-profile">
            <div className="teacher d-flex align-items-center mb-4 mt-2">
                <img className="teacher-img" src={teacherImg} alt={teacherName} style={{ borderRadius: "50%", width: "40px", height: "40px" }} />
                <p className="d-none d-sm-block p-0 m-0 mx-2">{teacherName}</p>
            </div>
        </Link>
    )
}

export default TeacherComponent


