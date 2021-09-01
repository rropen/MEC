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
        "
        @click="lastThirtyDays = false"
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
        @click="lastThirtyDays = true"
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
        <dt class="text-base font-normal text-rrgrey-900">Average Time</dt>
        <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div
            id="totalClicked"
            class="flex items-baseline text-2xl font-semibold text-rrblue-600"
          >
            {{ averageTime.toFixed(1) }}
            <span class="ml-2 text-sm font-medium text-rrgrey-900"> min </span>
          </div>
        </dd>
      </div>
      <div class="px-4 py-5 sm:p-6 grid">
        <dt class="text-base font-normal text-rrgrey-900">Total Time</dt>
        <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div
            class="flex items-baseline text-2xl font-semibold text-rrblue-600"
          >
            {{ totalTime }}
            <span class="ml-2 text-sm font-medium text-rrgrey-900"> min </span>
          </div>
        </dd>
      </div>
      <div class="px-4 py-5 sm:p-6 grid">
        <dt class="text-base font-normal text-rrgrey-900">Total Cost</dt>
        <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div
            class="flex items-baseline text-2xl font-semibold text-rrblue-600"
          >
            ${{ totalCost.toFixed(2) }}
            <span class="ml-2 text-sm font-medium text-rrgrey-900"> USD </span>
          </div>
        </dd>
      </div>
      <div class="px-4 py-5 sm:p-6 grid">
        <dt class="text-base font-normal text-rrgrey-900">Average Cost</dt>
        <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div
            class="flex items-baseline text-2xl font-semibold text-rrblue-600"
          >
            ${{ averageCost.toFixed(2) }}
            <span class="ml-2 text-sm font-medium text-rrgrey-900"> USD </span>
          </div>
        </dd>
      </div>
      <div class="px-4 py-5 sm:p-6 grid">
        <dt class="text-base font-normal text-rrgrey-900">Powerpoint Slides</dt>
        <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div
            class="flex items-baseline text-2xl font-semibold text-rrblue-600"
          >
            {{ totalSlides }}
            <span class="ml-2 text-sm font-medium text-rrgrey-900">
              Slides
            </span>
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
    const lastThirtyDays = ref(true);
    const filteredRows = ref([]);
    const totalTime = ref(0);
    const averageTime = ref(0);
    const totalCost = ref(0);
    const averageCost = ref(0);
    const totalSlides = ref(0);

    function filterLastThirtyDaysMeetings(meeting) {
      const dateCheck = Math.floor(new Date().getTime());
      const isMeetingNewerThanThirty = meeting.date > dateCheck - 2629743000;
      return isMeetingNewerThanThirty;
    }

    // reduce function to sum time
    const timeReducer = function (accumulator, meeting) {
      return accumulator + meeting.time;
    };

    // reduce function to sum cost
    const costReducer = function (accumulator, meeting) {
      return accumulator + meeting.totalCost;
    };

    // reduce function to sum number of slides
    const slideReducer = function (accumulator, meeting) {
      return accumulator + meeting.powerpointSlides;
    };

    watch(
      () => [lastThirtyDays.value, props.rows],
      () => {
        // math on last 30 days worth of meetings
        if (!lastThirtyDays.value) {
          filteredRows.value = props.rows;

          // math on all meetings
        } else {
          filteredRows.value = props.rows.filter(filterLastThirtyDaysMeetings);
        }

        // Total Time
        totalTime.value = filteredRows.value.reduce(timeReducer, 0);

        // Average Meeting Time
        averageTime.value = totalTime.value / filteredRows.value.length;

        // Total Cost
        totalCost.value = filteredRows.value.reduce(costReducer, 0);

        // Average Meeting Cost
        averageCost.value = totalCost.value / filteredRows.value.length;

        // Total PowerPoint Slides
        totalSlides.value = filteredRows.value.reduce(slideReducer, 0);
      }
    );

    return {
      lastThirtyDays,
      totalCost,
      totalTime,
      averageCost,
      averageTime,
      totalSlides,
    };
  },
};
</script>
