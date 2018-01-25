import Env from './env';

let config = {
    env: Env,
    dataUrl: 'http://54.235.121.64:1080',
    account: {userName: '', password: ''},
    messageUrl: 'http://54.235.121.64:100'
};

if(config.env == 'development') {
    config.account.userName = 'admin';
    config.account.password = 'admin';
    //dataUrl = 'http://saleshub-one.smsassist.com:100',
    //dataUrl = 'http://smsdatagrid.smsassist.local:100',

    
    // localhost
    //config.dataUrl = 'http://localhost:9000';
    //config.messageUrl = 'http://localhost:100';
}

export default config;