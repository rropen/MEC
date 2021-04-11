<template>
  <!-- This is the submitting button to submit the inout from users to the table -->
  <!-- These are all our input fields -->
  <!-- <input v-model.number="meetingId" placeholder="Meeting ID" />
  <input v-model="date" placeholder="Date" />
  <input v-model.number="employeeNumber" placeholder="Employee Number" />
  <input v-model.number="costHr" placeholder="Cost/hr" /> -->
  <div>
    <button
      class="shadow-lg mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-5 rounded"
      @click="submit()"
    >
      Submit
    </button>
    <button
      class="shadow-lg ml-8 mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-5 rounded"
      @click="addRow()"
    >
      Add Row
    </button>
    <p class="mb-4">
      Click Start to time your meeting. Then fill out table and press Submit.
    </p>
  </div>
  <v-grid
    theme="material"
    :source="rows"
    class="shadow-lg"
    :columns="columns"
    @beforeCellFocus="beforeFocus"
  />
</template>

<script>
// Loads in the table libraryss
import VGrid, { VGridVueTemplate } from '@revolist/vue3-datagrid';
export default {
  name: 'Table',
  props: ['employeeNumber', 'meetingId', 'date', 'costHr', 'costCalc'],

  name: 'App',
  data() {
    return {
      columns: [
        {
          prop: 'meeting',
          name: 'Meeting #',
          size: 200,
        },
        {
          prop: 'date',
          name: 'Date',
          columnType: 'date',
          size: 200,
        },
        {
          prop: 'employeeNumber',
          name: 'Employee Number',
          size: 200,
        },
        {
          prop: 'time',
          name: 'Time (min)',
          size: 200,
        },
        {
          // This is what calls the other componet
          // cellTemplate: VGridVueTemplate(Test),
          prop: 'cost',
          name: 'Cost (USD)',
          size: 200,
        },
        {
          prop: 'powerpoint',
          name: 'Powerpoint (Yes/No)',
          size: 200,
        },
        {
          prop: 'powerpointSlides',
          name: 'Powerpoint Slides',
          size: 200,
        },
      ],
      rows: [],
    };
  },
  // Not sure what this does but its make the componet work in the table
  methods: {
    beforeFocus(e) {
      e.preventDefault();
    },
    // This is how you query data from the table. What will need to happen is all the table values will be sent to database on click submit.
    submit() {
      console.log(this.rows[0]['meeting']);
      console.log(this.rows[0]['date']);
      console.log(this.rows[0]['employeeNumber']);
      console.log(this.rows[0]['time']);
      console.log(this.rows[0]['cost']);
      console.log(this.rows[0]['powerpoint']);
      console.log(this.rows[0]['powerpointSlides']);
      console.log(this.x);
    },
    todaysDate() {
      var today = new Date();
      var date =
        today.getFullYear() +
        '/' +
        (today.getMonth() + 1) +
        '/' +
        today.getDate();
      document.write(date);
    },
    addRow() {
      this.rows.push({});
      this.rows = [...this.rows];
      console.log(this.rows);
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
