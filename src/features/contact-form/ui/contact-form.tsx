'use client';

import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm() {
  const t = useTranslations('contact');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    // Reset form after successful submission
    reset();
  };

  return (
    <div className="w-full max-w-full rounded-lg border border-[#E4E9DD] bg-[#EBEFE6] p-4 sm:p-6">
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-semibold text-[#181D17] sm:text-xl">{t('formTitle')}</h3>
        <p className="text-sm text-[#424940] sm:text-base">{t('formDescription')}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-[#181D17]">
              {t('nameLabel')} <span className="text-red-500">*</span>
            </label>
            <input
              {...register('name', { required: t('nameRequired') })}
              type="text"
              id="name"
              placeholder={t('namePlaceholder')}
              className="w-full rounded-md border border-[#7A7A7A] bg-white px-4 py-3 text-base placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#00822C]"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-[#181D17]">
              {t('emailLabel')} <span className="text-red-500">*</span>
            </label>
            <input
              {...register('email', {
                required: t('emailRequired'),
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: t('emailInvalid'),
                },
              })}
              type="email"
              id="email"
              placeholder={t('emailPlaceholder')}
              className="w-full rounded-md border border-[#7A7A7A] bg-white px-4 py-3 text-base placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#00822C]"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-[#181D17]">
            {t('messageLabel')}
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={4}
            placeholder={t('messagePlaceholder')}
            className="w-full resize-none rounded-md border border-[#7A7A7A] bg-white px-4 py-3 text-base placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#00822C]"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full cursor-pointer rounded-md bg-[#00822C] px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-[#218838] disabled:cursor-not-allowed disabled:opacity-50">
          {isSubmitting ? t('submitting') : t('submitButton')}
        </button>
      </form>
    </div>
  );
}
