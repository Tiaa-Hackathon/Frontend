<template>
  <div class="checkbox-container">
    <v-checkbox
      v-for="(item, index) in items"
      :key="index"
      :label="item.label"
      :value="item.value"
      v-model="checkedItems"
      @change="handleCheckboxClick"
      class="checkbox-item"
      color="primary"
      dense
    ></v-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { label: 'Technology', value: 'Technology' },
        { label: 'Economics', value: 'Economics' },
        { label: 'Lifestyle', value: 'Lifestyle' },
        { label: 'Politics', value: 'Politics' },
        { label: 'Food', value: 'Food' },
        {label: 'Sports', value: 'Sports'}
      ],
      checkedItems: [],
    };
  },
  methods: {
    handleCheckboxClick() {
      this.$emit('checkbox-click', this.checkedItems);
    },
  },
};
</script>

<style scoped>
.checkbox-container {
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  margin-top: 20px;
}

.checkbox-item {
  margin-right: 1rem;
  padding: 0.5rem;
}
</style>