<template>
  <!-- This is the submitting button to submit the inout from users to the table -->
  <!-- These are all our input fields -->
  <!-- <input v-model.number="meetingId" placeholder="Meeting ID" />
  <input v-model="date" placeholder="Date" />
  <input v-model.number="employeeNumber" placeholder="Employee Number" />
  <input v-model.number="costHr" placeholder="Cost/hr" /> -->
  <div>
    <table class="">
      <tbody>
        <tr class="">
          <td class="">
            <p class="">Total Minutes:</p>
          </td>
          <td class="py-2">
            <!-- <input
              class="rounded-md px-2 ring focus:outline-none"
              type="text"
              v-model="minutes"
              placeholder="Minutes"
            /> -->
            {{ minutes }}
          </td>
        </tr>
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
              class="rounded-md px-2 ring focus:outline-none"
              type="text"
              v-model="numSlides"
              placeholder="Powerpoint Slides"
            />
          </td>
        </tr>
      </tbody>
    </table>

    <!-- <div id="app">
    <div class="mt-8">
      <input v-model="meetingId" placeholder="Meeting ID" />
      <input v-model="employeeNumber" placeholder="Employee Number" />
      <input v-model="time" placeholder="Time" />
      <input v-model="date" placeholder="Date" />
      <input v-model="avgCost" placeholder="Average Cost" />
      <input v-model="totalCost" placeholder="Total Cost" />
      <input v-model="powerpoint" placeholder="Powerpoint true/false" />
      <input v-model="numSlides" placeholder="Powerpoint Slides" />
    </div> -->
    <div class="mt-4">
      <button
        class="delay-100 duration-200 bg-rrblue-400 hover:bg-rrblue-200 text-white font-semibold py-2 px-4 mr-4 rounded-md text-lg focus:outline-none"
        @click="submit()"
      >
        Submit
      </button>
      <!-- <button
        class="delay-100 duration-200 bg-rrblue-400 hover:bg-rrblue-200 text-white font-semibold py-2 px-4 mr-4 rounded-md text-lg focus:outline-none"
        @click="retrieveTable()"
      >
        Retrieve Table
      </button>
      <button
        class="delay-100 duration-200 bg-rrblue-400 hover:bg-rrblue-200 text-white font-semibold py-2 px-4 rounded-md text-lg focus:outline-none"
        @click="addRow()"
      >
        Add Row
      </button> -->
      <!-- <p class="text-rrgrey-600 mt-4">Read the about page on how to use</p> -->
    </div>
    <v-grid class="mt-16" theme="material" :source="rows" :columns="columns" />
  </div>
</template>

<script>
import VGrid from "@revolist/vue3-datagrid";
import { ref, onMounted } from "vue";
import Toggle from "../components/Toggle.vue";
import { nanoid } from "nanoid";
// import $ from "jquery";
import axios from "axios";
// Loads in the table libraries
export default {
  name: "Table",
  props: {
    cost: Number,
    employeeNumber: Number,
    minutes: Number,
  },
  components: {
    Toggle,
    VGrid,
  },
  setup(props, context) {
    const powerpoint = ref(false);
    const numSlides = ref(0);
    const columns = ref([
      {
        prop: "meetingId",
        name: "Meeting ID",
        size: 200,
        sortable: true,
      },
      {
        prop: "date",
        name: "Date",
        columnType: "date",
        size: 200,
        sortable: true,
      },
      {
        prop: "employeeNumber",
        name: "Employee Number",
        size: 200,
        sortable: true,
      },
      {
        prop: "time",
        name: "Minutes (min)",
        size: 200,
        sortable: true,
      },
      {
        //   // This is what calls the other componet
        // cellTemplate: VGridVueTemplate(Test),
        prop: "avgCost",
        name: "Average Cost (USD)",
        size: 200,
        sortable: true,
      },
      {
        prop: "powerpoint",
        name: "Powerpoint (Yes/No)",
        size: 200,
      },
      {
        prop: "powerpointSlides",
        name: "Powerpoint Slides",
        size: 200,
        sortable: true,
      },
      {
        prop: "totalCost",
        name: "Total Cost (USD)",
        size: 200,
        sortable: true,
      },
    ]);
    let rows = ref([]);

    // Fetch table data from the API
    function fetchTable() {
      axios
        .get("/table")
        .then(function (response) {
          let data = response.data;
          rows.value = data;
          // rows.push(response.data);
          // console.log("response: ", response.data);
          // console.log("rows: ", rows);
        })
        .catch(function (error) {
          console.log("fetch error: ", error);
        });
    }

    onMounted(() => {
      fetchTable();
    });

    console.log("cols: ", columns);
    console.log("rows: ", rows);
    return { powerpoint, numSlides, columns, fetchTable, rows };
  },
  // data() {
  //   return {
  //     table: [],
  //     errors: [],
  //     employeeNumber: "",
  //     minutes: "",
  //     // cost: "",
  //     powerpoint: false,
  //     numSlides: "",
  //     meetingId: "",
  //     date: "",
  //     avgCost: "",
  //     totalCost: "",

  // mounted() {
  //   fetch("http://localhost:8181/table")
  //     .then((res) => res.json())
  //     .then((data) => (this.table = data))
  //     .catch((err) => console.log(err.message));

  //   // Declares all of the table values form the database
  // },

  // Not sure what this does but its make the componet work in the table
  // methods: {
  //   beforeFocus(e) {
  //     e.preventDefault();
  //   },

  // //   // This is how you send data from the table. What will need to happen is all the table values will be sent to database on click submit.
  //   const submit = () => {
  //     // This is the data being sent to the database we have to use the parseInt function to turn our inputs into integers
  //     $.ajax({
  //       url: "http://localhost:8181/table",
  //       type: "POST",
  //       contentType: "application/json",
  //       data: JSON.stringify({
  //         id: nanoid(),
  //         employeeNumber: parseInt(this.employeeNumber),
  //         minutes: parseInt(this.minutes),
  //         cost: parseFloat(this.cost),
  //         meetingId: parseInt(this.meetingId),
  //         employeeNumber: parseInt(this.employeeNumber),
  //         time: parseInt(this.time),
  //         date: parseInt(this.date),
  //         totalCost: parseInt(this.totalCost),
  //         avgCost: parseInt(this.avgCost),
  //         powerpoint: this.powerpoint,
  //         numSlides: parseInt(this.numSlides),
  //       }),
  //       dataType: "json",
  //     });
  //     console.log(
  //       parseInt(this.meetingId),
  //       parseInt(this.employeeNumber),
  //       parseInt(this.minutes),
  //       parseInt(this.cost),
  //       parseInt(this.time),
  //       parseInt(this.date),
  //       parseInt(this.avgCost),
  //       parseInt(this.totalCost),
  //       this.powerpoint,
  //       parseInt(this.numSlides)
  //     );
  //   },
  //   addRow() {
  //     this.rows.push({});
  //     this.rows = [...this.rows];
  //     console.log(this.rows);
  //   },
  //   retrieveTable() {
  //     // Retrieve number of rows form sql database
  //     const tableLength = this.table.length;
  //     let table = 0;
  //     while (table < tableLength) {
  //       this.rows[table]["meetingId"] = this.table[table]["meetingId"];
  //       this.rows[table]["date"] = this.table[table]["date"];
  //       this.rows[table]["employeeNumber"] = this.table[table][
  //         "employeeNumber"
  //       ];
  //       this.rows[table]["minutes"] = this.table[table]["minutes"];
  //       this.rows[table]["cost"] = this.table[table]["cost"];
  //       // this.rows[table]["employeeNumber"] = this.table[table][
  //       //   "employeeNumber"
  //       // ];
  //       this.rows[table]["time"] = this.table[table]["time"];
  //       this.rows[table]["avgCost"] = this.table[table]["avgCost"];
  //       this.rows[table]["totalCost"] = this.table[table]["totalCost"];
  //       this.rows[table]["powerpoint"] = this.table[table]["powerpoint"];
  //       this.rows[table]["numSlides"] = this.table[table][
  //         "numSlides"
  //       ];
  //       this.rows.push({});
  //       this.rows = [...this.rows];
  //       table++;
  //     }
  //   },
  // },
  // components: {
  //   VGrid,
  // },
};
</script>

<style>
/* #app {
  height: 500px;
  margin: auto;
  width: 75%;
}
.center {
  margin: auto;
  width: 50%;
  padding: 10px;
} */
revo-grid .main-viewport {
  height: 100% !important;
}
</style>
