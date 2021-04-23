export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6082ed566d911173ca83951b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ud36s16n',
                  apiId: 'bfd7203c-bcd2-4cdc-b4de-ab43472a96ac'
                },
                {
                  buildHookId: '6082ed56582bc15c8a8f02fd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-va1i7oez',
                  apiId: 'f4955550-89d4-44ba-958b-cf2dfac06e00'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AskAlice/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-va1i7oez.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
