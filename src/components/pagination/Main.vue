<template>
    <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
        <ul class="pagination">
            <li>
                <span class="pagination__link" @click="goToPage(1)">
                    <ChevronsLeftIcon class="w-4 h-4" />
                </span>
            </li>
            <li class="disabled">
                <span class="pagination__link" @click="goToPage(currentPage - 1)">
                    <ChevronLeftIcon class="w-4 h-4" />
                </span>
            </li>
            <li>
                <span class="pagination__link" v-if="currentPage > 3">...</span>
            </li>
            <li v-for="page in totalPages" :key="page">
                <span class="pagination__link" :class="{ 'pagination__link--active': page === currentPage }"
                    @click="goToPage(page)">
                    {{ page }}
                </span>
            </li>
            <li>
                <span class="pagination__link" v-if="currentPage < totalPages">...</span>
            </li>
            <li>
                <span class="pagination__link" @click="goToPage(currentPage + 1)">
                    <ChevronRightIcon class="w-4 h-4" />
                </span>
            </li>
            <li>
                <span class="pagination__link" @click="goToPage(totalPages)">
                    <ChevronsRightIcon class="w-4 h-4" />
                </span>
            </li>
        </ul>
        <select class="w-20 form-select box mt-3 sm:mt-0" v-model="currentPage" @change="goToPage(currentPage)">
            <option v-for="page in totalPages" :key="page">{{ page }}</option>
        </select>
    </div>
</template>
<script setup>
/* eslint-disable */
const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value && page != currentPage.value) {
        // totalPages.value = res.data.result?.data
        currentPage.value = page
        axios.get('http://pharm-api.kdevs.uz/api/products', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            params: {
                page: currentPage.value
            }
        }).then(res => {
            data.value = res.data.result?.data
            totalPages.value = res.data.result?.last_page
        })
    }
}
</script>