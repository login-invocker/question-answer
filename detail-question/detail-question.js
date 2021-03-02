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
        doman: "https://question-answer.invocker.repl.co"
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
            const question = {
                content: response.data.content,
                id: response.data.id
            }
            // lay khoa cua cau hoi
            axios
            .get('./spcealist.json', {id: question.id})
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