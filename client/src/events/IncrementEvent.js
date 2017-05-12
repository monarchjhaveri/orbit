export default class IncrementEvent {
  // constructor(...payload) {
  //   this.payload = payload;
  // }

  process(state) {
    const val = state.val;

    return {
      val: {$set: val + 1}
    }
  }
}
