import { IgrNavbar } from 'igniteui-react';
import { Outlet } from 'react-router-dom';
import styles from './app.module.css';
import createClassTransformer from './style-utils';
import '/src/app/base-view-styles.css';

export default function App() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("column-layout master-view-container")}>
        <IgrNavbar className={classes("navbar")}>
          <div className={classes("row-layout group")}>
            <h6 className={classes("h6")}>
              <span>React PWA Dashboard Example using Ignite UI</span>
            </h6>
          </div>
        </IgrNavbar>
        <div className={classes("row-layout group_1")}>
          <div className={classes("view-container")}>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
