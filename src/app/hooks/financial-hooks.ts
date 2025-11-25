import { useCallback, useEffect, useState } from 'react';
import { BoxOfficeRevenueType } from '../models/Financial/box-office-revenue-type';
import { getBoxOfficeRevenue } from '../services/financial';

export const useGetBoxOfficeRevenue = () => {
  const [boxOfficeRevenue, setBoxOfficeRevenue] = useState<BoxOfficeRevenueType[]>([]);

  const requestBoxOfficeRevenue = useCallback(() => {
    let ignore = false;
    getBoxOfficeRevenue()
      .then((data) => {
        if (!ignore) {
          setBoxOfficeRevenue(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestBoxOfficeRevenue();
  }, [requestBoxOfficeRevenue]);

  return { requestFinancialBoxOfficeRevenue: requestBoxOfficeRevenue, financialBoxOfficeRevenue: boxOfficeRevenue, setFinancialBoxOfficeRevenue: setBoxOfficeRevenue };
}
