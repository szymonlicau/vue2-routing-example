<template>
  <div class="post-page">
    <h1>
      {{ post.title }}
    </h1>

    <p>
      {{ post.description }}
    </p>
  </div>
</template>

<script>
import posts from '@/mocks/posts';

export default {
  props: {
    postId: {
      type: Number,
      required: true
    }
  },

  computed: {
    post () {
      return posts.find(p => p.id === this.postId);
    }
  },

  mounted () {
    // if post does not exist
    if (!this.post) {
      this.$router.replace({ name: 'Home' });
    }
  }
}
</script>
