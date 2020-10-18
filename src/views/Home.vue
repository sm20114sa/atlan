<template>
  <div class="container">
    Below is the list of all the assets. <br />
    Please enter the asset name in the search box to filter assets in the treeview.
    <listAssets />
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import listAssets from "@/components/listAssets.vue";

export default {
  name: "Home",
  components: {
    listAssets
  }
};
</script>

<style>
.container {
  height: 80vh;
  overflow-y: hidden;
}
</style>
