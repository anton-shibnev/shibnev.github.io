import { FaFacebookSquare, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiCodewars } from 'react-icons/si';
import { HhIcon } from '../components/icons';

export const MAIN_DATA = {
  footer: {
    arr: [
      {
        href: 'https://www.facebook.com/anton.shibnev.10',
        icon: FaFacebookSquare,
      },
      { href: 'https://www.codewars.com/users/shibnev', icon: SiCodewars },
      {
        href: 'https://www.linkedin.com/in/антон-шибнев-634130140',
        icon: FaLinkedin,
      },
      {
        href: 'https://spb.hh.ru/resume/063ef629ff034ef45b0039ed1f344433305458',
        icon: HhIcon,
      },
      {
        href: 'https://github.com/shibnev',
        icon: FaGithub,
      },
    ],
  },
};
