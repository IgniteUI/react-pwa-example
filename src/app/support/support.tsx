import { IgrColumn, IgrGrid } from 'igniteui-react-grids';
import { IgrPieChart, IgrPieChartModule } from 'igniteui-react-charts';
import { useGetBoxOfficeRevenue } from '../hooks/financial-hooks';
import { useGetSupportTicketsList } from '../hooks/crmaigenerated-data-hooks';
import 'igniteui-react-grids/grids/combined.js';
import styles from './support.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrPieChartModule.register();

export default function Support() {
  const classes = createClassTransformer(styles);
  const { financialBoxOfficeRevenue } = useGetBoxOfficeRevenue();
  const { cRMAIGeneratedDataSupportTickets } = useGetSupportTicketsList();

  return (
    <>
      <div className={classes("row-layout support-container")}>
        <div className={classes("column-layout page-container")}>
          <div className={classes("row-layout group")}>
            <div className={classes("column-layout group_1")}>
              <div className={classes("row-layout group_2")}>
                <div className={classes("column-layout group_3")}>
                  <p className={classes("typography__body-1 text")}>
                    <span>Tickets by Priority</span>
                  </p>
                  <div className={classes("group_4")}>
                    <IgrPieChart dataSource={financialBoxOfficeRevenue} labelMemberPath="Franchise" valueMemberPath="TotalWorldBoxOfficeRevenue" width="100%" height="100%" >
                    </IgrPieChart>
                  </div>
                </div>
              </div>
              <div className={classes("column-layout group_5")}>
                <p className={classes("typography__body-1 text")}>
                  <span>All Support Tickets</span>
                </p>
                <IgrGrid data={cRMAIGeneratedDataSupportTickets} primaryKey="TicketNumber" allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
                  <IgrColumn field="TicketNumber" dataType="string" header="TicketNumber" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="Subject" dataType="string" header="Subject" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="Customer" dataType="string" header="Customer" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="Status" dataType="string" header="Status" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="Priority" dataType="string" header="Priority" sortable={true} selectable={false}></IgrColumn>
                  <IgrColumn field="Updated" dataType="date" header="Updated" sortable={true} selectable={false}></IgrColumn>
                </IgrGrid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
