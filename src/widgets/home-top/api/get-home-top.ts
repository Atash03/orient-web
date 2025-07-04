import { axiosInstance } from '@/shared/api';
import { getLocale } from 'next-intl/server';
import { GetHomeTopDataResponse } from '../model/get-home-top-data-response';

export const getHomeTop = async (): Promise<GetHomeTopDataResponse | undefined> => {
  const locale = await getLocale();

  try {
    const { data, status, statusText } = await axiosInstance.get(`${locale}/api/v2/home-top`);

    if (status !== 200) {
      console.log(status + ` get-menu: ` + statusText);
      return undefined;
    }

    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
