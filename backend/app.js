const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
// const cors = require('cors')

// app.use(cors())
const members = [
    {
        id:3,
        name:'도서관',
        loginId:'lib',
        loginPw:'africa'
    },
    {
        id:4,
        name:'홍길동',
        loginId:'a',
        loginPw:'1'
    }
]

app.use(bodyParser.json())
app.use(cookieParser())

//로그인 api
app.get('/api/login', (req,res)=> {
    console.log(req.cookies)
    if (req.cookies && req.cookies.token) {
        jwt.verify(req.cookies.token, "test", (err, decoded)=> {
            if (err) {
                return res.send(401)
            }
            return res.send(decoded)
        })
    }else {
        res.send(401)
    }
})

app.get('/api/test', (req,res)=> {
    res.send({inho:1,inho2:2,inho3:3})
})

app.post('/api/login', (req,res)=> {
    const loginId = req.body.loginId
    const loginPw = req.body.loginPw

    const member = members.find(m=>m.loginId === loginId && m.loginPw === loginPw)

    if (member) {
        const options = {
            domain:"localhost",
            path:'/',
            httpOnly:true,
        }

        const token = jwt.sign({
            // jwt로 토큰을 만든다
            id: member.id,
            name:member.name,
        }, "test", {
            //text 는 암호화 키이다.
            expiresIn: "15m",
            //토큰의 유효기간
            issuer: "황인호",
            //토큰의 발행자(아무렇게나 입력해도 무관함)
        })

        res.cookie("token", token, options)
        res.send(member)
    }else {
        res.send(404)
    }

    console.log(loginId,loginPw)
})

const loginCheck = async (req,res)=> {
    const {user} = res.local;
    try {
        res.status(200).json(user)
    }catch(error) {
        console.log(error, '로그인체크 기능 오류')
    }
}


app.listen(port, ()=> {
    console.log('3000포트로 서버가 켜졌습니다.');
})