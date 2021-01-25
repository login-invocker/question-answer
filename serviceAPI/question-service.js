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
    try {
      console.log('calling');
      const res = await axios.get(`${BASE_URL}`);
  
      const question = res.data;
  
      console.log(`GET: Here's the list of question`, question);
  
      process_data(question);
  
      return question;
    } catch (e) {
      console.error(e);
    }
  };
  
  function process_data(data) {
    let sentences = document.getElementById('sentences');
  
    data.forEach(element => {
      sentences.innerHTML += `
        <div class="sentence">
          <div class="question">
            <p id="question" class="question__text">${element.createdAt}</p>
          </div>
          <div class="answer">
            <div class="answer__container">
              <img src="assets/images/register.jpg" alt="anhbacsi" class="answer__img">
            </div>
            <div class="answer_info">
              <p class="answer__name">Bac si ka</p>
              <p id="answer" class="answer__text">${element.likeCount}</p>
            </div>
          </div>
        </div>
      `;
    });
  }
  