import EbookCard from "../ebook-card/EbookCard"
import typescript from "../ebooks-img/typescript.png"
import algoritmos from "../ebooks-img/algoritmos.jpg"
import ingles from "../ebooks-img/ingles.jpeg"
import gambitoDama from "../ebooks-img/gambito-de-dama.jpg"

const LibraryHome = () => {
    return(
        <div className="page">
            <h1 className="text-center">Biblioteca</h1>

            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-3">
                        <EbookCard 
                            title="TypeScript desde cero"
                            image={typescript}
                        />
                    </div>
                    <div className="col-md-3">
                        <EbookCard 
                            title="Algoritmos"
                            image={algoritmos}
                        />
                    </div>

                    <div className="col-md-3">
                        <EbookCard 
                            title="Inglés"
                            image={ingles}
                        />
                    </div>

                    <div className="col-md-3">
                        <EbookCard 
                            title="Gambito de Dama"
                            image={gambitoDama}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LibraryHome

