<script setup lang="ts">
import ScrollHighlight from "./components/ScrollHighlight"

const textList: Array<string> = [
  '这个常伴你左右的好伙伴，超有能耐。',
  '体温感应功能，帮女性洞察自身的健康；',
  '车祸检测待命，紧急时刻主动呼叫救援；',
  '睡眠阶段跟测，让你更了解自己的睡眠',
  '还有进阶的体能训练 app，为锻炼加分。',
  '就让一个更健康的未来，更漂亮地开始吧。',
]
</script>

<template>
  <div class="scroll-highlight-box">
    <ScrollHighlight :list="textList" />
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