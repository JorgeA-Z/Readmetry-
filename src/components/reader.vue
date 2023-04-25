<script setup>
  import ePub from 'epubjs';
  
  const props = defineProps(['link'])

  
  var book = ePub(props.link);

  var rendition = book.renderTo("area", { 
    flow: "paginated", width: "1000", height: "600", allowScriptedContent: true
  });
  
  
  var displayed = rendition.display();
  
  const next = () =>
  {
    rendition.next();
    console.log("Next")
  }; 

  
  const prev = () =>
  {
    rendition.prev();
    
  };
</script>
<template>

  <button @click="prev">
    <img src="../Images/AB.png" alt="Logo">
  </button>

  <button @click="next">
    <img src="../Images/AF.png" alt="Logo">
  </button>

  <div id="frame" class="container">
    <div class="square">
      <div id="area"></div>
    </div>

  </div>


  



</template>

<style scoped>
button
{
  border-radius: 12px;
  background-color: white;
  text-decoration: none;
  border: none;
  color: black;
  border: 2px solid #C4A6DB; /* Green */
}
.container
{
  display: grid;
  gap: 10px;
  padding: 10px;
}
.square
{
  padding: 20px;
  font-size: 30px;
  text-align: center;
  min-height: 300px; /* ajusta la altura de cada cuadrado */
}

@media screen and (max-width: 800px) {
  #frame {
    display: flex;
    flex-direction: column;
  }
  button,
  img,
  .square {
    width: 100%;
    margin: 0 auto;
    padding: 10px;
  }
  #area {
    margin: 0 auto;
    width: 100%;
    height: 400px; /* ajusta la altura del area de lectura */
  }
}
</style>