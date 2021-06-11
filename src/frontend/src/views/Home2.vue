<template>
  <div>
    <div
      @keyup.esc="PastMeetingModal = false"
      class="flex flex-row justify-between"
    >
      <div>
        <div>
          <p class="text-lg">
            Employees: &nbsp;<input
              type="text"
              v-model="employeeNumber"
              placeholder="0"
              class="rounded-md mb-4 w-12 ring px-2 focus:outline-none"
              :class="{ 'ring-rrpink-400': employeeNumber == 0 }"
            />
          </p>
        </div>
        <!-- This creates our start and stop button for the counter -->
        <div class="flex-auto">
          <button
            v-if="employeeNumber != 0"
            class="
              mr-8
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
            @click="play()"
          >
            Start
          </button>
          <button
            v-if="employeeNumber != 0"
            class="
              mr-8
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
            @click="pause()"
          >
            Stop
          </button>
          <button
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
        <div class="mt-4 text-lg">
          <p class="">
            <span class=""
              >Cost $
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
      <div>
        <button
          class="
            mr-8
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

export default {
  name: "Home",

  components: {
    // CostCounter,
    Lower,
    PastMeetingForm,
    // Charts,
  },
  name: "App",
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
    // This sends the information to the table when the submit button is clickedd
  },
};
</script>
