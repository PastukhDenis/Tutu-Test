// ответ на первое задание, работающий за линейное время. Можно лучше, но немного сложнее

function dscount (str, c1, c2) {
    s = str.toLowerCase();
    count  = 0;
    for (i = 0; i < s.length - 1; ++i){
        if (s.charAt(i) == c1 && s.charAt(i + 1) == c2) {
            count ++;
        }
    }
    return count;
}

// неправильно работающая функция

function dscount2 (str, c1, c2){
    return str.match(RegExp("" + c1 + c2, "gi")) //Внезапно, не работает /0\
}