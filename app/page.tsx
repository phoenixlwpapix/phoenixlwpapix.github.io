import Image from 'next/image';
import Link from 'next/link';
import { portfolioItems } from './data/portfolio';
import PortfolioCard from './components/PortfolioCard';

export default function Home() {
  return (
    <main>
      {/* Intro Section */}
      <section className="relative py-16 px-8 max-w-min mx-auto md:grid md:grid-cols-[min-content_max-content] md:gap-x-4 md:grid-areas-intro" id="home">
        <h1 className="text-5xl md:text-7xl font-light mb-1 md:col-start-2 md:col-end-3 md:self-start">
          <strong className="block font-black mb-1">琮琮</strong>
          の手作工坊
        </h1>
        <p className="bg-accent text-light py-1 px-4 mb-4 text-xl md:self-start md:col-start-2 md:col-end-3 md:row-start-2 md:text-right md:relative md:-left-6 md:w-[calc(100%+1.5em)] shadow-sm">
          用手心的温度，烘焙生活的甜
        </p>
        <div className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 shadow-lg relative z-10 min-w-[250px]">
          <Image
            src="/img/baking-bg-04.jpg"
            alt="baking pic"
            width={400}
            height={600}
            priority
            className="block max-w-full"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-dark text-light text-center py-16 px-8 bg-[url('/img/baking-bg-01.jpg')] bg-cover bg-blend-multiply" id="services">
        <h2 className="text-4xl md:text-6xl text-accent relative mb-8 after:content-[''] after:block after:w-12 after:h-px after:mx-auto after:mt-2 after:bg-light after:opacity-25">
          烘焙心得
        </h2>
        <div className="max-w-5xl mx-auto md:flex md:justify-center md:gap-4">
          <div className="max-w-[500px] mx-auto mb-8 md:mb-0 after:content-[''] after:block after:w-20 after:h-px after:mx-auto after:mt-8 after:bg-light after:opacity-25 md:after:hidden">
            <h3 className="text-2xl font-bold mb-4">云朵戚风</h3>
            <p className="mb-4">这不仅仅是蛋糕，更是一口云朵般的轻盈。坚持使用纯天然菜油与新鲜鸡蛋，通过精准的打发工艺，让空气与面糊完美融合。</p>
            <p>入口即化的湿润口感，搭配淡淡的蛋香，是每一个午后最温柔的慰藉。</p>
          </div>
          <div className="max-w-[500px] mx-auto mb-8 md:mb-0 after:content-[''] after:block after:w-20 after:h-px after:mx-auto after:mt-8 after:bg-light after:opacity-25 md:after:hidden">
            <h3 className="text-2xl font-bold mb-4">日式生吐司</h3>
            <p className="mb-4">摒弃繁复的配料，回归面粉本身的麦香。经过长时间低温发酵，让酵母充分呼吸，造就了如棉被般柔软的组织。</p>
            <p>无论是直接撕着吃，还是做成三明治，那份拉丝的质感与回甘，都让人欲罢不能。</p>
          </div>
          <div className="max-w-[500px] mx-auto mb-0">
            <h3 className="text-2xl font-bold mb-4">那不勒斯披萨</h3>
            <p className="mb-4">从发酵面团到烤制出炉，每一个步骤都遵循传统意式工艺。饼底薄脆而有嚼劲，边缘带着诱人的焦香。</p>
            <p>甄选马苏里拉芝士与新鲜番茄酱，一口咬下，浓郁的拉丝与丰富的配料在口中交响。</p>
          </div>
        </div>
        <Link href="#work" className="inline-block py-2 px-10 mt-12 text-light bg-accent font-bold uppercase no-underline transition-transform duration-200 hover:scale-125">
          探索美味
        </Link>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 max-w-5xl mx-auto md:grid md:grid-cols-[1fr_200px] md:gap-x-8 md:items-start" id="about">
        <h2 className="text-4xl md:text-6xl mb-1 md:col-start-1 md:col-end-2 font-black">关于我</h2>
        <p className="bg-accent text-light py-1 px-4 mb-4 text-xl md:col-start-1 md:col-end-3 md:row-start-2 md:relative md:-left-4 md:w-[calc(100%+2em)] md:pl-4 md:pr-[calc(200px+4em)]">
          步履不停，美食与爱不可辜负
        </p>

        <div className="md:col-start-1 md:col-end-2 md:row-start-3 space-y-4 text-lg">
          <p>我是一个用脚步丈量世界，用味蕾记录生活的旅人。北欧的极光、巴黎的街角、海岛的微风，都化作了我烘焙灵感的源泉。</p>
          <p>在烤箱温暖的灯光下，我将旅途中的记忆揉进面团。每一次面粉飞舞，都是一次新的出发；每一炉面包出炉，都是对生活最热烈的告白。</p>
          <p>期待与热爱生活的你，在美食的香气中相遇。</p>
        </div>

        <div className="mt-8 md:mt-0 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-4 relative z-10">
          <Image
            src="/img/liliane-01.jpg"
            alt="Liliane"
            width={300}
            height={400}
            className="shadow-lg"
          />
        </div>
      </section>

      {/* Work Section */}
      <section className="bg-dark text-light text-center py-16 px-4 md:px-12" id="work">
        <h2 className="text-4xl md:text-6xl mb-2">我的作品集</h2>
        <p className="text-accent font-bold mb-12">A selection of my favorite works</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {portfolioItems.map(item => (
            <PortfolioCard key={item.slug} item={item} />
          ))}

          <div className="flex flex-col justify-center items-center text-xl py-4 text-light">
            <p>更多美味</p>
            <p>敬请期待...</p>
          </div>
        </div>
      </section>
    </main>
  );
}
