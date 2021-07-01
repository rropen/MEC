<template>
  <div class="h-screen">
    <p class="text-bold font-bold pb-4">
      Meeting Efficiency Calculator (MEC)
    </p>
    <p>
        This web application calculates the cost of meetings, and has user inputs to see if powerpoint was used. It then stores that information in a SQL database which can be then calculated to see how much time emplyoee or team spends in meetings. The goal of this application is not to remove meetings, but to put into perspective how much a meeting actually costs.<br><br>
        This is also a proof of concept for deploying applications into the Rolls-Royce Gov cloud. This is the first application deployed to the cloud in Rolls-Royce, using modern software development.<br><br>
        Ex: If you have a meeting with 20 people for 120 min how much does that cost your company? With the valuation of each employee being $140/hr. That meeting will cost 20 * 2hr * 140 = $5600
      </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "About",
    
})
</script>