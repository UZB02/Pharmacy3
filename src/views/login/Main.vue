<template>
  <div>
    <DarkModeSwitcher />
    <div class="container overflow-hidden sm:px-10 ">
      <div class="block xl:grid grid-cols-2 gap-4">
        <!-- BEGIN: Login Info -->
        <div class="hidden xl:flex flex-col min-h-screen">
          <a href="" class="-intro-x flex items-center pt-5">
            <img alt="Icewall Tailwind HTML Admin Template" class="w-6"
              src="https://avatars.mds.yandex.net/i?id=63e0f20ba6f13207e41e5809721f79e7571a89bb-9211188-images-thumbs&n=13" />
            <span class="logNo text-white text-lg ml-3">
              Pharmacy
            </span>
          </a>
          <div class="my-auto">
            <img alt="Icewall Tailwind HTML Admin Template" class="-intro-x w-1/2 -mt-16"
              src="https://avatars.mds.yandex.net/i?id=d55f8fd9ed9c13cb1aa51d994625cff5b273ff8f-9683096-images-thumbs&n=13" />
            <div class="-intro-x text-white font-medium text-4xl leading-tight mt-10">
              A few more clicks to <br /> sign in to your account.
            </div>
            <div class="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-gray-500">
              Manage all your e-commerce accounts in one place
            </div>
          </div>
        </div>
        <!-- END: Login Info -->
        <!-- BEGIN: Login Form -->
        <div class="h-screen overflow-hidden  xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0 bg-red">
          <div
            class="my-auto mx-auto xl:ml-20 bg-white dark:bg-dark-1 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
            <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
              Sign In
            </h2>
            <form @submit.prevent="login">
              <div class="intro-x forspan mt-8">
                <input type="text" class="intro-x login__input form-control py-3 px-4 border-gray-300 block"
                  placeholder="Foydalanuvchi nomi" autofocus v-model="username" required />
                <span class="text-theme-6 block">{{ error }}</span>
                <input type="password" class="intro-x login__input form-control py-3 px-4 border-gray-300 block mt-4"
                  placeholder="Parol" v-model="password" required />
              </div>

              <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                <button class="btn btn-primary py-3 px-4 w-full xl:w-70 xl:mr-3 align-top" type="submit"
                  :disabled="loading">
                  <span v-if="loading"
                    class="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center text-white">
                    <div role="status">
                      <svg aria-hidden="true" style="fill: black;"
                        class="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor" />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill" />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  </span>
                  <span v-else>Login</span>
                </button>
              </div>
            </form>
            <div class="intro-x mt-10 xl:mt-24 text-gray-700 dark:text-gray-600 text-center xl:text-left">
              By signing up, you agree to our <br />
              <a class="text-theme-1 dark:text-theme-10" href="">Terms and Conditions</a>
              &
              <a class="text-theme-1 dark:text-theme-10" href="">Privacy Policy</a>
            </div>
          </div>
          <div class="bg-white absolute right-0 top-0 bottom-0 w-1/2 -my-20 " style="border-radius: 50%; z-index: -1;">

          </div>
        </div>
        <!-- END: Login Form -->
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios'
import router from '@/router'
import { onMounted, ref } from 'vue'

const username = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const h2AutoClick = () => {
  const h2Element = document.querySelector('h2')
  if (h2Element) {
    h2Element.click()
  }
}
onMounted(() => {
  cash('body')
    .removeClass('main')
    .removeClass('error-page')
    .addClass('login')
  h2AutoClick()
})

const login = async () => {
  try {
    loading.value = true // Ishni boshlashni belgilash
    error.value = ''

    const response = await axios.post('https://pharmacy.educlub.uz/api/login', {
      username: username.value,
      password: password.value
    })
    const token = response.data.result.token // Tokenni olish
    localStorage.setItem('token', token)
    // Yana navigatsiyaga o'tish uchun
    router.push('/dashboard-overview-1')
  } catch (err) {
    console.log(err.response.data.errors.message)
    // Xato bo'lganda xatni saqlash
    error.value = err.response.data.errors.message
  } finally {
    loading.value = false // Ishni yakunlashni belgilash
  }
}
</script>
<style></style>
