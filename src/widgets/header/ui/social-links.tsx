import { facebook, instagram, twitter } from '@/shared/assets/svgs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  socials: {
    facebook: string | undefined;
    instagram: string | undefined;
    twitter: string | undefined;
  };
}

const ScoialLinks: React.FC<Props> = ({ socials }) => {
  return (
    <div className="hidden items-center gap-[24px] lg:flex">
      <Link
        href={socials.facebook ? socials.facebook : ''}
        target="_blank"
        className="flex size-[32px] items-center justify-center">
        <Image src={facebook} alt="facebook" />
      </Link>
      <Link
        href={socials.instagram ? socials.instagram : ''}
        target="_blank"
        className="flex size-[32px] items-center justify-center">
        <Image src={instagram} alt="instagram" />
      </Link>{' '}
      <Link
        href={socials.twitter ? socials.twitter : ''}
        target="_blank"
        className="flex size-[32px] items-center justify-center">
        <Image src={twitter} alt="twitter" />
      </Link>
    </div>
  );
};

export default ScoialLinks;
