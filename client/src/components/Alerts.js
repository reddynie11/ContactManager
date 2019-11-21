import React,{useContext} from 'react'
import AlertContext from '../context/alert/AlertContext';

export const Alerts = () => {
    const alertContext = useContext(AlertContext);
    const {alerts } = alertContext;
    return (
        alerts.length>0 && alerts.map(alert=>{
            return(
                <div key={alert.id} className={`alert alert-${alert.type} container mt-1`}>
                    <i className='fas fa-info-circle'/>  {alert.msg}
                </div>
            )
        })
    )
}
export default Alerts;