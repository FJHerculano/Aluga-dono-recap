import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
  size: string;
  color: string;
  name: IconProp;
}

const IconProfile = ({size, color, name}:Props) => {
  
  return (
    <div> 
      {/* Vai virar um componente separado */}
      <div className="">
        <FontAwesomeIcon className={`fs-${size} text-${color} ms-4`} icon={name}/>        
      </div>      
        
    </div>

  )
}

export default IconProfile