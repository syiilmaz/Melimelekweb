<template>
<div>
   <b-card-group deck>
   <post 
 :post ="post"
  v-for="post in posts"  
  :key="post.id"/>
    </b-card-group >
</div>
</template>

<script>
import post from "/home/sena/melek/src/components/Post/post.vue"

export default {
    components :
    {
       post
      
    },
   props:{
      posts:
      {
         required :true ,
         type :Array,

      }
   }
}
</script>