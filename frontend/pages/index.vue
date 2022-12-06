<template>
  <div class="header">
    <div>
      <div>로그인</div>
      <div>
        <input type="id" />
      </div>
      <div>
        <input type="password" />
        <button @click="$store.commit('increment')">
          {{ $store.state.counter }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  margin: 0;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
</style>