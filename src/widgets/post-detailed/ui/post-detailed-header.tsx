import React from 'react';
import { PostDetailed } from '../model/get-post-info-response-dto';
import { constructDate } from '@/shared/lib/utils';
import { getTranslations } from 'next-intl/server';

interface Props {
  post: PostDetailed;
}

async function PostDetailedHeader({ post }: Props) {
  const { fullDate, time } = constructDate(post.published_at);
  const t = await getTranslations('newsCard');

  return (
    <header className="flex flex-col gap-4">
      <h1 className="text-heading-5 text-on-surface md:text-[28px]">{post.title}</h1>
      <div className="flex items-center justify-between">
        <div className="text-text-4 flex items-center gap-[8px] text-[#4A5A4F]">
          <span>{fullDate}</span>
          <span className="text-[#C0CFC7]">|</span>
          <span>{time}</span>
          <span className="text-[#C0CFC7]">|</span>
          <div className="flex items-center gap-[4px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.00016 1.33301C11.6822 1.33301 14.6668 4.31767 14.6668 7.99967C14.6668 11.6817 11.6822 14.6663 8.00016 14.6663C4.31816 14.6663 1.3335 11.6817 1.3335 7.99967C1.3335 4.31767 4.31816 1.33301 8.00016 1.33301ZM8.00016 2.66634C6.58567 2.66634 5.22912 3.22824 4.22893 4.22844C3.22873 5.22863 2.66683 6.58519 2.66683 7.99967C2.66683 9.41416 3.22873 10.7707 4.22893 11.7709C5.22912 12.7711 6.58567 13.333 8.00016 13.333C9.41465 13.333 10.7712 12.7711 11.7714 11.7709C12.7716 10.7707 13.3335 9.41416 13.3335 7.99967C13.3335 6.58519 12.7716 5.22863 11.7714 4.22844C10.7712 3.22824 9.41465 2.66634 8.00016 2.66634ZM8.00016 4.66634C8.70189 4.66661 9.38563 4.88832 9.95398 5.2999C10.5223 5.71148 10.9463 6.29192 11.1655 6.95854C11.3846 7.62516 11.3879 8.34394 11.1746 9.01249C10.9614 9.68104 10.5427 10.2652 9.97801 10.6819C9.41336 11.0985 8.73162 11.3263 8.02993 11.3329C7.32824 11.3394 6.64238 11.1243 6.07007 10.7183C5.49776 10.3122 5.06819 9.7359 4.84257 9.07144C4.61694 8.40698 4.60677 7.68826 4.8135 7.01767C4.96944 7.36615 5.24035 7.65049 5.58087 7.82312C5.92139 7.99574 6.31087 8.04618 6.68413 7.96598C7.05739 7.88578 7.39178 7.67982 7.63134 7.38256C7.87091 7.0853 8.00111 6.71478 8.00016 6.33301C8.00025 6.01199 7.90763 5.69777 7.73342 5.42812C7.55922 5.15848 7.31085 4.94488 7.01816 4.81301C7.33634 4.71537 7.66734 4.66593 8.00016 4.66634Z"
                fill="#4A5A4F"
              />
            </svg>
            <span>{post.views}</span>
          </div>
        </div>
        {post.author && (
          <div className="text-text-3 flex items-center gap-[8px] text-[#4A5A4F]">
            <span>
              {t('author')}: {post.author}
            </span>
          </div>
        )}
      </div>
    </header>
  );
}

export default PostDetailedHeader;
