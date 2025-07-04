import { axiosInstance } from '@/shared/api';
import { getLocale } from 'next-intl/server';
import { GetHomeBottomDTO } from '../model/get-home-bottom-dto';

export const getHomeBottom = async (): Promise<GetHomeBottomDTO | undefined> => {
  const locale = await getLocale();

  try {
    const { data, status, statusText } = await axiosInstance.get(`${locale}/api/v2/home-footer`);

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
