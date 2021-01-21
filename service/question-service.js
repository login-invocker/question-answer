

console.log("http://localhost:8080/", apiURLDoctorServer)
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
    let api
    api = axios.create({
        baseURL: "http://localhost:8080/"
        
    });
    const req = {
      
        "idDepartments" : "xyzv",
        "content" : "tao bi benh gi 3 ?",
        "idUser" : "abc",
        "view" : 1
    }
    const { data } = await api({
        method: 'post',
        url: "question/addQuestion",
        data: req,
        headers
    });

    // const addQ = await axios.get(`user/login`, {
    //     "email" : "trasceuroai@gmail.com",
    //     "pass" : "123456"
    // });
    
    console.log(data)
}
