import { Link } from "wouter"

const Login = () => {
    const message = ""

    return (
        <div className="page" style={{ minHeight: "100vh" }}>
            <div className="card p-4 mb-5 container d-flex justify-content-center align-items-center flex-column" style={{ maxWidth: '350px' }}>
                <h1 className="text-center">Login</h1>

                <form className="mt-4" style={{ width: "100%" }}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Nombre de usuario o email</label>
                        <input type="email" className="form-control" placeholder="Nombre de usuario o email" />
                        <div className="form-text">
                            {message}
                        </div>
                    </div>

                    <div className="mb-3 mt-2">
                        <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" placeholder="*********" />

                        <p className="text-end mt-2">
                            <Link href="/reset-password">
                                <a>¿Olvidó la contraseña?</a>
                            </Link>
                        </p>
                    </div>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Recordarme</label>
                    </div>

                    <div className="d-grid gap-2">
                        <button className="btn btn-info text-uppercase">Ingresar</button>
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

export default Login

