'use client';
import { searchSvg, exit } from '@/shared/assets/svgs';
import Image from 'next/image';
import React, { useEffect, useMemo } from 'react';
import ScoialLinks from './social-links';
import { useTranslations } from 'next-intl';
import { cn } from '@/shared/lib/utils';
import { useIsDesktop } from '@/shared/lib/hooks';
import { useRouter } from '@/shared/lib/i18n/navigation';
import { debounce } from '@/shared/lib/utils';
import { OrientLogo } from '@/shared/assets/images';

interface Props {
  socials: {
    facebook: string | undefined;
    instagram: string | undefined;
    twitter: string | undefined;
  };
}

const SearchInput: React.FC<Props> = ({ socials }) => {
  const t = useTranslations('header');
  const isDesktop = useIsDesktop();
  const [isOpen, setIsOpen] = React.useState(false);
  const [text, setText] = React.useState('');
  const router = useRouter();

  // Debounced update of search param
  const updateSearchParam = useMemo(
    () =>
      debounce((...args: unknown[]) => {
        const value = (args[0] ?? '') as string;
        const url = new URL(window.location.href);
        if (value) {
          url.searchParams.set('search', value);
          router.push('/new/search' + url.search);
        } else {
          url.searchParams.delete('search');
        }
      }, 300),
    [router],
  );

  useEffect(() => {
    updateSearchParam(text);
  }, [text]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const goHome = () => {
    const url = new URL(window.location.href);
    url.searchParams.keys().forEach((key) => url.searchParams.delete(key));
    setText('');
    router.push('/' + url.search);
  };

  return (
    <div className="flex flex-1 items-center justify-between gap-[24px]">
      <div className="relative flex items-center gap-[8px]">
        <button onClick={goHome} className="cursor-pointer">
          <OrientLogo />
        </button>
        <h1
          className={cn(
            'text-tertiary-500 absolute left-[calc(100%+8px)] hidden text-nowrap text-[min(2.9vw,20px)] font-[600] leading-[28px] transition-all duration-300 sm:block lg:relative lg:left-0 lg:w-full lg:max-w-[376px] lg:text-wrap lg:text-[24px] xl:max-w-fit',
            isOpen ? 'absolute -z-10 md:max-lg:opacity-0' : 'md:max-lg:opacity-100',
          )}>
          {t('quote')}
        </h1>
      </div>
      <div className="flex flex-1 justify-end lg:gap-[24px]">
        <ScoialLinks socials={socials} />
        <div className="flex flex-1 items-center justify-end gap-[8px] lg:relative lg:flex-initial">
          <input
            type="text"
            placeholder={t('inputPlaceholder')}
            className={cn(
              'bg-surface-800 focus:outline-on-surface h-[48px] max-w-[360px] rounded-[4px] px-4 py-[8px] text-[14px] transition-all duration-300 ease-in focus:outline-1 lg:w-[360px]',
              isOpen
                ? 'relative z-10 max-lg:w-full max-lg:opacity-100'
                : 'max-lg:w-0 max-lg:opacity-0',
            )}
            maxLength={50}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={!isDesktop ? toggleMenu : () => setText('')}
            className="flex size-[48px] shrink-0 items-center justify-center lg:absolute lg:right-[12px] lg:size-[32px] lg:cursor-pointer lg:p-[9px]">
            <Image src={isOpen ? exit : searchSvg} alt={isOpen ? 'exitIcon' : 'searchIcon'} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
