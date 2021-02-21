import {Link} from "wouter"


const ResetPassword = () => {
    const message = "Se le enviará un correo para restablecer su contraseña."

    return(
        <div className="page" style={{ minHeight: "100vh" }}>
            <div className="container d-flex justify-content-center align-items-center flex-column" style={{ maxWidth: '350px' }}>
                <h1 className="text-center">Restablecer contraseña</h1>

                <form className="mt-4" style={{ width: "100%" }}>
                    <div className="mb-3">
                        <div className="form-text">
                            {message}
                        </div>
                        <input type="email" className="form-control mt-3" placeholder="Correo electrónico" />
                    </div>

                    <div className="d-grid gap-2">
                        <button className="btn btn-info text-uppercase">Enviar</button>
                    </div>

                    <div className="mt-4 text-center">
                        <p>¿No tienes cuenta?

                            <Link href="/register">
                                <a className="mx-2">Regístrate.</a>
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default ResetPassword

