<template>
    <div class="modal" :class="{show : showModal}" >
        <div class="modal-content" @click.stop>
        </div>
    </div>
    
</template>
<script>
    export default {
    name: "ModalEdit",
    props: {
        show:{
            type:Boolean,
            default: () => false
        },
        item:{
            type:Object|undefined,
            default: () => undefined
        }
    },
    }
</script>



<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  justify-content: center;
  align-items: center;
}

.modal.show {
  display: flex;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
  