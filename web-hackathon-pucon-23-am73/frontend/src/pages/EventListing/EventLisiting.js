import styles from "./EventLisiting.module.css";
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { IconPresent, IconPast, HorizontalScroll } from "../../components/index";
import { pastEvents, presentEvents } from "../../utils/Data";

const Cities = () => {
   const pastHealthEvents = pastEvents.filter(p => { return p.Tag === 'Health'});
   const presentHealthEvents = presentEvents.filter(p => { return p.Tag === 'Health'});
   const pastEducationEvent = pastEvents.filter(p => { return p.Tag === 'Education'});
   const presentEducationEvents = pastEvents.filter(p => { return p.Tag === 'Education'});
   const pastFoodEvents = pastEvents.filter(p => { return p.Tag === 'Food'});
   const presentFoodEvents = presentEvents.filter(p => { return p.Tag === 'Food'});

   const past = [pastEducationEvent,pastFoodEvents,pastHealthEvents];
   const present = [presentEducationEvents,presentFoodEvents,presentHealthEvents];
   const titles = ["EDUCTION","FOOD","HEALTH"];
   console.log(past)
   return (
      <>
         <div className={styles.container}>
            <div className={styles.header}>
               <div>
                  <h1>Explore Our Upcoming and Past Projects</h1>
                  <p>Life is short and the world is wide. So, better get started. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, nisl nec lacinia lacinia, nisl nisl tincidunt nisl, nec tincidunt nisl lorem nec nisl.
                  </p>
               </div>
               <img src="../static/images/headerAdd.png" alt="CitiesHead" />
            </div>
            <div className={styles.tabs}>
               <Tabs focusTabOnClick={false}>
                  <TabList>
                  <Tab>
                        <IconPresent />
                        <p>Present</p>
                     </Tab>
                     <Tab>
                        <IconPast />
                        <p>Past</p>
                     </Tab>
                  </TabList>
                  <TabPanel>
                  {past.map((e, index) => (
                        < HorizontalScroll key={index} items={e} title={titles[index]}/>
                     ))}
                  </TabPanel>
                  <TabPanel>
                  {present.map((e, index) => (
                        < HorizontalScroll key={index} items={e} title={titles[index]}/>
                     ))}
                  </TabPanel>
               </Tabs>
            </div>
         </div>
      </>
   );
};

export default Cities;
