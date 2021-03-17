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
        userQ: {}
      }
    },
    methods: {
      likeApi: function (id) {
    const token = getCookie("tokenId")

        api({
          method: 'put',
          url:'/comment/like',
          data: {"id": id},
          headers: { 
            "token-id": `Bearer ${token}`, 
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