<template>
      <div>
        <Modal></Modal>
        <HelloWorld></HelloWorld>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Modal  from '@/components/Modal.vue';
import cart from '@/components/cart.vue';


export default {
  name: 'HomeViewS',
  components: {
    HelloWorld,
    Modal,
    cart
  }
}
</script>
