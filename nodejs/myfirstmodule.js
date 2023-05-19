exports.myDateTime = function(){
    return formattDate(new Date);
}


function formattDate(date){
    const option = {year: 'numeric', month: 'long', day: 'numeric'};
    const formatter = Intl.DateTimeFormat('en-US', option);
    return formatter.format(date)
}