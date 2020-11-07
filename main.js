function changeAmountInDaySelector(element, length) {
    for (let i = 1; i <= length; i++) {
        element.append("<option name=" + i + ">" + i + "<option>");
    }
}

$(document).ready(() => {
    // This Code Controls The Days Listed
    let daySelector = $("select#DaySelector");
    let monthSelector = $("select#MonthSelector");
    changeAmountInDaySelector(daySelector, MonthLengths[monthSelector.val()]);
    $("select#MonthSelector").change(() => {
        changeAmountInDaySelector(daySelector, MonthLengths[monthSelector.val()]);
    });
    
    // This Code Controls What Happens On Button Click
    $("button").click(() => {
        let selectedDate = new Date(monthSelector.val(), daySelector.val());
        console.log(selectedDate);
    });
});