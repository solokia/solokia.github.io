<template>
  <div class="row q-pa-md justify-evenly text-overline text-weight-bold dark">
    <div class="q-pa-lg">
      <a href="/">Solomon</a>
    </div>
    <div class="q-pa-lg content-end row">
      <router-link to="/about" class="q-mx-md">About</router-link>
      <router-link to="/project" class="q-mx-md">Projects</router-link>
    </div>
  </div>
</template>
  
<script>
export default {};
</script>
  
  <style lang="scss" scoped>
a {
  text-decoration: none;
  padding: 0;
  text-transform: uppercase;
  font-weight: 500;
  color: inherit;
  font-family: Arial, Helvetica, sans-serif; // not very good at choosing fonts
}

// .router-link-exact-active {
//   background: yellow;
//   border-radius: 5px;
//   color: red;
//   font-style: italic;
// }
</style>