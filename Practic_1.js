function parseUrl(str){
    parser = document.createElement('a');
    parser.href = str;
    return parser;
}