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

const addQuestion = async (content) => {

  const idUser = getCookie('tokenId')
  if (!idUser) return false

  const req = {
    "content": content,
    "idSpecialist": "0",
    "idUser": idUser
  }

  const { data } = await api({
    method: 'post',
    url: "/question/add-question",
    data: req,
    headers
  });
  if (data) {
    $.notify("Gửi thành công câu hỏi của bạn đang chờ được kiểm duyệt.", "success");
    return true
  } else {
    $.notify("Có lỗi xảy ra, xin thử lại lần sau!", "error");
  }
  return false
}

//  raw data question 
const getRawQuestion = async () => {
  try {
    const res = await api({
      method: 'get',
      url: "/question/list",
      data: {},
      headers
    });
    const question = res.data;
    return question;
  } catch (e) {
    console.error(e);
  }
};

// api select one question
const getOneQuestion = async (id) => {
  try {
    const res = await api({
      method: 'get',
      url: `/question/question?id=${id}`,
      data: {},
      headers
    });
    const question = res.data;
    return question;
  } catch (e) {
    console.error(e);
  }
};

// api update one question
const updateQuestion = async (content, idUser, idSpecialist) => {
  try {
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
  } catch (e) {
    console.error(e);
  }

}

// api delete question

const deleteQuestion = async (id) => {

  const req = {
    "id": id,
  }
  const { data } = await api({
    method: 'post',
    url: "question/deleteQuestion",
    data: req,
    headers
  });
}


// api get Comment

const getComment = async () => {
  try {
    const res = await api({
      method: 'get',
      url: "/comment/listcomment",
      data: {},
      headers
    });
    const question = res.data;

    return question;
  } catch (e) {
    console.error(e);
  }
};

// api get Question

const getQuestion = async (checkDoctor) => {
  try {
    const res = await api({
      method: 'get',
      url: "/question/list",
      data: {},
      headers
    });
    const question = res.data;
    process_data(question);
    await checkDoctor();
    await checkCommented();
    return question;
  } catch (e) {
    console.error(e);
  }
};

const dataComment = getComment();

function getOneComment(id) {
  for (var key in dataComment) {
    let obj = dataComment[key];

    if (obj.idQuestion == id) {
      return obj.idQuestion;
    }
  }
  return "";
}

// open detai Question 
const detaiQuestion = async(id) => {
  window.location.replace("detail-question/detail-question.php?id="+ id);
}

// api get comment
function process_data(data) {
  let sentences = document.getElementById('sentences');
  let i = 0;

  data.forEach(question => {
    sentences.innerHTML += `
    <div class="sentence">
  <div class="question">
    <p id="question" class="question__text"><a onclick="detaiQuestion('${question.id}')"
        href="#">${question.content}</a></p>
  </div>

  <div class="action">
    <div class="action__view">
      <div class="action__view--like">
        <i class="icofont-ui-love"></i><span>12</span>
      </div>
      <div class="action__view--number">
        <i class="fas fa-heart"></i>
        33 lượt xem
      </div>
    </div>

    <div class="action__btn">

      <button class="action__btn--item" id="btn-love"><i class="icofont-love"></i> Yêu thích</button>
      <button class="action__btn--item btn-mid" onclick="answer(${i})" id="btn-mid"><i
          class="icofont-speech-comments"></i>Trả lời</button>

      <button class="action__btn--item"><i class="icofont-share"></i>

        <div class="fb-share-button"
          data-href="https://question-answer.invocker.repl.co/listquestion.php/${question.id}" data-layout="button"
          data-size="small"><a target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fquestion-answer.invocker.repl.co%2Flistquestion.php&amp;src=sdkpreparse"
            class="fb-xfbml-parse-ignore">Chia sẻ</a></div>

      </button>

    </div>
  </div>


  <div class="addanswer show" id="show${i}">
    <textarea name="" class="text-answer" id="text-answer${i}" cols="30" rows="10"
      placeholder="Nhập câu trả lời của bạn tại đây!"></textarea>
    <button class="btn-send" onclick="addComment('${question.id}', ${i})">
      <img src="assets/images/icon-send.png" alt="img">
      <span class="">Gửi câu trả lời</span>
    </button>
  </div>

  <div class="answer">
    <div class="answer__container" id="answer__container${i}">
      <img src="assets/images/register.jpg" alt="anhbacsi" class="answer__img">
    </div>
    <div class="answer_info">
      <p class="answer__name">Bac si ka</p>
      <p id="answer" class="answer__text">${getOneComment(question.id)}</p>
    </div>
  </div>
</div>
      `;
    i++;
  });
}

function checkCommented() {
  let text = document.getElementsByClassName("answer__text");
  let answer = document.getElementsByClassName("answer");
  let i;

  for (i = 0; i < answer.length; i++) {
    if (text[i].textContent == "") {
      answer[i].style.display = "none";
    }
  }
}
