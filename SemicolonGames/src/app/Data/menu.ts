export const ModulesList = [{
    label: 'menuNews',
    routerLink: '/news/',
    children: []
}, {
    label: 'menuGames',
    routerLink: '/games/',
    children: [{
        label: 'Ice Runners',
        routerLink: '/games/',
    }]
}, {
    label: 'menuAbout',
    routerLink: '/about/',
    children: [{
        label: 'menuTeam',
        routerLink: '/about/',
        children: [
            {
                label: 'menuProgrammers',
                routerLink: '/about/'
            },
            {
                label: 'menuArtists',
                routerLink: '/about/'
            }
        ]
    }
    ]
}, {
    label: 'menuContact',
    routerLink: '/contact/',
    children: []
}];