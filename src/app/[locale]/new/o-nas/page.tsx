import { getTranslations } from 'next-intl/server';

const textStyle = "text-xl leading-[38px] font-normal text-[#242424] mb-5";

export default async function AboutPage() {
  const t = await getTranslations('about');

  return (
    <main className="mt-20 mb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-[#242424] mb-5">
          {t('title')}
        </h1>

        <p className={textStyle}>
          {t('subtitle')}
        </p>

        <p className={textStyle}>
          {t('description')}
        </p>

        <p className={textStyle}>
          {t('teamDescription')}
        </p>

        <p className={textStyle}>
          {t('partnership2018')}
        </p>

        <p className={textStyle}>
          {t('partnership2019')}
        </p>

        <p className={textStyle}>
          {t('chinaDaily')}
        </p>

        <p className={textStyle}>
          {t('austriaAgreement')}
        </p>

        <p className={textStyle}>
          {t('russiaAgreement')}
        </p>

        <p className="text-xl leading-[38px] font-normal text-[#242424]">
          {t('socialMedia')}
        </p>
      </div>
    </main>
  );
}
