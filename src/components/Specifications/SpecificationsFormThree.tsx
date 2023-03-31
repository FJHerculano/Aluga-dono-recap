
const SpecificationsFormThree = () => {
    return (
      <>
        <div className="row mt-3 bg-white d-flex justify-content-center">

          <div className="col-md-6 col-sm-12 p-2">
              <div className="custom-size-card border rounded-4 p-2 bg-white shadow-sm">
                  <h6 className="text-center fw-bold">O seu estabelecimento é?</h6>
                  
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Apartamento
                      </label>
                  </div>
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Casa 
                      </label>
                  </div>
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                      <label className="form-check-label" htmlFor="flexRadioDefault3">
                        Chacara
                      </label>
                  </div>
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                      <label className="form-check-label" htmlFor="flexRadioDefault4">
                          outros
                      </label>
                  </div>

              </div>
          </div>
          
          <div className="col-md-6 col-sm-12 p-2 bg-white">
              <div className="custom-size-card border rounded-4 p-2 bg-white shadow-sm">
                  <h6 className="text-center fw-bold">Tem experiencia em aplicar algum medicamento?</h6>
                  
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Nenhuma experiencia
                      </label>
                  </div>
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                          Apenas via oral
                      </label>
                  </div>
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                      <label className="form-check-label" htmlFor="flexRadioDefault3">
                          Apenas via injetavel 
                      </label>
                  </div>
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                      <label className="form-check-label" htmlFor="flexRadioDefault4">
                            Sim, tenho experiencia
                      </label>
                  </div>
              </div>
          </div>

          <div className="col-md-6 col-sm-12 p-2">
              <div className="custom-size-card border rounded-4 p-2 bg-white shadow-sm">
                  <h6 className="text-center fw-bold">Qual porte você aceitará?</h6>
                  
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Pequeno
                      </label>
                  </div>
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Medio
                      </label>
                  </div> 
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                      <label className="form-check-label" htmlFor="flexRadioDefault3">
                        Grande
                      </label>
                  </div> 
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                      <label className="form-check-label" htmlFor="flexRadioDefault4">
                        Muito grande 
                      </label>
                  </div>

              </div>
          </div>

          <div className="bg-info col-md-6 col-sm-12 p-2 bg-white">
              <div className="custom-size-card border rounded-4 p-2 bg-white shadow-sm">
                  <h6 className="text-center fw-bold">Você irá aceitar animais?</h6>
                  
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Castrado
                      </label>
                  </div>
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                          Machos apenas castrados
                      </label>
                  </div>
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                      <label className="form-check-label" htmlFor="flexRadioDefault3">
                        Femeas apenas castradas
                      </label>
                  </div>
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                      <label className="form-check-label" htmlFor="flexRadioDefault4">
                        Todos
                      </label>
                  </div>
              </div>
          </div>
          
          <div className="col-md-6 col-sm-12 p-2">
              <div className="custom-size-card border rounded-4 p-2 bg-white shadow-sm">
                  <h6 className="text-center fw-bold">Você irá aceitar animais?</h6>
                  
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Apenas vacinados
                      </label>
                  </div>
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Todos
                      </label>
                  </div> 

              </div>
          </div>

        </div>    
      </>
  )
}

export default SpecificationsFormThree