export default [
    {
        _name: 'CSidebarNav',
        _children: [
            {
                _name: 'CSidebarNavTitle',
                _children: ['Principal']
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Home',
                to: '/dashboard',
                icon: 'cil-speedometer',
                // badge: {
                //     color: 'primary',
                //     text: 'NEW'
                // }
            },
            {
                _name: 'CSidebarNavTitle',
                _children: ['Atendimento']
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Chamados',
                to: '/dashboard/chamados',
                icon: 'cil-life-ring',
                // badge: {
                //     color: 'primary',
                //     text: 'NEW'
                // }
            },
            {
                _name: 'CSidebarNavTitle',
                _children: ['Administração']
            },
            {
                _name: 'CSidebarNavDropdown',
                name: 'Usuários',
                icon: 'cil-people',
                items: [
                    {
                        name: 'Cadastrar usuário',
                        to: '/dashboard/usuarios/cadastrar'
                    },
                    {
                        name: 'Exibir usuários',
                        to: '/dashboard/usuarios'
                    },
                ]
            },
            {
                _name: 'CSidebarNavDropdown',
                name: 'Clientes',
                icon: 'cil-people',
                items: [
                    {
                        name: 'Cadastrar usuário',
                        to: '/dashboard/clientes/cadastrar'
                    },
                    {
                        name: 'Exibir usuários',
                        to: '/dashboard/clientes'
                    },
                ]
            },

        ]
    }
]
