import './profile.css'

type Props = {
    title?: string;
    icon?: string;
    nameTag: string;
    color?: string;
    background?: string;
}

const OptionsProfile = ({ nameTag, color="white", background="secondary"}: Props) => {
  return (
    <div> 
        {/* Quando inativo será cinza com branco , ativo azul com preto */}
        <div className="text-center">
            <span className={`bg-${background} text-center btn btn-sm option-style text-${color}`}>{nameTag}</span>  
        </div>        
    </div>
  )
}

export default OptionsProfile