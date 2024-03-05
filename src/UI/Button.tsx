

const Button = ({children, onclick}:{children:React.ReactNode, onclick:() => void}) => {
  return (
    <div  >
        <button {...onclick}>
            {children}
        </button>
        
    </div>
  )
}

export default Button