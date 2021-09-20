<template>
  <div class="form-todo form-group" v-on:edit-todo="EditComment">
  <p>
    <input placeholder="nome" type="text" name="author" class="form-control" v-model="name" />
  </p>
  <p>
    <textarea placeholder="Comentário" name="message"  class="form-control" v-model="message"></textarea>
  </p>
  <button v-on:click="addComment" type="submit" class="btn btn-primary">Salvar Edição</button>
  </div>
</template>

<script>
  export default {
  data() 
    {
    return {
      comments: []
    }
  },
    methods: {

       EditComment(comment) {
         console.log("ola mundo")
        this.comments.push(comment);
     
    },

    
    }
  }
</script>