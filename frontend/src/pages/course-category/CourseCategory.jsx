

const CourseCategory = ({params}) => {
    return(
        <div className="page">
            <h1 className="text-center">
                Catagoría de {params.title}
            </h1>
        </div>
    )
}

export default CourseCategory

