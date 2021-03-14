const getCommentByQuestion = async () => {

}

// api add comment

const addComment = async (idQuestion, id, idResponse) => {
  const contentAnswer = document.getElementById(`text-answer${id}`).value;
  const idUser = getCookie('idU')
  const token = getCookie("tokenId")

  try {
    const req = {
      "content": contentAnswer,
      "idQuestion": idQuestion,
      "idUserResponse": idResponse,
      "idUser": idUser,
    }
    const { data } = await api({

      method: 'post',
      url: "comment/addcomment",
      data: req,
      headers: { 
        "token-id": `Bearer ${token}`, 
        'Content-Type': 'application/json', 
        },
    });
    $.notify("Gửi câu trả lời thành công.", "success");
    document.getElementById("show" + `${id}`).style.display = "none";

  } catch (e) {
    $.notify("Gửi câu trả Thất bại.", "error");
  }
}

// api find One Comment

const findOneComment = async (idQuestion) => {
  const token = getCookie("tokenId")

  try {
    const req = {
      "idQuestion": idQuestion,
    }
    const { data } = await api({

      method: 'post',
      url: "comment/comment",
      data: req,
      headers: { 
        "token-id": `Bearer ${token}`, 
        'Content-Type': 'application/json', 
        },
    });
  } catch (e) {
    console.error(e);
  }
}

// api update one Comment

const updateComment = async (content, idUser, idUserResponse, likes) => {
  const token = getCookie("tokenId")

  try {
    const req = {
      "content": `${content}`,
      "idUser": `${idUser}`,
      "idQuestion": `${idQuestion}`,
      "idUserResponse": `${idUserResponse}`,
      "likes": `${likes}`
    }


    const { data } = await api({

      method: 'put',
      url: "/comment/updatecomment",
      data: req,
      headers: { 
        "token-id": `Bearer ${token}`, 
        'Content-Type': 'application/json', 
        },
    });
  } catch (e) {
    console.error(e);
  }
}

// api delete Comment

const deleteComment = async (idQuestion) => {
  const token = getCookie("tokenId")

  try {
    const req = {
      "idQuestion": idQuestion,
    }
    const { data } = await api({

      method: 'post',
      url: "comment/deletecomment",
      data: req,
      headers: { 
        "token-id": `Bearer ${token}`, 
        'Content-Type': 'application/json', 
        },
    });
  } catch (e) {
    console.error(e);
  }
}
