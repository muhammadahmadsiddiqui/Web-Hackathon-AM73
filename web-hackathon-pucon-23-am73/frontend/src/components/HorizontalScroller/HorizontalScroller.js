import { React, useState } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Arrows } from '../Arrows/Arrows';
import styles from './HorizontalScroller.module.css';
import { CustomCard } from '../CustomCard/CustomCard';

const HorizontalScroll = (props) => {
   const { items, title } = props;
   return (
      <>
      <p className={styles.title}>{title}</p>
      <ScrollMenu Header={Arrows}>
         {items.map((e, index) => (
            <CustomCard
               key={index}
               e={e}
            />
         ))}
      </ScrollMenu>
      </>
   );
};
export default HorizontalScroll;
