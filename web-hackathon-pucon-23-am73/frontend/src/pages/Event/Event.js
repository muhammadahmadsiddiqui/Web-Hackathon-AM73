import React from 'react'
import styles from './Event.module.css'
import { Button } from '../../components';
import { useSelector } from "react-redux";
import axios from 'axios';

export default function Event() {
   const email = useSelector(state => state.user.email);

   const joinEvent = async () => {
      const mail = {
         email: email,
         bodyy: "Event Joined- React Js WorkShop. Happening on: 27-06-2023",
      }
      await axios.post('/email/', mail);
   }

   return (
      <>
         <div className={styles.container}>
            <div className={styles.flex}>
               <div className={styles.information}>
                  <h1 className={styles.heading}>React Js WorkShop</h1>
                  <p>Edureka’s React Certification Training will train you to build efficient React applications by mastering the concepts of React, Redux, and React Native. In this React Course, you will learn how to build simple components & integrate them into more complex design components. After completing this React online training.</p>
               </div>
               <div className={styles.flexInfo}>
                  <div>
                     <p>Happening On</p>
                     <p>Maximum Capacity</p>
                     <p>Available Capacity</p>
                     <p>Tag</p>
                  </div>
                  <div>
                     <p>27-06-2023</p>
                     <p>30</p>
                     <p>25</p>
                     <p>Tag</p>
                  </div>
               </div>
            </div>
            <img src="../static/images/headerAdd.png" alt="FAQs" />
         </div>
         <div className={styles.btn}>
            <Button value="Join Event" type="submit" handleClick={joinEvent} />
            <Button value=" Add to Favourite" btnType="submit" type="secondary" />
         </div>
      </>
   );
}
