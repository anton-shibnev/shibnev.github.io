import { SiCodewars } from 'react-icons/si';
import { FiFacebook, FiLinkedin, FiGithub } from 'react-icons/fi';
import { HhIcon } from './components/icons';

export const MY_MAIL = 'shibnev.anton@gmail.com';

export const MAIN_DATA = {
  header: {
    list: [
      { to: '/', label: 'home' },
      { to: '/works', label: 'works' },
      // { to: '/contacts', label: 'contacts' },
      // { to: '/about', label: 'about me' },
    ],
  },
  footer: {
    arr: [
      {
        href: 'https://www.facebook.com/anton.shibnev.10',
        icon: FiFacebook,
      },
      { href: 'https://www.codewars.com/users/shibnev', icon: SiCodewars },
      {
        href: 'https://www.linkedin.com/in/антон-шибнев-634130140',
        icon: FiLinkedin,
      },
      {
        href: 'https://spb.hh.ru/resume/063ef629ff034ef45b0039ed1f344433305458',
        icon: HhIcon,
      },
      {
        href: 'https://github.com/shibnev',
        icon: FiGithub,
      },
    ],
    madeBy: 'made by Anton Shibnev',
  },
};

export const HOME_DATA = {
  hero: {
    title: 'Hi, I am Anton Shibnev, ',
    prof: 'Junior Frontend Developer',
    desc: 'my stack: HTML, (S)CSS, JS, React, Styled-Components',
    btn: {
      label: 'contact me',
      href: MY_MAIL,
    },
    avatar: {
      fileName: 'me',
    },
  },
};

export const WORKS_DATA = {
  title: '',
  list: [
    {
      title: 'memory game',
      desc: 'Just learned how to work with localStorage',
      gitHref: 'https://github.com/shibnev/pairs',
      webHref: 'https://shibnev.github.io/pairs/index.html',
      stack: ['JS', 'CSS', 'HTML'],
    },
  ],
};
