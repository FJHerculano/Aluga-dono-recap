import './login.css'
import imgLogin from "../../assets/alugadonoLogo.svg"
import { Link } from 'react-router-dom'


const RegisterAdress
 = () => {
  return (
    <div>
        <div className="container col-11 col-md-9" id="form-container">
        <div className="row gx-5">
            <div className="col-md-6">
                <h2> Cadastro de Endereço</h2>
                <form>

                    <div className="form-floating mb-3">
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Digite o seu CEP"/>
                        <label htmlFor="name" className="form-label">Digite o seu CEP</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Digite o seu estado"/>
                        <label htmlFor="lastname" className="form-label">Digite o seu Estado</label>
                    </div>  

                    <div className="form-floating mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Digite a sua cidade"/>
                        <label htmlFor="lastname" className="form-label">Digite sua cidade</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Digite o numero da casa"/>
                        <label htmlFor="lastname" className="form-label">Digite o Número da casa</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Digite o seu bairro"
                        />
                        <label htmlFor="email" className="form-label">Digite o seu bairro</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Digite a sua rua"/>
                        <label htmlFor="lastname" className="form-label">Digite a sua rua</label>
                    </div>
                    
                    <div className="text-center">
                        <Link className="me-3" to="/register-specifications">
                            <button className="btn btn btn-info text-white">Pular</button>
                        </Link>
                        <Link to="/register-specifications">
                            <button className="btn btn btn-success">Cadastrar-se</button>
                        </Link>
                    </div>
                    

                </form>
            </div>

            <div className="col-md-6">
                <div className="row align-items-center">
                    <div className="col-12" id="link-container">
                        <Link to="/login">
                            <h5>Eu já tenho uma </h5>
                            <h5 className="text-primary">conta</h5>
                        </Link>
                    </div>
                    <div className="col-12">
                        <img src={imgLogin} alt="Hello New Customer" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default RegisterAdress
