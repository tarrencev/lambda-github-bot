import 'babel-polyfill';
import λ from 'apex.js';
import github from 'octonode';

export default λ(event => {

    const message = event.Records[0].Sns.Message;
    // console.log('From SNS:', message);
    const ghClient = github.client(process.env.GITHUB_TOKEN);
    return new Promise((resolve) => {
        ghClient.get('/user', {}, function (err, status, body, headers) {
            console.log(body);
            resolve(body); //json object
        });
    });
})
