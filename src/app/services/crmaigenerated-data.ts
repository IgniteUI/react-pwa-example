import { FetchApi } from './fetch-api';
import { SupportTicketsType } from '../models/CRMAIGeneratedData/support-tickets-type';

export async function getSupportTicketsList(): Promise<SupportTicketsType[]> {
  return await FetchApi.fetchApiResponse<SupportTicketsType[]>('https://excel2json.io/api/share/c7df4f41-57a9-4926-2fa0-08dda2c45f95', []);
}
