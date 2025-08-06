'use client';
import { cn } from '@/shared/lib/utils';
import React, { useEffect } from 'react';
import LangDropdown from './lang-dropdown';
import { MenuItem } from '../model/header-response';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

const HamburgerMenu = ({ data }: { data: MenuItem[] }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger button */}
      <button onClick={toggleMenu} className="shrink-0 space-y-[7px] overflow-hidden lg:hidden">
        <div className="relative flex gap-[2px]">
          <div
            className={cn(
              'bg-on-surface absolute top-0 size-[10px] origin-top-left rotate-45 transition-all duration-300',
              isOpen ? 'left-0' : '-left-[10px]',
            )}
          />
          <div className="space-y-[7px]">
            <div
              className={cn(
                'bg-on-surface h-[2px] transition-all duration-300',
                isOpen ? 'w-[12px] translate-x-[12px]' : 'w-[24px] translate-x-0',
              )}
            />
            <div
              className={cn(
                'bg-on-surface h-[2px] transition-all duration-300',
                isOpen ? 'w-[12px] translate-x-[12px]' : 'w-[24px] translate-x-0',
              )}
            />
          </div>
        </div>
        <div className="bg-on-surface h-[2px] w-[24px]" />
      </button>

      {/* Actual menu */}
      <div
        style={{
          top: 110,
          overflowY: 'scroll',
        }}
        className={cn(
          'z-100 text-on-surface fixed inset-0 flex flex-col gap-[24px] bg-white px-4 py-[32px] transition-all duration-300 ease-in-out md:right-0 md:w-full md:max-w-[512px] lg:hidden',
          isOpen
            ? 'translate-x-0 md:translate-x-[calc(100dvw-512px)]'
            : 'translate-x-full md:translate-x-[100dvw]',
        )}>
        {data.map((item, i) => (
          <MenuItemComponent
            menu={item}
            key={i}
            index={i}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            toggleMenu={toggleMenu}
          />
        ))}
        <hr className="bg-[#D0DDD7]" />
        <div
          className={cn(
            isOpen ? 'opacity-100' : 'opacity-0',
            'transition-all delay-150 duration-300',
          )}>
          <LangDropdown color="#141F18" />
        </div>
      </div>

      {/* Overlay for entire viewport, to close menu when click to free space */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="bg-on-surface fixed inset-0 top-[80px] hidden opacity-20 md:max-lg:block"
        />
      )}
    </>
  );
};

export default HamburgerMenu;

interface MenuItemComponentProps {
  menu: MenuItem;
  index: number;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  toggleMenu: () => void;
}

const MenuItemComponent = ({
  menu,
  activeIndex,
  index,
  setActiveIndex,
  toggleMenu,
}: MenuItemComponentProps) => {
  const [activeSubIndex, setActiveSubIndex] = React.useState<number | null>(null);
  const router = useRouter();
  const locale = useLocale();

  const handleMenuClick = () => {
    // if menu has submenus, then toggle it, and if it hasn't, then redirect to the url
    if (menu.items) {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    } else if (menu.url) {
      const url = locale === 'ru' ? menu.url : menu.viewBag.locale[locale as 'en' | 'tm'].url;
      toggleMenu();
      router.push(url);
    }
  };

  return (
    <div onClick={handleMenuClick} className="px-[24px] py-[12px]">
      <div className="flex items-center gap-[8px]">
        <span>
          {locale === 'ru' ? menu.title : menu.viewBag.locale[locale as 'en' | 'tm'].title}
        </span>
        {menu.items && (
          <div
            className={cn(
              'flex size-[20px] items-center justify-center transition-all duration-300',
              activeIndex !== index && 'rotate-180',
            )}>
            <svg
              width="8"
              height="4"
              viewBox="0 0 8 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.99984 0.333313L7.33317 3.66665H0.666504L3.99984 0.333313Z"
                fill="#141F18"
              />
            </svg>
          </div>
        )}
      </div>
      {activeIndex === index && (
        <div className="flex flex-col gap-[8px] pl-[24px] pt-[24px]">
          {menu.items?.map((item, i) => (
            <MenuItemComponent
              menu={item}
              key={i}
              index={i}
              activeIndex={activeSubIndex}
              setActiveIndex={setActiveSubIndex}
              toggleMenu={toggleMenu}
            />
          ))}
        </div>
      )}
    </div>
  );
};
