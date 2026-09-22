// Central asset map + placeholder content (swap freely later).
const IMG = '/images/'

export const assets = {
  heroSplash:  IMG + 'hero-splash.png',
  beanSpoon:   IMG + 'bean-spoon.png',
  hand:        IMG + 'hand.png',
  showcaseCup: IMG + 'showcase-cup.png',
  menu: {
    coffee: IMG + 'menu-coffee.png',
    matcha: IMG + 'menu-matcha.png',
    latte:  IMG + 'menu-latte.png',
  },
}

export const info = {
  name: 'Rahma Roasters',
  tagline: 'Better beans, brighter days.',
  address: '27121 Towne Centre Dr., Lake Forest, CA 92610',
  hours: 'Open daily · 8 AM – 9 PM',
  instagram: 'https://instagram.com/rahmaroasters',
  instagramHandle: '@rahmaroasters',
  order: 'https://rahmaroasters.com',
  est: 'Est. 2024',
}

export const menu = [
  {
    name: 'Signature Roast',
    tag: 'Hot',
    desc: 'Our house espresso, pulled rich and smooth — the everyday classic.',
    price: '$4.50',
    img: assets.menu.coffee,
    rating: '4.9',
    big: true,
  },
  {
    name: 'Iced Einspänner',
    tag: 'Iced',
    desc: 'Cold espresso under hand-whipped cream, dusted with cocoa.',
    price: '$5.50',
    img: assets.menu.latte,
    rating: '5.0',
  },
  {
    name: 'Matcha Einspänner',
    tag: 'Iced',
    desc: 'Ceremonial matcha, silky cream and a whisper of sweetness.',
    price: '$5.50',
    img: assets.menu.matcha,
    rating: '4.8',
  },
]

export const perks = [
  { n: '01', title: 'Premium Bean Quality', body: 'We select only the finest beans and pay attention to every detail, so each cup delivers exceptional flavour.' },
  { n: '02', title: 'Roasted in Small Batches', body: 'Fresh, deliberate roasting brings out the character of every origin — never rushed, never bulk.' },
  { n: '03', title: 'A Personalised Approach', body: 'We craft coffee around your taste, so every visit becomes its own memorable occasion.' },
  { n: '04', title: 'Professional Baristas', body: 'Our team brings real craft to the bar, demonstrating the art of coffee with every pour.' },
]
