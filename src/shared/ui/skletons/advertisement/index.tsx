import { Skeleton } from '@/shared/components/ui/skeleton';
import { cn } from '@/shared/lib/utils';

export function AdvertisemenSkleton({ className = 'w-full h-[100px]' }: { className?: string }) {
  return <Skeleton className={cn('rounded-md', className)} />;
}
