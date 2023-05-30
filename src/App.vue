<script setup lang="ts">
import ScrollHighlight from "./components/ScrollHighlight"
</script>

<template>
  <div class="scroll-highlight-box">
    <ScrollHighlight />
  </div>
</template>
<style scoped>
.scroll-highlight-box {
    display: flex;
    align-items: center;
    margin-top: 50vh;
    margin-bottom: 50vh;
    min-height: 100vh;
    background-color: #0a0a0a;
}
</style>