<script setup></script>

<template>
  <NSpace vertical class="app">
    <NInput type="textarea" v-model:value="inputText"
            show-count
            round
            :autosize="{minRows:15,maxRows:25}"
            maxlength="102400"
            autofocus
            placeholder="随意输入文字"></NInput>
  </NSpace>
</template>

<script>
import {NInput, NSpace} from "naive-ui";
import {ref} from "vue";

export default {
  components: {NSpace, NInput},
  setup() {
    const inputText = ref('')

    return {
      inputText
    }
  },
}
</script>
<style scoped>
.app {
  padding: 10px;
}
</style>
