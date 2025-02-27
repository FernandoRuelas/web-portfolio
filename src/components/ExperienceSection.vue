<template>
  <div class="mt-5">
    <h1 class="text-1-subtitle mb-10" data-aos="fade-up">{{ $t("experience") }}</h1>

    <v-timeline data-aos="fade-up">
      <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small>
        <template v-slot:opposite>
          <span :class="`headline font-weight-bold ${year.color}--text`"> {{ year.year }} - {{ year.endYear }}</span>
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
            {{ year.title }}
          </h2>
          <div>
            {{ year.description }}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import "../style/GeneralStyle.css";
export default {
  data: () => ({}),
  computed: {
    years() {
      return [
        {
          color: "cyan",
          year: "2019",
          endYear: "2023",
          title: this.$t("schoolProjects"),
          description: this.$t("schoolDes"),
        },
        {
          color: "orange",
          year: "2023",
          endYear: "2023",
          title: this.$t("Interchip"),
          description: this.$t("internshipDes"),
        },
        {
          color: "green",
          year: "2023",
          endYear: "Present",
          title: this.$t("work"),
          description: this.$t("workDes"),
        },
      ];
    },
  },
};
</script>
