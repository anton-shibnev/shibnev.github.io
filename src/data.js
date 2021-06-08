import { SiCodewars } from 'react-icons/si';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import { HhIcon } from './components/icons';

export const MY_MAIL = 'shibnev.anton@gmail.com';

export const MAIN_DATA = {
  header: {
    list: [
      { to: '/', label: 'home' },
      { to: '/works', label: 'works' },
    ],
  },
  footer: {
    arr: [
      {
        href: 'https://t.me/anton_shibnev',
        icon: FaTelegramPlane,
        title: 'Telegram',
      },
      {
        href: 'https://www.codewars.com/users/shibnev',
        icon: SiCodewars,
        title: 'codewars',
      },
      {
        href: 'https://www.linkedin.com/in/антон-шибнев-634130140',
        icon: FiLinkedin,
        title: 'LinkedIn',
      },
      {
        href: 'https://spb.hh.ru/resume/063ef629ff034ef45b0039ed1f344433305458',
        icon: HhIcon,
        title: 'Head Hunter',
      },
      {
        href: 'https://github.com/shibnev',
        icon: FiGithub,
        title: 'GitHub',
      },
    ],
    madeBy: 'made by Anton Shibnev',
  },
};

export const HOME_DATA = {
  hero: {
    preTitle: 'Hi, I am ',
    title: 'Anton Shibnev, ',
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
      desc: 'Simple game of finding pairs. Here I learned how to use the localStorage. I am planing to rewrite to react',
      gitHref: 'https://github.com/shibnev/pairs',
      webHref: 'https://shibnev.github.io/pairs/index.html',
      stack: ['JS', 'CSS', 'HTML', 'local Storage'],
    },
    {
      title: 'fab store',
      desc: 'Shoe store. I am planing to rewrite to react',
      gitHref: 'https://github.com/shibnev/shoes-store',
      webHref: 'https://shibnev.github.io/shoes-store/dist/index.html',
      stack: ['JS', 'SCSS', 'HTML', 'PUG', 'BEM'],
    },
    {
      title: 'Students Table',
      desc: 'Input form, filter and table with sort, for add new students',
      gitHref: 'https://github.com/shibnev/students-table',
      webHref: 'https://shibnev.github.io/students-table/index.html',
      stack: ['JS', 'Bootstrap', 'js class', 'local Storage'],
    },
  ],
};
