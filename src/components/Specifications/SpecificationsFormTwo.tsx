
const SpecificationsFormTwo = () => {
    return (
    <>
        <div className="row mt-3 bg-white">

            <div className="col-md-6 col-sm-12 p-2">
                <div className="custom-size-card border rounded-4 p-2 bg-white shadow-sm">
                    <h6 className="text-center fw-bold">Tem experiencia veterinaria?</h6>
                    
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Sim
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Não
                        </label>
                    </div>

                </div>
            </div>

            <div className="col-md-6 col-sm-12 p-2">
                <div className="custom-size-card border rounded-4 p-2 bg-white shadow-sm">
                    <h6 className="text-center fw-bold">Possui criança pequena no local?</h6>
                    
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Sim
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Não
                        </label>
                    </div>

                </div>
            </div>
            
            <div className="col-md-6 col-sm-12 p-2 bg-white">
                <div className="custom-size-card border rounded-4 p-2 bg-white shadow-sm">
                    <h6 className="text-center fw-bold">Disposição para hospedar quantos animais?</h6>
                    
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Apenas 1
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Apenas 2
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                            Apenas 3
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                        <label className="form-check-label" htmlFor="flexRadioDefault4">
                            Mais de 4
                        </label>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-sm-12 p-2">
                <div className="custom-size-card border rounded-4 p-2 bg-white shadow-sm">
                    <h6 className="text-center fw-bold">Você já tem algum animal?</h6>
                    
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Sim, animal pequeno
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Sim, animal grande
                        </label>
                    </div> 
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                            Sim, grandes e pequenos
                        </label>
                    </div> 
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault4">
                            Não tenho animais 
                        </label>
                    </div>

                </div>
            </div>

        </div>
    </>
  )
}

export default SpecificationsFormTwo