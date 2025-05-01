import { defineConfig } from 'astro/config';
import docs from '@astrojs/starlight';

export default defineConfig({
  site: 'https://seusite.netlify.app', // Altere para o seu domínio se quiser
  integrations: [
    docs({
      sidebar: [
        { label: 'Início', link: '/' },
        { label: 'Compartilhe', link: '/docs/index' },
      ],
      title: 'Teste Social',
      description: 'Descubra quem realmente presta atenção em você',
      logo: {
        light: '/logo-light.svg',
        dark: '/logo-dark.svg'
      }
    })
  ],
});
