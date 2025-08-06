interface Advertisement {
    id: number,
    title: string,
    url: string,
    group_id: number,
    media: string
}

export interface AdvertisementData {
    id: number,
    name: string,
    code: string,
    adds: Advertisement[]
}

export interface AdvertisementsResponseDTO {
    status_code: number,
    message: string,
    data: AdvertisementData[]
}