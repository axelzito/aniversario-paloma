import {useState} from "react";

const useCountdown = (date) => {
    const [day, setDay] = useState();
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [second, setSecond] = useState();

    const countdown = () => {
        const targetDate = new Date(date).getTime();
        const currentDate = new Date().getTime();

        const intervalDate = targetDate - currentDate;


        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const dayNumber = Math.floor(intervalDate / day);
        const hourNumber = Math.floor((intervalDate % day) / hour);
        const minuteNumber = Math.floor((intervalDate % hour) / minute);
        const secondNumber = Math.floor((intervalDate % minute) / second);

        setDay(dayNumber);
        setHour(hourNumber);
        setMinute(minuteNumber);
        setSecond(secondNumber);

    };

    setInterval(countdown, 1000);

    return [day, hour, minute, second];
}

export default useCountdown;