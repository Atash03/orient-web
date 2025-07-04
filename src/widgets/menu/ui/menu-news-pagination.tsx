'use client';
import React from 'react';
import { useRouter, usePathname } from '@/shared/lib/i18n/navigation';
import { useSearchParams } from 'next/navigation';

interface Props {
  total_page: number;
}

export function MenuNewsPagination({ total_page }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // If page param is missing or invalid, default to 1
  const pageParam = searchParams.get('page');
  const curPage =
    pageParam && !isNaN(Number(pageParam)) && Number(pageParam) > 0 ? Number(pageParam) : 1;

  // Helper to update the page in search params
  const goToPage = (p: number) => {
    const url = new URL(window.location.href);
    if (p === 1) {
      url.searchParams.delete('page');
    } else {
      url.searchParams.set('page', p.toString());
    }
    router.push(pathname + url.search);
  };

  // Calculate page numbers to display
  let pages: (number | string)[] = [];
  if (total_page <= 7) {
    pages = Array.from({ length: total_page }, (_, i) => i + 1);
  } else if (curPage <= 4) {
    pages = [1, 2, 3, 4, 5, '...', total_page];
  } else if (curPage >= total_page - 3) {
    pages = [1, '...', total_page - 4, total_page - 3, total_page - 2, total_page - 1, total_page];
  } else {
    pages = [1, '...', curPage - 1, curPage, curPage + 1, '...', total_page];
  }

  return (
    <div className="*:text-text-3 flex items-center gap-[5px]">
      <button
        className="lg:hover:bg-on-surface/10 flex size-[32px] rotate-180 cursor-pointer items-center justify-center rounded-full transition-all duration-300 disabled:opacity-50"
        onClick={() => goToPage(curPage - 1)}
        disabled={curPage === 1}
        aria-label="Previous page">
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.17202 4.99979L0.343018 2.17279L1.75802 0.758789L6.00002 4.99979L1.75802 9.24179L0.343018 7.82779L3.17202 4.99979Z"
            fill="#141F18"
          />
        </svg>
      </button>
      {pages.map((p, idx) =>
        typeof p === 'number' ? (
          <button
            key={p}
            className={`flex cursor-pointer items-center justify-center rounded-full px-2.5 py-1 transition-all duration-300 ${curPage === p ? 'bg-[#1A211E] text-white' : 'text-on-surface lg:hover:bg-on-surface/10 bg-transparent'}`}
            onClick={() => goToPage(p)}
            disabled={curPage === p}>
            {p}
          </button>
        ) : (
          <span key={`ellipsis-${idx}`} className="px-2 py-1">
            ...
          </span>
        ),
      )}
      <button
        className="lg:hover:bg-on-surface/10 flex size-[32px] cursor-pointer items-center justify-center rounded-full transition-all duration-300 disabled:opacity-50"
        onClick={() => goToPage(curPage + 1)}
        disabled={curPage === total_page}
        aria-label="Next page">
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.17202 4.99979L0.343018 2.17279L1.75802 0.758789L6.00002 4.99979L1.75802 9.24179L0.343018 7.82779L3.17202 4.99979Z"
            fill="#141F18"
          />
        </svg>
      </button>
    </div>
  );
}
