<template>
  <!-- This is the submitting button to submit the inout from users to the table -->
  <!-- These are all our input fields -->
  <!-- <input v-model.number="meetingId" placeholder="Meeting ID" />
  <input v-model="date" placeholder="Date" />
  <input v-model.number="employeeNumber" placeholder="Employee Number" />
  <input v-model.number="costHr" placeholder="Cost/hr" /> -->
  <div id="app">
    <div class="mt-8">
      <input v-model="id" placeholder="Meeting ID" />
      <!-- <input v-model="employeeNumber" placeholder="Employee Number" /> -->
      <input v-model="time" placeholder="Time" />
      <input v-model="cost" placeholder="Cost" />
      <input v-model="powerpoint" placeholder="Powerpoint true/false" />
      <input v-model="powerpointSlides" placeholder="Powerpoint Slides" />
    </div>
    <div>
      <button
        class="shadow-lg mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-5 rounded"
        @click="submit()"
      >
        Submit
      </button>
      <button
        class="shadow-lg ml-8 mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-5 rounded"
        @click="retrieveTable()"
      >
        Retrieve Table
      </button>
      <button
        class="shadow-lg ml-8 mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-5 rounded"
        @click="addRow()"
      >
        Add Row
      </button>
      <p class="mb-4">Read the about page on how to use</p>
    </div>
    <v-grid
      theme="material"
      :source="rows"
      class="shadow-lg"
      :columns="columns"
      @beforeCellFocus="beforeFocus"
    />
  </div>
</template>

<script>
import VGrid from "@revolist/vue3-datagrid";
import $ from "jquery";
import axios from "axios";
// Loads in the table librarys
let rows = [];
export default {
  name: "Table",
  props: ["employeeNumber", "meetingId", "date", "costHr", "costCalc"],

  data() {

    return {
      table: [],
      errors: [],
      id: "",
      employeeNumber: "",
      time: "",
      cost: "",
      powerpoint: "",
      powerpointSlides: "",
      columns: [
        {
          prop: "meeting",
          name: "Meeting #",
          size: 200,
          sortable: true,
          columnType: "numeric",
        },
        /* {
          prop: 'date',
          name: 'Date',
          columnType: 'date',
          size: 200,
          sortable: true,
        }, */
        {
          prop: "employeeNumber",
          name: "Employee Number",
          size: 200,
          sortable: true,
        },
        {
          prop: "time",
          name: "Time (min)",
          size: 200,
          sortable: true,
        },
        {
          // This is what calls the other componet
          // cellTemplate: VGridVueTemplate(Test),
          prop: "cost",
          name: "Cost (USD)",
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
        // // Delete row from Table
        // {
        //   size: 200,
        //   name: "Delete",
        //   color: "red",
        //   readonly: true,
        //   cellTemplate: (h, props) => {
        //     return h(
        //       "button",
        //       {
        //         onClick: () => doDelete(props.rowIndex),
        //         style: {
        //           color: "red",
        //         },
        //       },
        //       "Delete"
        //     );
        //   },
        // },
      ],
      rows: [{cost:20}],
    };
  },

  // This is the fetch request for the table
  mounted() {
    fetch("http://localhost:8181/table")
      .then((res) => res.json())
      .then((data) => (this.table = data))
      .catch((err) => console.log(err.message));
    // Declares all of the table values form the database
  },
  // Not sure what this does but its make the componet work in the table
  methods: {
    beforeFocus(e) {
      e.preventDefault();
    },

    // This is how you send data from the table. What will need to happen is all the table values will be sent to database on click submit.
    submit() {
      // This is the data being sent to the database we have to use the parseInt function to turn our inputs into integers
      $.ajax({
        url: "http://localhost:8181/table",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
          id: parseInt(this.id),
          employeeNumber: parseInt(this.employeeNumber),
          time: parseInt(this.time),
          cost: parseInt(this.cost),
          powerpoint: this.powerpoint,
          powerpointSlides: parseInt(this.powerpointSlides),
        }),
        dataType: "json",
      });
      /* console.log(
        parseInt(this.id),
        parseInt(this.employeeNumber),
        parseInt(this.time),
        parseInt(this.cost),
        this.powerpoint,
        parseInt(this.powerpointSlides)
      ); */
    },
    addRow() {
      this.rows.push({});
      this.rows = [...this.rows];
      console.log(this.rows)
    },
    retrieveTable() {
      // Retrieve number of rows form sql database
      const tableLength = this.table.length;
      let table = 0;
      while (table < tableLength) {
        this.rows[table]["meeting"] = this.table[table]["id"];
        this.rows[table]["date"] = this.table[table]["date"];
        this.rows[table]["employeeNumber"] = this.table[table][
          "employeeNumber"
        ];
        this.rows[table]["time"] = this.table[table]["time"];
        this.rows[table]["cost"] = this.table[table]["cost"];
        this.rows[table]["powerpoint"] = this.table[table]["powerpoint"];
        this.rows[table]["powerpointSlides"] = this.table[table][
          "powerpointSlides"
        ];
        this.rows.push({});
        this.rows = [...this.rows];
        table++;
      }
    },
  },
  components: {
    VGrid,
  },
};
</script>

<style>
#app {
  height: 500px;
  margin: auto;
  width: 75%;
}
.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}
revo-grid {
  height: 100%;
}
</style>
