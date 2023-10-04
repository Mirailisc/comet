import { IEducationContent } from './types/educations'
import KMUTT from '../assets/kmutt.webp'
import NUD from '../assets/NUD.webp'

export const educationContents: IEducationContent[] = [
  {
    name: 'KMUTT (Computer Engineering)',
    location: 'Bangkok, Thailand',
    date: '2022 - Present',
    image: KMUTT,
  },
  {
    name: 'NU Secondary Demonstration School',
    location: 'Phitsanulok, Thailand',
    date: '2017 - 2022',
    image: NUD,
  },
]
