<script setup>

</script>

<template>
  <header>
    <nav>
      <router-link to="/" class="Link">Próximamente</router-link>
      <router-link to="/feed" class="Link">Try a Book!</router-link>

    </nav>
  </header>

  <body>
    <router-view></router-view>
  </body>
</template>


<style>
header {
    background-color: #AE73DB;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 25px 0 black;
    text-align: center;
    width: 100%;

}
nav
{
	margin: auto;
}
.Link {
  color: white;
  text-decoration: none;
  text-align: center;
  margin: 20px;
  padding: 30px;
}
body
{
  background-color: #C4A6DB;
  background-size: cover;
  font-family: sans-serif;
  margin-top: 20px;
  padding: 30px;
}
</style>