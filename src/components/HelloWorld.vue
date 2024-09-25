<template>
  <div>
    <button v-if="authState && authState.isAuthenticated" @click="logout">Logout</button>
    <button v-else @click="login">Login</button>
</div>
</template>

<script>
  export default {
    name: 'home',
    methods: {
      async login () {
        await this.$auth.signInWithRedirect({ originalUri: '/' })
      },
      async logout () {
        await this.$auth.signOut()
      }
    }
  }
</script>
