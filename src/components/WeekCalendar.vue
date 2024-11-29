<template>
  <div>
    <h1>Week Calendar</h1>
    <vc-calendar is-expanded view="week" @dayclick="onDayClick" />
    <div v-if="selectedDate">
      <p>Selected Date: {{ selectedDate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDate: null,
    }
  },
  methods: {
    onDayClick(day) {
      this.selectedDate = day.date // 選択した日付を表示
    },
  },
}
</script>
