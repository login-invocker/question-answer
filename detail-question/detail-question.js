new Vue({
    el: '#app',
    data () {
      return {
        question: {},
        comment: []
      }
    },
    async mounted () {
        // question
      axios
        .get('./question.json')
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
        })

        // comment
    }
  })