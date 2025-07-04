import React from 'react';
import SearchInput from './search-input';
import HamburgerMenu from './hamburger-menu';
import Navbar from './navbar';
import { getMenu } from '../api/get-menu';

const Header = async () => {
  const headerData = await getMenu();

  // temporary solution, need to fix it later
  if (!headerData) {
    console.log('Header data is not available');
    return null;
  }

  // Extract social media links
  const socials = {
    facebook: headerData.data.customData.facebook,
    instagram: headerData.data.customData.instagram,
    twitter: headerData.data.customData.twitter,
  };

  return (
    <section>
      <article className="py-4! container flex items-center gap-[24px]">
        <SearchInput socials={socials} />
        <HamburgerMenu data={headerData?.data.menuItems} />
      </article>
      <Navbar data={headerData?.data.menuItems} />
    </section>
  );
};

export default Header;
