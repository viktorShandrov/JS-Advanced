function request(request) {
    const { method, uri, version, message } = request;

    const validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];

    const uriPattern = /^([\w.])+$|^\*$/;;
    const messagePattern = /^[^<>\\&\'\"]+$/;
    function errorMessage(type) {
        throw new Error(`Invalid request header: Invalid ${type}`);
    }

    if (!validMethods.includes(method) || !method) {
        errorMessage("Method");
    }

    if (!validVersions.includes(version) || !version) {
        errorMessage("Version");
    }

    if(!uriPattern.exec(uri)||!uri){
        errorMessage("URI");
    }

    if(messagePattern.exec(message)||!message){
        errorMessage("Message");
    }

    return request
}
console.log(request({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}
));
//module.exports = request;