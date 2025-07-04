import { axiosInstance } from '@/shared/api';
import { HeaderResponse } from '../model/header-response';

export const getMenu = async (): Promise<HeaderResponse | undefined> => {
  try {
    const { data, status, statusText } = await axiosInstance.get('/api/v2/header');

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
