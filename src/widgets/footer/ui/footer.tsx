import { getTranslations } from 'next-intl/server';
import React from 'react';

export async function Footer() {
  const t = await getTranslations('footer');

  return (
    <footer className="mt-[60px] w-full bg-[#232A27] p-[24px] md:mt-[80px] lg:mt-[120px]">
      <p className="text-surface text-text-3 text-balance text-center">
        {t('copyright', {
          year: new Date().getFullYear(),
        })}
      </p>
    </footer>
  );
}
