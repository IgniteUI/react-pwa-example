import { BoxOfficeRevenueType } from '../models/Financial/box-office-revenue-type';

export async function getBoxOfficeRevenue(): Promise<BoxOfficeRevenueType[]> {
  const base = import.meta.env.BASE_URL || '/';
  const url = new URL('static-data/financial-box-office-revenue-type.json', window.location.origin + base);
  const response = await fetch(url.toString());
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
