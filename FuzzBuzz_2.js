function checkSyntax(str){
    stack = [];
    openBrackets = ["<","[","{","("]; // при изменении нужных скобок менять две этих строки
    closeBrackets = [">","]","}",")"];
    
    for (i = 0; i < str.length; ++i){
        c = str.charAt(i);
        if (openBrackets.indexOf(c) != -1){
            stack.push(c);
        }
        else if (closeBrackets.indexOf(c) != -1){
            if (closeBrackets.indexOf(c) != openBrackets.indexOf(stack.pop())){
                return 1;
            }
        }
    }
    if (stack.length == 0){
        return 0;
    }
    else {
        return 1;
    }
}