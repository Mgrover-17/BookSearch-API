import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your perfect read.</h2><br />
                <p className='header-text fs-18 fw-3'>Dive into a plethora of genres, from mystery and romance to science fiction and history. Whatever your mood, we have a book waiting for you.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header


