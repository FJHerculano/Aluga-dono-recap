import './specifications.css'
import SpecificationsFormOne from './SpecificationsFormOne'
import SpecificationsTitles from './SpecificationsTitles'

const Login = () => {

  return (
    <div>
      <div className="container col-11 col-md-9" id="form-container">
        <SpecificationsTitles/>
        <SpecificationsFormOne/>

        <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-info btn-sm me-3">Pular Tudo</button>
            <button className="btn btn-success btn-sm me-3">proximo</button>
        </div>
      </div>
    </div>
  )
}

export default Login