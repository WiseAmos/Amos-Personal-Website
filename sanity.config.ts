import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Game Master Dashboard',

  projectId: 'demo-project-id', // Placeholder, user will replace
  dataset: 'production',
  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
