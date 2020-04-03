const axios = require('axios')
async function makePostRequest(text) {
	var out = await encodeURI(text);

	const myChatid = 
	const grouChatid = 
	const botToken = ''
    let res = await axios.post(
    	`https://api.telegram.org/bot`+botToken+`/sendMessage?chat_id=${grouChatid}=&text=${out}`);


    console.log(`Status code: ${res.status}`);
    console.log(`Status text: ${res.statusText}`);
    console.log(`Request method: ${res.request.method}`);
    console.log(`Path: ${res.request.path}`);

    console.log(`Date: ${res.headers.date}`);
    console.log(`Data: ${res.data}`);
}

module.exports = makePostRequest