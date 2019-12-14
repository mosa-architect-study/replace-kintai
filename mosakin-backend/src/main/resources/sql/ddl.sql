CREATE TABLE m_user (
    user_id VARCHAR(255) NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(user_id)
);

CREATE TABLE t_paid (
    paid_id INT NOT NULL GENERATED ALWAYS AS IDENTITY,
    user_id VARCHAR(255) NOT NULL REFERENCES m_user(user_id),
    acquisition_date DATE,
    time_type INT NOT NULL,
    comment VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(paid_id)
);