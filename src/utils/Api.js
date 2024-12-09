const Api = {}

Api.url = 'http://185.127.225.49:8083/'

Api.initToken = () => {
    let token = localStorage.getItem('accessToken')
    let time = localStorage.getItem('time')

    if(token === '') {
        return false
    }

    if(!token) {
        return false
    }

    if(time > new Date()) {
        return window.location.reload()
    }

    return true
}

Api.signIn = async (body) => {

    try {

        let res = await fetch(`${Api.url}api/users/login`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-type": 'application/json;charset=UTF-8',
            }
        })
    
        res = await res.json()

        return res

    } catch(e) {
        return 'error'
    }

}

Api.post = async () => {
    try {

    } catch(e) {
        return 'error'
    }
}

export default Api;