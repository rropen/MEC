<template>
  <div class="flex flex-col items-center"></div>

  <!-- This creates our start and stop button for the counter -->
  <div class="flex-auto">
    <button
      class="shadow-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 pl-6 rounded"
      @click="play()"
    >
      Start
    </button>
    <button
      class="shadow-lg ml-10 mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 pl-6 px-6 rounded"
      @click="pause()"
    >
      Stop
    </button>
    <button
      class="shadow-lg ml-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 pl-6 rounded"
      @click="reset()"
    >
      Clear
    </button>
  </div>
  <div>
    <p>Employees</p>
    <input
      v-model="employeeNumber"
      placeholder="edit me"
      class="border-4 border-light-blue-500 border-opacity-25 shadow"
    />
  </div>
  <!-- Outputs the cost calculation -->
  <div :cost="'Hi from parent'" class="flex-auto pt-8 box-border">
    Cost $ {{ costCalc.toFixed(2) }}
  </div>

  <!-- This is the Table rendered in the home page -->
  <Table />

  <!-- This is the charts that are rendered in the home page -->
  <!-- <Charts :cost-calc="this.costCalc.toFixed(2)" /> -->
</template>

<script>
import CostCounter from "./CostCounter.vue";
import Table from "./Table.vue";
// import Charts from './Charts';

export default {
  name: "Home",

  components: {
    Table,
    CostCounter,
    // Charts,
  },
  name: "App",
  data() {
    return {
      timerEnabled: false,
      costCalc: 0,
      meetingId: "",
      date: "",
      employeeNumber: "",
      costHr: "",
    };
  },

  // This is how the timer is made and calculated
  watch: {
    timerEnabled(value) {
      if (value) {
        // The value is calculated by 1000 = 1 sec. And the .056 is the cost per signle employe at $200 per hr
        setTimeout(() => {
          this.costCalc = this.costCalc + 0.039;
        }, 1000 / this.employeeNumber);
      }
    },

    costCalc: {
      handler(value) {
        if (value > 0.0 && this.timerEnabled) {
          setTimeout(() => {
            this.costCalc = this.costCalc + 0.039;
          }, 1000 / this.employeeNumber);
        }
      },
      // This ensures the watcher is triggered upon creation
      immediate: true,
    },
  },

  methods: {
    // This is how you start and stop the cost calculation
    play() {
      this.timerEnabled = true;
    },

    pause() {
      this.timerEnabled = false;
    },
    reset() {
      this.costCalc = 0;
    },
    // This sends the information to the table when the submit button is clickedd
  },
};
</script>
