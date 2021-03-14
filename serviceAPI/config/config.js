// const apiURLDoctorServer = `https://secret-plateau-56191.herokuapp.com`
const apiURLDoctorServer = `http://localhost:8080`

let api = axios.create({
        baseURL: apiURLDoctorServer
        
});