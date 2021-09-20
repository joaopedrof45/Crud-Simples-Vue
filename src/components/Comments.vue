<template>
  <div class="container">
    <h1>Comentários</h1>
    <hr />
    <FormTodo  id ="formdcad" v-on:add-todo="addComment"></FormTodo>
    <FormEdit id ="formedit" v-on:add-todo="EditForm" style="display:none"></FormEdit>
    <div class="list-group">
    <p v-if="comments.length <= 0">Sem comentários...</p>
    <div v-else class="list-group-item" v-for="(comment, index) in allComments" v-bind:key="index">
        <span class="comment__author">Autor: <strong>{{ comment.name }}</strong></span>
        <p>{{ comment.message }}</p>
        <div>
        <a href="#" title="Excluir" v-on:click.prevent="removeComment(index)">Excluir</a>
         <a href="#" title="editar" v-on:click.prevent="editarform(comment)"> &nbsp; Editar</a>
        
        </div>
    </div>
    </div>
    <hr />
  </div>
</template>

<script>
import FormEdit from './FormEdit.vue';
import FormTodo from './FormTodo';
export default {
  components: {
    FormTodo,
    FormEdit
  },
  data() 
    {
    return {
      comments: []
    }
  },
  methods: {
    addComment(comment) {
      this.comments.push(comment);
    },
    removeComment(index) {
      this.comments.splice(index, 1);
    },

      EditForm() {

    },
     editarform(comment) {
       document.getElementById("formdcad").style.display = "none";
       document.getElementById("formedit").style.display = "block";


         this.$emit('edit-todo', {
          name: comment.name,
          message: comment.message,
        });

    }
  },
  
  computed: {
    allComments() {
      return this.comments.map(comment => ({
        ...comment,
        name: comment.name.trim() === '' ? 'Anônimo' : comment.name
      }))
    }
  },
  watch: {
    comments(val) {
      console.log('val', val)
    }
  }
}
</script>