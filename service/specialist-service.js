let headers = {
	'Content-Type': 'application/json',
}
const addSpecialist = async ()=> {
    const nameSpeacialist = $( "#name-specialist" ).val();
    console.log(nameSpeacialist)
    const req = {
        "name": nameSpeacialist
    }

    const { data } = await api({
        method: 'post',
        url: "/specialist/addspecialist",
        data: req,
        headers
    });
    console.log(data)
}

const viewAllSpecialist = async () => {
    const { data } = await api({
        method: 'get',
        url: "/specialist/list",
        data: {},
        headers
    });
    console.log(data)
}

const removeSpecialist = async () => {

    const { data } = await api({
        method: 'delete',
        url: "/specialist/remove",
        data: {"id": "600a6c024130db0ecc1bcdf8"},
        headers
    });
    console.log(data)
}

const getOneSpecialist = async () => {

    const idSpeacialist = {"id": "600a6a524130db0ecc1bcdf7"}
    const { data } = await api({
        method: 'post',
        url: "/specialist",
        data: idSpeacialist,
        headers
    });
    console.log(data)
}