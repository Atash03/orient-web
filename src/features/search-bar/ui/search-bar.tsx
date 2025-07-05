'use client';
import { searchSvg } from '@/shared/assets/svgs';
import { cn } from '@/shared/lib/utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState, useMemo, useEffect } from 'react';
import { debounce } from '@/shared/lib/utils';
import { useRouter, usePathname } from '@/shared/lib/i18n/navigation';
import { useSearchParams } from 'next/navigation';

interface Props {
  label?: string;
  className?: string;
}

export function SearchBar({ label, className }: Props) {
  const t = useTranslations('header');
  const searchParams = useSearchParams();
  const searchValue = searchParams.get('search') || '';
  const [text, setText] = useState(searchValue);
  const router = useRouter();
  const pathname = usePathname();

  // Debounced update of search param
  const updateSearchParam = useMemo(
    () =>
      debounce((...args: unknown[]) => {
        const value = (args[0] ?? '') as string;
        const url = new URL(window.location.href);
        if (value) {
          url.searchParams.set('search', value);
        } else {
          url.searchParams.delete('search');
        }
        router.push(pathname + url.search);
      }, 300),
    [router, pathname],
  );

  useEffect(() => {
    updateSearchParam(text);
  }, [text, updateSearchParam]);

  return (
    <div className={cn('flex items-center gap-[8px]', className)}>
      {label && <span className="text-on-surface w-fit">{label}</span>}
      <div className="bg-surface-800 flex flex-1 items-center gap-[4px] rounded-[4px] px-4 py-[8px]">
        <input
          type="text"
          placeholder={t('inputPlaceholder')}
          className={cn('flex-1 py-[6px] text-[14px] focus:outline-none')}
          maxLength={50}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="flex size-[24px] shrink-0 items-center justify-center lg:cursor-pointer">
          <Image src={searchSvg} alt={'searchIcon'} />
        </button>
      </div>
    </div>
  );
}
