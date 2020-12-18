<template>
  <div style="margin: 50px;">
    <input type="text" v-model="inputVal">
    <button id="btn" 
      v-clipboard="inputVal" 
      style="margin-left: 6px;"
    >
      複製
    </button>

    <div style="margin-top: 10px;">
      <textarea placeholder="這裡放要貼上的文字"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "Clipboard",
  data() {
    return {
      inputVal: "",
    };
  },
};
</script>
