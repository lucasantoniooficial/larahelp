<template>
    <CRow>
        <template v-else>
            <CCol md="3" sm="6">
                <CWidgetBrand
                    color="facebook"
                    right-header="89k"
                    right-footer="friends"
                    left-header="459"
                    left-footer="feeds"
                >
                    <CIcon
                        name="cib-facebook"
                        height="56"
                        class="my-4"
                    />
                </CWidgetBrand>
            </CCol>
            <CCol md="3" sm="6">
                <CWidgetBrand
                    color="twitter"
                    right-header="973k"
                    right-footer="followers"
                    left-header="1.792"
                    left-footer="tweets"
                >
                    <CIcon
                        name="cib-twitter"
                        height="56"
                        class="my-4"
                    />
                </CWidgetBrand>
            </CCol>
            <CCol md="3" sm="6">
                <CWidgetBrand
                    color="linkedin"
                    right-header="500+"
                    right-footer="contracts"
                    left-header="292"
                    left-footer="feeds"
                >
                    <CIcon
                        name="cib-linkedin"
                        height="56"
                        class="my-4"
                    />
                </CWidgetBrand>
            </CCol>
            <CCol md="3" sm="6">
                <CWidgetBrand
                    right-header="12"
                    right-footer="events"
                    left-header="4"
                    left-footer="meetings"
                    color="warning"
                >
                    <CIcon
                        name="cil-calendar"
                        height="56"
                        class="my-4"
                    />
                </CWidgetBrand>
            </CCol>
        </template>
    </CRow>
</template>

<script>

    export default {
        name: 'WidgetsBrand',
        props: {
            noCharts: Boolean
        }
    }
</script>

<style scoped>
    .c-chart-brand {
        position: absolute;
        width: 100%;
        height: 100px;
    }
</style>
