export function differenceBetweenDates(to, from) {
    const [_to, _from] = [to, from];

    let years = _to.diff(_from, 'year');
    _from.add(years, 'years');

    let months = _to.diff(_from, 'months');
    _from.add(months, 'months');

    let days = _to.diff(_from, 'days');
    _from.add(days, 'days');

    let hours = _to.diff(_from, 'hours');
    _from.add(hours, 'hours');

    let minutes = _to.diff(_from, 'minutes');
    _from.add(minutes, 'minutes');

    let seconds = _to.diff(_from, 'seconds');

    return {years, months, days, hours, minutes, seconds};
}