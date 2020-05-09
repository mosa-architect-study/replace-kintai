CREATE TABLE role_info (
    role_id INTEGER,
    role_name VARCHAR(255) NOT NULL,
    PRIMARY KEY(role_id)
);

CREATE TABLE user_info (
    user_id VARCHAR(255),
    user_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    role_id INTEGER NOT NULL,
    PRIMARY KEY(user_id),
    FOREIGN KEY (role_id) REFERENCES role_info(role_id)
);

CREATE TABLE annual_paid_number (
    annual_paid_number_id serial,
    user_id VARCHAR(255) NOT NULL,
    fiscal_year INTEGER NOT NULL,
    paid_acquisition_date DOUBLE PRECISION /*年次有給数は手動付与のためNULL許容*/,
    carry_forward DOUBLE PRECISION NOT NULL /*前年度の残日数が自動で入ってくる想定のためNOT NULL*/,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(annual_paid_number_id),
    FOREIGN KEY (user_id) REFERENCES user_info(user_id)
);

CREATE TABLE paid_info (
    paid_id VARCHAR(255),
    user_id VARCHAR(255) NOT NULL,
    paid_acquisition_date DATE NOT NULL,
    paid_time_type VARCHAR(8) NOT NULL,
    paid_reason VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(paid_id),
    FOREIGN KEY (user_id) REFERENCES user_info(user_id)
);

