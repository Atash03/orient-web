'use client';
import { useEffect, useState, useCallback } from 'react';
import { getData } from '../api/get-data';

interface ScrollPaginationProps<T> {
  endpoint: string;
  initialData: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  threshold?: number;
  className?: string;
  renderChildren?: (length: number) => React.ReactNode;
  per_page: number;
}

export function ScrollPagination<T>({
  endpoint,
  initialData,
  renderItem,
  threshold = 200,
  className = '',
  renderChildren,
  per_page,
}: ScrollPaginationProps<T>) {
  const [data, setData] = useState<T[]>(initialData);
  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreData = useCallback(async () => {
    if (isLoadingMore || !hasMore) return;

    setIsLoadingMore(true);
    const nextPage = page + 1;
    const response = await getData<T>(endpoint, nextPage);

    if (response?.data && response.data.data.length > 0) {
      setData((prevData) => [...prevData, ...response.data.data]);
      setPage(nextPage);
      setHasMore(response.data.data.length === per_page);
    } else {
      setHasMore(false);
    }

    setIsLoadingMore(false);
  }, [endpoint, page, isLoadingMore, hasMore, per_page]);

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const isNearBottom = scrollTop + clientHeight >= scrollHeight - threshold;

    if (isNearBottom) {
      loadMoreData();
    }
  }, [loadMoreData, threshold]);

  useEffect(() => {
    if (initialData.length < per_page) {
      setHasMore(false);
      return;
    }

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll, initialData.length, per_page]);

  return (
    <div className="flex h-full w-full flex-col items-center overflow-y-auto">
      {renderChildren && renderChildren(data.length)}
      <div className={`${className} h-full w-full`}>
        {data.map((item, index) => renderItem(item, index))}
      </div>
      {isLoadingMore && (
        <div className="flex justify-center p-4">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-gray-900"></div>
        </div>
      )}
    </div>
  );
}
