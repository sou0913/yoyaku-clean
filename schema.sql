drop table if exists reservations;

create table reservations (
    date date primary key,
    user_name string not null
);