<template>
    <label>{{ text }}</label>
</template>
<script>
export default {
    props:{
        text: {
            type: String,
            default: ''
        }
    },
    setup(){

    }
}
</script>