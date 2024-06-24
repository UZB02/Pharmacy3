<template>
  <div>
    <!-- BEGIN: ADD Modal Content -->
    <div
      id="header-footer-modal-preview"
      class="modal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <form
          class="modal-content"
          typeof="submut"
          @submit.prevent="addNewProducts()"
        >
          <!-- BEGIN: Modal Body -->
          <div class="modal-body grid grid-cols-12 gap-4 gap-y-3">
            <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-1" class="form-label">{{
                $t('product')
              }}</label>
              <input
                id="modal-form-1"
                v-model="typeInputValue.name"
                type="text"
                class="form-control"
                :placeholder="$t('product')"
              />
              <span class="text-primary-3 text-xs">{{
                errorInputValue.name
              }}</span>
            </div>
            <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-2" class="form-label">{{
                $t('type')
              }}</label>
              <input
                id="modal-form-2"
                type="text"
                v-model="typeInputValue.type"
                class="form-control"
                :placeholder="$t('type')"
              />
            </div>
            <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-3" class="form-label">{{
                $t('package_type')
              }}</label>
              <input
                id="modal-form-3"
                type="text"
                v-model="typeInputValue.package_type"
                class="form-control"
                :placeholder="$t('package_type')"
              />
            </div>
            <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-3" class="form-label">{{
                $t('category')
              }}</label>
              <select
                v-model="typeInputValue.category_id"
                id="countries"
                class="bg-gray-50 border form-control border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option
                  v-for="(item, index) in categories"
                  :value="item.id"
                  :key="index"
                  class="cursor-pointer"
                >
                  {{ item?.name }}
                </option>
              </select>
            </div>
            <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-4" class="form-label">{{
                $t('selling_price')
              }}</label>
              <input
                id="modal-form-4"
                type="number"
                min="0"
                class="form-control"
                v-model="typeInputValue.price"
                :placeholder="$t('selling_price')"
              />
            </div>
            <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-4" class="form-label">{{
                $t('original_price')
              }}</label>
              <input
                id="modal-form-4"
                type="number"
                min="0"
                v-model="typeInputValue.initial_price"
                class="form-control"
                :placeholder="$t('original_price')"
              />
            </div>
            <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-5" class="form-label">{{
                $t('amount')
              }}</label>
              <input
                id="modal-form-5"
                type="number"
                min="0"
                v-model="typeInputValue.count"
                class="form-control"
                :placeholder="$t('amount')"
              />
              <span class="text-primary-3 text-xs">{{
                errorInputValue.amount
              }}</span>
            </div>
            <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-5" class="form-label">{{
                $t('barcode')
              }}</label>
              <input
                id="modal-form-5"
                type="text"
                v-model="typeInputValue.barcode"
                class="form-control"
                :placeholder="$t('barcode')"
              />
              <span class="text-primary-3 text-xs">{{
                errorInputValue.barcode
              }}</span>
            </div>
            <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-4" class="form-label">{{
                $t('manufactured_date')
              }}</label>
              <input
                id="modal-form-4"
                type="date"
                v-model="typeInputValue.manufactured_date"
                class="form-control"
                :placeholder="$t('manufactured_date')"
              />
            </div>
            <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-4" class="form-label">{{
                $t('expired_date')
              }}</label>
              <input
                id="modal-form-4"
                type="date"
                v-model="typeInputValue.expired_date"
                class="form-control"
                :placeholder="$t('expired_date')"
              />
              <span class="text-primary-3 text-xs">{{
                errorInputValue.expired_date
              }}</span>
            </div>
            <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-6" class="form-label">{{
                $t('manufacturer')
              }}</label>
              <input
                id="modal-form-4"
                type="text"
                v-model="typeInputValue.manufacturer"
                class="form-control"
                :placeholder="$t('manufacturer')"
              />
            </div>
          </div>
          <!-- END: Modal Body -->
          <!-- BEGIN: Modal Footer -->
          <div class="modal-footer text-right">
            <button
              data-dismiss="modal"
              id="add_close_modal"
              type="button"
              class="btn btn-outline-secondary w-28 mr-1"
            >
              {{ $t('cancel') }}
            </button>
            <button class="btn btn-primary w-20" type="submit">
              <span
                v-if="loading"
                class="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center text-white"
              >
                <div role="status">
                  <svg
                    aria-hidden="true"
                    style="fill: black;"
                    class="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              </span>
              <span v-else>{{ $t('add') }}</span>
            </button>
          </div>
          <!-- END: Modal Footer -->
        </form>
      </div>
    </div>
    <!-- END: ADD Modal Content -->
    <!-- BEGIN: Edit Modal Content -->
    <!-- BEGIN: Modal Content -->
    <div
      id="delete-modal-preview"
      class="modal"
      v-if="EditModalOpend"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-0">
            <form
              class="modal-content"
              typeof="submut"
              @submit.prevent="editProducts()"
            >
              <!-- BEGIN: Modal Body -->
              <div class="modal-body grid grid-cols-12 gap-4 gap-y-3">
                <div class="col-span-12 sm:col-span-6">
                  <label for="modal-form-1" class="form-label">{{
                    $t('product')
                  }}</label>
                  <input
                    id="modal-form-1"
                    v-model="editInputValue.name"
                    type="text"
                    class="form-control"
                    :placeholder="$t('product')"
                  />
                  <span class="text-primary-3 text-xs">{{
                    errorEditInputValue.name
                  }}</span>
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <label for="modal-form-2" class="form-label">{{
                    $t('type')
                  }}</label>
                  <input
                    id="modal-form-2"
                    type="text"
                    v-model="editInputValue.type"
                    class="form-control"
                    :placeholder="$t('type')"
                  />
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <label for="modal-form-3" class="form-label">{{
                    $t('package_type')
                  }}</label>
                  <input
                    id="modal-form-3"
                    type="text"
                    v-model="editInputValue.package_type"
                    class="form-control"
                    :placeholder="$t('package_type')"
                  />
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <label for="modal-form-3" class="form-label">{{
                    $t('category')
                  }}</label>
                  <select
                    v-model="editInputValue.category_id"
                    id="countries"
                    class="bg-gray-50 border form-control border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option
                      v-for="(item, index) in categories"
                      :value="item.id"
                      :key="index"
                    >
                      {{ item?.name }}
                    </option>
                  </select>
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <label for="modal-form-4" class="form-label">{{
                    $t('selling_price')
                  }}</label>
                  <input
                    id="modal-form-4"
                    type="number"
                    min="0"
                    class="form-control"
                    v-model="editInputValue.price"
                    :placeholder="$t('selling_price')"
                  />
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <label for="modal-form-4" class="form-label">{{
                    $t('original_price')
                  }}</label>
                  <input
                    id="modal-form-4"
                    type="number"
                    min="0"
                    v-model="editInputValue.initial_price"
                    class="form-control"
                    :placeholder="$t('original_price')"
                  />
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <label for="modal-form-5" class="form-label">{{
                    $t('amount')
                  }}</label>
                  <input
                    id="modal-form-5"
                    type="number"
                    min="0"
                    v-model="editInputValue.count"
                    class="form-control"
                    :placeholder="$t('amount')"
                  />
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <label for="modal-form-5" class="form-label">{{
                    $t('barcode')
                  }}</label>
                  <input
                    disabled
                    id="modal-form-5"
                    type="text"
                    v-model="editInputValue.barcode"
                    class="form-control"
                    :placeholder="$t('barcode')"
                  />
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <label for="modal-form-4" class="form-label">{{
                    $t('manufactured_date')
                  }}</label>
                  <input
                    id="modal-form-4"
                    disabled
                    type="date"
                    v-model="editInputValue.manufactured_date"
                    class="form-control"
                    :placeholder="$t('manufactured_date')"
                  />
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <label for="modal-form-4" class="form-label">{{
                    $t('expired_date')
                  }}</label>
                  <input
                    disabled
                    id="modal-form-4"
                    type="date"
                    v-model="editInputValue.expired_date"
                    class="form-control"
                    :placeholder="$t('expired_date')"
                  />
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <label for="modal-form-6" class="form-label">{{
                    $t('manufacturer')
                  }}</label>
                  <input
                    id="modal-form-4"
                    type="text"
                    v-model="editInputValue.manufacturer"
                    class="form-control"
                    :placeholder="$t('manufacturer')"
                  />
                </div>
              </div>
              <!-- END: Modal Body -->
              <!-- BEGIN: Modal Footer -->
              <div class="modal-footer text-right">
                <button
                  data-dismiss="modal"
                  id="close-modal"
                  type="button"
                  class="btn btn-outline-secondary w-28 mr-1"
                >
                  {{ $t('cancel') }}
                </button>
                <button class="btn btn-primary w-28" type="submit">
                  <span
                    v-if="loading"
                    class="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center text-white"
                  >
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        style="fill: black;"
                        class="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                    </div>
                  </span>
                  <span v-else>{{ $t('edit') }}</span>
                </button>
              </div>
              <!-- END: Modal Footer -->
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Modal Content -->
    <!-- END: Edit Modal Content -->

    <!-- <h2 class="intro-y text-lg font-medium mt-10">
      {{ $t('data_list_layout') }}
    </h2> -->
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div
        class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2"
      >
        <a
          href="javascript:;"
          data-toggle="modal"
          data-target="#header-footer-modal-preview"
          class="btn btn-primary"
          >{{ $t('add_new_product') }}</a
        >
        <div class="dropdown">
          <button
            class="dropdown-toggle btn px-2 box text-gray-700 dark:text-gray-300"
            aria-expanded="false"
          >
            <span class="w-5 h-5 flex items-center justify-center">
              <PlusIcon class="w-4 h-4" />
            </span>
          </button>
          <div class="dropdown-menu w-40">
            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
              <a
                href=""
                class="flex items-center  p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <PrinterIcon class="w-4 h-4 mr-2" /> {{ $t('print') }}
              </a>
              <a
                href=""
                class="flex items-center  p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <FileTextIcon class="w-4 h-4 mr-2" />
                {{ $t('export_to_excel') }}
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <FileTextIcon class="w-4 h-4 mr-2" /> {{ $t('export_to_PDF') }}
              </a>
            </div>
          </div>
        </div>
        <div class="hidden md:block mx-auto text-gray-600">
          <!-- Showing 1 to 10 of 150 entries -->
        </div>
        <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
          <div class="w-56 relative text-gray-700 dark:text-gray-300">
            <input
              type="text"
              class="form-control w-56 box pr-10 placeholder-theme-13"
              placeholder="Search..."
              v-model="searchKeyword"
              @input="searchData()"
            />
            <SearchIcon
              class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
            />
          </div>
        </div>
      </div>
      <!-- BEGIN: Data List -->
      <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
        <table class="table table-report -mt-2">
          <thead>
            <tr>
              <th
                class="whitespace-nowrap"
                style="display: flex;align-items: center; justify-content: center;transform: translate(-10px)"
              >
                {{ $t('id') }}
              </th>
              <th class="whitespace-nowrap uppercase">{{ $t('product') }}</th>
              <th class="whitespace-nowrap uppercase">{{ $t('category') }}</th>
              <th class="text-center whitespace-nowrap uppercase">
                {{ $t('price') }}
              </th>
              <th class="text-center whitespace-nowrap uppercase">
                {{ $t('amount') }}
              </th>
              <th class="text-center whitespace-nowrap uppercase">
                {{ $t('barcode') }}
              </th>
              <th class="text-center whitespace-nowrap uppercase">
                {{ $t('date') }}
              </th>
              <th class="text-center whitespace-nowrap uppercase">
                {{ $t('manufacturer') }}
              </th>
              <th class="text-center whitespace-nowrap uppercase">
                {{ $t('actions') }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(faker, fakerKey) in data"
              :key="fakerKey"
              :class="faker ? `intro-x` : `hidden`"
            >
              <td class="w-20">
                <div class="flex  justify-center">
                  <div
                    class="w-10 h-10 image-fi -ml-5"
                    style="display: flex; align-items: center;justify-content: center;"
                  >
                    {{ fakerKey + 1 }}
                  </div>
                </div>
              </td>
              <td>
                <a
                  href=""
                  class="font-medium whitespace-nowrap"
                  style="text-align: center;"
                  >{{ faker.name }}</a
                >
                <div class="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                  {{ faker.type }}
                  /
                  {{ faker.package_type }}
                </div>
              </td>
              <td style="text-align: center;" class="break-words">
                {{ faker.category.name }}
              </td>
              <td class="text-center">
                {{ faker.price }}<br />
                <span class="text-gray-600 text-xs whitespace-nowrap mt-0.5">{{
                  faker.initial_price
                }}</span>
              </td>
              <td class="text-center">{{ faker.count }}</td>
              <td class="text-center">{{ faker.barcode }}</td>
              <td class="text-center">
                <span class="text-xs">{{ faker.expired_date }}</span>
                <span
                  class="text-gray-600 text-xs whitespace-nowrap mt-0.5"
                  style="display: flex; flex-direction: column;"
                  >{{ faker.manufactured_date }}</span
                >
              </td>
              <td class="text-center" style="">
                {{ faker.manufacturer }}
                <span class="text-gray-600 text-xs whitespace-nowrap mt-0.5">{{
                  faker.country
                }}</span>
              </td>
              <td class="table-report__action w-56">
                <div class="flex justify-center items-center">
                  <a
                    class="flex items-center mr-3"
                    data-toggle="modal"
                    data-target="#delete-modal-preview"
                    @click="() => modalEdit(JSON.stringify(faker))"
                    href="javascript:;"
                  >
                    <Edit2Icon class="w-4 h-4 mr-1 fill-500 " />
                    {{ $t('edit') }}
                  </a>
                  <a
                    @click="modalDelete(faker.id)"
                    class="flex items-center text-theme-6"
                    href="javascript:;"
                    data-toggle="modal"
                    data-target="#delete-confirmation-modal"
                  >
                    <Trash2Icon class="w-4 h-4 mr-1" /> {{ $t('delete') }}
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- END: Data List -->
      <!-- BEGIN: Pagination -->
      <div
        :class="
          data
            ? `intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center`
            : `bg-primary-3`
        "
      >
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
            <span
              class="pagination__link"
              :class="{ 'pagination__link--active': page === currentPage }"
              @click="goToPage(page)"
            >
              {{ page }}
            </span>
          </li>
          <li>
            <span class="pagination__link" v-if="currentPage < totalPages"
              >...</span
            >
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
        <select
          class="w-20 form-select box mt-3 sm:mt-0"
          v-model="currentPage"
          @change="goToPage(currentPage)"
        >
          <option v-for="page in totalPages" :key="page">{{ page }}</option>
        </select>
      </div>
      <!-- END: Pagination -->
    </div>
    <!-- BEGIN: Delete Confirmation Modal -->
    <div
      id="delete-confirmation-modal"
      class="modal"
      tabindex="-1"
      aria-hidden="true"
      v-if="modal"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="p-5 text-center">
              <XCircleIcon class="w-16 h-16 text-theme-6 mx-auto mt-3" />
              <div class="text-3xl mt-5">{{ $t('are_you_sure') }}</div>
              <div class="text-gray-600 mt-2">
                {{ $t('delete_text') }}
              </div>
            </div>
            <div class="px-5 pb-8 text-center">
              <button
                type="button"
                id="cancelModal"
                data-dismiss="modal"
                class="btn btn-outline-secondary w-28 mr-1"
              >
                {{ $t('cancel') }}
              </button>
              <button
                type="button"
                class="btn btn-danger w-24"
                @click="deletProducts"
              >
                {{ $t('delete') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Delete Confirmation Modal -->
  </div>
</template>

<script setup>
/* eslint-disable */
import axios from 'axios'
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import router from '@/router'
const data = ref({})
const currentPage = ref(1)
const totalPages = ref(10)
const modal = ref(false)
const selectedId = ref(null)
const EditModalOpend = ref(false)
const eId = ref(null)
const searchKeyword = ref('')
const categories = ref({})
const typeInputValue = ref({
  name: '',
  package_type: '',
  type: '',
  barcode: '',
  price: '',
  initial_price: '',
  amount: '',
  expired_date: '',
  manufactured_date: '',
  manufacturer: '',
  category_id: '',
  count: ''
})
console.log(typeInputValue.value.manufactured_date)

const errorInputValue = reactive({
  name: null,
  amount: null,
  barcode: null,
  expired_date: null
})
const errorEditInputValue = reactive({
  name: null,
  amount: null,
  barcode: null,
  expired_date: null
})
const editInputValue = reactive({
  name: null,
  package_type: null,
  type: null,
  barcode: null,
  price: null,
  initial_price: null,
  count: null,
  expired_date: null,
  manufactured_date: null,
  manufacturer: null,
  category_id: null
})
const loading = ref(false)

function modalDelete(id) {
  modal.value = true
  selectedId.value = id
}
const go = () => {
  router.push('/alert')
}

function modalEdit(faker) {
  EditModalOpend.value = true
  let data = JSON.parse(faker)
  eId.value = data.id
  for (let key in data) {
    editInputValue[key] = data[key]
  }
}

const deletProducts = () => {
  axios
    .delete(`https://pharmacy.educlub.uz/api/products/${selectedId.value}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(result => {
      // selectedId.value = result.id
      if (result.status === 200) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Deleted successfully',
          showConfirmButton: false,
          timer: 1500
        })
        document.querySelector('#cancelModal').click()
        axios
          .get('https://pharmacy.educlub.uz/api/products', {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            params: {
              page: currentPage.value
            }
          })
          .then(res => {
            // console.log(res.data.result.data)
            data.value = res.data.result?.data
            totalPages.value = res.data.result?.last_page
            if (data.value == '') {
              totalPages.value = res.data.result?.currentPage
            }
          })
      }
    })
}

const addNewProducts = () => {
  console.log(typeInputValue.value)
  loading.value = true // Ishni boshlashni belgilash
  axios
    .post('https://pharmacy.educlub.uz/api/products', typeInputValue.value, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(res => {
      document.querySelector('#add_close_modal').click()
      errorInputValue.name = ''
      errorInputValue.barcode = ''
      errorInputValue.count = ''
      errorInputValue.expired_date = ''
        typeInputValue.name = null
  typeInputValue.package_type = null
  typeInputValue.type = null
  typeInputValue.barcode = null
  typeInputValue.price = null
  typeInputValue.initial_price = null
  typeInputValue.count = null
  typeInputValue.expired_date = null
  typeInputValue.manufactured_date = null
  typeInputValue.manufacturer = null
  typeInputValue.short_description = null
  typeInputValue.category_id = null
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      fetchData()
    })
    .catch(err => {
      errorInputValue.name = err.response.data.errors.name[0]
      errorInputValue.barcode = err.response.data.errors.barcode[0]
      errorInputValue.count = err.response.data.errors.count[0]
      errorInputValue.expired_date = err.response.data.errors.expired_date[0]
    })
    .finally(() => {
      loading.value = false
    })
}

const editProducts = () => {
  loading.value = true
  axios
    .put(
      `https://pharmacy.educlub.uz/api/products/${eId.value}`,
      {
        name: editInputValue.name,
        package_type: editInputValue.package_type,
        type: editInputValue.type,
        barcode: editInputValue.barcode,
        price: editInputValue.price,
        initial_price: editInputValue.initial_price,
        count: editInputValue.count,
        expired_date: editInputValue.expired_date,
        manufactured_date: editInputValue.manufactured_date,
        manufacturer: editInputValue.manufacturer,
        category_id: editInputValue.category_id
      },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }
    )
    .then(res => {
      errorEditInputValue.name = ''
      EditModalOpend.value = false
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      axios
        .get('https://pharmacy.educlub.uz/api/products', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          },
          params: {
            page: currentPage.value
          }
        })
        .then(res => {
          console.log(res.data.result.data)
          data.value = res.data.result?.data
          totalPages.value = res.data.result?.last_page
          if (data.value == '') {
            totalPages.value = res.data.result?.currentPage
          }
        })
    })
    .catch(err => {
      errorEditInputValue.name = err.response.data.errors.name[0]
    })
    .finally(() => {
      loading.value = false
    })
}

function searchData() {
  const token = localStorage.getItem('token')

  if (!searchKeyword.value) {
    axios
      .get('https://pharmacy.educlub.uz/api/products', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        params: {
          page: currentPage.value
        }
      })
      .then(res => {
        data.value = res.data.result?.data
        totalPages.value = res.data.result?.last_page
        if (data.value == '') {
          totalPages.value = res.data.result?.currentPage
        }
      })
    return
  }

  if (searchKeyword.value.length > 2) {
    axios
      .get('https://pharmacy.educlub.uz/api/products', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        params: { search: searchKeyword.value }
      })
      .then(res => {
        data.value = res.data.result?.data
        totalPages.value = res.data.result?.last_page
        if (data.value == '') {
          totalPages.value = res.data.result?.currentPage
        }
      })
  }
}

function fetchData() {
  axios
    .get('https://pharmacy.educlub.uz/api/products', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },
      params: {
        page: currentPage.value
      }
    })
    .then(res => {
      data.value = res.data.result?.data
      console.log(res.data.result?.data)
      totalPages.value = res.data.result?.last_page
      if (data.value == '') {
        totalPages.value = res.data.result?.currentPage
      }
    })
}
fetchData()

axios
  .get('https://pharmacy.educlub.uz/api/categories', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
  .then(res => {
    categories.value = res.data.result
    console.log(res.data.result)
  })

const goToPage = page => {
  if (page >= 1 && page <= totalPages.value && page != currentPage.value) {
    totalPages.value = res.data.result?.data
    currentPage.value = page
    axios
      .get('https://pharmacy.educlub.uz/api/products', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        params: {
          page: currentPage.value
        }
      })
      .then(res => {
        data.value = res.data.result?.data
        totalPages.value = res.data.result?.last_page
      })
  }
}
</script>

<style>
ul li span:hover {
  background-color: white;
}
</style>
