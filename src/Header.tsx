

function Header() {

  return (
    <>
      <nav className="mx-auto list-none my-5">
        <div className="w-36">
          <img src="/src/assets/kuma.png" alt="かわいい熊" />
        </div>
        <ul className="text-center my-20 font-gnav">
          <li className="my-5 text-3xl"><a href="#">Top</a></li>
          <li className="my-5 text-3xl"><a href="#">Works</a></li>
          <li className="my-5 text-3xl"><a href="#">About</a></li>
          <li className="my-5 text-3xl"><a href="#">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Header
