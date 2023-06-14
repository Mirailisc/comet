export interface IProjectContent {
  name: string
  status: ProjectStatus
  url?: string
  repo?: string
  image?: string
}

export enum ProjectStatus {
  ONGOING = 'Ongoing',
  STOPPED = 'Stopped',
}
