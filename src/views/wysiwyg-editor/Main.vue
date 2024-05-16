<template>
  <div>
    <div class="flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">CKEditor</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <!-- BEGIN: Classic Editor -->
      <div class="col-span-12">
        <div class="box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Classic Editor</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-2"
                >Show example code</label
              >
              <input
                id="show-example-2"
                data-target="#classic-editor"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="classic-editor" class="p-5">
            <div class="preview">
              <ClassicEditor v-model="editorData" />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-classic-editor"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-classic-editor" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <ClassicEditor v-model="editorData" />
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Classic Editor -->
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const date = ref('')
    const editorData = ref('<p>Content of the editor.</p>')

    return {
      date,
      editorData
    }
  }
})
</script>
