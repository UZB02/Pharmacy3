<template>
  <component
    :is="tagName"
    ref="editorRef"
    v-editor="{ props, emit, cacheData }"
    class="select"
  ></component>
</template>

<script>
import { defineComponent, inject, onMounted, ref } from 'vue'
import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block'
import { init } from './index'

export default defineComponent({
  directives: {
    editor: {
      mounted(el, { value }) {
        init(el, BalloonBlockEditor, value)
      }
    }
  },
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default: () => ({})
    },
    tagName: {
      type: String,
      default: 'div'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    refKey: {
      type: String,
      default: null
    }
  },
  setup(props, context) {
    const editorRef = ref()
    const cacheData = ref('')

    const bindInstance = () => {
      if (props.refKey) {
        const bind = inject(`bind[${props.refKey}]`)
        if (bind) {
          bind(editorRef.value)
        }
      }
    }

    onMounted(() => {
      bindInstance()
    })

    return {
      props,
      ...context,
      cacheData,
      editorRef
    }
  }
})
</script>
