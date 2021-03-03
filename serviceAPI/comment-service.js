const getCommentByQuestion = async () => {

}

// api add comment

const addComment = async (idQuestion, id) => {
  const contentAnswer = document.getElementById(`text-answer${id}`).value;
  try {
    const req = {
      "content": contentAnswer,
      "idQuestion": idQuestion,
      "idUserResponse": "string",
      "idUser": "string",
    }
    const { data } = await api({
      method: 'post',
      url: "comment/addcomment",
      data: req,
      headers
    });
  } catch (e) {
    console.error(e);
  }
}

// api find One Comment

const findOneComment = async (idQuestion) => {
  try {
    const req = {
      "idQuestion": idQuestion,
    }
    const { data } = await api({
      method: 'post',
      url: "comment/comment",
      data: req,
      headers
    });
  } catch (e) {
    console.error(e);
  }
}

// api update one Comment

const updateComment = async (content, idUser, idUserResponse, likes) => {
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
      headers
    });
  } catch (e) {
    console.error(e);
  }
}

// api delete Comment

const deleteComment = async (idQuestion) => {
  try {
    const req = {
      "idQuestion": idQuestion,
    }
    const { data } = await api({
      method: 'post',
      url: "comment/deletecomment",
      data: req,
      headers
    });
  } catch (e) {
    console.error(e);
  }
}
