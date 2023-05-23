<template>
    <div class="about">
        <div class="row"> 
            <div v-for="(input,index) in inputs" :key="index">
                <input type="text" class="form-control" v-model="input.value">
            </div>
            <div>
                <button class="btn btn-primary" @click="addINput"></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputs : [ { value:''}]
            }
        },

        methods:{
            addINput() {
                this.inputs.push( { value:''})
            }
        }
    }
</script>