import React from "react";
import "./styles.css";
import { data } from "../../assets/data/exp";
console.log(">>>>>>>>>>>>>>>>>", data);

function workingExperience() {
  return (
    <div className="exApp">
      <table>
        <tbody>
          <tr>
            <th>Company</th>
            <th>Tittle</th>
            <th>Position</th>
            <th>Location</th>
            <th>Start -End</th>
            <th>Duration</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.company}</td>
                <td>{val.Tittle}</td>
                <td>{val.position}</td>
                <td>{val.location}</td>
                <td>{val.start_End}</td>
                <td>{val.duration}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default workingExperience;
