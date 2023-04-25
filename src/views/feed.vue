<script setup>
import reader from '../components/reader.vue'
</script>

<template>
    <body>
        <reader link="https://react-reader.metabits.no/files/alice.epub"></reader>
    </body>
</template>


<style scoped>
body
{
  background-color: white;
  background-size: cover;
  font-family: sans-serif;
  margin-top: 50px;
  padding: 10px;
}
</style>