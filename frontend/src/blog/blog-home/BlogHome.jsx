
import { Link } from "wouter"

const BlogHome = () => {
    return (
        <div className="page container mb-5">
            <div className="row">
                <div className="col-md-8">
                    <article>
                        <Link href="/blog/freelance">
                            <a>

                                <img
                                    src="https://kataradigital.net/site/wp-content/uploads/thought-catalog-Nv-vx3kUR2A-unsplash-1024x683.jpg"
                                    alt=""
                                    width="100%"
                                />

                                <h2 className="mt-4">
                                    <a href="">
                                        Cómo conseguir clientes siendo freelance
                        </a>
                                </h2>

                                <span>
                                    {"Trabajo remoto > Freelance"}
                                </span>

                                <p className="mt-4">
                                    ¿Cómo empezaron los freelancers exitosos? Primero, debes saber que, conseguir clientes no es nada fácil, pero como todo negocio empieza así, es hora de buscar los primeros sitios para publicar tus servicios como freelance. Hay muchos medios que te facilitaran el camino, por eso te traigo varias opciones con ventajas y desventajas que te pueden …
                                </p>

                                <button className="btn btn-primary">
                                    Leer más »
                                </button>

                            </a>
                        </Link>

                    </article>
                </div>

                <div className="col-md-4">
                    <h4 className="text-center">Próximos talleres</h4>

                    <div>
                        <h6>Marzo 2021</h6>

                        <hr/>

                        <div className="row">
                            <div className="col-md-4">
                                <img src="https://kataradigital.net/site/wp-content/uploads/FCCM-150x150.png" alt=""/>
                            </div>
                            
                            <div className="col-md-8">

                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BlogHome
