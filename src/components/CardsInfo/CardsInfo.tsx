import { faFaceGrin, faPhone, faStairs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./styles.css";

const CardsInfo = () => {
  return (
    <div className="container py-3">
      <h1 className="text-center ">Vantagens da plataforma</h1>
      <div className="row d-flex mt-5 card-group">

        <div className="col-md-6 col-lg-4 col-sm-12">
          <div className="shadow p-5 rounded-4 card-group card-color">
            <div className="d-block justify-content-center">
              <div className="d-flex justify-content-center">
                <FontAwesomeIcon className="icon-card me-2" icon={faPhone}/>
                <p>Contato</p>
              </div>
              <h6 className="text-center">
                Disponibilizamos uma forma simples e eficaz de entrar em contato conosco.
              </h6>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 col-lg-4 col-sm-12">
          <div className="shadow p-5 rounded-4 card-group card-color">
            <div className="d-block justify-content-center">
              <div className="d-flex justify-content-center">
                <FontAwesomeIcon className="icon-card me-2" icon={faStairs}/>
                <p>Escalabilidade</p>
              </div>
              <h6 className="text-center">
                Procuramos sempre melhorar a experiência dos nossos usuários.
              </h6>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 col-sm-12">
          <div className="shadow p-5 rounded-4 card-group card-color">
            <div className="d-block justify-content-center">
              <div className="d-flex justify-content-center">
                <FontAwesomeIcon className="icon-card me-2" icon={faFaceGrin}/>
                <p>Comentários Positivos</p>
              </div>
              <h6 className="text-center">
                A sua avaliação nas hospedagens são extramente importante 
              </h6>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CardsInfo