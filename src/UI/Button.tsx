

const Button = ({children, onclick}: {children:React.ReactNode, onclick:() => void}) => {
  return (
    <div>
        <button className="text-white py-2 px-4 rounded-2xl bg-yellow-500 border-yellow-400 border-2" onClick={onclick}>{children}</button>
    </div>
  )
}

export default Button