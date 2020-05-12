export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '5ebaa6145401a76aa8a10adf',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-aff118rh',
                  apiId: '7096626a-1d0b-4f4f-8ec6-62220ee81f29'
                },
                {
                  buildHookId: '5ebaa6161787f221edcc357d',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-ykqz6vno',
                  apiId: '95364a24-3a1f-4045-84c6-9996de2ffe66'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/apoly-admin/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-ykqz6vno.netlify.app', category: 'apps'}
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
