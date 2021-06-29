<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col mb-6">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div
        class="
          py-2
          mx-auto
          align-middle
          inline-block
          min-w-full
          sm:px-6
          lg:px-8
        "
      >
        <div
          class="
            shadow
            overflow-hidden
            border-b border-rrgrey-200
            sm:rounded-lg
          "
        >
          <table class="min-w-full divide-y divide-rrgrey-200">
            <thead class="bg-rrgrey-300">
              <tr>
                <!-- <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-rrgrey-800
                    uppercase
                    tracking-wider
                  "
                >
                  Meeting ID
                </th> -->
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-rrgrey-800
                    uppercase
                    tracking-wider
                  "
                >
                  Title
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-rrgrey-800
                    uppercase
                    tracking-wider
                  "
                >
                  Comment
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-rrgrey-800
                    uppercase
                    tracking-wider
                  "
                >
                  Date
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-rrgrey-800
                    uppercase
                    tracking-wider
                  "
                >
                  Employees
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-rrgrey-800
                    uppercase
                    tracking-wider
                  "
                >
                  Minutes
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-rrgrey-800
                    uppercase
                    tracking-wider
                  "
                >
                  PowerPoint
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-rrgrey-800
                    uppercase
                    tracking-wider
                  "
                >
                  # Slides
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-rrgrey-800
                    uppercase
                    tracking-wider
                  "
                >
                  Cost
                </th>
                <!-- <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-rrgrey-800
                    uppercase
                    tracking-wider
                  "
                >
                  Delete
                </th> -->
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, rowIdx) in rows"
                :key="row.meetingId"
                :class="rowIdx % 2 === 0 ? 'bg-white' : 'bg-rrgrey-200'"
              >
                <td class="px-6 py-4 whitespace-nowrap text-sm text-rrgrey-800">
                  {{ row.title }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-rrgrey-800">
                  {{ row.comment }}
                </td>
                <!-- <td class="px-6 py-4 whitespace-nowrap text-sm text-rrgrey-800">
                  {{ row.meetingId }}
                </td> -->
                <td class="px-6 py-4 whitespace-nowrap text-sm text-rrgrey-800">
                  {{ filters.formatDate(row.date) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-rrgrey-800">
                  {{ row.employeeNumber }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-rrgrey-800">
                  {{ row.time }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-rrgrey-800">
                  {{ row.powerpoint }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-rrgrey-800">
                  {{ row.powerpointSlides }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-rrgrey-800">
                  $&nbsp;{{ row.totalCost }}
                </td>
                <!-- <td class="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                  <button @click="deleteRow">Delete</button>
                </td> -->
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="float-right flex flex-col pt-4 text-rrpink-600 font-semibold"
        >
          <!-- <p>Total Stored Meeting Cost: ${{ totalCost.toFixed(2) }}</p> -->
          <p v-show="macbookpros != 0">
            Opportunity Cost - MacBook Pros: {{ macbookpros }}
          </p>
          <p v-show="azuremonth != 0">
            Opportunity Cost - Months of Paid Azure App Service:
            {{ azuremonth }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import filters from "../filters";
import { computed } from "vue";

export default {
  name: "Table",
  props: {
    rows: Array,
  },
  setup(props) {
    const totalCost = computed(() => {
      var total = 0;
      for (var i = 0; i < props.rows.length; i++) {
        total = total + props.rows[i].totalCost;
      }
      return total;
    });
    const macbookpros = computed(() => {
      let num = totalCost.value / 2700;
      if (num > 1) {
        return num.toFixed(0);
      } else {
        return 0;
      }
    });
    const azuremonth = computed(() => {
      let num = totalCost.value / 15;
      if (num > 1) {
        return num.toFixed(0);
      } else {
        return 0;
      }
    });
    // const deleteRow = computed(() => {
    //   console.log("I was clicked")
    //   console.log(props.rows.length)
    //   return 0;
    // })
    return { filters, totalCost, macbookpros, azuremonth };
  },
};
</script>
