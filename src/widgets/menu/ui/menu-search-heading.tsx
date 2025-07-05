import { getTranslations } from 'next-intl/server';
import React from 'react';

export async function MenuSearchHeading({ search }: { search: string }) {
  const t = await getTranslations('search');

  return (
    <header className="w-full">
      <h1 className="text-on-surface text-heading-4 lg:text-[32px]">{t('header', { search })}</h1>
    </header>
  );
}
