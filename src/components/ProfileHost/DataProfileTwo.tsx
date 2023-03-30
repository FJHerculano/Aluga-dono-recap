import { faPen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const DataProfileTwo = () => {
  return (
    <div className="p-5 shadow-sm rounded-4 bg-white">
      
      <div className="row d-flex justify-content-center mt-3">

        <div className="">
          <span className="fw-bold">Seus créditos: </span>
          <span className="border-bottom border-2 border-success">100,00 </span>
          <span className="fw-bold text-success border-bottom border-2 border-success">R$</span>
        </div>

        <div className="col-1 rounded-circle p-5 bg-info"></div>

        <div className="col-12 text-center">
          <h3 >José da silva</h3>
          <button className="btn btn-sm btn-warning mb-3">Configuraçõe da conta</button>
        </div>
      </div>
    
      <div className="row d-flex justify-content-center">
    
        <div className="col-12 text-center border-bottom border-info mb-3">
          <h5 className="text-center">Endereço:</h5>
          <h6>
            Cidade: Juazeiro do norte - CE, Bairro: Horto,
          </h6>
          <h6>
            Rua/Avenida:Um nome bem grande precavir, N° : 1617. 
          </h6>
        </div>

        <h5 className="text-center">Hospedagem:</h5>

        <div className="col-6 mt-3 px-5">
            <div className="text-center">
              <span className="fw-bold">Valor: </span>
              <span className="border-bottom border-3 border-success"> 45.00 R$</span>
              <span className="badge ms-2 bg-warning"><FontAwesomeIcon icon={faPen}/></span>
            </div>
            <div className="text-center mt-2">
              <button className="btn btn-sm btn-info">Solicitar</button>
            </div>
        </div>

        <div className="col-6 mt-3 px-5 text-center">

          <span className="fw-bold">Status: </span>
          <div className="d-flex border-bottom border-2 border-info p-1"> 
            <span className="badge bg-success"> Hospedagem Disponivel </span>
            <span className="badge ms-2 bg-warning"><FontAwesomeIcon icon={faPen}/></span>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default DataProfileTwo