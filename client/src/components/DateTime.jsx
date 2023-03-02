import React, {useEffect} from 'react'

const DateTime = () => {
    const locale= 'en'
    const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

    useEffect(() => {
      const timer = setInterval(() => { // Creates an interval which will update the current data every minute
                // This will trigger a rerender every component that uses the useDate hook.
                setDate(new Date());
    }, 1 * 1000);
    return () => {
                clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    }
    }, []);

    const day = today.toLocaleDateString(locale, {weekday: 'long' });
    const date = `${day}, ${today.toLocaleDateString(locale, { month: 'long' })} ${today.getDate()} \n\n`;
    const hour = today.getHours();
    const time = today.toLocaleTimeString(locale, {hour: 'numeric', hour12: true, minute: 'numeric', second:'numeric'});

    return (
        <div>
            <div className="date" ><b>{date}</b></div>
<<<<<<< HEAD
            <div className="time">{time}</div>
=======
            <div className="time" >{time}</div>
>>>>>>> BawsKateBranch
        </div>
    )
}

export default DateTime