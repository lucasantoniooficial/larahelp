<template>
    <div>
        <CCardGroup class="mb-4">
            <CWidgetProgressIcon
                header="87.500"
                text="Atendentes"
                color="dark"
            >
                <CIcon name="cil-people" height="36"/>
            </CWidgetProgressIcon>
            <CWidgetProgressIcon
                header="385"
                text="Clientes"
                color="info"
            >
                <CIcon name="cil-userFollow" height="36"/>
            </CWidgetProgressIcon>
            <CWidgetProgressIcon
                header="1238"
                text="Chamados"
                color="primary"
            >
                <CIcon name="cil-basket" height="36"/>
            </CWidgetProgressIcon>
            <CWidgetProgressIcon
                header="1138"
                text="Chamados abertos"
                color="warning"
            >
                <CIcon name="cil-chartPie" height="36"/>
            </CWidgetProgressIcon>
            <CWidgetProgressIcon
                header="100"
                text="Chamados fechados"
                color="success"
            >
                <CIcon name="cil-speedometer" height="36"/>
            </CWidgetProgressIcon>
        </CCardGroup>
    </div>
</template>

<script>
    import WidgetsBrand from './WidgetBrand'
    import WidgetsDropdown from './WidgetDropdown'
    export default {
        name: 'Widgets',
        components: {
            WidgetsBrand,
            WidgetsDropdown
        }
    }
</script>
