<template>
  <div>
    <table class="">
      <tbody>
        <tr>
          <td class="pr-4"><p>Was PowerPoint Used?</p></td>
          <td class="py-2">
            <Toggle v-model="powerpoint"></Toggle>
          </td>
        </tr>
        <tr v-show="powerpoint">
          <td><p>Number of Slides:</p></td>
          <td class="py-2">
            <input
              class="rounded-md px-2 ring focus:outline-none mb-2"
              type="text"
              v-model="numSlides"
              placeholder="Powerpoint Slides"
            />
          </td>
        </tr>
        <tr>
          <td class="pr-4"><p>Meeting Title:</p></td>
          <td class="py-2">
            <input
              class="rounded-md px-2 ring focus:outline-none mb-2"
              type="text"
              v-model="title"
              placeholder="Discuss Things..."
            />
          </td>
        </tr>
        <tr>
          <td class="pr-4"><p>Comment:</p></td>
          <td class="py-2">
            <textarea
              class="rounded-md px-2 ring focus:outline-none w-60"
              v-model="comment"
              rows="3"
              placeholder="Lorem Ipsum..."
            />
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-4">
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
          mr-4
          rounded-md
          text-lg
          focus:outline-none
        "
        @click.prevent="onSubmit"
      >
        Submit
      </button>
    </div>
    <Table class="mt-20" :rows="rows" />
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
        .post("/meeting", rowVals, {
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
