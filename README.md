# clipboard.js
複製指定文字的內容。

## 安裝

### CDN
```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.6/clipboard.min.js"></script>
```

### NPM
```
npm install clipboard --save
```

### 在HTML使用
`data-clipboard-target`代表要複製的目標物件，可以使用`class`或`id`指定。
```htm
<input type="text" id="copy" value="這是放要被複製的文字">
<button data-clipboard-target="#copy" id="btn">點我複製</button>
```
`new`一個‵`Clipboard`就可以執行複製的功能，可以藉由`.on`來判斷成功或失敗。

另外`.clearSelection()`的作用是讓點選複製按鈕後，被複製的物件內容不會被全選。
```htm
<script>
    const clipboard = new Clipboard("#btn");

    clipboard.on('success', function (e) {
        e.clearSelection();
    });

    clipboard.on('success', function (e) {
        e.clearSelection();
    });
</script>
```

### 在vue使用
`<template>`寫法其實跟`<HTML>`很像，差別在於`vue`在取得`DOM`的資料要使用`ref`。
```vue
<template>
    <div>
        <input type="text" id="copy" value="這是放要被複製的文字">
        <button 
            ref="btn"
            data-clipboard-target="#copy"
            @click="copyClick()"
        >
            點我複製
        </button>
    </div>
</template>
```
注意的是要在`mounted`的時候才能`new Clipboard`，網頁掛載完才可以拿到`DOM`資料。
```vue
<script>
import Clipboard from 'clipboard';  // 安裝完成後，仍需要引入檔案內使用

export default {
  name: 'clipboardDemo',
  components: {
    Clipboard,
  },
  data() {
    return {
      copyBtn: '',  // 要複製的文字，預設為空字串
    };
  },
  mounted() {
    this.copyBtn = new Clipboard(this.$refs.copyBtn);  // $refs + <button>的ref name
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
```

把`data-clipboard-target`的值設定為`props`傳入的ID名稱，就可以重複利用在不同的元件上。
```vue
<template>
    <div>
        <button 
            ref="btn"
            :data-clipboard-target="inputID"
            @click="copyClick()"
        >
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
  // 隨著傳入的ID，綁定不同的input value
  props:{
      inputID: {
          type: String,
          required: true,
      }
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
```
> debug模式可以正常操作，build無法。
https://hackmd.io/@7BtvZC9iRoOYNGb3xoklzA/S1B_cTKhv