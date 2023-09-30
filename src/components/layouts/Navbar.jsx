
function Navbar({children}) {
  return (
    <div>
      <div className="nav flex justify-between">
        <div className="logo">Logo</div>
        <div className="menu">
            <ul className="flex">
                <li className="px-3 cursor-pointer">
                    Home
                </li>
                <li className="px-3 cursor-pointer">
                    About us
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
