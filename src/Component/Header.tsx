import React from "react";
import { Link } from "react-router-dom";


export const Header:React.FC = ()=> {

  return (
    <>
      <header id="header" className="fixed left-0 top-0 grid w-1/5 h-screen place-items-center mr-auto bg-header">
        <nav className="mx-auto list-none my-5">
          <div className="w-36">
            <img src="../assets/kuma.png" alt="かわいい熊" />
          </div>
          <ul className="text-center my-20 font-gnav">
            <li className="my-5 text-3xl"><Link to="/">Top</Link></li>
            <li className="my-5 text-3xl"><Link to="/Works">Works</Link></li>
            <li className="my-5 text-3xl"><a href="#">About</a></li>
            <li className="my-5 text-3xl"><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}
