import {Link} from "wouter"

const Register = () => {

    return (
        <div className="page" style={{ minHeight: "100vh" }}>
            <div className="container d-flex justify-content-center align-items-center flex-column" style={{ maxWidth: '350px' }}>
                <h1 className="text-center">Registrarse</h1>

                <form className="mt-4" style={{ width: "100%" }}>
                    
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nombre de usuario</label>
                        <input type="text" class="form-control" placeholder="Nombre de usuario" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Correo electrónico</label>
                        <input type="email" class="form-control" placeholder="ejemplo@gmail.com" />
                    </div>

                    <div class="mb-3 mt-2">
                        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" placeholder="*********" />
                    </div>

                    <div class="mb-3 mt-2">
                        <label for="exampleInputPassword1" class="form-label">Repite la contraseña</label>
                        <input type="password" class="form-control" placeholder="*********" />
                    </div>

                    <div className="d-grid gap-2">
                        <button class="btn btn-info text-uppercase">Crear</button>
                    </div>

                    <div className="mt-4 text-center">
                        <p>¿Ya tienes cuenta?

                            <Link href="/login">
                                <a className="mx-2">Inicia sesión.</a>
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register

