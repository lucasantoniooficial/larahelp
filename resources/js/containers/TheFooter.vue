<template>
    <CFooter :fixed="false">
        <div>
            <a href="https://github.com/lucasantoniooficial/larahelp" target="_blank">LaraHelp</a>
            <span class="ml-1">&copy; {{new Date().getFullYear()}} NameCompany.</span>
        </div>
        <div class="ml-auto">
            <span class="mr-1">Desenvolvimento</span>
            <a href="https://github.com/lucasantoniooficial/larahelp" target="_blank">LaraHelp</a>
        </div>
    </CFooter>
</template>

<script>
    export default {
        name: 'TheFooter'
    }
</script>
