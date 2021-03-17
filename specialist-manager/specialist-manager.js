var specialistManager = new Vue({
    el: '#app',
    data() {
        return {
            specialists: [],
            specialist:{},
            newSpecialist: ''
        }
    },
    mounted() {
        const token = getCookie("tokenId")

        const headers = {
            'Content-Type': 'application/json',
        }
        api({

            method: 'get',
            url: "/specialist/list",
            data: {},
            headers
        }).then(specialists => {
            this.specialists = specialists.data
        })
    },
    methods: {
        closeAction: function(){        
            document.getElementById('card').style.display = 'none' 
        },
        closeNewSpecialist: function(){
            document.getElementById('card-new').style.display = 'none' 
        },
        openAction: function(index) {
            document.getElementById('card').style.display = 'block' 
            this.specialist = this.specialists[index]
            
        },
        openModalNewSpecialist: function(){
            this.isAddNew = true
            document.getElementById('card-new').style.display = 'block' 
        },
        addSpecialist: function() {
            const nameSpecialist = document.getElementById('new-name-specialist').value
            const reqData = {
                "name": nameSpecialist
            }
        
            const { data } = api({
                method: 'post',
                url: "/specialist/addspecialist",
                data: reqData,
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response => {
                window.location.reload()
            })
        },
        removeSpecialist: function(){
            api({
                method: 'delete',
                url: "/specialist/remove",
                data: {"id": this.specialist.id},
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(data => {
                window.location.reload()
            })
        },
        updateSpecialist: function() {
            const nameSpecialist = document.getElementById('name-specialist').value
              const speacialist = {"id": this.specialist.id, "name": nameSpecialist}
                api({
                method: 'put',
                url: "/specialist",
                data: speacialist,
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(() => {
                window.location.reload()
            })
        }
    } 
})


// const getOneSpecialist = async () => {

//     const idSpeacialist = {"id": "600a6a524130db0ecc1bcdf7"}
//     const { data } = await api({

//         method: 'post',
//         url: "/specialist",
//         data: idSpeacialist,
//         headers
//     });
//     console.log(data)
// }
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