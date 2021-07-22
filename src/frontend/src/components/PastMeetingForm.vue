<template>
  <div
    @keyup.esc="onCancel"
    class="
      modal-bg
      flex
      items-center
      justify-center
      fixed
      bg-opacity-75
      left-0
      bottom-0
      w-full
      h-full
      bg-rrgrey-900
      py-12
    "
    tabindex="0"
  >
    <div
      class="
        bg-white
        h-full
        rounded-lg
        w-8/12
        px-4
        py-4
        flex flex-col
        items-center
        overflow-auto
      "
    >
      <div class="mx-auto h-full w-10/12">
        <header class="text-rrgrey-900 font-medium text-2xl mb-2 mt-12">
          <h3 class="text-center">Past Meeting Entry</h3>
          <p class="text-rrgrey-600 text-lg text-center">
            Please add the details for a past meeting you've attended:
          </p>
        </header>
        <main class="text-rrgrey-800 text-lg">
          <Form
            class="flex flex-col w-1/2 mx-auto"
            @submit="onSubmit"
            :validation-schema="schema"
          >
            <label class="" :class="labelClasses" for="title"
              >Meeting Title</label
            >
            <Field
              class=""
              name="title"
              id="title"
              type="text"
              :class="fieldClasses"
              v-model="title"
            ></Field>
            <ErrorMessage :class="errorClasses" name="title" />
            <label class="" :class="labelClasses" for="meetingDate"
              >Meeting Date</label
            >
            <Field
              class=""
              name="meetingDate"
              id="meetingDate"
              type="date"
              :class="fieldClasses"
              v-model="meetingDate"
            ></Field>
            <ErrorMessage :class="errorClasses" name="meetingDate" />
            <label class="" :class="labelClasses" for="comment">Comment</label>
            <Field
              class=""
              name="comment"
              id="comment"
              type="text"
              :class="fieldClasses"
              v-model="comment"
            ></Field>
            <ErrorMessage :class="errorClasses" name="comment" />
            <label class="" :class="labelClasses" for="employeeNumber"
              >Number of Employees</label
            >
            <Field
              class=""
              name="employeeNumber"
              id="employeeNumber"
              type="text"
              :class="fieldClasses"
              v-model="employeeNumber"
            ></Field>
            <ErrorMessage :class="errorClasses" name="employeeNumber" />
            <label class="" :class="labelClasses" for="minutes"
              >Meeting Length (min)</label
            >
            <Field
              class=""
              name="minutes"
              id="minutes"
              type="text"
              :class="fieldClasses"
              v-model="minutes"
            ></Field>
            <ErrorMessage :class="errorClasses" name="minutes" />
            <label class="mt-3" for="powerpoint" :class="labelClasses"
              >Was PowerPoint Used?</label
            >
            <Toggle
              :powerpoint="powerpoint"
              @click="powerpoint = !powerpoint"
              :class="fieldClasses"
            ></Toggle>
            <label
              v-show="powerpoint"
              class=""
              :class="labelClasses"
              for="numSlides"
              >Number of Slides</label
            >
            <Field
              v-show="powerpoint"
              class=""
              name="numSlides"
              id="numSlides"
              type="text"
              :class="fieldClasses"
              v-model="numSlides"
            ></Field>
            <ErrorMessage
              v-show="powerpoint"
              :class="errorClasses"
              name="numSlides"
            />
            <div class="flex flex-row justify-center mt-10">
              <button
                @click="onSubmit"
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
              >
                Submit
              </button>
              <button
                @click="onCancel"
                class="
                  delay-100
                  duration-200
                  ml-3
                  bg-transparent
                  hover:bg-rrgrey-400
                  text-rrblue-400 text-lg
                  hover:text-white
                  py-2
                  px-4
                  ring-1 ring-rrblue-400
                  hover:ring-rrgrey-600 hover:border-transparent
                  rounded-md
                  focus:outline-none
                "
              >
                Cancel
              </button>
            </div>
          </Form>
          <div>
            <h3 class="text-rrpink-600 font-semibold float-right">
              Meeting Cost: ${{ cost.toFixed(2) }}
            </h3>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Toggle from "../components/Toggle.vue";
import { defineComponent, ref, computed } from "vue";
import { Field, Form, ErrorMessage } from "vee-validate";
import { object, string, number, date } from "yup";
import { nanoid } from "nanoid";
import axios from "axios";
export default defineComponent({
  name: "PastMeetingForm",
  components: { Field, Form, ErrorMessage, Toggle },
  setup(_, { emit }) {
    const employeeNumber = ref(3);
    const minutes = ref(4);
    const powerpoint = ref(false);
    const numSlides = ref(0);
    const comment = ref("");
    const title = ref("");
    const costRate = ref(135); // $135/hr/employee
    const meetingDate = ref("");

    const labelClasses = {
      "mb-0": true,
      "mt-8": true,
    };
    const errorClasses = {
      "text-rrpink-400": true,
      "font-medium": true,
      "mt-0: true": true,
    };
    const fieldClasses = {
      "mt-0": true,
      "rounded-md": true,
    };

    // Pass validation schema to form fields
    const schema = object().shape({
      employeeNumber: number()
        .integer()
        .required()
        .label("Number of Employees"),
      minutes: number().required().integer().label("Meeting Length"),
      meetingDate: date().required(),
      numSlides: number().integer().label("Number of Slides"),
      cost: number().required().label("Cost"),
      comment: string().label("Comment"),
      title: string().label("Title"),
    });

    const cost = computed(() => {
      return (employeeNumber.value * minutes.value * costRate.value) / 60;
    });

    const onCancel = () => {
      emit("close");
    };

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
          emit("updateTable");
        })
        .catch(function (error) {
          console.log("Post Error: ", error);
        });
      emit("close");
    }

    // Gather info upon form submit and call the api post request to push data to api
    function onSubmit() {
      const rowVals = {
        meetingId: nanoid(),
        date: Date.parse(meetingDate.value),
        employeeNumber: parseInt(employeeNumber.value),
        time: parseInt(minutes.value),
        powerpoint: powerpoint.value,
        powerpointSlides: parseInt(numSlides.value),
        totalCost: parseFloat(cost.value.toFixed(2)),
        comment: comment.value,
        title: title.value,
      };
      // console.log("rowvals: ", rowVals);
      sendRow(rowVals);
    }

    return {
      onCancel,
      onSubmit,
      schema,
      labelClasses,
      errorClasses,
      fieldClasses,
      employeeNumber,
      meetingDate,
      minutes,
      powerpoint,
      numSlides,
      comment,
      title,
      cost,
    };
  },
});
</script>
