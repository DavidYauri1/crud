<template>

<div>
    <h2>{{ totalDeTotales }}</h2>
    <button class="btn btn-primary" @click="showAlert" >
            click me
    </button>
</div>
</template>
<script>
export default {
 props:{
    totalDeTotales:{
        required:true,
        type:Number
    }
 },
 methods:{
    showAlert(){

        const data = 'me diste click'

        this.$emit('showMessage',data);
    }
 }
    
}
</script>
<style scoped>

h2{
    color: #43A343;
}

</style>

