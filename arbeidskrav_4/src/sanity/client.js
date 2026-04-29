import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'DIN_PROJECT_ID',
  dataset: 'production',
  apiVersion: '2026-04-29',
  useCdn: true,
})