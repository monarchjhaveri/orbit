export default class IncrementEvent {
  process(state) {
    const val = state.val;

    return {
      val: {$set: val + 1}
    }
  }
}
