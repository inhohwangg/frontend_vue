<template>
  <form @:submit.prevent="submitForm">
    <div>
        <label for="userId">아이디 :</label>    
        <input id="userId" type="text" v-model="userId">
    </div>
    <div>
        <label for="password">비밀번호:</label>
        <input id="password" type="text" v-model="password">
    </div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
import axios from 'axios'
import {reactive} from 'vue'
export default {
    data() {
        return {
            userId:'',
            password:'',
        }
    },
    methods:{
        submitForm() {
            console.log(this.userId,this.password)
            let data = {
                userId: this.userId,
                password: this.password,
            }
            axios.post('/api/user/login', data)
            .then((res)=> {
                console.info(res)
            })
            .catch((error)=> {
                console.info(error)
            })
        }
    }
}
</script>

<style>

</style>

<template>
  <div id="app">
    <div v-if="state.login.userId">안녕하세요? {{ state.login.name }}님!</div>
    <div v-else>
      <form for="userId">
        <span>아이디</span>
        <input type="text" id="userId" v-model="userId" />
      </form>
      <form for="password">
        <span>패스워드</span>
        <input type="password" id="password" v-model="password" />
      </form>
      <hr />
      <button @click="submit()">로그인</button>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {
  data() {
    return {
      userId:'',
      password:'',
    }
  },
  setup() {
    const state = reactive({
      login: {
        userId: null,
        password: "",
      },
      form: {
        userId: "",
        password: "",
      },
    });
    methods:{
      
    },
    const submit = () => {
      const args = {
        loginId: state.form.userId,
        loginPw: state.form.password,
      };
      axios
        .post("/api/user/login", args)
        .then((res) => {
          alert("로그인에 성공했습니다.");
          state.login = res.data;
        })
        .catch((error) => {
          alert("로그인에 실패했습니다. 계정 정보를 확인해주세요.");
          console.info(error)
        });
    };
    axios.get('/')
    .then(()=> {
      console.info('axios 작동 OK')
    })
    .catch((error)=> {
      console.info(error)
    })
    // 로그인 기능
    axios.post('/api/user/login', {
      userId: 'test1234',
      password: '#test159'
    })
    .then((res)=> {
      console.info(res)
    })
    .catch((error)=> {
      console.info(error)
    })
    // 회원가입 기능
    // axios.post('/api/user/signup', {
    //   userId: 'test1234',
    //   password:'#test159',
    //   passwordCheck:'#test159',
    //   nickname:'윤석일'
    // })
    // .then((res)=> {
    //   console.info(res)
    // })
    // .catch((error)=> {
    //   console.info(error)
    // })
    return { state, submit };
  },
};
</script>

<style></style>