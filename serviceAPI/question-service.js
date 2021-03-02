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
  if(!idUser) return false

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
  if(data){
    $.notify("Gửi thành công câu hỏi của bạn đang chờ được kiểm duyệt.", "success");
    return true
  }else{
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

// 
const getQuestion = async () => {
  try {
    const res = await api({
      method: 'get',
      url: "/question/list",
      data: {},
      headers
    });
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

// delete questions
const deleteQuestion = async ( id ) => {

  var data = JSON.stringify( { "id":id } );
  try{
    const response = await api({
      method: 'delete',
      url: 'question/deleteQuestion',
      data,
      headers: { 
        'Content-Type': 'application/json'
      },
    });
    $.notify("Xóa thành công.", "success");
    return true
  }catch{
    $.notify("Thử lại sau!", "error");
    return false
  }
}

// open detai Question 
const detaiQuestion = async(id) => {
  window.location.replace("detail-question/detail-question.php?id="+ id);
}
// api get comment
function process_data(data) {
  let sentences = document.getElementById('sentences');
  const isDocter = checkRoleCookie("DOCTOR")
  let btnAnswer = isDocter ? `
    <button class="action__btn--item btn-mid" onclick="answer()"><i class="icofont-speech-comments"></i>Trả lời</button>
    `
    : ''
  data.forEach(question => {
    sentences.innerHTML += `
    <div class="sentence">
    <div class="question">
      <p id="question" class="question__text"><a onclick="detaiQuestion('${question.id}')" href="#" >${question.content}</a></p>
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
      `+ btnAnswer + `
      <button class="action__btn--item"><i class="icofont-share"></i></i> 

      <div class="fb-share-button" data-href="https://question-answer.invocker.repl.co/listquestion.php/${question.id}" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fquestion-answer.invocker.repl.co%2Flistquestion.php&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Chia sẻ</a></div>

        </button>

     </div>
  </div>    <div class="addanswer show" id="show">
      <textarea name="" id="text-answer" cols="30" rows="10" placeholder="Nhập câu trả lời của bạn tại đây!"></textarea>
      <button class="btn-send" onclick="addComment('${question.id}')">
        <img src="assets/images/icon-send.png" alt="img">
        <span class="">Gửi câu trả lời</span>
      </button>
    </div>

    <!-- <div class="answer">
      <div class="answer__container">
        <img src="assets/images/register.jpg" alt="anhbacsi" class="answer__img">
      </div>
      <div class="answer_info">
        <p class="answer__name">Bac si ka</p>
        <p id="answer" class="answer__text">Together we inspire learners to go further
          Our range of free teaching resources, lesson plans and activities is designed to help you prepare your
          students for our exams and tests. We also have a range of teaching qualifications, courses and support
          to help you develop as a teacher.</p>
      </div>
    </div> -->
  </div>
      `;
  });
}