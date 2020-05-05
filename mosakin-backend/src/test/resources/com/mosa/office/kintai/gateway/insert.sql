INSERT INTO role_info(role_id,role_name) VALUES (0,'COMMON');
INSERT INTO role_info(role_id,role_name) VALUES (1,'ADMIN');
INSERT INTO user_info(user_id,user_name,role_id) VALUES ('00000001','猛者彰人',0);
INSERT INTO user_info(user_id,user_name,role_id) VALUES ('00000002','猛者明子',1);
INSERT INTO annual_paid_number(user_id,fiscal_year,paid_acquisition_date,carry_forward) VALUES ('00000001',2020,15,1);
INSERT INTO annual_paid_number(user_id,fiscal_year,paid_acquisition_date,carry_forward) VALUES ('00000001',2019,13,2);
INSERT INTO annual_paid_number(user_id,fiscal_year,paid_acquisition_date,carry_forward) VALUES ('00000002',2020,14,3);

