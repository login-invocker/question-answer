const apiURLDoctorServer = `https://peaceful-coast-17375.herokuapp.com`
// const apiURLDoctorServer = `http://localhost:8080`

let api = axios.create({
        baseURL: apiURLDoctorServer
        
});