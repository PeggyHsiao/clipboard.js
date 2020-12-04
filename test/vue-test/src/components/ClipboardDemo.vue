<template>
  <div>
    <input type="text" id="copy" value="這是放要被複製的文字" />
    <button ref="copyBtn" data-clipboard-target="#copy" @click="copyClick()">
      點我複製
    </button>
  </div>
</template>

<script>
import Clipboard from 'clipboard';

export default {
  name: 'clipboardDemo',
  components: {
    Clipboard,
  },
  data() {
    return {
      copyBtn: '',
    };
  },
  mounted() {
    this.copyBtn = new Clipboard(this.$refs.copyBtn);
  },
  methods: {
    copyClick() {
      this.copyBtn.on('success', (e) => {
        console.log('success');
        e.clearSelection();
      });

      this.copyBtn.on('error', (e) => {
        console.log('error');
        e.clearSelection();
      });
    },
  },
};
</script>