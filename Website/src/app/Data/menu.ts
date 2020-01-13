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
        children: []
    }]
}, {
    label: 'menuAbout',
    routerLink: '/about/',
    children: [/*{
        label: 'menuTeam',
        routerLink: '/about/',
        children: [
            {
                label: 'menuProgrammers',
                routerLink: '/about/',
                fragment: 'programmers'
            },
            {
                label: 'menuArtists',
                routerLink: '/about/',
                fragment: 'artists'
            }
        ]
    }*/
    ]
}, {
    label: 'menuContact',
    routerLink: '/contact/',
    children: []
}];