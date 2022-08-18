<template>
  <!-- <form v-on:submit.prevent="submitForm">
    <div>
        <label for="userId">아이디 :</label>    
        <input id="userId" type="text" v-model="userId" />
    </div>
    <div>
        <label for="password">비밀번호:</label>
        <input id="password" type="password" v-model="password" />
    </div>
    <button type="submit">로그인</button>
  </form> -->
  <li></li>
  <form v-on:signup.prevent="signupForm">
    <div>
      <label for="userId">아이디:</label>
      <input id="userId" type="text" v-model="userId" />
    </div>
    <div>
      <label for="password">비밀번호:</label>
      <input id="password" type="password" v-model="password" />
    </div>
    <div>
      <label for="passwordCheck">비밀번호 체크:</label>
      <input id="passwordCheck" type="password" v-model="passwordCheck" />
    </div>
    <div>
      <label for="nickname">닉네임:</label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button type="signup">회원가입</button>
  </form>
</template>

<script>
import axios from 'axios'
// import {reactive} from 'vue'
export default {
    data() {
        return {
            userId:'',
            password:'',
            userId1:'',
            password1:'',
            passwordCheck:'',
            nickname:'',
        }
    },
    methods:{
        // submitForm() {
        //     console.log(this.userId,this.password)
        //     let url = 'http://13.125.96.150:3000/api/user/login'
        //     let data = {
        //         userId: this.userId,
        //         password: this.password,
        //     }
        //     // 로그인 기능
        //     axios.post(url, data)
        //     .then((res)=> {
        //         console.info(res)
        //         console.log(res)
        //     })
        //     .catch((error)=> {
        //         console.info(error)
        //     })
        // },
        signupForm() {
          console.log(this.userId,this.password,this.passwordCheck,this.nickname)
          let url = 'http://13.125.96.150:3000/api/user/signup'
          let data = {
            userId: this.userId,
            password: this.password,
            passwordCheck: this.passwordCheck,
            nickname : this.nickname
          }
          //회원가입 기능
          axios.post(url, data)
          .then((res)=> {
            console.info(res)
            console.log(res)
          })
          .catch((error)=> {
            console.info(error)
          })
        },
    }
}
</script>

<style>

</style>
