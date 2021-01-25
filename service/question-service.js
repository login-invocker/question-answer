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
