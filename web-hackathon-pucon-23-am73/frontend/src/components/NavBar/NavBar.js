import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './NavBar.module.css';
import { Button, IconAvatar, logout } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { Logo } from '../Logo/Logo';
export const NavBar = () => {
   const location = useLocation();
   const isloggedIn = useSelector((state) => state.user.loggedIn);
   const userName = useSelector((state) => state.user.name);
   const dispatch = useDispatch();
   const logoutUser = () => {
      dispatch(logout());
   }
   useEffect(() => {
      console.log("value of isloggedIn: ", isloggedIn);
   }, []);
   return (
      <div className={styles.container}>
         <nav className={styles.nav}>
            <Logo width={100} height={50} rootClassName="dark" />
            <div className={styles.navLinks}>
               <Link className={location.pathname === '/addevent' ? `${styles.navLink} ${styles.active}` : styles.navLink} to={isloggedIn ? "/addevent" : "/login"}>Add New</Link>
               <Link className={location.pathname === '/listing' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/listing">Events</Link>
               <Link className={location.pathname === '/eventRegistered' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/eventRegistered">Register</Link>
               <Link className={location.pathname === '/eventSchdeuled' ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/eventSchdeuled">Scheduled</Link>
            </div>
            {
               isloggedIn ? (
                  <div className={styles.navButtons}>
                     <div className={styles.navButtons}>
                        <Button value="Logout" type="primary" handleClick={logoutUser} />
                        <div className={styles.username}>
                           <IconAvatar />
                           {userName}
                        </div>
                     </div>
                  </div>

               ) : (
                  <div className={styles.navButtons}>
                     <Link className={styles.navLink} to="/login">Login</Link>
                     <Link to="/signup">
                        <Button value="Register" type="primary" />
                     </Link>
                  </div>
               )
            }
         </nav>
      </div>
   );
};
