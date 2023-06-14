import { IProjectContent, ProjectStatus } from './types/project'
import project1 from '../assets/project/project-1.webp'
import project2 from '../assets/project/project-2.webp'
import project3 from '../assets/project/project-3.webp'
import project4 from '../assets/project/project-4.webp'
import project5 from '../assets/project/project-5.webp'
import project6 from '../assets/project/project-6.webp'

export const Projects: IProjectContent[] = [
  {
    name: 'Project 1',
    status: ProjectStatus.ONGOING,
    image: project1,
    url: 'https://digits.mirailisc.me',
  },
  {
    name: 'Project Comet',
    status: ProjectStatus.ONGOING,
    image: project3,
    url: 'https://mirailisc.me',
    repo: 'https://github.com/Mirailisc/project-comet',
  },
  {
    name: 'Yotsuba Bot',
    status: ProjectStatus.ONGOING,
    image: project5,
    repo: 'https://github.com/Mirailisc/Yotsuba',
  },
  {
    name: 'Obamium',
    status: ProjectStatus.ONGOING,
    image: project6,
    url: 'https://obamium.netlify.app/',
    repo: 'https://github.com/Mirailisc/test-three-js-react',
  },
  {
    name: 'Mirai',
    status: ProjectStatus.STOPPED,
    image: project4,
    repo: 'https://github.com/Mirailisc/Mirai',
  },
  {
    name: 'react-arduino-firebase',
    status: ProjectStatus.STOPPED,
    image: project2,
    repo: 'https://github.com/Mirailisc/react-arduino-firebase',
  },
  {
    name: 'React Native Todo list',
    status: ProjectStatus.STOPPED,
    repo: 'https://github.com/Mirailisc/mira-react-native-expo',
  },
  {
    name: 'Arduino Compose Machine',
    status: ProjectStatus.STOPPED,
    repo: 'https://github.com/Mirailisc/arduino-compose-machine',
  },
  {
    name: 'Genshin Voice Control',
    status: ProjectStatus.STOPPED,
    repo: 'https://github.com/Mirailisc/genshin-voice-control',
  },
  {
    name: 'Genshin Hand Gesture Control',
    status: ProjectStatus.STOPPED,
    repo: 'https://github.com/Mirailisc/genshin-hand-gesture-control',
  },
  {
    name: 'Quandale Dingle',
    status: ProjectStatus.STOPPED,
    repo: 'https://github.com/Mirailisc/quandale-dingle',
  },
]
