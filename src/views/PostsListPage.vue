<template>
  <div class="posts-list">
    <PostItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue';

import posts from '@/mocks/posts';

export default {
  components: {
    PostItem
  },

  computed: {
    posts () {
      return posts;
    }
  }
}
</script>
