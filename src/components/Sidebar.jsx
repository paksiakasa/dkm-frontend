import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoPerson, IoAlbums, IoBag, IoHome, IoCalendar, IoLogOut } from "react-icons/io5"
import { useDispatch, useSelector } from 'react-redux'
import { LogOut, reset } from "../features/authSlice.js"


const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/login");
  }

  return (
    <div><aside className="menu pl-3 has-shadow">
      <p className='menu-label'>
        General
      </p>

      {user && user.role === "craftsman" && (
        <ul className="menu-list">
          <li><NavLink to='/dashboard'><IoHome />Dashboard</NavLink></li>
          <li><NavLink to='/merchs'><IoBag />Merch</NavLink></li>
        </ul>

      )}

      {user && user.role === "artist" && (
        <ul className="menu-list">
          <li><NavLink to='/dashboard'><IoHome />Dashboard</NavLink></li>
          <li><NavLink to='/galleries'><IoAlbums />Gallery</NavLink></li>
        </ul>

      )}
      
      {user && user.role === "curator" && (
        <ul className="menu-list">
          <li><NavLink to='/dashboard'><IoHome />Dashboard</NavLink></li>
          <li><NavLink to='/galleries'><IoAlbums />Gallery</NavLink></li>
          <li><NavLink to='/events'><IoCalendar />Event</NavLink></li>
        </ul>

      )}

      {user && user.role === "admin" && (
        <ul className="menu-list">
          <li><NavLink to='/dashboard'><IoHome />Dashboard</NavLink></li>
          <li><NavLink to='/galleries'><IoAlbums />Gallery</NavLink></li>
          <li><NavLink to='/events'><IoCalendar />Event</NavLink></li>
          <li><NavLink to='/merchs'><IoBag />Merch</NavLink></li>
        </ul>

      )}

      {user && user.role === "admin" && (
        <div>
          <p className="menu-label">
            Admin
          </p>
          <ul className="menu-list">
            <li><NavLink to='/users' ><IoPerson />Users</NavLink></li>
            {/* <li><NavLink to='/curators' >Curators</NavLink></li>
            <li><NavLink to='/artists'>Artists</NavLink></li>
            <li><NavLink to='/craftmans'>Craftsmans</NavLink></li> */}
          </ul>
        </div>
      )}

      <p className="menu-label">
        Settings
      </p>
      <ul className="menu-list">
        <li><button onClick={logout} className='button is-red'><IoLogOut />Logout</button></li>
      </ul>
    </aside></div>
  )
}

export default Sidebar