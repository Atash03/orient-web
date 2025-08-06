import React from 'react';
import AdvertisementImage from './advertisement-image';
import { getAdvertisements } from '../api/get-advertisements';
import { cn } from '@/shared/lib/utils';

interface Props {
    addsIndex: 1 | 2 | 3;
    intervalTime?: number;
    width?: number;
    height?: number;
    className?: string;
}

export async function Advertisement({ addsIndex, intervalTime, width, height, className }: Props) {
    const advertisements = await getAdvertisements();

    if (!advertisements) {
        console.error("Cannot load advertisements");
        return null;
    }

    return (
        <div className={cn("relative", className)}>
            <AdvertisementImage advertisements={advertisements.data[addsIndex]} intervalTime={intervalTime} width={width} height={height} />
        </div>
    )
}