import React from 'react';
import { getMenu } from '../api/get-menu';
import MenuItemsLists from './menu-items-list';

export async function MenuItemsHeader({ menu }: { menu: string }) {
  const categories = await getMenu();

  // temporary solution, need to fix it later
  if (!categories) {
    console.log('MenuItemsHeader data is not available');
    return null;
  }

  const category = categories.data.menuItems.find(
    (item) => item.url.split('/')[item.url.split('/').length - 1] === menu,
  );

  return <MenuItemsLists menu={menu} items={category?.items ?? []} />;
}
