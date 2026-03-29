import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'fdigqcb6',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-03-28',
})
