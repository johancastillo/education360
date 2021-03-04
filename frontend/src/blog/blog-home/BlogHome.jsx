
import {useState} from "react"
import { Link } from "wouter"
import ArticlePreview from "../article-preview/ArticlePreview"


const BlogHome = () => {
    /*
    ==========
    = States =
    ==========
    */


    return (
        <div className="page container-fluid mb-5">
            <div className="row">
                <div className="col-md-8">
                    <ArticlePreview
                        image="https://kataradigital.net/site/wp-content/uploads/thought-catalog-Nv-vx3kUR2A-unsplash-1024x683.jpg"
                        title="¿Cómo conseguir clientes siendo freelance?"
                        category="Trabajo remoto > Freelance"
                        description="¿Cómo empezaron los freelancers exitosos? Primero, debes saber que, conseguir clientes no es nada fácil, pero como todo negocio empieza así, es hora de buscar los primeros sitios para publicar tus servicios como freelance. Hay muchos medios que te facilitaran el camino, por eso te traigo varias opciones con ventajas y desventajas que te pueden …"
                    />

                    <ArticlePreview
                        image="https://kataradigital.net/site/wp-content/uploads/victoria-heath-MAGAXAYq_NE-unsplash-1024x612.jpg"
                        title="Herramientas para lograr ser freelancer en Venezuela"
                        category="Trabajo remoto > Freelance"
                        description="Conoce las herramientas que te resolverá los problemas con el Internet y la luz, siendo freelancer Ser freelancer en Venezuela no es fácil y menos si estas empezando, pero si es posible. Todos estamos conscientes de los problemas que tenemos y que nos afectan siendo o no freelancer. Sin embargo, debemos buscar solución a todos …"
                    />
                </div>

                <div className="col-md-4">
                    <h4 className="text-center">Próximos talleres</h4>

                    <div>
                        <h6>Marzo 2021</h6>

                        <hr />

                        <div className="row">
                                <div className="workdhops text-center">
                                <img 
                                    src="https://kataradigital.net/site/wp-content/uploads/FCCM-150x150.png" 
                                    alt="" 

                                />
                                </div>

                        </div>
                    </div>

                    <h4 className="text-center mt-5">Otros articulos</h4>

                    <div className="p-2">
                        <img src="https://kataradigital.net/site/wp-content/uploads/pool-690034_1280-474x324.jpg" alt=""/>
                        
                        <h5 className="mt-4">
                            ¿Que contenidos publicar en vacaciones?
                        </h5>
                    </div>

                    <div className="p-2">
                        <img src="https://kataradigital.net/site/wp-content/uploads/patrick-tomasso-fMntI8HAAB8-unsplash-474x324.jpg" alt=""/>
                        
                        <h5 className="mt-4">
                            Enterate de como vender tus servicios
                        </h5>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BlogHome
