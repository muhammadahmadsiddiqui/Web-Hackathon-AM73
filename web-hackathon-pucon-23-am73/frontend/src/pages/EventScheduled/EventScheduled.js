import React from 'react'
import styles from './EventScheduled.module.css'
import { Button } from '../../components';

export default function EventScheduled() {
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
                     <p>Happening On</p>
                     <p>30</p>
                     <p>25</p>
                     <p>Tag</p>
                  </div>
            </div>
         </div>
         <img src="../static/images/headerAdd.png" alt="FAQs" /> 
      </div>
      <div className={styles.participantsContianer}>
        <p  className={styles.participantsHeading}>Participants</p>
        <div className={styles.listing}>
         <div>
            <div className={styles.subHead}>Approved</div>
            <ul>
               <li>Iqra sarwar</li>
               <li>Mahnoor Ali</li>
               <li>Laiba Kamal</li>
               <li>Sana Javed</li>
               <li>Mahira Khan</li>
            </ul>
         </div>
         <div>
            <div className={styles.subHead}>Rejected</div>
            <ul>
            <li>Iqra sarwar</li>
               <li>Mahnoor Ali</li>
               <li>Laiba Kamal</li>
               <li>Sana Javed</li>
               <li>Mahira Khan</li>
            </ul>
         </div>
        </div>
        <div className={styles.pending}>
            <div className={styles.subHead}>Pending</div>
            <ul>
               <li>
                  Iqra sarwar
                  <div>
                     <Button value = "Reject"/>
                     <Button value="Approve" type = "secondary"/>
                  </div>
               </li>
               <li>
                  Mahnoor Ali
                  <div>
                     <Button value = "Reject"/>
                     <Button value="Approve" type = "secondary"/>
                  </div>
               </li>
               <li>
                  Laiba Kamal
                  <div>
                     <Button value = "Reject"/>
                     <Button value="Approve" type = "secondary"/>
                  </div>
               </li>
               <li>
                  Sana Javed
                  <div>
                     <Button value = "Reject"/>
                     <Button value="Approve" type = "secondary"/>
                  </div>
               </li>
               <li>
                  Mahira Khan
                  <div>
                     <Button value = "Reject"/>
                     <Button value="Approve" type = "secondary"/>
                  </div>
               </li>
            </ul>
         </div>
      </div>
      </>
   );
}
