<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col">
    <div
      class="
        grid
        justify-items-center
        mb-6
        float-right
        flex-col
        text-rrpink-600
        font-semibold
      "
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
    <DataTable
      id="dataTable"
      :value="rows"
      stripedRows
      :paginator="true"
      :rows="10"
      autoLayout
      sortField="time"
      :sortOrder="-1"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :rowsPerPageOptions="[10, 20, 50]"
      responsiveLayout="scroll"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
    >
      <Column field="meetingId" header="Meeting ID" :hidden="true"></Column>
      <Column id="titleField" field="title" header="Title"></Column>
      <Column
        field="meetingGroup"
        header="Meeting Group"
        :sortable="true"
      ></Column>

      <Column field="date" header="Date" :sortable="true">
        <template #body="slotProps">
          {{ filters.formatDate(slotProps.data.date) }}
        </template></Column
      >
      <Column
        field="employeeNumber"
        header="Employees"
        :sortable="true"
      ></Column>
      <Column field="time" header="Minutes" :sortable="true"></Column>
      <Column
        field="powerpointSlides"
        header="# Slides"
        :sortable="true"
      ></Column>
      <Column field="comment" header="Comment"></Column>
      <Column field="groupCost" header="Group Cost" :sortable="true">
        <template #body="slotProps">
          ${{ slotProps.data.groupCost.toFixed(2) }}
        </template></Column
      >
      <Column field="totalCost" header="Individual Cost" :sortable="true">
        <template #body="slotProps">
          ${{ slotProps.data.totalCost.toFixed(2) }}
        </template></Column
      >
      <Column field="meetingId" header="Delete">
        <template #body="slotProps">
          <Button
            id="deleteButton"
            icon="pi pi-trash"
            class="p-button-rounded p-button-danger"
            @click="confirmDeleteRow(slotProps.data)"
          ></Button>
        </template>
      </Column>
    </DataTable>
    <teleport to="#modals">
      <DeleteDialog
        v-if="deleteRowDialog"
        @close="deleteRowDialog = false"
        @confirmed="deleteConfirmed()"
      >
      </DeleteDialog>
    </teleport>
  </div>
</template>

<script lang="ts" setup>
import filters from "../filters";
import { meetingItem } from "../types";
import { computed, ref, PropType } from "vue";
import DeleteDialog from "../components/DeleteDialog.vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import axios from "axios";

const props = defineProps({
  rows: {
    type: Array as PropType<meetingItem[]>,
  },
});
const emits = defineEmits(["fetchTableAfterDelete"]);

const rowToDelete = ref<meetingItem>();
const deleteRowDialog = ref(false);

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

const confirmDeleteRow = (rowData) => {
  rowToDelete.value = rowData;
  deleteRowDialog.value = true;
};

// Send an API call to delete the previously marked row from the database
function deleteConfirmed() {
  axios
    .delete("/meetings/" + rowToDelete.value.meetingId)
    .then(function (response) {
      emits("fetchTableAfterDelete");
      deleteRowDialog.value = false;
    })
    .catch(function (error) {
      console.log("Delete Error: ", error);
    });
}
</script>
<style>
@import "primevue/resources/themes/saga-blue/theme.css";
@import "primevue/resources/primevue.min.css";
@import "primeicons/primeicons.css";

.pi-refresh,
.pi-cloud {
  display: none;
}
.p-paginator-current {
  padding-bottom: 5px;
}

.p-button.p-button-danger,
.p-buttonset.p-button-danger > .p-button,
.p-splitbutton.p-button-danger > .p-button {
  background: #e21d60 !important;
  border: 1px solid #e21d60 !important;
}
</style>
