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

const sendImages = async () => {
  let formData = new FormData();
  const imagefile = document.querySelector('#formFileMedia');
  // check image
  const file = imagefile.files[0];
  const  fileType = file['type'];
  const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
  if (!validImageTypes.includes(fileType)) {
      return false
  }
  
  formData.append("image", imagefile.files[0]);
  const res = await api({
      method: 'post',
      url: "/image/addimage",
      data: formData,
      headers: {
          'Content-Type': 'multipart/form-data'
      }
  })
  return res.data
}

const addQuestion = async (content) => {
  const token = getCookie("tokenId")
  const idUser = getCookie('idU')
  if (!idUser) return false
  
  const resImages = await sendImages();
  if(!resImages) return $.notify("Có lỗi khi gửi ảnh hoặc sai tệp, xin thử lại lần sau!", "error");
  const req = {
    "content": content,
    "idSpecialist": "0",
    "idUser": idUser,
    "idImage": resImages.id
  }

  const { data } = await api({

    method: 'post',
    url: "/question/add-question",
    data: req,
    headers
  });
  if (data && resImages.id) {
    $.notify("Gửi thành công câu hỏi của bạn đang chờ được kiểm duyệt.", "success");
    return true
  } else {
    $.notify("Có lỗi xảy ra, xin thử lại lần sau!", "error");
  }
  return false
}

//  raw data question 
const getRawQuestion = async () => {
  const token = getCookie("tokenId")

  try {
    const res = await api({

      method: 'get',
      url: "/question/list",
      data: {},
      headers: { 
        "token-id": `Bearer ${token}`, 
        'Content-Type': 'application/json', 
        },
    });
    const question = res.data;
    return question;
  } catch (e) {
    console.error(e);
  }
};

// api select one question
const getOneQuestion = async (id) => {
  const token = getCookie("tokenId")

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
    $.notify("Có lỗi xảy ra, không thể lấy dữ liệu!", "error");
  }
};

// api update one question
const updateQuestion = async (question) => {
  const token = getCookie("tokenId")

  try {
    const req = question

    const { data } = await api({

      method: 'put',
      url: "/question/updateQuestion",
      data: req,
      headers: { 
        "token-id": `Bearer ${token}`, 
        'Content-Type': 'application/json', 
        },
    });
    $.notify("update Câu hỏi thành công", "success");
  } catch (e) {
    $.notify("Có lỗi xảy ra, không thể update!", "error");
  }
}

// api delete question

const deleteQuestion = async (id) => {
  const token = getCookie("tokenId")

  try{
    const req = {
      "id": id,
    }
    const { data } = await api({

      method: 'delete',
      url: "question/deleteQuestion",
      data: req,
      headers: { 
        "token-id": `Bearer ${token}`, 
        'Content-Type': 'application/json', 
        },
    });
    return true
  }catch{
    return false
  }
}


// api get Comment

const getComment = async () => {
  const token = getCookie("tokenId")

  try {
    const res = await api({

      method: 'get',
      url: "/comment/listcomment",
      data: {},
      headers: { 
        "token-id": `Bearer ${token}`, 
        'Content-Type': 'application/json', 
        },
    });
    const question = res.data;

    return question;
  } catch (e) {
    console.error(e);
  }
};

// api get Question

const getQuestion = async (checkDoctor) => {
  const token = getCookie("tokenId")

  try {
    const res = await api({

      method: 'get',
      url: "/question/list",
      data: {},
      headers
    });
    const question = res.data;
    const questionMap = question.filter( data => data.status === "APPROVED");

    $('#page').pagination({
      dataSource: questionMap,
      showGoInput: true,
      showGoButton: true,
      pageSize: 5,
      callback: function(data, pagination) {
        process_data(data);  
      }
    })

    await checkDoctor();
    checkCommented();
    return questionMap;
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
  let showQuestions = ""
  data.forEach(question => {
    showQuestions += `
    <div class="sentence">
  <div class="question">
    <p id="question" class="question__text"><a onclick="detaiQuestion('${question.id}')"
        href="#">${question.content.length < 156?question.content: question.content.slice(0, 156) + "... Xem thêm"}</a></p>
  </div>

  <div class="action">
    <div class="action__view">
      <div class="action__view--like">
        <i class="icofont-ui-love"></i><span>12</span>
      </div>
      <div class="action__view--number">
        <i class="fas fa-heart"></i>
        ${question.view} lượt xem
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
    <button class="btn-send" onclick="addComment('${question.id}', ${i}, '${question.idUser}')">
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
  // inner html
  sentences.innerHTML = showQuestions 
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


const findBySpecalist = async idSpecialist => {
  const token = getCookie("tokenId")

  try {
    const res = await api({

      method: 'post',
      url: "/question/id_specialist",
      data: { "idSpecialist" : idSpecialist },
      headers
    });
    const question = res.data;
    const questionMap = question.filter( data => data.status === "APPROVED");
    if(questionMap.length < 1) return  $.notify("Không có dữ liệu cho danh mục này", "warning");


    $('#page').pagination({
      dataSource: questionMap,
      showGoInput: true,
      showGoButton: true,
      pageSize: 5,
      callback: function(data, pagination) {
        process_data(data);  
      }
    })

    $.notify("Lấy Câu hỏi thành công", "success");
    return question;
  } catch (e) {
    $.notify("Có lỗi xảy ra, xin thử lại lần sau!", "error");
  }
}