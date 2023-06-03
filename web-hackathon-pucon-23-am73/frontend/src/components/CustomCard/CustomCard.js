import React from 'react';
import { Card, ImageHeader, CardBody } from 'react-simple-card';
import styles from './CustomCard.module.css';

export const CustomCard = (props) => {
   const { e } = props
   return (
      <Card>
         <ImageHeader imageSrc={e.images} />
         <CardBody>
            <div className={styles.body}>
               <div className={styles.flex}>
                  <p className={styles.title}>{e.Title}</p>
               </div>
               <div className={styles.flex}>
                  <p className={styles.title}>Date</p>
                  <p>{e.startDate.substring(16, 28)}</p>
                  <p>{e.startDate.substring(16, 28)}</p>
               </div>
               <div className={styles.flex}>
                  <p className={styles.title}>Time</p>
                  <p>{e.startDate.substring(0, 10)}</p>
                  <p>{e.startDate.substring(0, 10)}</p>
               </div>
            </div>
         </CardBody>
      </Card>
   );
};
