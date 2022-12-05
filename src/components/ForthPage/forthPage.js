import React from 'react';
import './forthPage.css'

const ForthPage = () => {
    return (
        <div>
            <div className='img-logo'>
            <div className='logo'><img src='../Images/ultimate hrm logo.png' alt=''/></div>
            </div>
            <div>
                <h2 className='h2-class'>Attendance Information</h2>
                <table>
                <tr>
                    <th>Date</th>
                    <th>Employee Name</th>
                    <th>Status</th>
                 </tr>

                 <tr>
                    <td>12/06/2022</td>
                    <td>Sharika</td>
                    <td>Present</td>
                 </tr>

                 <tr>
                    <td>12/06/2022</td>
                    <td>Parvin</td>
                    <td>Absent</td>
                 </tr>

                 <tr>
                    <td>12/06/2022</td>
                    <td>Jasica</td>
                    <td>Present</td>
                 </tr>


                 <tr>
                    <td>12/06/2022</td>
                    <td>Sharika</td>
                    <td>Present</td>
                 </tr>

                 <tr>
                    <td>12/06/2022</td>
                    <td>Sharika</td>
                    <td>Absent</td>
                 </tr>

                 <tr>
                    <td>12/06/2022</td>
                    <td>Sharika</td>
                    <td>Present</td>
                 </tr>

                 <tr>
                    <td>12/06/2022</td>
                    <td>Sharika</td>
                    <td>Present</td>
                 </tr>


                 <tr>
                    <td>12/06/2022</td>
                    <td>Sharika</td>
                    <td>Present</td>
                 </tr>
                
                </table>
            </div>
            
        </div>
    );
};

export default ForthPage;