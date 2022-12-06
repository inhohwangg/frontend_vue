<template>
  <div class="wrap">
    <div class="header"></div>
    <div class="login-panel">
      <div class="login-part"></div>
      <div class="id-part">
        <form>
          <input
            style="border-radius: 6px; height: 35px"
            v-model="userId"
            type="id"
            placeholder="아이디"
          />
        </form>
      </div>
      <div class="password-part">
        <form>
          <input
            style="border-radius: 6px; height: 35px"
            v-model="password"
            type="password"
            placeholder="비밀번호"
          />
        </form>
      </div>
      <div class="button-part">
        <a
          class="btn btn-primary"
          type="submit"
          v-on:submit.prevent="submitForm"
          @click="$store.commit('testData')"
          >로그인</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
      password: "",
    };
  },
  mounted() {
    console.info(this.$store);
  },
};
</script>

<style>
body {
  margin: 0;
}
.wrap {
  width: 100vw;
  height: 100vh;
  background-color: #f08080;
}
.header {
  width: 100%;
  height: 50px;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.login-panel {
  position: relative;
  width: 25vw;
  height: 70vh;
  margin: auto;
  align-content: center;
  border: 1px solid #f08080;
  border-radius: 8px;
  background-color: white;
}
.login-part {
  position: relative;
  top: 120px;
  width: 80%;
  height: 20vh;
  margin: auto;
  text-align: center;
  align-content: center;
  padding: 90px;
  border-radius: 10px;
  background-image: url("../assets/image/FindBIOS-1.jpg");
  background-position: -20px 220px;
}
.id-part {
  position: relative;
  width: 35%;
  height: 2.8vh;
  top: 170px;
  margin: auto;
}
.password-part {
  position: relative;
  width: 35%;
  height: 2.8vh;
  top: 200px;
  margin: auto;
}
.button-part {
  position: relative;
  width: 15%;
  height: 3vh;
  top: 230px;
  margin: auto;
}
</style>