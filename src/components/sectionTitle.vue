<template>
  <div class="row">
    <div class="col-12">
      <h5 class="section__title">
        <slot />
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'secionTitle'
}
</script>

<style>
  .section__title {
    margin-left: 8px;
    margin-right: 8px;
    margin: 20px;
    text-align: center;
  }
</style>
