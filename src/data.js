import { SiCodewars } from 'react-icons/si';
import { FiFacebook, FiLinkedin, FiGithub } from 'react-icons/fi';
import { HhIcon } from './components/icons';

export const MAIN_DATA = {
  header: {
    list: [
      { to: '/', label: 'about' },
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
  },
};

export const HOME_DATA = {
  hero: {
    title: 'Hi, I am Anton Shibnev, ',
    prof: 'Junior Frontend Devoloper',
    desc: 'my stack: HTML, CSS, JS, React, Styled-Components',
    btn: {
      label: 'Download Resume',
      href:
        'https://spb.hh.ru/resume_converter/%D0%A8%D0%B8%D0%B1%D0%BD%D0%B5%D0%B2%20%D0%90%D0%BD%D1%82%D0%BE%D0%BD%20%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.pdf?hash=063ef629ff034ef45b0039ed1f344433305458&type=pdf&hhtmSource=resume_view&hhtmFrom=user_resumes_list',
    },
    avatar: {
      fileName: 'me',
    },
  },
};

export const WORKS_DATA = {
  title: 'see my works',
  list: [
    {
      title: 'pairs game',
      href: 'https://shibnev.github.io/pairs/index.html'
    }
  ]
}
