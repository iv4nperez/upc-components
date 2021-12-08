<template>
    <button :style="`background-color: ${ background }`">
        <span
            :style="`color: ${colorText};font-size:16px`"
        >{{ upperCase ? title.toUpperCase() : title }}</span>
    </button>
</template>

<script>
//comnetario
export default {
    name:'upcbutton',
    props:{
        background: {
            type: String,
            default: '#fafafa'
        },
        title: {
            type: String,
            default: ''
        },
        colorText: {
            type: String,
            default: '#000'
        },
        upperCase:{
            type: Boolean,
            default: false
        },
        only: {
            type: Boolean,
            default: false
        }
    },
    setup(){

    }
}
</script>