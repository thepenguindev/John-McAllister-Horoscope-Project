const Months = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
]

const MonthLengths = {
    "January": 31, "February": 29, "March": 31, 
    "April": 30, "May": 31, "June": 30, 
    "July": 31, "August": 31, "September": 30, 
    "October": 31, "November": 30, "December": 31
};

class Date {
    constructor(month, day) {
        this.month = month;
        this.day = day;
    }

    equals(other) {
        return this.month == other.month && this.day == other.day;
    }
}

class DateRange {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    withinRange(date) {
        let startMonthValue = Months.indexOf(this.start.month);
        let endMonthValue = Months.indexOf(this.end.month);
        let dateMonthValue = Months.indexOf(date.month);
        return startMonthValue <= dateMonthValue <= endMonthValue &&
            this.start.day <= date.day <= this.end.day;
    }
}