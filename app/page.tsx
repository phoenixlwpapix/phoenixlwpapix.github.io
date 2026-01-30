'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioItems } from './data/portfolio';
import { ChefHat, Sparkles, Heart, ArrowRight } from 'lucide-react';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="relative">
      {/* Hero Section - Full Screen with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="home">
        {/* Parallax Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
          <Image
            src="/img/baking-bg-04.jpg"
            alt="温馨的烘焙背景"
            fill
            className="object-cover opacity-20 dark:opacity-30 scale-105"
            priority
          />
        </div>

        {/* Decorative Floating Icons */}
        <div className="absolute top-32 left-10 animate-float opacity-20 pointer-events-none" aria-hidden="true">
          <ChefHat size={80} className="text-accent" />
        </div>
        <div className="absolute bottom-32 right-10 animate-float opacity-20 pointer-events-none" aria-hidden="true" style={{ animationDelay: '1s' }}>
          <Sparkles size={60} className="text-accent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-20">
          <div className="mb-8 scroll-reveal">
            <h1 className="text-7xl md:text-9xl font-black mb-4 text-accent">
              琮琮
            </h1>
            <p className="text-3xl md:text-5xl font-light text-slate-700 dark:text-slate-200 mb-6">
              の手作工坊
            </p>
          </div>

          <p className="scroll-reveal text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
            用手心的温度，烘焙生活的甜
          </p>

          <div className="scroll-reveal flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.4s' }}>
            <Link
              href="#work"
              className="group relative px-8 py-4 bg-accent text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl focus:ring-4 focus:ring-accent/50 focus:outline-none"
              aria-label="探索美味作品"
            >
              <span className="relative z-10 flex items-center gap-2">
                探索美味
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="#about"
              className="px-8 py-4 border-2 border-accent text-accent rounded-full font-bold text-lg transition-all duration-300 hover:bg-accent hover:text-white focus:ring-4 focus:ring-accent/50 focus:outline-none"
              aria-label="了解更多关于琮琮"
            >
              了解更多
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-accent rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Grid - Modern Cards */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-white to-orange-50/30 dark:from-slate-900 dark:to-slate-800/50" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20 scroll-reveal">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white">
              烘焙心得
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full" aria-hidden="true" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: '🍰',
                title: '云朵戚风',
                description: '这不仅仅是蛋糕，更是一口云朵般的轻盈。坚持使用纯天然菜油与新鲜鸡蛋，通过精准的打发工艺，让空气与面糊完美融合。',
                gradient: 'from-orange-100 to-pink-100',
              },
              {
                icon: '🍞',
                title: '日式生吐司',
                description: '摒弃繁复的配料，回归面粉本身的麦香。经过长时间低温发酵，让酵母充分呼吸，造就了如棉被般柔软的组织。',
                gradient: 'from-amber-100 to-yellow-100',
              },
              {
                icon: '🍕',
                title: '那不勒斯披萨',
                description: '从发酵面团到烤制出炉，每一个步骤都遵循传统意式工艺。饼底薄脆而有嚼劲，边缘带着诱人的焦香。',
                gradient: 'from-red-100 to-orange-100',
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className="scroll-reveal group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`relative h-full bg-gradient-to-br ${item.gradient} dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl border border-white/50 dark:border-slate-600`}>
                  {/* Icon - Decorative only */}
                  <div className="text-6xl md:text-7xl mb-6 transform transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                    {item.description}
                  </p>

                  {/* Subtle Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Asymmetric Layout */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-white dark:bg-slate-900" id="about">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #ff7e1a 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Image Side */}
            <div className="scroll-reveal relative order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-pink-500/20 dark:from-accent/30 dark:to-pink-500/30 rounded-3xl rotate-3" aria-hidden="true" />
                <Image
                  src="/img/liliane-01.jpg"
                  alt="琮琮在烘焙工作室"
                  width={600}
                  height={800}
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 glass-dark rounded-2xl p-6 text-white shadow-xl" aria-label="专注烘焙5年以上">
                <div className="flex items-center gap-3">
                  <Heart size={32} className="text-accent fill-accent" aria-hidden="true" />
                  <div>
                    <div className="text-sm opacity-80">专注烘焙</div>
                    <div className="text-2xl font-bold">5+ 年</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="scroll-reveal order-1 md:order-2" style={{ animationDelay: '0.2s' }}>
              <div className="inline-block px-4 py-2 bg-accent/10 dark:bg-accent/20 text-accent rounded-full text-sm font-bold mb-6">
                ABOUT ME
              </div>

              <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white">
                关于我
              </h2>

              <div className="h-1 w-16 bg-accent mb-8 rounded-full" aria-hidden="true" />

              <p className="text-xl md:text-2xl font-light text-accent dark:text-orange-400 mb-8">
                步履不停，美食与爱不可辜负
              </p>

              <div className="space-y-6 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  我是一个用脚步丈量世界，用味蕾记录生活的旅人。北欧的极光、巴黎的街角、海岛的微风，都化作了我烘焙灵感的源泉。
                </p>
                <p>
                  在烤箱温暖的灯光下，我将旅途中的记忆揉进面团。每一次面粉飞舞，都是一次新的出发；每一炉面包出炉，都是对生活最热烈的告白。
                </p>
                <p className="text-accent dark:text-orange-400 font-medium text-lg">
                  期待与热爱生活的你，在美食的香气中相遇。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Image Grid */}
      <section className="py-24 md:py-32 px-6 bg-dark relative overflow-hidden" id="work">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-accent via-transparent to-pink-500 animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-20 scroll-reveal">
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">
              我的作品集
            </h2>
            <p className="text-accent text-lg md:text-xl font-light">
              A selection of my favorite works
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="scroll-reveal group relative overflow-hidden rounded-2xl aspect-square cursor-pointer focus:ring-4 focus:ring-accent focus:outline-none"
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-label={`查看${item.title}详情`}
              >
                {/* Image */}
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {item.title}
                  </h3>
                  <p className="text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                    {item.subtitle}
                  </p>
                </div>

                {/* Accent Border */}
                <div className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" aria-hidden="true" />
              </Link>
            ))}

            {/* More Coming Soon Card */}
            <div
              className="scroll-reveal relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-accent/20 to-pink-500/20 flex flex-col items-center justify-center border border-accent/30"
              style={{ animationDelay: `${portfolioItems.length * 0.1}s` }}
              role="status"
              aria-label="更多美味作品敬请期待"
            >
              <Sparkles size={48} className="text-accent mb-4 animate-pulse" aria-hidden="true" />
              <p className="text-white text-xl md:text-2xl font-bold mb-2">更多美味</p>
              <p className="text-accent">敬请期待...</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Glass Effect */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 parallax-bg" style={{ backgroundImage: 'url(/img/baking-bg-01.jpg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-accent/80 to-pink-500/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center scroll-reveal">
          <div className="glass-dark rounded-3xl p-8 md:p-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              开启你的美味之旅
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
              每一次烘焙，都是一场与时间、温度的对话。<br />
              让我们一起，用心感受食物带来的幸福。
            </p>
            <Link
              href="#work"
              className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-white text-accent rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl focus:ring-4 focus:ring-white/50 focus:outline-none"
              aria-label="查看更多烘焙作品"
            >
              查看更多作品
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
