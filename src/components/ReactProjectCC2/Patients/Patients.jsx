import React from 'react';

const Academics = () => {
  const students = [
    { name: 'Ragava Lawrence anna', rollNo: '201', status:'In Treatment' },
    { name: 'Taylor Swift akka', rollNo: '202', status:'Discharged' },
    { name: 'Surya Arunesh', rollNo: '203', status:'Deceased' },
  ];

  return (
    <div style={{ marginLeft: '250px', marginRight: '250px',marginTop:'100px',border:'1px solid black',padding:'10px',borderRadius:'10px'}}>
      <h2>Patient Information</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc' }}>
            <th style={{ padding: '8px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Admission No</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={{ padding: '8px' }}>{student.name}</td>
              <td style={{ padding: '8px' }}>{student.rollNo}</td>
              <td style={{ padding: '8px' }}>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Academics;
