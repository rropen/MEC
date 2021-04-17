<template>
  <div>
    <apexchart
      width="500"
      type="bar"
      :options="chartOptions"
      :series="series"
      class="mt-20 mb-20 shadow-lg"
    ></apexchart>
  </div>
</template>

<script>
export default {
  props: ['costCalc'],
  data: () => ({
    chartOptions: {
      chart: {
        id: 'vuechart-example',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91],
      },
    ],
  }),
};
</script>

<style></style>
