import { faClockFour, faPen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const DataProfileFour = () => {
  return (
    <div className="shadow rounded-4 p-2 bg-white">
      <div className="row d-flex justify-content-center mt-1">
        <h4 className="text-center"> + Algumas especificações:</h4>
        {/* Quarto campo de dados */}

        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          {/* Inativo */}
          <div className="text-center text-danger fw-bold">
            <span>inativo</span>
          </div>
          <div className="bg-secondary text-white border border-info rounded-4 shadow-sm py-2" >
            <div className="d-flex justify-content-center">
              <FontAwesomeIcon className="me-2 fs-5" icon={faClockFour}/>
              <h6 className="">24 HORAS:</h6>
            </div>
          </div>
        </div> 
        
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4 ">
          <div className="text-center text-success fw-bold">
            <span>Ativo</span>
          </div>
          <div className="border border-info rounded-4 shadow-sm py-2" >
            <div className="d-flex justify-content-center">
              <FontAwesomeIcon className="me-2 fs-5" icon={faClockFour}/>
              <h6 className="">24 HORAS:</h6>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}


export default DataProfileFour