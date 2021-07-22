<template>
  <div>
    <table class="ml-8">
      <tbody>
        <tr>
          <label for="title" class="block text-md font-medium text-gray-700">
            Meeting Title: &nbsp;
            <input
              type="text"
              name="title"
              v-model="title"
              placeholder="Discuss Things..."
              class="
                mb-6
                shadow-sm
                focus:ring-bg-rrblue-400 focus:border-bg-rrblue-400
                block
                w-full
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </label>
        </tr>
        <tr>
          <label for="comment" class="block text-md font-medium text-gray-700">
            Comment: &nbsp;
            <input
              type="text"
              name="comment"
              v-model="comment"
              placeholder="What was discussed..."
              class="
                mb-6
                shadow-sm
                focus:ring-bg-rrblue-400 focus:border-bg-rrblue-400
                block
                w-full
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </label>
        </tr>
        <tr>
          <td class="text-md font-medium text-gray-700">
            <p>Was PowerPoint Used?</p>
          </td>
          <td class="py-2">
            <Toggle
              @click="powerpoint = !powerpoint"
              :toggleValue="powerpoint"
            ></Toggle>
          </td>
        </tr>
        <tr v-show="powerpoint">
          <label
            for="numSlides"
            class="block text-md font-medium text-gray-700"
          >
            Number of Slides: &nbsp;
            <input
              type="text"
              name="numSlides"
              v-model="numSlides"
              placeholder="Discuss Things..."
              class="
                mb-6
                shadow-sm
                focus:ring-bg-rrblue-400 focus:border-bg-rrblue-400
                block
                w-full
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </label>
        </tr>
      </tbody>
    </table>

    <div class="mt-4 ml-8">
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
        @click.prevent="onSubmit"
      >
        Submit
      </button>
    </div>
    <Table class="mt-6" :rows="rows" @fetchTableAfterDelete="fetchTable()" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Toggle from "./Toggle.vue";
import Table from "../components/Table.vue";
import { nanoid } from "nanoid";
// import $ from "jquery";
import axios from "axios";
// Loads in the table libraries
export default {
  name: "Lower",
  props: {
    cost: Number,
    employeeNumber: Number,
    minutes: Number,
  },
  components: {
    Toggle,
    Table,
    // VGrid,
  },
  setup(props, context) {
    const powerpoint = ref(false);
    const numSlides = ref(0);
    let rows = ref([]);
    let comment = ref("");
    let title = ref("");

    // Fetch table data from the API
    function fetchTable() {
      axios
        .get("/meetings")
        .then(function (response) {
          let data = response.data;
          // console.log("fetching from Lower");
          rows.value = data;
          // console.log("Rows before fetch: ", rows.value);
          // rows.push(response.data);
          // console.log("response: ", response.data);
          // console.log("rows: ", rows);
        })
        .catch(function (error) {
          console.log("Get Error: ", error);
        });
    }

    // Send data for a new row to the api
    function sendRow(rowVals) {
      axios
        .post("/meetings", rowVals, {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          },
        })
        .then(function (response) {
          // console.log("Successful Response: ", response);
          // console.log("Rows before fetch: ", rows.value);
          fetchTable();
        })
        .catch(function (error) {
          console.log("Post Error: ", error);
        });
    }

    // Gather info upon form submit and call the api post request to push data to api
    function onSubmit() {
      const rowVals = {
        meetingId: nanoid(),
        date: Date.now(),
        employeeNumber: parseInt(props.employeeNumber),
        time: parseInt(props.minutes),
        powerpoint: powerpoint.value,
        powerpointSlides: parseInt(numSlides.value),
        totalCost: parseFloat(props.cost.toFixed(2)),
        comment: comment.value,
        title: title.value,
      };
      console.log("rowvals: ", rowVals);
      sendRow(rowVals);
    }

    onMounted(() => {
      fetchTable();
    });

    return {
      powerpoint,
      numSlides,
      fetchTable,
      rows,
      onSubmit,
      sendRow,
      title,
      comment,
    };
  },
};
</script>

<style>
revo-grid .main-viewport {
  height: 100% !important;
}
</style>
