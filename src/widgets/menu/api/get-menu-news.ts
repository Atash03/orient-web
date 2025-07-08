import { axiosInstance } from '@/shared/api';
import { getLocale } from 'next-intl/server';
import { GetDataDTO } from '@/shared/types';
import { PostModel } from '@/entities/posts';

export const getMenuNews = async (
  endpoint: string,
  page: string,
  search?: string,
  postType?: string,
): Promise<GetDataDTO<PostModel> | undefined> => {
  const locale = await getLocale();

  try {
    const { data, status, statusText } = await axiosInstance.get(`/${locale}/${endpoint}`, {
      params: {
        page,
        search,
        postType,
      },
    });

    if (status !== 200) {
      console.log(status + ` get-menu-news: ` + statusText);
      return undefined;
    }

    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
