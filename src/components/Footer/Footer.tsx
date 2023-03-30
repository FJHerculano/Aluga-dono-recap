import "./styles.css";
import gmail from "../../assets/gmail.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="container-fluid footer-custom">
      <h3 className="text-white text-center">Entre em contato com a gente</h3>
      <div className="row d-flex justify-content-center my-4">      
        <img className="img-rede-social rounded-circle bg-light" src={gmail} alt="" /> 
      </div>

      <p className="d-flex align-items-center justify-content-center text-white text-center">
        Copyright 2023 by Bliny Software All Rights Reserved.
        <FontAwesomeIcon className="text-primary fs-5 bg-white ms-2 p-1 border rounded-circle" icon={faB}/>
      </p>
    </footer>
  )
}

export default Footer