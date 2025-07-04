import { axiosInstance } from '@/shared/api';
import { GetDataDTO } from '@/shared/types';

export async function getData<T>(
  endpoint: string,
  currentPage: number,
): Promise<GetDataDTO<T> | undefined> {
  try {
    const { data, status, statusText } = await axiosInstance.get(`${endpoint}`, {
      params: {
        page: currentPage,
      },
    });

    if (status !== 200) {
      console.log(status + ` getData: ` + statusText);
      return undefined;
    }

    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
