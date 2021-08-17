<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="grid justify-items-center mb-8">
    <div class="grid grid-cols-2">
      <button
        id="totalButton"
        class="
          relative
          inline-flex
          items-center
          px-12
          py-2
          rounded-l-md
          border border-gray-300
          bg-rrblue-400
          text-md
          font-medium
          text-white text-center
          hover:bg-rrblue-200
          text-center
        "
        @click="
          totalClicked = true;
          monthlyClicked = false;
        "
      >
        Total
      </button>
      <button
        id="daysButton"
        class="
          -ml-px
          relative
          inline-flex
          items-center
          px-4
          py-2
          rounded-r-md
          border border-gray-300
          bg-rrblue-400
          text-md
          font-medium
          text-white
          hover:bg-rrblue-200
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
        md:grid-cols-5
        md:divide-y-0 md:divide-x
      "
    >
      <!-- These are the 5 stat cards -->
      <div class="px-6 py-5 sm:p-6">
        <dt class="text-base font-normal text-gray-900">Average Time</dt>
        <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div
            id="monthlyClicked"
            class="flex items-baseline text-2xl font-semibold text-indigo-600"
            v-if="monthlyClicked"
          >
            {{ averageMonthlyTime.toFixed(1) }}
            <span class="ml-2 text-sm font-medium text-gray-500"> min </span>
          </div>
          <div
            id="totalClicked"
            v-if="totalClicked"
            class="flex items-baseline text-2xl font-semibold text-indigo-600"
          >
            {{ averageTime.toFixed(1) }}
            <span class="ml-2 text-sm font-medium text-gray-500"> min </span>
          </div>
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
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/vue/solid";
import { ref, watch } from "vue";

export default {
  name: "Statistics",
  props: {
    rows: Array,
  },
  components: {
    ArrowSmDownIcon,
    ArrowSmUpIcon,
  },

  setup(props) {
    const totalCost = ref(0);
    const totalTime = ref(0);
    const totalPowerpointSlides = ref(0);
    const averageCost = ref(0);
    const averageTime = ref(0);
    const changePrevious = ref(0);
    const changePercent = ref(0);
    const changeType = ref(0);
    const totalMonthlyCost = ref(0);
    const totalMonthlyTime = ref(0);
    const totalMonthlyPowerpointSlides = ref(0);
    const averageMonthlyCost = ref(0);
    const averageMonthlyTime = ref(0);
    const changeMonthlyPrevious = ref(0);
    const changeMonthlyPercent = ref(0);
    const changeMonthlyType = ref(0);
    let meetingTime = ref(0);
    let monthlyClicked = ref(false);
    let totalClicked = ref(true);
    let currentTime = Math.floor(new Date().getTime() / 1000.0);
    let monthlyMeetingAmount = 0;
    let n = 0;

    // Reset all cumulative stats if the meeting rows information changes
    function resetVals() {
      currentTime = Math.floor(new Date().getTime() / 1000.0);
      totalMonthlyCost.value = 0;
      totalMonthlyTime.value = 0;
      totalMonthlyPowerpointSlides.value = 0;
      totalCost.value = 0;
      totalTime.value = 0;
      totalPowerpointSlides.value = 0;
      monthlyMeetingAmount = 0;
      n = 0;
    }

    /* Watch for changes to the incoming list of meetings ("rows" prop) and re-run
    the calculations for the statistics shown in this component. */
    watch(
      () => props.rows,
      () => {
        resetVals();
        while (n < props.rows.length) {
          meetingTime = props.rows[n]["date"] / 1000;

          /* If the date of the meeting is less than 30 days from today then
          count it towards monthly Value */
          if (meetingTime > currentTime - 2629743) {
            totalMonthlyCost.value =
              totalMonthlyCost.value + props.rows[n]["totalCost"];
            totalMonthlyTime.value =
              totalMonthlyTime.value + props.rows[n]["time"];
            totalMonthlyPowerpointSlides.value =
              totalMonthlyPowerpointSlides.value +
              props.rows[n]["powerpointSlides"];
            averageMonthlyTime.value =
              totalMonthlyTime.value / monthlyMeetingAmount;
            averageMonthlyCost.value =
              totalMonthlyCost.value / monthlyMeetingAmount;
          }
          // Else count it towards older value and add the monthly value to the total
          totalCost.value = totalCost.value + props.rows[n]["totalCost"];
          totalTime.value = totalTime.value + props.rows[n]["time"];
          totalPowerpointSlides.value =
            totalPowerpointSlides.value + props.rows[n]["powerpointSlides"];
          averageTime.value = totalTime.value / props.rows.length;
          averageCost.value = totalCost.value / props.rows.length;
          monthlyMeetingAmount++;
          n++;
        }
      }
    );

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
