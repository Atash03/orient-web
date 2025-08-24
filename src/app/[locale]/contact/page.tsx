import { ContactForm } from '@/features/contact-form';
import { getTranslations } from 'next-intl/server';

export default async function ContactPage() {
  const t = await getTranslations('contact');

  return (
    <main className="py-8 sm:py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-center gap-4 sm:mb-12">
          <h1 className="text-2xl font-semibold text-[#181D17] sm:text-3xl">{t('title')}</h1>
          <div className="h-px flex-1 bg-[#039F37]"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form Section */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Information Section */}
          <div className="space-y-8 rounded-lg border border-[#E4E9DD] bg-[#EBEFE6] p-4 sm:p-6">
            <div>
              <h2 className="mb-2 text-lg font-semibold text-[#181D17] sm:text-xl">
                {t('contactInfoTitle')}
              </h2>
              <p className="text-sm text-[#424940] sm:text-base">{t('contactInfoDescription')}</p>
            </div>

            <div className="grid gap-[10px] md:grid-cols-2">
              {/* Office Address */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-[#181D17] sm:text-xl">
                  {t('officeAddressTitle')}
                </h3>
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-6 w-6 flex-shrink-0 text-[#39693B]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 19C9.65 17.2667 7.896 15.5833 6.738 13.95C5.58 12.3167 5.00067 10.7167 5 9.15C5 7.06667 5.65 5.35433 6.95 4.013C8.25 2.67167 9.93333 2.00067 12 2C14.0667 1.99933 15.75 2.67033 17.05 4.013C18.35 5.35567 19 7.068 19 9.15C19 10.7167 18.421 12.3167 17.263 13.95C16.105 15.5833 14.3507 17.2667 12 19ZM12 11C12.55 11 13.021 10.8043 13.413 10.413C13.805 10.0217 14.0007 9.55067 14 9C13.9993 8.44933 13.8037 7.97867 13.413 7.588C13.0223 7.19733 12.5513 7.00133 12 7C11.4487 6.99867 10.978 7.19467 10.588 7.588C10.198 7.98133 10.002 8.452 10 9C9.998 9.548 10.194 10.019 10.588 10.413C10.982 10.807 11.4527 11.0027 12 11ZM5 22V20H19V22H5Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="text-sm text-[#424940] sm:text-base">{t('officeAddress')}</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-[#181D17] sm:text-xl">
                  {t('workingHoursTitle')}
                </h3>
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-6 w-6 flex-shrink-0 text-[#39693B]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.55 16.55L15.95 15.125L13 12.175V8H11V13L14.55 16.55ZM11 6H13V4H11V6ZM18 13H20V11H18V13ZM11 20H13V18H11V20ZM4 13H6V11H4V13ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="text-sm text-[#424940] sm:text-base">{t('workingHours')}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-[10px] md:grid-cols-2">
              {/* Editorial Contacts */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-[#181D17] sm:text-xl">
                  {t('editorialContactsTitle')}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-6 w-6 flex-shrink-0 text-[#39693B]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2 20V4H22V20H2ZM12 13L20 8V6L12 11L4 6V8L12 13Z"
                        fill="currentColor"
                      />
                    </svg>
                    <div>
                      <h4 className="text-sm font-medium text-[#181D17] sm:text-base">
                        {t('editorialEmailTitle')}
                      </h4>
                      <p className="text-sm text-[#424940] sm:text-base">{t('editorialEmail')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-6 w-6 flex-shrink-0 text-[#39693B]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10 20H14V19H10V20ZM5 23V1H19V23H5ZM7 16H17V6H7V16Z"
                        fill="currentColor"
                      />
                    </svg>
                    <div>
                      <h4 className="text-sm font-medium text-[#181D17] sm:text-base">
                        {t('editorialPhoneTitle')}
                      </h4>
                      <p className="text-sm text-[#424940] sm:text-base">{t('editorialPhone')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Administration Contacts */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-[#181D17] sm:text-xl">
                  {t('administrationContactsTitle')}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-6 w-6 flex-shrink-0 text-[#39693B]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2 20V4H22V20H2ZM12 13L20 8V6L12 11L4 6V8L12 13Z"
                        fill="currentColor"
                      />
                    </svg>
                    <div>
                      <h4 className="text-sm font-medium text-[#181D17] sm:text-base">
                        {t('administrationEmailTitle')}
                      </h4>
                      <p className="text-sm text-[#424940] sm:text-base">
                        {t('administrationEmail')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-6 w-6 flex-shrink-0 text-[#39693B]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10 20H14V19H10V20ZM5 23V1H19V23H5ZM7 16H17V6H7V16Z"
                        fill="currentColor"
                      />
                    </svg>
                    <div>
                      <h4 className="text-sm font-medium text-[#181D17] sm:text-base">
                        {t('administrationPhoneTitle')}
                      </h4>
                      <p className="text-sm text-[#424940] sm:text-base">
                        {t('administrationPhone')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
