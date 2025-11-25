import { BoxOfficeRevenueType } from '../models/Financial/box-office-revenue-type';

export async function getBoxOfficeRevenue(): Promise<BoxOfficeRevenueType[]> {
  const response = await fetch('../../static-data/financial-box-office-revenue-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
