export const OffcanvasData = [
    {
        id: 1,
        title: 'Home',
        path: '/',
        cName: 'offcanvas-text',
    },
    {
        id: 2,
        title: 'About',
        path: '/about',
        cName: 'offcanvas-text',
    },
    {
        id: 4,
        title: 'Services',
        path: '#',
        cName: 'offcanvas-text',
        arrowDown: 'FaAngleDown',
        submenu: [
            {
                id: 'submenu-01',
                link: '/services/marketing-services',
                text: 'Marketing Services',
                submenu: [
                    {
                        id: 'submenu-01-01',
                        link: '/services/ex-stock-sales',
                        text: 'Ex-Stock Sales',
                    },
                    {
                        id: 'submenu-01-02',
                        link: '/services/indent-sales',
                        text: 'Indent Sales',
                    },
                ],
            },
            {
                id: 'submenu-02',
                link: '/services/engineering-services',
                text: 'Engeenering Services',
            },
            {
                id: 'submenu-03',
                link: '/services/engineering-consulting',
                text: 'Engeenering Consulting',
            },
            {
                id: 'submenu-04',
                link: '/services/manufacturing-services',
                text: 'Manufacturing Services',
            },
        ],
    },
    {
        id: 5,
        title: 'Team',
        path: '/our-team',
        cName: 'offcanvas-text'
    },
    {
        id: 6,
        title: 'Contact',
        path: '/contact',
        cName: 'offcanvas-text',
    },
];
