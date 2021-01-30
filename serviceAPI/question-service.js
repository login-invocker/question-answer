const question = {
  idSpecialist: '',
  content: '',
}

const image = {
  nameImage: ''
}

let headers = {
  'Content-Type': 'application/json',
}
const addQuestion = async (a) => {
  const req = {
    "content": `${a}`,
    "id": "stri1231ng",
    "idSpecialist": "stri123ng",
    "idUser": "str11ing",
    "status": "st123ring",
    "view": 13

  }

  console.log(req);
  const { data } = await api({
    method: 'post',
    url: "/question/add-question",
    data: req,
    headers
  });

  // const addQ = await axios.get(`user/login`, {
  //     "email" : "trasceuroai@gmail.com",
  //     "pass" : "123456"
  // });

  // console.log(data)
}

const getQuestion = async () => {
  try {
    const res = await axios.get('http://localhost:8080/question/list');
    const question = res.data;
    process_data(question);
    return question;
  } catch (e) {
    console.error(e);
  }
};

// api select one question

const getOneQuestion = async (id) => {
  try {
    const res = await axios.get(`http://localhost:8080/question/question?id=${id}`);
    const question = res.data;
    process_data(question);
    return question;
  } catch (e) {
    console.error(e);
  }
};

// api update one question

const updateQuestion = async (content, idUser, idSpecialist) => {
  const req = {
    "content": `${content}`,
    "idSpecialist": `${idUser}`,
    "idUser": `${idSpecialist}`,
  }

  const { data } = await api({
    method: 'put',
    url: "/question/updateQuestion",
    data: req,
    headers
  });

}


function process_data(data) {
  let sentences = document.getElementById('sentences');

  data.forEach(element => {
    sentences.innerHTML += `
        <div class="sentence">
          <div class="question">
            <p id="question" class="question__text">${element.content}</p>
          </div>
          <div class="answer">
            <div class="answer__container">
              <img src="assets/images/register.jpg" alt="anhbacsi" class="answer__img">
            </div>
            <div class="answer_info">
              <p class="answer__name">Bac si ka</p>
              <p id="answer" class="answer__text">${element.status}</p>
            </div>
          </div>
        </div>
      `;
  });
}



