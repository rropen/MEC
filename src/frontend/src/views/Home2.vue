<template>
  <div>
    <Statistics />
    <div @keyup.esc="PastMeetingModal = false" class="flex">
      <div class="ml-8 w-screen">
        <div class="flex justify-end mr-8">
          <button
            id="pastMeeting"
            class="
              delay-100
              duration-200
              bg-rrblue-400
              hover:bg-rrblue-200
              text-white
              font-semibold
              py-2
              px-4
              rounded-md
              text-lg
              focus:outline-none
            "
            @click="PastMeetingModal = !PastMeetingModal"
          >
            <teleport to="#modals">
              <PastMeetingForm
                v-if="PastMeetingModal"
                @close="hideModal()"
                @updateTable="updateTable()"
              >
              </PastMeetingForm>
            </teleport>
            Enter Past Meeting
          </button>
        </div>
        <label
          for="employeeNumber"
          class="block text-md font-medium text-gray-700"
        >
          Employees: &nbsp;
          <input
          id="employeeNumber"
            type="text"
            name="employeeNumber"
            v-model="employeeNumber"
            placeholder="0"
            class="
              mb-6
              shadow-sm
              focus:ring-bg-rrblue-400 focus:border-bg-rrblue-400
              block
              w-30
              sm:text-sm
              border-gray-300
              rounded-md
            "
            :class="{ '': employeeNumber == 0 }"
          />
        </label>

        <!-- This creates our start and stop button for the counter -->
        <div class="flex-auto">
          <button
            v-if="employeeNumber != 0"
            class="
              delay-100
              duration-200
              bg-rrblue-400
              hover:bg-rrblue-200
              text-white
              font-semibold
              py-2
              px-4
              rounded-md
              text-lg
              focus:outline-none
              mr-8
            "
            id="startButton"
            @click="play()"
          >
            Start
          </button>
          <button
          id="stopButton"
            v-if="employeeNumber != 0"
            class="
              delay-100
              duration-200
              bg-rrblue-400
              hover:bg-rrblue-200
              text-white
              font-semibold
              py-2
              px-4
              rounded-md
              text-lg
              focus:outline-none
              mr-8
            "
            @click="pause()"
          >
            Stop
          </button>
          <button
          id="clearButton"
            class="
              delay-100
              duration-200
              bg-rrblue-400
              hover:bg-rrblue-200
              text-white
              font-semibold
              py-2
              px-4
              rounded-md
              text-lg
              focus:outline-none
            "
            @click="reset()"
          >
            Clear
          </button>
        </div>
        <!-- Outputs the cost calculation -->
        <div class="mt-4 text-md">
          <p>
            <span>
              Cost $
              <span class="text-rrpink-600 font-semibold">{{
                costCalc.toFixed(2)
              }}</span></span
            ><br />
            <span class="" v-show="seconds < 60 && seconds != 0"
              >Seconds
              <span class="text-rrpink-600 w-14 font-semibold">{{
                seconds.toFixed(0)
              }}</span></span
            >
            <span class="" v-show="minutes > 1"
              >Minutes
              <span class="text-rrpink-600 font-semibold">{{
                minutes
              }}</span></span
            >
          </p>
        </div>
      </div>
    </div>

    <!-- This is the Table rendered in the home page -->
    <Lower
      class="mt-4"
      :cost="costCalc"
      :employeeNumber="parseInt(employeeNumber)"
      :minutes="minutes"
      ref="fetchTablefromHome"
    />
  </div>

  <!-- This is the charts that are rendered in the home page -->
  <!-- <Charts :cost-calc="this.costCalc.toFixed(2)" /> -->
</template>

<script>
// import CostCounter from "./CostCounter.vue";
// import Charts from './Charts';
import Lower from "../components/Lower.vue";
import PastMeetingForm from "../components/PastMeetingForm.vue";
import Statistics from "../components/Statistics.vue";
export default {
  name: "Home2",

  components: {
    // CostCounter,
    Lower,
    PastMeetingForm,
    Statistics,
    // Charts,
  },
  data() {
    return {
      timerEnabled: false,
      PastMeetingModal: false,
      costCalc: 0,
      // meetingId: "",
      date: "",
      employeeNumber: 0,
      costHr: "",
      seconds: 0,
      // minutes: 0,
    };
  },
  computed: {
    // a computed getter
    minutes: function () {
      // `this` points to the vm instance
      return Math.floor(this.seconds / 60) + 1;
    },
  },
  // This is how the timer is made and calculated
  watch: {
    timerEnabled(value) {
      if (value) {
        // The value is calculated by 1000 = 1 sec. And the .039 is the cost per signle employe at $135 per hr
        setTimeout(() => {
          this.costCalc = this.costCalc + 0.039;
          this.seconds = this.seconds + 1 / this.employeeNumber;
        }, 1000 / this.employeeNumber);
      }
    },
    costCalc: {
      handler(value) {
        if (value > 0.0 && this.timerEnabled) {
          setTimeout(() => {
            this.costCalc = this.costCalc + 0.039;
            this.seconds = this.seconds + 1 / this.employeeNumber;
          }, 1000 / this.employeeNumber);
          // this.seconds = this.seconds + 1;
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
      this.seconds = 0;
      this.minutes = 0;
    },
    hideModal() {
      this.PastMeetingModal = false;
    },
    updateTable() {
      this.$refs.fetchTablefromHome.fetchTable();
    },
  },
};
</script>
