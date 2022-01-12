<template>
  <label class="control control-checkbox">
    <span class="control-checkbox-txt">{{ title }}</span>
    <input
      type="checkbox"
      checked="checked"
      @input="$emit('input', $event.target.checked)"
    />
    <div class="control_indicator"></div>
  </label>
</template>

<script>
export default {
  props: ['title']
}
</script>
