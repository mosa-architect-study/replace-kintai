INSERT INTO role_info(role_id,role_name) VALUES (0,'general');
INSERT INTO role_info(role_id,role_name) VALUES (1,'admin');
INSERT INTO user_info(user_id,user_name,role_id) VALUES ('00000001','猛者太郎',0);
INSERT INTO annual_paid_number(annual_paid_number_id,user_id,fiscal_year,paid_acquisition_date,carry_forward) VALUES ('j398ryfmow','00000001',2019,15,0);
INSERT INTO paid_info(paid_id,user_id,paid_acquisition_date,paid_time_type,paid_reason) VALUES ('ksh3rofj2d','00000001','2019/12/01','all-day','頭痛が痛いため');
