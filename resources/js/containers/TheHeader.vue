<template>
    <CHeader fixed with-subheader light>
        <CHeaderBrand class="mx-auto d-lg-none" to="/">
            <CIcon name="logo" height="48" alt="Logo"/>
        </CHeaderBrand>
        <CHeaderNav class="d-md-down-none mr-auto">

        </CHeaderNav>
        <CHeaderNav class="mr-4">
            <CHeaderNavItem class="d-md-down-none mx-2">
                <CHeaderNavLink>
                    <CIcon name="cil-bell"/>
                </CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem class="d-md-down-none mx-2">
                <CHeaderNavLink>
                    <CIcon name="cil-list"/>
                </CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem class="d-md-down-none mx-2">
                <CHeaderNavLink>
                    <CIcon name="cil-envelope-open"/>
                </CHeaderNavLink>
            </CHeaderNavItem>
            <TheHeaderDropdownAccnt/>
        </CHeaderNav>
    </CHeader>
</template>

<script>
    import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'
    export default {
        name: 'TheHeader',
        components: {
            TheHeaderDropdownAccnt
        }
    }
</script>
