/* eslint-disable */
<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 2xl:col-span-9">
      <div class="grid grid-cols-12 gap-6">
        <!-- BEGIN: General Report -->
        <div class="col-span-12 mt-8">
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">{{ $t("general_report") }}</h2>
            <a
              href=""
              class="ml-auto flex items-center text-theme-1 dark:text-theme-10"
            >
              <RefreshCcwIcon class="w-4 h-4 mr-3" /> {{ $t("reload_data") }}
            </a>
          </div>
          <div class="grid grid-cols-9 gap-6 mt-5">
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <ShoppingCartIcon class="report-box__icon text-theme-10" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-theme-9 cursor-pointer"
                        content="33% Higher than last month"
                      >
                        33% <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6">4.710</div>
                  <div class="text-base text-gray-600 mt-1">{{ $t('item_sales') }}</div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <CreditCardIcon class="report-box__icon text-theme-11" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-theme-6 cursor-pointer"
                        content="2% Lower than last month"
                      >
                        2% <ChevronDownIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6">3.721</div>
                  <div class="text-base text-gray-600 mt-1">{{ $t('new_orders') }}</div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <MonitorIcon class="report-box__icon text-theme-12" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-theme-9 cursor-pointer"
                        content="12% Higher than last month"
                      >
                        12% <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6">2.149</div>
                  <div class="text-base text-gray-600 mt-1">{{ $t("total_products") }}</div>
                </div>
              </div>
            </div>
            <!-- <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <UserIcon class="report-box__icon text-theme-9" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-theme-9 cursor-pointer"
                        content="22% Higher than last month"
                      >
                        22% <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6">152.040</div>
                  <div class="text-base text-gray-600 mt-1">Unique Visitor</div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
        <!-- END: General Report -->
        <!-- BEGIN: Sales Report -->
        <div class="col-span-12 lg:col-span-12 mt-8">
          <div class="intro-y block sm:flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">{{ $t('sales_report') }}</h2>
            <div
              class="sm:ml-auto mt-3 sm:mt-0 relative text-gray-700 dark:text-gray-300"
            >
              <CalendarIcon
                class="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
              />
              <Litepicker
                v-model="salesReportFilter"
                :options="{
                  autoApply: false,
                  singleMode: false,
                  numberOfColumns: 2,
                  numberOfMonths: 2,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true
                  }
                }"
                class="form-control sm:w-56 box pl-10"
              />
            </div>
          </div>
          <div class="intro-y box p-5 mt-12 sm:mt-5">
            <div class="flex flex-col xl:flex-row xl:items-center">
              <div class="flex">
                <div>
                  <div
                    class="text-theme-19 dark:text-gray-300 text-lg xl:text-xl font-medium"
                  >
                    $15,000
                  </div>
                  <div class="mt-0.5 text-gray-600 dark:text-gray-600">
                    {{ $t('this_month') }}
                  </div>
                </div>
                <div
                  class="w-px h-12 border border-r border-dashed border-gray-300 dark:border-dark-5 mx-4 xl:mx-5"
                ></div>
                <div>
                  <div
                    class="text-gray-600 dark:text-gray-600 text-lg xl:text-xl font-medium"
                  >
                    $10,000
                  </div>
                  <div class="mt-0.5 text-gray-600 dark:text-gray-600">
                    {{ $t('last_month') }}
                  </div>
                </div>
              </div>
              <div class="dropdown xl:ml-auto mt-5 xl:mt-0">
                <button
                  class="dropdown-toggle btn btn-outline-secondary font-normal"
                  aria-expanded="false"
                >
                  {{ $t('filter_category') }}
                  <ChevronDownIcon class="w-4 h-4 ml-2" />
                </button>
                <div class="dropdown-menu w-40">
                  <div v-for="(item,itemKey) in category" :key="itemKey">
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >{{ item.name }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="report-chart">
              <ReportLineChart :height="169" class="mt-6" />
            </div>
          </div>
        </div>
        <!-- END: Sales Report -->
        <!-- BEGIN: Official Store -->
        <div class="col-span-12 xl:col-span-12 mt-6">
          <div class="intro-y block sm:flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">{{ $t('location') }}</h2>
            <div
              class="sm:ml-auto mt-3 sm:mt-0 relative text-gray-700 dark:text-gray-300"
            >
              <MapPinIcon
                class="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
              />
              <input
                type="text"
                class="form-control sm:w-40 box pl-10"
                :placeholder="$t('filter_by_city')"
              />
            </div>
          </div>
          <div class="intro-y box p-5 mt-12 sm:mt-5">
            <div>
              {{ $t('pharmacy_info') }}
            </div>
            <ReportMap class="report-maps mt-5 bg-gray-200 rounded-md" />
          </div>
        </div>
        <!-- END: Official Store -->
        <!-- BEGIN: General Report -->
        <div class="col-span-12 grid grid-cols-12 gap-6 mt-8">
        </div>
        <!-- END: General Report -->
        <!-- BEGIN: Weekly Top Products -->
        <div class="col-span-12 mt-6">
          <div class="intro-y block sm:flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">
              {{ $t('weekly_top_products') }}
            </h2>
            <div class="flex items-center sm:ml-auto mt-3 sm:mt-0">
              <button
                class="btn box flex items-center text-gray-700 dark:text-gray-300"
              >
                <FileTextIcon class="hidden sm:block w-4 h-4 mr-2" />
                {{ $t('export_to_excel') }}
              </button>
              <button
                class="ml-3 btn box flex items-center text-gray-700 dark:text-gray-300"
              >
                <FileTextIcon class="hidden sm:block w-4 h-4 mr-2" />
                {{ $t('export_to_PDF') }}
              </button>
            </div>
          </div>
          <div class="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
            <table class="table table-report sm:mt-2">
              <thead>
                <tr>
                  <th class="whitespace-nowrap">{{ $t('images') }}</th>
                  <th class="whitespace-nowrap">{{ $t('product_name') }}</th>
                  <th class="text-center whitespace-nowrap">{{ $t('stock') }}</th>
                  <th class="text-center whitespace-nowrap">{{ $t('status') }}</th>
                  <th class="text-center whitespace-nowrap">{{ $t('actions') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(faker, fakerKey) in $_.take($f(), 4)"
                  :key="fakerKey"
                  class="intro-x"
                >
                  <td class="w-40">
                    <div class="flex">
                      <div class="w-10 h-10 image-fit zoom-in">
                        <Tippy
                          tag="img"
                          alt="Icewall Tailwind HTML Admin Template"
                          class="rounded-full"
                          src="https://avatars.mds.yandex.net/i?id=de33ac8a8e6d4e1813c6abe8675f7d272d4dab3f-12569767-images-thumbs&n=13
                          "
                          :content="`Uploaded at ${faker.dates[0]}`"
                        />
                      </div>
                      <div class="w-10 h-10 image-fit zoom-in -ml-5">
                        <Tippy
                          tag="img"
                          alt="Icewall Tailwind HTML Admin Template"
                          class="rounded-full"
                        src="https://avatars.mds.yandex.net/i?id=de33ac8a8e6d4e1813c6abe8675f7d272d4dab3f-12569767-images-thumbs&n=13
                          "
                          :content="`Uploaded at ${faker.dates[1]}`"
                        />
                      </div>
                      <div class="w-10 h-10 image-fit zoom-in -ml-5">
                        <Tippy
                          tag="img"
                          alt="Icewall Tailwind HTML Admin Template"
                          class="rounded-full"
                          src="https://avatars.mds.yandex.net/i?id=de33ac8a8e6d4e1813c6abe8675f7d272d4dab3f-12569767-images-thumbs&n=13
                          "
                          :content="`Uploaded at ${faker.dates[2]}`"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href="" class="font-medium whitespace-nowrap">{{
                      faker.products[0].name
                    }}</a>
                    <div class="text-gray-600 text-xs whitespace-nowrap mt-0.5">
                      {{ faker.products[0].category }}
                    </div>
                  </td>
                  <td class="text-center">{{ faker.stocks[0] }}</td>
                  <td class="w-40">
                    <div
                      class="flex items-center justify-center"
                      :class="{
                        'text-theme-9': faker.trueFalse[0],
                        'text-theme-6': !faker.trueFalse[0]
                      }"
                    >
                      <CheckSquareIcon class="w-4 h-4 mr-2" />
                      {{ faker.trueFalse[0] ? 'Active' : 'Inactive' }}
                    </div>
                  </td>
                  <td class="table-report__action w-56">
                    <div class="flex justify-center items-center">
                      <a class="flex items-center mr-3" href="">
                        <CheckSquareIcon class="w-4 h-4 mr-1" />
                        {{ $t('edit') }}
                      </a>
                      <a class="flex items-center text-theme-6" href="">
                        <Trash2Icon class="w-4 h-4 mr-1" /> {{ $t('delete') }}
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3"
          >
            <ul class="pagination">
              <li>
                <a class="pagination__link" href="">
                  <ChevronsLeftIcon class="w-4 h-4" />
                </a>
              </li>
              <li>
                <a class="pagination__link" href="">
                  <ChevronLeftIcon class="w-4 h-4" />
                </a>
              </li>
              <li>
                <a class="pagination__link" href="">...</a>
              </li>
              <li>
                <a class="pagination__link" href="">1</a>
              </li>
              <li>
                <a class="pagination__link pagination__link--active" href=""
                  >2</a
                >
              </li>
              <li>
                <a class="pagination__link" href="">3</a>
              </li>
              <li>
                <a class="pagination__link" href="">...</a>
              </li>
              <li>
                <a class="pagination__link" href="">
                  <ChevronRightIcon class="w-4 h-4" />
                </a>
              </li>
              <li>
                <a class="pagination__link" href="">
                  <ChevronsRightIcon class="w-4 h-4" />
                </a>
              </li>
            </ul>
            <select class="w-20 form-select box mt-3 sm:mt-0">
              <option>10</option>
              <option>25</option>
              <option>35</option>
              <option>50</option>
            </select>
          </div>
        </div>
        <!-- END: Weekly Top Products -->
      </div>
    </div>
    <div class="w-full col-span-12 2xl:col-span-3">
      <div class="2xl:border-l w-full border-theme-5 -mb-10 pb-10">
        <div class="2xl:pl-6 w-full grid grid-cols-12 gap-6">
            <!-- BEGIN: Weekly Best Sellers -->
        <div class="col-span-12 w-full xl:col-span-12 mt-6">
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate">
              {{ $t('weekly_best_sellers') }}
            </h2>
          </div>
          <div class="mt-5 w-full">
            <div
              v-for="(faker, fakerKey) in $_.take($f(), 4)"
              :key="fakerKey"
              class="intro-y w-full"
            >
              <div class="box px-4 py-4 mb-3 flex w-full items-center zoom-in">
                <div
                  class="w-10 h-10 flex-none image-fit rounded-md overflow-hidden"
                >
                  <img
                    alt="Icewall Tailwind HTML Admin Template"
                    src="https://avatars.mds.yandex.net/i?id=de33ac8a8e6d4e1813c6abe8675f7d272d4dab3f-12569767-images-thumbs&n=13"
                  />
                </div>
                <div class="ml-2 mr-auto">
                  <div class="font-medium">{{ faker.users[0].name }}</div>
                  <div class="text-gray-600 text-xs mt-0.5">
                    {{ faker.dates[0] }}
                  </div>
                </div>
                <div
                  class="py-1 px-2 flex items-center justify-center rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium"
                >
                  137 Sales
                </div>
              </div>
            </div>
            <a
              href=""
              class="intro-y w-full block text-center rounded-md py-4 border border-dotted border-theme-15 dark:border-dark-5 text-theme-16 dark:text-gray-600"
              >{{ $t('view_more') }}</a
            >
          </div>
        </div>
        <!-- END: Weekly Best Sellers -->
          <!-- BEGIN: Schedules -->
          <div
            class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 xl:col-start-1 xl:row-start-2 2xl:col-start-auto 2xl:row-start-auto mt-3"
          >
            <div class="intro-x flex items-center h-10">
              <h2 class="text-lg font-medium truncate mr-5">{{ $t('schedules') }}</h2>
              <a
                href=""
                class="ml-auto text-theme-1 dark:text-theme-10 truncate flex items-center"
              >
                <PlusIcon class="w-4 h-4 mr-1" />{{ $t('add_new_schedules') }}
              </a>
            </div>
            <div class="mt-5">
              <div class="intro-x box">
                <div class="p-5">
                  <div class="flex">
                    <i
                      data-feather="chevron-left"
                      class="w-5 h-5 text-gray-600"
                    ></i>
                    <div class="font-medium text-base mx-auto">April</div>
                    <i
                      data-feather="chevron-right"
                      class="w-5 h-5 text-gray-600"
                    ></i>
                  </div>
                  <div class="grid grid-cols-7 gap-4 mt-5 text-center">
                    <div class="font-medium">Su</div>
                    <div class="font-medium">Mo</div>
                    <div class="font-medium">Tu</div>
                    <div class="font-medium">We</div>
                    <div class="font-medium">Th</div>
                    <div class="font-medium">Fr</div>
                    <div class="font-medium">Sa</div>
                    <div class="py-0.5 rounded relative text-gray-600">29</div>
                    <div class="py-0.5 rounded relative text-gray-600">30</div>
                    <div class="py-0.5 rounded relative text-gray-600">31</div>
                    <div class="py-0.5 rounded relative">1</div>
                    <div class="py-0.5 rounded relative">2</div>
                    <div class="py-0.5 rounded relative">3</div>
                    <div class="py-0.5 rounded relative">4</div>
                    <div class="py-0.5 rounded relative">5</div>
                    <div
                      class="py-0.5 bg-theme-18 dark:bg-theme-9 rounded relative"
                    >
                      6
                    </div>
                    <div class="py-0.5 rounded relative">7</div>
                    <div
                      class="py-0.5 bg-theme-1 dark:bg-theme-1 text-white rounded relative"
                    >
                      8
                    </div>
                    <div class="py-0.5 rounded relative">9</div>
                    <div class="py-0.5 rounded relative">10</div>
                    <div class="py-0.5 rounded relative">11</div>
                    <div class="py-0.5 rounded relative">12</div>
                    <div class="py-0.5 rounded relative">13</div>
                    <div class="py-0.5 rounded relative">14</div>
                    <div class="py-0.5 rounded relative">15</div>
                    <div class="py-0.5 rounded relative">16</div>
                    <div class="py-0.5 rounded relative">17</div>
                    <div class="py-0.5 rounded relative">18</div>
                    <div class="py-0.5 rounded relative">19</div>
                    <div class="py-0.5 rounded relative">20</div>
                    <div class="py-0.5 rounded relative">21</div>
                    <div class="py-0.5 rounded relative">22</div>
                    <div
                      class="py-0.5 bg-theme-17 dark:bg-theme-11 rounded relative"
                    >
                      23
                    </div>
                    <div class="py-0.5 rounded relative">24</div>
                    <div class="py-0.5 rounded relative">25</div>
                    <div class="py-0.5 rounded relative">26</div>
                    <div
                      class="py-0.5 bg-theme-14 dark:bg-theme-12 rounded relative"
                    >
                      27
                    </div>
                    <div class="py-0.5 rounded relative">28</div>
                    <div class="py-0.5 rounded relative">29</div>
                    <div class="py-0.5 rounded relative">30</div>
                    <div class="py-0.5 rounded relative text-gray-600">1</div>
                    <div class="py-0.5 rounded relative text-gray-600">2</div>
                    <div class="py-0.5 rounded relative text-gray-600">3</div>
                    <div class="py-0.5 rounded relative text-gray-600">4</div>
                    <div class="py-0.5 rounded relative text-gray-600">5</div>
                    <div class="py-0.5 rounded relative text-gray-600">6</div>
                    <div class="py-0.5 rounded relative text-gray-600">7</div>
                    <div class="py-0.5 rounded relative text-gray-600">8</div>
                    <div class="py-0.5 rounded relative text-gray-600">9</div>
                  </div>
                </div>
                <div class="border-t border-gray-200 dark:border-dark-5 p-5">
                  <div class="flex items-center">
                    <div class="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                    <span class="truncate">UI/UX Workshop</span>
                    <div
                      class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"
                    ></div>
                    <span class="font-medium xl:ml-auto">23th</span>
                  </div>
                  <div class="flex items-center mt-4">
                    <div
                      class="w-2 h-2 bg-theme-1 dark:bg-theme-10 rounded-full mr-3"
                    ></div>
                    <span class="truncate">VueJs Frontend Development</span>
                    <div
                      class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"
                    ></div>
                    <span class="font-medium xl:ml-auto">10th</span>
                  </div>
                  <div class="flex items-center mt-4">
                    <div class="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
                    <span class="truncate">Laravel Rest API</span>
                    <div
                      class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"
                    ></div>
                    <span class="font-medium xl:ml-auto">31th</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Schedules -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { defineComponent, ref, provide } from 'vue'
import ReportLineChart from '@/components/report-line-chart/Main.vue'
import ReportDonutChart from '@/components/report-donut-chart/Main.vue'
import ReportPieChart from '@/components/report-pie-chart/Main.vue'
import ReportMap from '@/components/report-map/Main.vue'
import axios from 'axios'

export default defineComponent({
  components: {
    ReportLineChart,
    ReportDonutChart,
    ReportPieChart,
    ReportMap,
    // ReportDonutChart1,
    // SimpleLineChart1
  },
  setup() {
    const salesReportFilter = ref()
    const importantNotesRef = ref()
    const category=ref({})

    provide('bind[importantNotesRef]', el => {
      importantNotesRef.value = el
    })

    const prevImportantNotes = () => {
      const el = importantNotesRef.value
      el.tns.goTo('prev')
    }
    const nextImportantNotes = () => {
      const el = importantNotesRef.value
      el.tns.goTo('next')
    }
    axios
  .get('https://pharmacy.educlub.uz/api/categories', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
  .then(res => {
    category.value = res.data.result
    console.log(res.data.result)
  })
   
    return {
      salesReportFilter,
      prevImportantNotes,
      nextImportantNotes,
      category,
    }
  }
})
</script>
