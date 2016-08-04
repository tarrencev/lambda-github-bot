import 'babel-polyfill';
import λ from 'apex.js';
import github from 'octonode';

export default λ(event => {
    const message = JSON.parse(event.Records[0].Sns.Message);
    const { repository } = message;
    const { owner } = repository;
    const { name } = owner;

    if (name !== 'tarrencev') {
        return Promise.reject('Invalid repository');
    }

    const ghClient = github.client(process.env.GITHUB_TOKEN);
    return new Promise((resolve) => {
        ghClient.get('/user', {}, function (err, status, body, headers) {
            resolve(body);
        });
    });
});
