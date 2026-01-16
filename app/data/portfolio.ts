export interface PortfolioItem {
  slug: string;
  title: string;
  subtitle?: string;
  coverImage: string;
  content: { type: 'text' | 'image'; value: string }[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'toast',
    title: '黄金手撕吐司',
    subtitle: '会呼吸的面包',
    coverImage: '/img/toast-cover.jpg',
    content: [
      { type: 'text', value: '完美的吐司，是有生命的。它应该拥有云朵般的拉丝感，轻按回弹，切开时没有多余的碎屑。' },
      { type: 'image', value: '/img/toast-03.jpg' },
      { type: 'text', value: '我也曾迷信牛奶才能带来醇厚口感，但无数次尝试后发现，合适的水温与揉面力度，更能激发面粉本真纯粹的麦香。' },
      { type: 'image', value: '/img/toast-02.jpg' },
      { type: 'text', value: '一款好吃的吐司，是那种让人不知不觉就能空口吃完一整条的魔力。' }
    ]
  },
  {
    slug: 'chocolate-toast',
    title: '浓情巧克力吐司',
    subtitle: '三重黑巧的诱惑',
    coverImage: '/img/chocolate-toast-cover.jpg',
    content: [
      { type: 'text', value: '选用比利时进口黑巧克力，揉入柔软的面团中。每一口都能咬到爆浆的巧克力豆，苦甜交织，浓郁而不腻，是治愈心情的最佳良药。' }
    ]
  },
  {
    slug: 'chiffon',
    title: '云朵戚风蛋糕',
    subtitle: '轻盈如风的温柔',
    coverImage: '/img/chiffon-01.jpg',
    content: [
      { type: 'text', value: '打发至湿性发泡的蛋白霜，混入细腻的面糊。出炉后的戚风，拥有如云朵般轻盈的空气感，入口即化，只留下一抹淡淡的蛋奶香。' }
    ]
  },
  {
    slug: 'pizza',
    title: '意式田园披萨',
    subtitle: '满满芝士的拉丝盛宴',
    coverImage: '/img/pizza-02.jpg',
    content: [
      { type: 'text', value: '自制慢发酵饼底，铺满浓郁的番茄罗勒酱，撒上厚厚的马苏里拉芝士与新鲜时蔬。高温烘烤下，饼边酥脆，芝士拉丝，每一口都是满足。' }
    ]
  },
  {
    slug: 'chocolate-pudding',
    title: '丝滑巧克力布丁',
    subtitle: '午后的一勺甜蜜',
    coverImage: '/img/chocolate-pudding-01.png',
    content: [
      { type: 'text', value: '低温慢蒸，锁住巧克力的浓郁与牛奶的鲜甜。入口如丝绸般顺滑，微苦的回甘在舌尖久久不散。' }
    ]
  },
  {
    slug: 'cookie',
    title: '珍妮风味曲奇',
    subtitle: '酥到掉渣的美味',
    coverImage: '/img/cookie-01.jpg',
    content: [
      { type: 'text', value: '严选发酵黄油，不加一滴水。独特的挤花工艺，造就了极致酥松的口感。轻轻一抿，奶香瞬间在口中绽放。' }
    ]
  },
  {
    slug: 'quatre-quarts',
    title: '经典磅蛋糕',
    subtitle: '时光沉淀的味道',
    coverImage: '/img/quatre-quarts-01.jpg',
    content: [
      { type: 'text', value: '传统的四分之一配方，扎实而湿润。经过几天的回油，风味更加醇厚融合。搭配一杯红茶，便是最完美的下午茶时光。' }
    ]
  },
];
