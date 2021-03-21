const apiURLDoctorServer = `https://secret-plateau-56191.herokuapp.com`

let api = axios.create({
        baseURL: apiURLDoctorServer
        
});

new Vue({
    el: '#app',
    data () {
      return {
        question: {},
        comments: [],
        doman: "https://question-answer.invocker.repl.co",
        userQ: {},
        isDoctor: getCookie("roles").includes("DOCTOR"),
        token:  getCookie("tokenId")
      }
    },
    methods: {
      likeApi: function (id) {

        
        api({
          method: 'put',
          url:'/comment/like',
          data: {"id": id},
          headers: { 
            "token-id": `Bearer ${this.token}`, 
            'Content-Type': 'application/json', 
            }
          })
        .then(data => {
          const resComment = data.data
          if(resComment === "") return $.notify("Bạn cần đăng nhập để tương tác!", "error");
          else {
            let listComment = [...this.comments]
            for(let i = 0; i < listComment.length; i++) {
              if(listComment[i].id === resComment.id) listComment[i].likes = resComment.likes
            }
            return this.comments = listComment
          }

        })
      },
      addRawComment: function() {
          const reqData = {
            "content": document.getElementById('content').value,
            "idQuestion": this.question.id,
            "idUserResponse": this.userQ.id,
            "idUser": getCookie("idU"),
          }

          api({
      
            method: 'post',
            url: "comment/addcomment",
            data: reqData,
            headers: { 
              "token-id": `Bearer ${this.token}`, 
              'Content-Type': 'application/json', 
              },
          }).then(data => {
            let tmpComments = [...this.comments]
            tmpComments.push(data.data)
            this.comments = tmpComments
            $.notify("Gửi câu trả lời thành công.", "success");
          }).catch((e) =>{

            $.notify("Gửi câu trả lời Thất bại hoặc không thể gửi email cho người hỏi.", "error");
          })
    
      }
    },
    mounted () {
      var query = window.location.search.substring(1);
      var vars = query.split("=");
      var id= vars[1];

        // question
        api
        .post('/question/question',{"id": id})
        .then(response => {
            const question = response.data

            // get user of question
            api.post('/user/id', {"id": question.idUser}).then( user => {
              this.userQ = user.data
            })
          
            // lay khoa cua cau hoi
            axios
            .get('./spcealist.json', {id: question.idSpecialist})
            .then(resSpecialist => {
                question.nameSpecialist = resSpecialist.data.name
                
                this.question = question
            })

             // comment
            api
            .post('/comment/findbyquestion', {"id": question.id})
            .then(resComment => {

              let comments = resComment.data

              this.comments = comments              
            })
        })

       
    }
  })

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }