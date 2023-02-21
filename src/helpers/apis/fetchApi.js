const fetchApi = async(url) => {

    // const token = getAuthUser();

    const headers = new Headers({
        "Content-Type": "application/json",
        // "x-auth-token": `${token}`,
    });

    const request = new Request(url, {
        headers,
    });

    try {
        const response = await fetch(request)
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error.message)
    }

    // return fetch(request)
    //     .then(response => response.json())
    //     .then(data => data)
    // .catch(err => toast.error(err.message))
};

export default fetchApi;