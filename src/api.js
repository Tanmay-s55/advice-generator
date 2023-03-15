import axios from "axios";

const getData = async () => {
    const response = await axios.get('https://api.adviceslip.com/advice');
    return response.data.slip;
}

export default getData;