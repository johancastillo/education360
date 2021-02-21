import { Link } from "wouter"

const Login = () => {
    const message = ""

    return (
        <div className="page" style={{ minHeight: "100vh" }}>
            <div className="container d-flex justify-content-center align-items-center flex-column" style={{ maxWidth: '350px' }}>
                <h1 className="text-center">Login</h1>

                <form className="mt-4" style={{ width: "100%" }}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nombre de usuario o email</label>
                        <input type="email" class="form-control" placeholder="Nombre de usuario o email" />
                        <div class="form-text">
                            {message}
                        </div>
                    </div>

                    <div class="mb-3 mt-2">
                        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" placeholder="*********" />

                        <p className="text-end mt-2">
                            <Link href="/reset-password">
                                <a>¿Olvidó la contraseña?</a>
                            </Link>
                        </p>
                    </div>

                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Recordarme</label>
                    </div>

                    <div className="d-grid gap-2">
                        <button class="btn btn-info text-uppercase">Ingresar</button>
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

