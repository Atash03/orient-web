import { axiosInstance } from '@/shared/api';
import { AdvertisementsResponseDTO } from '../model/advertisement';

export const getAdvertisements = async (): Promise<AdvertisementsResponseDTO | undefined> => {
  try {
    const { data, status, statusText } = await axiosInstance.get(`/api/adds`);

    if (status !== 200) {
      console.log(status + ` get-advertisements: ` + statusText);
      return undefined;
    }

    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
