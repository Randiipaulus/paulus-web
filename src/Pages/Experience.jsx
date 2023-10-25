import React from 'react'
import './ExperienceStyle.css'
 
const Experience = () => {
  return (
    <div className='bk-exp'>

      <h1 className='title-exp'>Experience</h1>

      <div className="content-exp">
        <div className="head-exp">
          <h4 className="position-exp">Software Integrator</h4>
          <p className='descrip-exp'>Teseoc LLC | June - Present</p>
        </div>
        <p className='summ-exp'>
          <ul className='list-exp'>
            <li className='bullet-exp'>Integrated diverse software systems,
             optimizing data flow and reducing processing time by 20%.</li>
            <li className='bullet-exp'>Streamlined software integration processes,
             improving overall operational efficiency.</li>
          </ul>
        </p>
      </div>

      <div className="content-exp">
        <div className="head-exp">
          <h4 className="position-exp">Stower</h4>
          <p className='descrip-exp'>QVC | July 2022 - May 2023</p>
        </div>
        <p className='summ-exp'>
          <ul className='list-exp'>
            <li className='bullet-exp'>Utilize advanced scanning and 
            tracking technologies to optimize inventory management, 
            significantly reducing stock discrepancies and improving 
            overall efficiency. </li>
            <li className='bullet-exp'>Streamlined inventory management
            using advanced scanning and tracking technologies, reducing
            stock discrepancies and improving operational efficiency.</li>
          </ul>
        </p>
      </div>

      <div className="content-exp">
        <div className="head-exp">
          <h4 className="position-exp">Custumer Service</h4>
          <p className='descrip-exp'>Morrison Healthcare | July 2020 - June 2022</p>
        </div>
        <p className='summ-exp'>
          <ul className='list-exp'>
            <li className='bullet-exp'>Proactively contributed to boosting patient
            satisfaction scores by serving as a versatile floater, seamlessly transitioning
            between various departments.</li>
            <li className='bullet-exp'>Demonstrated exceptional inventory management skills and
            effectively resolved patient needs both in-person and remotely.</li>
          </ul>
        </p>
      </div>
      
      <div className="content-exp">
        <div className="head-exp">
          <h4 className="position-exp">Material Handler and Team Lead</h4>
          <p className='descrip-exp'>Sharp Corporation | Jan 2019 - Dec 2021</p>
        </div>
        <p className='summ-exp'>
          <ul className='list-exp'>
            <li className='bullet-exp'>Developed and maintained inventory records for 
            drugs, packaging components, and materials.</li>
            <li className='bullet-exp'>Managed bulk, in-process, and finished goods 
            inventory, ensuring optimal stock levels and timely delivery to customers.</li>
          </ul>
        </p>
      </div>

      <br />
      
    </div>
  )
}

export default Experience