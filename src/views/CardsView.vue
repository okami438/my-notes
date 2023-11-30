<template>
  <main class="main">
    <DialogComponent v-if="isShowDialog" @close="dialogVisibleFn">
      <template  #content>
        <section class="main__inner">
          <h2>Добавление заметки</h2>
          <FormRenderComponent class="main__inner-form" :form="form"/>
          <div class="main__inner-button">
            <ButtonComponent :label="'Добавить'" />
          </div>
        </section>
      </template>
    </DialogComponent>
    <AddFileComponent @click="dialogVisibleFn"/>
  </main>
</template>

<script>
import AddFileComponent from "@/components/dialog/type/AddFileComponent.vue";
import DialogComponent from "@/components/dialog/DialogComponent.vue";
import FormRenderComponent from "@/components/forms/FormRenderComponent.vue";
import {DIALOG_ADD_NOTE} from "@/constans/dialogAddNote";
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: "CardsView",
  components: {
    ButtonComponent,
    FormRenderComponent,
    DialogComponent,
    AddFileComponent
  },
  data() {
    return {
      isShowDialog: false,
      form: []
    }
  },

  created() {
    this.form = DIALOG_ADD_NOTE;
  },

  methods: {
    dialogVisibleFn() {
      this.isShowDialog = !this.isShowDialog
    }
  }
}
</script>


<style scoped lang="scss">

.main {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 2rem 2rem;
  flex: 1;
  align-self: stretch;
  flex-wrap: wrap;

  &__inner {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0 3rem;

    & > h2 {
      margin-bottom: 3rem;
      width: 150px;
      color: var(--white)
    }

    &-form {
      padding-bottom: 3rem;
    }

    &-button {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      padding-bottom: 3rem;
    }

  }
}

</style>