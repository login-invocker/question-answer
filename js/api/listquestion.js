import axios from 'axios';

const BASE_URL = 'http://http://localhost:5000/';

const getQuestion = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/question`);

    const question = res.data;

    console.log(`GET: Here's the list of question`, question);

    return question;
  } catch (e) {
    console.error(e);
  }
};