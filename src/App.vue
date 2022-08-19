<template>
  <form v-on:submit.prevent="submitForm">
    <div>
        <label for="userId">아이디 :</label>    
        <input id="userId" type="text" v-model="userId" />
    </div>
    <div>
        <label for="password">비밀번호:</label>
        <input id="password" type="password" v-model="password" />
    </div>
    <button type="submit">로그인</button>
    <p>{{token}} 토큰입니당</p>
  </form>
  <li></li>
  <form v-on:submit.prevent="signupForm">
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

  <!-- 메인페이지 기능 -->
  <form v-on:submit.prevent="mainPage" v-for="(a,i) in postRead" :key="i">
    <p>{{a.postId}}</p>
    <button type="mainPage">메인페이지 Test</button>
  </form>

  <!-- 로그인 체크기능 -->
  <form v-on:submit.prevent="getAccountInfo">
    <button type="getAccountInfo">로그인체크</button>
  </form>

  <!-- 게시글 생성 -->
  <form v-on:submit.prevent="postCreate">
    <label for="title">제목 :</label>
    <input id="title" type="text" v-model="title" />
    <label for="content">내용 :</label>
    <input id="content" type="text" v-model="content" />
    <button type="postCreate">게시글 생성</button>
  </form>

  <!-- 게시글 수정 -->
  <form v-on:submit.prevent="postEdit">
    <label for="editTitle">제목수정 : </label>
    <input id="editTitle" type="text" v-model="editTitle" />
    <label for="editContent">내용 : </label>
    <input id="editContent" type="text" v-model="editContent" />
    <button type="postEdit">게시글 수정</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            userId:'',
            password:'',
            userId1:'',
            password1:'',
            passwordCheck:'',
            nickname:'',
            token:'',
            title:'',
            content:'',
            editTitle:'',
            editContent:'',
            postId:'',
            postRead:[],
        }
    },
    mounted() {
      this.mainPage()
    },
    methods:{
        submitForm() {
            // console.log(this.userId,this.password)
            let url = 'http://13.125.96.150:3000/api/user/login'
            // let url2 = 'http://13.125.96.150:3000/api/user/islogin'
            let data = {
                userId: this.userId,
                password: this.password,
            }
            // let instance = axios.create({
            //   headers:{
            //     post:{
            //       header1 : 'value'
            //     }
            //   }
            // })
            // let headers = {
            //   'Authorization':`Bearer ${this.token}`
            // }
            // 로그인 기능
            axios.post(url, data)
            .then((res)=> {
              let token = res.data.token
              localStorage.setItem('access_token', token)
              console.log(res.data)
              console.log('로그인 성공')
            })
            .catch((error)=> {
              console.log(error,'로그인 실패')
            })
            // 로그인 체크 기능
            // axios.get(url2, {
            //   headers:{
            //     'X-AUTH-TOKEN':token
            //   }
            // })
            // .then((res)=> {
            //   console.info(res)
            //   console.log('로그인 체크 기능 성공')
            // })
            // .catch((error)=> {
            //   console.log(error,'로그인 체크 기능 실패....')
            // })
        },
        getAccountInfo() {
          let url = 'http://13.125.96.150:3000/api/user/islogin'
          let token = localStorage.getItem('access_token')
          axios.get(url, {
            headers:{
              "Authorization":`Bearer ${token}`
            }
          })
          .then((res)=> {
            console.info(res)
            console.log('로그인 체크 성공')
          })
          .catch((error)=> {
            console.log(error)
          })
        },
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
            console.info(res)
          })
          .catch((error)=> {
            console.info(error)
          })
        },
        mainPage() {
          let url = 'http://13.125.96.150:3000/api/post/main'
          axios.get(url)
          .then((res)=> {
            this.postRead = res.data.post
            console.info(res)
          })
          .catch((error)=> {
            console.info(error)
          })
        },
        postCreate() {
          const url = 'http://13.125.96.150:3000/api/post/write'
          const token = localStorage.getItem('access_token')
          const data = {
            title:this.title,
            content:this.content,
          }
          axios.post(url, data, {
            headers:{
              "Authorization":`Bearer ${token}`
            }
          })
          .then((res)=> {
            console.info(res.data.postId)
            console.info('게시글 생성 완료')
          })
          .catch((error)=> {
            console.info(error,'게시글 생성 오류')
          })
        },
        // postRead() {
        //   const url = 'http://13.125.96.150:3000/api/post/main'
        //   axios.get(url)
        //   .then((res)=> {
        //     this.postRead = res.data.post[0]
        //     console.info(res)
        //   })
        //   .catch((error)=> {
        //     console.info(error)
        //   })
        // },
        postEdit(postId) {
          const url = 'http://13.125.96.150:3000/api/post/edit'
          const token = localStorage.getItem('access_token')
          const data = {
            editTitle:this.editTitle,
            editContent:this.editContent,
            postId:postId
          }
          axios.patch(url, data, {
            headers:{
              "Authorization":`Bearer ${token}`
            }
          })
          .then((res)=> {
            console.info(res)
            console.info('게시글 수정 완료')
          })
          .catch((error)=> {
            console.info(error,'게시글 수정 오류')
          })
        },
    }
  }
</script>

<style>

</style>
