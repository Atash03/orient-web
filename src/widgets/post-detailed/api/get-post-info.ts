import { axiosInstance } from '@/shared/api';
import { getLocale } from 'next-intl/server';
import { GetPostInfoDTO } from '../model/get-post-info-response-dto';

export const getPostInfo = async (id: string): Promise<GetPostInfoDTO | undefined> => {
  const locale = await getLocale();

  try {
    const { data, status, statusText } = await axiosInstance.get(`/${locale}/api/posts/${id}`);

    if (status !== 200) {
      console.log(status + ` get-post-info: ` + statusText);
      return undefined;
    }

    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
