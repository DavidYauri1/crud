<template>
  <div>
    <div class="modal" :class="{ show: showModal }" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h2>Registrar</h2>
        <div class="d-flex justify-content-center align-items-center">
          <div class="row mx-auto w-60">
            <ValidationObserver
              ref="formObserver"
              v-slot="{ passes }"
              v-bind:vid="'formClient'"
            >
              <form @submit.prevent="passes(validateFormFields)">
                <div class="row">
                  <div class="col-4 mb-3">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="firts_name"
                      rules="required"
                    >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First Name"
                        v-model="form.name"
                        :class="errors[0] ? 'is-invalid' : null"
                      />
                    </ValidationProvider>
                  </div>
                  <div class="col-3 mb-3">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="dbo"
                      rules="required"
                    >
                      <input
                        type="date"
                        class="form-control"
                        v-model="form.dbo"
                        :class="errors[0] ? 'is-invalid' : null"
                      />
                    </ValidationProvider>
                  </div>
                  <div class="col-4 mb-3">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="phone"
                      rules="required"
                    >
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Phone"
                        v-model="form.phone"
                        :class="errors[0] ? 'is-invalid' : null"
                      />
                    </ValidationProvider>
                  </div>
                  <div class="col-4 mb-3">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="email"
                      rules="required|email"
                    >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Email"
                        v-model="form.email"
                        :class="errors[0] ? 'is-invalid' : null"
                      />
                    </ValidationProvider>
                  </div>
                  <div class="col-3 mb-3">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="address"
                      rules="required"
                    >
                      <input
                        type="address"
                        class="form-control"
                        placeholder="Address"
                        v-model="form.address"
                        :class="errors[0] ? 'is-invalid' : null"
                      />
                    </ValidationProvider>
                  </div>
                  <div class="col-12 text-rigth">
                    <button
                      class="btn btn-primary float-rihgt"
                      @click="addINput"
                      :disabled="isDisableBtn"
                    >
                      +
                    </button>
                  </div>
                  <div v-for="(input, index) in form.payments" :key="index">
                    <div class="row">
                      <div class="col-4 mb-3">
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="amount"
                          rules="min_value:1"
                        >
                          <money
                            class="form-control"
                            v-bind="money"
                            v-model="input.amount"
                            :class="errors[0] ? 'is-invalid' : null"
                          ></money>

                        </ValidationProvider>
                      </div>
                      <div class="col-4 mb-3">
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="transaction_id"
                          rules="required"
                        >
                          <input
                            type="number"
                            class="form-control"
                            v-model="input.transaction_id"
                            placeholder="transaction_id"
                            :class="errors[0] ? 'is-invalid' : null"
                          />
                        </ValidationProvider>
                      </div>

                      <div class="col-3 mb-3">
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="start"
                          rules="required"
                        >
                          <input
                            type="date"
                            class="form-control"
                            v-model="input.start_date"
                            placeholder="date"
                            :class="errors[0] ? 'is-invalid' : null"
                          />
                        </ValidationProvider>
                      </div>

                      <div class="col-1 mb-3">
                        <button
                          class="btn btn-danger"
                          @click="deleteINput(index)"
                          :disabled="inputDefault"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                  <button type="submit">Registrar</button>
                </div>
              </form>
            </ValidationObserver>

            <p v-if="error">Error</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
export default {
  name: "Modal",
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
  data() {
    return {
      showModal: false,
      error: false,
      message: "",
      form: {
        id: 0,
        name: "",
        dbo: "",
        phone: "",
        email: "",
        address: "",
        payments: [
          {
            amount: "",
            transaction_id: "",
            start_date: "",
          },
        ],
      },
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "$ ",
        suffix: "",
        precision: 2,
        masked: false,
      },
    };
  },
  watch: {
    show(value){
      this.showModal = value
    }
  },
  computed: {
    isDisableBtn() {
      return this.datapaymentslength() >= 5 ? true : false;
    },
    inputDefault() {
      return this.datapaymentslength() === 1 ? true : false;
    },
  },
  methods: {
    closeModal() {
      this.$emit('update:show',false)
      this.showModal = false;
      this.form = {
        id: 0,
        name: "",
        dbo: "",
        phone: "",
        email: "",
        address: "",
        payments: [
          {
            amount: "",
            transaction_id: "",
            start_date: "",
          },
        ],   
      }
      this.$refs.formObserver.reset()
    },
    setMessage(message) {
      return (this.message = message);
    },
    datapaymentslength() {
      return this.form.payments.length;
    },
    async validateFormFields() {
      try {
        console.log(this.form);
        const { data } = await axios.post(
          "http://127.0.0.1:8000/api/clients/create",
          this.form
        );

          this.$emit('reloadClient')
          this.closeModal()
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    addINput() {
      this.form.payments.push({ value: "" });
    },
    deleteINput(index) {
      this.form.payments.splice(index, 1);
    },
    async registerClient() {
      console.log(this.form);
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/clients/create",
        this.form
      );
      console.log(data);
    },
  },
};
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
  