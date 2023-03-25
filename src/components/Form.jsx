export const Form = (props) => {
  const handleChange = (e) => {
    props.setObj({ ...props.obj, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addAppointment(props.obj);
  };
  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <div className="form-head">GRADIOUS APPOINTMENT BOOKING</div>
        <div className="parent">
          <div className="child">
            <input
              type="text"
              placeholder="Patient Name *"
              name="patientName"
              onChange={handleChange}
              value={props.obj.patientName}
              required
            />
          </div>
          <div className="child">
            <input
              type="tel"
              placeholder="Phone Number *"
              name="phoneNum"
              onChange={handleChange}
              value={props.obj.phoneNum}
              pattern="[0-9]{10}"
              required
            />
          </div>
          <div className="child">
            <input
              type="text"
              placeholder="Doctor Name *"
              name="doctorName"
              onChange={handleChange}
              value={props.obj.doctorName}
              required
            />
          </div>
          <div className="child">
            <select
              name="gender"
              onChange={handleChange}
              value={props.obj.gender}
              required
            >
              <option default value={""}>
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="child">
            <input
              type="date"
              placeholder="Date *"
              name="date"
              onChange={handleChange}
              value={props.obj.date}
              required
            />
          </div>
          <div className="child">
            <select
              name="appointmentType"
              onChange={handleChange}
              value={props.obj.appointmentType}
              required
            >
              <option default value={""}>
                Appointment Type
              </option>
              <option value="Consult">Consult</option>
              <option value="Visit">Visit</option>
            </select>
          </div>
          <div className="child">
            <input
              type="text"
              placeholder="Age *"
              name="age"
              onChange={handleChange}
              value={props.obj.age}
              pattern="[0-9]{1,3}"
              required
            />
          </div>
          <div className="child">
            <select
              name="time"
              onChange={handleChange}
              value={props.obj.time}
              required
            >
              <option default value={""}>
                {" "}
                Time Slot
              </option>
              <option value="09:00 AM - 10:30 AM">09:00 AM - 10:30 AM</option>
              <option value="10:30 AM - 12:00 PM">10:30 AM - 12:00 PM</option>
              <option value="02:00 PM - 03:30 PM">02:00 PM - 03:30 PM</option>
              <option value="03:30 PM - 05:00 PM">03:30 AM - 05:00 PM</option>
              <option value="06:00 PM - 07:30 PM">06:00 PM - 07:30 PM</option>
              <option value="08:00 PM - 09:30 PM">08:00 PM - 09:30 PM</option>
            </select>
          </div>
        </div>
        <div style={{ padding: "0 1% 2%", textAlign: "center" }}>
          <button className="submit">
            {props.flag !== "" ? "Update Appointment" : "Book Appointment"}
          </button>
        </div>
      </form>
    </div>
  );
};
