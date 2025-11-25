import { useCallback, useEffect, useState } from 'react';
import { getSupportTicketsList } from '../services/crmaigenerated-data';
import { SupportTicketsType } from '../models/CRMAIGeneratedData/support-tickets-type';

export const useGetSupportTicketsList = () => {
  const [supportTickets, setSupportTickets] = useState<SupportTicketsType[]>([]);

  const requestSupportTickets = useCallback(() => {
    let ignore = false;
    getSupportTicketsList()
      .then((data) => {
        if (!ignore) {
          setSupportTickets(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestSupportTickets();
  }, [requestSupportTickets]);

  return { requestCRMAIGeneratedDataSupportTickets: requestSupportTickets, cRMAIGeneratedDataSupportTickets: supportTickets, setCRMAIGeneratedDataSupportTickets: setSupportTickets };
}
