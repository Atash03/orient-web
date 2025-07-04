import { axiosInstance } from '@/shared/api';
import { getLocale } from 'next-intl/server';
import { GetHomeMidDataResponse } from '../model/get-home-mid-data-response';

export const getHomeMid = async (): Promise<GetHomeMidDataResponse | undefined> => {
  const locale = await getLocale();

  try {
    const { data, status, statusText } = await axiosInstance.get(`${locale}/api/v2/home-mid`);

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
