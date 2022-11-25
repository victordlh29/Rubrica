import React from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

const Inicio = () => {
  const navigate = useNavigate()
  const [user,setUser]= React.useState(null)
  React.useEffect(()=>{
    if (auth.currentUser) {
      setUser(auth.currentUser)
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Error de usuario',
        text: 'Inicia sesión para poder continuar.'
      })
      navigate('/login')
    }
  },[navigate])

  return (
    <div className="Container">
      <img src="https://thumbs.dreamstime.com/b/cliente-de-la-empresa-que-activa-servicios-manejados-75847683.jpg" width={500} height={500} alt="services" />
    </div>

  )
}

export default Inicio