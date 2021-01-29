const question = {
    idSpecialist : '',
    content : '',
}

const image = {
    nameImage : ''
}

let headers = {
	'Content-Type': 'application/json',
}
const addQuestion = async ()=> {
    const req = {
      
        "idDepartments" : "xyzv",
        "content" : "tao bi benh gi 3 ?",
        "idUser" : "abc",
        "view" : 1
    }
    const { data } = await api({
        method: 'post',
        url: "/question/addQuestion",
        data: req,
        headers
    });

    // const addQ = await axios.get(`user/login`, {
    //     "email" : "trasceuroai@gmail.com",
    //     "pass" : "123456"
    // });
    
    console.log(data)
}

const getQuestion = async () => {
    
       const { data } = await api({
        method: 'get',
        url: "/question/list",
        data: {},
        headers
    });
    process_data(data)
  };

  getQuestion()
  function process_data(data) {
    let sentences = document.getElementById('sentences');
  
    data.forEach( question => {
      sentences.innerHTML += `
        <div class="sentence">
          <div class="question">
            <p id="question" class="question__text">${question.content}</p>
          </div>
          <div class="answer">
            <div class="answer__container">
              <img src="assets/images/register.jpg" alt="anhbacsi" class="answer__img">
            </div>
            <div class="answer_info">
              <p class="answer__name">Bac si ka</p>
              <p id="answer" class="answer__text">${question.likeCount}</p>
            </div>
          </div>
        </div>
      `;
    });
  }
  