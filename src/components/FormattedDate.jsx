import React, { useEffect, useState } from 'react';

export default function FormattedDate() {
    const [formattedDate, setFormattedDate] = useState("");
    const [data , setData] = useState([])
    useEffect(() => {
        const formatDate = (date) => {
          console.log(date);
            const months = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            
            const month = months[date.getMonth()];
            const day = date.getDate();
            const year = date.getFullYear();
            
            return `${month} ${day}, ${year}`;
        }

        const currentDate = new Date();
        const formattedDate = formatDate(currentDate);
        setFormattedDate(formattedDate);
    }, []);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    return (
        <div>
            <span className='font-bold text-lg tracking-wide text-gray-700'>
                {formattedDate === "" ? <h1>loading</h1> : formattedDate}  
            </span><br />
            <span className='font-bold text-lg tracking-wide text-gray-700'>{data.location.name.split(',')[0]},{data.location.name.split(',')[data.location.name.split(',').length-1]}</span>
        </div>
    )
}
