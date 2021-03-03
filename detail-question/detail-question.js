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
            axios
            .get('./comment.json', {id: question.id})
            .then(resComment => {
                this.comments = resComment.data
            })
        })

       
    }
  })