<template>
    <CDropdown
        inNav
        class="c-header-nav-items"
        placement="bottom-end"
        add-menu-classes="pt-0"
    >
        <template #toggler>
            <CHeaderNavLink>
                <div class="c-avatar">
                    <img
                        src="/img/7.jpg"
                        class="c-avatar-img "
                    />
                </div>
            </CHeaderNavLink>
        </template>
<!--        <CDropdownHeader tag="div" class="text-center" color="light">-->
<!--            <strong>Account</strong>-->
<!--        </CDropdownHeader>-->
<!--        <CDropdownItem>-->
<!--            <CIcon name="cil-bell"/> Updates-->
<!--            <CBadge color="info" class="ml-auto">{{ itemsCount }}</CBadge>-->
<!--        </CDropdownItem>-->
<!--        <CDropdownItem>-->
<!--            <CIcon name="cil-envelope-open" /> Messages-->
<!--            <CBadge color="success" class="ml-auto">{{ itemsCount }}</CBadge>-->
<!--        </CDropdownItem>-->
<!--        <CDropdownItem>-->
<!--            <CIcon name="cil-task" /> Tasks-->
<!--            <CBadge color="danger" class="ml-auto">{{ itemsCount }}</CBadge>-->
<!--        </CDropdownItem>-->
<!--        <CDropdownItem>-->
<!--            <CIcon name="cil-comment-square" /> Comments-->
<!--            <CBadge color="warning" class="ml-auto">{{ itemsCount }}</CBadge>-->
<!--        </CDropdownItem>-->
        <CDropdownHeader
            tag="div"
            class="text-center"
            color="light"
        >
        </CDropdownHeader>
        <CDropdownItem>
            <CIcon name="cil-user" /> Perfil
        </CDropdownItem>
        <CDropdownItem>
            <CIcon name="cil-settings" /> Configurações
        </CDropdownItem>
        <CDropdownItem>
            <CIcon name="cil-lock-locked" /> Sair
        </CDropdownItem>
    </CDropdown>
</template>

<script>
    export default {
        name: 'TheHeaderDropdownAccnt',
        data () {
            return {
                itemsCount: 42
            }
        }
    }
</script>

<style scoped>
    .c-icon {
        margin-right: 0.3rem;
    }
</style>
