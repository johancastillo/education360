import {Link} from "wouter"


const ArticlePreview = ({image, title, category, link, description}) => {
    return (
        <article className="mb-5">
            <Link href="/blog/freelance">
                <a>

                    <img
                        src={image}
                        alt=""
                        width="100%"
                    />

                    <h2 className="mt-4 subtitle">
                        <a href="">
                            {title} 
                        </a>
                    </h2>

                    <span>
                        {category}
                    </span>

                    <p className="mt-4">
                        {description}
                    </p>

                    <button className="btn btn-primary">
                        Leer más »
                    </button>

                </a>
            </Link>

        </article>
    )
}

export default ArticlePreview


