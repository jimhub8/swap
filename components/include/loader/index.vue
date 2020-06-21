<template>
<v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="px-3 pt-3 pb-12">
    <v-container>
        <v-boilerplate type="image, card, article"></v-boilerplate>
        </v-col>
    </v-container>
</v-sheet>
</template>



<script>
export default {
    // Vuetify components provide
    // a theme variable that is
    // used to determine dark
    inject: ['theme'],

    components: {
        // Create a new component that
        // extends v-skeleton-loader
        VBoilerplate: {
            functional: true,

            render(h, {
                data,
                props,
                children
            }) {
                return h('v-skeleton-loader', {
                    ...data,
                    props: {
                        boilerplate: true,
                        elevation: 2,
                        ...props,
                    },
                }, children)
            },
        },
    },
}
</script>
