CREATE TABLE employeeTable (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    job_title VARCHAR(255),
    employee_id VARCHAR(255),
    annual_salary VARCHAR(255),
    monthly_expenses VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);




INSERT INTO employeetable (first_name, last_name, job_title,employee_id,annual_salary,monthly_expenses)
VALUES
('Jeremy','Leif','learner','232','$60000','1500'),
('john','Leifer','retired','3251','$53200','1325'),
('kieu','Le','TAM','35235','$125000','3000'),
('brandon','weids','wellsFargo','901902909','$70000','3500'),
('John','fritz','bestbuy','111','$87000','3500'),
('mike','meyers','sql pro','2135','$140000','3890');
