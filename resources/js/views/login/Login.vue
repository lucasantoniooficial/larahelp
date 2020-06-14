<template>
    <div class="c-app flex-row align-items-center">
        <CContainer>
            <CRow class="justify-content-center">
                <CCol md="8">
                    <CCardGroup>
                        <CCard class="p-4">
                            <CCardBody>
                                <CForm>
                                    <h1>LaraHelp</h1>
                                    <CInput
                                        v-model="auth.email"
                                        placeholder="E-mail"
                                    >
                                        <template #prepend-content><CIcon name="cil-user"/></template>
                                    </CInput>
                                    <CInput
                                        v-model="auth.password"
                                        placeholder="Senha"
                                        type="password"
                                    >
                                        <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                                    </CInput>
                                    <CRow>
                                        <CCol col="6" class="text-left">
                                            <CButton color="primary" class="px-4" @click="submit">Login</CButton>
                                        </CCol>
                                    </CRow>
                                </CForm>
                            </CCardBody>
                        </CCard>
                        <CCard
                            color="primary"
                            text-color="white"
                            class="text-center py-5 d-md-down-none"
                            body-wrapper
                        >
                            <CCardBody>
                                <h2>Sign up</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </CCardBody>
                        </CCard>
                    </CCardGroup>
                </CCol>
            </CRow>
        </CContainer>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: 'Login',
        data() {
            return {
                auth: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions('Auth', ['login']),
            submit() {
                this.login(this.auth).then(() => {
                    this.$router.push({path: '/dashboard'})
                }).catch(() => {});
            }
        }
    }
</script>
