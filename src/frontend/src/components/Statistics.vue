<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="grid justify-items-center mb-8">
    <div class="grid grid-cols-2">
      <button
        class="
          mr-8
          delay-50
          duration-100
          bg-rrblue-400
          hover:bg-rrblue-200
          text-white
          font-semibold
          py-2
          w-32
          rounded-md
          text-md
          focus:outline-none
        "
        @click="
          totalClicked = true;
          monthlyClicked = false;
        "
      >
        Total
      </button>
      <button
        class="
          mr-8
          delay-50
          duration-100
          bg-rrblue-400
          hover:bg-rrblue-200
          text-white
          font-semibold
          py-2
          rounded-md
          text-md
          focus:outline-none
          w-32
        "
        @click="
          monthlyClicked = true;
          totalClicked = false;
        "
      >
        Last 30 Days
      </button>
    </div>
    <dl
      class="
        mt-5
        grid grid-cols-5
        rounded-lg
        bg-white
        overflow-hidden
        shadow
        divide-y divide-gray-200
        md:grid-cols-5 md:divide-y-0 md:divide-x
      "
    >
      <!-- These are the 5 stat cards -->
      <div class="px-6 py-5 sm:p-6">
        <dt class="text-base font-normal text-gray-900">Average Time</dt>
        <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div
            class="flex items-baseline text-2xl font-semibold text-indigo-600"
            v-if="monthlyClicked"
          >
            {{ averageMonthlyTime.toFixed(1) }}
            <span class="ml-2 text-sm font-medium text-gray-500"> min </span>
          </div>
          <div
            v-if="totalClicked"
            class="flex items-baseline text-2xl font-semibold text-indigo-600"
          >
            {{ averageTime.toFixed(1) }}
            <span class="ml-2 text-sm font-medium text-gray-500"> min </span>
          </div>
          <!-- <div :class="[changeType === 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800', 'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0']">
            <ArrowSmUpIcon v-if="changeType === 0 " class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" aria-hidden="true" />
            <ArrowSmDownIcon v-else class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500" aria-hidden="true" />
            <span class="sr-only"> {{ changeType === 0 ? 'Increased' : 'Decreased' }} by </span>
            {{ changePrevious }}
          </div> -->
        </dd>
      </div>
      <div class="px-4 py-5 sm:p-6 grid">
        <dt class="text-base font-normal text-gray-900">Total Time</dt>
        <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div
            class="flex items-baseline text-2xl font-semibold text-indigo-600"
            v-if="monthlyClicked"
          >
            {{ totalMonthlyTime }}
            <span class="ml-2 text-sm font-medium text-gray-500"> min </span>
          </div>
          <div
            v-if="totalClicked"
            class="flex items-baseline text-2xl font-semibold text-indigo-600"
          >
            {{ totalTime }}
            <span class="ml-2 text-sm font-medium text-gray-500"> min </span>
          </div>
          <!-- <div :class="[changeType === 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800', 'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0']">
            <ArrowSmUpIcon v-if="changeType === 0 " class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" aria-hidden="true" />
            <ArrowSmDownIcon v-else class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500" aria-hidden="true" />
            <span class="sr-only"> {{ changeType === 0 ? 'Increased' : 'Decreased' }} by </span>
            {{ changePrevious }}
          </div> -->
        </dd>
      </div>
      <div class="px-4 py-5 sm:p-6 grid">
        <dt class="text-base font-normal text-gray-900">Total Cost</dt>
        <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div
            class="flex items-baseline text-2xl font-semibold text-indigo-600"
            v-if="monthlyClicked"
          >
            ${{ totalMonthlyCost.toFixed(2) }}
            <span class="ml-2 text-sm font-medium text-gray-500"> USD </span>
          </div>
          <div
            v-if="totalClicked"
            class="flex items-baseline text-2xl font-semibold text-indigo-600"
          >
            ${{ totalCost.toFixed(2) }}
            <span class="ml-2 text-sm font-medium text-gray-500"> USD </span>
          </div>
          <!-- <div :class="[changeType === 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800', 'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0']">
            <ArrowSmUpIcon v-if="changeType === 0 " class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" aria-hidden="true" />
            <ArrowSmDownIcon v-else class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500" aria-hidden="true" />
            <span class="sr-only"> {{ changeType === 0 ? 'Increased' : 'Decreased' }} by </span>
            {{ changePrevious }}
          </div> -->
        </dd>
      </div>
      <div class="px-4 py-5 sm:p-6 grid">
        <dt class="text-base font-normal text-gray-900">Average Cost</dt>
        <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div
            class="flex items-baseline text-2xl font-semibold text-indigo-600"
            v-if="monthlyClicked"
          >
            ${{ averageMonthlyCost.toFixed(2) }}
            <span class="ml-2 text-sm font-medium text-gray-500"> USD </span>
          </div>
          <div
            v-if="totalClicked"
            class="flex items-baseline text-2xl font-semibold text-indigo-600"
          >
            ${{ averageCost.toFixed(2) }}
            <span class="ml-2 text-sm font-medium text-gray-500"> USD </span>
          </div>
          <!-- <div :class="[changeType === 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800', 'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0']">
            <ArrowSmUpIcon v-if="changeType === 0 " class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" aria-hidden="true" />
            <ArrowSmDownIcon v-else class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500" aria-hidden="true" />
            <span class="sr-only"> {{ changeType === 0 ? 'Increased' : 'Decreased' }} by </span>
            {{ changePrevious }}
          </div> -->
        </dd>
      </div>
      <div class="px-4 py-5 sm:p-6 grid">
        <dt class="text-base font-normal text-gray-900">Powerpoint Slides</dt>
        <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div
            class="flex items-baseline text-2xl font-semibold text-indigo-600"
            v-if="monthlyClicked"
          >
            {{ totalMonthlyPowerpointSlides }}
            <span class="ml-2 text-sm font-medium text-gray-500"> Slides </span>
          </div>
          <div
            v-if="totalClicked"
            class="flex items-baseline text-2xl font-semibold text-indigo-600"
          >
            {{ totalPowerpointSlides }}
            <span class="ml-2 text-sm font-medium text-gray-500"> Slides </span>
          </div>
          <!-- <div :class="[changeType === 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800', 'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0']">
            <ArrowSmUpIcon v-if="changeType === 0 " class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" aria-hidden="true" />
            <ArrowSmDownIcon v-else class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500" aria-hidden="true" />
            <span class="sr-only"> {{ changeType === 0 ? 'Increased' : 'Decreased' }} by </span>
            {{ changePrevious }}
          </div> -->
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/vue/solid";
import { ref, onMounted, watchEffect } from "vue";
import axios from "axios";

export default {
  name: "Statistics",
  props: {
    rows: Array,
  },
  components: {
    ArrowSmDownIcon,
    ArrowSmUpIcon,
  },

  setup(props, context) {
    // let rows = ref([]);
    const totalCost = ref(0);
    const totalTime = ref(0);
    const totalPowerpointSlides = ref(0);
    const averageCost = ref(0);
    const averageTime = ref(0);
    const changePrevious = ref(0);
    const changePercent = ref(0);
    const changeType = ref(0);

    // These are the variables for calcualting monthly
    const totalMonthlyCost = ref(0);
    const totalMonthlyTime = ref(0);
    const totalMonthlyPowerpointSlides = ref(0);
    const averageMonthlyCost = ref(0);
    const averageMonthlyTime = ref(0);
    const changeMonthlyPrevious = ref(0);
    const changeMonthlyPercent = ref(0);
    const changeMonthlyType = ref(0);
    let meetingTime = ref(0);

    // If monthly or total is monthlyClicked,
    let monthlyClicked = ref(false);
    let totalClicked = ref(true);
    // const totalCost = computed(() => {});
    let n = 0;
    let monthlyMeetingAmount = 0;
    const currentTime = Math.floor(new Date().getTime() / 1000.0);
    // const thirtyDaysAgo = currentTime - 2629743;
    watchEffect(() => {
      while (n < props.rows.length) {
        console.log("Rows being watched: ", props.rows);
        meetingTime = props.rows[n]["date"] / 1000;
        // If the date of the meeting is less than 30 days from today then count it towards monthly Value

        if (meetingTime > currentTime - 2629743) {
          totalMonthlyCost.value =
            props.rows[n]["totalCost"] + totalMonthlyCost.value;
          totalMonthlyTime.value =
            props.rows[n]["time"] + totalMonthlyTime.value;
          totalMonthlyPowerpointSlides.value =
            props.rows[n]["powerpointSlides"] +
            totalMonthlyPowerpointSlides.value;

          // meetingAmount = props.rows.length;
          averageMonthlyTime.value =
            totalMonthlyTime.value / monthlyMeetingAmount;
          averageMonthlyCost.value =
            totalMonthlyCost.value / monthlyMeetingAmount;
        }
        // Else count it towards older value and add the monthly value to the total
        totalCost.value = props.rows[n]["totalCost"] + totalCost.value;
        totalTime.value = props.rows[n]["time"] + totalTime.value;
        totalPowerpointSlides.value =
          props.rows[n]["powerpointSlides"] + totalPowerpointSlides.value;
        averageTime.value = totalTime.value / props.rows.length;
        averageCost.value = totalCost.value / props.rows.length;
        monthlyMeetingAmount++;
        n++;
      }
    });

    return {
      totalCost,
      totalTime,
      totalPowerpointSlides,
      averageCost,
      averageTime,
      changePrevious,
      changePercent,
      changeType,
      totalMonthlyCost,
      totalMonthlyTime,
      totalMonthlyPowerpointSlides,
      averageMonthlyCost,
      averageMonthlyTime,
      changeMonthlyPrevious,
      changeMonthlyPercent,
      changeMonthlyType,
      monthlyClicked,
      totalClicked,
    };
  },
};
</script>
