<template>
  <main class="main">

    <section v-for="(item, id) in itemCard" :key="id">
      <CardComponent :item="item"/>
    </section>

    <div>
      <DialogComponent v-if="isShowDialog" @close="dialogVisibleFn">
        <template #content>
          <section class="main__inner">
            <h2>Добавление заметки</h2>
            <FormRenderComponent class="main__inner-form" :form="form"/>
            <div class="main__inner-button">
              <ButtonComponent :label="'Добавить'" @click="fetchAddCards"/>
            </div>
          </section>
        </template>
      </DialogComponent>
    </div>

    <div class="main__add-button">
      <AddFileComponent @click="dialogVisibleFn"/>
    </div>
  </main>
</template>

<script>
import AddFileComponent from "@/components/dialog/type/AddFileComponent.vue";
import DialogComponent from "@/components/dialog/DialogComponent.vue";
import FormRenderComponent from "@/components/forms/FormRenderComponent.vue";
import {DIALOG_ADD_NOTE} from "@/constans/dialogAddNote";
import ButtonComponent from "@/components/ButtonComponent.vue";
import {notes} from "@/api";
import {requestMapper} from "@/utils/requestMapper";
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "CardsView",
  components: {
    CardComponent,
    ButtonComponent,
    FormRenderComponent,
    DialogComponent,
    AddFileComponent
  },
  data() {
    return {
      isShowDialog: false,
      form: [],
      itemCard: []
    }
  },

  created() {
    this.form = DIALOG_ADD_NOTE;
  },

  mounted() {
    this.fetchCards()
  },


  methods: {
    dialogVisibleFn() {
      this.isShowDialog = !this.isShowDialog
    },

    async fetchCards() {
      try {
        await notes.getNotes().then(({data}) => {
          this.itemCard = data
        })
      } catch(e) {
        console.error(e)
      }
    },

    async fetchAddCards() {
      try {
        await notes.postNotes(requestMapper(this.form))
      } catch(e) {
        console.error(e)
      }
    }
  }
}
</script>


<style scoped lang="scss">

.main {
  display: flex;
  padding: 40px;
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

    &-button {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      padding-bottom: 2rem;
    }

  }

  &__add-button {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
  }
}

</style>