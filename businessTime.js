function isTimeBetweenHoliday(holiday, time) {
    return time.getTime() >= holiday.start.getTime()
        && time.getTime() <= holiday.end.getTime();
}

function isAddedDurationTimeBetweenHoliday(holiday, time, durationInSeconds) {
    return time.getTime() <= holiday.start.getTime()
        && time.getTime() + durationInSeconds > holiday.start.getTime();
}

function addBusinessTime(holiday, time, duration) {

    const DURATION_IN_SECONDS = duration * 1000;

    if (isTimeBetweenHoliday(holiday, time)) {
        if (duration > 0) {
            return new Date(holiday.end.getTime() + DURATION_IN_SECONDS);
        } else {
            return new Date(holiday.start.getTime() + DURATION_IN_SECONDS);
        }
    }

    if (isAddedDurationTimeBetweenHoliday(holiday, time, DURATION_IN_SECONDS)) {
        const timeBeforeToStart = holiday.start.getTime() - time.getTime();
        const timeToAddToEnd = DURATION_IN_SECONDS - timeBeforeToStart;
        return new Date(holiday.end.getTime() + timeToAddToEnd);
    }

    return new Date(time.getTime() + DURATION_IN_SECONDS);
}