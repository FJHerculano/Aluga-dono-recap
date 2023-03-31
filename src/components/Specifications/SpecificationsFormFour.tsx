
const SpecificationsFormFour = () => {
    return (
      <>
        <div className="row mt-3 bg-white d-flex justify-content-center">
          
          <div className="col-md-12 col-sm-12 p-2">
              <div className="custom-size-card border rounded-4 p-2 bg-white shadow-sm">
                  <h6 className="text-center fw-bold">Deixe uma descrição para o seu perfil:</h6>
                  <textarea className="form-control border border-2 rounded-2"></textarea>
              </div>
          </div>

          <div className="col-md-8 col-sm-12 p-2">
              <div className="custom-size-card border rounded-4 p-2 bg-white shadow-sm">
                  <h6 className="text-center fw-bold">Informações adicionais:</h6>
                  
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      O animal ficará dentro de casa.
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      O animal ficará fora de casa.
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked1" />
                    <label className="form-check-label" htmlFor="flexCheckChecked1">
                      O animal terá area aberta para nescessidades e lazer(ex: quintal..).
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                    <label className="form-check-label" htmlFor="flexCheckChecked2">
                      O animal ficará em um canil (espaço fechado dedicado apenas ao animal).
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked3" />
                    <label className="form-check-label" htmlFor="flexCheckChecked3">
                      O ambiente apresenta telas de proteção(ex:janelas de apartamento..).
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked4" />
                    <label className="form-check-label" htmlFor="flexCheckChecked4">
                      O animal ficará isolado de outros animais.
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked5" />
                    <label className="form-check-label" htmlFor="flexCheckChecked5">
                      O animal ficará junto com outros animais.
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked6" />
                    <label className="form-check-label" htmlFor="flexCheckChecked6">
                      O animal ficará em area coberta e protegida.
                    </label>
                  </div>

              </div>
          </div>


        </div>    
      </>
  )
}

export default SpecificationsFormFour