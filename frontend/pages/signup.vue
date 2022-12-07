<template>
  <div class="wrap">
    <div class="header"></div>
    <div class="login-panel">
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
        <button class="btn"><span>완료</span></button>
      </div>
      <div class="button-part">
        <button style="margin-top: 20px; border-radius: 5px" class="btn2">
          <span @click="back">취소</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userId: "",
      password: "",
      mode: false,
    };
  },
  mounted() {
    console.info(this.$store);
  },
  methods: {
    back() {
      this.$router.back();
    },
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
.btn {
  border: none;
  display: block;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  background-color: #222;
  padding: 10px 10px 10px 10px;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
.btn span {
  position: relative;
  z-index: 1;
}

.btn:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 140%;
  width: 110%;
  background: #78c7d2;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
  transform: translateX(-98%) translateY(-25%) rotate(45deg);
}

.btn:hover:after {
  -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
  transform: translateX(-9%) translateY(-25%) rotate(45deg);
}
.btn2 {
  border: none;
  display: block;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  background-color: #222;
  padding: 10px 10px 10px 10px;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
.btn2 span {
  position: relative;
  z-index: 1;
}

.btn2:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 140%;
  width: 90%;
  background: #78c7d2;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
  transform: translateX(-98%) translateY(-25%) rotate(45deg);
}

.btn2:hover:after {
  -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
  transform: translateX(-9%) translateY(-25%) rotate(45deg);
}
</style>