const getCommentByQuestion = async () => {
    
}

// api add comment

const addComment = async (idQuestion) => {
  const contentAnswer = document.getElementById('text-answer').value;

  const req = {
    "content": contentAnswer,
    "idQuestion": idQuestion,
    "idUserResponse": "string"
  }
  const { data } = await api({
    method: 'post',
    url: "comment/addcomment",
    data: req,
    headers
  });
}