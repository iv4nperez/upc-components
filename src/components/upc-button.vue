<template>
    <button :style="`background-color: ${ background }`">
        <span
            :style="`color: ${colorText}`"
        >{{ title }}</span>
    </button>
</template>

<script>
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
        }
    },
    setup(){

    }
}
</script>