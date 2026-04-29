import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'fdigqcb6',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: true,
    appId: 'b3d81vtr40nd1wh1waer21io',
  }
})
