import { Skeleton } from '@/shared/components/ui/skeleton'
import { cn } from '@/shared/lib/utils'
import React from 'react'

export function PostCardSkleton({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                'flex min-h-[370px] w-full flex-col gap-[8px] md:grid md:min-h-[275px] md:grid-cols-3 lg:grid-cols-2',
                className,
            )}>
            <Skeleton className="relative w-full flex-1 overflow-hidden rounded-[4px]" />
            <div className="flex flex-col gap-4 md:col-span-2 md:justify-between lg:col-span-3">
                <Skeleton className="w-[100px] h-[25px] rounded-[4px]" />

                <Skeleton className="w-full h-[30%] rounded-[4px]" />

                <Skeleton className="w-[40%] h-[25px] rounded-[4px]" />
            </div>
        </div>
    )
}