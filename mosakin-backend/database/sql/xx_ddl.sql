CREATE TABLE user_info (
    user_id VARCHAR(255),
    user_name VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    role_id INTEGER,
    PRIMARY KEY(user_id,role_id)
);

CREATE TABLE role_info (
    role_id INTEGER,
    role_name VARCHAR(255),
    PRIMARY KEY(role_id)
);

CREATE TABLE annual_paid_number (
    paid_id VARCHAR(255),
    user_id VARCHAR(255),
    fiscal_year INTEGER,
    paid_acquisition_date DOUBLE PRECISION,
    carry_forward DOUBLE PRECISION,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(paid_id,user_id)
);

CREATE TABLE paid_info (
    paid_act_id VARCHAR(255),
    user_id VARCHAR(255),
    paid_acquisition_date DATE,
    paid_time_type VARCHAR(8),
    paid_reason VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(paid_act_id,user_id)
);

