export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {},
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
