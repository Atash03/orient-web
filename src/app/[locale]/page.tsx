import { HomeBottom } from '@/widgets/home-bottom';
import { HomeMid } from '@/widgets/home-mid';
import HomeTop from '@/widgets/home-top/ui/home-top';

export default function Home() {
  return (
    <main className="space-y-[40px]">
      <HomeTop />
      <HomeMid />
      <HomeBottom />
    </main>
  );
}
